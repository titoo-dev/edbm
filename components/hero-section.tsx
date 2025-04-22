'use client';

import { ArrowRight, Building, Globe, MapPin } from 'lucide-react';
import { Button } from './ui/button';
import Image from 'next/image';
import { motion } from 'motion/react';

export const HeroSection = () => {
	return (
		<section className="relative w-full overflow-hidden bg-gradient-to-br from-white to-primary/5 pt-20 pb-24 md:py-32">
			{/* Background elements with framer-motion */}
			<motion.div
				className="absolute top-0 left-0 h-64 w-64 rounded-full bg-primary/5 blur-3xl -translate-x-1/2"
				animate={{
					scale: [1, 1.2, 1],
					opacity: [0.5, 0.8, 0.5],
				}}
				transition={{
					duration: 8,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl translate-x-1/3"
				animate={{
					scale: [1, 1.1, 1],
					opacity: [0.6, 0.9, 0.6],
				}}
				transition={{
					duration: 10,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute top-1/3 right-1/4 h-40 w-40 rounded-full bg-secondary/5 blur-3xl"
				animate={{
					y: [0, -20, 0],
					x: [0, 15, 0],
					opacity: [0.5, 0.7, 0.5],
				}}
				transition={{
					duration: 7,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>
			<motion.div
				className="absolute bottom-1/4 left-1/4 h-52 w-52 rounded-full bg-primary/5 blur-3xl"
				animate={{
					y: [0, 30, 0],
					x: [0, -15, 0],
					opacity: [0.4, 0.6, 0.4],
				}}
				transition={{
					duration: 9,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
			/>

			<div className="container mx-auto px-4 md:px-6 relative z-10">
				<div className="grid gap-12 lg:grid-cols-2 items-center">
					<motion.div
						className="flex flex-col justify-center space-y-8"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7 }}
					>
						<div className="space-y-4">
							<motion.div
								className="flex items-center gap-2"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2, duration: 0.5 }}
							>
								<motion.span
									className="h-px w-8 bg-primary"
									initial={{ width: 0 }}
									animate={{ width: 32 }}
									transition={{ delay: 0.2, duration: 0.7 }}
								/>
								<motion.span
									className="text-sm font-medium uppercase tracking-wider text-primary"
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.4, duration: 0.5 }}
								>
									Agence d'Investissement
								</motion.span>
							</motion.div>
							<h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl">
								<motion.span
									className="text-primary block"
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3, duration: 0.7 }}
								>
									Economic Development
								</motion.span>
								<motion.span
									className="inline-block mt-1"
									initial={{ opacity: 0, x: -30 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5, duration: 0.7 }}
								>
									Board of Madagascar
								</motion.span>
							</h1>
						</div>

						<motion.p
							className="text-lg text-muted-foreground md:text-xl max-w-[520px] leading-relaxed"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 0.7, duration: 0.7 }}
						>
							Votre partenaire privilégié pour investir à
							Madagascar. Nous vous accompagnons dans chaque étape
							de votre projet d'investissement.
						</motion.p>

						<motion.div
							className="flex flex-wrap gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.9, duration: 0.7 }}
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									size="lg"
									className="rounded-full shadow-xl bg-primary hover:bg-primary/90 transition-all duration-300 group"
								>
									Pourquoi Madagascar
									<motion.span
										whileHover={{ x: 5 }}
										transition={{
											type: 'spring',
											stiffness: 400,
											damping: 10,
										}}
									>
										<ArrowRight className="h-4 w-4 ml-2" />
									</motion.span>
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
							>
								<Button
									size="lg"
									variant="outline"
									className="rounded-full border-primary/20 hover:border-primary hover:bg-primary/5 transition-all duration-300"
								>
									Création de société
								</Button>
							</motion.div>
						</motion.div>

						<motion.div
							className="flex items-center gap-6 pt-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 1.1, duration: 0.7 }}
						>
							<div className="flex -space-x-3">
								{[1, 2, 3].map((i) => (
									<motion.div
										key={i}
										className="h-10 w-10 rounded-full border-2 border-background bg-muted overflow-hidden"
										initial={{ opacity: 0, scale: 0.5 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{
											delay: 1.1 + i * 0.1,
											duration: 0.5,
										}}
									>
										<Image
											src={`/images/investor-${i}.jpg`}
											alt={`Investisseur ${i}`}
											width={40}
											height={40}
											className="h-full w-full object-cover"
										/>
									</motion.div>
								))}
							</div>
							<p className="text-sm text-muted-foreground">
								<span className="font-semibold text-foreground">
									200+
								</span>{' '}
								investisseurs nous font confiance
							</p>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative"
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.5, duration: 0.8 }}
					>
						<motion.div
							className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl transform rotate-3"
							animate={{
								opacity: [0.5, 0.8, 0.5],
								scale: [1, 1.02, 1],
							}}
							transition={{
								duration: 5,
								repeat: Infinity,
								ease: 'easeInOut',
							}}
						/>

						<motion.div
							className="relative rounded-2xl overflow-hidden shadow-2xl"
							whileHover={{ y: -5 }}
							transition={{ type: 'spring', stiffness: 300 }}
						>
							<div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10"></div>
							<div className="aspect-[4/3] w-full">
								<Image
									src="/images/madagascar-map.jpg"
									alt="Carte de Madagascar"
									fill
									className="object-cover"
									priority
								/>
								<motion.div
									className="absolute inset-0 bg-black"
									initial={{ opacity: 0.3 }}
									animate={{ opacity: 0 }}
									transition={{ duration: 1.2 }}
								/>
							</div>

							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white z-20">
								<motion.div
									className="flex items-center gap-2"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 1.3, duration: 0.7 }}
								>
									<motion.div
										animate={{
											y: [0, -5, 0],
										}}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: 'easeInOut',
										}}
									>
										<MapPin className="h-5 w-5 text-primary" />
									</motion.div>
									<p className="text-sm font-medium">
										La grande île de l'océan Indien
									</p>
								</motion.div>
							</div>

							<motion.div
								className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20"
								animate={{ rotate: 360 }}
								transition={{
									duration: 20,
									repeat: Infinity,
									ease: 'linear',
								}}
							>
								<Globe className="h-6 w-6 text-primary" />
							</motion.div>
						</motion.div>

						<motion.div
							className="absolute -bottom-6 -right-6 bg-white rounded-lg p-4 shadow-xl z-20"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.7 }}
							whileHover={{ scale: 1.05 }}
						>
							<div className="flex items-center gap-3">
								<motion.div
									className="rounded-full bg-primary/10 p-3"
									animate={{
										scale: [1, 1.1, 1],
									}}
									transition={{
										duration: 2,
										repeat: Infinity,
										ease: 'easeInOut',
									}}
								>
									<Building className="h-5 w-5 text-primary" />
								</motion.div>
								<div>
									<p className="text-sm font-medium">
										Secteurs porteurs
									</p>
									<p className="text-xs text-muted-foreground">
										Tourisme, Agribusiness, TIC
									</p>
								</div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};
