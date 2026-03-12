import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">
        About <span className="highlight">ENCURSO</span>
      </h2>
      <div className="about-grid">
        <div className="about-card spark-border">
          <div className="card-icon">🔌</div>
          <h3>Electrifying Innovation</h3>
          <p>
            ENCURSO 2K26 is the flagship technical fest of the Department of Electrical & Electronics 
            Engineering. A celebration of circuits, innovation, and the future of sustainable energy.
          </p>
        </div>
        <div className="about-card spark-border">
          <div className="card-icon">⚡</div>
          <h3>Powered By Passion</h3>
          <p>
            From electric vehicles to smart grids, from autonomous drones to renewable energy — 
            we bring the future of EEE to life through competitions, workshops, and exhibitions.
          </p>
        </div>
        <div className="about-card spark-border">
          <div className="card-icon">🔋</div>
          <h3>Charged Experiences</h3>
          <p>
            Two days of non-stop technical events, coding challenges, robotics battles, 
            paper presentations, and mind-blowing demonstrations of electrical engineering.
          </p>
        </div>
      </div>
      <div className="voltage-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <polyline className="voltage-line" points="0,30 100,30 120,10 140,50 160,10 180,50 200,30 1200,30" />
        </svg>
      </div>
    </section>
  )
}
