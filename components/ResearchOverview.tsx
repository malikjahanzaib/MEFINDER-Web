const keyAspects = [
  {
    label: 'Open Science',
    title: 'Open Science',
    description:
      'All tools publicly released through TCIA, Zenodo, and GitHub. Reproducible methods with comprehensive documentation enabling adoption across institutions.',
  },
  {
    label: 'Health Equity',
    title: 'Health Equity',
    description:
      'Population-specific models built on diverse cohorts, including the EMBED v2 dataset. Equity-aware evaluation metrics and bias auditing embedded throughout the pipeline.',
  },
  {
    label: 'Clinical Translation',
    title: 'Clinical Translation',
    description:
      'Designed for integration with existing clinical workflows. Models validated against standard-of-care tools with clinical usability studies guiding interface design.',
  },
]

export default function ResearchOverview() {
  return (
    <section id="research" className="py-24 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Two-column layout */}
        <div className="lg:grid lg:grid-cols-3 lg:gap-16">
          {/* Left column */}
          <div className="col-span-1 mb-12 lg:mb-0">
            <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
              What is MEFINDER?
            </p>
            <blockquote className="font-serif text-2xl text-ink mt-6 leading-snug">
              &ldquo;Patients with identical cancer diagnoses experience vastly
              different outcomes.&rdquo;
            </blockquote>
          </div>

          {/* Right column */}
          <div className="col-span-2 space-y-6">
            <p className="font-sans text-base text-ink leading-relaxed">
              MEFINDER &mdash; Multimodal Fusion Initiative for Novel Disease
              Phenotype Discovery and Population-Specific Risk Prediction &mdash;
              is an NCI U01-funded research initiative led by Dr. Judy Gichoya
              at Emory University&rsquo;s HITI Lab. The project develops
              open-source computational frameworks that fuse medical imaging,
              digital pathology, clinical records, and social determinants of
              health to discover patterns current molecular assays cannot detect.
            </p>
            <p className="font-sans text-base text-ink-light leading-relaxed">
              Current diagnostic tools like Decipher (&asymp;$3,400 per test)
              remain expensive and may not capture the full complexity of disease
              biology. MEFINDER builds affordable, equity-aware alternatives by
              integrating information across modalities &mdash; mammography, MRI,
              whole-slide pathology, and structured clinical text &mdash; to
              deliver more accurate prognostication and treatment guidance.
            </p>
            <p className="font-sans text-base text-ink-light leading-relaxed">
              The initiative addresses two clinical use cases: ER-positive breast
              cancer recurrence prediction and biochemical recurrence following
              definitive prostate cancer therapy. Both represent significant
              unmet clinical needs where multimodal AI can meaningfully improve
              patient outcomes.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-rule mt-16"></div>

        {/* Key aspects grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
          {keyAspects.map((aspect) => (
            <div key={aspect.label}>
              <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
                {aspect.label}
              </p>
              <h3 className="font-serif text-xl text-ink mt-2">
                {aspect.title}
              </h3>
              <p className="font-sans text-sm text-ink-light mt-2 leading-relaxed">
                {aspect.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
