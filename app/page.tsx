import Image from "next/image";
import ProjectGallery from "./components/ProjectGallery";
import Header from "./components/Header";
import { NAV } from "./components/nav";
import { Reveal } from "./components/Reveal";

/* ---------------------------------------------------------------- data --- */

const SERVICES = [
  {
    title: "Diseño Arquitectónico",
    desc: "Proyectos que traducen la idea del cliente en espacios funcionales y de identidad propia.",
  },
  {
    title: "Proyecto Ejecutivo",
    desc: "Planos, especificaciones y presupuestación detallada para construir con certeza.",
  },
  {
    title: "Obra Residencial",
    desc: "Casas y residencias a la medida, con acabados de alto valor y atención al detalle.",
  },
  {
    title: "Obra Multifamiliar y Vertical",
    desc: "Edificación vertical y desarrollos multifamiliares con estándares de seguridad y calidad.",
  },
  {
    title: "Obra Industrial y Comercial",
    desc: "Instalaciones industriales, comerciales y obra pública ejecutadas a tiempo.",
  },
  {
    title: "Urbanización y Paisajismo",
    desc: "Obra civil, urbanización, jardinería y equipamiento urbano integral.",
  },
  {
    title: "Supervisión de Obra",
    desc: "Personal multidisciplinario que cuida administración, seguridad y calidad.",
  },
  {
    title: "Proyectos Llave en Mano",
    desc: "Acompañamos desde la proyección de la idea hasta el 100% de la ejecución.",
  },
];

const VALUES = [
  "Compromiso",
  "Profesionalismo",
  "Honestidad",
  "Dedicación",
  "Trato justo",
  "Trabajo en equipo",
];

const PHONE = "6692206638";
const EMAIL = "contacto@signaarquitectos.com";

/* ----------------------------------------------------------------- page --- */

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Projects />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ----------------------------------------------------------------- hero --- */

function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center">
      <Image
        src="/images/working.webp"
        alt="Obra en construcción de Signa Arquitectos"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-background/30" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-2xl">
          <Reveal delay={0.1}>
            <p className="mb-6 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="gold-rule" />
              Diseño y Construcción · Desde 2015
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="font-display text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl lg:text-7xl">
              Construimos espacios que{" "}
              <span className="text-gold">perduran</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/75">
              Empresa de arquitectura, diseño y construcción en Mazatlán,
              Sinaloa. Llevamos tu proyecto desde la idea hasta la entrega, con
              los más altos estándares de calidad, seguridad y servicio.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-soft"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-foreground/25 px-8 py-3.5 text-sm font-semibold uppercase tracking-[0.15em] text-foreground transition-colors hover:border-gold hover:text-gold"
              >
                Contáctanos
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- about --- */

function About() {
  return (
    <section id="nosotros" className="scroll-mt-20 bg-cream py-24 text-ink lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal dir="left" className="relative aspect-4/5 overflow-hidden rounded-sm">
          <Image
            src="/images/residencial.webp"
            alt="Residencia moderna construida por Signa Arquitectos"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal dir="right">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="gold-rule" />
            Quiénes Somos
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
            Un equipo profesional comprometido con su proyecto
          </h2>
          <p className="mt-6 text-base leading-relaxed text-ink/70">
            Somos una empresa privada dedicada a atender las necesidades
            relacionadas con la construcción: desde el diseño arquitectónico y
            el proyecto ejecutivo, hasta la supervisión de obra residencial,
            multifamiliar, industrial, paisajismo y urbanización.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/70">
            En cada trabajo asignamos un grupo multidisciplinario especializado
            para el adecuado manejo de la administración, supervisión, seguridad
            y calidad. Eso nos permite entregar siempre a tiempo y dentro del
            presupuesto establecido.
          </p>

          <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            <Stat value="2015" label="Año de origen" />
            <Stat value="100%" label="Clientes satisfechos" />
            <Stat value="∞" label="Esquemas de contratación" />
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <dt className="font-display text-4xl font-medium text-gold">{value}</dt>
      <dd className="mt-1 text-[13px] leading-snug text-ink/60">{label}</dd>
    </div>
  );
}

/* ------------------------------------------------------------- services --- */

