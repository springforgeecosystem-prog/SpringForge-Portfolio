# SpringForge — Research Portfolio

A single-page research portfolio for **SpringForge**, a unified AI-driven IntelliJ IDEA plugin ecosystem for intelligent Spring Boot development. The site presents four connected research tracks, key results, the full document archive, and team information in one place.

## Live site

[portfolio.springforge.dev](https://portfolio.springforge.dev/)

## Research overview

SpringForge addresses four persistent productivity bottlenecks in enterprise Spring Boot delivery:

| Track | Researcher | Key result |
|---|---|---|
| Architecture-aware code generation | Tharindu Mahindarathna | 91.38% architectural accuracy |
| CI/CD artifact automation | Udula Thathsaridu | Context-aware pipeline generation with DevSecOps support |
| Quality assurance & anti-pattern detection | Jameela M.J.F | 0.9498 macro F1 score |
| RAG-based runtime debugging | Madhini Ariyasena | 100% fix success rate on benchmarked failures |

The unified paper frames these as one integrated IDE workflow trained across 18,000 Spring Boot repositories.

## Tech stack

- **Framework** — React 18 + TypeScript
- **Build tool** — Vite
- **Styling** — Tailwind CSS
- **Component library** — shadcn/ui (Radix UI primitives)
- **Animation** — Framer Motion
- **Routing** — React Router v6

## Getting started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview production build locally
npm run preview
```

## Project structure

```
src/
  assets/          # Team photos and brand images
  components/
    site/          # Page sections (Hero, ResearchTabs, Docs, Team, …)
    ui/            # shadcn/ui base components
    fx/            # Visual effects (NeonTrail cursor)
  pages/           # Route entry points
public/
  TAF/             # Topic Approval Form
  Propoal Report/  # Individual proposal reports (x4)
  Final Reports/   # Group report + individual final reports (x4)
  Checklist/       # Milestone checklists (x3)
  presentations/   # Slide decks (PPTX + PDF)
```

## Document archive

All submission documents are served from the `public/` directory and downloadable directly from the **Technical Resources** section of the site:

- TAF (Topic Approval Form)
- Proposal reports — IT22056320, IT22060662, IT22076052, IT22562524
- Milestone checklists I, II, III
- Final reports — group (25-26J-451) + four individual submissions
- Progress presentation decks (PP1, PP2)

## Team

| Name | Role |
|---|---|
| Tharindu Mahindarathna | Architecture-Aware Generation Lead |
| Udula Thathsaridu | CI/CD Automation Researcher |
| Jameela M.J.F | Quality Assurance Researcher |
| Madhini Ariyasena | RAG Debugging Researcher |

## License

This repository contains research artefacts produced for academic purposes. All rights reserved by the authors.
pwh-sssg-kng
