import type { Metadata } from "next";
import { Fugaz_One, Rubik } from "next/font/google";
import "../globals.css";

export const metadata: Metadata = {
	title: "NDI 2024",
	description: "Nuit de l'info 2024",
};

const fugazOne = Fugaz_One({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-fugazOne",
});

const rubik = Rubik({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-rubik",
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="fr">
			<body className={`${fugazOne.variable} ${rubik.variable}`}>
				{children}
			</body>
		</html>
	);
}
