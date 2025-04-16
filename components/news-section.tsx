import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export const NewsSection = () => {
	// Define news articles data before rendering
	const newsArticles = [
		{
			title: 'Adoption du décret concernant la dématérialisation des procédures de création des entreprises',
			date: '18 novembre 2024',
			excerpt: '48 heures pour immatriculer une entreprise.',
			bgClass: 'from-blue-50 to-indigo-50',
			category: 'Décret',
		},
		{
			title: 'Abu Dhabi Ports Group and EDBM sign a Memorandum of Understanding (MoU)',
			date: '1 juin 2024',
			excerpt:
				'To explore the Development of Ports, Maritime and Logistics',
			bgClass: 'from-green-50 to-emerald-50',
			category: 'Partenariat',
		},
		{
			title: "DIALOGUE PUBLIC-PRIVÉ : VERS L'AMÉLIORATION CONTINUE",
			date: '24 octobre 2023',
			excerpt: 'Fluidification du passage portuaire à Toamasina',
			bgClass: 'from-amber-50 to-yellow-50',
			category: 'Événement',
		},
	];

	return (
		<section className="w-full py-24 relative overflow-hidden">
			{/* Decorative background elements - applying Law of Prägnanz for simpler visual forms */}
			<div className="absolute inset-0 bg-gradient-to-tr from-white to-primary/5 z-0"></div>
			<div className="absolute left-0 top-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
			<div className="absolute right-20 bottom-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

			<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative z-10">
				{/* Section header - applying Jakob's Law with familiar heading pattern */}
				<div className="flex flex-col items-center text-center mb-16">
					<div className="inline-flex items-center justify-center p-1 px-3 mb-4 rounded-full bg-primary/10">
						<span className="text-sm font-semibold text-primary">
							Actualités
						</span>
					</div>
					<h2 className="text-4xl font-bold tracking-tight mb-4">
						Restez{' '}
						<span className="text-primary relative">
							Informé
							<svg
								className="absolute -bottom-2 left-0 w-full"
								height="6"
								viewBox="0 0 200 6"
								fill="none"
								aria-hidden="true"
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
						Les dernières nouvelles et événements de l'EDBM
					</p>
				</div>

				{/* News grid - applying Miller's Law (limiting to 3 items) and Law of Similarity */}
				<div className="grid gap-8 md:grid-cols-3">
					{newsArticles.map((article, i) => (
						<Card
							key={i}
							className={`border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group h-full bg-gradient-to-br ${article.bgClass} hover:translate-y-[-4px] flex flex-col`}
						>
							{/* Color indicator applying Law of Uniform Connectedness */}
							<div className="h-1.5 bg-primary w-full"></div>
							<CardHeader className="pb-2">
								{/* Category and date applying Chunking principle */}
								<div className="flex items-center justify-between mb-3">
									<span className="inline-flex items-center px-2 py-1 rounded-full bg-primary/10">
										<span className="text-xs font-medium text-primary">
											{article.category}
										</span>
									</span>
									<span className="text-xs text-muted-foreground">
										{article.date}
									</span>
								</div>
								<CardTitle className="line-clamp-2 group-hover:text-primary transition-colors text-xl">
									{article.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="flex-grow">
								<p className="text-muted-foreground line-clamp-2">
									{article.excerpt}
								</p>
							</CardContent>
							<CardFooter className="pt-4 mt-auto">
								{/* Button with affordance (Fitts's Law) */}
								<Button
									variant="outline"
									className="rounded-full border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 group w-full justify-center"
								>
									<span>Lire la suite</span>{' '}
									<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				{/* CTA following Peak-End Rule - making it memorable */}
				<div className="flex justify-center mt-16">
					<Button
						size="lg"
						className="rounded-full shadow-md hover:shadow-lg bg-primary text-white hover:bg-primary/90 transition-all duration-300 text-base group px-4"
						aria-label="Voir toutes nos actualités"
					>
						Voir toutes nos actualités
						<ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
					</Button>
				</div>
			</div>
		</section>
	);
};
