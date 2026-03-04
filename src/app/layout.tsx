import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CARMEGA | Premium Oto Galeri - Maltepe İstanbul",
  description: "İdealtepe Maltepe'de kaliteli ve güvenilir araçların adresi. CARMEGA ile hayalinizdeki araca premium hizmetle ulaşın.",
  keywords: ["Maltepe oto galeri", "İstanbul ikinci el araba", "İstanbul araç alım satım", "CARMEGA"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
