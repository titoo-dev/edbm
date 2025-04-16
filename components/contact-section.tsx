import {
	Facebook,
	Linkedin,
	MapPin,
	MessageSquare,
	Phone,
	Youtube,
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';

export const ContactSection = () => {
	return (
		<section className="w-full py-28 bg-white overflow-hidden relative">
			{/* Decorative background elements */}
			<div className="absolute inset-0 bg-[url('/images/pattern-bg.jpg')] opacity-5"></div>
			<div className="absolute left-0 top-20 w-1/3 h-72 bg-primary/10 rounded-r-full blur-3xl"></div>
			<div className="absolute right-0 bottom-20 w-1/4 h-64 bg-primary/5 rounded-l-full blur-3xl"></div>

			<div className="container mx-auto max-w-[1200px] px-4 md:px-6 relative">
				{/* Section header with animated underline */}
				<div className="flex flex-col items-center text-center mb-16">
					<div className="relative mb-2">
						<span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-1 rounded-full bg-primary/5">
							Contact
						</span>
						<span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-1 w-12 bg-primary rounded-full"></span>
					</div>

					<h2 className="text-4xl font-bold tracking-tight mt-6 mb-3">
						Contactez-{' '}
						<span className="text-primary relative">
							nous
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

					<p className="text-muted-foreground max-w-2xl text-lg">
						N'hésitez pas à nous contacter pour toute question
						concernant l'investissement à Madagascar. Notre équipe
						est à votre disposition pour vous aider.
					</p>
				</div>

				<div className="grid gap-10 lg:grid-cols-12 items-stretch">
					{/* Contact Form */}
					<Card className="lg:col-span-7 border border-border/30 bg-white">
						<CardHeader className="pb-4">
							<CardTitle className="text-2xl font-semibold">
								Envoyez-nous un message
							</CardTitle>
							<CardDescription>
								Nous vous répondrons dans les plus brefs délais
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form className="space-y-5">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
									<div className="space-y-2">
										<label
											htmlFor="name"
											className="text-sm font-medium text-foreground/80"
										>
											Nom
										</label>
										<Input
											id="name"
											placeholder="Votre nom"
											className="bg-gray-50/80 border-border/50 hover:border-border"
										/>
									</div>
									<div className="space-y-2">
										<label
											htmlFor="email"
											className="text-sm font-medium text-foreground/80"
										>
											Email
										</label>
										<Input
											id="email"
											placeholder="Votre email"
											type="email"
											className="bg-gray-50/80 border-border/50 hover:border-border"
										/>
									</div>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="subject"
										className="text-sm font-medium text-foreground/80"
									>
										Sujet
									</label>
									<Input
										id="subject"
										placeholder="Sujet de votre message"
										className="bg-gray-50/80 border-border/50 hover:border-border"
									/>
								</div>
								<div className="space-y-2">
									<label
										htmlFor="message"
										className="text-sm font-medium text-foreground/80"
									>
										Message
									</label>
									<Textarea
										id="message"
										placeholder="Votre message"
										className="min-h-[150px] bg-gray-50/80 border-border/50 hover:border-border"
									/>
								</div>
								<Button
									type="submit"
									className="w-full rounded-md text-md font-medium transition-all"
									size="lg"
								>
									Envoyer le message
								</Button>
							</form>
						</CardContent>
					</Card>

					{/* Contact Info */}
					<div className="lg:col-span-5 space-y-8 flex flex-col">
						<Card className="border border-border/30 bg-white">
							<CardHeader>
								<CardTitle className="text-xl font-medium">
									Nos coordonnées
								</CardTitle>
								<CardDescription>
									Comment nous joindre directement
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10 flex-shrink-0 text-primary">
										<MapPin className="h-5 w-5" />
									</div>
									<div>
										<h4 className="font-medium mb-1">
											Adresse
										</h4>
										<p className="text-sm text-muted-foreground">
											Immeuble EDBM, Avenue Gal Gabriel
											RAMANANTSOA Antaninarenina,
											ANTANANARIVO MADAGASCAR
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10 flex-shrink-0 text-primary">
										<Phone className="h-5 w-5" />
									</div>
									<div>
										<h4 className="font-medium mb-1">
											Téléphone
										</h4>
										<p className="text-sm text-muted-foreground">
											+261 20 22 681 21
											<br />
											+261 20 22 670 40
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<div className="p-3 rounded-full bg-primary/10 flex-shrink-0 text-primary">
										<MessageSquare className="h-5 w-5" />
									</div>
									<div>
										<h4 className="font-medium mb-1">
											Email
										</h4>
										<p className="text-sm text-muted-foreground">
											edbm@edbm.mg
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className="border border-border/30 bg-white mt-6">
							<CardContent className="pt-6">
								<h3 className="text-lg font-medium mb-4">
									Suivez-nous
								</h3>
								<div className="flex gap-3">
									<Button
										size="icon"
										variant="outline"
										className="rounded-full h-11 w-11 hover:bg-primary/10 hover:text-primary transition-all"
									>
										<Facebook className="h-5 w-5" />
										<span className="sr-only">
											Facebook
										</span>
									</Button>
									<Button
										size="icon"
										variant="outline"
										className="rounded-full h-11 w-11 hover:bg-primary/10 hover:text-primary transition-all"
									>
										<Linkedin className="h-5 w-5" />
										<span className="sr-only">
											LinkedIn
										</span>
									</Button>
									<Button
										size="icon"
										variant="outline"
										className="rounded-full h-11 w-11 hover:bg-primary/10 hover:text-primary transition-all"
									>
										<Youtube className="h-5 w-5" />
										<span className="sr-only">YouTube</span>
									</Button>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
};
