// app/layout.tsx
import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Mini Instagram",
  description: "Rede social de fotos usando Unsplash API",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-gray-100">{children}</body>
    </html>
  );
}
