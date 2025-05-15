"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function TrekMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = canvas.clientWidth
    canvas.height = canvas.clientHeight

    // Draw map
    const drawMap = () => {
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      gradient.addColorStop(0, "#e0f2fe") // Light blue sky
      gradient.addColorStop(1, "#f0fdf4") // Light green ground
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw mountains
      drawMountains(ctx, canvas.width, canvas.height)

      // Draw trek path
      drawTrekPath(ctx, canvas.width, canvas.height)

      // Draw trek points
      drawTrekPoints(ctx, canvas.width, canvas.height)
    }

    const drawMountains = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // First mountain range (background)
      ctx.fillStyle = "#94a3b8" // Slate 400
      ctx.beginPath()
      ctx.moveTo(0, height * 0.7)
      ctx.lineTo(width * 0.2, height * 0.5)
      ctx.lineTo(width * 0.4, height * 0.65)
      ctx.lineTo(width * 0.6, height * 0.45)
      ctx.lineTo(width * 0.8, height * 0.6)
      ctx.lineTo(width, height * 0.55)
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fill()

      // Second mountain range (foreground)
      ctx.fillStyle = "#64748b" // Slate 500
      ctx.beginPath()
      ctx.moveTo(0, height * 0.8)
      ctx.lineTo(width * 0.1, height * 0.65)
      ctx.lineTo(width * 0.3, height * 0.7)
      ctx.lineTo(width * 0.5, height * 0.6)
      ctx.lineTo(width * 0.7, height * 0.75)
      ctx.lineTo(width * 0.9, height * 0.68)
      ctx.lineTo(width, height * 0.7)
      ctx.lineTo(width, height)
      ctx.lineTo(0, height)
      ctx.closePath()
      ctx.fill()

      // Snow caps
      ctx.fillStyle = "#f1f5f9" // Slate 100
      ctx.beginPath()
      ctx.moveTo(width * 0.2, height * 0.5)
      ctx.lineTo(width * 0.25, height * 0.53)
      ctx.lineTo(width * 0.3, height * 0.51)
      ctx.lineTo(width * 0.35, height * 0.54)
      ctx.lineTo(width * 0.4, height * 0.65)
      ctx.closePath()
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(width * 0.6, height * 0.45)
      ctx.lineTo(width * 0.65, height * 0.48)
      ctx.lineTo(width * 0.7, height * 0.46)
      ctx.lineTo(width * 0.75, height * 0.5)
      ctx.lineTo(width * 0.8, height * 0.6)
      ctx.closePath()
      ctx.fill()
    }

    const drawTrekPath = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Define trek path points
      const pathPoints = [
        { x: width * 0.1, y: height * 0.9 },
        { x: width * 0.2, y: height * 0.85 },
        { x: width * 0.3, y: height * 0.8 },
        { x: width * 0.4, y: height * 0.75 },
        { x: width * 0.5, y: height * 0.8 },
        { x: width * 0.6, y: height * 0.7 },
        { x: width * 0.7, y: height * 0.65 },
        { x: width * 0.8, y: height * 0.7 },
        { x: width * 0.9, y: height * 0.75 },
      ]

      // Draw path
      ctx.strokeStyle = "#c4b5fd" // Lavender 300
      ctx.lineWidth = 3
      ctx.lineCap = "round"
      ctx.lineJoin = "round"
      ctx.beginPath()
      ctx.moveTo(pathPoints[0].x, pathPoints[0].y)

      for (let i = 1; i < pathPoints.length; i++) {
        ctx.lineTo(pathPoints[i].x, pathPoints[i].y)
      }

      ctx.stroke()

      // Draw dashed path for future trek
      ctx.setLineDash([5, 5])
      ctx.strokeStyle = "#a78bfa" // Lavender 400
      ctx.beginPath()
      ctx.moveTo(pathPoints[pathPoints.length - 1].x, pathPoints[pathPoints.length - 1].y)
      ctx.lineTo(width * 0.95, height * 0.6)
      ctx.stroke()
      ctx.setLineDash([])
    }

    const drawTrekPoints = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
      // Define trek points
      const trekPoints = [
        { x: width * 0.1, y: height * 0.9, name: "Start Point" },
        { x: width * 0.3, y: height * 0.8, name: "Base Camp" },
        { x: width * 0.5, y: height * 0.8, name: "River Crossing" },
        { x: width * 0.7, y: height * 0.65, name: "Summit View" },
        { x: width * 0.9, y: height * 0.75, name: "End Point" },
        { x: width * 0.95, y: height * 0.6, name: "Future Trek", future: true },
      ]

      // Draw points
      trekPoints.forEach((point) => {
        // Draw circle
        ctx.beginPath()
        ctx.arc(point.x, point.y, 6, 0, Math.PI * 2)
        ctx.fillStyle = point.future ? "#a78bfa50" : "#a78bfa" // Lavender 400
        ctx.fill()
        ctx.strokeStyle = "#fff"
        ctx.lineWidth = 2
        ctx.stroke()

        // Draw label
        ctx.font = "12px sans-serif"
        ctx.fillStyle = "#1e293b" // Slate 800
        ctx.textAlign = "center"
        ctx.fillText(point.name, point.x, point.y - 15)
      })
    }

    // Initial draw
    drawMap()

    // Handle resize
    const handleResize = () => {
      if (!canvas) return
      canvas.width = canvas.clientWidth
      canvas.height = canvas.clientHeight
      drawMap()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 rounded-lg bg-background shadow-lg"
    >
      <h3 className="text-xl font-semibold mb-4">Trek Map</h3>
      <div className="h-60 rounded-md overflow-hidden border border-lavender-200 dark:border-lavender-800">
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>
      <p className="mt-4 text-sm text-muted-foreground">
        A visualization of my favorite trekking routes in Nepal. The lavender line shows completed treks, while the
        dashed line represents planned future adventures.
      </p>
    </motion.div>
  )
}
