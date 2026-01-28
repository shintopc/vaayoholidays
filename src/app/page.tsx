import { Hero } from "@/components/Hero";
import { FeaturedPackages } from "@/components/FeaturedPackages";
import { DestinationsGrid } from "@/components/DestinationsGrid";
import { ConciergeButton } from "@/components/ConciergeButton";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-white">
            <Hero />
            <DestinationsGrid />
            <FeaturedPackages />
            <TestimonialsCarousel />
            <ConciergeButton />
        </main>
    );
}
