"use client";

export default function Navbar() {
	const navLinks = [
		{ name: "Home", id: "home" },
		{ name: "About", id: "about" },
		{ name: "Skills", id: "skills" },
		{ name: "Projects", id: "projects" },
		{ name: "Contact", id: "contact" },
	];

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed top-0 z-50 w-full px-6 py-4">
			<div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 backdrop-blur-md shadow-sm">
				<button
					onClick={() => scrollToSection("home")}
					className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none">
					<div className="relative h-10 w-10 overflow-hidden rounded-full border border-slate-200">
						<img
							src="/assets/images/profile.JPG"
							alt="Ameera"
							className="h-full w-full object-cover"
						/>
					</div>
					<div className="flex flex-col text-left">
						<div className="text-lg font-bold tracking-tight text-slate-900 font-display leading-tight">
							AMEERA<span className="text-primary">.</span>
						</div>
						<span className="text-[10px] font-medium uppercase tracking-wider text-slate-500">
							Frontend Engineer
						</span>
					</div>
				</button>

				<div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
					{navLinks.map((link) => (
						<button
							key={link.name}
							onClick={() => scrollToSection(link.id)}
							className="transition-colors hover:text-slate-900 focus:outline-none">
							{link.name}
						</button>
					))}
				</div>
				<button
					onClick={() => scrollToSection("contact")}
					className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg focus:outline-none">
					Let&apos;s Connect
				</button>
			</div>
		</nav>
	);
}
