import { useEffect, useRef } from 'react'

export default function PlanetBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Star field — generated once
    const stars = Array.from({ length: 280 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.8 + 0.2,
      b: 0.3 + Math.random() * 0.7,
      tw: Math.random() * Math.PI * 2,
    }))

    // Drifting nebula clouds
    const nebulae = Array.from({ length: 5 }, () => ({
      x: Math.random(),
      y: Math.random(),
      rx: 0.15 + Math.random() * 0.22,
      ry: 0.08 + Math.random() * 0.12,
      angle: Math.random() * Math.PI,
      isCyan: Math.random() > 0.5,
      alpha: 0.04 + Math.random() * 0.06,
    }))

    // Surface storm cells
    const storms = Array.from({ length: 7 }, (_, i) => ({
      angle: (i / 7) * Math.PI * 2 + Math.random() * 0.4,
      lat: (Math.random() - 0.5) * 0.9,
      size: 0.09 + Math.random() * 0.14,
      speed: (0.003 + Math.random() * 0.004) * (Math.random() > 0.5 ? 1 : -1),
      phase: Math.random() * Math.PI * 2,
      isCyan: i % 2 === 0,
    }))

    // Orbiting debris particles
    const debris = Array.from({ length: 40 }, () => ({
      angle: Math.random() * Math.PI * 2,
      speed: (0.004 + Math.random() * 0.009) * (Math.random() > 0.5 ? 1 : -1),
      distFactor: 1.25 + Math.random() * 0.55,
      tilt: -0.35 + Math.random() * 0.7,
      size: 0.5 + Math.random() * 2.2,
      alpha: 0.25 + Math.random() * 0.65,
      isCyan: Math.random() > 0.5,
    }))

    // Surface lightning arcs
    const surfArcs = []
    let lastArc = 0

    function makeArc(cx, cy, pr) {
      const startAngle = Math.random() * Math.PI * 2
      const arcSpan = (0.25 + Math.random() * 0.5) * Math.PI
      const steps = 12
      const pts = []
      for (let i = 0; i <= steps; i++) {
        const a = startAngle + (i / steps) * arcSpan
        const r = pr * 1.01 + (Math.random() - 0.5) * pr * 0.06
        pts.push({ x: cx + Math.cos(a) * r, y: cy + Math.sin(a) * r * 0.52 })
      }
      surfArcs.push({ pts, opacity: 1, birth: Date.now(), isCyan: Math.random() > 0.35 })
    }

    // ————————————————————————————————————————
    function drawStars(w, h, t) {
      stars.forEach(s => {
        const x = s.x * w
        const y = s.y * h
        const tw = Math.sin(t * 1.6 + s.tw) * 0.3 + 0.7
        const alpha = s.b * tw * 0.75
        ctx.beginPath()
        ctx.arc(x, y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
        ctx.fill()
        if (s.r > 1.3) {
          ctx.strokeStyle = `rgba(200, 235, 255, ${alpha * 0.35})`
          ctx.lineWidth = 0.5
          ctx.beginPath()
          ctx.moveTo(x - s.r * 3, y); ctx.lineTo(x + s.r * 3, y)
          ctx.moveTo(x, y - s.r * 3); ctx.lineTo(x, y + s.r * 3)
          ctx.stroke()
        }
      })
    }

    function drawNebulae(w, h) {
      nebulae.forEach(n => {
        const x = n.x * w
        const y = n.y * h
        const rx = n.rx * w
        const ry = n.ry * h
        const rgb = n.isCyan ? '0, 200, 255' : '168, 85, 247'
        const grad = ctx.createRadialGradient(x, y, 0, x, y, Math.max(rx, ry))
        grad.addColorStop(0, `rgba(${rgb}, ${n.alpha})`)
        grad.addColorStop(0.5, `rgba(${rgb}, ${n.alpha * 0.4})`)
        grad.addColorStop(1, 'transparent')
        ctx.save()
        ctx.translate(x, y)
        ctx.rotate(n.angle)
        ctx.scale(1, ry / rx)
        ctx.beginPath()
        ctx.arc(0, 0, rx, 0, Math.PI * 2)
        ctx.fillStyle = grad
        ctx.fill()
        ctx.restore()
      })
    }

    function drawPlanet(cx, cy, pr, t) {
      // ── Outer atmospheric corona ──
      const atmoR = pr * 1.45
      const atmo = ctx.createRadialGradient(cx, cy, pr * 0.85, cx, cy, atmoR)
      atmo.addColorStop(0, `rgba(0, 240, 255, ${0.14 + Math.sin(t * 0.7) * 0.04})`)
      atmo.addColorStop(0.4, `rgba(168, 85, 247, ${0.08 + Math.sin(t * 0.5) * 0.02})`)
      atmo.addColorStop(0.75, `rgba(100, 50, 200, 0.03)`)
      atmo.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, atmoR, 0, Math.PI * 2)
      ctx.fillStyle = atmo
      ctx.fill()

      // ── Sphere base with deep indigo core ──
      const sphere = ctx.createRadialGradient(
        cx - pr * 0.28, cy - pr * 0.22, pr * 0.06,
        cx, cy, pr
      )
      sphere.addColorStop(0, '#1e1785')
      sphere.addColorStop(0.12, '#13115c')
      sphere.addColorStop(0.38, '#09093a')
      sphere.addColorStop(0.68, '#060620')
      sphere.addColorStop(0.9, '#040418')
      sphere.addColorStop(1, '#020212')

      ctx.save()
      ctx.beginPath()
      ctx.arc(cx, cy, pr, 0, Math.PI * 2)
      ctx.fillStyle = sphere
      ctx.fill()
      ctx.clip()

      // ── Electric latitude grid ──
      const gridA = 0.055 + Math.sin(t * 1.1) * 0.018
      ctx.lineWidth = 0.75
      // Latitude lines
      for (let lat = -pr * 0.85; lat < pr * 0.85; lat += pr * 0.2) {
        const w = Math.sqrt(Math.max(0, pr * pr - lat * lat))
        ctx.beginPath()
        ctx.ellipse(cx, cy + lat, w, w * 0.11, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(0, 240, 255, ${gridA})`
        ctx.stroke()
      }
      // Longitude lines (rotating slowly)
      for (let i = 0; i < 6; i++) {
        const a = (i / 6) * Math.PI + t * 0.018
        ctx.beginPath()
        ctx.ellipse(cx, cy, pr * Math.abs(Math.cos(a)) + 1, pr, 0, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(168, 85, 247, ${gridA * 0.65})`
        ctx.stroke()
      }

      // ── Electric storm cells ──
      storms.forEach((s, idx) => {
        const sa = s.angle + t * s.speed
        const bx = cx + Math.cos(sa) * pr * 0.62
        const by = cy + Math.sin(sa) * pr * 0.62 * (0.48 + s.lat * 0.15)
        const br = pr * s.size
        const pulse = Math.sin(t * 2.2 + s.phase) * 0.5 + 0.5
        const rgb = s.isCyan ? '0, 240, 255' : '168, 85, 247'
        const g = ctx.createRadialGradient(bx, by, 0, bx, by, br)
        g.addColorStop(0, `rgba(${rgb}, ${0.28 + pulse * 0.22})`)
        g.addColorStop(0.55, `rgba(${rgb}, ${0.09 + pulse * 0.07})`)
        g.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.ellipse(bx, by, br, br * 0.58, sa * 0.3, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
      })

      // ── Terminator (dark side) ──
      const term = ctx.createLinearGradient(cx - pr * 0.1, cy, cx + pr * 1.05, cy)
      term.addColorStop(0, 'transparent')
      term.addColorStop(0.4, 'rgba(3, 3, 20, 0.28)')
      term.addColorStop(0.65, 'rgba(2, 2, 15, 0.82)')
      term.addColorStop(1, 'rgba(1, 1, 10, 0.97)')
      ctx.beginPath()
      ctx.arc(cx, cy, pr, 0, Math.PI * 2)
      ctx.fillStyle = term
      ctx.fill()

      // ── Dark side aurora (purple-cyan glow night side) ──
      const ax = cx + pr * 0.52
      const ay = cy - pr * 0.28
      const aur = ctx.createRadialGradient(ax, ay, 0, ax, ay, pr * 0.55)
      aur.addColorStop(0, `rgba(168, 85, 247, ${0.2 + Math.sin(t * 0.85) * 0.09})`)
      aur.addColorStop(0.45, `rgba(0, 240, 255, ${0.07 + Math.sin(t * 1.4) * 0.03})`)
      aur.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(ax, ay, pr * 0.55, 0, Math.PI * 2)
      ctx.fillStyle = aur
      ctx.fill()

      // ── Second aurora patch (lower dark side) ──
      const ax2 = cx + pr * 0.45
      const ay2 = cy + pr * 0.35
      const aur2 = ctx.createRadialGradient(ax2, ay2, 0, ax2, ay2, pr * 0.38)
      aur2.addColorStop(0, `rgba(0, 240, 255, ${0.12 + Math.sin(t * 1.1 + 2) * 0.06})`)
      aur2.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(ax2, ay2, pr * 0.38, 0, Math.PI * 2)
      ctx.fillStyle = aur2
      ctx.fill()

      ctx.restore()

      // ── Rim light (lit edge, not clipped) ──
      const rim = ctx.createRadialGradient(cx, cy, pr * 0.8, cx, cy, pr * 1.02)
      rim.addColorStop(0, 'transparent')
      rim.addColorStop(0.76, 'transparent')
      rim.addColorStop(0.88, `rgba(0, 200, 255, ${0.18 + Math.sin(t * 0.6) * 0.05})`)
      rim.addColorStop(0.95, `rgba(0, 240, 255, ${0.52 + Math.sin(t * 0.6) * 0.1})`)
      rim.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, pr * 1.02, 0, Math.PI * 2)
      ctx.fillStyle = rim
      ctx.fill()
    }

    function drawRingLayer(cx, cy, pr, t, backOnly) {
      const rings = [
        { rx: pr * 1.52, ry: pr * 0.175, tilt: 0.28, speed: 0.007, rgb: '0, 240, 255', w: 2.2 },
        { rx: pr * 1.82, ry: pr * 0.21, tilt: -0.19, speed: -0.0045, rgb: '168, 85, 247', w: 1.6 },
        { rx: pr * 2.05, ry: pr * 0.24, tilt: 0.12, speed: 0.003, rgb: '0, 200, 255', w: 1.2 },
      ]

      rings.forEach(ring => {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(ring.tilt)
        const offset = t * ring.speed
        const COUNT = 100
        for (let i = 0; i < COUNT; i++) {
          const a = (i / COUNT) * Math.PI * 2 + offset
          const x = Math.cos(a) * ring.rx
          const y = Math.sin(a) * ring.ry
          const isBack = y < 0
          if (backOnly !== isBack) continue
          const dist = Math.sqrt(x * x + (y / ring.ry * pr) * (y / ring.ry * pr))
          if (dist < pr * 0.98) continue // hidden behind planet
          const sparkle = (i % 8 === 0) ? 1.8 : 0.7
          const pulse = Math.sin(a * 5 + t * 3) * 0.35 + 0.65
          const alpha = (isBack ? 0.18 : 0.6) * pulse * sparkle
          const size = isBack ? 0.9 : (i % 8 === 0 ? 2.2 : 1.2)
          ctx.beginPath()
          ctx.arc(x, y, size, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${ring.rgb}, ${Math.min(1, alpha)})`
          if (!isBack) {
            ctx.shadowColor = `rgba(${ring.rgb}, 0.9)`
            ctx.shadowBlur = i % 8 === 0 ? 10 : 4
          }
          ctx.fill()
          ctx.shadowBlur = 0
        }
        ctx.restore()
      })
    }

    function drawDebris(cx, cy, pr, t) {
      debris.forEach(d => {
        d.angle += d.speed
        const rx = pr * d.distFactor
        const ry = rx * 0.14
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(d.tilt)
        const x = Math.cos(d.angle) * rx
        const y = Math.sin(d.angle) * ry
        if (y < 0) { ctx.restore(); return }
        const rgb = d.isCyan ? '0, 240, 255' : '168, 85, 247'
        ctx.beginPath()
        ctx.arc(x, y, d.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${rgb}, ${d.alpha})`
        ctx.shadowColor = `rgba(${rgb}, 0.7)`
        ctx.shadowBlur = 6
        ctx.fill()
        ctx.shadowBlur = 0
        ctx.restore()
      })
    }

    function drawSurfaceArcs(cx, cy, pr, t) {
      const now = Date.now()
      if (now - lastArc > 700 + Math.random() * 1100) {
        makeArc(cx, cy, pr)
        lastArc = now
      }
      for (let i = surfArcs.length - 1; i >= 0; i--) {
        const arc = surfArcs[i]
        const age = (now - arc.birth) / 550
        arc.opacity = Math.max(0, 1 - age * age)
        if (arc.opacity <= 0.01) { surfArcs.splice(i, 1); continue }
        const rgb = arc.isCyan ? '0, 240, 255' : '168, 85, 247'
        ctx.beginPath()
        ctx.moveTo(arc.pts[0].x, arc.pts[0].y)
        arc.pts.forEach(p => ctx.lineTo(p.x, p.y))
        ctx.strokeStyle = `rgba(${rgb}, ${arc.opacity * 0.9})`
        ctx.lineWidth = 1.5
        ctx.shadowColor = `rgba(${rgb}, 1)`
        ctx.shadowBlur = 12
        ctx.stroke()
        // bright core
        ctx.strokeStyle = `rgba(255, 255, 255, ${arc.opacity * 0.5})`
        ctx.lineWidth = 0.5
        ctx.stroke()
        ctx.shadowBlur = 0
      }
    }

    // ————————————————————————————————————————
    function animate(ts) {
      const t = ts * 0.001
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height * 0.52
      const pr = Math.min(canvas.width * 0.3, canvas.height * 0.44, 290)

      drawStars(canvas.width, canvas.height, t)
      drawNebulae(canvas.width, canvas.height)
      drawRingLayer(cx, cy, pr, t, true)   // back rings (behind planet)
      drawPlanet(cx, cy, pr, t)
      drawSurfaceArcs(cx, cy, pr, t)
      drawRingLayer(cx, cy, pr, t, false)  // front rings (in front of planet)
      drawDebris(cx, cy, pr, t)

      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}
