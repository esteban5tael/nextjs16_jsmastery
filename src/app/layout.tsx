import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import { generateAsyncTitle,generateAsyncDescription } from "@/lib/seo";
import "./globals.css";
import { cn } from "@/lib/utils";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: await generateAsyncTitle(),
    description: await generateAsyncDescription(),
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, "font-sans", figtree.variable)}
    >
      <body className="dark min-h-full flex flex-col">{children}</body>
    </html>
  );
}
