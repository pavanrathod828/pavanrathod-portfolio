import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const siteUrl = "https://pavanrathod.com";
const siteName = "Pavan Rathod";
const siteTitle = "Pavan Rathod";
const siteDescription =
  "Software Engineer Intern at HypeOn AI. Open to Summer 2027 SWE internships. Applying to MS CS (AI/ML) for Fall 2028.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
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
    // TODO(week-8): generate public/og-image.png at 1200x630.
    // Fraunces headline ("Pavan Rathod" or similar) on bg #0a0a0a,
    // teal accent, name + role line. Do not auto-generate.
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/og-image.png"],
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
  themeColor: "#0a0a0a",
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
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-full focus:bg-[var(--amber)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--bg)] focus:outline focus:outline-2 focus:outline-offset-4 focus:outline-[var(--amber)]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
