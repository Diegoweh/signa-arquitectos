"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { NAV } from "./nav";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="flex items-center"
          aria-label="Signa Arquitectos"
        >
          <Image
            src="/logo-signa.webp"
            alt="Signa Arquitectos"
            width={170}
            height={56}
            priority
            className="h-10 w-auto"
          />
        </a>

        {/* desktop nav */}
        <nav className="hidden items-center gap-9 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full border border-gold/60 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold hover:text-ink md:inline-block"
        >
          Cotizar
        </a>

        {/* mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* mobile panel */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ease-out md:hidden ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/5 py-4 text-sm font-medium uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="mt-5 rounded-full bg-gold px-5 py-3 text-center text-[12px] font-semibold uppercase tracking-[0.18em] text-ink transition-colors hover:bg-gold-soft"
          >
            Cotizar
          </a>
        </nav>
      </div>
    </header>
  );
}
