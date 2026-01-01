"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function CustomCursor() {
    const [isPointer, setIsPointer] = useState(false)
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)

    // Smooth spring animation for cursor movement
    const springConfig = { damping: 25, stiffness: 700, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX)
            cursorY.set(e.clientY)

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement
            const isClickable =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.onclick !== null ||
                target.classList.contains("cursor-pointer") ||
                window.getComputedStyle(target).cursor === "pointer"

            setIsPointer(isClickable)
        }

        window.addEventListener("mousemove", moveCursor)

        return () => {
            window.removeEventListener("mousemove", moveCursor)
        }
    }, [cursorX, cursorY])

    return (
        <>
            {/* Main cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isPointer ? 1.5 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                >
                    {/* Inner dot */}
                    <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,107,53,0.8),0_0_20px_rgba(255,107,53,0.6),0_0_30px_rgba(255,107,53,0.4)]" />
                </motion.div>
            </motion.div>

            {/* Outer ring */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference"
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                }}
            >
                <motion.div
                    className="relative -translate-x-1/2 -translate-y-1/2"
                    animate={{
                        scale: isPointer ? 2 : 1,
                        opacity: isPointer ? 0.5 : 0.3,
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Outer circle */}
                    <div className="w-8 h-8 border-2 border-white rounded-full shadow-[0_0_15px_rgba(255,107,53,0.6),0_0_25px_rgba(255,107,53,0.4)]" />
                </motion.div>
            </motion.div>

            {/* Hide default cursor */}
            <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>
        </>
    )
}
