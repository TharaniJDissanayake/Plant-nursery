import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/config/business";

// GA4 is only loaded when a measurement ID is configured (see .env.example).
const gaId = process.env.NEXT_PUBLIC_GA_ID;

const description =
  "Buy fresh indoor and outdoor plants online in Sri Lanka. Delivered to your door in Kadawatha, Colombo and nearby. Order via WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS.siteUrl),
  title: {
    default: `${BUSINESS.name} | Plants Delivered in Sri Lanka`,
    template: `%s | ${BUSINESS.name}`,
  },
  description,
  keywords: [
    "plants Kadawatha",
    "plants Sri Lanka",
    "buy plants Colombo",
    "indoor plants delivery Sri Lanka",
    "plant shop Colombo",
    "Monstera Sri Lanka",
    "house plants delivery",
  ],
  openGraph: {
    type: "website",
    locale: "en_LK",
    siteName: BUSINESS.name,
    title: `${BUSINESS.name} | Plants Delivered in Sri Lanka`,
    description,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
