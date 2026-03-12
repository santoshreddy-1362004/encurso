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

      {/* Road with moving car */}
      <div className="ev-road-container">
        <div className="road">
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
          <div className="road-line" />
        </div>

        {/* EV Car SVG */}
        <div className="ev-car-wrapper" ref={carRef}>
          <div className="car-glow" />
          <svg className="ev-car" viewBox="0 0 400 160" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Car body */}
            <path d="M60 100 L80 55 L160 35 L280 35 L340 65 L370 100 Z" 
                  fill="url(#carGradient)" stroke="#00f0ff" strokeWidth="1.5"/>
            {/* Windows */}
            <path d="M95 60 L115 42 L175 38 L175 60 Z" fill="rgba(0,240,255,0.15)" stroke="#00f0ff" strokeWidth="0.8"/>
            <path d="M185 38 L265 38 L300 60 L185 60 Z" fill="rgba(0,240,255,0.15)" stroke="#00f0ff" strokeWidth="0.8"/>
            {/* Lower body */}
            <rect x="50" y="100" width="320" height="20" rx="5" fill="url(#carGradient2)" stroke="#00f0ff" strokeWidth="1"/>
            {/* Headlight */}
            <ellipse cx="365" cy="95" rx="12" ry="8" fill="#00f0ff" opacity="0.9">
              <animate attributeName="opacity" values="0.9;0.4;0.9" dur="1.5s" repeatCount="indefinite"/>
            </ellipse>
            <rect x="355" y="88" width="20" height="16" rx="3" fill="none" stroke="#00f0ff" strokeWidth="1"/>
            {/* Tail light */}
            <ellipse cx="55" cy="95" rx="8" ry="6" fill="#ff3333" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
            </ellipse>
            {/* Front wheel */}
            <circle cx="300" cy="125" r="25" fill="#111" stroke="#333" strokeWidth="3"/>
            <circle cx="300" cy="125" r="15" fill="none" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 300 125" to="360 300 125" dur="0.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="300" cy="125" r="5" fill="#00f0ff" opacity="0.8"/>
            {/* Rear wheel */}
            <circle cx="120" cy="125" r="25" fill="#111" stroke="#333" strokeWidth="3"/>
            <circle cx="120" cy="125" r="15" fill="none" stroke="#00f0ff" strokeWidth="1.5" opacity="0.6">
              <animateTransform attributeName="transform" type="rotate" from="0 120 125" to="360 120 125" dur="0.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="120" cy="125" r="5" fill="#00f0ff" opacity="0.8"/>
            {/* EV battery indicator on side */}
            <rect x="145" y="75" width="100" height="12" rx="3" fill="none" stroke="#00f0ff" strokeWidth="0.8"/>
            <rect x="147" y="77" width="0" height="8" rx="2" fill="#39ff14">
              <animate attributeName="width" from="0" to="96" dur="3s" fill="freeze" repeatCount="indefinite"/>
            </rect>
            {/* Lightning bolt on car */}
            <polygon points="205,68 195,85 202,85 197,100 212,80 205,80 210,68" fill="#facc15" opacity="0.9"/>
            {/* Headlight beam */}
            <polygon points="375,88 500,60 500,120 375,108" fill="url(#headlightBeam)" opacity="0.3"/>

            <defs>
              <linearGradient id="carGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0a0a2e"/>
                <stop offset="50%" stopColor="#0d1440"/>
                <stop offset="100%" stopColor="#0a0a2e"/>
              </linearGradient>
              <linearGradient id="carGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0a2e"/>
                <stop offset="50%" stopColor="#101850"/>
                <stop offset="100%" stopColor="#0a0a2e"/>
              </linearGradient>
              <linearGradient id="headlightBeam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.6"/>
                <stop offset="100%" stopColor="#00f0ff" stopOpacity="0"/>
              </linearGradient>
            </defs>
          </svg>

          {/* Electric sparks from bottom of car */}
          <div className="car-sparks">
            <div className="spark s1" />
            <div className="spark s2" />
            <div className="spark s3" />
            <div className="spark s4" />
            <div className="spark s5" />
          </div>
        </div>

        {/* Charging stations along road */}
        <div className="charging-station cs1">
          <div className="cs-pole" />
          <div className="cs-head">⚡</div>
        </div>
        <div className="charging-station cs2">
          <div className="cs-pole" />
          <div className="cs-head">⚡</div>
        </div>
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
