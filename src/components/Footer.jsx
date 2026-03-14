import './Footer.css'

export default function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-glow" />
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <h2 className="footer-logo">
              <span className="bolt-icon">⚡</span> ENCURSO <span className="footer-year">2K26</span>
            </h2>
            <p className="footer-dept">Department of Electrical & Electronics Engineering</p>
            <p className="footer-tagline">Where Innovation Meets Voltage</p>
          </div>
          <div className="footer-links-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="/workshops">Workshops</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="#drones">Drones</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Workshops</h4>
            <ul>
              <li><a href="/workshops">IoT Workshop</a></li>
              <li><a href="/workshops">Drone Workshop</a></li>
              <li><a href="/workshops">MATLAB Simulation</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Events</h4>
            <ul>
              <li><a href="/events">Paper Presentation</a></li>
              <li><a href="/events">Project Expo</a></li>
              <li><a href="/events">Circuit Clash</a></li>
              <li><a href="/events">Poster Presentation</a></li>
              <li><a href="/events">Watt-a-Quiz</a></li>
              <li><a href="/events">Photography Contest</a></li>
              <li><a href="/events">Treasure Hunt</a></li>
              <li><a href="/events">Reel Contest</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>📧 encurso2k26@eee.edu</p>
            <p>📱 +91 98765 43210</p>
            <p>📍 EEE Department, Block C</p>
            <div className="footer-socials">
              <a href="#" className="social-icon" aria-label="Instagram">📷</a>
              <a href="#" className="social-icon" aria-label="LinkedIn">💼</a>
              <a href="#" className="social-icon" aria-label="Twitter">🐦</a>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-bottom">
          <p>© 2026 ENCURSO 2K26 — EEE Department. All rights reserved.</p>
          <p className="made-with">Made with ⚡ and passion</p>
        </div>
      </div>
    </footer>
  )
}
