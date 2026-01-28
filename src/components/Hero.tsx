"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0 scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2670&auto=format&fit=crop')`
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-navy-900/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Discover the <br />
                        <span className="text-gold-400 italic">Unforgettable</span>
                    </h1>
                    <p className="font-sans text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-white/90">
                        Curated luxury journeys designed for the modern explorer. Experience the world with Vaayo Holidays.
                    </p>
                </motion.div>

                {/* Search Bar - Visual Only for now */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="glass max-w-4xl mx-auto p-4 rounded-xl md:rounded-full flex flex-col md:flex-row gap-4 items-center shadow-2xl"
                >
                    <div className="flex-1 w-full relative group">
                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-gold-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Where do you want to go?"
                            className="w-full bg-transparent border-b border-white/30 px-12 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                    </div>
                    <div className="flex-1 w-full relative group hidden md:block">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-gold-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="When?"
                            className="w-full bg-transparent border-b border-white/30 px-12 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                    </div>
                    <div className="flex-1 w-full relative group hidden md:block">
                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 group-focus-within:text-gold-400 h-5 w-5" />
                        <input
                            type="text"
                            placeholder="Travelers"
                            className="w-full bg-transparent border-b border-white/30 px-12 py-3 text-white placeholder:text-white/60 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                    </div>

                    <Button size="lg" className="w-full md:w-auto rounded-full px-8 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold">
                        <Search className="mr-2 h-5 w-5" />
                        Explore
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent" />
            </motion.div>
        </section>
    );
}
