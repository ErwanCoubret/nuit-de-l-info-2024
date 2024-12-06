"use client";

import HeadGreenSvg from "@/public/man/HEAD_1_GREEN.svg";
import ChestGreenSvg from "@/public/man/CHEST_1_GREEN.svg";
import LArmGreenSvg from "@/public/man/L_ARM_1_GREEN.svg";
import LLegGreenSvg from "@/public/man/L_LEG_1_GREEN.svg";
import RLegGreenSvg from "@/public/man/R_LEG_1_GREEN.svg";

import HeadRedSvg from "@/public/man/HEAD_1_RED.svg";
import ChestRedSvg from "@/public/man/CHEST_1_RED.svg";
import LArmRedSvg from "@/public/man/L_ARM_1_RED.svg";
import LLegRedSvg from "@/public/man/L_LEG_1_RED.svg";
import RLegRedSvg from "@/public/man/R_LEG_1_RED.svg";

import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

function Man({
	armsFlag,
	headFlag,
	chestFlag,
	legsFlag,
}: {
	armsFlag: boolean;
	headFlag: boolean;
	chestFlag: boolean;
	legsFlag: boolean;
}) {
	return (
		<div className="relative flex justify-center items-center opacity-0 animate-fade delay-400">
			{/* Chest as the central element */}
			<Link
				href={chestFlag ? "" : "/game/minigames/chest"}
				className={`absolute  z-10 ${
					chestFlag ? "cursor-not-allowed" : "cursor-pointer"
				}`}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={chestFlag ? ChestGreenSvg : ChestRedSvg}
						alt="Chest"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Head positioned above the chest */}
			<Link
				href={headFlag ? "" : "/game/minigames/head"}
				className={`absolute z-20 ${
					headFlag ? "cursor-not-allowed" : "cursor-pointer"
				}`}
				style={{
					transform: "translate(-50%, -145%)", // Position relative to chest
					top: "50%", // Align vertically
					left: "50%", // Align horizontally
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={headFlag ? HeadGreenSvg : HeadRedSvg}
						alt="Head"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Left Arm */}
			<Link
				href={armsFlag ? "" : "/game/minigames/arms"}
				className={`absolute ${
					armsFlag ? "cursor-not-allowed" : "cursor-pointer"
				}`}
				style={{
					transform: "translate(-100%, -100%) rotate(-45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={armsFlag ? LArmGreenSvg : LArmRedSvg}
						alt="Left Arm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Right Arm */}
			<Link
				href={armsFlag ? "" : "/game/minigames/arms"}
				className={`absolute ${
					armsFlag ? "cursor-not-allowed" : "cursor-pointer"
				}`}
				style={{
					transform: "translate(0%, -100%) rotate(45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={armsFlag ? LArmGreenSvg : LArmRedSvg}
						alt="Right Arm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Left Leg */}
			<Link
				href={legsFlag ? "" : "/game/minigames/legs"}
				className={`absolute ${
					legsFlag ? "cursor-not-allowed" : "cursor-pointer"
				}`}
				style={{
					transform: "translate(-100%, 10%) rotate(45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw] ">
					<Image
						src={legsFlag ? RLegGreenSvg : RLegRedSvg}
						alt="Left Leg"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Right Leg */}
			<Link
				href={legsFlag ? "" : "/game/minigames/legs"}
				className={`absolute ${
					legsFlag ? "cursor-not-allowed" : "cursor-pointer"
				}`}
				style={{
					transform: "translate(0%, 10%) rotate(-45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={legsFlag ? LLegGreenSvg : LLegRedSvg}
						alt="Right Leg"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>
		</div>
	);
}

export default function MainSection() {
	const [armsFlag, setArmsFlag] = useState(false);
	const [headFlag, setHeadFlag] = useState(false);
	const [chestFlag, setChestFlag] = useState(false);
	const [legsFlag, setLegsFlag] = useState(false);

	// Effect pour récupérer les flags depuis le localStorage
	useEffect(() => {
		const armsFlagFromStorage = window.localStorage.getItem("armsFlag");
		const headFlagFromStorage = window.localStorage.getItem("headFlag");
		const chestFlagFromStorage = window.localStorage.getItem("chestFlag");
		const legsFlagFromStorage = window.localStorage.getItem("legsFlag");

		if (armsFlagFromStorage === "1") setArmsFlag(true);
		if (headFlagFromStorage === "1") setHeadFlag(true);
		if (chestFlagFromStorage === "1") setChestFlag(true);
		if (legsFlagFromStorage === "1") setLegsFlag(true);
	}, []);

	// Effect pour vérifier si toutes les parties sont guéries
	useEffect(() => {
		if (armsFlag && headFlag && chestFlag && legsFlag) {
			window.location.href = "/game/ending";
		}
	}, [armsFlag, headFlag, chestFlag, legsFlag]);

	const remainingParts =
		4 -
		(armsFlag ? 1 : 0) -
		(headFlag ? 1 : 0) -
		(chestFlag ? 1 : 0) -
		(legsFlag ? 1 : 0);

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-primary-800 text-white">
			{/* Titre */}
			<div className="absolute top-20 flex flex-col justify-center lg:mb-0 mx-auto text-center p-5">
				<h1 className="text-2xl lg:text-4xl font-black text-primary-400 text-nowrap opacity-0 animate-fade">
					SAUVEZ LE NAUFRAGÉ
				</h1>
				<p className="text-white text-lg lg:text-xl opacity-0 animate-fade delay-200">
					Cliquez sur une{" "}
					<span className="mx-1 font-bold text-red-500">
						partie malade
					</span>{" "}
					du corps du naufragé pour lancer un mini-jeu
				</p>
			</div>

			{/* Corps du personnage */}
			<Man
				armsFlag={armsFlag}
				headFlag={headFlag}
				chestFlag={chestFlag}
				legsFlag={legsFlag}
			/>

			{/* Nombre de parties restantes */}
			<div className="absolute bottom-20 flex flex-col justify-center lg:mb-0 mx-auto text-center p-5">
				<p className="text-white text-lg lg:text-xl opacity-0 animate-fade delay-600 italic">
					Encore{" "}
					<span className="mx-1 font-bold text-red-500">
						{remainingParts} parties
					</span>{" "}
					malades à soigner
				</p>
			</div>
		</div>
	);
}
