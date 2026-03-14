
import './WorkshopsPage.css'
import { useState } from 'react'
import Modal from '../components/Modal'

const workshops = [
  {
    title: 'Hands-on IoT Workshop',
    img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80',
    instructor: 'Industry Expert',
    duration: '3 hours',
    desc: 'Experience the Internet of Things by building and programming smart devices. Learn sensor integration, cloud connectivity, and real-world IoT applications.',
    topics: ['IoT Devices', 'Sensors', 'Cloud Integration', 'Live Projects'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfPf5VDr5MLxroGqObpT_mI2P4OwEzhmTbtlldkGYG-EfjJYA/viewform?usp=dialog',
  },
  {
    title: 'Hands-on Drone Workshop',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80',
    instructor: 'Drone Specialist',
    duration: '4 hours',
    desc: 'Assemble, configure, and fly drones. Gain practical skills in drone technology, flight control, and aerial robotics.',
    topics: ['Drone Assembly', 'Flight Control', 'Aerial Robotics', 'Hands-on Flying'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe2_KH5vj8HybatUiNjvmYMkErABvslzbyTPUIePvzOIqWcRQ/viewform?usp=publish-editor',
  },
  {
    title: 'MATLAB Simulation Workshop',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    instructor: 'MATLAB Professional',
    duration: '3 hours',
    desc: 'Master simulation and modeling using MATLAB. Explore electrical systems, automation, and data analysis through interactive sessions.',
    topics: ['MATLAB Basics', 'Simulation', 'Modeling', 'Data Analysis'],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc5_zImhXP45fD4Sc6Dwotc6vM2qHZwNcttqAJJRa5uhelc_g/viewform?usp=publish-editor',
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
              <p className="ws-desc">{w.desc}</p>
              <div className="ws-meta">
                <span className="ws-instructor">👤 {w.instructor}</span>
                <span className="ws-duration">⏱️ {w.duration}</span>
              </div>
              <div className="ws-topics">
                {w.topics.map((t, j) => (
                  <span className="ws-topic-tag" key={j}>{t}</span>
                ))}
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
                <div className="ws-expanded-details" style={{marginTop:'1rem',background:'#0a1a2f',padding:'1rem',borderRadius:'8px'}}>
                  <strong>Topics Covered:</strong>
                  <ul>
                    {w.topics.map((t, j) => <li key={j}>{t}</li>)}
                  </ul>
                  <p style={{marginTop:'0.5rem'}}><a href={w.registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#00f0ff'}}>Register for this workshop</a></p>
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
            <img src={workshops[modalIndex].img} alt={workshops[modalIndex].title} style={{width:'100%',borderRadius:'8px',marginBottom:'1rem'}} />
            <p>{workshops[modalIndex].desc}</p>
            <strong>Instructor:</strong> {workshops[modalIndex].instructor}<br/>
            <strong>Duration:</strong> {workshops[modalIndex].duration}<br/>
            <strong>Topics:</strong>
            <ul>
              {workshops[modalIndex].topics.map((t, j) => <li key={j}>{t}</li>)}
            </ul>
            <a href={workshops[modalIndex].registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#00f0ff',fontWeight:'bold'}}>Register Now</a>
          </div>
        )}
      </Modal>
    </div>
  )
}
