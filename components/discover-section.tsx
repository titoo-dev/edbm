import {
	ArrowRight,
	Award,
	Briefcase,
	Building,
	Globe,
	MapPin,
} from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';

export const DiscoverSection = () => {
	return (
		<section className="w-full py-28 bg-white overflow-hidden relative">
			{/* Decorative background elements */}
			<div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] opacity-5"></div>
			<div className="absolute right-0 top-20 w-1/3 h-72 bg-primary/10 rounded-l-full blur-3xl"></div>
			<div className="absolute left-0 bottom-20 w-1/4 h-64 bg-primary/5 rounded-r-full blur-3xl"></div>

			<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative">
				{/* Section header with animated underline */}
				<div className="flex flex-col items-center text-center mb-16">
					<div className="relative mb-2">
						<span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-1 rounded-full bg-primary/5">
							Explorer
						</span>
						<span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-primary rounded-full"></span>
					</div>

					<h2 className="text-4xl font-bold tracking-tight mt-6 mb-3">
						Découvrez{' '}
						<span className="text-primary relative">
							Madagascar
							<svg
								className="absolute -bottom-2 left-0 w-full"
								height="6"
								viewBox="0 0 200 6"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M0 3C50 -1 150 -1 200 3"
									stroke="currentColor"
									strokeWidth="2"
									className="text-primary"
									strokeLinecap="round"
								/>
							</svg>
						</span>
					</h2>

					<p className="text-muted-foreground max-w-xl text-lg">
						Une île aux multiples opportunités d'investissement
					</p>
				</div>

				{/* Featured card - larger highlight */}
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
					<div className="lg:col-span-2">
						<div className="relative h-[400px] rounded-3xl overflow-hidden shadow-xl group">
							<Image
								src="/images/madagascar-landscape-1.jpg"
								alt="Pourquoi investir à Madagascar"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

							<div className="absolute bottom-0 left-0 right-0 p-8">
								<div className="flex items-start gap-5">
									<div className="p-4 rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg">
										<Globe className="h-8 w-8 text-primary" />
									</div>
									<div className="space-y-3">
										<h3 className="text-2xl font-bold text-white">
											Pourquoi investir à Madagascar
										</h3>
										<p className="text-white/90 max-w-lg">
											Madagascar est une destination
											d'investissement fortement
											concurrentiel avec des opportunités
											d'investissement concrètes
										</p>
										<Button
											variant="outline"
											className="mt-2 rounded-full bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary transition-all"
										>
											<span>Explorer</span>
											<ArrowRight className="h-4 w-4 ml-2" />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Secondary highlight */}
					<div className="h-[400px]">
						<div className="relative h-full rounded-3xl overflow-hidden shadow-xl group">
							<Image
								src="/images/madagascar-landscape-2.jpg"
								alt="Données sectorielles"
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

							<div className="absolute bottom-0 left-0 right-0 p-6">
								<div className="space-y-3">
									<div className="p-3 rounded-xl bg-white/90 backdrop-blur-sm shadow-lg inline-block">
										<Building className="h-6 w-6 text-primary" />
									</div>
									<h3 className="text-xl font-bold text-white">
										Données sectorielles
									</h3>
									<p className="text-white/90 text-sm">
										Agrobusiness, Tourisme, Industrie...
										découvrez les informations clés
									</p>
									<Button
										variant="outline"
										size="sm"
										className="mt-2 rounded-full bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary transition-all"
									>
										<span>Explorer</span>
										<ArrowRight className="h-3 w-3 ml-2" />
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Bottom cards with hover effects */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
					{[
						{
							title: 'Comment investir à Madagascar',
							icon: (
								<Briefcase className="h-6 w-6 text-primary" />
							),
							description:
								"L'EDBM facilite l'implantation et le développement des projets d'affaire",
							bgImage: '/images/madagascar-landscape-3.jpg',
						},
						{
							title: 'Ressources',
							icon: <Award className="h-6 w-6 text-primary" />,
							description:
								'Consultez et téléchargez nos documentations et vidéos',
							bgImage: '/images/madagascar-landscape-4.jpg',
						},
					].map((card, index) => (
						<div
							key={index}
							className="group relative h-[250px] rounded-3xl overflow-hidden shadow-lg transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
						>
							<Image
								src={card.bgImage}
								alt={card.title}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

							<div className="absolute inset-0 flex flex-col justify-end p-6">
								<div className="flex items-center gap-3 mb-3">
									<div className="p-2 rounded-lg bg-white/90 backdrop-blur-sm shadow-md">
										{card.icon}
									</div>
									<h3 className="text-xl font-bold text-white">
										{card.title}
									</h3>
								</div>
								<p className="text-white/90 mb-4 text-sm">
									{card.description}
								</p>
								<Button
									variant="outline"
									size="sm"
									className="w-fit rounded-full bg-white/20 backdrop-blur-sm border-white/40 text-white hover:bg-white hover:text-primary transition-all"
								>
									<span>En savoir plus</span>
									<ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Bottom CTA */}
				<div className="flex justify-center mt-16">
					<div className="flex items-center gap-4 p-4 px-6 rounded-full bg-white border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
						<div className="p-3 rounded-full bg-primary/10">
							<MapPin className="h-5 w-5 text-primary" />
						</div>
						<p className="text-base font-medium">
							Explorez toutes les opportunités d'investissement
						</p>
						<Button size="sm" className="rounded-full">
							Découvrir
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};
