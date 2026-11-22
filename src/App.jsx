import { useEffect } from 'react'
import './App.css'
import { ContainerTextFlip } from './components/ui/container-text-flip'
import { ExpandableProjectCards } from './components/ui/expandable-card'
import { FloatingDockDemo } from './components/FloatingDockDemo'
import { TimelineDemo } from './components/TimelineDemo'
import { EducationCardSection } from './components/EducationCardSection'
import { WavyBackgroundDemo } from './components/WavyBackgroundDemo'

const profile = {
  name: 'Samarth Hingane',
  role: 'Python Full Stack Developer',
  focus: 'AI/ML Learner',
  college: 'G H Raisoni International Skill Tech University',
  education: 'B.Tech (Skill Tech), 2nd Year',
  diplomaCollege: 'Ajeenkya DY Patil College of Engineering',
  score: '84%',
  internship: 'Graphix Tech',
  internshipDuration: '3 months',
}

const linkedinUrl =
  'https://www.linkedin.com/in/samarth-hingane-7493a02a6?utm_source=share_via&utm_content=profile&utm_medium=member_android'

const githubUrl = 'https://github.com/Samarthh07s'



const heroStats = [
  { value: '03', label: 'Featured projects' },
  { value: profile.internshipDuration, label: 'Internship training' },
  { value: '84%', label: 'Diploma Distinction' },
]


const baseUrl = import.meta.env.BASE_URL?.replace(/\/$/, '') || ''

const expandableProjects = [
  {
    title: 'FinWise',
    type: 'Finance management system',
    src: `${baseUrl}/finwise_preview.jpg`,
    ctaText: 'View Repo',
    ctaLink: 'https://github.com/Samarthh07s/FinWise',
    tags: ['Python', 'Django', 'Dashboard', 'Finance'],
    content: () => (
      <p>
        FinWise is a personal finance workspace built with Python and Django,
        focused on giving users a clear picture of their money. It tracks
        spending patterns, visualises savings behavior over time, and surfaces
        actionable insights through a clean dashboard. The project strengthened
        my skills in ORM design, data aggregation, and building real interfaces
        that people actually want to use.
      </p>
    ),
  },
  {
    title: 'SmartHealthCare',
    type: 'Healthcare workflow platform',
    src: `${baseUrl}/healthcare_preview.jpg`,
    ctaText: 'View Repo',
    ctaLink: 'https://github.com/Samarthh07s/Smart-Health-Care',
    tags: ['Healthcare', 'System Design', 'UX', 'Django'],
    content: () => (
      <p>
        SmartHealthCare is a healthcare-focused web project built around cleaner
        service access and practical information management. It covers patient
        record flows, appointment scheduling, and doctor profiles — all designed
        with a clear UX hierarchy. This project pushed me to think deeply about
        system design and real-world health data handling.
      </p>
    ),
  },
  {
    title: 'Barber Booking',
    type: 'Booking experience',
    src: `${baseUrl}/barber_preview.jpg`,
    ctaText: 'View Repo',
    ctaLink: 'https://github.com/Samarthh07s/Barber-Shop',
    tags: ['Booking', 'Frontend', 'User Flow', 'JavaScript'],
    content: () => (
      <p>
        Barber Booking is a scheduling platform designed to simplify the
        appointment experience for both customers and service providers. The
        focus was on a smooth, friction-free booking flow — selecting a barber,
        picking a service, and locking in a time slot — all with a clean,
        modern frontend that feels fast and intuitive.
      </p>
    ),
  },
]

const aboutHighlights = [
  'Currently pursuing B.Tech in Skill Tech (2nd Year) at G H Raisoni International Skill Tech University, Pune (2026–Present).',
  'Completed a Diploma in Engineering at Ajeenkya DY Patil College of Engineering, Pune, from 2023–2026 with First Class with Distinction (84%).',
  'Completed a 3-month Python Full Stack Internship at Graphix Tech in 2025 during my diploma.',
  'Actively expanding expertise across AI/ML foundations, System Design, and full-stack software development.',
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
      <WavyBackgroundDemo />

      <FloatingDockDemo />

      <header className="hero-shell" id="home" data-reveal>
        <div className="hero-copy">
          <p className="hero-greeting">Hello, I&apos;m</p>
          <h1>
            {profile.name}
            <span className="hero-role-flip">
              <ContainerTextFlip
                words={[
                  'Python Full Stack Developer',
                  'AI Engineer',
                  'Machine Learning',
                  'DSA',
                  'System Designer',
                ]}
                interval={2600}
              />
            </span>
          </h1>
          <p className="hero-description">
            Currently pursuing B.Tech (Skill Tech) 2nd Year in 2026 at G H Raisoni International Skill Tech University, Pune. Completed a 2023–2026 Diploma with 84% distinction and a 3-month Python Full Stack Internship in 2025 at Graphix Tech. Building practical web products with Python, Django, REST APIs, and modern frontend tools while steadily growing toward stronger AI/ML work.
          </p>

          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href={linkedinUrl} target="_blank" rel="noreferrer">
              Open LinkedIn
            </a>
            <a className="hero-button hero-button-secondary" href={githubUrl} target="_blank" rel="noreferrer">
              Visit GitHub
            </a>
          </div>

          <div className="hero-stats" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
            {heroStats.map((item) => (
              <div className="stat-tile" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>


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

          <ExpandableProjectCards cards={expandableProjects} />
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
          <div className="panel-head flex items-center justify-between flex-wrap gap-4 mb-2">
            <div>
              <span className="panel-label">Experience &amp; Career Journey</span>
              <h2>Interactive Experience Timeline</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="chip chip-quiet">Internship • Projects • Academics</span>
              <span className="chip chip-muted">Scroll Animated Beam</span>
            </div>
          </div>

          <TimelineDemo />
        </article>

        <article className="glass-panel education-panel" id="education" data-reveal>
          <div className="panel-head compact mb-3">
            <div>
              <span className="panel-label">Education</span>
              <h2>Academic Credentials</h2>
            </div>
            <span className="chip chip-quiet">Undergrad + Diploma</span>
          </div>

          <EducationCardSection />
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
