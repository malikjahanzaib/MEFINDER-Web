'use client'

import { useState } from 'react'

interface Props {
  name: string
  slug: string
  className?: string
}

export default function InstitutionLogo({ name, slug, className = '' }: Props) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div className={`flex items-center justify-center border border-rule px-4 h-16 ${className}`}>
        <span className="font-serif text-sm text-ink-light text-center leading-snug">{name}</span>
      </div>
    )
  }

  return (
    <img
      src={`/logos/${slug}.png`}
      alt={name}
      className={`w-full max-h-20 object-contain object-center ${className}`}
      onError={() => setError(true)}
    />
  )
}
