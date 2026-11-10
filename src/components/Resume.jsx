import { Award, Download, GraduationCap, MonitorPlay, ArrowUp } from 'lucide-react'
import { education } from '../data/education'

const sectionLabel = 'mb-3 flex items-center gap-2 text-[10px] uppercase tracking-[0.12em] text-neutral-500 xl:mb-4 xl:text-xs'
const card = 'rounded-xl border border-neutral-800 bg-[#191919] p-3 sm:p-4 xl:p-5 2xl:p-6'
const chip = 'inline-flex rounded-full border border-neutral-700 px-2.5 py-1 text-[10px] leading-none text-neutral-300 xl:px-3 xl:py-1.5 xl:text-xs'
const bullet = 'relative pl-3 text-xs leading-relaxed text-neutral-300 before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rotate-45 before:border-r before:border-t before:border-blue-400 xl:pl-4 xl:text-sm'

const experience = [
  {
    dates: 'May 2025 –\nMay 2026',
    type: 'AI / LLM',
    tone: 'blue',
    initial: 'I',
    role: 'Analyst, AI / LLM Practice',
    organization: 'Incognito Knowledge Services, Inc.',
    bullets: [
      'Audited AI responses for accuracy, safety, and logical reasoning.',
      'Validated OCR text and prompts to refine LLM training data.',
    ],
    tags: ['LLM Evaluation', 'Prompt Engineering'],
  },
  {
    dates: 'Mar 2024 –\nMay 2024',
    type: 'Internship',
    tone: 'green',
    initial: 'S',
    role: 'Multimedia Arts Intern',
    organization: 'Sun Life Financial',
    bullets: [
      'Designed digital publicity materials and brand assets.',
      'Built website wireframes that work across devices.',
    ],
  },
]

const projects = [
  {
    title: 'AI Fish Classification & Automated Conveyor Sorting',
    date: 'May 2024 – Jun 2025',
    tags: ['YOLOv5', 'Python', 'Raspberry Pi'],
    bullets: [
      'Built a vision pipeline that grades freshness.',
      'Automated sorting on a live conveyor.',
    ],
  },
  {
    title: 'Grocery Mart E-Commerce Web Platform',
    date: 'Dec 2024',
    tags: ['WordPress', 'WooCommerce', 'MySQL'],
    bullets: ['Real-time inventory and secure logins.', 'Load times under 2 seconds.'],
  },
]

const skillGroups = [
  { name: 'AI & data', skills: ['LLM Evaluation', 'Prompt Engineering', 'OCR Validation'] },
  { name: 'Vision & IoT', skills: ['YOLOv5 / v8', 'OpenCV', 'Raspberry Pi'] },
  { name: 'Programming', skills: ['Java', 'JavaScript', 'SQL', 'HTML5', 'CSS3'] },
  { name: 'Cloud & tools', skills: ['AWS', 'Firebase', 'WordPress', 'Git'] },
]

const certificates = [
  { title: "Dean's Lister, RTU Pasig", type: 'Honor', honor: true },
  { title: 'Exploring Cybersecurity & Building Your Cyber Career', type: 'Webinar' },
  { title: 'State of Cybersecurity Landscape', type: 'Webinar' },
  { title: 'Practical Applications of AI/ML in the Real World', type: 'Webinar' },
]

const sections = [
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['education', 'Education'],
  ['skills', 'Skills'],
  ['certificates', 'Certificates'],
]

function SectionHeading({ children, id }) {
  return (
    <h3 id={id} className={`${sectionLabel} scroll-mt-5`}>
      <span>{children}</span>
      <span className="h-px flex-1 bg-neutral-800" />
    </h3>
  )
}

