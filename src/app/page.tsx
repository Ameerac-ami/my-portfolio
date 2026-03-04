"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
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
  }, []);

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

  return (
    <div className="relative flex min-h-screen flex-col items-center overflow-x-hidden selection:bg-accent/30 selection:text-black">
      {/* Moving Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Orbs */}
        <div
          className="parallax-orb animate-float h-[600px] w-[600px] bg-white/20"
          style={{
            top: "10%",
            left: "-10%",
            transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
            animationDuration: '18s'
          }}></div>
        <div
          className="parallax-orb animate-drift h-[450px] w-[450px] bg-emerald-500/10"
          style={{
            top: "40%",
            right: "0%",
            transform: `translate3d(0, ${scrollY * -0.12}px, 0)`,
            animationDuration: '28s'
          }}></div>

        {/* Floating Boxes */}
        <div
          className="parallax-box h-40 w-40 opacity-20"
          style={{
            top: "20%",
            right: "15%",
            transform: `translate3d(0, ${scrollY * 0.2}px, 0) rotate(${scrollY * 0.05}deg)`,
          }}></div>
        <div
          className="parallax-box h-60 w-60 opacity-10"
          style={{
            top: "60%",
            left: "5%",
            transform: `translate3d(0, ${scrollY * -0.08}px, 0) rotate(${scrollY * -0.03}deg)`,
          }}></div>
        <div
          className="parallax-box h-32 w-32 opacity-15 border-emerald-500/10 bg-emerald-500/5"
          style={{
            bottom: "15%",
            right: "20%",
            transform: `translate3d(0, ${scrollY * 0.15}px, 0) rotate(${scrollY * 0.08}deg)`,
          }}></div>

        <div
          className="parallax-orb animate-float h-[700px] w-[700px] bg-white/10"
          style={{
            bottom: "0%",
            left: "20%",
            transform: `translate3d(0, ${scrollY * 0.05}px, 0)`,
            animationDuration: '22s',
            animationDelay: '-4s'
          }}></div>
      </div>

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
          <button className="rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800 hover:shadow-lg">
            Hire Me
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
          <div
            className="mb-6 flex items-center gap-2 rounded-full border border-slate-200 bg-white/50 px-4 py-1.5 backdrop-blur-sm animate-slide-up"
            style={{ animationDelay: "0.1s" }}>
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
            </span>
            <span className="text-xs font-medium text-slate-600 tracking-wider uppercase">
              Available for new projects
            </span>
          </div>

          <h1
            className="mb-6 font-display text-4xl font-bold leading-tight text-black md:text-6xl animate-slide-up"
            style={{ animationDelay: "0.2s" }}>
            Building the Future of <br />
            <span className="text-gradient">Web3 & Modern Web</span>
          </h1>

          <p
            className="mb-10 max-w-2xl text-lg leading-relaxed text-black/70 md:text-xl animate-slide-up"
            style={{ animationDelay: "0.3s" }}>
            Senior Full Stack Developer specializing in creating high-performance, secure, and stunning
            decentralized applications and modern web experiences.
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
        </div>

        <div className="absolute bottom-10 animate-bounce">
          <svg className="h-6 w-6 text-slate-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="reveal w-full max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-4xl font-bold text-slate-900">About Me</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                With over [X] years of experience in full-stack development, I've had the privilege of
                working on diverse projects ranging from DeFi protocols to SaaS platforms.
              </p>
              <p>
                My approach combines technical excellence with a deep understanding of user experience,
                ensuring that every line of code contributes to a seamless and engaging product.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-primary group-hover:text-accent transition-colors">Web3</div>
              <p className="text-sm text-slate-500">Solidity, ethers.js, Hardhat, IPFS</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-secondary group-hover:text-accent transition-colors">Frontend</div>
              <p className="text-sm text-slate-500">Next.js, React, Tailwind, Framer Motion</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-accent">Backend</div>
              <p className="text-sm text-slate-500">Node.js, PostgreSQL, Redis, GraphQL</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/50 p-6 backdrop-blur-sm group hover:border-accent/40 transition-colors">
              <div className="mb-4 text-3xl font-bold text-slate-900 group-hover:text-accent transition-colors">Cloud</div>
              <p className="text-sm text-slate-500">AWS, Vercel, Docker, CI/CD</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full max-w-7xl px-6 py-32">
        <div className="mb-16 flex flex-col items-center text-center reveal">
          <h2 className="mb-4 font-display text-4xl font-bold text-slate-900">Featured Projects</h2>
          <p className="max-w-xl text-slate-600">
            A selection of my recent work in Web3, DeFi, and modern web applications.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Dett - Quick Commerce",
              desc: "A high-performance Quick Commerce platform featuring an Admin Panel and Web App landing page, powered by smooth AOS animations for a premium user experience.",
              tech: ["Next.js", "TypeScript", "Tailwind CSS", "AOS", "Firebase"],
              image: "/assets/images/dett.png",
              link: "https://www.dett.app/",
            },
            {
              title: "HSS Thiruvampady",
              desc: "A simple institutional website for Thiruvampady Higher Secondary School, featuring event management, gallery, and real-time notifications.",
              tech: ["Next.js", "Tailwind CSS", "Vercel"],
              image: "/assets/images/hss.png",
              link: "https://www.hssthiruvampady.com/",
            },
            {
              title: "Tegain",
              desc: "An IT services platform where businesses request custom software solutions. I developed and refined user interfaces to provide a smooth and responsive user experience.",
              tech: ["Next.js", "TypeScript", "Material UI", "Framer Motion", "AOS"],
              image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=450",
              link: "https://tegain.com/",
            },
            {
              title: "Crypto Wallet",
              desc: "Secure multi-chain wallet with hardware support and intuitive UI.",
              tech: ["TypeScript", "Node.js", "AWS"],
              image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=800&h=450",
              link: "https://www.crypto-wallet.com/",
            },
          ].map((project, i) => (
            <div
              key={i}
              className="reveal group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all hover:border-primary/50 hover:shadow-xl"
              style={{ transitionDelay: `${i * 0.15}s` }}>
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
                <p className="mb-4 text-sm text-slate-600">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, j) => (
                    <span
                      key={j}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:gap-3 transition-all">
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="reveal w-full max-w-4xl px-6 py-32">
        <div className="rounded-[2.5rem] border border-slate-200 bg-white/80 p-12 text-center backdrop-blur-xl shadow-lg relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 h-48 w-48 bg-accent/20 rounded-full blur-3xl group-hover:bg-accent/30 transition-colors"></div>
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
              href="https://linkedin.com"
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
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-500">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 focus:border-primary focus:outline-none transition-colors focus:ring-4 focus:ring-primary/5"
                    placeholder="John Doe"
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
                    placeholder="john@example.com"
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
          <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">Twitter</a>
          <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">GitHub</a>
          <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">LinkedIn</a>
        </div>
        <p className="text-xs text-slate-400">
          © {new Date().getFullYear()} Ameera. Crafted with passion & Next.js.
        </p>
      </footer>
    </div>
  );
}
