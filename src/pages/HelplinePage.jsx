import './HelplinePage.css'

const workshopCoordinators = [
  { track: 'IoT Workshop', name: 'A. Lokesh', phone: '8008982765' },
  { track: 'Drone Workshop', name: 'A. Adarsh', phone: '7671832435' },
  { track: 'EV Workshop', name: 'A. Jayanth', phone: '8328520563' },
  { track: 'Embedded Systems', name: 'M. Yashwanth Surya', phone: '9502061344' },
]

const faqs = [
  { q: 'Where is the event held?', a: 'JNTUK University College of Engineering, Kakinada — EEE Department Block.' },
  { q: 'Is there a registration fee?', a: 'Yes, basic registration fees apply based on your package (Basic, Food, Accommodation).' },
  { q: 'Can I participate in multiple events?', a: 'Yes! You can register for multiple events as long as the timings don\'t overlap.' },
  { q: 'Is accommodation provided?', a: 'Yes, if you select the Basic + Food + Accommodation package during registration.' },
  { q: 'Will certificates be provided?', a: 'Yes, participation and winner certificates will be provided for all events and workshops.' },
  { q: 'Can students from other colleges participate?', a: 'Absolutely! ENCURSO 2K26 is open to students from all colleges across India.' },
]

export default function HelplinePage() {
  return (
    <div className="helpline-page">
      <div className="helpline-header">
        <h1 className="page-title">
          <span className="electric-text">Helpline</span> & Contact
        </h1>
        <p className="page-subtitle">Need help? We're here for you. Reach out to our team anytime.</p>
      </div>

      <div className="helpline-content">
        <section className="contacts-section">
          <h2 className="hl-section-title">🔧 Workshop Coordinators</h2>
          <div className="contacts-grid">
            {workshopCoordinators.map((c, i) => (
              <div className="contact-card" key={`ws-${i}`} style={{ background: 'rgba(0, 240, 255, 0.05)', padding: '1.2rem', borderRadius: '12px', border: '1px solid rgba(0, 240, 255, 0.2)' }}>
                <div className="contact-role" style={{ color: '#00f0ff', fontWeight: 'bold', marginBottom: '0.5rem' }}>{c.track}</div>
                <div className="contact-name" style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{c.name}</div>
                <a href={`tel:${c.phone}`} className="contact-phone" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.9rem' }}>
                  📞 {c.phone}
                </a>
              </div>
            ))}
          </div>
        </section>



        <section className="faq-section" style={{ marginTop: '4rem' }}>
          <h2 className="hl-section-title">❓ Frequently Asked Questions</h2>
          <div className="faq-list">
            {faqs.map((f, i) => (
              <div className="faq-item" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                <h3 className="faq-q">{f.q}</h3>
                <p className="faq-a">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="location-section" style={{ marginTop: '4rem' }}>
          <h2 className="hl-section-title">📍 Venue</h2>
          <div className="venue-card">
            <div className="venue-info">
              <h3>JNTUK University College of Engineering</h3>
              <p>Department of Electrical & Electronics Engineering</p>
              <p>Kakinada, Andhra Pradesh — 533003</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
