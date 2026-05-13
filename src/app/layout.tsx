import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic", "normal"],
});

const siteUrl = "https://pavanrathod.com";
const siteName = "Pavan Rathod";
const siteTitle = "Pavan Rathod — Software Engineer";
const siteDescription =
  "CS student at CSULB building Next.js and Python applications, including a hotel booking platform and AI-powered tools. Seeking Summer 2026 and 2027 SWE internships.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "Pavan Rathod | %s",
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
    images: ["/og.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#faf7f0",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-[#1c1a17] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#faf7f0] focus:shadow-[0_10px_30px_-10px_rgba(28,26,23,0.4)] focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[#1c1a17]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
