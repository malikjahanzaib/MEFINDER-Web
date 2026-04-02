'use client'

import { useEffect, useRef, useState } from 'react'

// depth: how much this node moves with the mouse (0 = fixed, 1 = max shift)
const nodes = [
  { id: 'center',   x: 720, y: 330, r: 8,   depth: 0.9, delay: '0s',    dur: '3s' },
  { id: 'radio',    x: 640, y: 290, r: 3,   depth: 0.6, delay: '1.4s',  dur: '3.3s' },
  { id: 'genomics', x: 810, y: 400, r: 3,   depth: 0.6, delay: '0.9s',  dur: '3.7s' },
  { id: 'mammo',    x: 570, y: 150, r: 4.5, depth: 0.2, delay: '0.4s',  dur: '3.5s' },
  { id: 'mri',      x: 840, y: 110, r: 4.5, depth: 0.2, delay: '0.8s',  dur: '4s' },
  { id: 'path',     x: 960, y: 270, r: 4.5, depth: 0.2, delay: '1.2s',  dur: '3.2s' },
  { id: 'ehr',      x: 900, y: 450, r: 4.5, depth: 0.2, delay: '0.6s',  dur: '3.8s' },
  { id: 'sdoh',     x: 710, y: 530, r: 4.5, depth: 0.2, delay: '1s',    dur: '3.6s' },
  { id: 'text',     x: 560, y: 460, r: 4.5, depth: 0.2, delay: '0.2s',  dur: '4.2s' },
]

const edges = [
  ['center', 'mammo'],
  ['center', 'mri'],
  ['center', 'path'],
  ['center', 'ehr'],
  ['center', 'sdoh'],
  ['center', 'text'],
  ['mammo',  'mri'],
  ['mri',    'path'],
  ['path',   'ehr'],
  ['ehr',    'sdoh'],
  ['sdoh',   'text'],
  ['radio',    'center'],
  ['genomics', 'center'],
  ['radio',    'mammo'],
  ['genomics', 'ehr'],
]

const MAX_SHIFT = 18

const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export default function HeroConstellation() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const targetRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      targetRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * MAX_SHIFT,
        y: (e.clientY / window.innerHeight - 0.5) * MAX_SHIFT,
      }
    }

    const tick = () => {
      setMouse((prev) => {
        const nx = lerp(prev.x, targetRef.current.x, 0.07)
        const ny = lerp(prev.y, targetRef.current.y, 0.07)
        return Math.abs(nx - prev.x) < 0.01 && Math.abs(ny - prev.y) < 0.01
          ? prev
          : { x: nx, y: ny }
      })
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  // Compute each node's current position based on its depth factor
  const positions = Object.fromEntries(
    nodes.map((n) => [
      n.id,
      { x: n.x + mouse.x * n.depth, y: n.y + mouse.y * n.depth },
    ])
  )

  return (
    <div
      className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block"
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1100 680"
        preserveAspectRatio="xMidYMid meet"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Edges — endpoints update with node positions */}
        {edges.map(([a, b], i) => {
          const pa = positions[a]
          const pb = positions[b]
          return (
            <line
              key={i}
              x1={pa.x} y1={pa.y}
              x2={pb.x} y2={pb.y}
              stroke="#E2DED8"
              strokeWidth="1"
              opacity="0.25"
            >
              <animate
                attributeName="opacity"
                values="0.25;0.55;0.25"
                dur={`${3.5 + (i % 3) * 0.7}s`}
                begin={`${(i * 0.3) % 2}s`}
                repeatCount="indefinite"
              />
            </line>
          )
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const pos = positions[node.id]
          return (
            <circle
              key={node.id}
              cx={pos.x}
              cy={pos.y}
              r={node.r}
              fill={node.id === 'center' ? '#4A4640' : '#1A1814'}
              opacity={node.id === 'center' ? 0.18 : 0.12}
            >
              <animate
                attributeName="r"
                values={`${node.r};${node.r * 1.45};${node.r}`}
                dur={node.dur}
                begin={node.delay}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values={node.id === 'center' ? '0.18;0.28;0.18' : '0.10;0.20;0.10'}
                dur={node.dur}
                begin={node.delay}
                repeatCount="indefinite"
              />
            </circle>
          )
        })}
      </svg>
    </div>
  )
}
