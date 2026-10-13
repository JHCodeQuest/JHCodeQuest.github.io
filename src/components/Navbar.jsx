import { useState, useEffect } from 'react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#learning', label: 'Learning' },
  { href: '#contact', label: 'Contact' },
]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggle = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))
  return [theme, toggle]
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, toggleTheme] = useTheme()

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const toggleMenu = () => setIsMenuOpen((v) => !v)
  const closeMenu = () => setIsMenuOpen(false)

  const handleLinkClick = (e, targetId) => {
    e.preventDefault()
    closeMenu()
    setTimeout(() => {
      document.querySelector(targetId)?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 bg-[var(--color-bg-glass)] backdrop-blur-[20px] border-b border-[var(--color-border)]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <a href="#" className="font-[var(--font-display)] text-2xl font-extrabold text-[var(--color-accent)] no-underline tracking-tight glow-sm hover:glow-md transition-shadow duration-150">
            JH
          </a>
          <ul className="hidden md:flex gap-8 list-none items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-[var(--color-text-secondary)] no-underline text-sm font-medium px-4 py-2 rounded-lg hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150">
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={toggleTheme}
                className="bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-xl w-10 h-10 flex items-center justify-center cursor-pointer text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all duration-150"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                )}
              </button>
            </li>
          </ul>
          <button className="md:hidden bg-none border-none cursor-pointer p-2.5 z-[1002]" onClick={toggleMenu}>
            <div className={`flex flex-col justify-between w-6 h-[18px] ${isMenuOpen ? 'open' : ''}`}>
              <span className={`block w-full h-[2px] bg-[var(--color-text-primary)] rounded-sm transition-all duration-150 ${isMenuOpen ? 'translate-y-[8px] rotate-45 bg-[var(--color-accent)]' : ''}`} />
              <span className={`block w-full h-[2px] bg-[var(--color-text-primary)] rounded-sm transition-all duration-150 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-full h-[2px] bg-[var(--color-text-primary)] rounded-sm transition-all duration-150 ${isMenuOpen ? '-translate-y-[8px] -rotate-45 bg-[var(--color-accent)]' : ''}`} />
            </div>
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 bg-black/80 backdrop-blur-[8px] z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={closeMenu} />
      <div className={`fixed top-0 right-0 w-full max-w-[320px] h-screen bg-[var(--color-bg-elevated)] z-40 px-4 sm:px-8 pt-24 border-l border-[var(--color-border-accent)] transition-transform duration-[400ms] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <ul className="flex flex-col gap-2 list-none">
          {navLinks.map((link, i) => (
            <li
              key={link.href}
              className={`transition-all duration-300 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-5'}`}
              style={{ transitionDelay: isMenuOpen ? `${0.1 + i * 0.05}s` : '0s' }}
            >
              <a
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block px-4 py-3 text-[var(--color-text-secondary)] no-underline text-lg font-medium rounded-xl hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-8 px-4">
          <button
            onClick={toggleTheme}
            className="flex items-center gap-3 w-full px-4 py-3 text-[var(--color-text-secondary)] no-underline text-lg font-medium rounded-xl hover:text-[var(--color-accent)] hover:bg-[var(--color-accent-subtle)] transition-all duration-150"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
            )}
            {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
      </div>
    </>
  )
}
