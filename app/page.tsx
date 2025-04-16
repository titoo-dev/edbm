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
			<section className="w-full py-24 bg-white">
				<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
					<div className="grid gap-12 lg:grid-cols-2 items-stretch">
						<div className="space-y-8">
							<div>
								<h2 className="text-3xl font-bold tracking-tight mb-4">
									Contactez-nous
								</h2>
								<p className="text-muted-foreground text-lg max-w-md">
									N'hésitez pas à nous contacter pour toute
									question concernant l'investissement à
									Madagascar.
								</p>
							</div>
							<div className="space-y-6">
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-full bg-primary/10">
										<MapPin className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm text-muted-foreground">
										Immeuble EDBM, Avenue Gal Gabriel
										RAMANANTSOA Antaninarenina, ANTANANARIVO
										MADAGASCAR
									</p>
								</div>
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-full bg-primary/10">
										<Briefcase className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm text-muted-foreground">
										+261 20 22 681 21 / +261 20 22 670 40
									</p>
								</div>
								<div className="flex items-start gap-3">
									<div className="p-2 rounded-full bg-primary/10">
										<MessageSquare className="h-4 w-4 text-primary" />
									</div>
									<p className="text-sm text-muted-foreground">
										edbm@edbm.mg
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<Button
									size="icon"
									variant="outline"
									className="rounded-full border-primary/20 hover:bg-primary/5"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-5 w-5"
									>
										<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
									</svg>
									<span className="sr-only">Facebook</span>
								</Button>
								<Button
									size="icon"
									variant="outline"
									className="rounded-full border-primary/20 hover:bg-primary/5"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-5 w-5"
									>
										<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
										<rect
											width="4"
											height="12"
											x="2"
											y="9"
										></rect>
										<circle cx="4" cy="4" r="2"></circle>
									</svg>
									<span className="sr-only">LinkedIn</span>
								</Button>
								<Button
									size="icon"
									variant="outline"
									className="rounded-full border-primary/20 hover:bg-primary/5"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
										className="h-5 w-5"
									>
										<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
										<polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
									</svg>
									<span className="sr-only">YouTube</span>
								</Button>
							</div>
						</div>
						<div>
							<Card className="border-none shadow-sm overflow-hidden">
								<CardHeader>
									<CardTitle>
										Envoyez-nous un message
									</CardTitle>
									<CardDescription>
										Nous vous répondrons dans les plus brefs
										délais
									</CardDescription>
								</CardHeader>
								<CardContent>
									<form className="space-y-6">
										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div className="space-y-2">
												<label
													htmlFor="name"
													className="text-sm font-medium"
												>
													Nom
												</label>
												<input
													id="name"
													className="flex h-11 w-full rounded-md border border-border/30 bg-background px-4 py-2 text-sm transition-colors 
                            placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40"
													placeholder="Votre nom"
												/>
											</div>
											<div className="space-y-2">
												<label
													htmlFor="email"
													className="text-sm font-medium"
												>
													Email
												</label>
												<input
													id="email"
													className="flex h-11 w-full rounded-md border border-border/30 bg-background px-4 py-2 text-sm transition-colors 
                            placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40"
													placeholder="Votre email"
													type="email"
												/>
											</div>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="subject"
												className="text-sm font-medium"
											>
												Sujet
											</label>
											<input
												id="subject"
												className="flex h-11 w-full rounded-md border border-border/30 bg-background px-4 py-2 text-sm transition-colors 
                          placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40"
												placeholder="Sujet de votre message"
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="message"
												className="text-sm font-medium"
											>
												Message
											</label>
											<textarea
												id="message"
												className="flex min-h-[130px] w-full rounded-md border border-border/30 bg-background px-4 py-2 text-sm transition-colors 
                          placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary/40"
												placeholder="Votre message"
											></textarea>
										</div>
										<Button
											type="submit"
											className="w-full rounded-md"
										>
											Envoyer le message
										</Button>
									</form>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
