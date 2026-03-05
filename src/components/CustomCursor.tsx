"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isHovering, setIsHovering] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);

    // Motion values for raw mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Spring configurations for smoothness
    const springConfigMain = { damping: 25, stiffness: 250 };
    const springConfigTrailing = { damping: 15, stiffness: 100 };

    const mainX = useSpring(mouseX, springConfigMain);
    const mainY = useSpring(mouseY, springConfigMain);

    const trailingX = useSpring(mouseX, springConfigTrailing);
    const trailingY = useSpring(mouseY, springConfigTrailing);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.classList.contains("clickable") ||
                target.closest("button") ||
                target.closest("a")
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        window.addEventListener("mousemove", handleMouseMove, { passive: true });
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [mouseX, mouseY]);

    return (
        <div className="pointer-events-none fixed inset-0 z-[9999]">
            {/* Trailing Glow Effect */}
            <motion.div
                className="absolute h-32 w-32 -ml-16 -mt-16 rounded-full mix-blend-screen opacity-10 blur-3xl"
                style={{
                    left: trailingX,
                    top: trailingY,
                    backgroundColor: "#000000",
                    scale: isHovering ? 1.5 : 1,
                }}
            />

            {/* Main Cursor Dot */}
            <motion.div
                className="absolute flex items-center justify-center -ml-5 -mt-5 h-10 w-10"
                style={{
                    left: mainX,
                    top: mainY,
                    scale: isMouseDown ? 0.8 : isHovering ? 1.5 : 1,
                }}
            >

                <motion.div
                    className={`flex items-center justify-center rounded-full border transition-colors duration-300 ${isHovering
                        ? 'h-8 w-8 bg-black/10 border-black/30'
                        : 'h-4 w-4 bg-black/20 border-black/30 shadow-[0_0_10px_rgba(0,0,0,0.3)]'
                        }`}
                >
                    <motion.div
                        className={`rounded-full border transition-colors duration-300 ${isHovering
                            ? 'h-2 w-2 bg-black/10 border-black/20'
                            : 'h-1 w-1 bg-black/20 border-black/20 shadow-[0_0_10px_rgba(0,0,0,0.3)]'
                            }`}
                    />
                </motion.div>

            </motion.div>
        </div>
    );
}
