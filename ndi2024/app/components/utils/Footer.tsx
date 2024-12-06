import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-primary-900 text-white ">
			<div className="container mx-auto px-8 py-24">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					{/* Section Logo */}
					<div>
						<p className="mt-3 text-white">
							Site codé par la Babteam 🦧 lors de la nuit de
							l'info 2024
						</p>
					</div>

					{/* Section À propos */}
					<div>
						<h2 className="font-bold text-lg mb-4">🔎 À propos</h2>
						<ul className="space-y-2">
							<li>
								<Link href="https://www.nuitdelinfo.com/">
									La nuit de l&apos;info 2024
								</Link>
							</li>
							<li>
								<Link href="https://www.raceforwater.org/fr/">
									La Fondation Race for Water
								</Link>
							</li>
						</ul>
					</div>

					{/* Section Ressources */}
					<div>
						<h2 className="font-bold text-lg mb-4">
							📚 Linkedin de l'équipe
						</h2>
						<p className="mb-4 italic text-white">(svp un stage)</p>
						<ul className="space-y-2">
							<li>
								<Link href="https://www.linkedin.com/in/antoine-bretzner-17a501331/">
									Antoine Bretzner
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/nathan-wurpillot-b187122b1/">
									Nathan Wurpillot
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/ryan-belaib-978a69294/">
									Ryan Belaib
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/darris-benmamar-8171b62a6/">
									Darris Benmamar
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/erwan-coubret/">
									Erwan Coubret
								</Link>
							</li>
						</ul>
					</div>

					{/* Section Communauté */}
					<div>
						<h2 className="font-bold text-lg mb-4">
							🤝 Communauté
						</h2>

						<p className="mb-4 italic text-white">
							Ce site a été réalisé par des membres de la communauté Eos,
							une communauté de jeunes lanceurs projets dans la tech
						</p>
						
						<ul className="space-y-2">
							<li>
								<Link href={`https://www.eos-projets.fr/`}>Notre site</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="container border-t flex flex-col lg:flex-row justify-between mx-auto px-4 py-8">
				<p className="text-white">© 2024 Eos. Tous droits réservés.</p>
				<Link href="#" className="font-bold">
					Informations Légales (not yet implemented)
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
