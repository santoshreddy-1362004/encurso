import './HelplinePage.css'

const contacts = [
  { role: 'Helpline', name: 'Sriram', phone: '+91 90000 00000', email: 'sriram@encurso.in' },
]

const faqs = [
  { q: 'Where is the event held?', a: 'JNTUK University College of Engineering, Kakinada — EEE Department Block.' },
  { q: 'Is there a registration fee?', a: 'Yes, ₹200 per person for all events access. Workshop-specific fees may apply.' },
  { q: 'Can I participate in multiple events?', a: 'Yes! You can register for multiple events as long as the timings don\'t overlap.' },
  { q: 'Is accommodation provided?', a: 'Limited hostel accommodation is available on a first-come-first-served basis. Contact us for details.' },
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
          <h2 className="hl-section-title">📞 Contact Our Team</h2>
          <div className="contacts-grid">
            {contacts.map((c, i) => (
              <div className="contact-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="contact-role">{c.role}</div>
                <div className="contact-name">{c.name}</div>
                <a href={`tel:${c.phone.replace(/\s/g, '')}`} className="contact-phone">{c.phone}</a>
                <a href={`mailto:${c.email}`} className="contact-email">{c.email}</a>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-section">
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

        <section className="location-section">
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
