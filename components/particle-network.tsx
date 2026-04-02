"use client"

import { useEffect, useRef, useCallback } from "react"
import { useTheme } from "@/lib/theme-context"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  originalX: number
  originalY: number
}

export function ParticleNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, isInCanvas: false })
  const animationRef = useRef<number>()
  const { theme } = useTheme()

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = []
    const particleCount = Math.min(80, Math.floor((width * height) / 15000))
    
    // Light mode: cyan/blue colors, Dark mode: cyan/indigo colors
    const colors = theme === "dark" 
      ? ["#22D3EE", "#06B6D4", "#0EA5E9", "#6366F1", "#8B5CF6"]
      : ["#06B6D4", "#0EA5E9", "#0284C7", "#0369A1", "#22D3EE"]

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      particles.push({
        x,
        y,
        originalX: x,
        originalY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }
    return particles
  }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
      particlesRef.current = initParticles(rect.width, rect.height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isInCanvas: true,
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.isInCanvas = false
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)

    const lineColor = theme === "dark" ? "rgba(34, 211, 238, " : "rgba(6, 182, 212, "
    const maxDistance = 150
    const mouseRadius = 120

    const animate = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        // Mouse interaction - particles move away from cursor
        if (mouse.isInCanvas) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < mouseRadius) {
            const force = (mouseRadius - dist) / mouseRadius
            const angle = Math.atan2(dy, dx)
            p.x += Math.cos(angle) * force * 3
            p.y += Math.sin(angle) * force * 3
          }
        }

        // Slowly return to original position
        p.x += (p.originalX - p.x) * 0.02 + p.vx
        p.y += (p.originalY - p.y) * 0.02 + p.vy

        // Boundary check
        if (p.x < 0 || p.x > rect.width) p.vx *= -1
        if (p.y < 0 || p.y > rect.height) p.vy *= -1

        // Draw particle with glow
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        // Add glow effect
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 2, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 2)
        gradient.addColorStop(0, p.color + "40")
        gradient.addColorStop(1, "transparent")
        ctx.fillStyle = gradient
        ctx.fill()
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance) {
            const opacity = (1 - dist / maxDistance) * 0.5
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = lineColor + opacity + ")"
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }

        // Connect to mouse
        if (mouse.isInCanvas) {
          const dx = particles[i].x - mouse.x
          const dy = particles[i].y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < maxDistance * 1.5) {
            const opacity = (1 - dist / (maxDistance * 1.5)) * 0.7
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(mouse.x, mouse.y)
            ctx.strokeStyle = lineColor + opacity + ")"
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme, initParticles])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10"
      style={{ pointerEvents: "auto" }}
    />
  )
}
