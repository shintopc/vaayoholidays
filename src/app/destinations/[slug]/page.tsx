import { notFound } from "next/navigation";
import Link from "next/link";
import { Destination, Package } from "@/types";
import destinationsData from "@/data/destinations.json";
import packagesData from "@/data/packages.json";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Star, Clock } from "lucide-react";
import { ConciergeButton } from "@/components/ConciergeButton";

// Static Params for SSG
export async function generateStaticParams() {
    const destinations = destinationsData as Destination[];
    return destinations.map((dest) => ({
        slug: dest.slug,
    }));
}

async function getDestination(slug: string): Promise<Destination | undefined> {
    const destinations = destinationsData as Destination[];
    return destinations.find((dest) => dest.slug === slug);
}

// Filter packages for this destination
function getPackagesForDestination(destId: string): Package[] {
    const packages = packagesData as Package[];
    return packages.filter(p => p.destinationId === destId);
}

export default async function DestinationPage({ params }: { params: { slug: string } }) {
    const dest = await getDestination(params.slug);

    if (!dest) {
        notFound();
    }

    const relatedPackages = getPackagesForDestination(dest.id);

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Hero Header */}
            <div className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center">
                <img
                    src={dest.image}
                    alt={dest.name}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-navy-900/40" />
                <div className="relative z-10 p-6">
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">{dest.name}</h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">{dest.description}</p>
                </div>
            </div>

            <Section>
                <div className="flex flex-col md:flex-row gap-12">
                    <div className="w-full md:w-1/3">
                        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Highlights</h2>
                        <ul className="space-y-4">
                            {dest.highlights.map(h => (
                                <li key={h} className="flex items-center text-lg text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-gold-500 mr-4" />
                                    {h}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-full md:w-2/3">
                        <h2 className="text-3xl font-serif font-bold text-navy-900 mb-6">Available Packages</h2>
                        {relatedPackages.length > 0 ? (
                            <div className="grid grid-cols-1 gap-8">
                                {relatedPackages.map(pkg => (
                                    <div key={pkg.id} className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col md:flex-row">
                                        <div className="w-full md:w-1/3 h-48 md:h-auto relative">
                                            <img src={pkg.images[0]} className="w-full h-full object-cover" alt={pkg.title} />
                                        </div>
                                        <div className="p-6 w-full md:w-2/3 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold font-serif text-navy-900 mb-2">{pkg.title}</h3>
                                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{pkg.overview}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span className="font-bold text-gold-600">{pkg.currency} {pkg.price.toLocaleString()}</span>
                                                <Link href={`/packages/${pkg.slug}`}>
                                                    <Button variant="outline" size="sm">View Itinerary <ArrowRight className="w-4 h-4 ml-2" /></Button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-gray-50 p-8 rounded-xl text-center">
                                <p className="text-gray-600">No specific packages listed for this destination yet.</p>
                                <Button className="mt-4">Contact Concierge to Plan</Button>
                            </div>
                        )}
                    </div>
                </div>
            </Section>
            <ConciergeButton />
        </main>
    );
}
