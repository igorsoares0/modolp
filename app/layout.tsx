import type { Metadata, Viewport } from "next";
import { Archivo, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./lib/site";

// The app's two typefaces (dsgntool app/layout.tsx). No `weight`, so next/font
// emits the variable font; the `wdth` axis is what .font-wide / .type-display-*
// (font-stretch 112–125%) lean on.
const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  display: "swap",
});

// Kickers, prices, captions — always with tabular-nums on numbers.
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const DESCRIPTION =
  "Start from a template or a one-line brief, then adjust type, color and layout like a designer would. Instagram and Pinterest posts, free plan, no watermark.";
const OG_DESCRIPTION =
  "Modo is a fast design editor for social posts — 52 templates, AI briefs and watermark-free export, in your browser.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Modo — Social post design editor, in your browser",
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Modo",
    url: "/",
    title: "Posts that look made, not generated.",
    description: OG_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Posts that look made, not generated.",
    description: OG_DESCRIPTION,
  },
};

// surface-0 in each scheme — the page follows the OS.
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2efe8" },
    { media: "(prefers-color-scheme: dark)", color: "#121211" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
