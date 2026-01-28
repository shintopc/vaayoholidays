import Link from "next/link";
import { Package } from "@/types";
import packagesData from "@/data/packages.json";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Clock, Star, ArrowRight } from "lucide-react";

export const metadata = {
    title: "Tour Packages | Vaayo Holidays",
    description: "Explore our collection of luxury tour packages to the world's most beautiful destinations.",
};

export default function PackagesPage() {
    const packages = packagesData as Package[];

    return (
        <main className="min-h-screen bg-gray-50 pt-24 pb-20">
            <div className="bg-navy-900 py-20 text-center text-white mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Our Curated Packages</h1>
                <p className="opacity-80 max-w-2xl mx-auto">Handpicked itineraries designed for the discerning traveler.</p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 group flex flex-col"
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
                            <div className="p-6 flex-grow flex flex-col">
                                <h3 className="text-xl font-bold font-serif text-navy-900 group-hover:text-gold-500 transition-colors mb-2">
                                    {pkg.title}
                                </h3>

                                <div className="flex items-center text-gray-500 text-sm mb-4">
                                    <Clock className="w-4 h-4 mr-2" />
                                    {pkg.duration}
                                </div>

                                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow">
                                    {pkg.overview}
                                </p>

                                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
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
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
