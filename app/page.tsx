import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ArrowRight, MessageSquare, Briefcase, MapPin } from 'lucide-react';
import { HeroSection } from '@/components/hero-section';
import { DiscoverSection } from '@/components/discover-section';
import { ServicesSection } from '@/components/services-section';
import { TestimonialSection } from '@/components/testimonial-section';
import { NewsSection } from '@/components/news-section';
import { ContactSection } from '@/components/contact-section';

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section - Clean, minimal design with more whitespace */}
			<HeroSection />

			{/* Découvrez Madagascar Section - Modern minimal cards */}
			<DiscoverSection />

			{/* Services Section - Clean tabs with rounded corners */}
			<ServicesSection />

			{/* Testimonials Section - Floating cards with subtle shadows */}
			<TestimonialSection />

			{/* News Section - Clean cards with minimal borders */}
			<NewsSection />

			{/* Contact Section - Clean, minimalist design */}
			<ContactSection />
		</main>
	);
}
