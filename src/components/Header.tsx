"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Destinations", href: "/destinations" },
    { name: "About", href: "/about" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isTransparent = isHome && !isScrolled;

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isTransparent ? "bg-transparent py-6" : "bg-white/80 backdrop-blur-md shadow-sm py-4"
            )}
        >
            <div className="container mx-auto px-6 flex items-center justify-between gap-10 lg:gap-20">
                {/* Logo */}
                <Link href="/" className="relative z-50 flex items-center gap-3">
                    <div className="relative h-12 w-10">
                        <Image
                            src="/logo-icon.png"
                            alt="Vaayo Holidays Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className={cn(
                            "font-logo text-3xl font-black tracking-tight leading-none transition-colors",
                            isTransparent ? "text-white" : "text-navy-900"
                        )}>
                            <span className="text-orange-500">Vaa</span><span className="text-teal-500">yo</span> <span className={cn(isTransparent ? "text-white" : "text-navy-900", "font-sans font-bold text-xl tracking-widest ml-1")}>HOLIDAYS</span>
                        </span>
                        <span className={cn(
                            "text-[0.65rem] tracking-[0.2em] font-sans font-semibold uppercase ml-1 block mt-1",
                            isTransparent ? "text-white/90" : "text-navy-800"
                        )}>
                            Unlocking Destinations
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium uppercase tracking-wide transition-colors hover:text-gold-500",
                                isTransparent ? "text-white/90" : "text-navy-900"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button variant={isTransparent ? "secondary" : "default"} size="sm">
                        Plan My Trip
                    </Button>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 relative"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={cn("h-6 w-6", isTransparent ? "text-white" : "text-navy-900")} />
                    ) : (
                        <Menu className={cn("h-6 w-6", isTransparent ? "text-white" : "text-navy-900")} />
                    )}
                </button>

                {/* Mobile Nav Overlay */}
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 bg-navy-900/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-2xl font-serif text-white hover:text-gold-500"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="secondary" size="lg" className="mt-8">
                            Plan My Trip
                        </Button>
                    </motion.div>
                )}
            </div>
        </header>
    );
}
