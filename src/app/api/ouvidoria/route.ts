import { NextResponse } from "next/server";
import { Resend } from "resend";

type OuvidoriaType = "internal" | "external";

type OuvidoriaPayload = {
  name?: string;
  email?: string;
  phone?: string;
  type: OuvidoriaType;
  message: string;
  company?: string;
  startedAt?: number;
};

const VALID_TYPES: OuvidoriaType[] = ["internal", "external"];
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FILL_TIME_MS = 1500;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function cleanOptionalString(value: unknown) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[+\d()\-\s]{8,20}$/.test(phone);
}

function validatePayload(payload: unknown): { ok: true; data: OuvidoriaPayload } | { ok: false } {
  if (!payload || typeof payload !== "object") {
    return { ok: false };
  }

  const raw = payload as Record<string, unknown>;
  const type = raw.type;
  const message = cleanOptionalString(raw.message);
  const name = cleanOptionalString(raw.name);
  const email = cleanOptionalString(raw.email);
  const phone = cleanOptionalString(raw.phone);
  const company = cleanOptionalString(raw.company);
  const startedAt = typeof raw.startedAt === "number" ? raw.startedAt : undefined;

  if (!VALID_TYPES.includes(type as OuvidoriaType)) {
    return { ok: false };
  }

  if (!message) {
    return { ok: false };
  }

  if (email && !isValidEmail(email)) {
    return { ok: false };
  }

  if (phone && !isValidPhone(phone)) {
    return { ok: false };
  }

  if (company) {
    return { ok: false };
  }

  if (!startedAt || Number.isNaN(startedAt)) {
    return { ok: false };
  }

  if (Date.now() - startedAt < MIN_FILL_TIME_MS) {
    return { ok: false };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      type: type as OuvidoriaType,
      message,
      company,
      startedAt,
    },
  };
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }

  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimitStore.get(ip);

  if (!current || now > current.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  current.count += 1;
  rateLimitStore.set(ip, current);
  return false;
}

function isAllowedOrigin(request: Request) {
  const configured = process.env.OUVIDORIA_ALLOWED_ORIGINS;
  if (!configured) {
    return true;
  }

  const origin = request.headers.get("origin");
  if (!origin) {
    return true;
  }

  const allowed = configured
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);

  return allowed.includes(origin);
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(payload: OuvidoriaPayload) {
  const safeMessage = escapeHtml(payload.message).replace(/\n/g, "<br/>");

  return `
    <h2>Nova denuncia de Ouvidoria</h2>
    <p><strong>Tipo:</strong> ${payload.type === "internal" ? "Interna" : "Externa"}</p>
    <p><strong>Nome:</strong> ${payload.name ? escapeHtml(payload.name) : "Nao informado"}</p>
    <p><strong>Email:</strong> ${payload.email ? escapeHtml(payload.email) : "Nao informado"}</p>
    <p><strong>Telefone:</strong> ${payload.phone ? escapeHtml(payload.phone) : "Nao informado"}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${safeMessage}</p>
  `;
}

export async function POST(request: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.OUVIDORIA_TO_EMAIL;
  const fromEmail = process.env.OUVIDORIA_FROM_EMAIL;

  if (!resendApiKey || !toEmail || !fromEmail) {
    return NextResponse.json(
      { ok: false, error: "Servico de envio indisponivel no momento." },
      { status: 503 },
    );
  }

  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, error: "Origem nao autorizada." }, { status: 403 });
  }

  const clientIp = getClientIp(request);
  if (isRateLimited(clientIp)) {
    return NextResponse.json(
      { ok: false, error: "Muitas tentativas. Aguarde alguns minutos e tente novamente." },
      { status: 429 },
    );
  }

  let json: unknown;

  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Payload invalido." }, { status: 400 });
  }

  const parsed = validatePayload(json);

  if (!parsed.ok) {
    return NextResponse.json({ ok: false, error: "Dados invalidos." }, { status: 400 });
  }

  try {
    const resend = new Resend(resendApiKey);

    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `[Ouvidoria] Denuncia ${parsed.data.type === "internal" ? "interna" : "externa"}`,
      html: buildHtml(parsed.data),
      replyTo: parsed.data.email,
    });

    if (error) {
      console.error("[ouvidoria] resend error:", error);
      return NextResponse.json(
        { ok: false, error: "Servico de envio rejeitou a mensagem. Verifique configuracao de dominio/remetente." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[ouvidoria] unexpected error:", error);
    return NextResponse.json(
      { ok: false, error: "Erro ao enviar denuncia. Tente novamente." },
      { status: 500 },
    );
  }
}
