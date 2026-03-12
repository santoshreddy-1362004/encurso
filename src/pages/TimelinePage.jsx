import './TimelinePage.css'

const timelineData = [
  { time: '8:00 AM', event: 'Registration & Welcome Kit', icon: '📋', desc: 'Check-in at the main gate, collect ID badges and welcome kits.' },
  { time: '9:00 AM', event: 'Inauguration Ceremony', icon: '🎤', desc: 'Opening ceremony with chief guest address, lamp lighting, and keynote speech.' },
  { time: '9:45 AM', event: 'Workshops Begin', icon: '🔬', desc: 'All 6 parallel workshops kick off in their respective labs.' },
  { time: '10:00 AM', event: 'Technical Events — Round 1', icon: '⚡', desc: 'Circuit Clash, Code Surge, and Grid Wars begin simultaneously.' },
  { time: '11:30 AM', event: 'Tea Break & Networking', icon: '☕', desc: 'Refreshments and networking session at the electric lounge.' },
  { time: '12:00 PM', event: 'Robo Volt & EV Rally', icon: '🤖', desc: 'Robotics arena opens. EV Rally qualifying rounds start on the track.' },
  { time: '1:00 PM', event: 'Lunch Break', icon: '🍽️', desc: 'Lunch at the main dining hall. Food stalls open for all.' },
  { time: '2:00 PM', event: 'Spark Tank Pitches', icon: '💡', desc: 'Innovation pitches begin. Teams present their startup ideas to the jury.' },
  { time: '2:30 PM', event: 'Drone Strike Competition', icon: '🚁', desc: 'Drone obstacle course challenge in the open arena.' },
  { time: '3:00 PM', event: 'Watts Up! Paper Presentations', icon: '📝', desc: 'Paper presentations on renewable energy, EVs, and smart grids.' },
  { time: '3:30 PM', event: 'Tesla Quiz Finals', icon: '🧠', desc: 'Grand quiz finale on stage with live audience.' },
  { time: '4:30 PM', event: 'Cultural Performances', icon: '🎶', desc: 'Student performances, band show, and open mic.' },
  { time: '5:30 PM', event: 'Valedictory & Prize Distribution', icon: '🏆', desc: 'Closing ceremony, prize distribution, and vote of thanks.' },
  { time: '6:30 PM', event: 'DJ Night — Electro Beats', icon: '🎧', desc: 'End the day with an electrifying DJ night and light show!' },
]

export default function TimelinePage() {
  return (
    <div className="timeline-page">
      <div className="timeline-header">
        <h1 className="page-title">
          <span className="electric-text">Event</span> Timeline
        </h1>
        <div className="page-date-badge">📅 March 28 & 29, 2026</div>
        <p className="page-subtitle">Your complete schedule for ENCURSO 2K26 — plan your day, don't miss a spark!</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, i) => (
          <div className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} key={i} style={{ animationDelay: `${i * 0.08}s` }}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <div className="tl-time">{item.time}</div>
              <div className="tl-icon">{item.icon}</div>
              <h3 className="tl-event">{item.event}</h3>
              <p className="tl-desc">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
