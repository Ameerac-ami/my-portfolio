"use client";

import { useEffect } from "react";

export function useReveal() {
	useEffect(() => {
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

		const observeElements = () => {
			const revealElements = document.querySelectorAll(".reveal:not(.observed)");
			revealElements.forEach((el) => {
				observer.observe(el);
				el.classList.add("observed");
			});
		};

		// Initial observation
		observeElements();

		// Watch for new elements added to DOM
		const mutationObserver = new MutationObserver(() => {
			observeElements();
		});

		mutationObserver.observe(document.body, {
			childList: true,
			subtree: true,
		});

		return () => {
			observer.disconnect();
			mutationObserver.disconnect();
		};
	}, []);
}
