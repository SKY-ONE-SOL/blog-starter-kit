import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";

import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SKY ONE Solution | Automotive Total Solution",
  description:
    "SKY ONE Solution provides total solution services for the automobile industry — warehouse control, logistics, inspection, rework, and port services in Montgomery, Alabama.",
  metadataBase: new URL("https://sky1usa.com"),
  openGraph: {
    title: "SKY ONE Solution",
    description:
      "Total solution for the automobile industry. Warehouse, logistics, inspection & rework in Montgomery, Alabama.",
    url: "https://sky1usa.com",
    siteName: "SKY ONE Solution",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${jakarta.variable} ${dmSans.variable}`}>
      <head>
        <link rel="icon" href="/favicon/favicon.ico" />
        <meta name="theme-color" content="#121f57" />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
