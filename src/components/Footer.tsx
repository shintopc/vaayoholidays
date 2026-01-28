import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-navy-900 text-white/80 py-16">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div>
                    <div className="flex items-center gap-3 mb-6">
                        <div className="relative h-14 w-12">
                            <Image
                                src="/logo-icon.png"
                                alt="Vaayo Holidays Logo"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-logo text-3xl font-black tracking-tight text-white leading-none block">
                                <span className="text-orange-500">Vaa</span><span className="text-teal-500">yo</span> <span className="font-sans font-bold text-xl tracking-widest ml-1 text-white">HOLIDAYS</span>
                            </span>
                            <span className="text-[0.65rem] tracking-[0.2em] font-sans font-semibold uppercase text-white/80 ml-1 block mt-1">
                                Unlocking Destinations
                            </span>
                        </div>
                    </div>
                    <p className="text-sm leading-relaxed mb-6">
                        Crafting premium travel experiences that inspire, rejuvenate, and create timeless memories. Your journey begins with us.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="#" className="hover:text-gold-500 transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-gold-500 transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-gold-500 transition-colors"><Twitter className="h-5 w-5" /></Link>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="font-serif text-lg text-white mb-6">Quick Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/about" className="hover:text-gold-500">About Us</Link></li>
                        <li><Link href="/packages" className="hover:text-gold-500">Tour Packages</Link></li>
                        <li><Link href="/destinations" className="hover:text-gold-500">Destinations</Link></li>
                        <li><Link href="/testimonials" className="hover:text-gold-500">Reviews</Link></li>
                        <li><Link href="/contact" className="hover:text-gold-500">Contact</Link></li>
                    </ul>
                </div>

                {/* Destinations */}
                <div>
                    <h3 className="font-serif text-lg text-white mb-6">Popular Destinations</h3>
                    <ul className="space-y-4 text-sm">
                        <li><Link href="/destinations/maldives" className="hover:text-gold-500">Maldives</Link></li>
                        <li><Link href="/destinations/bali" className="hover:text-gold-500">Bali</Link></li>
                        <li><Link href="/destinations/switzerland" className="hover:text-gold-500">Switzerland</Link></li>
                        <li><Link href="/destinations/dubai" className="hover:text-gold-500">Dubai</Link></li>
                        <li><Link href="/destinations/kerala" className="hover:text-gold-500">Kerala</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className="font-serif text-lg text-white mb-6">Contact Concierge</h3>
                    <ul className="space-y-4 text-sm">
                        <li className="flex items-start">
                            <MapPin className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                            <span>123 Luxury Lane, Travel City, TC 90210</span>
                        </li>
                        <li className="flex items-center">
                            <Phone className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                            <span>+91 98765 43210</span>
                        </li>
                        <li className="flex items-center">
                            <Mail className="h-5 w-5 text-gold-500 mr-3 shrink-0" />
                            <span>concierge@vaayoholidays.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-xs">
                <p>&copy; {new Date().getFullYear()} Vaayo Holidays. All rights reserved.</p>
            </div>
        </footer>
    );
}
