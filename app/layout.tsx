import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/config/business";

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.name} | Plants Delivered in Sri Lanka`,
    template: `%s | ${BUSINESS.name}`,
  },
  description:
    "Buy fresh indoor and outdoor plants online in Sri Lanka. Delivered to your door in Colombo. Order via WhatsApp.",
  keywords: [
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
    description:
      "Buy fresh indoor and outdoor plants online in Sri Lanka. Delivered to your door in Colombo. Order via WhatsApp.",
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
    </html>
  );
}
