import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

export default function ContactPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Get Involved"
        heading="Collaborate with MEFINDER."
        subtext="We welcome proposals for tool integration, data sharing arrangements, joint analyses, and clinical collaborations."
      />

      <div className="max-w-5xl mx-auto px-8 py-20">
        <div className="max-w-3xl">

          {/* Primary contact */}
          <section className="border-b border-rule pb-12 mb-12">
            <p className="font-sans text-sm font-medium text-ink">
              HITI Lab, Department of Radiology and Imaging Sciences
            </p>
            <p className="font-sans text-sm text-ink-light mt-1">
              Emory University School of Medicine
            </p>
            <p className="font-sans text-sm text-ink-light mt-0.5">
              Atlanta, Georgia
            </p>
            <a
              href="https://hitilab.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm text-ink underline underline-offset-2 mt-4 block hover:text-navy transition-colors duration-150"
            >
              hitilab.com
            </a>
          </section>

          {/* Collaboration opportunities */}
          <section>
            <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
              Collaboration Opportunities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <p className="font-sans text-sm font-medium text-ink">
                  For Researchers
                </p>
                <p className="font-sans text-xs text-ink-light mt-3 leading-relaxed">
                  We invite collaborations on tool development, dataset integration, model
                  validation, and joint publications. Access to open-source tools and derived
                  features is available through TCIA, Zenodo, and GitHub. Proposals for data
                  use agreements are coordinated through Emory&rsquo;s Office of Research.
                  Prospective graduate students and postdoctoral fellows interested in
                  multimodal cancer AI are encouraged to reach out to the HITI Lab directly.
                </p>
              </div>
              <div>
                <p className="font-sans text-sm font-medium text-ink">
                  For Clinicians &amp; Advocates
                </p>
                <p className="font-sans text-xs text-ink-light mt-3 leading-relaxed">
                  We are actively recruiting clinical collaborators for prospective validation
                  studies and patient advocates to participate in usability studies and focus
                  groups. Your perspective shapes how MEFINDER tools are designed for
                  real-world clinical integration and community benefit.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  )
}
