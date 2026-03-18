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
              <li><a href="/">Home</a></li>
              <li><a href="/register">Registration</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/workshops">Workshops</a></li>
              <li><a href="/helpline">Helpline</a></li>
            </ul>
          </div>
          <div className="footer-links-section">
            <h4>Workshops</h4>
            <ul>
              <li><a href="/workshops">IoT Workshop</a></li>
              <li><a href="/workshops">Drone Workshop</a></li>
              <li><a href="/workshops">EV Workshop</a></li>
              <li><a href="/workshops">Embedded Systems</a></li>
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
            <p style={{marginBottom: '0.2rem'}}><strong>Student Co-ordinators</strong></p>
            <p>K.V.V Sri Ram - 6301415143</p>
            <p>K. Vijay - 9949457004</p>
            <p style={{marginTop: '0.5rem', marginBottom: '0.2rem'}}><strong>For Further Queries</strong></p>
            <p>Pardha Praneeth . P - 9121962349</p>
            <p>G. Gnanendra - 9392454542</p>
            <p style={{marginTop: '0.5rem'}}>📧 encurso2k26@gmail.com</p>
            <div className="footer-socials" style={{marginTop: '1rem'}}>
              <a href="https://www.instagram.com/encurso2k26?igsh=MXVkYzl3cHQwbWY2dQ==" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer" title="Instagram">📸</a>
              <a href="https://x.com/Encurso2K26" className="social-icon" aria-label="X" target="_blank" rel="noopener noreferrer" title="X (Twitter)">𝕏</a>
              <a href="https://chat.whatsapp.com/BXpwNBOvpReEQM6XK2ghYw" className="social-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer" title="WhatsApp">🟢</a>
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
