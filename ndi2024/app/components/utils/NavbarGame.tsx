"use client";

import Link from "next/link";
import { FaDoorOpen } from "react-icons/fa";

const NavbarGame = () => {
	return (
		<>
			<nav
				id="navbar"
				className="w-full h-20 fixed top-0 z-50 flex justify-between pointer-events-none items-center px-5 md:px-16 xl:px-32 mt-4 ld:mt-8 animate-fade"
			>
				<div className={`flex`}></div>

				<ul
					className={`flex items-center backdrop-blur-sm bg-white rounded-lg p-1 lg:p-1.5 drop-shadow-lg shadow-lg text-white uppercase font-bold text-base pointer-events-auto`}
				>
					<li className="flex items-center">
						<Link
							href="/"
							className={`flex items-center justify-center bg-primary-500 hover:bg-primary-500/90 p-2 lg:px-5 lg:py-2 rounded-lg w-full`}
						>
							<FaDoorOpen className="lg:mr-2" />
							<div className="hidden lg:flex">QUITTER</div>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default NavbarGame;
