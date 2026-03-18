import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useRouteTransition } from './RouteTransitionProvider'
import './Navbar.css'

const navItems = [
  { label: 'Home', path: '/', icon: '🏠' },
  { label: 'Register', path: '/register', icon: '📝' },
  { label: 'Events', path: '/events', icon: '🎯' },
  { label: 'Workshops', path: '/workshops', icon: '🔧' },
  { label: 'Helpline', path: '/helpline', icon: '📞' },
]

function isPlainLeftClick(event) {
  return (
    event.button === 0 &&
    !event.metaKey &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.shiftKey
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { startRouteTransition, isTransitioning } = useRouteTransition()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const handleRouteChange = (event, path) => {
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
    <>
      {/* Desktop top navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <NavLink to="/" className="nav-logo" onClick={event => handleRouteChange(event, '/')}>
            <img src="/symbol1.png" alt="ENCURSO logo" className="nav-logo-img" />
            <div className="nav-logo-text">
              <span className="logo-text">ENCURSO</span>
              <span className="logo-year">2K26</span>
            </div>
          </NavLink>

          <ul className="nav-links">
            {navItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={event => handleRouteChange(event, item.path)}
                  end={item.path === '/'}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <NavLink to="/" className="nav-logo-right" onClick={event => handleRouteChange(event, '/')}>
            <img src="/symbol2.png" alt="JNTUK logo" className="nav-logo-img" />
          </NavLink>
        </div>
      </nav>

      {/* Mobile bottom tab bar */}
      <nav className="mobile-bottom-nav">
        {navItems.map(item => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
            onClick={event => handleRouteChange(event, item.path)}
            end={item.path === '/'}
          >
            <span className="bottom-nav-icon">{item.icon}</span>
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </>
  )
}
