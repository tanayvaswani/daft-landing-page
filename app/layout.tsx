import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daft: The Distributed Python Dataframe",
  description: "Documentation -- getdaft.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-[#0F1116]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
