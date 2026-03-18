import { useEffect, useRef } from 'react'
import './EVCarSection.css'

export default function EVCarSection() {
  const sectionRef = useRef(null)
  const carRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          carRef.current?.classList.add('car-animate')
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="ev-section" className="ev-section" ref={sectionRef}>
      <h2 className="section-title">
        Electric <span className="highlight">Vehicle</span> Showcase
      </h2>
      <p className="ev-subtitle">The future of transportation is electric — and it's here.</p>

      {/* EV Car Image */}
      <div className="ev-image-container" style={{ textAlign: 'center', margin: '3rem 0' }}>
        <img 
          src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80" 
          alt="Electric Vehicle" 
          style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', border: '1px solid #00f0ff', boxShadow: '0 0 20px rgba(0,240,255,0.3)' }} 
        />
      </div>

      <div className="ev-features">
        <div className="ev-feature">
          <div className="feature-icon">🔋</div>
          <h4>Battery Tech</h4>
          <p>Next-gen lithium-ion and solid-state battery innovations</p>
        </div>
        <div className="ev-feature">
          <div className="feature-icon">⚡</div>
          <h4>Fast Charging</h4>
          <p>Ultra-rapid charging solutions for the future</p>
        </div>
        <div className="ev-feature">
          <div className="feature-icon">🌿</div>
          <h4>Zero Emission</h4>
          <p>Clean, green, and sustainable transportation</p>
        </div>
        <div className="ev-feature">
          <div className="feature-icon">🔌</div>
          <h4>Smart Grid</h4>
          <p>Vehicle-to-grid integration and smart energy management</p>
        </div>
      </div>
    </section>
  )
}
