import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const heading = Cormorant_Garamond({
  variable: "--font-pav-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const body = Geist({
  variable: "--font-pav-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavillon des Millésimes & SPA | Maison d'hôtes à Saint-Émilion",
  description:
    "Maison d'hôtes de charme à Lussac-Saint-Émilion avec chambres, studios, SPA privatif, piscine, table d'hôtes, séminaires et réceptions.",
  keywords: [
    "Pavillon des Millésimes",
    "chambre d'hôtes Saint-Émilion",
    "SPA privatif Gironde",
    "table d'hôtes Lussac",
    "séminaire Saint-Émilion",
  ],
  openGraph: {
    title: "Pavillon des Millésimes & SPA",
    description:
      "Une maison d'hôtes de prestige au coeur du vignoble de Saint-Émilion.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.pavillon-des-millesimes.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${heading.variable} ${body.variable}`}>
      <body>
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
