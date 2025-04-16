import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	ArrowRight,
	Building,
	Globe,
	Award,
	MessageSquare,
	Briefcase,
	MapPin,
} from 'lucide-react';

export default function Home() {
	return (
		<main className="min-h-screen">
			{/* Hero Section - Clean, minimal design with more whitespace */}
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
								Madagascar. Nous vous accompagnons dans chaque
								étape de votre projet d'investissement.
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

			{/* Découvrez Madagascar Section - Modern minimal cards */}
			<section className="w-full py-28 bg-white overflow-hidden relative">
				{/* Decorative background elements */}
				<div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
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
												concurrentiel avec des
												opportunités d'investissement
												concrètes
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
								icon: (
									<Award className="h-6 w-6 text-primary" />
								),
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
								Explorez toutes les opportunités
								d'investissement
							</p>
							<Button size="sm" className="rounded-full">
								Découvrir
								<ArrowRight className="h-4 w-4 ml-2" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Services Section - Clean tabs with rounded corners */}
			<section className="w-full py-24 relative overflow-hidden">
				{/* Decorative background elements */}
				<div className="absolute inset-0 bg-gradient-to-br from-white to-primary/5 z-0"></div>
				<div className="absolute right-0 top-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
				<div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>

				<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
					{/* Section header with animated underline */}
					<div className="flex flex-col items-center text-center mb-16">
						<div className="inline-flex items-center justify-center p-1 px-3 mb-4 rounded-full bg-primary/10">
							<span className="text-sm font-semibold text-primary">
								Nos services
							</span>
						</div>
						<h2 className="text-4xl font-bold tracking-tight mb-4">
							Services aux{' '}
							<span className="text-primary relative">
								Investisseurs
								<svg
									className="absolute -bottom-2 left-0 w-full"
									height="6"
									viewBox="0 0 200 6"
									fill="none"
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
						<p className="text-muted-foreground max-w-2xl text-lg">
							Des solutions adaptées pour faciliter votre
							investissement à Madagascar
						</p>
					</div>

					{/* Services cards in carousel */}
					<Carousel
						opts={{
							align: 'start',
							loop: true,
						}}
						className="w-full"
					>
						<CarouselContent className="py-4">
							{[
								{
									title: 'Pourquoi Madagascar',
									icon: (
										<Globe className="h-6 w-6 text-primary" />
									),
									description:
										"Une île aux multiples opportunités d'investissement avec des ressources naturelles exceptionnelles et un emplacement stratégique.",
									features: [
										'Biodiversité unique',
										'Ressources naturelles',
										'Position géographique stratégique',
									],
									bgClass:
										'bg-gradient-to-br from-blue-50 to-indigo-50',
								},
								{
									title: "Création d'Entreprise",
									icon: (
										<Building className="h-6 w-6 text-primary" />
									),
									description:
										'Processus dématérialisé pour la création de votre entreprise en seulement 48 heures via notre guichet unique.',
									features: [
										'Guichet unique',
										'Procédure simplifiée',
										'Accompagnement personnalisé',
									],
									bgClass:
										'bg-gradient-to-br from-green-50 to-emerald-50',
								},
								{
									title: 'Visa & Immigration',
									icon: (
										<Award className="h-6 w-6 text-primary" />
									),
									description:
										"Facilitez votre installation avec nos services d'accompagnement pour l'obtention de visa long séjour.",
									features: [
										'Visa investisseur',
										'Visa famille',
										'Renouvellement simplifié',
									],
									bgClass:
										'bg-gradient-to-br from-amber-50 to-yellow-50',
								},
								{
									title: 'Secteurs Porteurs',
									icon: (
										<Briefcase className="h-6 w-6 text-primary" />
									),
									description:
										'Découvrez les secteurs à fort potentiel pour votre investissement à Madagascar.',
									features: [
										'Agrobusiness',
										'Tourisme',
										'Industrie',
										'Technologies',
									],
									bgClass:
										'bg-gradient-to-br from-rose-50 to-pink-50',
								},
								{
									title: "À Propos de l'EDBM",
									icon: (
										<MessageSquare className="h-6 w-6 text-primary" />
									),
									description:
										'Votre partenaire privilégié pour réussir votre investissement à Madagascar.',
									features: [
										'Accompagnement',
										'Conseil',
										'Mise en relation',
									],
									bgClass:
										'bg-gradient-to-br from-violet-50 to-purple-50',
								},
							].map((service, index) => (
								<CarouselItem
									key={index}
									className="md:basis-1/2 lg:basis-1/3 pl-1 pr-4"
								>
									<div
										className={`h-full rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ${service.bgClass}`}
									>
										<div className="h-full p-8 flex flex-col">
											<div className="flex items-center gap-4 mb-6">
												<div className="p-4 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm">
													{service.icon}
												</div>
												<h3 className="text-xl font-bold">
													{service.title}
												</h3>
											</div>

											<p className="text-muted-foreground mb-8">
												{service.description}
											</p>

											<div className="space-y-3 mb-8 flex-grow">
												{service.features.map(
													(feature, i) => (
														<div
															key={i}
															className="flex items-center gap-2"
														>
															<div className="h-2 w-2 rounded-full bg-primary"></div>
															<span className="text-sm">
																{feature}
															</span>
														</div>
													)
												)}
											</div>

											<Button className="rounded-full mt-auto w-full shadow-sm hover:shadow-md transition-all duration-300 group">
												En savoir plus
												<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
											</Button>
										</div>
									</div>
								</CarouselItem>
							))}
						</CarouselContent>

						<div className="flex items-center justify-center mt-8 gap-2">
							<CarouselPrevious className="relative bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300 border-none" />
							<div className="flex items-center space-x-1">
								{[1, 2, 3, 4, 5].map((_, index) => (
									<div
										key={index}
										className="h-2 w-2 rounded-full bg-primary/30"
									></div>
								))}
							</div>
							<CarouselNext className="relative bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300 border-none" />
						</div>
					</Carousel>

					{/* Bottom card with stats */}
					<div className="mt-20 bg-white rounded-3xl shadow-xl p-10 border border-primary/10">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
							{[
								{
									value: '200+',
									label: 'Entreprises créées',
									icon: (
										<Building className="h-5 w-5 text-primary" />
									),
								},
								{
									value: '48h',
									label: 'Pour créer votre entreprise',
									icon: (
										<Award className="h-5 w-5 text-primary" />
									),
								},
								{
									value: '15+',
									label: "Secteurs d'activité",
									icon: (
										<Briefcase className="h-5 w-5 text-primary" />
									),
								},
								{
									value: '24/7',
									label: 'Support aux investisseurs',
									icon: (
										<MessageSquare className="h-5 w-5 text-primary" />
									),
								},
							].map((stat, i) => (
								<div key={i} className="text-center">
									<div className="inline-flex items-center justify-center p-3 rounded-xl bg-primary/10 mb-4">
										{stat.icon}
									</div>
									<h3 className="text-3xl font-bold text-primary mb-2">
										{stat.value}
									</h3>
									<p className="text-muted-foreground">
										{stat.label}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section - Floating cards with subtle shadows */}
			<section className="w-full py-28 bg-white overflow-hidden relative">
				{/* Decorative background elements */}
				<div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] opacity-5"></div>
				<div className="absolute right-0 top-20 w-1/3 h-72 bg-primary/10 rounded-l-full blur-3xl"></div>
				<div className="absolute left-0 bottom-20 w-1/4 h-64 bg-primary/5 rounded-r-full blur-3xl"></div>

				<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative">
					{/* Section header with animated underline */}
					<div className="flex flex-col items-center text-center mb-16">
						<div className="relative mb-2">
							<span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-1 rounded-full bg-primary/5">
								Témoignages
							</span>
							<span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-primary rounded-full"></span>
						</div>

						<h2 className="text-4xl font-bold tracking-tight mt-6 mb-3">
							Success{' '}
							<span className="text-primary relative">
								Stories
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
							Découvrez les témoignages des investisseurs qui ont
							choisi Madagascar
						</p>
					</div>

					{/* Testimonials carousel */}
					<div className="mb-16">
						<Carousel
							opts={{
								loop: true,
							}}
							className="w-full"
						>
							<CarouselContent>
								{[
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
								].map((testimonial, i) => (
									<CarouselItem
										key={i}
										className="px-4 md:px-6 py-4"
									>
										<div className="relative rounded-3xl overflow-hidden shadow-xl group">
											<div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 mix-blend-overlay z-0"></div>
											<div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 relative z-10">
												<div className="grid md:grid-cols-5 gap-8 items-center">
													<div className="md:col-span-2 flex flex-col items-center md:items-start">
														<div className="relative">
															<div className="h-28 w-28 rounded-2xl overflow-hidden shadow-lg">
																{testimonial.avatar ? (
																	<Image
																		src={
																			testimonial.avatar
																		}
																		alt={
																			testimonial.name
																		}
																		fill
																		className="object-cover transition-transform duration-700 group-hover:scale-105"
																	/>
																) : (
																	<div className="w-full h-full bg-primary/20 flex items-center justify-center">
																		<MessageSquare className="h-8 w-8 text-primary" />
																	</div>
																)}
															</div>
														</div>

														<div className="mt-6 text-center md:text-left">
															<h3 className="font-bold text-xl">
																{
																	testimonial.name
																}
															</h3>
															<p className="text-muted-foreground text-sm">
																{
																	testimonial.role
																}
															</p>
															<div className="flex items-center gap-2 mt-3 justify-center md:justify-start">
																<div className="h-1 w-6 rounded-full bg-primary"></div>
																<span className="text-xs font-medium text-primary">
																	{
																		testimonial.company
																	}
																</span>
															</div>
														</div>
													</div>

													<div className="md:col-span-3">
														<div className="p-4 rounded-xl bg-primary/5 mb-6">
															<blockquote className="text-lg md:text-xl italic leading-relaxed text-muted-foreground">
																"
																{
																	testimonial.quote
																}
																"
															</blockquote>
														</div>

														<Button
															variant="outline"
															size="sm"
															className="mt-2 rounded-full border-primary/30 hover:bg-white hover:text-primary transition-all group"
														>
															<span>
																Lire le
																témoignage
																complet
															</span>
															<ArrowRight className="h-3 w-3 ml-2 group-hover:translate-x-1 transition-transform" />
														</Button>
													</div>
												</div>
											</div>

											{/* Decorative elements */}
											<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
												<MessageSquare className="h-5 w-5 text-primary" />
											</div>
										</div>
									</CarouselItem>
								))}
							</CarouselContent>

							<div className="flex justify-center mt-8">
								<div className="flex items-center gap-2">
									<CarouselPrevious className="relative bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300 border-none" />
									<div className="flex items-center space-x-1">
										{[1, 2, 3].map((_, index) => (
											<div
												key={index}
												className="h-2 w-2 rounded-full bg-primary/30"
											></div>
										))}
									</div>
									<CarouselNext className="relative bg-white shadow-md hover:bg-primary hover:text-white transition-all duration-300 border-none" />
								</div>
							</div>
						</Carousel>
					</div>

					{/* Bottom CTA */}
					<div className="flex justify-center">
						<div className="flex items-center gap-4 p-4 px-6 rounded-full bg-white border border-primary/10 shadow-lg hover:shadow-xl transition-all duration-300">
							<div className="p-3 rounded-full bg-primary/10">
								<MessageSquare className="h-5 w-5 text-primary" />
							</div>
							<p className="text-base font-medium">
								Découvrez plus de success stories
							</p>
							<Button size="sm" className="rounded-full">
								Voir plus
								<ArrowRight className="h-4 w-4 ml-2" />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* News Section - Clean cards with minimal borders */}
			<section className="w-full py-24 bg-[#FAFAFA]">
				<div className="container mx-auto max-w-[1200px] px-4 md:px-6">
					<div className="flex flex-col items-center text-center mb-16">
						<h2 className="text-3xl font-bold tracking-tight mb-4">
							Nos Actualités
						</h2>
						<p className="text-muted-foreground max-w-2xl">
							Restez informé des dernières nouvelles
						</p>
					</div>
					<div className="grid gap-8 md:grid-cols-3">
						{[
							{
								title: 'Adoption du décret concernant la dématérialisation des procédures de création des entreprises',
								date: '18 novembre 2024',
								excerpt:
									'48 heures pour immatriculer une entreprise.',
							},
							{
								title: 'Abu Dhabi Ports Group and EDBM sign a Memorandum of Understanding (MoU)',
								date: '1 juin 2024',
								excerpt:
									'To explore the Development of Ports, Maritime and Logistics',
							},
							{
								title: "DIALOGUE PUBLIC-PRIVÉ : VERS L'AMÉLIORATION CONTINUE",
								date: '24 octobre 2023',
								excerpt:
									'Fluidification du passage portuaire à Toamasina',
							},
						].map((article, i) => (
							<Card
								key={i}
								className="border-none shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
							>
								<div className="h-1 bg-primary"></div>
								<CardHeader>
									<CardDescription className="text-xs font-medium text-primary mb-2">
										{article.date}
									</CardDescription>
									<CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
										{article.title}
									</CardTitle>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">
										{article.excerpt}
									</p>
								</CardContent>
								<CardFooter>
									<Button
										variant="ghost"
										className="p-0 h-auto text-primary hover:bg-transparent hover:text-primary/80 group-hover:translate-x-1 transition-all duration-300"
									>
										Lire la suite{' '}
										<ArrowRight className="h-4 w-4 ml-2" />
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
					<div className="flex justify-center mt-12">
						<Button className="rounded-full">
							Voir toutes nos actualités{' '}
							<ArrowRight className="h-4 w-4 ml-2" />
						</Button>
					</div>
				</div>
			</section>

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
