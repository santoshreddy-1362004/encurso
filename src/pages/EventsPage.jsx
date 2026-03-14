
import './EventsPage.css'
import { useState } from 'react'
import Modal from '../components/Modal'

const events = [
  {
    name: 'Paper Presentation',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    desc: 'Showcase your research and innovative ideas in electrical engineering and allied fields. Compete for recognition and prizes.',
    tag: 'Paper',
    prize: '₹5,000',
    team: '1-2 members',
    duration: '15 min per team',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdGVsEXmXT9A0-uDlbwJ9nCeeKlhPZdWqr0i15N6VPq_tb_Bg/viewform?usp=publish-editor',
  },
  {
    name: 'Project Expo',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    desc: 'Display your working projects—hardware, software, or integrated systems. Inspire and be inspired by peer innovations.',
    tag: 'Expo',
    prize: '₹12,000',
    team: '2-4 members',
    duration: 'Full Day',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfykDpu5v33SXnI4EOYweiHbC5SAkVS7C3K_paJngI1f33mbA/viewform?usp=publish-editor',
  },
  {
    name: 'Circuit Clash',
    img: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&q=80',
    desc: 'Test your circuit design and troubleshooting skills in a fast-paced, competitive environment.',
    tag: 'Technical',
    prize: '₹4,000',
    team: '2-3 members',
    duration: '1 hour',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfRmwo145el-AXK_9NW_jc_ENFHS8MQyu87pW8zFVubeMoLAQ/viewform?usp=publish-editor',
  },
  {
    name: 'Poster Presentation',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    desc: 'Communicate your technical concepts visually. Present posters on innovative topics and win accolades.',
    tag: 'Poster',
    prize: '₹3,000',
    team: '1-2 members',
    duration: '2 hours',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdb1qdSveEjtaLsujNpbo6dzNx4I2Qyp0YFsKo0tsjymVMT8g/viewform?usp=publish-editor',
  },
  {
    name: 'Watt-a-Quiz',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=600&q=80',
    desc: 'A power-packed quiz on electrical engineering, technology, and current affairs. Test your knowledge and win!',
    tag: 'Quiz',
    prize: '₹2,000',
    team: '2-3 members',
    duration: '45 min',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeMbkJjE49OK521ZcEQ3dlzEoOMCPeuuNGW-zk7nnj3gTWNaw/viewform?usp=publish-editor',
  },
  {
    name: 'Photography Contest',
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
    desc: 'Capture the spirit of ENCURSO! Submit your best shots and compete for the top spot.',
    tag: 'Creative',
    prize: '₹3,000',
    team: 'Individual',
    duration: 'Full Day',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSclCodiN-sCYRIYBD0j2fxMcFRaM2U3ezRatOYxesDNOCq8Fg/viewform?usp=publish-editor',
  },
  {
    name: 'Treasure Hunt',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80',
    desc: 'Solve clues, race against time, and find the hidden treasure on campus. Teamwork and wit will lead you to victory.',
    tag: 'Fun',
    prize: '₹2,500',
    team: '2-4 members',
    duration: '1 hour',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBXkS1p4ymEP-pwKavgGTAfMn6bketwXCM7dSdUGeNommWSw/viewform?usp=publish-editor',
  },
  {
    name: 'Reel Contest',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80',
    desc: 'Create and share a short, creative video reel capturing the excitement of the fest. Let your creativity shine!',
    tag: 'Creative',
    prize: '₹2,000',
    team: 'Individual',
    duration: 'Full Day',
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfyyWIUKDvXXIkW3iQCmrgb-6ZLJFJdgD9kmino6e1lczscHw/viewform?usp=publish-editor',
  },
]

export default function EventsPage() {
  const [modalIndex, setModalIndex] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null)
  return (
    <div className="events-page">
      <div className="events-page-header">
        <h1 className="page-title">
          <span className="electric-text">Electrifying</span> Events
        </h1>
        <div className="page-date-badge">📅 March 28 & 29, 2026</div>
        <p className="page-subtitle">Compete. Innovate. Electrify. Join the spark of excellence at ENCURSO 2K26.</p>
      </div>

      <div className="events-filter">
        {['All', 'Paper', 'Poster', 'Expo', 'Creative'].map(tag => (
          <span className="filter-tag" key={tag}>{tag}</span>
        ))}
      </div>

      <div className="events-page-grid">
        {events.map((event, i) => (
          <div className={`ep-card spark-border${expandedIndex === i ? ' ep-card-expanded' : ''}`} key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="ep-card-img">
              <img src={event.img} alt={event.name} loading="lazy" />
              <span className="ep-tag">{event.tag}</span>
            </div>
            <div className="ep-card-body">
              <h3 className="ep-name">{event.name}</h3>
              <p className="ep-desc">{event.desc}</p>
              <div className="ep-details">
                <div className="ep-detail"><span className="ep-label">Prize</span><span className="ep-value">{event.prize}</span></div>
                <div className="ep-detail"><span className="ep-label">Team</span><span className="ep-value">{event.team}</span></div>
                <div className="ep-detail"><span className="ep-label">Duration</span><span className="ep-value">{event.duration}</span></div>
              </div>
              <div className="ep-btn-group">
                <a
                  className="ep-register-btn"
                  href={event.registerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Register Now ⚡
                </a>
                <button className="ep-explore-btn" onClick={() => setModalIndex(i)}>Explore →</button>
                <button className="ep-explore-btn" style={{marginLeft:'0.5rem'}} onClick={() => setExpandedIndex(expandedIndex === i ? null : i)}>
                  {expandedIndex === i ? 'Collapse' : 'Expand'}
                </button>
              </div>
              {expandedIndex === i && (
                <div className="ep-expanded-details" style={{marginTop:'1rem',background:'#0a1a2f',padding:'1rem',borderRadius:'8px'}}>
                  <strong>Team:</strong> {event.team}<br/>
                  <strong>Duration:</strong> {event.duration}<br/>
                  <strong>Description:</strong> {event.desc}
                  <p style={{marginTop:'0.5rem'}}><a href={event.registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#00f0ff'}}>Register for this event</a></p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <Modal open={modalIndex !== null} onClose={() => setModalIndex(null)}>
        {modalIndex !== null && (
          <div>
            <h2 style={{color:'#00f0ff'}}>{events[modalIndex].name}</h2>
            <img src={events[modalIndex].img} alt={events[modalIndex].name} style={{width:'100%',borderRadius:'8px',marginBottom:'1rem'}} />
            <p>{events[modalIndex].desc}</p>
            <strong>Team:</strong> {events[modalIndex].team}<br/>
            <strong>Duration:</strong> {events[modalIndex].duration}<br/>
            <a href={events[modalIndex].registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#00f0ff',fontWeight:'bold'}}>Register Now</a>
          </div>
        )}
      </Modal>
    </div>
  )
}
