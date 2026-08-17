import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zynis Hub | Engenharia Digital & IA",
  description: "Construímos infraestruturas web de alta performance e automações inteligentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${spaceGrotesk.className} bg-neutral-950 text-neutral-200 antialiased selection:bg-blue-500 selection:text-white`}>
        <Header />
        {children}
      </body>
    </html>
  );
}