import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto-src",
});

export const metadata: Metadata = {
  title: "Eduarda Saleth",
  description: "Portfólio de Eduarda Saleth, desenvolvedora Full Stack com mais de 4 anos de experiência em aplicações web com React, Next.js, TypeScript e C# .NET.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Sem JavaScript o IntersectionObserver nunca roda: mostra tudo. */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; animation: none !important; }`}</style>
        </noscript>
      </head>
      <body className={`${poppins.variable} ${roboto.variable}`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
