import Link from "next/link";
import React from "react";

interface ButtonProps {
	text: string;
	backgroundColor?: string;
	textColor?: string;
	link?: string;
	border?: string;
}

export const Button: React.FC<ButtonProps> = ({
	text,
	backgroundColor = "primary-500",
	textColor = "white",
	link,
}) => {
	if (link) {
		return (
			<Link href={link}>
				<button
					className={`sm
			text-xs sm:text-md lg:text-lg xl:text-lg
            flex items-center
            px-8 py-3 bg-primary-500 text-${textColor}
			font-bold rounded-lg transition-transform transform hover:scale-105
			`}
				>
					{text}
				</button>
			</Link>
		);
	} else {
		return (
			<button
				className={`sm
			text-xs sm:text-md lg:text-lg xl:text-lg
            flex items-center
            px-8 py-3 bg-${backgroundColor} text-${textColor}
			font-bold rounded-lg transition-transform transform hover:scale-105
			`}
			>
				{text}
			</button>
		);
	}
};
