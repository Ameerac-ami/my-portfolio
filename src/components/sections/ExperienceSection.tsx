"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Frontend Developer",
        company: "Talrop",
        period: "January 2023 - Present",
        type: "Full-time",
        description:
            "Developed and maintained high-performance web applications like Dett and Tegain using Next.js, focusing on robust UI architecture and seamless UX.",
        achievements: [
            "Engineered responsive and dynamic interfaces using React, Tailwind CSS, and Material UI.",
            "Implemented state management with Zustand and elevated user experiences via Framer Motion & AOS animations.",
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Steyp",
        period: "July 2022 - January 2023",
        type: "Internship",
        description:
            "Created engaging and interactive interfaces for internal projects, including Steyp. ",
        achievements: [
            "Built scalable UI components and managed application state using React.js and Redux/Context API.",
            "Collaborated with backend teams to integrate APIs, optimize frontend performance, and fix critical usability bugs.",
        ],
    },
    {
        title: "Junior Python Django Developer",
        company: "Arion Infotech",
        period: "October 2020 - January 2021",
        type: "Full-time Trainee",
        description:
            "Developed and maintained high-performance web applications using Django, focusing on robust backend architecture and seamless UX using Angular.",
        achievements: [
            // "Engineered responsive and dynamic interfaces using Angular, Angular material and Bootstrap.",
            // "Implemented state management with Redux and elevated user experiences via Framer Motion & AOS animations.",
        ],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ExperienceSection() {
    return (
        <section
            id="experience"
            className="w-full max-w-5xl px-6 py-24 mx-auto cursor-default"
        >
            <div className="mb-16 flex flex-col items-center text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-4 font-display text-4xl font-bold text-slate-900 tracking-tight"
                >
                    Experience Journey
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="max-w-2xl text-slate-600 text-lg"
                >
                    A timeline of my professional roles and key contributions in
                    frontend development and UI engineering.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l border-slate-400 ml-3 md:ml-6"
            >
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="mb-12 relative pl-8 md:pl-12"
                    >
                        {/* Timeline Node */}
                        <div className="absolute w-4 h-4 bg-white border-2 border-slate-200 opacity-75 rounded-full -left-[8px] top-7">
                            <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-slate-400  animate-pulse "></div>
                        </div>

                        {/* Content Card */}
                        <div className="group rounded-[2rem] border border-slate-200 bg-white/50 p-8 backdrop-blur-sm shadow-sm hover:border-accent/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                                        {exp.title}
                                    </h3>
                                    <div className="flex items-center gap-4">
                                        <h4 className="text-lg font-medium text-slate-600">
                                            {exp.company}
                                        </h4>
                                        <div
                                            className="flex items-center gap-2 rounded-full border border-slate-200 px-4 py-1.5"
                                            style={{ animationDelay: "0.5s" }}
                                        >
                                            <span className="relative flex h-2 w-2">
                                                {/* <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span> */}
                                                <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-400"></span>
                                            </span>
                                            <span className="text-xs font-medium text-slate-600 tracking-wider">
                                                {exp.type}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200/50 w-fit">
                                    <span className="text-sm font-semibold text-slate-600 tracking-wider">
                                        {exp.period}
                                    </span>
                                </div>
                            </div>

                            <p className="text-slate-600 mb-6 leading-relaxed">
                                {exp.description}
                            </p>

                            <ul className="space-y-2">
                                {exp.achievements.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start text-slate-600"
                                    >
                                        <span className="mr-3 text-slate-600 font-bold">
                                            •
                                        </span>
                                        <span className="leading-relaxed text-sm md:text-base">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
