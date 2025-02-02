import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"
import { AppWrapper } from "../context/main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "link-sharing-app",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
