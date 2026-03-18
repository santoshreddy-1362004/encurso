
import './WorkshopsPage.css'
import { useState } from 'react'
import Modal from '../components/Modal'

const workshops = [
  {
    title: 'Hands-on IoT Workshop',
    subtitle: 'Design, build, and control smart systems',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    instructor: 'SSIT (Sense Semiconductor & IT)',
    duration: '2 Days (Mar 28-29)',
    venue: 'EEE Dept, UCEK, JNTUK Kakinada',
    desc: 'Step into the world of smart technology by building your own IoT-based systems using ESP32. This hands-on workshop lets you work directly with sensors and actuators, understand real-time device communication, and create practical automation solutions through guided experiments and live demonstrations. It’s an ideal opportunity to experience how everyday devices are transformed into intelligent systems.',
    topics: ['IoT Devices', 'Sensors', 'Cloud Integration', 'Live Projects'],
    pricing: '1 Member: ₹1500 | 3 Members: ₹4000 | 5 Members: ₹6000',
    perks: 'IoT take-away kits will be provided',
    note: 'Participants must bring their laptops.',
    coordinator: 'A. Lokesh (8008982765)',
    registerUrl: 'https://forms.gle/MuqiWDkd28EYyJHo9',
  },
  {
    title: 'Hands-on Drone Workshop',
    subtitle: 'Design, control, and experience UAV systems',
    img: '/image copy.png',
    instructor: 'IIITDM Kurnool',
    duration: '2 Days (Mar 28-29)',
    venue: 'EEE Dept, UCEK, JNTUK Kakinada',
    desc: 'Get a real-time experience of drone technology by understanding how UAV systems are designed and operated. This hands-on workshop includes live demonstrations and practical sessions covering drone design, flight control, and basic operations. Participants will also explore real-world applications in aerial robotics and autonomous systems, gaining insight into one of the fastest-growing technologies.',
    topics: ['Drone Assembly', 'Flight Control', 'Aerial Robotics', 'Hands-on Flying'],
    pricing: '1 Member: ₹1300 | 3 Members: ₹3600 | 5 Members: ₹6000',
    perks: 'Hands-on practical exposure with live demonstrations',
    coordinator: 'A. Adarsh (7671832435)',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdzClSt-_gyp1qmyqzzZPrTLdqIQV5p4-oWCaNAYa1BzBkDOA/viewform?usp=dialog',
  },
  {
    title: 'Electric Vehicles (EV) Workshop',
    subtitle: 'Powering the future of smart mobility',
    img: '/image copy 2.png',
    instructor: 'EV Industry Professionals',
    duration: '2 Days (Mar 28-29)',
    venue: 'EEE Dept, UCEK, JNTUK Kakinada',
    desc: 'Gain practical insight into the rapidly evolving world of Electric Vehicles in this hands-on workshop. Understand EV design, battery technology, motors, and charging infrastructure through live demonstrations and interactive sessions. Explore real-world concepts like energy management and sustainable transportation while developing skills relevant to the growing EV industry.',
    topics: ['EV Architecture', 'Battery Management', 'Motor Control', 'Charging Infrastructure'],
    pricing: '1 Member: ₹1500 | 3 Members: ₹4000',
    perks: 'Hands-on learning with real-world EV insights',
    coordinator: 'A. Jayanth (8328520563)',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc5_zImhXP45fD4Sc6Dwotc6vM2qHZwNcttqAJJRa5uhelc_g/viewform?usp=dialog',
  },
  {
    title: 'Embedded System Design (STM32)',
    subtitle: 'Build, program, and control real-time embedded systems',
    img: '/image copy 3.png',
    instructor: 'SSIT (Sense Semiconductor & IT)',
    duration: '2 Days (Mar 28-29)',
    venue: 'EEE Dept, UCEK, JNTUK Kakinada',
    desc: 'Gain hands-on experience with STM32 microcontrollers and dive into the fundamentals of embedded system design. This workshop focuses on ARM Cortex-M architecture and bare-metal (register-level) programming, where participants will learn to configure GPIO, interrupts, and timers while developing basic hardware control applications through practical experiments.',
    topics: ['STM32 Architecture', 'GPIO & Peripherals', 'Firmware Development', 'RTOS Basics'],
    pricing: '1 Member: ₹1500 | 3 Members: ₹4000 | 5 Members: ₹6500',
    perks: 'Hands-on practical experience with embedded systems',
    note: 'Participants must bring their laptops.',
    coordinator: 'M. Yashwanth Surya (9502061344), Santosh Reddy',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScHCxYl9-RPHpYkyW3GsacN83jK9dT5466r0VVlaOh5b9_ZDQ/viewform?usp=dialog',
  },
]

