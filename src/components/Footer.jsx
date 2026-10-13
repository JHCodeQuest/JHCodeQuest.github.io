export default function Footer() {
  return (
    <footer className="px-4 sm:px-8 py-6 border-t border-[var(--color-border)] relative z-10">
      <div className="max-w-[1400px] mx-auto flex flex-wrap items-center justify-between gap-4">
        <p className="text-sm text-[var(--color-text-muted)]">
          &copy; {new Date().getFullYear()} Joseph Hassan. Built with <span className="text-[var(--color-accent)]">React</span>
        </p>
        <div className="flex gap-8">
          <a href="https://www.linkedin.com/in/joseph-hassan-8679ba17/" target="_blank" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-accent)] transition-all duration-150">
            LinkedIn
          </a>
          <a href="https://github.com/JHCodeQuest" target="_blank" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-accent)] transition-all duration-150">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
