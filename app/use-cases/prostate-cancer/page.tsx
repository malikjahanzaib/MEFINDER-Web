import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

const datasets = [
  {
    name: 'EPIP',
    institution: 'Emory University',
    detail: '~5,000 prostate MRI patients. Primary dataset for prostate MRI model development at the HITI Lab.',
  },
  {
    name: 'VA Biparametric MRI',
    institution: 'Veterans Affairs',
    detail: '387 biparametric MRI patients, actively expanding. Includes pathology slide digitization.',
  },
  {
    name: 'PI-CAI',
    institution: 'Used in nnU-Net training',
    detail: 'Prostate Imaging: Cancer AI challenge dataset used to train the nnU-Net lesion detection framework at Indiana University.',
  },
  {
    name: 'Prostate-158',
    institution: 'Used in nnU-Net training',
    detail: 'Public prostate MRI dataset used alongside PI-CAI for nnU-Net model development.',
  },
  {
    name: 'CHAARTED',
    institution: 'Indiana University',
    detail: 'Clinical trial dataset used for treatment benefit prediction research.',
  },
  {
    name: 'STAMPEDE',
    institution: 'Indiana University',
    detail: 'Clinical trial dataset used for treatment benefit prediction and prostate aging research.',
  },
]

const tools = [
  {
    name: 'Prostate Cancer Lesion Detection (nnU-Net)',
    description:
      'nnU-Net-based framework for prostate cancer lesion detection. Developed at Indiana University (Shiradkar Lab). Trained on PI-CAI and Prostate-158 datasets. Model weights available on request from the authors.',
  },
  {
    name: 'PI-QUAL vs MRQy Comparison',
    description:
      'Code and analysis for prostate MRI quality assessment. Compares PI-QUAL and MRQy quality metrics using UMAP clustering, V-Net segmentation, and VoxelMorph deformable registration.',
  },
  {
    name: 'Niffler',
    description:
      'DICOM framework for machine learning pipelines. Enables real-time and on-demand DICOM retrieval from PACS, metadata extraction, anonymization, and processing workflows. Published in JDI 2021. GitHub: github.com/Emory-HITI/Niffler',
  },
]

export default function ProstateCancerPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Clinical Use Case"
        heading="Biochemical Recurrence After Prostate Cancer Therapy"
        subtext="Biochemical recurrence following radical prostatectomy or radiation affects a substantial proportion of prostate cancer patients. MEFINDER integrates prostate MRI, clinical trial data, and pathology to build multimodal frameworks for recurrence prediction and treatment benefit assessment."
      />

      <div className="max-w-5xl mx-auto px-8 py-20">

        {/* Clinical Context */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-4">
            Clinical Context
          </p>
          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="col-span-2 space-y-4">
              <p className="font-sans text-base text-ink leading-relaxed">
                Biochemical recurrence (BCR) — defined as a rising PSA level after definitive
                local therapy — affects a significant proportion of prostate cancer patients
                following radical prostatectomy or radiation. BCR often precedes clinical
                metastasis by years, creating a window for intervention if patients at highest
                risk can be identified early and accurately.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                Current risk stratification relies on clinicopathological features (Gleason grade,
                PSA kinetics, staging) that do not capture the full biological heterogeneity of
                prostate cancer. Multimodal imaging — particularly biparametric and multiparametric
                MRI — provides additional phenotypic information that complements pathology and
                clinical variables.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                MEFINDER contributes infrastructure for prostate MRI lesion detection, MRI quality
                assessment, and DICOM data management — enabling multi-site cohort construction
                from the VA, Emory (EPIP), and clinical trial datasets at Indiana University
                (CHAARTED, STAMPEDE).
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="border-t border-rule pt-6">
                <p className="font-serif text-5xl text-ink">~5,000</p>
                <p className="font-sans text-sm text-ink-light mt-1">prostate MRI patients (EPIP, Emory)</p>
              </div>
              <div className="border-t border-rule pt-6 mt-6">
                <p className="font-serif text-4xl text-ink">387</p>
                <p className="font-sans text-sm text-ink-light mt-1">biparametric MRI patients (VA, expanding)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Datasets */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Datasets
          </p>
          <div className="space-y-0">
            {datasets.map((ds) => (
              <div key={ds.name} className="border-t border-rule py-6 grid grid-cols-[200px_1fr] gap-8 items-start">
                <div>
                  <p className="font-serif text-base text-ink">{ds.name}</p>
                  <p className="font-sans text-xs text-ink-light mt-1">{ds.institution}</p>
                </div>
                <p className="font-sans text-sm text-ink-light leading-relaxed">{ds.detail}</p>
              </div>
            ))}
            <div className="border-t border-rule"></div>
          </div>
        </section>

        {/* Relevant Tools */}
        <section>
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Relevant Tools
          </p>
          <div className="space-y-0">
            {tools.map((tool, i) => (
              <div key={tool.name} className="border-t border-rule py-8 grid grid-cols-[60px_1fr] gap-6 items-start">
                <p className="font-serif text-4xl text-rule leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="font-serif text-xl text-ink">{tool.name}</h3>
                  <p className="font-sans text-sm text-ink-light mt-2 leading-relaxed max-w-2xl">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-rule"></div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  )
}
