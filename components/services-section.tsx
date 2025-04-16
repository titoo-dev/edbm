import {
	ArrowRight,
	Award,
	Briefcase,
	Building,
	Globe,
	MessageSquare,
} from 'lucide-react';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from './ui/carousel';
import { Button } from './ui/button';

export const ServicesSection = () => {
	return (
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
	);
};
