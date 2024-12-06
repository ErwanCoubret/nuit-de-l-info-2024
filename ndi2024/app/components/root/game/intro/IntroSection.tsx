"use client";

import { Button } from "@/app/components/utils/Button";
import { useEffect } from "react";
import { FaFlag, FaVirus } from "react-icons/fa";
import { GiClick } from "react-icons/gi";

export default function IntroSection() {
	useEffect(() => {
		window.localStorage.setItem("flagArms", "false");
		window.localStorage.setItem("flagHead", "false");
		window.localStorage.setItem("flagLegs", "false");
		window.localStorage.setItem("flagChest", "false");
	}, []);

	return (
		<section
			className="relative min-h-screen flex flex-col items-center justify-center bg-primary-800 py-20"
			id="hero"
		>
			<div className="relative z-20 flex flex-col gap-8 px-4 w-4/5 md:w-3/5 drop-shadow-2xl">
				<h1 className="text-3xl md:text-6xl lg:text-5xl italic tracking-tight opacity-0 font-black animate-fade drop-shadow-2xl text-primary-400 text-center">
					LE JEU
				</h1>

				<div className="flex flex-col gap-4 text-center">
					<p className="text-md md:text-xl lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-200 text-white">
						Les différentes parties du corps du naufragé sont toutes
						infectées par un virus inconnu...
					</p>

					<p className="text-md md:text-xl lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-400 text-white">
						Utilisez votre savoir pour le sauver.
					</p>
				</div>

				<h1 className="text-3xl md:text-6xl lg:text-3xl italic tracking-tight opacity-0 font-black animate-fade delay-600 drop-shadow-2xl text-primary-400 text-center">
					FONCTIONNEMENT
				</h1>

				<div className="flex flex-col gap-8 text-white">
					<div className="flex gap-4 items-center lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-700">
						<GiClick className="text-2xl" />

						<p className="text-md md:text-xl text-white">
							Appuyez sur une partie du corps du naufragé (tête,
							tronc, bras ou jambes) pour lancer un mini-jeu
						</p>
					</div>
					<div className="flex gap-4 items-center lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-800">
						<FaFlag className="text-2xl" />

						<p className="text-md md:text-xl text-white">
							Menez à bien le mini-jeu pour désinfecter la partie
							du corps ciblée
						</p>
					</div>
					<div className="flex gap-4 items-center lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-900">
						<FaVirus className="text-2xl" />

						<p className="text-md md:text-xl text-white">
							Désinfectez toutes les parties du corps pour sauver
							le naufragé
						</p>
					</div>
				</div>

				<div className="flex justify-center mt-5 opacity-0 animate-fade delay-1000">
					<Button
						text="COMMENCER"
						link={"/game/main"}
						backgroundColor="primary-500"
					/>
				</div>
			</div>
		</section>
	);
}
