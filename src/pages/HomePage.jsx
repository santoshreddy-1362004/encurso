import Hero from '../components/Hero'
import About from '../components/About'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const [showPromo, setShowPromo] = useState(true)

  return (
    <>
      <Hero />
      <About />
      
      {showPromo && (
        <div className="promo-popup">
          <button 
            className="promo-close-btn"
            onClick={() => setShowPromo(false)}
          >
            ×
          </button>
          <div className="promo-header">
            <span className="promo-icon">🛡️</span>
            <h4 className="promo-title">Proud Sponsor</h4>
          </div>
          <p className="promo-desc">
            Powered by <strong>HackerDJ</strong> (Cyber TechTrix). Explore pioneering cyber solutions and tech!
          </p>
          <a 
            href="https://www.hackerdj.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="promo-link"
          >
            Visit HackerDJ ⚡
          </a>
        </div>
      )}
    </>
  )
}
