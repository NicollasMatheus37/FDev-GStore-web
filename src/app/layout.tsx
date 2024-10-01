import type { Metadata } from "next";
import "../assets/globals.css";
import React from 'react';
import { Montserrat } from 'next/font/google';

const font = Montserrat({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "GStore",
  description: "Versão completa da loja GStore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
