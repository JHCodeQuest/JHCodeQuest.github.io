export default function AboutSection() {
  return (
    <section id="about" className="px-4 sm:px-8 py-28 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-20">
          <p className="text-center inline-flex items-center gap-2 font-[var(--font-mono)] text-sm text-[var(--color-accent)] uppercase tracking-[0.1em] mb-4 w-full justify-center before:content-['//'] before:opacity-50">
            About
          </p>
          <h2 className="text-center font-[var(--font-display)] text-[clamp(2.2rem,4.5vw,3.2rem)] font-bold tracking-[-0.02em]">
            Building Real Software
          </h2>
        </div>

        <div className="flex justify-center mb-12">
          <div className="relative w-[160px] h-[160px]">
            <div className="absolute -inset-[10px] border-2 border-dashed border-[var(--color-border-accent)] rounded-full animate-[spin_20s_linear_infinite]" />
            <img
              src="Me.jpg"
              alt="Joseph Hassan"
              className="w-[160px] h-[160px] rounded-full object-cover border-[3px] border-[var(--color-accent)] shadow-[0_0_40px_var(--color-accent-glow)]"
            />
          </div>
        </div>

        <div className="max-w-[720px] mx-auto space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed">
          <p>
            I'm a developer focused on automation, data-driven applications, and practical
            software solutions. With a BSc in Computer Science and years building enterprise
            software at Somerset Council and Origin, I've shipped ASP.NET applications,
            SQL-backed systems, and Power Platform and Dynamics 365 deployments.
          </p>
          <p>
            My background in care work taught me communication, patience, and how to
            understand what people actually need — skills most developers never develop.
            Now I'm applying that perspective to build workflow automation, data pipelines,
            and intelligent tooling with Python and modern web technologies. I'm currently
            expanding into AI-assisted tooling and open-source development.
          </p>
        </div>
      </div>
    </section>
  )
}
