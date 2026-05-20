import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";

import "./globals.css";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKY ONE Solution | Automotive Parts Logistics & Quality Inspection",
  description:
    "SKY ONE Solution — automotive parts logistics, warehouse control, quality inspection, and 3rd party rework services in Montgomery, Alabama.",
  metadataBase: new URL("https://sky1usa.com"),
  openGraph: {
    title: "SKY ONE Solution",
    description:
      "Automotive parts logistics & quality inspection. Warehouse, QC, and 3rd party services in Montgomery, Alabama.",
    url: "https://sky1usa.com",
    siteName: "SKY ONE Solution",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plexSans.variable} ${plexMono.variable}`}
    >
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#070b14" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
