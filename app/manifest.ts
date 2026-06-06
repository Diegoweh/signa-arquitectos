import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Signa Arquitectos | Diseño y Construcción",
    short_name: "Signa Arquitectos",
    description:
      "Arquitectura, diseño y construcción en Mazatlán, Sinaloa. Obra residencial, multifamiliar e industrial desde 2015.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f10",
    theme_color: "#0f0f10",
    lang: "es-MX",
    icons: [
      {
        src: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
