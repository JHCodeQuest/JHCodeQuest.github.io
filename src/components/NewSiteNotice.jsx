// Placeholder for the move to the new portfolio. Set NEW_SITE_URL once it is live
// (e.g. 'https://example.com/') and this notice becomes a link to it.
const NEW_SITE_URL = ''

export default function NewSiteNotice() {
  if (!NEW_SITE_URL) {
    return (
      <p className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[var(--color-border)] text-sm text-[var(--color-text-muted)]">
        A new portfolio is coming soon
      </p>
    )
  }
  return (
    <a
      href={NEW_SITE_URL}
      className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full border border-[var(--color-border-accent)] bg-[var(--color-accent-subtle)] text-sm font-semibold text-[var(--color-accent)] no-underline hover:glow-sm transition-all duration-150"
    >
      My portfolio has moved: see the new site →
    </a>
  )
}
