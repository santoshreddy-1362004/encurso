import './Events.css'

const events = [
  { name: 'Circuit Clash', icon: '🔧', desc: 'Design and build circuits under time pressure. Best design wins!', tag: 'Technical' },
  { name: 'Code Surge', icon: '💻', desc: 'Competitive coding with electrical engineering twists and embedded challenges.', tag: 'Coding' },
  { name: 'Robo Volt', icon: '🤖', desc: 'Build robots that navigate electrified obstacle courses autonomously.', tag: 'Robotics' },
  { name: 'Watts Up!', icon: '📝', desc: 'Paper presentation on cutting-edge topics in electrical engineering.', tag: 'Paper' },
  { name: 'EV Rally', icon: '🏎️', desc: 'Design and race miniature electric vehicles on a custom track.', tag: 'Competition' },
  { name: 'Drone Strike', icon: '🚁', desc: 'Pilot drones through precision courses and aerial challenges.', tag: 'Drones' },
  { name: 'Spark Tank', icon: '💡', desc: 'Pitch your innovative EEE startup ideas to a panel of judges.', tag: 'Innovation' },
  { name: 'Grid Wars', icon: '⚡', desc: 'Solve power grid optimization problems in this simulation challenge.', tag: 'Technical' },
]

export default function Events() {
  return (
    <section id="events" className="events">
      <h2 className="section-title">
        <span className="highlight">Electrifying</span> Events
      </h2>
      <div className="events-grid">
        {events.map((event, i) => (
          <div className="event-card spark-border" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="event-tag">{event.tag}</div>
            <div className="event-icon">{event.icon}</div>
            <h3 className="event-name">{event.name}</h3>
            <p className="event-desc">{event.desc}</p>
            <button className="event-btn">Register →</button>
          </div>
        ))}
      </div>
    </section>
  )
}
