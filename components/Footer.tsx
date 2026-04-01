import Link from 'next/link'

const footerLinks = [
  { label: 'Research', href: '/research' },
  { label: 'Use Cases', href: '/use-cases/breast-cancer' },
  { label: 'Tools & Data', href: '/tools' },
  { label: 'Publications', href: '/publications' },
  { label: 'Team', href: '/team' },
  { label: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className="bg-ink py-16 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Col 1 — Wordmark & tagline */}
          <div>
            <p className="font-serif text-xl text-surface">MEFINDER</p>
            <p className="font-sans text-xs mt-2 leading-relaxed" style={{ color: 'rgba(247,245,240,0.60)' }}>
              Multimodal Fusion Initiative for Novel Disease Phenotype Discovery
              and Population-Specific Risk Prediction
            </p>
            <p className="font-sans text-xs mt-4 uppercase tracking-widest" style={{ color: 'rgba(247,245,240,0.40)' }}>
              NCI U01 Award
            </p>
          </div>

          {/* Col 2 — Nav links */}
          <div>
            <p className="font-sans text-xs uppercase tracking-widest mb-4" style={{ color: 'rgba(247,245,240,0.40)' }}>
              Navigation
            </p>
            <ul>
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-sans text-sm block mb-2 transition-colors duration-150 hover:text-surface"
                    style={{ color: 'rgba(247,245,240,0.70)' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Address */}
          <div>
            <p className="font-sans text-sm font-medium text-surface">
              HITI Lab &middot; Emory University
            </p>
            <p className="font-sans text-sm mt-2 leading-relaxed" style={{ color: 'rgba(247,245,240,0.70)' }}>
              Department of Radiology and Imaging Sciences
              <br />
              Emory University School of Medicine
              <br />
              Atlanta, Georgia 30322
            </p>
            <a
              href="https://hitilab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm mt-4 block underline underline-offset-2 transition-colors duration-150 hover:text-surface"
              style={{ color: 'rgba(247,245,240,0.70)' }}
            >
              hitilab.com
            </a>
            <a
              href="https://github.com/Emory-Empathathetic-AI-for-Health-Inst/Multimodal-Multi-scale-Framework-for-Ethical-AI-Model-Development"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm mt-2 block underline underline-offset-2 transition-colors duration-150 hover:text-surface"
              style={{ color: 'rgba(247,245,240,0.70)' }}
            >
              GitHub Repository
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t mt-12 pt-8" style={{ borderColor: 'rgba(247,245,240,0.10)' }}>
          <p
            className="font-sans text-xs text-center leading-relaxed"
            style={{ color: 'rgba(247,245,240,0.50)' }}
          >
            Supported by NCI U01 Award &middot; The content does not necessarily
            represent official NIH views &middot; &copy; 2026 MEFINDER Project,
            Emory University HITI Lab
          </p>
        </div>
      </div>
    </footer>
  )
}
