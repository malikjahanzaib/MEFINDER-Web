const prostateTools = [
  {
    name: 'Prostate Cancer Lesion Detection (nnU-Net)',
    description: 'nnU-Net framework trained on PI-CAI and Prostate-158 datasets; developed at Indiana University (Shiradkar Lab)',
  },
  {
    name: 'PI-QUAL vs MRQy Comparison',
    description: 'Code and analysis comparing PI-QUAL and MRQy prostate MRI quality metrics, using UMAP clustering, V-Net segmentation, and VoxelMorph registration',
  },
  {
    name: 'Niffler',
    description: 'DICOM framework for real-time and on-demand DICOM retrieval, metadata extraction, anonymization, and processing workflows',
  },
]

const breastDataPoints = [
  {
    heading: 'EMBED v2',
    detail:
      '260,815 breast cancer patients · ~1M exams · multimodal imaging',
  },
  {
    heading: 'EPIP',
    detail:
      '~5,000 prostate MRI patients from Emory University',
  },
  {
    heading: 'Clinical Text',
    detail:
      'NLP-based recurrence labeling from radiology & pathology reports',
  },
]

export default function ClinicalApplications() {
  return (
    <section id="use-cases">
      {/* Section 1 — Breast Cancer */}
      <div className="bg-surface">
        <div className="lg:grid lg:grid-cols-2 min-h-[500px]">
          {/* Left: content */}
          <div className="px-12 lg:px-20 py-20 flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-widest text-amber">
              Use Case 01
            </p>
            <h2 className="font-serif text-4xl text-ink mt-3 leading-tight">
              ER-Positive Breast Cancer Recurrence
            </h2>
            <p className="font-sans text-base text-ink-light leading-relaxed mt-6">
              ER-positive breast cancer represents the most common breast cancer
              subtype, yet patients with identical diagnoses experience markedly
              different recurrence rates. MEFINDER fuses mammography (FFDM and
              digital breast tomosynthesis), breast MRI, digital pathology from
              core needle biopsies, and structured clinical text to build a
              multimodal recurrence predictor &mdash; drawing on the EMBED v2
              cohort of 260,815 patients and approximately one million exams from
              Emory University.
            </p>
            <div className="mt-8">
              <p className="font-serif text-5xl text-ink">260,815</p>
              <p className="font-sans text-sm text-ink-light mt-1">
                patients in the EMBED v2 cohort
              </p>
            </div>
          </div>

          {/* Right: data display panel */}
          <div className="bg-rule flex flex-col justify-center px-12 lg:px-16 py-20">
            <div className="space-y-10">
              {breastDataPoints.map((item) => (
                <div key={item.heading} className="border-b border-rule/50 pb-8 last:border-0 last:pb-0">
                  <p className="font-serif text-xl text-ink">{item.heading}</p>
                  <p className="font-sans text-sm text-ink-light mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2 — Prostate Cancer */}
      <div className="bg-ink">
        <div className="lg:grid lg:grid-cols-2 min-h-[500px]">
          {/* Left: dark data panel */}
          <div className="flex flex-col justify-center px-12 lg:px-16 py-20 border-b border-rule/10 lg:border-b-0 lg:border-r lg:border-rule/10">
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-8">
              Key Tools
            </p>
            <div className="space-y-8">
              {prostateTools.map((tool) => (
                <div key={tool.name} className="border-b border-surface/10 pb-6 last:border-0 last:pb-0">
                  <p className="font-serif text-xl text-surface">{tool.name}</p>
                  <p className="font-sans text-sm mt-1" style={{ color: 'rgba(247,245,240,0.70)' }}>
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: content */}
          <div className="px-12 lg:px-20 py-20 flex flex-col justify-center">
            <p className="font-sans text-xs uppercase tracking-widest text-amber">
              Use Case 02
            </p>
            <h2 className="font-serif text-4xl text-surface mt-3 leading-tight">
              Biochemical Recurrence After Prostate Therapy
            </h2>
            <p className="font-sans text-base leading-relaxed mt-6" style={{ color: 'rgba(247,245,240,0.70)' }}>
              Biochemical recurrence following radical prostatectomy or radiation
              affects up to 40% of prostate cancer patients. MEFINDER integrates
              prostate MRI data, clinical trial datasets (CHAARTED, STAMPEDE),
              and biparametric MRI from the VA to build multimodal frameworks
              for recurrence prediction and treatment benefit assessment.
            </p>
            <div className="mt-8">
              <p className="font-serif text-5xl text-surface">387</p>
              <p className="font-sans text-sm mt-1" style={{ color: 'rgba(247,245,240,0.70)' }}>
                biparametric MRI patients (VA dataset, expanding)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
