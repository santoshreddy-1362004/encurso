import './SponsorsPage.css'

const sponsors = [
  {
    name: 'Canara Bank',
    description: 'A dedicated partner in driving technical advancements and student success.',
    logoImg: '/image copy 6.png'
  },
  {
    name: 'ISTS',
    fullName: 'International School of Technology and Sciences for Women',
    description: 'Promoting education and empowering women in the tech industry.',
    logoImg: '/image copy 7.png'
  },
  {
    name: 'Indian Bank',
    description: 'Empowering innovation and excellence in technology.',
    logoImg: '/image copy 5.png'
  },
  {
    name: 'Cyber TechTrix',
    description: 'Pioneering cyber solutions and supporting the next generation of engineers.',
    logoImg: '/Untitled design.jpg (2).jpeg'
  }
]

export default function SponsorsPage() {
  return (
    <div className="sponsors-page">
      <div className="sponsors-header">
        <h1 className="page-title">
          All <span className="electric-text">Sponsors</span>
        </h1>
      </div>

      <div className="sponsors-grid">
        {sponsors.map((s, i) => (
          <div className="sponsor-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="sponsor-logo-container">
              <img src={s.logoImg} alt={s.name} className="sponsor-logo-img" />
            </div>
            {/* Removed sponsor role as requested */}
            <h3 className="sponsor-name">{s.name}</h3>
            {s.fullName && <div className="sponsor-fullname">{s.fullName}</div>}
            <p className="sponsor-desc">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
