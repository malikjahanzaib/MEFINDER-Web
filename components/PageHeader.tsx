interface PageHeaderProps {
  label: string
  heading: string
  subtext?: string
}

export default function PageHeader({ label, heading, subtext }: PageHeaderProps) {
  return (
    <div className="pt-36 max-w-5xl mx-auto px-8 border-b border-rule pb-16">
      <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
        {label}
      </p>
      <h1 className="font-serif text-5xl text-ink mt-3 max-w-2xl leading-tight">
        {heading}
      </h1>
      {subtext && (
        <p className="font-sans text-base text-ink-light mt-4 max-w-xl leading-relaxed">
          {subtext}
        </p>
      )}
    </div>
  )
}
