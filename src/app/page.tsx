"use client";

import Link from "next/link";
import { useReveal } from "@/hooks/useReveal";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
	useReveal();

	return (
		<div className="w-full flex flex-col items-center">
			{/* Hero Section */}
			<section
				id="home"
				className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-24 max-md:pt-46">
				<div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-white/30 blur-[120px]"></div>
				<div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-black/5 blur-[120px]"></div>

				<div className="flex max-w-4xl flex-col items-center text-center animate-fade-in">
					<p
						className="hero-kicker text-xs font-semibold uppercase tracking-[0.25em] text-black/70 mb-4 animate-slide-up"
						style={{ animationDelay: "0.1s" }}>
						Frontend Engineer · React · Next.js
					</p>

					<h1
						className="mb-6 font-display text-3xl font-bold leading-tight text-black md:text-5xl animate-slide-up"
						style={{ animationDelay: "0.2s" }}>
						Building Modern, <br />
						<span className="text-gradient">
							{" "}
							High-Performance Web Experiences
						</span>
					</h1>

					<p
						className="mb-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl animate-slide-up"
						style={{ animationDelay: "0.3s" }}>
						I build responsive, scalable, and high-performance
						interfaces using React, Next.js, and modern web
						technologies, with a certified background in full-stack
						development.
					</p>

					<div
						className="flex flex-col gap-4 sm:flex-row animate-slide-up"
						style={{ animationDelay: "0.4s" }}>
						<Link
							href="/projects"
							className="flex h-14 items-center justify-center rounded-xl bg-black px-8 font-bold text-white transition-all hover:scale-105 hover:bg-neutral-900 shadow-xl">
							View My Work
						</Link>
						<Link
							href="/contact"
							className="flex h-14 items-center justify-center rounded-xl border border-black/10 bg-white/40 px-8 font-bold text-black backdrop-blur-sm transition-all hover:bg-white/60">
							Let&apos;s Talk
						</Link>
					</div>

					<div
						className="mt-12 flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm animate-slide-up"
						style={{ animationDelay: "0.5s" }}>
						<span className="relative flex h-2 w-2">
							<span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
							<span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
						</span>
						<span className="text-xs font-medium text-slate-600 tracking-wider">
							Available for full-time and freelance opportunities
						</span>
					</div>
				</div>
			</section>

			<AboutSection />
			<SkillsSection />
			<ProjectsSection />
			<ContactSection />
		</div>
	);
}
