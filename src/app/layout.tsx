import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ScrollBackground from "@/components/ScrollBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
	variable: "--font-inter",
	subsets: ["latin"],
});

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Ameera C| Frontend Developer",
	description:
		"Ameera – Frontend Developer specializing in React, Next.js, and modern UI development. Explore my projects, skills, and web development experience.",
	keywords: [
		"Frontend Developer",
		"React Developer",
		"Next.js Developer",
		"JavaScript Developer",
		"Tailwind CSS",
		"Web Developer Portfolio",
	],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
				<CustomCursor />
				<ScrollBackground />
				<Navbar />
				<main className="flex min-h-screen flex-col items-center selection:bg-accent/30 selection:text-black">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
