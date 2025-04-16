import { ArrowRight, Building, Globe, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';

export const HeroSection = () => {
	return (
		<section className="relative w-full overflow-hidden bg-gradient-to-br from-white to-primary/5 pt-20 pb-24 md:py-32">
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2"></div>
			<div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl translate-x-1/3"></div>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="grid gap-12 lg:grid-cols-2 items-center">
					<div className="flex flex-col justify-center space-y-8">
						<div className="space-y-4">
							<div className="flex items-center gap-2">
								<span className="h-px w-8 bg-primary"></span>
								<span className="text-sm font-medium uppercase tracking-wider text-primary">
									Agence d'Investissement
								</span>
							</div>
							<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
								<span className="text-primary">
									Economic Development
								</span>
								<br />
								<span className="inline-block mt-1">
									Board of Madagascar
								</span>
							</h1>
						</div>

						<p className="text-lg text-muted-foreground md:text-xl max-w-[520px] leading-relaxed">
							Votre partenaire privilégié pour investir à
							Madagascar. Nous vous accompagnons dans chaque étape
							de votre projet d'investissement.
						</p>

						<div className="flex flex-wrap gap-4">
							<Button
								size="lg"
								className="rounded-full shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300 group"
							>
								Pourquoi Madagascar
								<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
							</Button>
							<Button
								size="lg"
								variant="outline"
								className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
							>
								Création de société
							</Button>
						</div>

						<div className="flex items-center gap-6 pt-4">
							<div className="flex -space-x-3">
								{[1, 2, 3].map((i) => (
									<div
										key={i}
										className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden"
									>
										<Image
											src={`/images/investor-${i}.jpg`}
											alt={`Investisseur ${i}`}
											width={40}
											height={40}
											className="h-full w-full object-cover"
										/>
									</div>
								))}
							</div>
							<p className="text-sm text-muted-foreground">
								<span className="font-semibold text-foreground">
									200+
								</span>{' '}
								investisseurs nous font confiance
							</p>
						</div>
					</div>

					<div className="relative">
						<div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3"></div>

						<div className="relative rounded-2xl overflow-hidden shadow-2xl">
							<div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
							<div className="aspect-[4/3] w-full">
								<Image
									src="/images/madagascar-map.jpg"
									alt="Carte de Madagascar"
									fill
									className="object-cover transition-transform duration-700 hover:scale-105"
									priority
								/>
							</div>

							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white z-20">
								<div className="flex items-center gap-2">
									<MapPin className="h-5 w-5 text-primary" />
									<p className="text-sm font-medium">
										La grande île de l'océan Indien
									</p>
								</div>
							</div>

							<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
								<Globe className="h-6 w-6 text-primary" />
							</div>
						</div>

						<div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl z-20">
							<div className="flex items-center gap-3">
								<div className="rounded-full bg-primary/10 p-3">
									<Building className="h-5 w-5 text-primary" />
								</div>
								<div>
									<p className="text-sm font-medium">
										Secteurs porteurs
									</p>
									<p className="text-xs text-muted-foreground">
										Tourisme, Agribusiness, TIC
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
