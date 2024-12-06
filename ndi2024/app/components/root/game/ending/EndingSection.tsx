"use client";

import { Button } from "@/app/components/utils/Button";
import Link from "next/link";
import { useEffect } from "react";

export default function EndingSection() {
    useEffect(() => {
		// Réinitialiser les flags dans le localStorage
		window.localStorage.setItem("flagArms", "0");
		window.localStorage.setItem("flagHead", "0");
		window.localStorage.setItem("flagLegs", "0");
		window.localStorage.setItem("flagChest", "0");
	}, []);
    
	return (
		<section
			className="relative min-h-screen flex flex-col items-center justify-center bg-primary-800 py-20"
			id="hero"
		>
			<div className="relative z-20 flex flex-col gap-5 lg:gap-8 px-4 w-4/5 md:w-3/5 drop-shadow-2xl">
				<h1 className="text-3xl md:text-6xl lg:text-5xl italic tracking-tight opacity-0 font-black animate-fade drop-shadow-2xl text-primary-400 text-center">
					🎉 FÉLICITATIONS 🎉
				</h1>

				<div className="flex flex-col gap-2 lg:gap-4 text-center">
					<p className="text-md md:text-xl lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-200 text-white">
						Grâce à votre savoir et vos efforts, le naufragé a été sauvé !
					</p>
				</div>

				<h1 className="text-3xl md:text-6xl lg:text-3xl italic tracking-tight opacity-0 font-black animate-fade delay-600 drop-shadow-2xl text-primary-400 text-center">
					REMERCIEMENTS
				</h1>

				<div className="flex flex-col gap-4 lg:gap-8 text-white">
					<div className="flex gap-4 items-center lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-700">
						<p className="text-md md:text-xl text-white">
							Nous vous remercions d&apos;avoir joué au jeu réalisé dans le cadre de la Nuit de l&apos;Info 2024.
						</p>
					</div>
					<div className="flex gap-4 items-center lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-800">
						<p className="text-md md:text-xl text-white">
							Si vous avez aimé le jeu, n&apos;hésitez pas à consulter les profils des membres de l&apos;équipe :
						</p>
					</div>
					<div className="flex flex-wrap justify-center gap-4 lg:gap-6 opacity-0 animate-fade delay-1000">
						<ul className="text-white space-y-2">
							<li>
								<Link href="https://www.linkedin.com/in/antoine-bretzner-17a501331/" target="_blank" className=" text-xl font-bold text-primary-400 underline">
									Antoine Bretzner
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/nathan-wurpillot-b187122b1/" target="_blank" className=" text-xl font-bold text-primary-400 underline">
									Nathan Wurpillot
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/ryan-belaib-978a69294/" target="_blank" className=" text-xl font-bold text-primary-400 underline">
									Ryan Belaib
								</Link>
							</li>
							<li>
								<Link href="https://www.linkedin.com/in/darris-benmamar-8171b62a6/" target="_blank" className=" text-xl font-bold text-primary-400 underline">
									Darris Benmamar
								</Link>
							</li>
							<li>
								<Link href="https://www.erwancoubret.fr" target="_blank" className=" text-xl font-bold text-primary-400 underline">
									Erwan Coubret
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-4 items-center opacity-0 animate-fade delay-1200">
						<p className="text-md md:text-xl text-white">
							Pour en savoir plus :
						</p>
						<ul className="text-white space-y-2">
							<li>
								<Link href="https://www.nuitdelinfo.com/" target="_blank" className="text-xl font-bold text-primary-400 underline">
									La Nuit de l&apos;Info 2024
								</Link>
							</li>
							<li>
								<Link href="https://www.raceforwater.org/fr/" target="_blank" className="text-xl font-bold text-primary-400 underline">
									La Fondation Race for Water
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="flex gap-4 justify-center mt-5 opacity-0 animate-fade delay-1400">
					<Button
						text="RETOUR"
						link={"/"}
						backgroundColor="primary-500"
					/>
				</div>
			</div>
		</section>
	);
}
