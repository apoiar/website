const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { defineSecret } = require("firebase-functions/params");
const { Resend } = require("resend");

const RESEND_API_KEY = defineSecret("RESEND_API_KEY");
const OUVIDORIA_TO_EMAIL = defineSecret("OUVIDORIA_TO_EMAIL");
const OUVIDORIA_FROM_EMAIL = defineSecret("OUVIDORIA_FROM_EMAIL");

const VALID_TYPES = new Set(["internal", "external"]);
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FILL_TIME_MS = 1500;

/** @type {Map<string, {count:number, resetAt:number}>} */
const rateLimitStore = new Map();

function cleanOptionalString(value) {
  if (typeof value !== "string") {
    return undefined;
  }

  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : undefined;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[+\d()\-\s]{8,20}$/.test(phone);
}

function parseBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }

  return null;
}

function validatePayload(payload) {
  if (!payload || typeof payload !== "object") {
    return { ok: false };
  }

  const type = payload.type;
  const message = cleanOptionalString(payload.message);
  const name = cleanOptionalString(payload.name);
  const email = cleanOptionalString(payload.email);
  const phone = cleanOptionalString(payload.phone);
  const company = cleanOptionalString(payload.company);
  const startedAt = typeof payload.startedAt === "number" ? payload.startedAt : undefined;

  if (!VALID_TYPES.has(type)) {
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
      type,
      message,
    },
  };
}

function getClientIp(req) {
  const forwardedFor = req.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0].trim();
  }

  const realIp = req.get("x-real-ip");
  return realIp || "unknown";
}

function isRateLimited(ip) {
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

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildHtml(payload) {
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

exports.ouvidoria = onRequest(
  {
    region: "us-east1",
    invoker: "public",
    secrets: [RESEND_API_KEY, OUVIDORIA_TO_EMAIL, OUVIDORIA_FROM_EMAIL],
  },
  async (req, res) => {
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.set("Access-Control-Allow-Methods", "POST, OPTIONS");

    if (req.method === "OPTIONS") {
      res.status(204).send("");
      return;
    }

    if (req.method !== "POST") {
      res.status(405).json({ ok: false, error: "Metodo nao permitido." });
      return;
    }

    const resendApiKey = RESEND_API_KEY.value();
    const toEmail = OUVIDORIA_TO_EMAIL.value();
    const fromEmail = OUVIDORIA_FROM_EMAIL.value();

    if (!resendApiKey || !toEmail || !fromEmail) {
      res.status(503).json({ ok: false, error: "Servico de envio indisponivel no momento." });
      return;
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
      res.status(429).json({
        ok: false,
        error: "Muitas tentativas. Aguarde alguns minutos e tente novamente.",
      });
      return;
    }

    const body = parseBody(req);
    const parsed = validatePayload(body);

    if (!parsed.ok) {
      res.status(400).json({ ok: false, error: "Dados invalidos." });
      return;
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
        logger.error("[ouvidoria] resend error", error);
        res.status(500).json({
          ok: false,
          error: "Servico de envio rejeitou a mensagem. Verifique configuracao de dominio/remetente.",
        });
        return;
      }

      res.status(200).json({ ok: true });
    } catch (error) {
      logger.error("[ouvidoria] unexpected error", error);
      res.status(500).json({ ok: false, error: "Erro ao enviar denuncia. Tente novamente." });
    }
  },
);
