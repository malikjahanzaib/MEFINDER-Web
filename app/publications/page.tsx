import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { publications } from '@/data/publications'

// Group by year descending
const years = Array.from(new Set(publications.map((p) => p.year))).sort((a, b) => b - a)

export default function PublicationsPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Publications"
        heading="Research outputs from the MEFINDER consortium."
      />

      <div className="max-w-5xl mx-auto px-8 py-20">

        {years.map((year) => {
          const yearPubs = publications.filter((p) => p.year === year)
          return (
            <section key={year} className="mb-16">
              <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-8">
                {year}
              </p>
              <div className="space-y-0">
                {yearPubs.map((pub, i) => (
                  <div
                    key={pub.id}
                    className="border-t border-rule py-10 grid grid-cols-[80px_1fr] gap-8 items-start"
                  >
                    {/* Leading numeral */}
                    <p className="font-serif text-6xl text-rule leading-none select-none">
                      {String(i + 1).padStart(2, '0')}
                    </p>

                    {/* Content */}
                    <div>
                      <h3 className="font-serif text-xl text-ink leading-snug">
                        {pub.title}
                      </h3>
                      <p className="font-sans text-sm text-ink-light mt-2 leading-relaxed">
                        {pub.authors}
                      </p>
                      <p className="font-sans text-sm text-ink-light italic mt-1">
                        {pub.venue}
                      </p>
                      <div className="flex flex-wrap items-center gap-4 mt-3">
                        {pub.doi && (
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs text-ink-light underline underline-offset-2 hover:text-ink transition-colors duration-150"
                          >
                            {pub.doi.replace('https://', '')}
                          </a>
                        )}
                        {pub.arxiv && (
                          <a
                            href={pub.arxiv}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-sans text-xs text-ink-light underline underline-offset-2 hover:text-ink transition-colors duration-150"
                          >
                            arXiv:{pub.arxiv.replace('https://arxiv.org/abs/', '')}
                          </a>
                        )}
                        {pub.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-sans text-xs uppercase tracking-wide border border-rule text-ink-light px-2 py-0.5"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )
        })}

        {/* Closing rule */}
        <div className="border-t border-rule mb-12"></div>

        {/* Footnote */}
        <p className="font-sans text-xs text-ink-light leading-relaxed max-w-2xl">
          This list reflects publications directly associated with the MEFINDER initiative. For a
          complete list of publications from contributing labs, visit the respective institutional
          pages.
        </p>

      </div>

      <Footer />
    </main>
  )
}
