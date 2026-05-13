import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://pavanrathod.com";
const siteName = "Pavan Rathod";
const siteTitle = "Pavan Rathod | Portfolio in Progress";
const siteDescription =
  "Placeholder-safe premium animated portfolio MVP for Pavan Rathod, built with Next.js, TypeScript, and Tailwind CSS.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Pavan Rathod",
  },
  description: siteDescription,
  applicationName: siteName,
  authors: [{ name: "Pavan Rathod" }],
  creator: "Pavan Rathod",
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName,
    title: siteTitle,
    description: siteDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@pavanrathod",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#02040a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950 focus:shadow-[0_0_24px_rgba(103,232,249,0.45)] focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-cyan-300"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
