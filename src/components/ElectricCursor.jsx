import { useEffect, useRef } from 'react'
import './ElectricCursor.css'

export default function ElectricCursor() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId
    let mouse = { x: -100, y: -100 }
    let prevMouse = { x: -100, y: -100 }
    let isDown = false
    const sparks = []
    const trails = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    function spawnSparks(x, y, count, spread) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2
        const speed = 1.5 + Math.random() * spread
        sparks.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          decay: 0.02 + Math.random() * 0.03,
          size: 1 + Math.random() * 2,
        })
      }
    }

    function spawnArc(x, y) {
      const length = 20 + Math.random() * 40
      const angle = Math.random() * Math.PI * 2
      const points = [{ x, y }]
      let cx = x, cy = y
      const steps = 4 + Math.floor(Math.random() * 4)
      for (let i = 0; i < steps; i++) {
        cx += Math.cos(angle) * (length / steps) + (Math.random() - 0.5) * 20
        cy += Math.sin(angle) * (length / steps) + (Math.random() - 0.5) * 20
        points.push({ x: cx, y: cy })
      }
      trails.push({ points, life: 1, decay: 0.06 + Math.random() * 0.04 })
    }

    let moveCount = 0

    const onMove = (e) => {
      prevMouse.x = mouse.x
      prevMouse.y = mouse.y
      mouse.x = e.clientX
      mouse.y = e.clientY
      moveCount++

      // Spawn sparks along movement every few frames
      if (moveCount % 3 === 0) {
        spawnSparks(mouse.x, mouse.y, isDown ? 5 : 2, isDown ? 4 : 2)
      }
      // Mini arcs while dragging
      if (isDown && moveCount % 5 === 0) {
        spawnArc(mouse.x, mouse.y)
      }
    }

    const onDown = (e) => {
      isDown = true
      mouse.x = e.clientX
      mouse.y = e.clientY
      // Burst of sparks + arcs on click
      spawnSparks(mouse.x, mouse.y, 12, 5)
      for (let i = 0; i < 3; i++) spawnArc(mouse.x, mouse.y)
    }

    const onUp = () => { isDown = false }

    const onTouch = (e) => {
      const t = e.touches[0]
      if (t) {
        mouse.x = t.clientX
        mouse.y = t.clientY
        spawnSparks(mouse.x, mouse.y, 4, 3)
        if (moveCount % 6 === 0) spawnArc(mouse.x, mouse.y)
        moveCount++
      }
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    window.addEventListener('touchmove', onTouch, { passive: true })
    window.addEventListener('touchstart', (e) => {
      const t = e.touches[0]
      if (t) {
        mouse.x = t.clientX
        mouse.y = t.clientY
        spawnSparks(mouse.x, mouse.y, 10, 4)
        for (let i = 0; i < 2; i++) spawnArc(mouse.x, mouse.y)
      }
    }, { passive: true })

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw & update sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]
        s.x += s.vx
        s.y += s.vy
        s.vx *= 0.96
        s.vy *= 0.96
        s.life -= s.decay

        if (s.life <= 0) { sparks.splice(i, 1); continue }

        ctx.beginPath()
        ctx.arc(s.x, s.y, s.size * s.life, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 240, 255, ${s.life * 0.8})`
        ctx.shadowColor = '#00f0ff'
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      }

      // Draw & update arcs (mini lightning)
      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i]
        t.life -= t.decay

        if (t.life <= 0) { trails.splice(i, 1); continue }

        ctx.beginPath()
        ctx.moveTo(t.points[0].x, t.points[0].y)
        for (let j = 1; j < t.points.length; j++) {
          ctx.lineTo(t.points[j].x, t.points[j].y)
        }
        ctx.strokeStyle = `rgba(0, 240, 255, ${t.life * 0.7})`
        ctx.lineWidth = 1.5 * t.life
        ctx.shadowColor = '#00f0ff'
        ctx.shadowBlur = 12 * t.life
        ctx.stroke()

        // Bright core
        ctx.beginPath()
        ctx.moveTo(t.points[0].x, t.points[0].y)
        for (let j = 1; j < t.points.length; j++) {
          ctx.lineTo(t.points[j].x, t.points[j].y)
        }
        ctx.strokeStyle = `rgba(255, 255, 255, ${t.life * 0.4})`
        ctx.lineWidth = 0.5 * t.life
        ctx.shadowBlur = 0
        ctx.stroke()
      }

      // Small glow at cursor
      const glowAlpha = isDown ? 0.15 : 0.06
      const glowRadius = isDown ? 30 : 18
      const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, glowRadius)
      gradient.addColorStop(0, `rgba(0, 240, 255, ${glowAlpha})`)
      gradient.addColorStop(1, 'rgba(0, 240, 255, 0)')
      ctx.beginPath()
      ctx.arc(mouse.x, mouse.y, glowRadius, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return <canvas ref={canvasRef} className="electric-cursor-canvas" />
}
