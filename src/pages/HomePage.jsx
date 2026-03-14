
import Hero from '../components/Hero'
import About from '../components/About'
import DroneSection from '../components/DroneSection'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      {/* Highlight Workshops and Events */}
      <section id="workshops-preview" style={{padding: '4rem 0', background: '#0a1a2f'}}>
        <h2 className="section-title" style={{textAlign: 'center', color: '#00f0ff'}}>Workshops & Events</h2>
        <p style={{textAlign: 'center', color: '#fff', maxWidth: 600, margin: '0 auto 2rem'}}>
          Explore hands-on workshops: IoT, Drone, MATLAB Simulation. Participate in exciting events: Paper Presentation, Project Expo, Circuit Clash, Poster Presentation, Watt-a-Quiz, Photography Contest, Treasure Hunt, and Reel Contest.
        </p>
        <div style={{display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap'}}>
          <NavLink
            to="/workshops"
            className={({ isActive }) => `home-link-btn nav-link ${isActive ? 'active' : ''}`}
            style={{background:'#00f0ff',color:'#0a1a2f',padding:'1rem 2rem',borderRadius:'8px',textDecoration:'none',fontWeight:'bold',transition:'background 0.2s'}}
          >
            View Workshops
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) => `home-link-btn nav-link ${isActive ? 'active' : ''}`}
            style={{background:'#fff',color:'#0a1a2f',padding:'1rem 2rem',borderRadius:'8px',textDecoration:'none',fontWeight:'bold',transition:'background 0.2s'}}
          >
            View Events
          </NavLink>
        </div>
      </section>
      <DroneSection />
    </>
  )
}
