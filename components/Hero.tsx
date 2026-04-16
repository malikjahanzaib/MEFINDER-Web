import Link from 'next/link'
import HeroConstellation from '@/components/HeroConstellation'
import { GitHubIcon } from '@/components/icons'

const stats = [
  { number: '260,815+', label: 'Patients in EMBED v2', sublabel: 'Breast cancer cohort' },
  { number: '~1 Million', label: 'Imaging Exams', sublabel: 'Cross-modality' },
  { number: '5', label: 'Partner Institutions', sublabel: 'Multi-site consortium' },
  { number: '13+', label: 'Open-Source Tools', sublabel: 'Code & models released' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-between bg-surface pt-24 relative"
    >
      {/* Background constellation */}
      <HeroConstellation />

      {/* Top spacer */}
      <div className="flex-1 flex items-center relative">
        <div className="max-w-4xl mx-auto px-8 py-20 w-full">
          {/* Institution label */}
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light animate-fade-up">
            NIH Other Transaction Award &middot; HITI Lab, Emory University
          </p>

          {/* Full project name as headline */}
          <h1 className="font-serif text-4xl md:text-5xl text-ink leading-tight max-w-3xl mt-6 animate-fade-up-1">
            Multimodal Fusion Initiative for Novel Disease Phenotype Discovery
            and Population-Specific Risk Prediction
          </h1>

          {/* Tagline */}
          <p className="font-sans text-lg md:text-xl text-ink-light max-w-2xl mt-8 leading-relaxed animate-fade-up-2">
            A shared, reusable toolbox helping clinicians make cancer treatment
            decisions using radiology and pathology images and clinical records
            that the hospital already has.
          </p>

          {/* Subtext */}
          <p className="font-sans text-base text-ink-light max-w-2xl mt-4 leading-relaxed animate-fade-up-3">
            MEFINDER tests a unifying hypothesis: if the tooling is sound, every
            architecture should classify the same patient in the same direction —
            whether the model uses ROIs or whole images, two modalities or five,
            deep learning or graph neural networks, and whether the target is
            chemotherapy benefit, treatment response, or disease recurrence. We
            demonstrate this framework scales across clinical use cases and
            institutional boundaries, delivering consistent patient-level
            predictions regardless of site, cohort, or prediction task.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up-4">
            <Link
              href="/research"
              className="inline-block border border-ink text-ink px-8 py-3 font-sans text-sm tracking-wide hover:bg-ink hover:text-surface transition-colors duration-200"
            >
              Explore Our Research
            </Link>
            <a
              href="https://github.com/Emory-Empathathetic-AI-for-Health-Inst/Multimodal-Multi-scale-Framework-for-Ethical-AI-Model-Development"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink/30 text-ink px-8 py-3 font-sans text-sm tracking-wide hover:border-ink hover:bg-ink hover:text-surface transition-colors duration-200"
            >
              <GitHubIcon className="w-4 h-4" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Bottom stats row */}
      <div className="border-t border-rule relative">
        <div className="max-w-4xl mx-auto px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-rule md:divide-y-0 divide-x-0 md:divide-x md:divide-rule">
            {stats.map((stat, i) => (
              <div key={i} className="py-8 px-6 first:pl-0 last:pr-0">
                <p className="font-serif text-4xl text-ink">{stat.number}</p>
                <p className="font-sans text-sm font-medium text-ink mt-2">{stat.label}</p>
                <p className="font-sans text-xs text-ink-light mt-0.5">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
