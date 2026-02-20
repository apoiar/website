"use client";

import { FormEvent, useRef, useState } from "react";
import type { ContentSchema } from "@/config/content";

type OuvidoriaFormContent = ContentSchema["ouvidoria"];

type FormState = {
  name: string;
  email: string;
  phone: string;
  type: "internal" | "external" | "";
  message: string;
};

type SubmitStatus = "idle" | "success" | "error";

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  type: "",
  message: "",
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return /^[+\d()\-\s]{8,20}$/.test(phone);
}

export function OuvidoriaForm({ content }: { content: OuvidoriaFormContent }) {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [typeError, setTypeError] = useState<string | null>(null);
  const [company, setCompany] = useState("");
  const startedAtRef = useRef<number>(Date.now());

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus("idle");
    setErrorMessage(null);
    setTypeError(null);

    const trimmedEmail = form.email.trim();
    const trimmedPhone = form.phone.trim();
    const trimmedMessage = form.message.trim();

    if (!form.type) {
      setSubmitStatus("error");
      setTypeError(`${content.typeLabel} e obrigatorio.`);
      return;
    }

    if (!trimmedMessage) {
      setSubmitStatus("error");
      setErrorMessage(content.errorMessage);
      return;
    }

    if (trimmedEmail && !isValidEmail(trimmedEmail)) {
      setSubmitStatus("error");
      setErrorMessage(content.errorMessage);
      return;
    }

    if (trimmedPhone && !isValidPhone(trimmedPhone)) {
      setSubmitStatus("error");
      setErrorMessage(content.errorMessage);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ouvidoria", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name.trim() || undefined,
          email: trimmedEmail || undefined,
          phone: trimmedPhone || undefined,
          type: form.type,
          message: trimmedMessage,
          company,
          startedAt: startedAtRef.current,
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null;
        throw new Error(payload?.error || content.errorMessage);
      }

      setSubmitStatus("success");
      setForm(INITIAL_STATE);
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(error instanceof Error ? error.message : content.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-stone-700">
          {content.nameLabel}
          <input
            type="text"
            value={form.name}
            onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            placeholder={content.namePlaceholder}
            className="rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-stone-700">
          {content.emailLabel}
          <input
            type="email"
            value={form.email}
            onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
            placeholder={content.emailPlaceholder}
            className="rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10"
          />
        </label>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm font-semibold text-stone-700">
          {content.phoneLabel}
          <input
            type="tel"
            value={form.phone}
            onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            placeholder={content.phonePlaceholder}
            className="rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10"
          />
        </label>

        <fieldset className="flex flex-col gap-2 text-sm font-semibold text-stone-700">
          <legend className="mb-1">
            {content.typeLabel} <span className="text-red-600">*</span>
          </legend>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setForm((current) => ({ ...current, type: "internal" }));
                setTypeError(null);
              }}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                form.type === "internal"
                  ? "border-lime-500 bg-lime-50 text-lime-700 shadow-sm"
                  : "border-stone-200 bg-stone-50/50 text-stone-700 hover:border-lime-300 hover:bg-lime-50/40"
              }`}
              aria-pressed={form.type === "internal"}
            >
              {content.typeInternalLabel}
            </button>
            <button
              type="button"
              onClick={() => {
                setForm((current) => ({ ...current, type: "external" }));
                setTypeError(null);
              }}
              className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                form.type === "external"
                  ? "border-lime-500 bg-lime-50 text-lime-700 shadow-sm"
                  : "border-stone-200 bg-stone-50/50 text-stone-700 hover:border-lime-300 hover:bg-lime-50/40"
              }`}
              aria-pressed={form.type === "external"}
            >
              {content.typeExternalLabel}
            </button>
          </div>
          {typeError ? <p className="text-xs font-medium text-red-600">{typeError}</p> : null}
        </fieldset>
      </div>

      <label className="flex flex-col gap-2 text-sm font-semibold text-stone-700">
        {content.messageLabel}
        <textarea
          value={form.message}
          onChange={(event) => setForm((current) => ({ ...current, message: event.target.value }))}
          placeholder={content.messagePlaceholder}
          rows={6}
          required
          className="resize-none rounded-xl border border-stone-200 bg-stone-50/50 px-4 py-3 text-sm text-stone-800 outline-none transition focus:border-lime-500 focus:ring-4 focus:ring-lime-500/10"
        />
      </label>

      <label className="hidden" aria-hidden="true">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </label>

      <p className="text-xs text-stone-500">{content.confidentialityNote}</p>

      {submitStatus === "success" ? (
        <p className="rounded-xl border border-lime-200 bg-lime-50 px-4 py-3 text-sm font-medium text-lime-700">
          {content.successMessage}
        </p>
      ) : null}
      {submitStatus === "error" ? (
        <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {errorMessage || content.errorMessage}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-lime-500 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-lime-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? content.submittingLabel : content.submitLabel}
      </button>
    </form>
  );
}
