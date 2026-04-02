import { ExternalLinkIcon } from '@/components/icons'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-8 border-t border-rule">
      <div className="max-w-3xl mx-auto text-center">
        {/* Header */}
        <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
          Get Involved
        </p>
        <h2 className="font-serif text-4xl text-ink mt-3">
          Collaborate with MEFINDER.
        </h2>
        <p className="font-sans text-base text-ink-light leading-relaxed mt-6 max-w-xl mx-auto">
          We welcome proposals for tool integration, data sharing arrangements,
          joint analyses, and clinical collaborations. Prospective graduate
          students and postdoctoral fellows interested in multimodal cancer AI
          are encouraged to reach out to the HITI Lab directly.
        </p>

        {/* Contact block */}
        <div className="mt-12">
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
            className="font-sans text-sm text-ink inline-flex items-center gap-1.5 underline underline-offset-2 mt-4 hover:text-navy transition-colors duration-150"
          >
            hitilab.com
            <ExternalLinkIcon className="w-3 h-3" />
          </a>
        </div>

        {/* For prospective contributors */}
        <div className="mt-12 border-t border-rule pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <p className="font-sans text-sm font-medium text-ink">
                For Researchers
              </p>
              <p className="font-sans text-xs text-ink-light mt-2 leading-relaxed">
                We invite collaborations on tool development, dataset
                integration, model validation, and joint publications. Access to
                open-source tools and derived features is available through TCIA,
                Zenodo, and GitHub. Proposals for data use agreements are
                coordinated through Emory&rsquo;s Office of Research.
              </p>
            </div>
            <div>
              <p className="font-sans text-sm font-medium text-ink">
                For Clinicians &amp; Advocates
              </p>
              <p className="font-sans text-xs text-ink-light mt-2 leading-relaxed">
                We are actively recruiting clinical collaborators for prospective
                validation studies and patient advocates to participate in
                usability studies and focus groups. Your perspective shapes how
                MEFINDER tools are designed for real-world clinical integration
                and community benefit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
