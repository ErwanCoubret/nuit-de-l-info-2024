import NavbarGame from "@/app/components/utils/NavbarGame";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flots - Le jeu",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <div className="relative">
		<NavbarGame />
		{children}
		</div>;
}
