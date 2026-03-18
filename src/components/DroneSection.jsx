import { useEffect, useRef } from 'react'
import './DroneSection.css'

export default function DroneSection() {
  const canvasRef = useRef(null)



  return (
    <section id="drones" className="drone-section">
      <h2 className="section-title">
        Electric <span className="highlight">Drones</span> Arena
      </h2>
      <p className="drone-subtitle">Autonomous flight powered by cutting-edge EEE innovation</p>

      <div className="drone-image-container" style={{ textAlign: 'center', margin: '3rem 0' }}>
        <img 
          src="https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&q=80" 
          alt="Electric Drone" 
          style={{ width: '100%', maxWidth: '800px', borderRadius: '12px', border: '1px solid #00f0ff', boxShadow: '0 0 20px rgba(0,240,255,0.3)' }} 
        />
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
