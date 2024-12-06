import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Flots - Le jeu",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children};</>;
}
