import Link from "next/link";
import { Destination } from "@/types";
import destinationsData from "@/data/destinations.json";
import { Section } from "@/components/ui/Section";

export const metadata = {
    title: "Destinations | Vaayo Holidays",
    description: "Explore the most beautiful destinations around the globe.",
};

export default function DestinationsPage() {
    const destinations = destinationsData as Destination[];

    return (
        <main className="min-h-screen bg-white pt-24 pb-20">
            <div className="bg-navy-900 py-20 text-center text-white mb-12">
                <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Explore Destinations</h1>
                <p className="opacity-80 max-w-2xl mx-auto">From tropical paradises to alpine wonders, discover your next getaway.</p>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {destinations.map((dest) => (
                        <Link
                            href={`/destinations/${dest.slug}`}
                            key={dest.id}
                            className="group relative h-96 rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={dest.image}
                                alt={dest.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                            <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h2 className="text-3xl font-serif font-bold text-white mb-2">{dest.name}</h2>
                                <p className="text-white/80 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {dest.description}
                                </p>
                                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                                    {dest.highlights.slice(0, 3).map(tag => (
                                        <span key={tag} className="text-xs font-bold text-navy-900 bg-gold-500 px-2 py-1 rounded">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
