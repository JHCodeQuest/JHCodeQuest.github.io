const featured = [
  {
    icon: '\u{1F5F3}\uFE0F',
    title: 'Civic Lens',
    description: 'Built to track UK election trends using public polling data and prediction modelling. Helps analysts and voters understand where the race is heading.',
    tags: ['React', 'TypeScript', 'GitHub Pages'],
    screenshot: 'screenshots/civic-lens-full.png',
    github: 'https://github.com/JHCodeQuest/civic-lens',
    link: 'https://jhcodequest.github.io/civic-lens/',
  },
  {
    icon: '\u2699\uFE0F',
    title: 'Automation Dashboard',
    description: 'Built to centralise automation experiments and Power Platform integrations into a single workflow dashboard — replacing scattered scripts with one place to monitor and manage. Designed for developers who need visibility into their automation pipelines.',
    tags: ['Python', 'FastAPI', 'SQLite'],
    screenshot: 'screenshots/automation-dashboard.png',
    github: 'https://github.com/JHCodeQuest/Automation-Dashboard',
  },
  {
    icon: '\u{1F9E0}',
    title: 'Entropy Wordle Bot',
    description: 'Built to explore information theory in practice — a Wordle solver that uses Shannon Entropy to find optimal guesses, all from the command line. Useful for anyone curious about how math can beat word games.',
    tags: ['Python', 'Algorithms'],
    screenshot: 'screenshots/wordle-bot.png',
    github: 'https://github.com/JHCodeQuest/pyWordles',
  },
]

export default function FeaturedProjectsSection() {
  return (
    <section id="projects" className="px-4 sm:px-8 py-28 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            Featured Projects
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em]">
            Milestones Along the Way
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {featured.map((p) => (
            <div
              key={p.title}
              className="bg-gradient-to-b from-[rgba(255,255,255,0.02)] to-[rgba(255,255,255,0.01)] border border-[var(--color-border)] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-border-accent)] hover:shadow-[0_0_20px_var(--color-accent-glow)]"
            >
              <a href={p.link || p.github} target="_blank" className="block overflow-hidden">
                <img
                  src={p.screenshot}
                  alt={`${p.title} screenshot`}
                  className="w-full aspect-[16/10] object-cover object-top border-b border-[var(--color-border)] transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </a>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex gap-3 items-center mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--color-bg-elevated)] flex items-center justify-center text-lg shrink-0">
                    {p.icon}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-[var(--font-display)] text-base">{p.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4 leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex px-3 py-1 text-xs font-medium rounded-full border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {p.github && (
                    <a href={p.github} target="_blank" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold text-xs rounded-xl no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                      View Code
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" className="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold text-xs rounded-xl no-underline hover:glow-sm transition-all duration-150">
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
