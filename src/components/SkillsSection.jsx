const skillGroups = [
  {
    label: 'Automation',
    items: ['Power Platform', 'Power Automate'],
  },
  {
    label: 'Backend',
    items: ['Python', 'APIs', 'SQL'],
  },
  {
    label: 'Frontend',
    items: ['React'],
  },
  {
    label: 'Tools',
    items: ['Git / GitHub'],
  },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 sm:px-8 py-28 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            Skills
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em]">
            Tools I've Gathered
          </h2>
        </div>

        <p className="text-center text-[var(--color-text-secondary)] max-w-[600px] mx-auto mb-12 leading-relaxed">
          Every tool here is something I've picked up building real projects —
          from enterprise systems to automation scripts. I've shipped with every one of them.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[900px] mx-auto">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-[var(--font-mono)] text-xs text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4">
                {group.label}
              </p>
              <div className="flex flex-col gap-2">
                {group.items.map((skill) => (
                  <div
                    key={skill}
                    className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl px-4 py-3 text-sm font-medium transition-all duration-150 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] hover:-translate-y-0.5 hover:shadow-[0_0_15px_var(--color-accent-glow)] cursor-default"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
