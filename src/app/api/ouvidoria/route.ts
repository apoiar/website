import { NextResponse } from "next/server";
import { Resend } from "resend";

type OuvidoriaType = "internal" | "external";

type OuvidoriaPayload = {
  name?: string;
  email?: string;
  phone?: string;
  type: OuvidoriaType;
  message: string;
};

const VALID_TYPES: OuvidoriaType[] = ["internal", "external"];

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

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      type: type as OuvidoriaType,
      message,
    },
  };
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
