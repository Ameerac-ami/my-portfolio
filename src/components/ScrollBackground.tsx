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
        const timer = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(timer);
    }, []);

    // Two Boxes on Left Side moving in opposite directions
    const box1Y = useTransform(smoothY, [0, 1], [0, 600]); // Moves down
    // const box1Rotate = useTransform(smoothY, [0, 1], [0, 45]); // Rotates

    const box2Y = useTransform(smoothY, [0, 1], [0, -600]); // Moves up
    // const box2Rotate = useTransform(smoothY, [0, 1], [0, -45]); // Rotates opposite

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none">
            {/* Dynamic Mesh Layer (Matches existing theme) */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black h-screen w-full opacity-60"></div>

            {/* Scroll-Reactive Elements */}

            {/* Box 1: Emerald/Green - Left Side - Moves Down - LARGER */}
            <motion.div
                // style={{ y: box1Y, rotate: box1Rotate }}
                style={{ y: box1Y }}
                className="absolute top-[20%] left-[0%] w-90 h-90 bg-white/10 backdrop-blur-md "
            />

            {/* Box 2: White/Silver - Left Side - Moves Up - LARGER */}
            <motion.div
                // style={{ y: box2Y, rotate: box2Rotate }}
                style={{ y: box2Y }}
                className="absolute bottom-[10%] left-[0] w-60 h-60 bg-[#bfbfbf] opacity-30 backdrop-blur-md "
            />


        </div>
    );
}
