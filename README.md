# MEFINDER Website

Public-facing website for the **MEFINDER** project — *Multimodal Fusion Initiative for Novel Disease Phenotype Discovery and Population-Specific Risk Prediction* — an NCI U01-funded research initiative led by Dr. Judy Wawira Gichoya at Emory University's HITI Lab.

**Live site:** [mefinder.org](https://mefinder.org)  
**Research repository:** [Emory-Empathathetic-AI-for-Health-Inst/Multimodal-Multi-scale-Framework-for-Ethical-AI-Model-Development](https://github.com/Emory-Empathathetic-AI-for-Health-Inst/Multimodal-Multi-scale-Framework-for-Ethical-AI-Model-Development)

---

## About the Project

### What is MEFINDER?

MEFINDER develops an open-source computational framework that fuses medical imaging, digital pathology, electronic health records, and social determinants of health to discover novel cancer phenotypes and deliver population-specific risk predictions. The initiative is led by the [HITI Lab](https://hitilab.com) in the Department of Radiology and Informatics at Emory University School of Medicine, with support from Indiana University, Stanford University, Mayo Clinic, and the VA.

The core research problem: patients with identical cancer diagnoses frequently experience vastly different outcomes. Current molecular assays — such as Decipher, costing approximately $3,400 per test — are expensive and may not capture the full complexity of disease biology. MEFINDER builds computational alternatives that integrate information across modalities to provide more accurate, affordable, and equitable prognostication and treatment guidance.

### Clinical Use Cases

The initiative focuses on two clinical applications:

**1. ER-Positive Breast Cancer Recurrence Prediction**  
Fuses mammography (FFDM and digital breast tomosynthesis), breast MRI, digital pathology from core needle biopsies, and structured clinical text to predict recurrence risk. Draws on the EMBED v2 cohort — 260,815 breast cancer patients and approximately one million imaging exams from Emory University.

**2. Biochemical Recurrence After Definitive Prostate Cancer Therapy**  
Applies AI-based pathology image classification and MRI-based prostate biological age estimation to predict treatment outcomes after radical prostatectomy or radiation. Datasets include the EPIP cohort (~5,000 prostate MRI patients) and the VA prostate dataset (387 biparametric MRI patients, expanding), with long-term follow-up data from the Mayo Clinic Biobank (75,000+ patients, 10–15 years).

### Research Framework

The project operates across two milestones:

- **Milestone 1 (Months 1–6):** Open-source fusion framework development — data harmonization tools, feature extraction pipelines, and multimodal embedding approaches
- **Milestone 2 (Months 6–12):** Multimodal data integration and phenotype discovery — graph-based fusion, vision-language contrastive training, co-attention with causality, and clinical validation

Fusion strategies under development include graph-based multimodal feature fusion (image + EHR), graph-based spatio-temporal feature fusion (image + EHR + time), vision-language contrastive training with knowledge grounding, and co-attention with causal de-confounding.

### Consortium

| Institution | Role |
|---|---|
| **Emory University** (Lead) | Project coordination, HITI Lab infrastructure, NLP recurrence labeling, multimodal fusion development |
| **Indiana University** | Pathomic feature extraction, treatment benefit prediction models, prostate aging research (Shiradkar Lab) |
| **Stanford University** | NLP toolkit validation, breast cancer data harmonization, cancer registry linkage |
| **Mayo Clinic** | Long-term follow-up data, biobank infrastructure, clinical report parsing |
| **VA** | Prostate MRI data, pathology slide digitization |

### Target Audiences

This website serves a range of stakeholders:

- **NCI program officers and funders** — milestone progress, scientific impact, responsible data stewardship
- **Academic researchers and collaborators** — open-source tools, technical documentation, reproducible methods
- **Clinicians and clinical informaticists** — clinical relevance, integration with workflows, alternatives to costly assays
- **Graduate students and postdoctoral fellows** — research opportunities, model architectures, open-source contributions
- **Patient advocates** — plain-language summaries, data protection, community engagement

---

## Table of Contents

1. [About the Project](#about-the-project)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started)
4. [Project Structure](#project-structure)
5. [Pages](#pages)
6. [Updating Content](#updating-content)
7. [Design System](#design-system)
8. [Deployment](#deployment)
9. [DNS & Custom Domain](#dns--custom-domain)
10. [Acknowledgments](#acknowledgments)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Fonts | DM Serif Display + Instrument Sans (Google Fonts via `next/font`) |
| Output | Static export (`output: 'export'`) |
| Hosting | GitHub Pages |
| CI/CD | GitHub Actions |

The site is fully static — no server-side rendering, no database, no backend. All content lives in TypeScript data files and React components. The build output is a plain `out/` directory of HTML/CSS/JS files.

---

## Getting Started

### Prerequisites

- Node.js 20 or later
- npm

### Local development

```bash
# Clone the repository
git clone <this-repo-url>
cd mefinder-web

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build and preview

```bash
# Production build (outputs to /out)
npm run build

# The /out directory is the deployable artifact
# You can serve it locally with any static file server:
npx serve out
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
mefinder-web/
├── app/                        # Next.js App Router pages
│   ├── layout.tsx              # Root layout (fonts, metadata, Nav + Footer)
│   ├── page.tsx                # Homepage
│   ├── globals.css             # Tailwind directives + CSS keyframe animations
│   ├── research/
│   │   └── page.tsx            # Research overview (models + NLP framework)
│   ├── use-cases/
│   │   ├── breast-cancer/
│   │   │   └── page.tsx        # ER+ breast cancer use case
│   │   └── prostate-cancer/
│   │       └── page.tsx        # Prostate cancer use case
│   ├── tools/
│   │   └── page.tsx            # Full tool catalog
│   ├── publications/
│   │   └── page.tsx            # Full publications list
│   ├── team/
│   │   └── page.tsx            # Team & consortium
│   └── contact/
│       └── page.tsx            # Contact / Get Involved
│
├── components/                 # Shared React components
│   ├── Nav.tsx                 # Fixed top navigation (scroll-reactive)
│   ├── Footer.tsx              # Site footer with NCI acknowledgment
│   ├── PageHeader.tsx          # Reusable page header (label + heading + subtext)
│   ├── Hero.tsx                # Homepage hero section
│   ├── ResearchOverview.tsx    # Homepage research summary
│   ├── Pipeline.tsx            # Homepage pipeline SVG diagram
│   ├── ClinicalApplications.tsx# Homepage use-case preview sections
│   ├── Consortium.tsx          # Homepage consortium table
│   ├── Publications.tsx        # Homepage publications teaser (3 items)
│   ├── Funding.tsx             # NCI funding acknowledgment block
│   └── Contact.tsx             # Contact block (used on homepage)
│
├── data/                       # Structured content — edit these to update the site
│   ├── publications.ts         # All publications (typed array)
│   └── tools.ts                # All tools (typed array)
│
├── public/
│   ├── CNAME                   # Custom domain for GitHub Pages
│   └── .nojekyll               # Disables Jekyll processing on GitHub Pages
│
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD: build → deploy to GitHub Pages
│
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── postcss.config.js
```

---

## Pages

| Route | Purpose |
|---|---|
| `/` | Landing page — hero, research summary, pipeline diagram, use-case teasers, publications teaser, consortium, funding |
| `/research` | Full research overview — MOSCARD, VLM for Mammography, MM-STGNN, NLP framework |
| `/use-cases/breast-cancer` | ER-positive breast cancer use case — datasets, methods, tools |
| `/use-cases/prostate-cancer` | Prostate cancer biochemical recurrence — datasets, methods, tools |
| `/tools` | Complete tool catalog grouped by category |
| `/publications` | Full publication list with citations, DOIs, and arXiv links |
| `/team` | Consortium institutions and contributing researchers |
| `/contact` | Contact and collaboration information |

---

## Updating Content

Most routine updates require only editing files in the `data/` directory or individual page files. No design or layout knowledge needed.

### Adding a publication

Edit [data/publications.ts](data/publications.ts). Each entry follows this interface:

```typescript
export interface Publication {
  id: number
  title: string
  authors: string
  venue: string        // journal name, conference, year
  year: number
  doi?: string         // full URL, e.g. "https://doi.org/..."
  arxiv?: string       // full URL, e.g. "https://arxiv.org/abs/..."
  tags: string[]       // e.g. ["Breast Cancer", "NLP"]
}
```

Example:

```typescript
{
  id: 9,
  title: 'Your Paper Title Here.',
  authors: 'Last, First, Second Author, and Third Author.',
  venue: 'Journal Name, Volume (Year): Pages.',
  year: 2025,
  doi: 'https://doi.org/10.xxxx/xxxxx',
  tags: ['Breast Cancer', 'Multimodal Fusion'],
},
```

The `/publications` page automatically renders all entries grouped by year (descending). The homepage teaser always shows the 3 most recent entries.

### Adding or updating a tool

Edit [data/tools.ts](data/tools.ts). Each entry follows this interface:

```typescript
export type ToolCategory = 'Multimodal Fusion' | 'NLP & Clinical Text' | 'Data Infrastructure' | 'Prostate Cancer'

export interface Tool {
  name: string
  category: ToolCategory
  description: string       // one sentence — shown in card header
  details: string           // expanded description — shown in full listing
  venue?: string            // publication venue if applicable
  metrics?: string          // key performance metrics, e.g. "AUROC 0.998"
  availability: string      // e.g. "GitHub", "PyPI", "Request from authors"
  installCmd?: string       // if pip-installable, e.g. "pip install hiti-preproc"
  githubUrl?: string        // direct GitHub link if known
  tags: string[]
}
```

Tools appear on `/tools` grouped by category. To add a new category, extend the `ToolCategory` union type.

### Updating team information

Edit [app/team/page.tsx](app/team/page.tsx) directly. The institution table and researcher list are written inline in JSX. Add headshots by placing images in `public/team/` and referencing them with a standard `<img>` tag.

### Updating use-case content

Edit the relevant page file:
- [app/use-cases/breast-cancer/page.tsx](app/use-cases/breast-cancer/page.tsx)
- [app/use-cases/prostate-cancer/page.tsx](app/use-cases/prostate-cancer/page.tsx)

Content is written directly in JSX. These pages are intentionally not data-driven since the content is long-form prose that requires editorial control.

---

## Design System

The site uses a constrained editorial palette and typographic hierarchy. Maintain these rules when adding new pages or components.

### Color palette

| Token | Hex | Usage |
|---|---|---|
| `surface` | `#F7F5F0` | Page background — warm parchment |
| `ink` | `#1A1814` | Primary text — warm near-black |
| `ink-light` | `#4A4640` | Secondary text, labels, captions |
| `rule` | `#E2DED8` | Borders, horizontal rules, dividers |
| `navy` | `#012169` | Emory institutional navy — use sparingly (wordmark, key accents) |
| `amber` | `#C8922A` | Warm gold — section labels, use-case markers, SVG arrows |

All tokens are defined in [tailwind.config.ts](tailwind.config.ts) and used as Tailwind utility classes (`bg-surface`, `text-ink-light`, `border-rule`, etc.).

**Opacity rule:** When using Tailwind opacity modifiers (e.g. `text-ink/50`, `bg-navy/10`), use **only multiples of 5** — 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100. Non-standard values like `/4`, `/6`, `/8` silently produce transparent backgrounds in Tailwind JIT mode.

### Typography

| Role | Font | Class |
|---|---|---|
| Display headings (`h1`, `h2`) | DM Serif Display | `font-serif` |
| Body, UI, labels | Instrument Sans | `font-sans` |
| Section labels | Instrument Sans, uppercase, tracked | `font-sans text-xs uppercase tracking-widest text-ink-light` |
| Code / install commands | System monospace | `font-mono` |

### Layout conventions

- Max content width: `max-w-5xl` (~1100px) with `px-8` padding — never let text run full-viewport-width
- Section spacing: `py-24` for major sections, `py-16` for sub-sections
- Structure via rules, not boxes: use `border-t border-rule` to separate sections; avoid shadow cards (`shadow-md`, `shadow-lg`)
- No icon libraries — use inline SVG sparingly
- No animation libraries — CSS keyframes only (defined in `globals.css`)

### Adding a new page

1. Create `app/<route>/page.tsx`
2. Import and use `<PageHeader>` for the top section
3. Wrap content in `max-w-5xl mx-auto px-8`
4. The root `layout.tsx` automatically wraps every page with `<Nav>` and `<Footer>`

Example scaffold:

```tsx
import PageHeader from '@/components/PageHeader'

export const metadata = { title: 'Page Title — MEFINDER' }

export default function MyPage() {
  return (
    <main className="bg-surface min-h-screen">
      <PageHeader
        label="Section Label"
        heading="Page heading in DM Serif Display."
        subtext="One or two sentences describing this page."
      />
      <section className="py-24 px-8 max-w-5xl mx-auto">
        {/* content */}
      </section>
    </main>
  )
}
```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)).

### How the pipeline works

1. GitHub Actions checks out the repository on `ubuntu-latest`
2. Installs dependencies with `npm ci`
3. Runs `npm run build` — Next.js produces a static export in `/out`
4. Uploads the `/out` directory as a Pages artifact
5. Deploys to GitHub Pages

### First-time GitHub Pages setup

1. Go to your repository → **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. Push to `main` — the workflow runs automatically
4. The site will be live at `https://<username>.github.io/<repo>` (or your custom domain once DNS is configured)

### Environment variables

| Variable | Value | Purpose |
|---|---|---|
| `NEXT_PUBLIC_BASE_PATH` | `''` (empty string) | Base path prefix. Empty for custom domain (mefinder.org). Set to `/repo-name` only if deploying to a GitHub Pages subdirectory without a custom domain. |

This variable is set in the workflow file and does not need to be configured in repository secrets.

### Manual deployment

```bash
# Build locally
npm run build

# The /out directory is the complete static site
# Upload it to any static host (Netlify, Vercel static, S3, etc.)
```

---

## Acknowledgments

This website supports the MEFINDER research initiative, which is supported by the **National Cancer Institute (NCI)** of the National Institutes of Health under Award Number U01. The content is solely the responsibility of the authors and does not necessarily represent the official views of the National Institutes of Health.

**Principal Investigator:** Dr. Judy Wawira Gichoya  
**HITI Lab**, Department of Radiology and Informatics  
Emory University School of Medicine

**Consortium partners:** Emory University · Indiana University · Stanford University · Mayo Clinic · VA
