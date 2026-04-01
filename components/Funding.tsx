const partnerInstitutions = [
  'Emory University',
  'Indiana University',
  'Stanford University',
  'Mayo Clinic',
  'VA',
]

export default function Funding() {
  return (
    <section id="funding" className="py-20 px-8 border-t border-rule">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p className="font-sans text-xs uppercase tracking-widest text-ink-light text-center">
          Funding &amp; Institutional Support
        </p>
        <h2 className="font-serif text-3xl text-ink text-center mt-3">
          Supported by the National Cancer Institute
        </h2>
        <p className="font-sans text-sm text-ink-light text-center mt-4">
          NCI U01 Award &middot; Principal Investigator: Dr. Judy Gichoya, Emory
          University
        </p>

        {/* Institution lockup */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-0">
          {partnerInstitutions.map((inst) => (
            <div
              key={inst}
              className="border-t-2 border-amber pt-4 px-4 first:pl-0 last:pr-0"
            >
              <p className="font-serif text-base text-ink">{inst}</p>
            </div>
          ))}
        </div>

        {/* NIH acknowledgment footnote */}
        <p className="font-sans text-xs text-ink-light text-center mt-16 max-w-2xl mx-auto leading-relaxed">
          This research is supported by the National Cancer Institute (NCI) of
          the National Institutes of Health under Award Number U01CA[Award
          Number]. The content is solely the responsibility of the authors and
          does not necessarily represent the official views of the National
          Institutes of Health.
        </p>
      </div>
    </section>
  )
}
