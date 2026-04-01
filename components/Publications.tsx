import Link from 'next/link'
import { publications } from '@/data/publications'

const teaserPubs = publications.slice(0, 3)

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-8 border-t border-rule">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
              Publications &amp; Outputs
            </p>
            <h2 className="font-serif text-4xl text-ink mt-2">
              Recent work from the consortium.
            </h2>
          </div>
          <Link
            href="/publications"
            className="font-sans text-sm text-ink-light underline underline-offset-4 hover:text-ink transition-colors duration-150 hidden md:block whitespace-nowrap ml-8"
          >
            View All Publications &rarr;
          </Link>
        </div>

        {/* Publication list */}
        <div className="space-y-0">
          {teaserPubs.map((pub, i) => (
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
                <p className="font-sans text-sm text-ink-light italic mt-2">
                  {pub.authors} {pub.venue}
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
          {/* Closing rule */}
          <div className="border-t border-rule"></div>
        </div>

        {/* Mobile view-all link */}
        <div className="mt-8 md:hidden">
          <Link
            href="/publications"
            className="font-sans text-sm text-ink-light underline underline-offset-4 hover:text-ink transition-colors duration-150"
          >
            View All Publications &rarr;
          </Link>
        </div>
      </div>
    </section>
  )
}
