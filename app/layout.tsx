import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider>
        <body className={inter.className}>
          <div>
            <Navbar />
          </div>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
          <div>
            <Footer />
          </div>
        </body>
      </ClerkProvider>
    </html>
  );
}
