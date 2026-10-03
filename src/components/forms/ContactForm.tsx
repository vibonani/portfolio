"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!res.ok) throw new Error();
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground">
          Nome
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          maxLength={20}
          placeholder="(00) 00000-0000"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted/60 focus:border-accent"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-foreground">
          Assunto
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue="Oportunidade profissional"
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
        >
          <option>Oportunidade profissional</option>
          <option>Projeto freelance</option>
          <option>Outro</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
        />
      </div>

      {/* Armadilha para robôs: invisível para pessoas */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      <Button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar mensagem"}
      </Button>

      {status === "sent" && (
        <p role="status" className="text-sm text-muted">
          Agradecemos o seu contato, em até 48 horas retornaremos.
        </p>
      )}
      {status === "error" && (
        <p role="alert" className="text-sm text-accent">
          Não foi possível enviar agora. Tente novamente em instantes.
        </p>
      )}
    </form>
  );
}
