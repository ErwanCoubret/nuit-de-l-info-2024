"use client";

import Image from "next/image";
import { Button } from "../../utils/Button";

const FondationSection = () => {
	return (
		<section
			className="relative min-h-screen flex flex-col items-center justify-center bg-white py-20"
			id="hero"
		>
			{/* ---------- CONTENT ---------- */}
			<div className="relative z-20 px-4 w-4/5 md:w-3/5" id="fondation">
				<h1 className="text-3xl md:text-6xl lg:text-4xl text-center font-black tracking-tight opacity-0 animate-fade text-primary-700">
					À PROPOS DE LA FONDATION
				</h1>

				<div className="hidden lg:flex flex-col gap-16 mt-32">
					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<Image
							src="/fondation/RFW_1.jpg"
							alt="RFW 1"
							width={200}
							height={200}
							quality={100}
							className="w-full rounded-2xl"
						/>

						<div className="flex flex-col gap-4 w-full">
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
								Qui sont-ils ?
							</h2>
							<p className="text-md md:text-lg lg:text-xl">
								La
								<span className="font-bold text-primary-500">
									{" "}
									Fondation Race for Water
								</span>{" "}
								est une organisation dédiée à la préservation
								des océans et à la lutte contre la pollution
								plastique marine.
							</p>

							<p className="text-md md:text-lg lg:text-xl">
								Créée en 2010, cette fondation suisse combine
								innovation technologique et sensibilisation pour
								protéger les écosystèmes marins.
							</p>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<div className="flex flex-col gap-8 w-full">
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
								Leur mission
							</h2>
							<p className="text-md md:text-lg lg:text-xl">
								Grâce à leurs navires fonctionnant à l’éolien et
								à l’hydrogène, la fondation mène des missions
								scientifiques, éducatives et de plaidoyer à
								travers le monde.
							</p>
						</div>

						<Image
							src="/fondation/RFW_2.jpg"
							alt="RFW 2"
							width={200}
							height={200}
							quality={100}
							className="w-full rounded-2xl"
						/>
					</div>

					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<Image
							src="/fondation/RFW_3.jpeg"
							alt="RFW 1"
							width={200}
							height={200}
							quality={100}
							className="w-full rounded-2xl"
						/>

						<div className="flex flex-col gap-4 w-full">
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
								Leur objectif
							</h2>
							<p className="text-md md:text-lg lg:text-xl">
								Leur objectif est de proposer des solutions
								concrètes pour transformer les déchets
								plastiques en ressources énergétiques tout en
								mobilisant les citoyens, les entreprises et les
								gouvernements pour agir en faveur de nos océans.
							</p>
						</div>
					</div>
				</div>

				<div className="flex lg:hidden flex-col gap-16 mt-32">
					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<Image
							src="/fondation/RFW_1.jpg"
							alt="RFW 1"
							width={200}
							height={200}
							quality={100}
							className="w-full rounded-2xl"
						/>

						<div className="flex flex-col gap-4 w-full">
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
								Qui sont-ils ?
							</h2>
							<p className="text-md md:text-lg lg:text-xl">
								La
								<span className="font-bold text-primary-500">
									{" "}
									Fondation Race for Water
								</span>{" "}
								est une organisation dédiée à la préservation
								des océans et à la lutte contre la pollution
								plastique marine.
							</p>

							<p className="text-md md:text-lg lg:text-xl">
								Créée en 2010, cette fondation suisse combine
								innovation technologique et sensibilisation pour
								protéger les écosystèmes marins.
							</p>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<Image
							src="/fondation/RFW_2.jpg"
							alt="RFW 2"
							width={200}
							height={200}
							quality={100}
							className="w-full rounded-2xl"
						/>

						<div className="flex flex-col gap-8 w-full">
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
								Leur mission
							</h2>
							<p className="text-md md:text-lg lg:text-xl">
								Grâce à leurs navires fonctionnant à l’éolien et
								à l’hydrogène, la fondation mène des missions
								scientifiques, éducatives et de plaidoyer à
								travers le monde.
							</p>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-16 items-center">
						<Image
							src="/fondation/RFW_3.jpeg"
							alt="RFW 1"
							width={200}
							height={200}
							quality={100}
							className="w-full rounded-2xl"
						/>

						<div className="flex flex-col gap-4 w-full">
							<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-500">
								Leur objectif
							</h2>
							<p className="text-md md:text-lg lg:text-xl">
								Leur objectif est de proposer des solutions
								concrètes pour transformer les déchets
								plastiques en ressources énergétiques tout en
								mobilisant les citoyens, les entreprises et les
								gouvernements pour agir en faveur de nos océans.
							</p>
						</div>
					</div>
				</div>

				<div className="flex justify-center opacity-0 animate-fade delay-400 mt-16">
					<Button
						text="DÉCOUVRIR LA FONDATION"
						link={"https://www.raceforwater.org/fr/"}
						backgroundColor="primary-500"
					/>
				</div>
			</div>
		</section>
	);
};

export default FondationSection;
