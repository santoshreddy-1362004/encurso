import './EventsPage.css'

const events = [
  {
    name: 'Paper Presentation',
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    desc: 'Present your research papers on EVs, renewable energy, smart grids, IoT, power electronics, and emerging EEE technologies.',
    tag: 'Paper',
    prize: '₹5,000',
    team: '1-2 members',
    duration: '15 min per team',
  },
  {
    name: 'Poster Presentation',
    img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&q=80',
    desc: 'Design creative technical posters on emerging EEE topics. Visual storytelling meets engineering knowledge.',
    tag: 'Poster',
    prize: '₹3,000',
    team: '1-2 members',
    duration: '2 hours',
  },
  {
    name: 'Project Expo',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    desc: 'Exhibit your working hardware & software projects — automation systems, renewable energy prototypes, IoT solutions, and more.',
    tag: 'Expo',
    prize: '₹12,000',
    team: '2-4 members',
    duration: 'Full Day',
  },
  {
    name: 'Photography Contest',
    img: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=600&q=80',
    desc: 'Capture the energy of ENCURSO 2K26 through your lens! Best shots of the fest win exciting prizes.',
    tag: 'Creative',
    prize: '₹3,000',
    team: 'Individual',
    duration: 'Full Day',
  },
]

export default function EventsPage() {
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
          <div className="ep-card spark-border" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
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
                <button className="ep-register-btn">Register Now ⚡</button>
                <button className="ep-explore-btn">Explore →</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