export default function WorkshopsPage() {
  const [modalIndex, setModalIndex] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null)
  return (
    <div className="workshops-page">
      <div className="workshops-header">
        <h1 className="page-title">
          <span className="electric-text">Hands-on</span> Workshops
        </h1>
        <p className="page-subtitle">
          Learn from industry experts. Build real-world projects. Upskill with cutting-edge electrical engineering workshops.
        </p>
      </div>

      <div className="workshops-grid">
        {workshops.map((w, i) => (
          <div className={`ws-card${expandedIndex === i ? ' ws-card-expanded' : ''}`} key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="ws-card-img">
              <img src={w.img} alt={w.title} loading="lazy" />
            </div>
            <div className="ws-card-body">
              <h3 className="ws-title">{w.title}</h3>
              <p style={{ color: '#00f0ff', marginBottom: '0.8rem', fontSize: '0.9rem', fontStyle: 'italic' }}>{w.subtitle}</p>
              <p className="ws-desc" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{w.desc}</p>
              <div className="ws-meta">
                <span className="ws-instructor" title={w.instructor} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '140px' }}>👤 {w.instructor}</span>
                <span className="ws-duration">⏱️ {w.duration}</span>
              </div>
              <div style={{ margin: '1rem 0', padding: '0.8rem', background: 'rgba(0, 240, 255, 0.1)', border: '1px solid rgba(0, 240, 255, 0.3)', borderRadius: '8px', color: '#fff', fontSize: '0.9rem', textAlign: 'center' }}>
                💰 <strong style={{ color: '#00f0ff' }}>Pricing:</strong><br/>
                {w.pricing}
              </div>
              <div className="ws-btn-group">
                <a
                  className="ws-enroll-btn"
                  href={w.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now ⚡
                </a>
                <button className="ws-explore-btn" onClick={() => setModalIndex(i)}>Explore →</button>
                <button className="ws-explore-btn" style={{marginLeft:'0.5rem'}} onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}>
                  {expandedIndex === i ? 'Collapse' : 'Expand'}
                </button>
              </div>
              {expandedIndex === i && (
                <div className="ws-expanded-details" style={{marginTop:'1rem',background:'#0a1a2f',padding:'1rem',borderRadius:'8px', fontSize: '0.9rem'}}>
                  <p style={{marginBottom: '0.5rem'}}>{w.desc}</p>
                  <strong>Topics Covered:</strong>
                  <ul style={{marginBottom: '0.5rem'}}>
                    {w.topics.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                  <p style={{marginBottom: '0.5rem'}}>📍 <strong>Venue:</strong> {w.venue}</p>
                  <p style={{marginBottom: '0.5rem'}}>🎁 <strong>Perks:</strong> {w.perks}</p>
                  {w.note && <p style={{color: '#ff3333', marginBottom: '0.5rem'}}>⚠️ <strong>Note:</strong> {w.note}</p>}
                  <p style={{marginBottom: '0.5rem'}}>📞 <strong>Coordinator:</strong> {w.coordinator}</p>
                  <p style={{marginTop:'1rem'}}><a href={w.registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#00f0ff', fontWeight: 'bold'}}>Register for this workshop ⚡</a></p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Modal open={modalIndex !== null} onClose={() => setModalIndex(null)}>
        {modalIndex !== null && (
          <div>
            <h2 style={{color:'#00f0ff'}}>{workshops[modalIndex].title}</h2>
            <p style={{ color: '#fff', marginBottom: '1rem', fontStyle: 'italic' }}>{workshops[modalIndex].subtitle}</p>
            <img src={workshops[modalIndex].img} alt={workshops[modalIndex].title} style={{width:'100%',borderRadius:'8px',marginBottom:'1rem'}} />
            <div style={{ margin: '1rem 0', padding: '1rem', background: '#0a1a2f', border: '1px solid #00f0ff', borderRadius: '8px', color: '#fff', textAlign: 'center', boxShadow: '0 0 10px rgba(0,240,255,0.2)' }}>
              <strong style={{ color: '#00f0ff', fontSize: '1.2rem' }}>💰 Workshop Pricing</strong><br/><br/>
              <span style={{ fontSize: '1.1rem' }}>{workshops[modalIndex].pricing.split(' | ').map((p, idx) => <span key={idx} style={{display: 'block', margin: '0.3rem 0'}}>{p}</span>)}</span>
            </div>
            <p style={{lineHeight: '1.6', marginBottom: '1rem'}}>{workshops[modalIndex].desc}</p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <strong>Instructor:</strong> <br/>{workshops[modalIndex].instructor}<br/><br/>
                <strong>Duration:</strong> <br/>{workshops[modalIndex].duration}
              </div>
              <div>
                <strong>Venue:</strong> <br/>{workshops[modalIndex].venue}<br/><br/>
                <strong>Coordinator:</strong> <br/>{workshops[modalIndex].coordinator}
              </div>
            </div>
            <strong>Topics:</strong>
            <ul style={{marginBottom: '1rem'}}>
              {workshops[modalIndex].topics.map((t, j) => <li key={j}>{t}</li>)}
            </ul>
            <div style={{ background: 'rgba(57, 255, 20, 0.1)', border: '1px solid #39ff14', padding: '1rem', borderRadius: '8px', marginBottom: '1rem' }}>
              🎁 <strong>Perks:</strong> {workshops[modalIndex].perks}
            </div>
            {workshops[modalIndex].note && (
              <div style={{ background: 'rgba(255, 51, 51, 0.1)', border: '1px solid #ff3333', padding: '1rem', borderRadius: '8px', marginBottom: '1rem', color: '#ffaaaa' }}>
                ⚠️ <strong>Note:</strong> {workshops[modalIndex].note}
              </div>
            )}
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <a href={workshops[modalIndex].registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#0a1a2f', background: '#00f0ff', padding: '1rem 2rem', borderRadius: '50px', fontWeight:'bold', textDecoration: 'none', display: 'inline-block', textTransform: 'uppercase', letterSpacing: '1px'}}>Register Now ⚡</a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}
