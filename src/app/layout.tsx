import NavBar from "@/components/NavBar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Suspense } from "react";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Youtube",
  description: "Youtube Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} min-h-screen flex flex-col`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
