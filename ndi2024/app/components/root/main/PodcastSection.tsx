"use client";

import Image from "next/image";
import { Button } from "../../utils/Button";
import YoutubeEmbed from "../../utils/YoutubeVideo";
import { AiFillSound } from "react-icons/ai";

const PodcastSection = () => {
	return (
		<section
			className="relative min-h-screen flex flex-col items-center justify-center bg-primary-200 py-20"
			id="podcast"
		>
			{/* ---------- CONTENT ---------- */}
			<div className="relative z-20 px-4 w-4/5 md:w-3/5" id="fondation">
				<div className="flex opacity-0 animate-fade items-center justify-center text-3xl md:text-6xl lg:text-4xl text-primary-700 w-full mx-auto">
					<AiFillSound className="mr-2" />
					<h1 className="font-black tracking-tight">Le podcast</h1>
				</div>

				<p className="text-md md:text-lg lg:text-xl text-center mt-4 opacity-0 animate-fade delay-200 text-primary-700 w-full mx-auto mt-16">
					Voici un podcast réalisé par la fondation avec le chercheur Florian Sévellec.
				</p>

				<div className="flex flex-col gap-16 mt-16">
					<YoutubeEmbed videoUrl="https://www.youtube.com/embed/fnWfMPoQ80M" />
				</div>
			</div>
		</section>
	);
};

export default PodcastSection;
