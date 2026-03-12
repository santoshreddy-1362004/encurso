import { useEffect, useRef } from 'react'
import './DroneSection.css'

export default function DroneSection() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animationId

    const resize = () => {
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Drone class
    class Drone {
      constructor(x, y, size, speed, direction) {
        this.x = x
        this.y = y
        this.size = size
        this.speed = speed
        this.direction = direction
        this.bobOffset = Math.random() * Math.PI * 2
        this.propAngle = 0
        this.trailPoints = []
      }

      update(time) {
        this.x += this.speed * this.direction * 0.7
        this.y += Math.sin(time * 0.0012 + this.bobOffset) * 0.3
        this.propAngle += 0.25

        // Trail
        this.trailPoints.push({ x: this.x, y: this.y + this.size * 0.8, alpha: 1 })
        if (this.trailPoints.length > 30) this.trailPoints.shift()
        this.trailPoints.forEach(p => p.alpha *= 0.95)

        // Wrap around
        if (this.direction > 0 && this.x > canvas.width + 100) this.x = -100
        if (this.direction < 0 && this.x < -100) this.x = canvas.width + 100
      }

      draw(ctx) {
        const s = this.size

        // Draw trail
        ctx.beginPath()
        for (let i = 0; i < this.trailPoints.length - 1; i++) {
          const p = this.trailPoints[i]
          ctx.strokeStyle = `rgba(0, 240, 255, ${p.alpha * 0.3})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(this.trailPoints[i].x, this.trailPoints[i].y)
          ctx.lineTo(this.trailPoints[i + 1].x, this.trailPoints[i + 1].y)
          ctx.stroke()
        }

        ctx.save()
        ctx.translate(this.x, this.y)

        // Glow under drone
        const glowGrad = ctx.createRadialGradient(0, s * 0.5, 0, 0, s * 0.5, s * 1.5)
        glowGrad.addColorStop(0, 'rgba(0, 240, 255, 0.15)')
        glowGrad.addColorStop(1, 'rgba(0, 240, 255, 0)')
        ctx.fillStyle = glowGrad
        ctx.fillRect(-s * 1.5, -s * 0.5, s * 3, s * 2)

        // Drone body (center)
        ctx.fillStyle = '#0d1440'
        ctx.strokeStyle = '#00f0ff'
        ctx.lineWidth = 1.5
        ctx.beginPath()
        ctx.roundRect(-s * 0.4, -s * 0.15, s * 0.8, s * 0.3, 4)
        ctx.fill()
        ctx.stroke()

        // Camera/sensor underneath
        ctx.fillStyle = '#00f0ff'
        ctx.globalAlpha = 0.6
        ctx.beginPath()
        ctx.arc(0, s * 0.2, s * 0.08, 0, Math.PI * 2)
        ctx.fill()
        ctx.globalAlpha = 1

        // Arms
        const armPositions = [
          { x: -s * 0.8, y: -s * 0.3 },
          { x: s * 0.8, y: -s * 0.3 },
          { x: -s * 0.6, y: s * 0.2 },
          { x: s * 0.6, y: s * 0.2 }
        ]

        armPositions.forEach((pos, i) => {
          // Arm line
          ctx.strokeStyle = '#00f0ff'
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(0, 0)
          ctx.lineTo(pos.x, pos.y)
          ctx.stroke()

          // Motor housing
          ctx.fillStyle = '#111'
          ctx.strokeStyle = '#00f0ff'
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, s * 0.1, 0, Math.PI * 2)
          ctx.fill()
          ctx.stroke()

          // Spinning propellers
          const propLen = s * 0.35
          const angle = this.propAngle + (i * Math.PI / 2)
          ctx.strokeStyle = 'rgba(0, 240, 255, 0.6)'
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(pos.x + Math.cos(angle) * propLen, pos.y + Math.sin(angle) * propLen * 0.3)
          ctx.lineTo(pos.x - Math.cos(angle) * propLen, pos.y - Math.sin(angle) * propLen * 0.3)
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(pos.x + Math.cos(angle + Math.PI / 2) * propLen, pos.y + Math.sin(angle + Math.PI / 2) * propLen * 0.3)
          ctx.lineTo(pos.x - Math.cos(angle + Math.PI / 2) * propLen, pos.y - Math.sin(angle + Math.PI / 2) * propLen * 0.3)
          ctx.stroke()

          // Prop disc blur effect
          ctx.fillStyle = 'rgba(0, 240, 255, 0.05)'
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, propLen, 0, Math.PI * 2)
          ctx.fill()
        })

        // LED indicators
        ctx.fillStyle = '#39ff14'
        ctx.shadowColor = '#39ff14'
        ctx.shadowBlur = 8
        ctx.beginPath()
        ctx.arc(-s * 0.3, -s * 0.12, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.fillStyle = '#ff3333'
        ctx.shadowColor = '#ff3333'
        ctx.beginPath()
        ctx.arc(s * 0.3, -s * 0.12, 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.restore()
      }
    }

    const drones = [
      new Drone(100, 80, 35, 1.2, 1),
      new Drone(canvas.width - 50, 150, 28, 0.8, -1),
      new Drone(canvas.width / 2, 60, 40, 1.5, 1),
    ]

    function animate(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drones.forEach(d => {
        d.update(time)
        d.draw(ctx)
      })
      animationId = requestAnimationFrame(animate)
    }
    animate(0)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="drones" className="drone-section">
      <h2 className="section-title">
        Electric <span className="highlight">Drones</span> Arena
      </h2>
      <p className="drone-subtitle">Autonomous flight powered by cutting-edge EEE innovation</p>

      <div className="drone-canvas-container">
        <canvas ref={canvasRef} className="drone-canvas" />
      </div>

      <div className="drone-info-grid">
        <div className="drone-info-card spark-border">
          <h4>🚁 Autonomous Navigation</h4>
          <p>AI-powered flight controllers with real-time obstacle avoidance and path planning</p>
        </div>
        <div className="drone-info-card spark-border">
          <h4>🔋 Extended Flight Time</h4>
          <p>Advanced LiPo batteries and efficient brushless motors for longer missions</p>
        </div>
        <div className="drone-info-card spark-border">
          <h4>📡 Smart Communication</h4>
          <p>5G-enabled telemetry, live video streaming, and swarm coordination</p>
        </div>
      </div>
    </section>
  )
}
