import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "@/components/shared-components";
import { Toaster } from "@/components/ui/sonner";
import { getCategories, getUser } from "@/lib/data";
import { ContextProvider } from "@/components/context/ContextProvider";
import { cookies } from "next/headers";
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
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = await getUser(token);
  const res = await getCategories();
  return (
    <html lang="en">
      <body>
        <ContextProvider categoryResponse={res} user={user}>
          {!user.userId || user.role == "USER" ? (
            <>
              <Header />
              {children}
              <Footer />
            </>
          ) : (
            admin
          )}
          <Toaster position="top-right" />
        </ContextProvider>
      </body>
    </html>
  );
}
