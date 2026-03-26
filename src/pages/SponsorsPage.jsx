import './SponsorsPage.css'

const sponsors = [
  {
    name: 'Indian Bank',
    description: 'Empowering innovation and excellence in technology.',
    role: 'Title Sponsor',
    logoImg: '/image copy 6.png'
  },
  {
    name: 'ISTS',
    fullName: 'International School of Technology and Sciences for Women',
    description: 'Promoting education and empowering women in the tech industry.',
    role: 'Co-Sponsor',
    logoImg: '/ists.jpg'
  },
  {
    name: 'Canara Bank',
    description: 'A dedicated partner in driving technical advancements and student success.',
    role: 'Co-Sponsor',
    logoImg: '/image copy 5.png'
  },
  {
    name: 'Cyber TechTrix',
    description: 'Pioneering cyber solutions and supporting the next generation of engineers.',
    role: 'Technology Partner',
    logoImg: '/Untitled design.jpg (2).jpeg'
  }
]

export default function SponsorsPage() {
  return (
    <div className="sponsors-page">
      <div className="sponsors-header">
        <h1 className="page-title">
          Our <span className="electric-text">Sponsors</span>
        </h1>
        <p className="page-subtitle">
          We are incredibly grateful to our generous sponsors who make ENCURSO 2K26 possible.
        </p>
      </div>

      <div className="sponsors-banner-container">
        <img 
          src="/Encurso2K26 Poster (1).jpg (2).jpeg" 
          alt="ENCURSO 2K26 Sponsors Banner" 
          className="sponsors-banner" 
        />
      </div>

      <div className="sponsors-grid">
        {sponsors.map((s, i) => (
          <div className="sponsor-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="sponsor-logo-container">
              <img src={s.logoImg} alt={s.name} className="sponsor-logo-img" />
            </div>
            <div className="sponsor-role">{s.role}</div>
            <h3 className="sponsor-name">{s.name}</h3>
            {s.fullName && <div className="sponsor-fullname">{s.fullName}</div>}
            <p className="sponsor-desc">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
