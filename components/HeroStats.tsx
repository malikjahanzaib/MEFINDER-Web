'use client'

import { useEffect, useState } from 'react'

const stats = [
  {
    target: 260815,
    format: (n: number) => `${n.toLocaleString()}+`,
    label: 'Patients in EMBED v2',
    sublabel: 'Breast cancer cohort',
    duration: 1800,
  },
  {
    target: 1,
    format: (n: number) => `~${n} Million`,
    label: 'Imaging Exams',
    sublabel: 'Cross-modality',
    duration: 1200,
  },
  {
    target: 5,
    format: (n: number) => `${n}`,
    label: 'Partner Institutions',
    sublabel: 'Multi-site consortium',
    duration: 900,
  },
  {
    target: 13,
    format: (n: number) => `${n}+`,
    label: 'Open-Source Tools',
    sublabel: 'Code & models released',
    duration: 1100,
  },
]

function useCounter(target: number, duration: number) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration])

  return value
}

function StatItem({ stat }: { stat: (typeof stats)[number] }) {
  const count = useCounter(stat.target, stat.duration)
  return (
    <div className="py-8 px-6 first:pl-0 last:pr-0">
      <p className="font-serif text-4xl text-ink tabular-nums">
        {stat.format(count)}
      </p>
      <p className="font-sans text-sm font-medium text-ink mt-2">{stat.label}</p>
      <p className="font-sans text-xs text-ink-light mt-0.5">{stat.sublabel}</p>
    </div>
  )
}

export default function HeroStats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 divide-y divide-rule md:divide-y-0 divide-x-0 md:divide-x md:divide-rule">
      {stats.map((stat) => (
        <StatItem key={stat.label} stat={stat} />
      ))}
    </div>
  )
}
