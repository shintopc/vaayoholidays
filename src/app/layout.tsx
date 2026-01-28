import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Poppins, Mulish } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-playfair",
    display: 'swap',
});

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: 'swap',
});

const mulish = Mulish({
    subsets: ["latin"],
    variable: "--font-mulish",
    display: 'swap',
});

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    variable: "--font-poppins",
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Vaayo Holidays | Premium Travel Experiences",
    description: "Curated luxury travel experiences for the modern explorer.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased flex flex-col",
                mulish.variable,
                poppins.variable
            )}>
                <Header />
                <main className="flex-grow">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
