import { ArrowRight, MessageSquare } from 'lucide-react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';
import Image from 'next/image';
import { Button } from './ui/button';

export const TestimonialSection = () => {
	const testimonials = [
		{
			name: 'Pierre-Luc NEVEU',
			role: 'Fondateur de NOSYCOM SARL',
			quote: 'Connaître le territoire ainsi que la société y demeurant sont les principaux éléments à considérer durant la préparation de son projet.',
			avatar: '/images/avatar-1.jpg',
			company: 'NOSYCOM',
		},
		{
			name: 'M. Feride Hassanaly',
			role: 'Co-Dg du groupe Talys',
			quote: "La tangibilité de notre projet nous a avantagé dans le choix d'un meilleur partenaire pour la concrétisation de ce dernier.",
			avatar: '/images/avatar-2.jpg',
			company: 'Talys Group',
		},
		{
			name: 'Matthias Roß',
			role: 'Fondateur Autarsys Madagascar SARL',
			quote: "27 ans de présence professionnelle à Madagascar m'ont appris que la grande île bénéficie d'une potentialité impressionnante en matière de ressources humaines.",
			avatar: '/images/avatar-3.jpg',
			company: 'Autarsys Madagascar',
		},
	];

	return (
		<section className="w-full py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden relative">
			{/* Decorative background elements similar to discover section */}
			<div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] opacity-5"></div>
			<div className="absolute right-0 top-20 w-1/3 h-72 bg-primary/10 rounded-l-full blur-3xl"></div>
			<div className="absolute left-0 bottom-20 w-1/4 h-64 bg-primary/5 rounded-r-full blur-3xl"></div>

			{/* Additional decorative elements */}
			<div className="absolute top-40 left-10 w-24 h-24 rounded-full bg-primary/10 blur-xl"></div>
			<div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-primary/5 blur-xl"></div>
			<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-100/20 blur-3xl opacity-30"></div>

			<div className="container mx-auto max-w-7xl px-4 md:px-6 relative">
				{/* Section header */}
				<div className="max-w-2xl mx-auto text-center mb-16">
					<span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-medium rounded-full mb-4">
						Témoignages
					</span>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
						Parcourez nos{' '}
						<span className="text-primary relative inline-block">
							Success Stories
							<svg
								className="absolute -bottom-1 left-0 w-full"
								height="4"
								viewBox="0 0 100 4"
								fill="none"
							>
								<path
									d="M0 2C25 0 75 0 100 2"
									stroke="currentColor"
									strokeWidth="3"
									className="text-primary"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</h2>
					<p className="text-muted-foreground text-lg">
						Découvrez les témoignages des investisseurs qui ont
						choisi Madagascar
					</p>
				</div>

				{/* Testimonials carousel with enhanced controls */}
				<div className="relative group">
					<Carousel
						opts={{
							loop: true,
							align: 'start',
						}}
						className="w-full"
					>
						<CarouselContent>
							{testimonials.map((testimonial, i) => (
								<CarouselItem
									key={i}
									className="md:basis-1/2 lg:basis-1/3 pl-4 pr-8"
								>
									<div className="h-full flex flex-col rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
										<div className="p-6 flex-grow">
											<div className="mb-6">
												<MessageSquare className="h-8 w-8 text-primary/40" />
											</div>
											<blockquote className="text-lg text-slate-700 leading-relaxed mb-6">
												"{testimonial.quote}"
											</blockquote>
										</div>

										<div className="px-6 py-5 border-t border-slate-100 bg-slate-50/50 flex items-center gap-4">
											<div className="h-12 w-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-white shadow-sm">
												{testimonial.avatar ? (
													<Image
														src={testimonial.avatar}
														alt={testimonial.name}
														width={48}
														height={48}
														className="object-cover h-full w-full"
													/>
												) : (
													<div className="w-full h-full bg-primary/20 flex items-center justify-center">
														<span className="font-medium text-primary">
															{testimonial.name.charAt(
																0
															)}
														</span>
													</div>
												)}
											</div>
											<div>
												<h3 className="font-semibold text-sm">
													{testimonial.name}
												</h3>
												<p className="text-xs text-muted-foreground flex items-center gap-2">
													<span>
														{testimonial.role}
													</span>
													<span className="inline-block h-1 w-1 rounded-full bg-slate-300"></span>
													<span className="text-primary font-medium">
														{testimonial.company}
													</span>
												</p>
											</div>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						{/* Enhanced carousel controls - positioned for better visibility and usability */}
						<div className="flex items-center justify-center mt-8 gap-4">
							<CarouselPrevious
								className="static translate-x-0 translate-y-0 h-10 w-10 rounded-full bg-white shadow-md hover:bg-primary hover:text-white border-none transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2"
								aria-label="Previous testimonial"
							/>
							<CarouselNext
								className="static translate-x-0 translate-y-0 h-10 w-10 rounded-full bg-white shadow-md hover:bg-primary hover:text-white border-none transition-all duration-300 focus:ring-2 focus:ring-primary focus:ring-offset-2"
								aria-label="Next testimonial"
							/>
						</div>
					</Carousel>
				</div>

				{/* CTA Section */}
				<div className="mt-16 text-center">
					<div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-primary/5 rounded-full text-sm text-primary">
						<MessageSquare className="h-4 w-4" />
						<span>Plus de 50 témoignages d'investisseurs</span>
					</div>
					<div>
						<Button className="rounded-full px-8 group">
							Voir tous les témoignages
							<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
