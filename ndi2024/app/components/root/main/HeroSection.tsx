"use client";

import Image from "next/image";
import { Button } from "../../utils/Button";
import { FaCirclePlay, FaEye } from "react-icons/fa6";

const HeroSection = () => {
	return (
		<section
			className="relative min-h-screen flex flex-col items-center justify-center text-white py-20"
			id="hero"
		>
			{/* ---------- CONTENT ---------- */}
			<div className="relative z-20 text-center px-4 w-4/5 md:w-3/5 drop-shadow-2xl">
				<h1 className="text-3xl md:text-6xl lg:text-8xl italic tracking-tight opacity-0 animate-fade drop-shadow-2xl">
					SAUVEZ L&apos;
					<span className="ml-1 font-black text-primary-400">
						OCÉAN
					</span>{" "}
				</h1>

				<p className="mt-4 text-md md:text-xl lg:text-2xl md:w-3/5 mx-auto opacity-0 animate-fade delay-200 text-white">
					Sauvez le naufragé en vous sensibilisant aux dangers
					menaçant nos mers et océans.
				</p>
				<div className="flex flex-col lg:flex-row gap-4 mt-5 opacity-0 animate-fade delay-400 items-center lg:justify-center">
					<Button
						icon={FaCirclePlay}
						text="JOUER"
						link={"/game/intro"}
						backgroundColor="primary-500"
					/>
					<Button
						icon={FaEye}
						outline
						text="DÉCOUVRIR L'ASSOCIATION"
						link={"#fondation"}
						backgroundColor="primary-500"
					/>
				</div>
			</div>

			{/* ---------- BACKGROUND IMAGE ---------- */}
			<div className="absolute inset-0 pointer-events-none">
				<Image
					src="/hero/heroBackground.png"
					alt="hero background"
					fill
					objectFit="cover"
					quality={100}
					className="z-0"
				/>
			</div>
		</section>
	);
};

export default HeroSection;
