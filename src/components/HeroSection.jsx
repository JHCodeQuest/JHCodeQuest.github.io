export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center relative z-10 px-4 sm:px-8 pt-32 pb-16">
      <div className="max-w-[1400px] mx-auto w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-accent-subtle)] border border-[var(--color-border-accent)] rounded-full font-[var(--font-mono)] text-sm text-[var(--color-accent)] mb-8">
          <span className="w-2 h-2 bg-[var(--color-accent)] rounded-full animate-pulse" />
          Power Platform · Python · JavaScript
        </div>
        <h1 className="font-[var(--font-display)] text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-3">
          <span className="block">Joseph Hassan</span>
        </h1>
        <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] mb-4">
          Business applications and automation, built around the way you work.
        </p>
        <p className="text-xl sm:text-2xl text-[var(--color-text-secondary)] max-w-[650px] mx-auto mb-12 leading-relaxed">
          Over four years of professional Power Platform experience, alongside Python,
          JavaScript and .NET development. I help with business apps, reporting,
          workflow fixes and integrations — from requirements to handover.
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <a href="#contact" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold rounded-xl no-underline hover:-translate-y-0.5 hover:glow-md transition-all duration-150">
            Discuss a task →
          </a>
          <a href="https://www.linkedin.com/in/joseph-hassan-8679ba17/" target="_blank" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold rounded-xl no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
            LinkedIn
          </a>
          <a href="#projects" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-transparent text-[var(--color-text-primary)] border border-[var(--color-border)] font-semibold rounded-xl no-underline hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
            Projects
          </a>
        </div>
      </div>
    </section>
  )
}
