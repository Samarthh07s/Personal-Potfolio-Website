import { useEffect } from 'react'
import './App.css'

const profile = {
  name: 'Samarth Hingane',
  role: 'Python Full Stack Developer',
  focus: 'AI/ML Learner',
  college: 'Ajeenkya DY Patil',
  education: 'Diploma, 3rd Year',
  score: '83%',
  internship: 'Graphix Tech',
  internshipDuration: '3 months',
}

const linkedinUrl =
  'https://www.linkedin.com/in/samarth-hingane-7493a02a6?utm_source=share_via&utm_content=profile&utm_medium=member_android'

const githubUrl = 'https://github.com/Samarthh07s'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Vlogs', href: '#vlogs' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'About Us', href: '#about' },
]

const heroStats = [
  { value: profile.score, label: 'Current score' },
  { value: '03', label: 'Featured projects' },
  { value: profile.internshipDuration, label: 'Internship training' },
  { value: 'Python + Django', label: 'Primary lane' },
]

const featuredProjects = [
  {
    title: 'FinWise',
    type: 'Finance management system',
    description:
      'A personal finance workspace for tracking spending, understanding savings behavior, and making money flow easier to read.',
    tags: ['Python', 'Django', 'Dashboard', 'Finance'],
    repoUrl: 'https://github.com/Samarthh07s/FinWise',
  },
  {
    title: 'SmartHealthCare',
    type: 'Healthcare workflow platform',
    description:
      'A healthcare-focused web project designed around clearer service access, cleaner flows, and practical information management.',
    tags: ['Healthcare', 'System Design', 'UX'],
    repoUrl: 'https://github.com/Samarthh07s/Smart-Health-Care',
  },
  {
    title: 'Barber Booking',
    type: 'Booking experience',
    description:
      'A scheduling web platform for appointments, customer convenience, and a smoother service-booking flow.',
    tags: ['Booking', 'Frontend', 'User Flow'],
    repoUrl: 'https://github.com/Samarthh07s/Barber-Shop',
  },
]

const aboutHighlights = [
  'Third-year diploma student at Ajeenkya DY Patil with a growing portfolio of practical web projects.',
  'Focused on Python full stack development while improving product thinking, UI polish, and real-world project structure.',
  'Actively building stronger foundations in AI/ML so future projects carry both utility and technical depth.',
]

const contactDetails = [
  { label: 'Name', value: 'Samarth Hingane', href: null },
  {
    label: 'Email',
    value: 'samarthhingane01@gmail.com',
    href: 'mailto:samarthhingane01@gmail.com',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/samarth-hingane-7493a02a6',
    href: linkedinUrl,
  },
  {
    label: 'GitHub',
    value: 'github.com/Samarthh07s',
    href: githubUrl,
  },
  { label: 'Mobile', value: '9359940302', href: 'tel:9359940302' },
]

const skillSpectrum = [
  { name: 'Python', value: '88%' },
  { name: 'Django', value: '82%' },
  { name: 'HTML / CSS', value: '84%' },
  { name: 'JavaScript', value: '74%' },
  { name: 'SQL', value: '71%' },
  { name: 'AI/ML Foundation', value: '68%' },
]

const vlogEntries = [
  {
    title: 'FinWise build diary',
    meta: 'Project journey',
    description:
      'A vlog lane for showing how a finance management system moves from raw idea to a more polished dashboard experience.',
  },
  {
    title: 'Graphix Tech learnings',
    meta: 'Internship notes',
    description:
      'A place to document daily lessons from Python full stack training, development workflow exposure, and practical execution.',
  },
  {
    title: 'AI/ML growth log',
    meta: 'Learning track',
    description:
      'A running series focused on experiments, concepts, and the next ideas worth turning into real portfolio work.',
  },
]

const experienceItems = [
  {
    company: 'Graphix Tech',
    role: 'Python Full Stack Internship',
    duration: '3 months',
    description:
      'Hands-on training with practical development workflow exposure, stronger implementation discipline, and full stack practice.',
  },
]

