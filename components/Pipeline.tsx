const dataStreams = [
  {
    title: 'Radiology',
    details: 'DICOM FFDM/DBT · Breast & Prostate MRI',
  },
  {
    title: 'Digital Pathology',
    details: 'H&E whole-slide images · APIC features',
  },
  {
    title: 'Clinical Records',
    details: 'EHR · ICD-10 · HL7 FHIR · PI-RADS v2.1',
  },
  {
    title: 'Social Determinants',
    details: 'Demographics · socioeconomic · geographic data',
  },
]

export default function Pipeline() {
  return (
    <section id="pipeline" className="py-24 bg-surface border-t border-rule">
      {/* Header */}
      <div className="px-8 max-w-5xl mx-auto mb-16">
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

      {/* SVG Pipeline Diagram */}
      <div className="px-8">
        <svg
          viewBox="0 0 1000 200"
          width="100%"
          aria-label="MEFINDER pipeline: Data Harmonization, Feature Extraction, Multimodal Fusion, Phenotype Discovery"
          role="img"
        >
          <defs>
            <marker
              id="arrow"
              markerWidth="8"
              markerHeight="8"
              refX="6"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L8,3 z" fill="#C8922A" />
            </marker>
          </defs>

          {/* Box 1 — Data Harmonization */}
          <rect
            x="10"
            y="70"
            width="205"
            height="70"
            stroke="#E2DED8"
            strokeWidth="1"
            fill="none"
            rx="2"
          />
          <text
            x="22"
            y="97"
            fill="#1A1814"
            fontFamily="'DM Serif Display', Georgia, serif"
            fontSize="11"
          >
            Data Harmonization
          </text>
          <text x="22" y="113" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            DICOM preprocessing · Quality
          </text>
          <text x="22" y="125" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            assessment · NLP recurrence labeling
          </text>

          {/* Arrow 1 */}
          <line
            x1="215"
            y1="105"
            x2="250"
            y2="105"
            stroke="#C8922A"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Box 2 — Feature Extraction */}
          <rect
            x="255"
            y="70"
            width="205"
            height="70"
            stroke="#E2DED8"
            strokeWidth="1"
            fill="none"
            rx="2"
          />
          <text
            x="267"
            y="97"
            fill="#1A1814"
            fontFamily="'DM Serif Display', Georgia, serif"
            fontSize="11"
          >
            Feature Extraction
          </text>
          <text x="267" y="113" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            Radiopathomics · Deep embeddings
          </text>
          <text x="267" y="125" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            · Batch correction
          </text>

          {/* Arrow 2 */}
          <line
            x1="460"
            y1="105"
            x2="500"
            y2="105"
            stroke="#C8922A"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Box 3 — Multimodal Fusion */}
          <rect
            x="505"
            y="70"
            width="205"
            height="70"
            stroke="#E2DED8"
            strokeWidth="1"
            fill="none"
            rx="2"
          />
          <text
            x="517"
            y="97"
            fill="#1A1814"
            fontFamily="'DM Serif Display', Georgia, serif"
            fontSize="11"
          >
            Multimodal Fusion
          </text>
          <text x="517" y="113" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            Graph-based fusion · Vision-language
          </text>
          <text x="517" y="125" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            · Co-attention
          </text>

          {/* Arrow 3 */}
          <line
            x1="710"
            y1="105"
            x2="750"
            y2="105"
            stroke="#C8922A"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Box 4 — Phenotype Discovery */}
          <rect
            x="755"
            y="70"
            width="235"
            height="70"
            stroke="#E2DED8"
            strokeWidth="1"
            fill="none"
            rx="2"
          />
          <text
            x="767"
            y="97"
            fill="#1A1814"
            fontFamily="'DM Serif Display', Georgia, serif"
            fontSize="11"
          >
            Phenotype Discovery
          </text>
          <text x="767" y="113" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            Recurrence prediction · Treatment
          </text>
          <text x="767" y="125" fill="#4A4640" fontSize="9" fontFamily="sans-serif">
            guidance · Equity-aware
          </text>
        </svg>
      </div>

      {/* Data streams label row */}
      <div className="px-8 max-w-5xl mx-auto mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {dataStreams.map((stream) => (
            <div key={stream.title}>
              <p className="font-sans font-medium text-sm text-ink">
                {stream.title}
              </p>
              <p className="font-sans text-xs text-ink-light mt-1 leading-relaxed">
                {stream.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
