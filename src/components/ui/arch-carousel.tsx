"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface CarouselItem {
    type: "image" | "video"
    src: string
    name: string
    description: string
}

interface ArchCarouselProps {
    items: CarouselItem[]
    autoRotate?: boolean
    autoRotateSpeed?: number
    cardWidth?: number
    cardHeight?: number
    archHeight?: number
    gap?: number
}

export function ArchCarousel({
    items,
    autoRotate = true,
    autoRotateSpeed = 0.3,
    cardWidth = 280,
    cardHeight = 380,
    archHeight = 80,
    gap = 30,
}: ArchCarouselProps) {
    const [offset, setOffset] = useState(0)
    const [isDragging, setIsDragging] = useState(false)
    const [velocity, setVelocity] = useState(0)
    const [containerWidth, setContainerWidth] = useState(0)
    const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null)

    const containerRef = useRef<HTMLDivElement>(null)
    const dragStartRef = useRef({ x: 0, offset: 0, time: 0 })
    const animationFrameRef = useRef<number>(undefined)
    const lastOffsetRef = useRef(0)
    const lastTimeRef = useRef(0)

    // Physics constants
    const friction = 0.95
    const minVelocity = 0.01

    // Calculate total width needed for seamless infinite loop
    const itemSpacing = cardWidth + gap
    const totalWidth = items.length * itemSpacing

    // Track container width
    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth)
            }
        }
        updateWidth()
        window.addEventListener("resize", updateWidth)
        return () => window.removeEventListener("resize", updateWidth)
    }, [])

    // Animation loop for momentum and auto-rotate
    useEffect(() => {
        const animate = () => {
            if (!isDragging) {
                setOffset((prev) => {
                    let newOffset = prev

                    // Apply auto-rotate
                    if (autoRotate && Math.abs(velocity) < 0.1) {
                        newOffset += autoRotateSpeed
                    }

                    // Apply velocity and friction
                    if (Math.abs(velocity) > minVelocity) {
                        newOffset += velocity
                        setVelocity((v) => v * friction)
                    } else {
                        setVelocity(0)
                    }

                    // Normalize offset for infinite loop
                    while (newOffset > totalWidth) {
                        newOffset -= totalWidth
                    }
                    while (newOffset < 0) {
                        newOffset += totalWidth
                    }

                    return newOffset
                })
            }

            animationFrameRef.current = requestAnimationFrame(animate)
        }

        animationFrameRef.current = requestAnimationFrame(animate)
        return () => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current)
            }
        }
    }, [isDragging, velocity, autoRotate, autoRotateSpeed, totalWidth])

    // Mouse/Touch handlers
    const handlePointerDown = (e: React.PointerEvent) => {
        setIsDragging(true)
        setVelocity(0)
        dragStartRef.current = {
            x: e.clientX,
            offset: offset,
            time: Date.now(),
        }
        lastOffsetRef.current = offset
        lastTimeRef.current = Date.now()
            ; (e.target as HTMLElement).setPointerCapture(e.pointerId)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
        if (!isDragging) return

        const deltaX = dragStartRef.current.x - e.clientX
        const newOffset = dragStartRef.current.offset + deltaX

        const currentTime = Date.now()
        const deltaTime = currentTime - lastTimeRef.current

        if (deltaTime > 0) {
            const deltaOffset = newOffset - lastOffsetRef.current
            const instantVelocity = (deltaOffset / deltaTime) * 16
            setVelocity(instantVelocity * 0.5)
        }

        lastOffsetRef.current = newOffset
        lastTimeRef.current = currentTime

        setOffset(newOffset)
    }

    const handlePointerUp = () => {
        setIsDragging(false)
    }

    // Wheel handler for trackpad/mouse wheel
    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault()
        const delta = e.deltaX || e.deltaY
        setOffset((prev) => prev + delta * 0.5)
        setVelocity(delta * 0.1)
    }

    const getVisibleCards = () => {
        const cards: Array<{
            index: number
            x: number
            y: number
            rotation: number
            scale: number
            zIndex: number
        }> = []

        if (containerWidth === 0) return cards

        const centerX = containerWidth / 2

        // Create enough copies to fill the screen plus overflow
        const startOffset = -cardWidth * 2

        for (let copy = -2; copy <= items.length + 2; copy++) {
            for (let i = 0; i < items.length; i++) {
                const baseX = (copy * items.length + i) * itemSpacing
                const x = baseX - offset + startOffset

                // Only render if potentially visible
                if (x > -cardWidth * 1.5 && x < containerWidth + cardWidth * 1.5) {
                    const distanceFromCenter = x + cardWidth / 2 - centerX
                    const normalizedDistance = distanceFromCenter / Math.max(containerWidth / 2, 1)

                    const y = Math.pow(normalizedDistance, 2) * archHeight

                    const rotation = normalizedDistance * -12

                    // Scale slightly smaller at edges
                    const scale = Math.max(0.85, 1 - Math.abs(normalizedDistance) * 0.15)

                    const absDistance = Math.min(Math.abs(normalizedDistance), 2)
                    const zIndex = Math.floor(100 - absDistance * 50)

                    cards.push({
                        index: i,
                        x,
                        y,
                        rotation,
                        scale,
                        zIndex,
                    })
                }
            }
        }

        return cards
    }

    const visibleCards = getVisibleCards()

    return (
        <div
            ref={containerRef}
            className="relative w-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
            style={{ height: cardHeight + archHeight + 60 }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onWheel={handleWheel}
        >
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent pointer-events-none z-20" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent pointer-events-none z-20" />

            <div className="absolute inset-0">
                {visibleCards.map((card, idx) => (
                    <div
                        key={`${card.index}-${idx}`}
                        className="absolute top-0 left-0 will-change-transform"
                        style={{
                            transform: `translate3d(${card.x}px, ${card.y}px, 0) rotate(${card.rotation}deg) scale(${card.scale})`,
                            width: cardWidth,
                            height: cardHeight,
                            zIndex: card.zIndex,
                        }}
                        onMouseEnter={() => setHoveredCardIndex(card.index)}
                        onMouseLeave={() => setHoveredCardIndex(null)}
                    >
                        <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl">
                            {items[card.index].type === "image" ? (
                                <img
                                    src={items[card.index].src || "/placeholder.svg"}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    draggable={false}
                                />
                            ) : (
                                <video
                                    src={items[card.index].src}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                />
                            )}
                            {hoveredCardIndex === card.index && (
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 flex flex-col justify-end p-4 transition-opacity duration-300">
                                    <h3 className="text-white font-semibold text-lg">{items[card.index].name}</h3>
                                    <p className="text-gray-300 text-sm">{items[card.index].description}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