function Services() {
  return (
    <section id="servicios" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
            <span className="gold-rule" />
            Servicios
          </p>
          <h2 className="font-display text-4xl font-medium leading-tight lg:text-5xl">
            Soluciones integrales de construcción
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-white/8 bg-white/8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={(i % 4) * 0.08}
              className="group bg-background p-8 transition-colors hover:bg-white/[0.03]"
            >
              <span className="font-display text-2xl text-gold/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/60">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- projects --- */

function Projects() {
  return (
    <section id="proyectos" className="scroll-mt-20 bg-cream py-24 text-ink lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              <span className="gold-rule" />
              Proyectos
            </p>
            <h2 className="font-display text-4xl font-medium leading-tight text-ink lg:text-5xl">
              Obra que habla por nosotros
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink/60">
            Una muestra de los desarrollos residenciales, multifamiliares y
            comerciales que hemos llevado a la realidad.
          </p>
        </Reveal>

        <ProjectGallery />
      </div>
    </section>
  );
}

/* ----------------------------------------------------------- philosophy --- */

function Philosophy() {
  return (
    <section id="filosofia" className="scroll-mt-20 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-3">
          <Reveal delay={0}>
            <Pillar
              title="Misión"
              text="Cumplir y lograr la satisfacción de nuestros clientes al ofrecer los más altos estándares de calidad, seguridad y servicio en todos los trabajos que realizamos."
            />
          </Reveal>
          <Reveal delay={0.12}>
            <Pillar
              title="Visión"
              text="Ser una compañía de ingeniería, arquitectura y construcción con crecimiento rentable y sostenido, reconocida por la ejecución de trabajos con profesionalismo, calidad y seguridad."
            />
          </Reveal>
          <Reveal delay={0.24}>
            <Pillar
              title="Filosofía"
              text="Buscar la excelencia y el desarrollo profesional de nuestra gente mediante capacitación continua, superando año con año nuestras expectativas."
            />
          </Reveal>
        </div>

        <Reveal className="mt-16 flex flex-col items-start gap-8 rounded-sm border border-white/8 bg-white/[0.02] p-10 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
              Nuestros Valores
            </p>
            <h3 className="font-display text-3xl font-medium">
              Lo que rige cada decisión
            </h3>
          </div>
          <ul className="flex flex-wrap gap-3">
            {VALUES.map((v) => (
              <li
                key={v}
                className="rounded-full border border-gold/30 px-5 py-2 text-sm font-medium text-foreground/85"
              >
                {v}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Pillar({ title, text }: { title: string; text: string }) {
  return (
    <div className="border-t border-gold/40 pt-6">
      <h3 className="font-display text-2xl font-medium text-foreground">
        {title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-foreground/65">{text}</p>
    </div>
  );
}

/* -------------------------------------------------------------- contact --- */

function Contact() {
  return (
    <section id="contacto" className="relative scroll-mt-20 overflow-hidden">
      <Image
        src="/images/fiesta-inn-hotel-plaza-2.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-background/90" />

      <Reveal className="relative mx-auto max-w-4xl px-6 py-24 text-center lg:py-32">
        <p className="mb-5 inline-flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.3em] text-gold">
          Contacto
        </p>
        <h2 className="font-display text-4xl font-medium leading-tight lg:text-5xl">
          Hagamos realidad tu próximo proyecto
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/70">
          Corresponsabilidad con nuestros clientes desde la proyección de la
          idea hasta el 100% de la ejecución. Cuéntenos qué tiene en mente.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <ContactCard label="Teléfono" value={PHONE} href={`tel:${PHONE}`} />
          <ContactCard label="Correo" value={EMAIL} href={`mailto:${EMAIL}`} />
          <ContactCard label="Ubicación" value="Mazatlán, Sinaloa" />
        </div>

        <a
          href={`https://wa.me/52${PHONE}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-block rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-[0.15em] text-ink transition-colors hover:bg-gold-soft"
        >
          Solicitar Cotización
        </a>
      </Reveal>
    </section>
  );
}

function ContactCard({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
        {label}
      </p>
      <p className="mt-2 text-sm text-foreground/85 break-words">{value}</p>
    </>
  );
  const cls =
    "block rounded-sm border border-white/10 bg-white/[0.03] p-6 transition-colors";
  return href ? (
    <a href={href} className={`${cls} hover:border-gold/50`}>
      {inner}
    </a>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

/* --------------------------------------------------------------- footer --- */

function Footer() {
  return (
    <footer className="border-t border-white/8 bg-background py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center md:flex-row md:text-left lg:px-10">
        <Image
          src="/logo-signa.webp"
          alt="Signa Arquitectos"
          width={150}
          height={48}
          className="h-9 w-auto"
        />
        <nav className="flex flex-wrap justify-center gap-6">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[12px] font-medium uppercase tracking-[0.15em] text-foreground/55 transition-colors hover:text-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-[12px] text-foreground/40">
          © {new Date().getFullYear()} Signa Arquitectos
        </p>
      </div>
    </footer>
  );
}
