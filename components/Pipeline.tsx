const dataStreams = [
  {
    title: 'Radiology',
    details: 'FFDM (2D) Mammography · DBT (3D) Tomosynthesis · MRI DCE Multi-Phase',
  },
  {
    title: 'Digital Pathology',
    details: 'H&E whole-slide images · APIC features',
  },
  {
    title: 'Clinical / EHR',
    details: 'Structured data · Clinical notes · ICD-10 · HL7 FHIR · PI-RADS v2.1',
  },
  {
    title: 'Social Determinants',
    details: 'Demographics · socioeconomic · geographic data',
  },
]

const pipelineStages = [
  {
    num: '01',
    title: 'Data Harmonization',
    details: 'Radiology · Pathology · EHR · Federated',
  },
  {
    num: '02',
    title: 'Feature Extraction',
    details: 'Radiomics · Pathomics · Deep · Causal',
  },
  {
    num: '03',
    title: 'Multimodal Embedding',
    details: 'Engineered Fusion · Deep Joint Embedding · Graph Networks',
  },
  {
    num: '04',
    title: 'Phenotype Discovery',
    details: 'Clustering · In-Context Learning',
  },
  {
    num: '05',
    title: 'Use Cases',
    details: 'Breast · Prostate (Parallel)',
  },
  {
    num: '06',
    title: 'Evaluation',
    details: 'Shared Benchmarking',
  },
]

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 bg-surface border-t border-rule">
      <div className="px-8 max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
            The Framework
          </p>
          <h2 className="font-serif text-4xl text-ink mt-2">
            From raw data to clinical insight.
          </h2>
          <p className="font-sans text-base text-ink-light mt-4 max-w-2xl leading-relaxed">
            A modular pipeline spanning data harmonization, multimodal feature
            extraction, graph-based fusion, and phenotype discovery.
          </p>
        </div>

        {/* Row 1 — Data Inputs */}
        <div className="mb-2">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-4">
            Data Inputs
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {dataStreams.map((stream) => (
              <div
                key={stream.title}
                className="border border-rule px-4 py-4"
              >
                <p className="font-sans text-sm font-medium text-ink">
                  {stream.title}
                </p>
                <p className="font-sans text-xs text-ink-light mt-1 leading-relaxed">
                  {stream.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Downward flow indicator */}
        <div className="flex justify-center my-4">
          <svg width="16" height="28" viewBox="0 0 16 28" fill="none" aria-hidden="true">
            <line x1="8" y1="0" x2="8" y2="20" stroke="#C8922A" strokeWidth="1.5"/>
            <path d="M2 14 L8 22 L14 14" stroke="#C8922A" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Row 2 — Pipeline Stages */}
        <div>
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-4">
            Pipeline
          </p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4 items-stretch">
            {pipelineStages.map((stage, i) => (
              <div key={stage.title} className="flex items-stretch gap-4">
                <div className="border border-amber/40 bg-amber/5 px-4 py-4 flex-1">
                  <p className="font-serif text-lg text-amber leading-none mb-2">{stage.num}</p>
                  <p className="font-serif text-sm text-ink">{stage.title}</p>
                  <p className="font-sans text-xs text-ink-light mt-2 leading-relaxed italic">
                    {stage.details}
                  </p>
                </div>
                {i < pipelineStages.length - 1 && (
                  <div className="hidden md:flex items-center text-amber -mr-4 z-10">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8 L12 8 M8 3 L13 8 L8 13" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
