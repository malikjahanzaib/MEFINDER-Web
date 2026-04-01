'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Use Cases', href: '/use-cases/breast-cancer' },
  { label: 'Tools', href: '/tools' },
  { label: 'Team', href: '/team' },
  { label: 'Publications', href: '/publications' },
  { label: 'Contact', href: '/contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [menuOpen])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-surface border-b border-rule'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          {/* Wordmark */}
          <Link
            href="/"
            className="font-serif text-xl text-navy tracking-tight"
            aria-label="MEFINDER — home"
          >
            MEFINDER
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive =
                link.href === '/'
                  ? pathname === '/'
                  : pathname === link.href || pathname.startsWith(link.href + '/')
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-sans text-xs uppercase tracking-widest text-ink-light hover:text-ink transition-colors duration-200 hover:underline underline-offset-4 ${
                      isActive ? 'underline underline-offset-4 text-ink' : ''
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
          >
            <span className="block w-6 h-px bg-ink"></span>
            <span className="block w-6 h-px bg-ink"></span>
            <span className="block w-4 h-px bg-ink"></span>
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-surface z-40 flex flex-col items-center justify-center">
          {/* Close button */}
          <button
            className="absolute top-5 right-8 font-sans text-sm uppercase tracking-widest text-ink-light"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            Close
          </button>

          <ul className="flex flex-col items-center gap-10">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-serif text-4xl text-ink hover:text-navy transition-colors duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
