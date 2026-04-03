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

type TeamMember = { name: string; role: string; affiliation?: string }

const leadership: TeamMember[] = [
  {
    name: 'Dr. Judy Wawira Gichoya',
    role: 'Principal Investigator',
    affiliation: 'Associate Professor, Department of Radiology and Imaging Sciences, Emory University',
  },
  {
    name: 'Dr. Hari Trivedi',
    role: 'Co-Investigator',
    affiliation: 'Associate Professor, Emory University',
  },
  {
    name: 'Dr. Imon Banerjee, Ph.D.',
    role: 'Co-Investigator',
    affiliation: 'Associate Professor, Mayo Clinic',
  },
  {
    name: 'Dr. Anant Madabhushi',
    role: 'Professor',
    affiliation: 'Emory University',
  },
]

const coreTeam: TeamMember[] = [
  { name: 'Amara Tariq, Ph.D.',        role: 'Collaborator' },
  { name: 'Beatrice Brown-Mulry',      role: 'Data Analyst, Sr',                 affiliation: 'Emory University HITI Lab' },
  { name: 'Rohan Satya Isaac',         role: 'Data Analyst, Sr',                 affiliation: 'Emory University' },
  { name: 'Jahanzaib Malik',           role: 'Systems Software Engineer',        affiliation: 'Emory University HITI Lab' },
  { name: 'Drew Williamson',           role: 'Assistant Professor',              affiliation: 'Emory University' },
  { name: 'Ujjwal Raghunandan Baid',   role: 'Dir, Research Operations (SOM)',   affiliation: 'Emory University' },
  { name: 'Kutsev Bengisu Ozyoruk',    role: 'Scientist, Asst (AR)',             affiliation: 'Emory University' },
  { name: 'Tilak Bahadur Pathak',      role: 'Scientist (AR) SOM',              affiliation: 'Emory University' },
  { name: 'Barry C. Prine',            role: 'Sponsored Research Analyst, Lead', affiliation: 'Emory University' },
  { name: 'Bolin Song',                role: 'Post Doctoral Fellow',             affiliation: 'Emory University' },
  { name: 'Naoto Tokuyama',            role: 'Post Doctoral Fellow',             affiliation: 'Emory University' },
  { name: 'Krunal Balvantbhai Pandav', role: 'Visiting Fellow',                  affiliation: 'Emory University' },
  { name: 'Daniel L. Rubin',           role: 'Collaborator',                     affiliation: 'Stanford University' },
  { name: 'Mirabela Rusu',             role: 'Collaborator',                     affiliation: 'Stanford University' },
  { name: 'Rakesh Shiradkar',          role: 'Collaborator' },
  { name: 'Sumedh Ajit Sonawane',      role: 'Collaborator' },
  { name: 'Yamlak Asrat Bogale',       role: 'Collaborator' },
  { name: 'Dakota Kershaw',            role: 'Research Admin, Post Award III',   affiliation: 'Emory University' },
  { name: 'Jay Sonuga',                role: 'Clinical Research Coordinator III', affiliation: 'Emory University' },
  { name: 'Maryam Sakinah Yasin',      role: 'Clinical Research Coordinator I',  affiliation: 'Emory University' },
  { name: 'Biniam Garomsa',            role: 'Doctoral Student',                 affiliation: 'Emory University' },
  { name: 'Loyani Loyani',             role: 'Doctoral Student',                 affiliation: 'Emory University' },
  { name: 'Sebastian Medina Carrillo', role: 'Graduate Student',                 affiliation: 'TU BME' },
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

        {/* Leadership */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Leadership
          </p>
          <div className="space-y-0">
            {leadership.map((member) => (
              <div key={member.name} className="border-t border-rule py-6 grid grid-cols-[240px_1fr] gap-8 items-start transition-colors duration-150 hover:bg-rule/30">
                <p className="font-serif text-base text-ink">{member.name}</p>
                <div>
                  <p className="font-sans text-sm text-ink leading-relaxed">{member.role}</p>
                  {member.affiliation && (
                    <p className="font-sans text-xs text-ink-light mt-0.5">{member.affiliation}</p>
                  )}
                </div>
              </div>
            ))}
            <div className="border-t border-rule"></div>
          </div>
        </section>

        {/* Core Team */}
        <section className="border-b border-rule pb-16 mb-16">
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
            Core Team
          </p>
          <div className="space-y-0">
            {coreTeam.map((member) => (
              <div key={member.name} className="border-t border-rule py-6 grid grid-cols-[240px_1fr] gap-8 items-start transition-colors duration-150 hover:bg-rule/30">
                <p className="font-serif text-base text-ink">{member.name}</p>
                <div>
                  <p className="font-sans text-sm text-ink leading-relaxed">{member.role}</p>
                  {member.affiliation && (
                    <p className="font-sans text-xs text-ink-light mt-0.5">{member.affiliation}</p>
                  )}
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
