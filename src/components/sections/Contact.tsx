"use client";

import { useState } from "react";
import { site } from "@/data/navigation";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    empresa: "",
    email: "",
    mensaje: "",
  });

  const handleSubmit = () => {
    const subject = encodeURIComponent(
      `Proyecto de ${form.empresa || form.nombre || "nuevo cliente"}`,
    );
    const body = encodeURIComponent(
      `Nombre: ${form.nombre}\nEmpresa: ${form.empresa}\nCorreo: ${form.email}\n\n${form.mensaje}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  };

  const wa = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    "Hola Lumina, me interesa conversar sobre un proyecto.",
  )}`;

  const field =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition-colors focus:border-secondary focus:bg-white/10";

  return (
    <section id="contacto" className="px-6 py-24 lg:py-28">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-indigo-deep">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16 lg:p-16">
          {/* Lado izquierdo */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-secondary">
              Contacto
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Cuéntanos qué quieres construir
            </h2>
            <p className="mt-5 text-lg text-indigo-mist/90">
              Una primera conversación es gratis y sin compromiso. Nos cuentas
              tu idea o tu problema y te decimos cómo lo resolveríamos.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white transition-colors hover:text-secondary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="currentColor"
                    aria-hidden
                  >
                    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2Zm5.5 14.1c-.2.6-1.2 1.2-1.7 1.2-.4 0-1 .1-3.3-.9-2.7-1.2-4.4-4-4.5-4.2-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.1c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.4 0 .5l-.4.6c-.2.2-.3.3-.1.6.2.3.8 1.3 1.7 2 .9.7 1.3 1 1.6 1 .2 0 .4 0 .5-.2l.7-.9c.2-.2.4-.2.6-.1l1.9.9c.3.1.4.2.5.3.1.3.1.7-.1 1.3Z" />
                  </svg>
                </span>
                <span className="font-medium">Escríbenos por WhatsApp</span>
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 text-white transition-colors hover:text-secondary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-5 w-5"
                    fill="none"
                    aria-hidden
                  >
                    <path
                      d="M3 7l9 6 9-6M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="font-medium">{site.email}</span>
              </a>
            </div>
          </div>

          {/* Formulario */}
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                className={field}
                placeholder="Tu nombre"
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              />
              <input
                className={field}
                placeholder="Tu empresa"
                value={form.empresa}
                onChange={(e) => setForm({ ...form, empresa: e.target.value })}
              />
            </div>
            <input
              type="email"
              className={field}
              placeholder="Correo electrónico"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <textarea
              rows={4}
              className={`${field} resize-none`}
              placeholder="¿Qué quieres construir?"
              value={form.mensaje}
              onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full rounded-xl bg-secondary px-6 py-3.5 font-semibold text-ink transition-transform hover:scale-[1.01] active:scale-100"
            >
              Enviar mensaje
            </button>
            <p className="text-center text-xs text-indigo-mist/60">
              Te responderemos lo antes posible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
