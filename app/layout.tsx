import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "./lib/site";

// Chrome: one sans for display, body and UI. Weight tops out at 600.
const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Numeric: always paired with tabular-nums. 600 is here for the pricing
// figures — without it the browser fakes the weight and the digits smear.
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Document font, not a UI font — it only renders inside the editor mock's
// artwork, where a serif is what makes the design read as a real design.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Modo — AI Design Editor for Social Media, in Your Browser",
  description:
    "Describe your post and Modo designs it — templates, copy, palette and type. Instagram, Stories and Pinterest graphics in minutes. Free plan, no watermark.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    siteName: "Modo",
    url: "/",
    title: "Describe the post. Get the design.",
    description:
      "Modo is the fast, AI-powered design editor for social media. Templates, assets, layers and watermark-free export — all in your browser.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Describe the post. Get the design.",
    description:
      "Modo is the fast, AI-powered design editor for social media. Templates, assets, layers and watermark-free export — all in your browser.",
  },
};

// The landing is a light-first page and does not follow the OS scheme, so
// there is one theme-color, not a pair. (surface-0, light.)
export const viewport: Viewport = {
  themeColor: "#eceae5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${instrumentSans.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-body">{children}</body>
    </html>
  );
}
