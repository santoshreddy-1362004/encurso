import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useRouteTransition } from './RouteTransitionProvider'
import './Hero.css'

function isPlainLeftClick(event) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.shiftKey
  )
}

export default function Hero() {
  const canvasRef = useRef(null)
  const { startRouteTransition, isTransitioning } = useRouteTransition()

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

    // Lightning bolt generator
    const bolts = []

    function createBolt() {
      const startX = Math.random() * canvas.width
      const startY = 0
      const points = [{ x: startX, y: startY }]
      let y = startY

      while (y < canvas.height * 0.6) {
        y += 20 + Math.random() * 35
        const x = points[points.length - 1].x + (Math.random() - 0.5) * 60
        points.push({ x, y })
      }

      bolts.push({ points, opacity: 0.5, birth: Date.now() })
    }

    function drawBolts() {
      const now = Date.now()
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i]
        const age = now - bolt.birth
        bolt.opacity = Math.max(0, bolt.opacity * (1 - age / 500) )

        if (bolt.opacity <= 0.01) {
          bolts.splice(i, 1)
          continue
        }

        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 240, 255, ${bolt.opacity * 0.6})`
        ctx.lineWidth = 1.2
        ctx.shadowColor = '#00f0ff'
        ctx.shadowBlur = 10

        for (let j = 0; j < bolt.points.length - 1; j++) {
          ctx.moveTo(bolt.points[j].x, bolt.points[j].y)
          ctx.lineTo(bolt.points[j + 1].x, bolt.points[j + 1].y)
        }
        ctx.stroke()

        // Glow layer
        ctx.beginPath()
        ctx.strokeStyle = `rgba(0, 240, 255, ${bolt.opacity * 0.15})`
        ctx.lineWidth = 3
        for (let j = 0; j < bolt.points.length - 1; j++) {
          ctx.moveTo(bolt.points[j].x, bolt.points[j].y)
          ctx.lineTo(bolt.points[j + 1].x, bolt.points[j + 1].y)
        }
        ctx.stroke()
      }
      ctx.shadowBlur = 0
    }

    let lastBolt = 0
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (Date.now() - lastBolt > 6000 + Math.random() * 6000) {
        createBolt()
        lastBolt = Date.now()
      }

      drawBolts()
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  const handleHeroRouteChange = (event, path) => {
    if (!isPlainLeftClick(event)) {
      return
    }

    if (isTransitioning) {
      event.preventDefault()
      return
    }

    const started = startRouteTransition(path)

    if (started) {
      event.preventDefault()
    }
  }

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="lightning-canvas" />
      <div className="hero-grid-overlay" />
      <div className="hero-content">
        <div className="hero-university-header">
          <p className="hero-univ-name">Jawaharlal Nehru Technological University Kakinada</p>
          <p className="hero-dept-presents">Department of Electrical {'&'} Electronics Engineering Presents</p>
        </div>
        <h1 className="hero-title">
          <span className="title-line-1">
            <span className="encurso-current">{'ENCURSO'.split('').map((ch, i) => <span key={i} className="current-letter" style={{ animationDelay: `${i * 0.15}s` }}>{ch}</span>)}</span>
          </span>
          <span className="title-line-2">
            <span className="year-text">2K26</span>
          </span>
        </h1>
        <div className="hero-date-banner">
          <span className="date-icon">📅</span>
          <span className="date-text">March 28 & 29, 2026</span>
          <span className="date-divider">|</span>
          <span className="date-days">2 Days of Electrifying Action</span>
        </div>
        <p className="hero-symposium">A National Level Technical Symposium</p>
        <p className="hero-venue">📍 JNTUK University College of Engineering — EEE Department, Kakinada</p>
        <p className="hero-tagline">
          <span className="tagline-spark">⚡</span>
          Where <span className="highlight-word">Innovation</span> Meets{' '}
          <span className="highlight-word">Voltage</span>
          <span className="tagline-spark">⚡</span>
        </p>


        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem' }}>
          <Link to="/register" className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', background: '#00f0ff', color: '#0a1a2f', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', boxShadow: '0 0 20px rgba(0,240,255,0.4)', transition: 'all 0.3s' }} onClick={event => handleHeroRouteChange(event, '/register')}>
            Register Now ⚡
          </Link>
          <div className="hero-buttons">
            <Link to="/events" className="btn-primary" onClick={event => handleHeroRouteChange(event, '/events')}>
              <span className="btn-text">Explore Events</span>
              <span className="btn-spark" />
            </Link>
            <Link to="/workshops" className="btn-primary" onClick={event => handleHeroRouteChange(event, '/workshops')}>
              <span className="btn-text">Explore Workshops</span>
              <span className="btn-spark" />
            </Link>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number electric-text">8</span>
            <span className="stat-label">Events</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number electric-text">4</span>
            <span className="stat-label">Workshops</span>
          </div>
          <div className="stat-divider" />
          <div className="stat-item">
            <span className="stat-number electric-text">100+</span>
            <span className="stat-label">Participants</span>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-line" />
        <span>SCROLL DOWN</span>
      </div>
    </section>
  )
}
