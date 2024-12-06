"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaSailboat } from "react-icons/fa6";
import { AiFillSound } from "react-icons/ai";

const Navbar = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const [hideMobileMenu, setHideMobileMenu] = useState(true);

	return (
		<>
			<nav
				id="navbar"
				className="w-full h-20 fixed top-0 z-50 flex justify-between pointer-events-none items-center px-5 md:px-16 xl:px-32 mt-4 ld:mt-8 animate-fade"
			>
				<div className={`hidden justify-center lg:flex items-center `}>
					<Image
						src={"/logo/flots.svg"}
						alt="logo with text"
						width={130}
						height={200}
						className="object-contain block select-none pointer-events-auto"
					/>
				</div>

				<div className={`flex lg:hidden`}></div>


				<ul
					className={`hidden lg:flex items-center backdrop-blur-sm bg-primary-500 rounded-lg p-1.5 drop-shadow-lg shadow-lg text-white uppercase font-bold text-base pointer-events-auto`}
				>
					<li className="flex items-center">
						<Link
							href="#fondation"
							className={`flex items-center justify-center hover:bg-white/10 px-5 py-2 rounded w-full`}
						>
							<FaSailboat className="mr-2" />
							LA FONDATION
						</Link>
					</li>
					<li className="flex items-center">
						<Link
							href="#podcast"
							className={`flex items-center justify-center hover:bg-white/10 px-5 py-2 rounded w-full`}
						>
							<AiFillSound className="mr-2" />
							LE PODCAST
						</Link>
					</li>
				</ul>

				<div className="pointer-events-auto lg:hidden">
					<button
						className={`w-10 h-10 flex items-center justify-center rounded-lg bg-primary-500 text-white drop-shadow-lg`}
						onClick={() => {
							setOpenMobileMenu(true);
							setHideMobileMenu(false);
						}}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>
			</nav>

			{openMobileMenu && (
				<nav
					className={`fixed right-screen lg:hidden w-screen h-screen z-50 bg-primary-500 border-white border-l-8 ${
						!hideMobileMenu
							? "flex animate-navbarTranslateIn"
							: "animate-navbarTranslateOut"
					}`}
				>
					<div className="w-full px-8 absolute mt-8 flex justify-between items-center ">
						<div className="justify-center lg:flex items-center">
							<Image
								src={
									"/logo/flots.svg"
								}
								alt="logo with text"
								width={110}
								height={110}
								className="object-contain block select-none"
							/>
						</div>

						<button
							className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary-50 text-primary-500"
							onClick={() => setHideMobileMenu(true)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						</button>
					</div>

					<ul className="flex flex-col items-start text-xl text-primary-500 uppercase font-bold ps-8 pt-32 gap-3">
						<li className="flex items-center">
							<Link
								href="#fondation"
								onClick={() => {
									setHideMobileMenu(true);
								}}
								className="flex items-center justify-center bg-primary-50 px-5 py-2 rounded w-full"
							>
								<FaSailboat className="mr-2" />
								LA FONDATION
							</Link>
						</li>
						<li className="flex items-center">
							<Link
								href="#podcast"
								onClick={() => {
									setHideMobileMenu(true);
								}}
								className="flex items-center justify-center bg-primary-50 px-5 py-2 rounded w-full"
							>
								<AiFillSound className="mr-2" />
								LE PODCAST
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
};

export default Navbar;
