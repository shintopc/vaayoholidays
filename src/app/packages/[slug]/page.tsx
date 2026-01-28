import { notFound } from "next/navigation";
import { Package } from "@/types";
import packagesData from "@/data/packages.json";
import { ItineraryTimeline } from "@/components/ItineraryTimeline";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Check, X, Calendar, Share2, Printer } from "lucide-react";
import { ConciergeButton } from "@/components/ConciergeButton";

// Static Params for SSG
export async function generateStaticParams() {
    const packages = packagesData as Package[];
    return packages.map((pkg) => ({
        slug: pkg.slug,
    }));
}

async function getPackage(slug: string): Promise<Package | undefined> {
    const packages = packagesData as Package[];
    return packages.find((pkg) => pkg.slug === slug);
}

export default async function PackagePage({ params }: { params: { slug: string } }) {
    const pkg = await getPackage(params.slug);

    if (!pkg) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white pb-20">
            {/* Hero Header */}
            <div className="relative h-[60vh] min-h-[500px] w-full">
                <img
                    src={pkg.images[0]}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full p-6 pb-12 md:pb-20">
                    <div className="container mx-auto">
                        <span className="text-gold-400 font-bold tracking-wider uppercase text-sm mb-2 block">Luxury Tour Package</span>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">{pkg.title}</h1>
                        <div className="flex flex-wrap gap-4 text-white/80">
                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {pkg.duration}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 -mt-10 relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Main Content */}
                <div className="lg:col-span-2 space-y-12">
                    {/* Overview */}
                    <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
                        <h2 className="text-2xl font-serif font-bold text-navy-900 mb-4">Overview</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">
                            {pkg.overview}
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Button variant="outline" size="sm"><Share2 className="w-4 h-4 mr-2" /> Share</Button>
                            <Button variant="outline" size="sm"><Printer className="w-4 h-4 mr-2" /> Download Brochure</Button>
                        </div>
                    </div>

                    {/* Itinerary */}
                    <div>
                        <h2 className="text-2xl font-serif font-bold text-navy-900 mb-6">Day-by-Day Itinerary</h2>
                        <ItineraryTimeline days={pkg.itinerary} />
                    </div>

                    {/* Inclusions/Exclusions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                            <h3 className="font-bold text-green-800 mb-4 flex items-center"><Check className="w-5 h-5 mr-2" /> Inclusions</h3>
                            <ul className="space-y-2">
                                {pkg.inclusions.map((item, i) => (
                                    <li key={i} className="text-green-700 text-sm flex items-start">
                                        <span className="mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-red-50 rounded-xl p-6 border border-red-100">
                            <h3 className="font-bold text-red-800 mb-4 flex items-center"><X className="w-5 h-5 mr-2" /> Exclusions</h3>
                            <ul className="space-y-2">
                                {pkg.exclusions.map((item, i) => (
                                    <li key={i} className="text-red-700 text-sm flex items-start">
                                        <span className="mr-2">•</span> {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Sidebar Sticky Booking */}
                <div className="relative">
                    <div className="sticky top-24 space-y-6">
                        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-100">
                            <div className="bg-navy-900 p-6 text-white text-center">
                                <p className="text-sm opacity-80 mb-1">Starting from</p>
                                <p className="text-3xl font-serif font-bold text-gold-500">{pkg.currency} {pkg.price.toLocaleString()}</p>
                                <p className="text-xs text-white/60 mt-2">*Per person on twin sharing</p>
                            </div>
                            <div className="p-6 space-y-4">
                                <Button className="w-full h-12 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white">
                                    Enquire on ZIP
                                </Button>
                                <Button className="w-full h-12 text-lg font-bold" variant="default">
                                    Request Quote
                                </Button>
                                <p className="text-center text-xs text-gray-400 mt-4">
                                    No payment required now. Customize this trip with our experts.
                                </p>
                            </div>
                        </div>

                        <div className="bg-gold-50 rounded-xl p-6 border border-gold-100">
                            <h4 className="font-bold text-navy-900 mb-2">Why Book with Vaayo?</h4>
                            <ul className="text-sm text-navy-800 space-y-2">
                                <li>✓ 24/7 Concierge Support</li>
                                <li>✓ Hand-picked Premium Hotels</li>
                                <li>✓ 100% Customized Itineraries</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <ConciergeButton />
        </main>
    );
}
