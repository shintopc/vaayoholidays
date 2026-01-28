export interface Destination {
    id: string;
    name: string;
    slug: string;
    image: string;
    description: string;
    highlights: string[];
}

export interface DayItinerary {
    day: number;
    title: string;
    description: string;
    activityIcon: 'flight' | 'hotel' | 'sightseeing' | 'meal' | 'transfer';
}

export interface Package {
    id: string;
    title: string;
    slug: string;
    destinationId: string;
    duration: string;
    price: number;
    currency: string;
    discountedPrice?: number;
    images: string[];
    overview: string;
    inclusions: string[];
    exclusions: string[];
    itinerary: DayItinerary[];
    isFeatured?: boolean;
    rating?: number;
    reviewsCount?: number;
}

export interface Testimonial {
    id: string;
    name: string;
    location: string;
    rating: number;
    text: string;
    image: string;
}
