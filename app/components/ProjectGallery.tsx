"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Stagger, item } from "./Reveal";

type Project = {
  category: string;
  title: string;
  desc: string;
  images: string[];
};

const PROJECTS: Project[] = [
  {
    category: "Comercial / Hotelería",
    title: "Hotel Fiesta Inn Plaza",
    desc: "Edificación de gran escala con estructura de concreto y acero.",
    images: [
      "/images/fiesta-inn-hotel-plaza.webp",
      "/images/fiesta-inn-hotel-plaza-2.webp",
      "/images/fiesta-inn-hotel-plaza-3.webp",
    ],
  },
  {
    category: "Residencial",
    title: "Residencia Moderna",
    desc: "Vivienda contemporánea con volúmenes limpios y acabados premium.",
    images: [
      "/images/residencial.webp",
      "/images/residencial-2.webp",
      "/images/residencial-3.webp",
    ],
  },
  {
    category: "Multifamiliar",
    title: "Edificio Multifamiliar",
    desc: "Desarrollo vertical de departamentos en zona urbana.",
    images: [
      "/images/multifamiliar.webp",
      "/images/multifamiliar-2.webp",
      "/images/multifamiliar-3.webp",
    ],
  },
  {
    category: "Proyecto Ejecutivo",
    title: "Planos y Supervisión",
    desc: "Proyecto ejecutivo y seguimiento de obra en sitio.",
    images: ["/images/plano-1.webp", "/images/plano-2.webp", "/images/working-2.webp"],
  },
];

export default function ProjectGallery() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const open = (i: number) => {
    setActive(i);
    setSlide(0);
  };
  const close = useCallback(() => setActive(null), []);

  const project = active === null ? null : PROJECTS[active];

  const next = useCallback(() => {
    if (!project) return;
    setSlide((s) => (s + 1) % project.images.length);
  }, [project]);

  const prev = useCallback(() => {
    if (!project) return;
    setSlide((s) => (s - 1 + project.images.length) % project.images.length);
  }, [project]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, next, prev]);

  return (
    <>
      <Stagger className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROJECTS.map((p, i) => (
          <motion.button
            key={p.title}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            onClick={() => open(i)}
            className="group block overflow-hidden rounded-sm bg-white text-left shadow-sm ring-1 ring-ink/5 transition-shadow hover:shadow-xl"
          >
            <div className="relative aspect-4/3 overflow-hidden">
              <Image
                src={p.images[0]}
                alt={p.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-[11px] font-medium text-cream backdrop-blur-sm">
                {p.images.length} fotos
              </span>
            </div>
            <div className="p-5">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                {p.category}
              </span>
              <h3 className="mt-2 font-display text-xl text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{p.desc}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-ink/70 transition-colors group-hover:text-gold">
                Ver galería
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>
          </motion.button>
        ))}
      </Stagger>

      <AnimatePresence>
        {project && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              onClick={close}
              aria-label="Cerrar"
              className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white hover:text-ink"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <motion.div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-16/10 w-full overflow-hidden rounded-sm bg-ink">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={slide}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <Image
                      src={project.images[slide]}
                      alt={`${project.title} — imagen ${slide + 1}`}
                      fill
                      sizes="100vw"
                      className="object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>

                <button
                onClick={prev}
                aria-label="Anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-gold hover:text-ink"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/50 text-white transition-colors hover:bg-gold hover:text-ink"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl text-white">{project.title}</h3>
              </div>
              <span className="shrink-0 text-sm text-white/60">
                {slide + 1} / {project.images.length}
              </span>
            </div>

            <div className="mt-4 flex gap-3">
              {project.images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setSlide(idx)}
                  aria-label={`Imagen ${idx + 1}`}
                  className={`relative h-16 w-24 overflow-hidden rounded-sm ring-2 transition ${
                    idx === slide ? "ring-gold" : "ring-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt="" fill sizes="96px" className="object-cover" />
                </button>
              ))}
            </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
