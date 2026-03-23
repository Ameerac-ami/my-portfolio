// "use client";
import { motion, Variants } from "framer-motion";
export default function SkillsSection() {
    const skillCategories = [
        {
            title: "Frontend",
            skills: [
                "HTML5",
                "CSS3",
                "Bootstrap",
                "JQuery",
                "Next.js",
                "React",
                "Styled Components",
                "Tailwind CSS",
                "Framer Motion",
                "Material UI",
                "Zustand",
                "TypeScript",
                "JavaScript",
                "Context API",
            ],
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
            ),
        },
        {
            title: "Backend",
            skills: [
                "Python",
                "Django",
                "Node.js",
                "PostgreSQL",
                "Firebase",
                "FastAPI",
            ],
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v4a2 2 0 00-2-2"
                    />
                </svg>
            ),
        },
        {
            title: "Cloud & Tools",
            skills: [
                "Vercel",
                "Git",
                "GitHub",
                "Figma",
                "Postman",
                "Agile",
                // "Backlog Grooming",
                // "Project Planning",
            ],
            icon: (
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                </svg>
            ),
        },
    ];
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 12,
            },
        },
    };

    return (
        <section id="skills" className="w-full max-w-7xl px-6 py-26">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="mb-20 text-center"
            >
                <motion.h2
                    variants={itemVariants}
                    className="mb-4 font-display text-4xl font-bold text-slate-900 tracking-tight"
                >
                    Technical Expertise
                </motion.h2>
                <motion.p
                    variants={itemVariants}
                    className="max-w-2xl mx-auto text-slate-600 text-lg"
                >
                    A comprehensive overview of my technical stack and
                    professional highlights.
                </motion.p>
            </motion.div>

            {/* Highlight Cards Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid gap-6 md:grid-cols-3 mb-20"
            >
                <motion.div
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-sm shadow-sm  hover:border-accent/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white transition-transform group-hover:scale-110">
                        <span className="text-xl font-bold">3+</span>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Years Experience
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Proven track record of building production-ready web
                        applications with technical excellence.
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/10"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-sm shadow-sm  hover:border-accent/40 hover:shadow-xl hover:-translate-y-2 transition-all  duration-300"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white transition-transform group-hover:scale-110">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                            />
                        </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Specialized Stack
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Deeply specialized in Next.js, React, and TypeScript for
                        high-performance frontend solutions.
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-secondary/5 blur-2xl transition-all group-hover:bg-secondary/10"></div>
                </motion.div>

                <motion.div
                    variants={itemVariants}
                    className="group relative overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-sm shadow-sm  hover:border-accent/40 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                >
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary text-white transition-transform group-hover:scale-110">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                        </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-slate-900">
                        Agile & Planning
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                        Expertise in Agile methodology, project planning, and
                        backlog grooming. Closely work with backend developers
                        and UI designs to ensure seamless delivery.
                    </p>
                    <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl transition-all group-hover:bg-accent/10"></div>
                </motion.div>
            </motion.div>

            {/* Skills Categories Grid */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
                className="grid gap-8 md:grid-cols-3"
            >
                {skillCategories.map((category, i) => (
                    <motion.div
                        key={i}
                        variants={itemVariants}
                        className="rounded-3xl border border-slate-200 bg-white/50 p-8 shadow-sm hover:border-accent/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-900 border border-slate-100">
                                {category.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">
                                {category.title}
                            </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, j) => (
                                <span
                                    key={j}
                                    className="rounded-full bg-white px-4 py-1.5 text-sm font-medium text-slate-700 border border-slate-400/50"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
