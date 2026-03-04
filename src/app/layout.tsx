import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
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
    <html lang="tr" className="dark">
      <body className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground selection:bg-accent/30 selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
