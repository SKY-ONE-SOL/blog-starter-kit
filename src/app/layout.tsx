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
  title: "SKY ONE SOLUTION | Automotive Industry Total Solution",
  description:
    "SKY ONE SOLUTION — automotive parts warehousing, parts assembly, logistics, QC & inspection, and supply to OEM assembly plants in Montgomery, Alabama.",
  metadataBase: new URL("https://sky1usa.com"),
  openGraph: {
    title: "SKY ONE SOLUTION | Automotive Industry Total Solution",
    description:
      "Automotive parts logistics — warehouse, assembly, inspection, and supply to OEM vehicle assembly plants in Montgomery, Alabama.",
    url: "https://sky1usa.com",
    siteName: "SKY ONE SOLUTION",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
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
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#070b14" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
