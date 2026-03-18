
import './EventsPage.css'
import { useState } from 'react'
import Modal from '../components/Modal'

const events = [
  {
    name: 'Paper Presentation',
    icon: '📄',
    img: '/paper.png',
    desc: 'This event provides a platform for participants to present their research, ideas, and innovations in the field of Electrical and Electronics Engineering. It encourages knowledge sharing, critical thinking, and interaction with academicians and industry professionals.',
    tag: 'Technical',
    category: 'Technical',
    prize: '₹5,000',
    team: '1-2 members',
    duration: '15 min per team',
    evaluation: [
      'Content Quality – Depth of research, originality, and relevance to the domain',
      'Technical Knowledge – Understanding of the subject and clarity in explanation',
      'Presentation Skills – Communication, confidence, and delivery',
      'Innovation & Contribution – Novel ideas and practical significance',
      'Response to Questions – Ability to handle queries effectively',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdGVsEXmXT9A0-uDlbwJ9nCeeKlhPZdWqr0i15N6VPq_tb_Bg/viewform?usp=publish-editor',
  },
  {
    name: 'Project Expo',
    icon: '🔧',
    img: '/projectexp.png',
    desc: 'The Project Expo offers students an opportunity to exhibit their technical projects based on emerging and advanced technologies. Participants can demonstrate practical applications of their knowledge and showcase innovative solutions to real-world problems.',
    tag: 'Technical',
    category: 'Technical',
    prize: '₹12,000',
    team: '2-4 members',
    duration: 'Full Day',
    evaluation: [
      'Innovation & Creativity – Uniqueness of the project idea',
      'Technical Implementation – Functionality and working model',
      'Practical Application – Real-world relevance and problem-solving capability',
      'Presentation & Demonstration – Clarity in explaining the project',
      'Team Effort – Coordination and contribution of team members',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSc-BMzVt6Dnl8gjQ5TOz4s0G6K_8Ku8kWCLVzl2ICWy8SQ-og/viewform?usp=dialog',
  },
  {
    name: 'Circuit Clash',
    icon: '⚡',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    desc: 'A technical event designed to test participants\' understanding of electrical principles and their ability to analyze and solve circuit-related problems.',
    tag: 'Technical',
    category: 'Technical',
    prize: '₹2,000',
    entryFee: '₹500 / group',
    team: '2-3 members',
    duration: '1 hour',
    evaluation: [
      'Conceptual Knowledge – Understanding of electrical fundamentals',
      'Problem-Solving Skills – Accuracy and efficiency in solving circuits',
      'Time Management – Ability to complete tasks within the given time',
      'Analytical Thinking – Logical approach to circuit analysis',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfRmwo145el-AXK_9NW_jc_ENFHS8MQyu87pW8zFVubeMoLAQ/viewform?usp=publish-editor',
  },
  {
    name: 'Poster Presentation',
    icon: '🖼️',
    img: '/poster.png',
    desc: 'Transform your ideas into impactful visuals by presenting research, innovations, and technical concepts through creative posters.',
    tag: 'Technical',
    category: 'Technical',
    prize: '₹3,000',
    team: '1-2 members',
    duration: '2 hours',
    evaluation: [
      'Content Clarity – Relevance and accuracy of information',
      'Creativity – Visual appeal and originality',
      'Presentation Skills – Explanation and confidence',
      'Design – Layout, organization, and readability',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdb1qdSveEjtaLsujNpbo6dzNx4I2Qyp0YFsKo0tsjymVMT8g/viewform?usp=publish-editor',
  },
  {
    name: 'Watt-a-Quiz',
    icon: '❓',
    img: '/quiz.png',
    desc: 'An engaging and fun quiz event designed to test participants\' knowledge across various non-technical domains.',
    tag: 'Non-Technical',
    category: 'Non-Technical',
    prize: '₹2,000',
    entryFee: '₹500 / group',
    team: '2-3 members',
    duration: '45 min',
    evaluation: [
      'Knowledge Base – Range of general knowledge',
      'Accuracy – Correctness of answers',
      'Speed – Quick response time',
      'Team Coordination – Collaboration (if team-based)',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeMbkJjE49OK521ZcEQ3dlzEoOMCPeuuNGW-zk7nnj3gTWNaw/viewform?usp=publish-editor',
  },
  {
    name: 'Photography Contest',
    icon: '📸',
    img: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80',
    desc: 'Capture stunning moments and express creativity through photography. Let your photos tell a compelling story.',
    tag: 'Non-Technical',
    category: 'Non-Technical',
    prize: '₹500',
    entryFee: '₹50 / person',
    team: 'Individual',
    duration: 'Full Day',
    evaluation: [
      'Creativity – Uniqueness of the concept',
      'Composition – Framing, lighting, and focus',
      'Storytelling – Message conveyed through the image',
      'Technical Quality – Clarity and overall image quality',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSclCodiN-sCYRIYBD0j2fxMcFRaM2U3ezRatOYxesDNOCq8Fg/viewform?usp=publish-editor',
  },
  {
    name: 'Treasure Hunt',
    icon: '🗺️',
    img: '/treasure.png',
    desc: 'A thrilling event where participants follow clues, solve puzzles, and race against time to find the hidden treasure.',
    tag: 'Non-Technical',
    category: 'Non-Technical',
    prize: '₹500',
    entryFee: '₹50 / person',
    team: '2-4 members',
    duration: '1 hour',
    evaluation: [
      'Problem-Solving – Ability to decode clues',
      'Teamwork – Coordination among team members',
      'Speed & Accuracy – Completing tasks efficiently',
      'Strategy – Planning and decision-making',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeBXkS1p4ymEP-pwKavgGTAfMn6bketwXCM7dSdUGeNommWSw/viewform?usp=publish-editor',
  },
  {
    name: 'Reel Contest',
    icon: '🎬',
    img: '/reel.png',
    desc: 'Showcase your creativity and storytelling skills through short-form videos. Create engaging and impactful reels.',
    tag: 'Non-Technical',
    category: 'Non-Technical',
    prize: '₹1,000',
    entryFee: '₹100 / person',
    team: 'Individual',
    duration: 'Full Day',
    evaluation: [
      'Creativity – Originality of the concept',
      'Content Quality – Relevance and engagement',
      'Editing Skills – Transitions, effects, and presentation',
      'Storytelling – Clarity and impact of the message',
    ],
    registerUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSfyyWIUKDvXXIkW3iQCmrgb-6ZLJFJdgD9kmino6e1lczscHw/viewform?usp=publish-editor',
  },
]

export default function EventsPage() {
  const [modalIndex, setModalIndex] = useState(null)
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [filter, setFilter] = useState('All')

  const filteredEvents = filter === 'All' ? events : events.filter(e => e.category === filter)
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
        {['All', 'Technical', 'Non-Technical'].map(tag => (
          <button 
            className={`filter-tag ${filter === tag ? 'active' : ''}`} 
            key={tag}
            onClick={() => setFilter(tag)}
            style={{ 
              background: filter === tag ? 'var(--neon-blue)' : 'rgba(255,255,255,0.05)',
              color: filter === tag ? '#000' : '#fff',
              border: 'none',
              cursor: 'pointer',
              fontWeight: filter === tag ? 'bold' : 'normal'
            }}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="events-page-grid">
        {filteredEvents.map((event, i) => (
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
                {event.entryFee && <div className="ep-detail"><span className="ep-label">Entry Fee</span><span className="ep-value" style={{color: '#39ff14'}}>{event.entryFee}</span></div>}
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
                  <strong>Description:</strong> {event.desc}
                  {event.evaluation && (
                    <div style={{marginTop:'0.8rem'}}>
                      <strong style={{color:'#00f0ff'}}>📋 Evaluation Criteria:</strong>
                      <ul style={{marginTop:'0.4rem',paddingLeft:'1.2rem',color:'rgba(255,255,255,0.8)'}}>
                        {event.evaluation.map((c, j) => <li key={j} style={{marginBottom:'0.3rem'}}>{c}</li>)}
                      </ul>
                    </div>
                  )}
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
            <h2 style={{color:'#00f0ff'}}>{events[modalIndex].icon} {events[modalIndex].name}</h2>
            <img src={events[modalIndex].img} alt={events[modalIndex].name} style={{width:'100%',borderRadius:'8px',marginBottom:'1rem'}} />
            <p>{events[modalIndex].desc}</p>
            <strong>Team:</strong> {events[modalIndex].team}<br/>
            {events[modalIndex].entryFee && <><strong style={{color: '#39ff14'}}>Entry Fee:</strong> <span style={{color: '#39ff14'}}>{events[modalIndex].entryFee}</span><br/></>}
            {events[modalIndex].evaluation && (
              <div style={{marginTop:'1rem'}}>
                <strong style={{color:'#00f0ff'}}>📋 Evaluation Criteria:</strong>
                <ul style={{marginTop:'0.4rem',paddingLeft:'1.2rem',color:'rgba(255,255,255,0.85)'}}>
                  {events[modalIndex].evaluation.map((c, j) => <li key={j} style={{marginBottom:'0.3rem'}}>{c}</li>)}
                </ul>
              </div>
            )}
            <a href={events[modalIndex].registerUrl} target="_blank" rel="noopener noreferrer" style={{color:'#00f0ff',fontWeight:'bold',marginTop:'1rem',display:'inline-block'}}>Register Now ⚡</a>
          </div>
        )}
      </Modal>
    </div>
  )
}
