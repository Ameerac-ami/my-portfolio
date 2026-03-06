import { useState } from "react";
import { projects } from "@/lib/projects";

export default function ProjectsSection() {
	const [showAllProjects, setShowAllProjects] = useState(false);
	const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

	return (
		<section id="projects" className="w-full max-w-7xl px-6 py-26">
			<div className="mb-16 flex flex-col items-center text-center reveal">
				<h2 className="mb-4 font-display text-4xl font-bold text-slate-900">
					Featured Projects
				</h2>
				<p className="max-w-xl text-slate-600">
					A selection of my recent work in E-commerce, and modern web
					applications.
				</p>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{displayedProjects.map((project, i) => (
					<div
						key={i}
						className="reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-primary/50 hover:shadow-xl"
						style={{ transitionDelay: `${i * 0.1}s` }}>
						{/* <div className="relative aspect-video w-full overflow-hidden">
							<img
								src={project.image}
								alt={project.title}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
						</div> */}
						<div className="p-6">
							<h3 className="mb-2 text-xl font-bold text-slate-900">
								{project.title}
							</h3>
							<p className="mb-4 text-sm text-slate-600 line-clamp-2">
								{project.desc}
							</p>
							<div className="flex flex-wrap gap-2 mb-6">
								{project.tech.map((tag, j) => (
									<span
										key={j}
										className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 border border-slate-200">
										{tag}
									</span>
								))}
							</div>
							<div className="flex flex-wrap gap-4">
								{project.links.map((link, k) => (
									<a
										key={k}
										href={link.url}
										target="_blank"
										className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all">
										{link.label}
										<svg
											className="w-4 h-4"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 8l4 4m0 0l-4 4m4-4H3"
											/>
										</svg>
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>

			{projects.length > 3 && (
				<div className="mt-16 flex justify-center reveal">
					<button
						onClick={() => setShowAllProjects(!showAllProjects)}
						className="group flex items-center gap-2 rounded-full border border-slate-200 bg-white px-8 py-3 font-bold text-slate-900 transition-all hover:border-slate-400 hover:bg-slate-50">
						{showAllProjects
							? "Show Featured"
							: "View All Projects"}
						<svg
							className={`h-4 w-4 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M19 9l-7 7-7-7"
							/>
						</svg>
					</button>
				</div>
			)}
		</section>
	);
}
