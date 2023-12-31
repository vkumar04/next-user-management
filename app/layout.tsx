import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation/Navigation";
import { getServerSession } from "next-auth";
import SessionProvider from "@/context/SessionProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en" data-theme="corporate">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navigation />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
