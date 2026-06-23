import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumina-landing-page-eight.vercel.app/"),
  title: {
    default: "Lumina — Software a medida para empresas salvadoreñas",
    template: "%s | Lumina",
  },
  description:
    "Desarrollamos software a medida para empresas salvadoreñas: sistemas internos, aplicaciones web y apps móviles.",
  keywords: [
    "software",
    "desarrollo web",
    "CRM",
    "sistemas empresariales",
    "El Salvador",
    "Lumina",
    "HRM/HRIS",
    "EMR/EHR",
    "HIS",
    "Booking System",
    "E-commerce",
  ],
  authors: [{ name: "Lumina" }],
  creator: "Lumina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} min-h-screen flex flex-col antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
