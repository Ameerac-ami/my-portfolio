"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Home() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Dett - Quick Commerce",
      desc: "A high-performance Quick Commerce platform featuring an Admin Panel and Web App landing page, powered by smooth AOS animations for a premium user experience.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Zustand", "Firebase"],
      image: "/assets/images/dett.png",
      links: [
        { label: "Live Demo", url: "https://www.dett.app/" },
        { label: "Dett Admin", url: "https://admin.dett.app/" }
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
      title: "HSS Thiruvampady",
      desc: "A simple institutional website for Thiruvampady Higher Secondary School, featuring event management, gallery, and real-time notifications.",
      tech: ["Next.js", "Tailwind CSS", "Vercel"],
      image: "/assets/images/hss.png",
      links: [{ label: "Live Demo", url: "https://www.hssthiruvampady.com/" }],
    },
    {
      title: "Crypto Wallet",
      desc: "Secure multi-chain wallet with hardware support and intuitive UI.",
      tech: ["TypeScript", "Node.js", "AWS"],
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800&h=450",
      links: [{ label: "Site", url: "https://www.crypto-wallet.com/" }],
    },
    // Add 5th project here if you have one, or I'll leave a placeholder for you
    {
      title: "DeFi Dashboard",
      desc: "Real-time portfolio tracker and yield aggregator for multiple EVM networks.",
      tech: ["React", "Ethers.js", "Web3Modal", "Chart.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800&h=450",
      links: [{ label: "Coming Soon", url: "#" }],
    },
    {
      title: "Artisan Marketplace",
      desc: "A peer-to-peer marketplace for handmade goods with integrated payment processing.",
      tech: ["Next.js", "Stripe", "PostgreSQL", "Prisma"],
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800&h=450",
      links: [{ label: "Coming Soon", url: "#" }],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // scroll logic if needed
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [showAllProjects]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await addDoc(collection(db, "messages"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden selection:bg-accent/30 selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-slate-200 bg-white/70 px-6 py-3 backdrop-blur-md shadow-sm">
          <div className="text-2xl font-bold tracking-tight text-slate-900 font-display font-medium">
            AMEERA<span className="text-primary">.</span>
          </div>
          <div className="hidden gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#home" className="hover:text-slate-900 transition-colors">Home</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
          {/* <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg">
            Hire Me
          </button> */}
          <button onClick={() => window.location.href = "#contact"} className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg">
            Let&apos;s Connect
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative flex min-h-screen w-full flex-col items-center justify-center px-6 pt-20">
        <div className="absolute top-1/4 left-1/4 -z-10 h-72 w-72 rounded-full bg-white/30 blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-72 w-72 rounded-full bg-black/5 blur-[120px]"></div>

        <div className="flex max-w-4xl flex-col items-center text-center animate-fade-in">
          {/* <div
            className="mb-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm animate-slide-up"
            style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 tracking-wider ">
              Available for full-time and freelance opportunities
            </span>
          </div> */}

          {/* <h1
            className="mb-6 font-display text-4xl font-bold leading-tight text-black md:text-6xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}>
            Building the Future of <br />
            <span className="text-gradient">Web3 & Modern Web</span>
          </h1> */}
          <p className="hero-kicker text-xs font-semibold uppercase tracking-[0.25em] text-black/70" style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)", opacity: "1", visibility: "inherit" }}>Frontend Engineer · React · Next.js</p>
          <h1 className="mb-6 font-display text-3xl font-bold leading-tight text-black md:text-5xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}>
            Building Modern, <br />
            <span className="text-gradient"> High-Performance Web Experiences</span>
          </h1>

          <p
            className="mb-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl animate-slide-up"
            style={{ animationDelay: "0.3s" }}>
            {/* Senior Full Stack Developer specializing in creating high-performance, secure, and stunning
            decentralized applications and modern web experiences. */}
            {/* Frontend Developer specializing in creating high-performance, secure, and stunning
            decentralized applications with React, Next.js, and modern web technologies, with a strong foundation in full-stack development. */}
            I build responsive, scalable, and high-performance interfaces using React, Next.js, and modern web technologies, with a certified background in full-stack development.
          </p>

          <div
            className="flex flex-col gap-4 sm:flex-row animate-slide-up"
            style={{ animationDelay: "0.4s" }}>
            <a
              href="#projects"
              className="flex h-14 items-center justify-center rounded-xl bg-black px-8 font-bold text-white transition-all hover:scale-105 hover:bg-neutral-900 shadow-xl">
              View My Work
            </a>
            <a
              href="#contact"
              className="flex h-14 items-center justify-center rounded-xl border border-black/10 bg-white/40 px-8 font-bold text-black backdrop-blur-sm transition-all hover:bg-white/60">
              Let&apos;s Talk
            </a>
          </div>
           <div
            className="mt-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm animate-slide-up"
            style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 tracking-wider ">
              Available for full-time and freelance opportunities
            </span>
          </div>
        </div>

        {/* <div className="absolute bottom-10 animate-bounce">
          <svg className="h-6 w-6 text-slate-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="reveal w-full max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-4xl font-bold text-slate-900">About Me</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                I&apos;m Ameera, a frontend developer with 3+ years of experience crafting immersive digital experiences.
                I specialize in turning product ideas and UI designs into robust, production-ready web applications using React, Next.js, and modern styling systems like Tailwind CSS and Material UI. </p>
              <p>
                My approach combines technical excellence with a deep understanding of user experience,
                ensuring that every line of code contributes to a seamless and engaging product.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">

            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-secondary group-hover:text-accent transition-colors">Frontend</div>
              <p className="text-sm text-slate-500">Next.js, React, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-secondary group-hover:text-accent transition-colors">Backend</div>
              <p className="text-sm text-slate-500">Python, Django, Node.js, PostgreSQL, Firebase, GraphQL</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-secondary group-hover:text-accent transition-colors">Cloud</div>
              <p className="text-sm text-slate-500"> Vercel, CI/CD</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-secondary group-hover:text-accent transition-colors">Tools</div>
              <p className="text-sm text-slate-500">Git, GitHub, Postman, Figma, Material UI, Framer Motion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-7xl px-6 py-32">
        <div className="mb-16 flex flex-col items-center text-center reveal">
          <h2 className="mb-4 font-display text-4xl font-bold text-slate-900">Featured Projects</h2>
          <p className="max-w-xl text-slate-600">
            A selection of my recent work in E-commerce, and modern web applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {displayedProjects.map((project, i) => (
            <div
              key={i}
              className="reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-primary/50 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="relative aspect-video w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-slate-900">{project.title}</h3>
                <p className="mb-4 text-sm text-slate-600 line-clamp-2">{project.desc}</p>
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
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              {showAllProjects ? "Show Featured" : "View All Projects"}
              <svg
                className={`h-4 w-4 transition-transform duration-300 ${showAllProjects ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section id="contact" className="reveal w-full max-w-4xl px-6 py-32">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white/80 p-12 text-center backdrop-blur-xl shadow-lg relative overflow-hidden group">
          {/* <div className="absolute -top-24 -right-24 h-48 w-48 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors"></div> */}
          <h2 className="mb-6 font-display text-4xl font-bold text-slate-900">Let&apos;s build something cool</h2>
          <p className="mb-10 text-lg text-slate-600 max-w-xl mx-auto">
            Currently open to new opportunities and interesting projects. Whether you have a question or
            just want to say hi, I&apos;ll get back to you!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="mailto:ameerac.ami@gmail.com"
              className="flex h-14 items-center justify-center rounded-xl bg-slate-900 px-8 font-bold text-white transition-all hover:bg-slate-800 shadow-xl hover:scale-105 active:scale-95">
              Send an Email
            </a>
            <a
              href="https://www.linkedin.com/in/ameera-c/"
              target="_blank"
              className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 font-bold text-slate-900 backdrop-blur-sm transition-all hover:bg-slate-50 hover:border-slate-400">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section id="message" className="reveal w-full max-w-5xl px-6 py-32">
        <div className="grid gap-16 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-display text-4xl font-bold text-slate-900">Send a Message</h2>
            <p className="mb-8 text-lg text-slate-600">
              Have a specific inquiry or just want to discuss a potential collaboration? Fill out the form
              and I&apos;ll get back to you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-700 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <span className="font-medium">ameerac.ami@gmail.com</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg backdrop-blur-xl">
              <div className="grid gap-6 md:grid-cols-1 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:outline-none transition-colors focus:ring-4 focus:ring-primary/5"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:outline-none transition-colors focus:ring-4 focus:ring-primary/5"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-500">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:outline-none transition-colors focus:ring-4 focus:ring-primary/5 resize-none"
                  placeholder="Tell me about your project..."></textarea>
              </div>

              {submitStatus === "success" && (
                <p className="text-sm font-medium text-emerald-600 animate-fade-in flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Message sent successfully!
                </p>
              )}
              {submitStatus === "error" && (
                <p className="text-sm font-medium text-rose-600 animate-fade-in">
                  Something went wrong. Please try again or email me directly.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-xl bg-slate-900 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl ${isSubmitting ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-95"
                  }`}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t border-slate-200 py-12 text-center relative overflow-hidden bg-white/50 backdrop-blur-sm">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        <div className="mb-6 text-xl font-bold text-slate-900 tracking-tight font-display">
          AMEERA<span className="text-primary">.</span>
        </div>
        <div className="flex justify-center gap-6 mb-8 text-sm font-medium">
          {/* <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a> */}
          <a href="https://github.com/Ameerac-ami/" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/ameera-c/" target="_blank" className="text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Ameera. Crafted with Next.js & Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
