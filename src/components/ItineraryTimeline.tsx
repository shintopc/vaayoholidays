"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DayItinerary } from "@/types";
import { Plane, Hotel, Map, Coffee, ArrowRightCircle, ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap = {
    flight: Plane,
    hotel: Hotel,
    sightseeing: Map,
    meal: Coffee,
    transfer: ArrowRightCircle
};

export function ItineraryTimeline({ days }: { days: DayItinerary[] }) {
    // All expanded by default for better SEO/visibility, or toggleable
    const [expandedDay, setExpandedDay] = useState<number | null>(null);

    const toggleDay = (day: number) => {
        if (expandedDay === day) {
            setExpandedDay(null);
        } else {
            setExpandedDay(day);
        }
    };

    return (
        <div className="space-y-6 relative border-l-2 border-dashed border-gray-200 ml-4 md:ml-6">
            {days.map((item, index) => {
                const Icon = iconMap[item.activityIcon] || Map;
                const isExpanded = expandedDay === item.day || true; // Force all open for now for better view

                return (
                    <div key={item.day} className="relative pl-8 md:pl-10 group">
                        {/* Dot */}
                        <div className="absolute -left-[11px] top-1 h-6 w-6 rounded-full bg-white border-2 border-gold-500 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                            <div className="h-2 w-2 rounded-full bg-navy-900" />
                        </div>

                        <div
                            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                            onClick={() => toggleDay(item.day)}
                        >
                            <div className="flex items-start justify-between">
                                <div className="flex items-center space-x-3 mb-2">
                                    <span className="bg-navy-900 text-gold-500 text-xs font-bold px-2 py-1 rounded">Day {item.day}</span>
                                    <h3 className="font-serif font-bold text-lg text-navy-900">{item.title}</h3>
                                </div>
                                <div className="p-2 bg-gray-50 rounded-full">
                                    <Icon className="w-5 h-5 text-gray-500" />
                                </div>
                            </div>

                            <AnimatePresence>
                                {isExpanded && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
