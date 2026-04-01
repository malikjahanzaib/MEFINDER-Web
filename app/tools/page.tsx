import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { tools, ToolCategory } from '@/data/tools'

const categories: ToolCategory[] = [
  'Multimodal Fusion',
  'NLP & Clinical Text',
  'Data Infrastructure',
  'Prostate Cancer',
]

const categoryLabels: Record<ToolCategory, string> = {
  'Multimodal Fusion': 'Multimodal Fusion Models',
  'NLP & Clinical Text': 'NLP & Clinical Text',
  'Data Infrastructure': 'Data Quality & Infrastructure',
  'Prostate Cancer': 'Prostate Cancer Tools',
}

export default function ToolsPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Tools & Data"
        heading="Open-source infrastructure for multimodal cancer AI."
        subtext="All tools developed under the MEFINDER initiative are released with academic open-source licenses and designed for reproducible research."
      />

      <div className="max-w-5xl mx-auto px-8 py-20">
        {categories.map((category, ci) => {
          const categoryTools = tools.filter((t) => t.category === category)
          return (
            <section key={category} className={ci < categories.length - 1 ? 'mb-20 pb-20 border-b border-rule' : 'mb-20'}>
              <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-2">
                {String(ci + 1).padStart(2, '0')}
              </p>
              <h2 className="font-serif text-3xl text-ink mb-12">
                {categoryLabels[category]}
              </h2>

              <div className="space-y-0">
                {categoryTools.map((tool) => (
                  <div key={tool.name} className="border-t border-rule py-10">
                    <div className="lg:grid lg:grid-cols-3 lg:gap-16">
                      {/* Left: name + venue + badge */}
                      <div>
                        <h3 className="font-serif text-2xl text-ink leading-snug">
                          {tool.name}
                        </h3>
                        {tool.venue && (
                          <p className="font-sans text-xs text-ink-light mt-2 italic">
                            {tool.venue}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 mt-3">
                          {tool.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-sans text-xs uppercase tracking-wide border border-rule text-ink-light px-2 py-0.5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right: description + details + availability */}
                      <div className="col-span-2 mt-6 lg:mt-0">
                        <p className="font-sans text-base text-ink leading-relaxed">
                          {tool.description}
                        </p>
                        <p className="font-sans text-sm text-ink-light leading-relaxed mt-3">
                          {tool.details}
                        </p>

                        {tool.metrics && (
                          <p className="font-sans text-sm text-ink mt-4">
                            <span className="text-ink-light uppercase tracking-widest text-xs">Performance &nbsp;&mdash;&nbsp;</span>
                            {tool.metrics}
                          </p>
                        )}

                        <div className="mt-4 flex flex-wrap items-center gap-4">
                          <p className="font-sans text-xs text-ink-light uppercase tracking-widest">
                            Availability:
                          </p>
                          {tool.githubUrl ? (
                            <a
                              href={tool.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-sans text-xs text-ink underline underline-offset-2 hover:text-navy transition-colors duration-150"
                            >
                              {tool.githubUrl.replace('https://', '')}
                            </a>
                          ) : (
                            <span className="font-sans text-xs text-ink">{tool.availability}</span>
                          )}
                        </div>

                        {tool.installCmd && (
                          <div className="mt-3">
                            <code className="font-mono bg-rule px-3 py-1 text-xs text-ink inline-block">
                              {tool.installCmd}
                            </code>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                <div className="border-t border-rule"></div>
              </div>
            </section>
          )
        })}
      </div>

      <Footer />
    </main>
  )
}
