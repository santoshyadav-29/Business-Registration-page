import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BusinessFlow - Business Registration Platform",
  description: "Streamline your business registration process",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={cn(inter.className, "min-h-screen bg-background")}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}