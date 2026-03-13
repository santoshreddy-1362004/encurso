import './ElectricGateTransition.css'

export default function ElectricGateTransition({ phase }) {
  const isActive = phase !== 'idle'

  return (
    <div
      className={`electric-gate-transition ${isActive ? 'active' : ''} phase-${phase}`}
      aria-hidden="true"
    >
      <div className="gate-panel gate-left">
        <span className="gate-edge" />
        <span className="gate-arc" />
      </div>

      <div className="gate-panel gate-right">
        <span className="gate-edge" />
        <span className="gate-arc" />
      </div>

      <span className="gate-bolt">
        <svg
          className="gate-bolt-svg"
          viewBox="0 0 52 110"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            d="M 38 0 L 10 62 L 30 62 L 13 110 L 50 44 L 29 44 Z"
            fill="#00f0ff"
          />
          {/* glow duplicate */}
          <path
            d="M 38 0 L 10 62 L 30 62 L 13 110 L 50 44 L 29 44 Z"
            fill="none"
            stroke="#00f0ff"
            strokeWidth="3"
            opacity="0.55"
          />
        </svg>
      </span>
    </div>
  )
}