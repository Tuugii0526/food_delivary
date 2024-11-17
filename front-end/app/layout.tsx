import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared-components";
export const metadata: Metadata = {
  title: "Food delivary",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
