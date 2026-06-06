import type { Metadata, Viewport } from "next";
import { Jost, Marcellus } from "next/font/google";
import "./globals.css";

const SITE_URL = "https://signa-arquitectos.com";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

const marcellus = Marcellus({
  variable: "--font-marcellus",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Signa Arquitectos | Diseño y Construcción en Mazatlán",
    template: "%s | Signa Arquitectos",
  },
  description:
    "Signa Arquitectos — empresa de arquitectura, diseño y construcción en Mazatlán, Sinaloa. Obra residencial, multifamiliar, industrial y proyectos llave en mano con los más altos estándares de calidad desde 2015.",
  applicationName: "Signa Arquitectos",
  authors: [{ name: "Signa Arquitectos" }],
  creator: "Signa Arquitectos",
  publisher: "Signa Arquitectos",
  category: "Arquitectura y Construcción",
  keywords: [
    "arquitectos Mazatlán",
    "constructora Mazatlán",
    "construcción Sinaloa",
    "diseño arquitectónico",
    "proyecto ejecutivo",
    "obra residencial",
    "obra multifamiliar",
    "obra industrial",
    "urbanización",
    "proyectos llave en mano",
  ],
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
  openGraph: {
    title: "Signa Arquitectos | Diseño y Construcción",
    description:
      "Arquitectura, diseño y construcción en Mazatlán, Sinaloa. Calidad y profesionalismo desde 2015.",
    url: SITE_URL,
    siteName: "Signa Arquitectos",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/residencial.webp",
        width: 1280,
        height: 960,
        alt: "Residencia moderna construida por Signa Arquitectos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Signa Arquitectos | Diseño y Construcción",
    description:
      "Arquitectura, diseño y construcción en Mazatlán, Sinaloa desde 2015.",
    images: ["/images/residencial.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0f10",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: "Signa Arquitectos",
  description:
    "Empresa de arquitectura, diseño y construcción. Obra residencial, multifamiliar, industrial y proyectos llave en mano.",
  url: SITE_URL,
  image: `${SITE_URL}/logo-signa.webp`,
  logo: `${SITE_URL}/logo-signa.webp`,
  telephone: "+52-669-220-6638",
  email: "signa.arquitectos@gmail.com",
  foundingDate: "2015",
  areaServed: "Mazatlán, Sinaloa, México",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mazatlán",
    addressRegion: "Sinaloa",
    addressCountry: "MX",
  },
  slogan: "Diseño y Construcción",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${jost.variable} ${marcellus.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
