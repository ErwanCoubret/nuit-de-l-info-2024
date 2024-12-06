import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
	text: string;
	outline?: boolean;
	backgroundColor?: string;
	textColor?: string;
	link?: string;
	icon?: IconType;
	border?: string;
}

export const Button: React.FC<ButtonProps> = ({
	text,
	backgroundColor = "primary-500",
	outline = false,
	textColor = "white",
	link,
	icon: Icon,
	border = "border-white",
}) => {
	// Classes dynamiques pour le style
	const baseClasses = `sm text-xs sm:text-md lg:text-lg xl:text-lg flex items-center px-8 py-3 font-bold rounded-lg transition-transform transform hover:scale-105`;
	const outlineClasses = outline
		? `bg-transparent text-${textColor} border ${border}`
		: `bg-${backgroundColor} text-${textColor} border-none`;

	if (link) {
		return (
			<Link href={link}>
				<button className={`${baseClasses} ${outlineClasses}`}>
					{Icon && <Icon className="mr-2" />}
					{text}
				</button>
			</Link>
		);
	} else {
		return (
			<button className={`${baseClasses} ${outlineClasses}`}>
				{Icon && <Icon className="mr-2" />}
				{text}
			</button>
		);
	}
};
