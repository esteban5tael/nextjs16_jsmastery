import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import {
    generateAsyncTitle,
    generateAsyncDescription,
} from "@/lib/seo";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from "@/components/ui/LightRays";

const figtree = Figtree({
    subsets: ["latin"],
    variable: "--font-sans",
});

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
            className={cn(
                "h-full",
                "antialiased",
                geistSans.variable,
                geistMono.variable,
                "font-sans",
                figtree.variable,
            )}
        >
            <body className="dark min-h-full flex flex-col">
                <div
                    className="absolute inset-0 top-0 z-[-1] min-h-screen overflow-hidden"
                >
                    <LightRays
                        raysOrigin="top-center"
                        raysColor="#00ffff"
                        raysSpeed={1.5}
                        lightSpread={0.8}
                        rayLength={1.2}
                        followMouse={true}
                        mouseInfluence={0.1}
                        noiseAmount={0.1}
                        distortion={0.05}
                        className="custom-rays"
                    />
                </div>
                <main>
                  {children}
                </main>
            </body>
        </html>
    );
}
