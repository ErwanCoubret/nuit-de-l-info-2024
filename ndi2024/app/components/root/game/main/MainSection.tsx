"use client";

import HeadSvg from "@/public/man/HEAD.svg";
import ChestSvg from "@/public/man/CHEST.svg";
import LArmSvg from "@/public/man/L_ARM.svg";
import LLegSvg from "@/public/man/L_LEG.svg";
import RLegSvg from "@/public/man/R_LEG.svg";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

function Man() {
	return (
		<div className="relative flex justify-center items-center">
			{/* Chest as the central element */}
			<Link
				href="/game/minigames/chest"
				className="absolute cursor-pointer z-10"
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={ChestSvg}
						alt="Chest"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Head positioned above the chest */}
			<Link
				href="/game/minigames/head"
				className="absolute cursor-pointer z-20"
				style={{
					transform: "translate(-50%, -145%)", // Position relative to chest
					top: "50%", // Align vertically
					left: "50%", // Align horizontally
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={HeadSvg}
						alt="Head"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Left Arm */}
			<Link
				href="/game/minigames/arms"
				className="absolute cursor-pointer"
				style={{
					transform: "translate(-100%, -100%) rotate(-45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={LArmSvg}
						alt="Left Arm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Right Arm */}
			<Link
				href="/game/minigames/arms"
				className="absolute cursor-pointer"
				style={{
					transform: "translate(0%, -100%) rotate(45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={LArmSvg}
						alt="Right Arm"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Left Leg */}
			<Link
				href="/game/minigames/legs"
				className="absolute cursor-pointer"
				style={{
					transform: "translate(-100%, 10%) rotate(45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw] ">
					<Image
						src={LLegSvg}
						alt="Left Leg"
						layout="fill"
						objectFit="contain"
					/>
				</div>
			</Link>

			{/* Right Leg */}
			<Link
				href="/game/main/legs"
				className="absolute cursor-pointer"
				style={{
					transform: "translate(0%, 10%) rotate(-45deg)", // Position relative to chest
					top: "50%",
					left: "50%",
				}}
			>
				<div className="relative xl:w-[10vw] xl:h-[10vw] lg:w-[20vw] lg:h-[20vw] w-[22vw] h-[22vw]">
					<Image
						src={RLegSvg}
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

  useEffect(() => {
    window.localStorage.getItem("armsFlag") === "1" && setArmsFlag(true);
    window.localStorage.getItem("headFlag") === "1" && setHeadFlag(true);
    window.localStorage.getItem("chestFlag") === "1" && setChestFlag(true);
    window.localStorage.getItem("legsFlag") === "1" && setLegsFlag(true);
  }
  , []);

	return (
		<div className="min-h-screen w-full flex flex-col items-center justify-center bg-primary-700 text-white">
			<div className="absolute top-20 flex flex-col justify-center lg:mb-0 mx-auto text-center p-5">
				<h1 className="text-2xl font-black text-primary-400 text-nowrap">
					SAUVEZ LE NAUFRAGÉ
				</h1>

				<p className="text-white">
					Cliquez sur une partie du corps du naufragé pour lancer un
					mini-jeu
				</p>

				<div className="flex gap-5">
					display flags :
          <p>HEAD : {headFlag ? "true" : "false"}</p>
          <p>CHEST : {chestFlag ? "true" : "false"}</p>
          <p>ARMS : {armsFlag ? "true" : "false"}</p>
          <p>LEGS : {legsFlag ? "true" : "false"}</p> 
				</div>
			</div>

			<Man />
		</div>
	);
}
