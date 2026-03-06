export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 py-12 text-center relative overflow-hidden bg-white/50 backdrop-blur-sm">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-1/2 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="mb-6 text-xl font-bold text-slate-900 tracking-tight font-display">
        AMEERA<span className="text-primary">.</span>
      </div>
      <div className="flex justify-center gap-6 mb-8 text-sm font-medium text-slate-400">
        <a href="https://github.com/Ameerac-ami/" target="_blank" className="hover:text-slate-900 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/ameera-c/" target="_blank" className="hover:text-slate-900 transition-colors">LinkedIn</a>
      </div>
      <p className="text-xs text-slate-400">
        © {new Date().getFullYear()} Ameera. Crafted with Next.js & Tailwind CSS.
      </p>
    </footer>
  );
}
