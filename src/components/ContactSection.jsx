export default function ContactSection() {
  return (
    <section id="contact" className="px-4 sm:px-8 py-28 relative z-10">
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="mb-16">
          <p className="inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 before:content-['//'] before:opacity-50">
            Contact
          </p>
          <h2 className="font-[var(--font-display)] text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em] mb-6">
            Let's Connect
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-[500px] mx-auto mb-10">
            I'm open to opportunities and collaborations. Whether you have a project in mind or just want to connect — reach out.
          </p>
          <a href="mailto:jkhassan95@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--color-accent)] text-[var(--color-bg-deep)] font-semibold text-lg rounded-xl no-underline hover:glow-md transition-all duration-150">
            📧 jkhassan95@gmail.com
          </a>
        </div>
        <div className="flex justify-center gap-6">
          <a href="https://github.com/JHCodeQuest" target="_blank" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all duration-150 text-sm font-medium no-underline">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/joseph-hassan-8679ba17/" target="_blank" className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all duration-150 text-sm font-medium no-underline">
            LinkedIn
          </a>
          <a href="JoeCV_Developer.pdf" download className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all duration-150 text-sm font-medium no-underline">
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
