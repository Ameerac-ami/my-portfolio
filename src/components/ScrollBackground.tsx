"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollBackground() {
    const { scrollYProgress } = useScroll();
    const [mounted, setMounted] = useState(false);

    // Smooth out the scroll progress for more fluid animations
    const smoothY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        setMounted(true);
    }, []);

    // Transformation values for different elements
    // Orb 1: Moves down slowly, scales up
    const y1 = useTransform(smoothY, [0, 1], [0, 500]);
    const scale1 = useTransform(smoothY, [0, 1], [1, 1.5]);
    const opacity1 = useTransform(smoothY, [0, 0.5, 1], [0.3, 0.1, 0.3]);

    // Orb 2: Moves up, changes color/intensity
    const y2 = useTransform(smoothY, [0, 1], [0, -400]);
    const rotate2 = useTransform(smoothY, [0, 1], [0, 45]);
    const opacity2 = useTransform(smoothY, [0, 0.5, 1], [0.2, 0.4, 0.2]);

    // Ring: Pulses and moves at medium speed
    const y3 = useTransform(smoothY, [0, 1], [0, 300]);
    const scale3 = useTransform(smoothY, [0, 0.5, 1], [1, 1.2, 1]);

    // Two Boxes on Left Side moving in opposite directions
    const box1Y = useTransform(smoothY, [0, 1], [0, 600]); // Moves down
    const box1Rotate = useTransform(smoothY, [0, 1], [0, 45]); // Rotates

    const box2Y = useTransform(smoothY, [0, 1], [0, -600]); // Moves up
    const box2Rotate = useTransform(smoothY, [0, 1], [0, -45]); // Rotates opposite

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
            {/* Dynamic Mesh Layer (Matches existing theme) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black h-screen w-full opacity-60"></div>

            {/* Scroll-Reactive Elements */}

            {/* Box 1: Emerald/Green - Left Side - Moves Down - LARGER */}
            <motion.div
                style={{ y: box1Y, rotate: box1Rotate }}
                className="absolute top-[10%] left-[2%] w-64 h-64 rounded-[2rem] border border-emerald-500/10 bg-emerald-500/5 backdrop-blur-md shadow-[0_0_50px_rgba(16,185,129,0.05)]"
            />

            {/* Box 2: White/Silver - Left Side - Moves Up - LARGER */}
            <motion.div
                style={{ y: box2Y, rotate: box2Rotate }}
                className="absolute bottom-[15%] left-[6%] w-48 h-48 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_50px_rgba(255,255,255,0.03)]"
            />

            {/* Large Glowing Orb - Top Left-ish */}
            <motion.div
                style={{ y: y1, scale: scale1, opacity: opacity1 }}
                className="absolute -top-[10%] -left-[10%] w-[800px] h-[800px] rounded-full bg-emerald-500/10 blur-[120px]"
            />

            {/* Accenting Orb - Mid Right */}
            <motion.div
                style={{ y: y2, rotate: rotate2, opacity: opacity2 }}
                className="absolute top-[40%] -right-[5%] w-[600px] h-[600px] rounded-full bg-white/5 blur-[100px]"
            />

            {/* Rotating Ring-like Element */}
            <motion.div
                style={{ y: y3, scale: scale3 }}
                className="absolute bottom-[10%] left-[15%] w-[400px] h-[400px] rounded-full border border-emerald-500/10 opacity-20 blur-sm"
            />

            {/* Floating Particle Orbs */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    x: [0, 10, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-[20%] right-[20%] w-20 h-20 rounded-full bg-accent/20 blur-2xl"
            />

            <motion.div
                animate={{
                    y: [0, 30, 0],
                    x: [0, -15, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute bottom-[30%] left-[10%] w-32 h-32 rounded-full bg-white/10 blur-3xl"
            />
        </div>
    );
}
