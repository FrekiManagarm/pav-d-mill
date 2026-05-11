import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pavillon des Millésimes & SPA — Maison d'Exception à Saint-Émilion",
  description:
    "Hôtel particulier de 800m² au cœur des vignobles de Saint-Émilion. Chambres de prestige, table privée, SPA, piscine et réceptions d'exception.",
  keywords:
    "pavillon des millésimes, chambre hôtes saint-émilion, hôtel de charme bordeaux, réception mariage gironde, spa bordeaux, table privée chef",
  openGraph: {
    title: "Pavillon des Millésimes & SPA",
    description: "Une maison d'exception au cœur des vignobles de Saint-Émilion",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${jost.variable} antialiased`}
    >
      <body className="bg-background text-text overflow-x-hidden">
        <div className="noise-overlay" aria-hidden="true" />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
