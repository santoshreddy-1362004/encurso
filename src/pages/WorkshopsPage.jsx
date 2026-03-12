import './WorkshopsPage.css'

const workshops = [
  {
    title: 'Electric Vehicle Technology',
    img: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80',
    instructor: 'Prof. S. Lakshmi',
    duration: '4 hours',
    desc: 'Deep dive into EV architecture — BLDC motor control, battery management systems, regenerative braking, and EV charging infrastructure.',
    topics: ['BLDC Motors', 'BMS Design', 'Regenerative Braking', 'EV Charging'],
  },
  {
    title: 'IoT & Smart Systems',
    img: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=600&q=80',
    instructor: 'Dr. K. Ramesh',
    duration: '3 hours',
    desc: 'Build IoT-enabled smart monitoring systems using ESP32, sensors, MQTT protocol, and cloud dashboards.',
    topics: ['ESP32', 'MQTT Protocol', 'Cloud Dashboard', 'Smart Sensors'],
  },
  {
    title: 'Drone Building & Flight',
    img: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=600&q=80',
    instructor: 'Eng. V. Anil Kumar',
    duration: '5 hours',
    desc: 'Build a quadcopter from scratch — frame assembly, flight controller setup, ESC calibration, PID tuning, and maiden flight.',
    topics: ['Frame Assembly', 'Flight Controller', 'ESC Calibration', 'PID Tuning'],
  },
  {
    title: 'Embedded Systems with ARM',
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    instructor: 'Dr. P. Nagaraju',
    duration: '4 hours',
    desc: 'Program ARM Cortex-M microcontrollers for real-time control, automation, and embedded system applications.',
    topics: ['ARM Architecture', 'GPIO & Timers', 'ADC/DAC', 'RTOS Basics'],
  },
]

export default function WorkshopsPage() {
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
          <div className="ws-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
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
              <button className="ws-enroll-btn">Enroll Now ⚡</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