const educationItems = [
  { label: 'College', value: profile.college },
  { label: 'Program', value: profile.education },
  { label: 'Current result', value: profile.score },
  { label: 'Current focus', value: 'Full Stack + AI/ML' },
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.14 },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <main className="page liquid-page">
      <div className="ambient ambient-warm" aria-hidden="true"></div>
      <div className="ambient ambient-cool" aria-hidden="true"></div>
      <div className="ambient-room" aria-hidden="true"></div>
      <div className="ambient-noise" aria-hidden="true"></div>

      <nav className="floating-nav" data-reveal aria-label="Primary">
        {navItems.map((item) => (
          <a className="nav-pill" key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>

      <header className="hero-shell" id="home" data-reveal>
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1>
            {profile.name}
            <span>{profile.role}</span>
          </h1>
          <p className="hero-description">
            A third-year diploma student building practical web products with
            Python, Django, HTML, CSS, JavaScript, and SQL while steadily
            growing toward stronger AI/ML work.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href={linkedinUrl} target="_blank" rel="noreferrer">
              Open LinkedIn
            </a>
            <a className="hero-button hero-button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              Visit GitHub
            </a>
          </div>

          <div className="hero-stats">
            {heroStats.map((item) => (
              <div className="stat-tile" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="glass-panel hero-status">
          <div className="hero-status-media">
            <img src="/education-campus.jpeg" alt="Ajeenkya DY Patil campus" />
          </div>

          <div className="hero-status-body">
            <div className="status-pill">
              <span className="status-dot"></span>
              Open to stronger internships and product work
            </div>

            <div className="status-grid">
              <div>
                <span className="panel-label">College</span>
                <strong>{profile.college}</strong>
              </div>
              <div>
                <span className="panel-label">Education</span>
                <strong>{profile.education}</strong>
              </div>
              <div>
                <span className="panel-label">Current focus</span>
                <strong>
                  {profile.focus} + Full Stack
                </strong>
              </div>
            </div>
          </div>
        </aside>
      </header>

      <section className="dashboard-grid">
        <article className="glass-panel project-panel" id="projects" data-reveal>
          <div className="panel-head">
            <div>
              <span className="panel-label">Projects</span>
              <h2>Three builds with real signal</h2>
            </div>
            <span className="chip chip-quiet">03 active</span>
          </div>

          <div className="project-spotlight">
            <div>
              <span className="spotlight-kicker">{featuredProjects[0].type}</span>
              <h3>{featuredProjects[0].title}</h3>
            </div>
            <p>{featuredProjects[0].description}</p>

            <div className="project-tags">
              {featuredProjects[0].tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="project-list">
            {featuredProjects.map((project, index) => (
              <a
                className="project-tile"
                href={project.repoUrl}
                key={project.title}
                target="_blank"
                rel="noreferrer"
              >
                <span className="project-index">{`0${index + 1}`}</span>
                <strong>{project.title}</strong>
                <span className="project-type">{project.type}</span>
                <p>{project.description}</p>
              </a>
            ))}
          </div>
        </article>

        <article className="glass-panel skills-panel" id="skills" data-reveal>
          <div className="panel-head">
            <div>
              <span className="panel-label">Skills</span>
              <h2>Balanced for full stack growth</h2>
            </div>
          </div>

          <div className="skill-list">
            {skillSpectrum.map((item) => (
              <div className="skill-row" key={item.name}>
                <div className="skill-meta">
                  <span>{item.name}</span>
                  <strong>{item.value}</strong>
                </div>
                <div className="skill-track">
                  <span style={{ width: item.value }}></span>
                </div>
              </div>
            ))}
          </div>

          <div className="skill-cloud">
            <span>Python</span>
            <span>Django</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>SQL</span>
            <span>AI/ML</span>
            <span>UI Design</span>
          </div>
        </article>

        <article className="glass-panel vlog-panel" id="vlogs" data-reveal>
          <div className="panel-head">
            <div>
              <span className="panel-label">Vlogs</span>
              <h2>Journey and learning tracks</h2>
            </div>
          </div>

          <div className="vlog-list">
            {vlogEntries.map((item) => (
              <article className="vlog-card" key={item.title}>
                <span className="spotlight-kicker">{item.meta}</span>
                <strong>{item.title}</strong>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </article>

        <article className="glass-panel experience-panel" id="experience" data-reveal>
          <div className="panel-head compact">
            <div>
              <span className="panel-label">Experience</span>
              <h2>{profile.internship}</h2>
            </div>
            <button className="panel-power" type="button" aria-label="Experience highlight">
              O
            </button>
          </div>

          {experienceItems.map((item) => (
            <div className="experience-card" key={item.company}>
              <span className="spotlight-kicker">{item.duration}</span>
              <strong>{item.role}</strong>
              <p>{item.description}</p>
            </div>
          ))}
        </article>

        <article className="glass-panel education-panel" id="education" data-reveal>
          <div className="panel-head compact">
            <div>
              <span className="panel-label">Education</span>
              <h2>{profile.score} score</h2>
            </div>
            <span className="chip chip-muted">{profile.education}</span>
          </div>

          <div className="education-layout">
            <div className="score-ring" style={{ '--score': profile.score }}>
              <div className="score-core">
                <strong>{profile.score}</strong>
                <span>Current result</span>
              </div>
            </div>

            <div className="education-grid">
              {educationItems.map((item) => (
                <div className="education-card" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </article>

        <article className="glass-panel connect-panel" data-reveal>
          <div className="panel-head compact">
            <div>
              <span className="panel-label">Connect</span>
              <h2>Open the network</h2>
            </div>
          </div>

          <p className="connect-copy">
            Use this portfolio as the front door to LinkedIn, GitHub, and the
            projects that already represent Samarth&apos;s current journey.
          </p>

          <div className="connect-actions">
            <a className="hero-button hero-button-primary" href={linkedinUrl} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="hero-button hero-button-secondary" href={featuredProjects[0].repoUrl} target="_blank" rel="noreferrer">
              View FinWise
            </a>
            <a className="hero-button hero-button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </article>

        <article className="glass-panel about-panel" id="about" data-reveal>
          <div className="panel-head">
            <div>
              <span className="panel-label">About Us</span>
              <h2>Original details, clearer story</h2>
            </div>
            <span className="chip chip-quiet">Profile</span>
          </div>

          <p className="about-summary">
            This portfolio now speaks more directly about who Samarth is,
            what he is building, and where he is headed: practical full stack
            development backed by steady AI/ML growth.
          </p>

          <div className="about-list">
            {aboutHighlights.map((item) => (
              <div className="about-item" key={item}>
                <span className="about-marker"></span>
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="contact-grid">
            {contactDetails.map((item) => (
              <div className="contact-card" key={item.label}>
                <span className="panel-label">{item.label}</span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
