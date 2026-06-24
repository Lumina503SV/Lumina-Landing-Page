"use client";

import { useState } from "react";
import { navLinks } from "@/data/navigation";
import Image from "next/image";

function Logo() {
  return (
    <a href="#inicio" className="flex items-center gap-8 group my-4">
      <Image src="/brand.png" width={75} height={75} alt="Brand" />
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-border/50 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        <Logo />

        {/* Enlaces escritorio */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-body transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden rounded-full bg-primary px-5 py-4 text-sm font-semibold text-white transition-colors hover:bg-indigo-deep md:inline-block"
        >
          Conversemos
        </a>

        {/* Botón móvil */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg text-heading md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Menú móvil */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-medium text-body hover:text-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Conversemos
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
