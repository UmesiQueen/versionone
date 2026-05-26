import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { AppPreloader } from "@/components/providers/app-preloader";
import { Toaster } from "@/components/ui/sonner";
import { FloatingWhatsApp } from "@/components/ui/whatsapp-btn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "VersionOne — Your Gateway to Global Opportunities",
    template: "%s | VersionOne",
  },
  description:
    "VersionOne helps individuals, families, professionals, corporate organizations, and investors navigate immigration, travel, study, and investment migration — with expert guidance at every step.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        <Script id="v1-preloader-bootstrap" strategy="beforeInteractive">
          {`document.documentElement.classList.add('v1-preloading')`}
        </Script>
        <AppPreloader />
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
