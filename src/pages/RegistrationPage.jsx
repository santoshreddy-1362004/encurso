import './RegistrationPage.css'

export default function RegistrationPage() {
  return (
    <div className="registration-page" style={{ padding: '8rem 20px 4rem', minHeight: '100vh', background: '#0a1a2f', color: '#fff' }}>
      <div className="registration-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 className="page-title" style={{ fontSize: '3rem', color: '#00f0ff', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '0 0 10px rgba(0,240,255,0.5)' }}>
          Registration <span style={{ color: '#fff' }}>Process</span>
        </h1>
        <p className="page-subtitle" style={{ fontSize: '1.2rem', color: '#a0aec0', maxWidth: '600px', margin: '1rem auto' }}>
          Follow the steps below to secure your spot at ENCURSO 2K26.
        </p>
      </div>

      <div className="registration-steps-container" style={{ maxWidth: '800px', margin: '0 auto', background: 'rgba(255,255,255,0.05)', padding: '3rem', borderRadius: '16px', border: '1px solid rgba(0,240,255,0.2)', boxShadow: '0 0 30px rgba(0,240,255,0.1)' }}>
        
        <div className="step-1" style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '1.5rem' }}>
            <h2 style={{ color: '#00f0ff', margin: 0, fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ background: '#00f0ff', color: '#0a1a2f', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>1</span>
              Basic Registration
            </h2>
            <div style={{ background: 'rgba(57, 255, 20, 0.1)', border: '1px solid #39ff14', padding: '0.5rem 1rem', borderRadius: '8px', color: '#39ff14', fontWeight: 'bold', fontSize: '0.9rem' }}>
              🌟 Special Note: For Non-Technical Events, NO NEED for Basic Registration!
            </div>
          </div>
          <p style={{ marginBottom: '1rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
            Participants must first complete the basic registration by selecting one of the available options:
          </p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginBottom: '1.5rem', lineHeight: '1.8', fontSize: '1.1rem', color: '#e0e0e0' }}>
            <li style={{ padding: '0.5rem 1rem', background: 'rgba(0,240,255,0.05)', marginBottom: '0.5rem', borderRadius: '8px', borderLeft: '3px solid #00f0ff' }}>✅ Basic</li>
            <li style={{ padding: '0.5rem 1rem', background: 'rgba(0,240,255,0.05)', marginBottom: '0.5rem', borderRadius: '8px', borderLeft: '3px solid #00f0ff' }}>✅ Basic + Food</li>
            <li style={{ padding: '0.5rem 1rem', background: 'rgba(0,240,255,0.05)', marginBottom: '0.5rem', borderRadius: '8px', borderLeft: '3px solid #00f0ff' }}>✅ Basic + Food + Accommodation</li>
          </ul>

          <div className="registration-links" style={{ display: 'flex', gap: '1.5rem', marginBottom: '2rem' }}>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHfPpKncTLkLFN39_GwOcyMjQ8uZQG2w0hEO3mj91iTgNnKA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="main-reg-btn"
              style={{ display: 'inline-block', background: '#00f0ff', color: '#0a1a2f', padding: '1.2rem 3rem', borderRadius: '50px', fontSize: '1.2rem', fontWeight: 'bold', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '1px', boxShadow: '0 0 20px rgba(0,240,255,0.4)', transition: 'all 0.3s' }}
            >
              Register Now ⚡
            </a>
          </div>

          <p style={{ lineHeight: '1.6', fontSize: '1.1rem', padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', border: '1px dashed rgba(255,255,255,0.2)' }}>
            💡 Upon successful registration, a unique <strong style={{ color: '#00f0ff' }}>ENCURSO ID</strong> will be generated and shared with each participant.
          </p>
        </div>

        <div className="step-2" style={{ marginBottom: '3rem' }}>
          <h2 style={{ color: '#00f0ff', marginBottom: '1.5rem', fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ background: '#00f0ff', color: '#0a1a2f', borderRadius: '50%', width: '35px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', fontWeight: 'bold' }}>2</span>
            Event & Workshop Registration
          </h2>
          <p style={{ lineHeight: '1.6', fontSize: '1.1rem' }}>
            Using the provided ENCURSO ID, participants can then register for their desired workshops and events of interest.
          </p>
        </div>
      </div>
    </div>
  )
}
