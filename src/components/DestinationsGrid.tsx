"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Destination } from "@/types";
import destinationsData from "@/data/destinations.json";
import { cn } from "@/lib/utils";

export function DestinationsGrid() {
    const destinations = destinationsData as Destination[];

    // Split into featured (large) and standard grids for visual variety
    const featured = destinations[0];
    const others = destinations.slice(1, 5); // Take next 4

    return (
        <Section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                <div>
                    <span className="text-gold-500 font-serif italic text-lg">Wanderlust</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mt-2">Trending Destinations</h2>
                </div>
                <Link href="/destinations" className="hidden md:block text-navy-900 border-b border-navy-900 pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors">
                    Explore All Destinations
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-[600px] md:h-[500px]">
                {/* Main Featured Destination */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group h-full"
                >
                    <Link href={`/destinations/${featured.slug}`} className="block h-full relative w-full">
                        <Image
                            src={featured.image}
                            alt={featured.name}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
                        <div className="absolute bottom-0 left-0 p-8 z-10">
                            <h3 className="text-3xl font-serif font-bold text-white mb-2">{featured.name}</h3>
                            <p className="text-white/80 line-clamp-1">{featured.description}</p>
                        </div>
                    </Link>
                </motion.div>

                {/* Other Destinations */}
                {others.map((dest, i) => (
                    <motion.div
                        key={dest.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                            "relative rounded-2xl overflow-hidden group h-full min-h-[200px] md:col-span-1"
                        )}
                    >
                        <Link href={`/destinations/${dest.slug}`} className="block h-full relative w-full">
                            <Image
                                src={dest.image}
                                alt={dest.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-navy-900/20 group-hover:bg-navy-900/40 transition-colors" />
                            <div className="absolute bottom-4 left-4 z-10">
                                <h3 className="text-xl font-bold text-white">{dest.name}</h3>
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

            <Link href="/destinations" className="md:hidden block text-center mt-8 text-navy-900 font-medium">
                Explore All Destinations
            </Link>
        </Section >
    );
}
