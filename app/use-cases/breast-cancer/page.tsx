import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { tools as allTools } from '@/data/tools'

const dataModalities = [
  { label: 'Mammography', detail: 'Full-field digital mammography (FFDM) and digital breast tomosynthesis (DBT)' },
  { label: 'Breast MRI', detail: 'Dynamic contrast-enhanced MRI for high-risk screening and staging' },
  { label: 'Digital Pathology', detail: 'H&E whole-slide images from core needle biopsies' },
  { label: 'Clinical Text', detail: 'Radiology and pathology reports processed by NLP pipelines for recurrence labeling' },
  { label: 'EHR', detail: 'Structured electronic health records including ICD-10 codes, medications, and visit history' },
]

const RELEVANT_TOOLS = [
  'VLM for Mammography',
  'BreastRecurrence_Transformer',
  'Breast Cancer Treatment Extraction',
  'PCO Extraction',
  'Recurrence Site Extraction (BioLinkBERT)',
  'Mammogram Implant Identifier',
]

const tools = allTools.filter((t) => RELEVANT_TOOLS.includes(t.name))

export default function BreastCancerPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Clinical Use Case"
        heading="ER-Positive Breast Cancer Recurrence Prediction"
        subtext="ER-positive breast cancer is the most common breast cancer subtype, yet patients with identical diagnoses experience markedly different recurrence rates. MEFINDER builds a multimodal recurrence predictor by fusing imaging, pathology, and clinical text from the largest annotated breast cancer cohort in the US."
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
                ER-positive breast cancer accounts for the majority of breast cancer diagnoses,
                yet current standard-of-care tools are unable to reliably distinguish patients
                who will experience late recurrence (5–20 years after diagnosis) from those who
                will remain disease-free. This uncertainty leads to over-treatment in some patients
                and under-treatment in others.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                Expensive molecular assays (such as Oncotype DX, approximately $3,400 per test)
                offer partial prognostic guidance but may not capture the full biological
                complexity of disease. MEFINDER integrates imaging, pathology, and clinical
                text to build affordable, equity-aware alternatives that provide more accurate
                prognostication across diverse patient populations.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                The NLP pipeline extracts recurrence events, treatment timelines, and patient-centered
                outcomes directly from free-text clinical notes — enabling large-scale, retrospective
                cohort construction without manual chart review.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <div className="border-t border-rule pt-6">
                <p className="font-serif text-5xl text-ink">260,815</p>
                <p className="font-sans text-sm text-ink-light mt-1">patients in EMBED v2</p>
              </div>
              <div className="border-t border-rule pt-6 mt-6">
                <p className="font-serif text-4xl text-ink">~1M</p>
                <p className="font-sans text-sm text-ink-light mt-1">imaging exams, cross-modality</p>
              </div>
              <div className="border-t border-rule pt-6 mt-6">
                <p className="font-sans text-xs text-ink-light uppercase tracking-widest">NLP validated on</p>
                <p className="font-sans text-sm text-ink mt-2 leading-relaxed">
                  Mayo Clinic · Stanford · Emory · UC Davis
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Data Modalities */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Data Modalities
          </p>
          <div className="space-y-0">
            {dataModalities.map((modality) => (
              <div key={modality.label} className="border-t border-rule py-6 grid grid-cols-[180px_1fr] gap-8 items-start">
                <p className="font-serif text-base text-ink">{modality.label}</p>
                <p className="font-sans text-sm text-ink-light leading-relaxed">{modality.detail}</p>
              </div>
            ))}
            <div className="border-t border-rule"></div>
          </div>
        </section>

        {/* Key Dataset */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Key Dataset
          </p>
          <div className="lg:grid lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="font-serif text-2xl text-ink">EMBED v2</h3>
              <p className="font-sans text-base text-ink-light mt-4 leading-relaxed">
                The EMBED (EMory BrEast imaging Dataset) v2 cohort is hosted at Emory University and
                comprises 260,815 breast cancer patients with approximately one million imaging exams
                across multiple modalities. It is one of the largest and most diverse annotated breast
                imaging datasets available for research, enabling equity-aware model development and
                validation across demographic subgroups.
              </p>
            </div>
            <div className="mt-8 lg:mt-0 space-y-4">
              {[
                ['Patients', '260,815'],
                ['Imaging exams', '~1 million'],
                ['Imaging modalities', 'FFDM, DBT, breast MRI'],
                ['Institution', 'Emory University'],
                ['Use', 'Multimodal recurrence prediction, NLP pipeline development'],
              ].map(([k, v]) => (
                <div key={k} className="border-t border-rule pt-4">
                  <p className="font-sans text-xs text-ink-light">{k}</p>
                  <p className="font-sans text-sm text-ink mt-0.5">{v}</p>
                </div>
              ))}
            </div>
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
                  <p className="font-sans text-sm text-ink font-medium mt-1">{tool.description}</p>
                  <p className="font-sans text-sm text-ink-light mt-2 leading-relaxed max-w-2xl">
                    {tool.details}
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
