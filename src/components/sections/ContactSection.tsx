import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		null | "success" | "error"
	>(null);

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

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	return (
		<div className="w-full flex flex-col items-center">
			{/* CTA Section */}
			<section
				id="contact-cta"
				className="reveal w-full max-w-4xl px-6 py-26 text-center">
				<div className="rounded-[2.5rem] border border-slate-200 bg-white/80 p-12 backdrop-blur-xl shadow-lg relative overflow-hidden group">
					<h2 className="mb-6 font-display text-4xl font-bold text-slate-900">
						Let&apos;s build something cool
					</h2>
					<p className="mb-10 text-lg text-slate-600 max-w-xl mx-auto">
						Currently open to new opportunities and interesting
						projects. Whether you have a question or just want to
						say hi, I&apos;ll get back to you!
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
							className="flex h-14 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 font-bold text-slate-900 backdrop-blur-sm transition-all hover:bg-white/60 hover:border-slate-400">
							LinkedIn
						</a>
					</div>
				</div>
			</section>

			{/* Message Section */}
			<section
				id="contact"
				className="reveal w-full max-w-5xl px-6 py-26">
				<div className="grid gap-16 lg:grid-cols-5">
					<div className="lg:col-span-2">
						<h2 className="mb-6 font-display text-4xl font-bold text-slate-900">
							Send a Message
						</h2>
						<p className="mb-8 text-lg text-slate-600">
							Have a specific inquiry or just want to discuss a
							potential collaboration? Fill out the form and
							I&apos;ll get back to you within 24 hours.
						</p>
						<div className="space-y-4">
							<div className="flex items-center gap-4 text-slate-700 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
								<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100">
									<svg
										className="h-5 w-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
									</svg>
								</div>
								<span className="font-medium">
									ameerac.ami@gmail.com
								</span>
							</div>
						</div>
					</div>

					<div className="lg:col-span-3">
						<form
							onSubmit={handleSubmit}
							className="space-y-6 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg backdrop-blur-xl">
							<div className="grid gap-6 md:grid-cols-1 sm:grid-cols-2">
								<div className="space-y-2">
									<label className="text-sm font-medium text-slate-500">
										Name
									</label>
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
									<label className="text-sm font-medium text-slate-500">
										Email
									</label>
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
								<label className="text-sm font-medium text-slate-500">
									Message
								</label>
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
									<svg
										className="w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20">
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
									Message sent successfully!
								</p>
							)}
							{submitStatus === "error" && (
								<p className="text-sm font-medium text-rose-600 animate-fade-in">
									Something went wrong. Please try again or
									email me directly.
								</p>
							)}

							<button
								type="submit"
								disabled={isSubmitting}
								className={`w-full rounded-xl bg-slate-900 py-4 font-bold text-white transition-all hover:bg-slate-800 hover:shadow-xl ${
									isSubmitting
										? "opacity-70 cursor-not-allowed"
										: "hover:scale-[1.02] active:scale-95"
								}`}>
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</form>
					</div>
				</div>
			</section>
		</div>
	);
}
