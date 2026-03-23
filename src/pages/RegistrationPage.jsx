import './RegistrationPage.css'

export default function RegistrationPage() {
  return (
    <div className="registration-page">
      <div className="registration-header">
        <h1 className="page-title">
          Registration <span className="electric-text">Process</span>
        </h1>
        <p className="page-subtitle">
          Follow the steps below to secure your spot at ENCURSO 2K26.
        </p>
      </div>

      <div className="registration-steps-container">
        
        <div className="reg-step">
          <div className="reg-step-header">
            <h2 className="reg-step-title">
              <span className="reg-step-number">1</span>
              Basic Registration
            </h2>
          </div>

          <div className="reg-special-note">
            <span className="reg-note-icon">🚨</span>
            <span>Special Note: For Non-Technical Events, NO NEED for Basic Registration!</span>
          </div>

          <p className="reg-step-text">
            Participants must first complete the basic registration by selecting one of the available options:
          </p>
          <ul className="reg-options-list">
            <li className="reg-option-item">✅ Basic</li>
            <li className="reg-option-item">✅ Basic + Food</li>
            <li className="reg-option-item">✅ Basic + Food + Accommodation</li>
          </ul>

          <div className="reg-links">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdHfPpKncTLkLFN39_GwOcyMjQ8uZQG2w0hEO3mj91iTgNnKA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="main-reg-btn"
            >
              Register Now ⚡
            </a>
          </div>

          <div className="reg-info-box">
            <p>
              💡 Upon successful registration, a unique <strong className="reg-highlight">ENCURSO ID</strong> will be generated and shared with each participant.
            </p>
          </div>
        </div>

        <div className="reg-step">
          <h2 className="reg-step-title">
            <span className="reg-step-number">2</span>
            Event &amp; Workshop Registration
          </h2>
          <p className="reg-step-text">
            Using the provided ENCURSO ID, participants can then register for their desired workshops and events of interest.
          </p>
        </div>
      </div>
    </div>
  )
}
