export interface Project {
	title: string;
	desc: string;
	tech: string[];
	image: string;
	links: { label: string; url: string }[];
}

export const projects: Project[] = [
	{
		title: "Dett - Quick Commerce",
		desc: "A high-performance Quick Commerce platform featuring an Admin Panel and Web App landing page, powered by smooth AOS animations for a premium user experience.",
		tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Firebase"],
		image: "/assets/images/dett.png",
		links: [
			{ label: "Live Demo", url: "https://www.dett.app/" },
			{ label: "Dett Admin", url: "https://chief.dett.app/" },
		],
	},
	{
		title: "Tegain",
		desc: "An IT services platform where businesses request custom software solutions. I developed and refined user interfaces to provide a smooth and responsive user experience.",
		tech: ["Next.js", "TypeScript", "Material UI", "Framer Motion", "AOS"],
		image: "https://tegain-website-static-media-bucket.s3.ap-south-1.amazonaws.com/assets/images/26-06-2024/og-image.jpg",
		links: [{ label: "Live Demo", url: "https://tegain.com/" }],
	},
	{
		title: "WiseTalkies",
		// desc: "focusing on UI structuring and fixing major interface bugs to improve usability and performance.",
		desc: "An edutainment platform offering expert-led online courses through short cinematic video lessons.",
		tech: [
			"React.js",
			"JavaScript(ES6+)",
			"Styled Components",
			"React Bootstrap",
		],
		image: "https://wisetalkies.blr1.cdn.digitaloceanspaces.com/assets/wisetalkies-og.jpg",
		links: [{ label: "Live Demo", url: "https://wisetalkies.com/" }],
	},
	{
		title: "Steyp - Coding learning platform",
		desc: "Interactive platform for video-based coding education with structured courses and real-time progress tracking.",
		tech: ["React.js", "Styled Components", "Redux"],
		image: "https://wisetalkies.blr1.cdn.digitaloceanspaces.com/assets/wisetalkies-og.jpg",
		links: [{ label: "Live Demo", url: "https://wisetalkies.com/" }],
	},
	{
		title: "Learners UAE LMS",
		desc: "Learners UAE LMS is an online learning management system used to deliver and manage educational courses, allowing students to access study materials, assignments, and track their learning progress.",
		tech: [
			"React.js",
			"Styled Components",
			"JavaScript(ES6+)",
			"React Context API",
		],
		image: "https://lms.learnersuae.com/assets/images/logo.png",
		links: [{ label: "Live Demo", url: "https://lms.learnersuae.com/" }],
	},
	{
		title: "HSS Thiruvampady",
		desc: "A simple institutional website for Thiruvampady Higher Secondary School, featuring event management, gallery, and real-time notifications.",
		tech: ["Next.js", "Tailwind CSS", "Vercel"],
		image: "/assets/images/hss.png",
		links: [
			{ label: "Live Demo", url: "https://www.hssthiruvampady.com/" },
		],
	},
];
