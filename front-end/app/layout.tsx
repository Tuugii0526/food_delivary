import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared-components";
import { Toaster } from "@/components/ui/sonner";
import { getCategories } from "@/lib/data";
import { ContextProvider } from "@/components/context/ContextProvider";
export const metadata: Metadata = {
  title: "Food delivary",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
  admin,
}: Readonly<{
  children: React.ReactNode;
  admin: React.ReactNode;
}>) {
  const res = await getCategories();
  const { categories, message } = res;
  const isUser = true;
  return (
    <html lang="en">
      <body>
        <ContextProvider categories={categories} message={message}>
          {isUser ? (
            <>
              <Header />
              {children}
              <Footer />
            </>
          ) : (
            admin
          )}
          <Toaster />
        </ContextProvider>
      </body>
    </html>
  );
}