export default function Resume() {
  const scrollToSection = (event, id) => {
    event.preventDefault()
    document.getElementById(`resume-${id}`)?.scrollIntoView({ block: 'start', behavior: 'smooth' })
  }

  const scrollToTop = () => {
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div id="resume" className="mx-auto max-w-6xl px-5 pb-10 pt-5 sm:px-7 xl:max-w-none xl:px-10 2xl:max-w-[1800px] 2xl:px-16 2xl:pb-16 2xl:pt-8">
      <header className="mb-5 flex flex-wrap items-end justify-between gap-4 border-b border-neutral-800 pb-4 xl:mb-7 xl:pb-5">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-400 xl:text-xs">Resume</p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-white xl:text-3xl">My resume</h1>
          <div className="mt-3 h-0.5 w-36 rounded-full bg-blue-400 xl:mt-4 xl:w-48" />
        </div>
        <a
          href="/resume.pdf"
          download
          className="inline-flex h-9 items-center gap-2 rounded-lg bg-neutral-100 px-3.5 text-xs font-medium text-neutral-900 transition-colors hover:bg-white xl:h-11 xl:gap-2.5 xl:px-5 xl:text-sm"
        >
          <Download size={14} className="xl:h-[18px] xl:w-[18px]" />
          Download PDF
        </a>
      </header>

      <nav aria-label="Resume sections" className="mb-6 flex flex-wrap gap-2 lg:hidden">
        {sections.map(([id, title]) => (
          <a
            key={id}
            href={`#resume-${id}`}
            onClick={(event) => scrollToSection(event, id)}
            className="rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 hover:border-blue-500/60 hover:text-blue-300"
          >
            {title}
          </a>
        ))}
        <button
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1 rounded-full border border-neutral-800 px-3 py-1.5 text-xs text-neutral-400 hover:border-neutral-600 hover:text-white"
        >
          <ArrowUp size={12} />
          Top
        </button>
      </nav>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_150px] xl:grid-cols-[minmax(0,1fr)_175px] xl:gap-9 2xl:grid-cols-[minmax(0,1fr)_190px] 2xl:gap-10">
        <div className="min-w-0 space-y-7 xl:space-y-9">
          <section aria-labelledby="resume-experience">
            <SectionHeading id="resume-experience">Work experience</SectionHeading>
            <div className="space-y-2.5 xl:space-y-3">
              {experience.map((job) => (
                <article key={job.role} className="grid gap-2 sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-3 xl:grid-cols-[130px_minmax(0,1fr)] xl:gap-4">
                  <div className="pt-1">
                    <p className="whitespace-pre-line text-xs font-semibold leading-tight text-white xl:text-sm">{job.dates}</p>
                    <span
                      className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[10px] leading-none ${
                        job.tone === 'blue' ? 'bg-blue-950 text-blue-400' : 'bg-green-950 text-green-400'
                      } xl:px-3 xl:py-1.5 xl:text-xs`}
                    >
                      {job.type}
                    </span>
                  </div>
                  <div className={card}>
                    <div className="flex items-start gap-3">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-semibold xl:h-10 xl:w-10 xl:text-sm ${
                          job.tone === 'blue' ? 'bg-blue-950 text-blue-400' : 'bg-amber-950 text-amber-400'
                        }`}
                      >
                        {job.initial}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-white xl:text-base">{job.role}</h4>
                        <p className="text-xs text-neutral-400 xl:text-sm">{job.organization}</p>
                        <ul className="mt-2 space-y-1 xl:mt-3 xl:space-y-2">
                          {job.bullets.map((item) => <li key={item} className={bullet}>{item}</li>)}
                        </ul>
                        {job.tags && (
                          <div className="mt-3 flex flex-wrap gap-1.5">
                            {job.tags.map((tag) => <span className={chip} key={tag}>{tag}</span>)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-projects">
            <SectionHeading id="resume-projects">Projects</SectionHeading>
            <div className="grid gap-2.5 md:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className={card}>
                  <div className="flex flex-wrap items-start justify-between gap-1">
                    <h4 className="max-w-[75%] text-sm font-semibold leading-snug text-white xl:text-base">{project.title}</h4>
                      <span className="text-[10px] text-neutral-500 xl:text-xs">{project.date}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => <span className={chip} key={tag}>{tag}</span>)}
                  </div>
                  <ul className="mt-2 space-y-1">
                    {project.bullets.map((item) => <li key={item} className={bullet}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-education">
            <SectionHeading id="resume-education">Education</SectionHeading>
              <div className="grid gap-2.5">
                {education.map((item) => (
                  <article key={`${item.degree}-${item.institution}`} className={card}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="flex items-start gap-3">
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-950 text-blue-400">
                          <GraduationCap size={17} />
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-white">{item.degree}</h4>
                          <p className="text-xs text-neutral-400 xl:text-sm">{item.institution}</p>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:justify-end">
                        {item.dates && <span className={chip}>{item.dates}</span>}
                        {item.honors?.map((honor) => (
                          <span key={honor} className="rounded-full bg-green-950 px-2.5 py-1 text-[10px] leading-none text-green-400">
                            {honor}
                          </span>
                        ))}
                      </div>
                    </div>
                    {item.tags?.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.tags.map((tag) => <span className={chip} key={tag}>{tag}</span>)}
                      </div>
                    )}
                    {item.description && (
                      <p className="mt-3 border-t border-neutral-800 pt-3 text-xs text-neutral-300 xl:mt-4 xl:pt-4 xl:text-sm">
                        {item.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
          </section>

          <section aria-labelledby="resume-skills">
            <SectionHeading id="resume-skills">Skills</SectionHeading>
            <div className={`${card} divide-y divide-neutral-800`}>
              {skillGroups.map((group) => (
                <div key={group.name} className="grid gap-2 py-2.5 first:pt-0 last:pb-0 sm:grid-cols-[120px_minmax(0,1fr)] sm:items-center">
                  <h4 className="text-xs font-semibold text-neutral-200 xl:text-sm">{group.name}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {group.skills.map((skill) => <span className={chip} key={skill}>{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section aria-labelledby="resume-certificates">
            <SectionHeading id="resume-certificates">Certificates &amp; honors</SectionHeading>
            <div className={`${card} divide-y divide-neutral-800`}>
              {certificates.map((certificate) => (
                <div key={certificate.title} className="flex items-center gap-3 py-2.5 first:pt-0 last:pb-0 xl:gap-4 xl:py-3">
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg xl:h-10 xl:w-10 ${
                      certificate.honor ? 'bg-green-950 text-green-400' : 'bg-blue-950 text-blue-400'
                    }`}
                  >
                    {certificate.honor ? <Award size={16} /> : <MonitorPlay size={16} />}
                  </span>
                  <p className="min-w-0 flex-1 text-xs font-medium text-neutral-200 xl:text-sm">{certificate.title}</p>
                  <span className={`rounded-full px-2.5 py-1 text-[10px] leading-none xl:px-3 xl:py-1.5 xl:text-xs ${
                    certificate.honor ? 'bg-green-950 text-green-400' : 'bg-blue-950 text-blue-400'
                  }`}>
                    {certificate.type}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="hidden lg:block">
          <div className="sticky top-5 space-y-2">
            <nav aria-label="On this page" className="rounded-xl border border-neutral-800 bg-[#191919] p-3 xl:p-4">
              <p className="mb-2 text-[10px] font-medium uppercase tracking-wide text-neutral-500 xl:mb-3 xl:text-xs">On this page</p>
              <ul className="space-y-1 xl:space-y-2">
                {sections.map(([id, title]) => (
                  <li key={id}>
                    <a
                      href={`#resume-${id}`}
                      onClick={(event) => scrollToSection(event, id)}
                      className="block rounded px-2 py-1 text-xs text-neutral-300 transition-colors hover:bg-blue-950/60 hover:text-blue-300 xl:px-3 xl:py-1.5 xl:text-sm"
                    >
                      {title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <button
              type="button"
              onClick={scrollToTop}
              className="flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-800 py-2 text-xs text-neutral-400 transition-colors hover:border-neutral-600 hover:text-white xl:gap-3 xl:py-3 xl:text-sm"
            >
              <ArrowUp size={13} />
              Back to top
            </button>
          </div>
        </aside>
      </div>

    </div>
  )
}
