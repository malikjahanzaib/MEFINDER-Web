import InstitutionLogo from '@/components/InstitutionLogo'

const partnerInstitutions = [
  { name: 'HITI Lab', slug: 'hiti' },
  { name: 'Emory University', slug: 'emory' },
  { name: 'Indiana University', slug: 'indiana' },
  { name: 'Stanford University', slug: 'stanford' },
  { name: 'Mayo Clinic', slug: 'mayo' },
  { name: 'Veterans Affairs', slug: 'va' },
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

        {/* Institution logo lockup */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {partnerInstitutions.map((inst) => (
            <div key={inst.slug} className="flex flex-col items-center gap-3">
              <div className="h-20 flex items-center justify-center w-full px-2">
                <InstitutionLogo name={inst.name} slug={inst.slug} />
              </div>
              <p className="font-sans text-xs text-ink-light text-center leading-snug tracking-wide">
                {inst.name}
              </p>
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
