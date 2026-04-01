import Link from 'next/link'

const institutions = [
  {
    name: 'Emory University (Lead)',
    contribution:
      'Project coordination, HITI Lab infrastructure, NLP recurrence labeling, multimodal fusion',
    data: 'EMBED v2 (260,815 patients, ~1M exams), EPIP (~5,000 prostate MRI patients)',
  },
  {
    name: 'Indiana University',
    contribution:
      'Pathomic feature extraction (APIC), treatment benefit prediction, prostate aging research',
    data: 'CHAARTED, STAMPEDE clinical trial datasets',
  },
  {
    name: 'Stanford University',
    contribution:
      'NLP toolkit validation, breast cancer data harmonization, cancer registry linkage',
    data: 'Stanford breast and prostate cohorts, CA registry',
  },
  {
    name: 'Mayo Clinic',
    contribution:
      'Long-term follow-up, biobank infrastructure, clinical report parsing',
    data: 'Mayo Clinic Biobank (75,000+ patients, 10–15 years follow-up)',
  },
  {
    name: 'VA',
    contribution: 'Prostate MRI data, pathology slide digitization',
    data: '387 biparametric MRI patients (expanding)',
  },
]

export default function Consortium() {
  return (
    <section id="consortium" className="py-24 px-8 border-t border-rule">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
              The Consortium
            </p>
            <h2 className="font-serif text-4xl text-ink mt-2">
              Five institutions. One framework.
            </h2>
            <p className="font-sans text-base text-ink-light mt-4 max-w-xl leading-relaxed">
              A multi-site collaborative spanning academic medical centers, research
              universities, and federal health systems &mdash; each contributing
              unique expertise and datasets to the MEFINDER initiative.
            </p>
          </div>
          <Link
            href="/team"
            className="font-sans text-sm text-ink-light underline underline-offset-4 hover:text-ink transition-colors duration-150 hidden md:block whitespace-nowrap ml-8"
          >
            Meet the full team &rarr;
          </Link>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-3 gap-8 border-b border-rule pb-3">
          <p className="font-sans text-xs uppercase tracking-wide text-ink-light">
            Institution
          </p>
          <p className="font-sans text-xs uppercase tracking-wide text-ink-light">
            Key Contribution
          </p>
          <p className="font-sans text-xs uppercase tracking-wide text-ink-light">
            Data Contributed
          </p>
        </div>

        {/* Institution rows */}
        {institutions.map((inst) => (
          <div
            key={inst.name}
            className="grid grid-cols-3 gap-8 border-b border-rule py-6"
          >
            <p className="font-serif text-base text-ink">{inst.name}</p>
            <p className="font-sans text-sm text-ink-light leading-relaxed">
              {inst.contribution}
            </p>
            <p className="font-sans text-sm text-ink-light leading-relaxed">
              {inst.data}
            </p>
          </div>
        ))}

        {/* Mobile view-all link */}
        <div className="mt-8 md:hidden">
          <Link
            href="/team"
            className="font-sans text-sm text-ink-light underline underline-offset-4 hover:text-ink transition-colors duration-150"
          >
            Meet the full team &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
