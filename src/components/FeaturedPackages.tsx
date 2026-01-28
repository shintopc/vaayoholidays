"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Package } from "@/types";
import { Clock, Star, ArrowRight } from "lucide-react";
import packagesData from "@/data/packages.json";

export function FeaturedPackages() {
    const featuredPackages = (packagesData as Package[]).filter(pkg => pkg.isFeatured);

    return (
        <Section className="bg-gray-50">
            <div className="text-center mb-16">
                <span className="text-gold-500 font-serif italic text-lg">Curated For You</span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-navy-900 mt-2">Signature Experiences</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {featuredPackages.map((pkg, index) => (
                    <motion.div
                        key={pkg.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group"
                    >
                        <div className="relative h-64 overflow-hidden">
                            <img
                                src={pkg.images[0]}
                                alt={pkg.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-navy-900 flex items-center">
                                <Star className="w-3 h-3 text-gold-500 mr-1 fill-gold-500" />
                                {pkg.rating}
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-bold font-serif text-navy-900 group-hover:text-gold-500 transition-colors">
                                    {pkg.title}
                                </h3>
                            </div>

                            <div className="flex items-center text-gray-500 text-sm mb-4">
                                <Clock className="w-4 h-4 mr-2" />
                                {pkg.duration}
                            </div>

                            <p className="text-gray-600 text-sm line-clamp-2 mb-6">
                                {pkg.overview}
                            </p>

                            <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                                <div>
                                    <span className="text-xs text-gray-400 block">Starting from</span>
                                    <span className="text-lg font-bold text-navy-900">
                                        {pkg.currency} {pkg.price.toLocaleString()}
                                    </span>
                                </div>
                                <Link href={`/packages/${pkg.slug}`}>
                                    <Button variant="outline" size="sm" className="group-hover:bg-navy-900 group-hover:text-white transition-colors">
                                        Details <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="text-center mt-12">
                <Link href="/packages">
                    <Button size="lg" variant="secondary">View All Packages</Button>
                </Link>
            </div>
        </Section>
    );
}
