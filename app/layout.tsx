import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter_Tight } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://modo.app"),
  title: "Modo — Browser-Based Design Editor for Social Media",
  description:
    "Create stunning Instagram posts, stories, Pinterest graphics, and marketing visuals in your browser. No download. No monthly fees. Try Modo free.",
  openGraph: {
    title: "Design beautiful social media graphics — in minutes.",
    description:
      "Modo is the fast, browser-based design editor. Templates, assets, layers, and high-res export — all without leaving your browser.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0c0c",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${interTight.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
