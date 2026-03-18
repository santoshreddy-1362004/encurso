import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">
        About <span className="highlight">ENCURSO</span>
      </h2>
      <div className="about-content" style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', lineHeight: '1.8', fontSize: '1.1rem', color: '#e0e0e0', padding: '0 20px' }}>
        <p style={{ marginBottom: '1.5rem' }}>
          ENCURSO 2K26, the National-Level Technical Symposium organized by the Department of Electrical Engineering, brings together students, academicians, and industry professionals on a single platform to showcase innovation and technical expertise. It serves as a space for exchanging ideas, exploring emerging technologies, and fostering creativity within the engineering community.
        </p>
        <p>
          The event emphasizes learning beyond classrooms through workshops, project expos, and expert sessions, providing hands-on experience and industry exposure. ENCURSO 2K26 encourages participants to develop practical skills, engage with like-minded peers, and transform innovative ideas into real-world solutions.
        </p>
      </div>
      <div className="voltage-divider">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none">
          <polyline className="voltage-line" points="0,30 100,30 120,10 140,50 160,10 180,50 200,30 1200,30" />
        </svg>
      </div>
    </section>
  )
}
