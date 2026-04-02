import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import InstitutionLogo from '@/components/InstitutionLogo'

const institutions = [
  {
    name: 'HITI Lab',
    slug: 'hiti',
    role: 'Lead lab — multimodal fusion development, NLP recurrence labeling, data harmonization infrastructure. Department of Radiology and Informatics, Emory University School of Medicine.',
    datasets: 'EMBED v2 (260,815 patients, ~1M exams), EPIP (~5,000 prostate MRI patients)',
  },
  {
    name: 'Emory University (Lead)',
    slug: 'emory',
    role: 'Project coordination, institutional infrastructure, consortium management',
    datasets: 'EMBED v2 (260,815 patients, ~1M exams), EPIP (~5,000 prostate MRI patients)',
  },
  {
    name: 'Indiana University',
    slug: 'indiana',
    role: 'Pathomic feature extraction (APIC), treatment benefit prediction, prostate aging research',
    datasets: 'CHAARTED, STAMPEDE clinical trials',
  },
  {
    name: 'Stanford University',
    slug: 'stanford',
    role: 'NLP toolkit validation, breast cancer data harmonization, cancer registry linkage (CA)',
    datasets: 'Stanford breast and prostate cohorts, CA registry',
  },
  {
    name: 'Mayo Clinic',
    slug: 'mayo',
    role: 'Long-term follow-up, biobank infrastructure, clinical report parsing',
    datasets: 'Mayo Clinic Biobank (75,000+ patients, 10–15 years follow-up)',
  },
  {
    name: 'VA',
    slug: 'va',
    role: 'Prostate MRI data, pathology slide digitization',
    datasets: '387 biparametric MRI patients (expanding)',
  },
]

const researchers = [
  {
    name: 'Dr. Judy Wawira Gichoya',
    role: 'Principal Investigator, HITI Lab, Department of Radiology and Informatics, Emory University School of Medicine',
  },
  {
    name: 'Imon Banerjee',
    role: 'Indiana University — co-investigator; co-author on MM-STGNN and VLM for Mammography papers',
  },
  {
    name: 'Amara Tariq',
    role: 'Co-author on MM-STGNN and VLM for Mammography papers',
  },
  {
    name: 'Pradeeban Kathiravelu',
    role: 'Emory HITI Lab — lead developer of Niffler DICOM framework',
  },
  {
    name: 'Hari Trivedi',
    role: 'Emory University — co-author on Niffler',
  },
  {
    name: 'Nabile Safdar',
    role: 'Co-author on Niffler DICOM framework',
  },
  {
    name: 'Aisha Urooj Khan',
    role: 'Lead author on VLM for Mammography (MICCAI 2024)',
  },
]

export default function TeamPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Team & Consortium"
        heading="A five-institution consortium."
        subtext="A multi-site collaborative spanning academic medical centers, research universities, and federal health systems — each contributing unique expertise and datasets to the MEFINDER initiative."
      />

      <div className="max-w-5xl mx-auto px-8 py-20">

        {/* Institution table */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Partner Institutions
          </p>

          {/* Table header */}
          <div className="grid grid-cols-3 gap-8 border-b border-rule pb-3">
            <p className="font-sans text-xs uppercase tracking-wide text-ink-light">Institution</p>
            <p className="font-sans text-xs uppercase tracking-wide text-ink-light">Role</p>
            <p className="font-sans text-xs uppercase tracking-wide text-ink-light">Datasets</p>
          </div>

          {institutions.map((inst) => (
            <div
              key={inst.name}
              className="grid grid-cols-3 gap-8 border-b border-rule py-6 items-start"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="h-14 flex items-center justify-center">
                  <InstitutionLogo name={inst.name} slug={inst.slug} className="max-h-14 w-auto max-w-full object-contain object-center" />
                </div>
                <p className="font-serif text-sm text-ink text-center">{inst.name}</p>
              </div>
              <p className="font-sans text-sm text-ink-light leading-relaxed">{inst.role}</p>
              <p className="font-sans text-sm text-ink-light leading-relaxed">{inst.datasets}</p>
            </div>
          ))}
        </section>

        {/* Contributing Researchers */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Contributing Researchers
          </p>
          <div className="space-y-0">
            {researchers.map((researcher) => (
              <div key={researcher.name} className="border-t border-rule py-6 grid grid-cols-[240px_1fr] gap-8 items-start">
                <p className="font-serif text-base text-ink">{researcher.name}</p>
                <p className="font-sans text-sm text-ink-light leading-relaxed">{researcher.role}</p>
              </div>
            ))}
            <div className="border-t border-rule"></div>
          </div>
        </section>

        {/* Forthcoming note */}
        <section>
          <p className="font-sans text-sm text-ink-light leading-relaxed max-w-xl">
            Full team information including co-investigator bios and headshots will be available
            at launch.
          </p>
        </section>

      </div>

      <Footer />
    </main>
  )
}
