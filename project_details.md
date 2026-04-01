  
**PROJECT WEBSITE SPECIFICATION**

—

**MEFINDER**

Multimodal Fusion Initiative for Novel Disease Phenotype

Discovery and Population-Specific Risk Prediction

NCI U01 Award

PI: Dr. Judy Gichoya – Emory University

HITI Lab, Department of Radiology and Informatics

Version 1.0 – March 2026  
**DRAFT – For Team Review**

# **1\. Executive Summary**

This document specifies the design, architecture, content structure, and functional requirements for the MEFINDER project website. MEFINDER (Multimodal Fusion Initiative for Novel Disease Phenotype Discovery and Population-Specific Risk Prediction) is an NCI U01-funded research initiative led by PI Dr. Judy Gichoya at Emory University’s HITI Lab, in collaboration with Indiana University, Stanford University, Mayo Clinic, and the VA.

The website will serve as the public-facing digital presence for the project, communicating the initiative’s scientific mission, disseminating open-source tools and publications, showcasing the multi-institutional consortium, and providing a central hub for stakeholder engagement. It will complement the existing GitHub repository and institutional pages by presenting the project’s work in an accessible, visually compelling format suitable for audiences ranging from NCI program officers and collaborating researchers to clinicians and patient advocates.

# **2\. Project Background**

## **2.1 Mission Statement**

MEFINDER aims to develop an open-source framework that fuses medical imaging, digital pathology, clinical records, and social determinants of health data to discover novel disease phenotypes and deliver population-specific risk predictions for cancer patients. The initiative focuses on two clinical use cases: ER-positive breast cancer recurrence and biochemical recurrence following definitive prostate cancer therapy.

## **2.2 The Problem We Solve**

Patients with identical cancer diagnoses frequently experience vastly different outcomes. Current molecular assays (such as Decipher, costing approximately $3,400 per test) are expensive and may not capture the full complexity of disease biology. MEFINDER seeks to develop computational alternatives that integrate information across multiple data modalities—radiology, pathology, and electronic health records—to provide more accurate, affordable, and equitable prognostication and treatment guidance.

## **2.3 Consortium Partners**

| Institution | Key Contributions | Datasets Provided |
| :---- | :---- | :---- |
| **Emory University (Lead)** | Project coordination, HITI Lab infrastructure, data harmonization, NLP recurrence labeling, multimodal fusion development | EMBED v2 (260,815 breast cancer patients, \~1M exams), EPIP (\~5,000 prostate MRI patients) |
| **Indiana University** | Pathomic feature extraction (APIC), treatment benefit prediction models, prostate aging research | Clinical trial datasets (CHAARTED, STAMPEDE), validated pathomic classifiers |
| **Stanford University** | NLP toolkit validation, breast cancer data harmonization, cancer registry linkage (CA) | Stanford breast and prostate cohorts, registry-linked outcomes |
| **Mayo Clinic** | Long-term follow-up data, biobank infrastructure, clinical report parsing | Mayo Clinic Biobank (75,000+ patients, 10–15 years follow-up) |
| **VA** | Prostate MRI data, pathology slide digitization | VA prostate dataset (387 biparametric MRI patients, expanding) |

# **3\. Target Audiences and User Personas**

## **3.1 Primary Audiences**

* **NCI Program Officers and Funders:** Need clear, high-level evidence of milestone progress, scientific impact, and responsible data stewardship. They visit the site to verify that deliverables align with the U01 award’s goals.  
* **Academic Researchers and Collaborators:** Seek access to open-source tools, technical documentation, reproducible methods, and publications. They want to adopt MEFINDER components in their own multimodal AI pipelines.  
* **Clinicians and Clinical Informaticists:** Interested in how the framework could influence treatment decisions, replace costly molecular assays, and integrate with clinical workflows. They value plain-language explanations of clinical relevance.  
* **Patient Advocates and Community Stakeholders:** Want to understand how the research may benefit patients, how data is protected, and how their perspectives shape tool development through the usability study and focus group engagement.

## **3.2 Secondary Audiences**

* **Graduate Students and Trainees:** Looking for learning resources, model architectures, and opportunities to contribute to the open-source ecosystem.  
* **Industry Partners:** Evaluating the framework’s potential for clinical translation, licensing, or integration into commercial AI platforms.  
* **Journalists and Science Communicators:** Seeking accessible summaries of the research’s significance for public reporting.

# **4\. Website Goals and Success Criteria**

## **4.1 Strategic Goals**

1. **Communicate scientific mission** clearly to all audience segments, from technical researchers to lay stakeholders.  
2. **Disseminate open-source tools and datasets** with clear documentation, enabling adoption and reproducibility.  
3. **Demonstrate NCI milestone compliance** by presenting progress transparently against the project timeline.  
4. **Facilitate stakeholder engagement** through accessible explanations, feedback mechanisms, and community building.  
5. **Establish credibility and visibility** within the medical AI and cancer research communities.

## **4.2 Key Performance Indicators**

| Metric | Target (Year 1\) | Measurement Method |
| :---- | :---- | :---- |
| Monthly unique visitors | 500+ | Google Analytics |
| GitHub referral clicks | 100+ per month | UTM-tracked links |
| Tool documentation page views | 1,000+ per quarter | Page analytics |
| Contact form submissions | 10+ per quarter | Form analytics |
| Publication citation referrals | Track all publications | DOI link tracking |

# **5\. Information Architecture and Sitemap**

## **5.1 Sitemap Overview**

The website is structured around seven primary sections, each designed for specific audience needs. The navigation should be clean, with no more than seven top-level items.

### **Primary Navigation Structure**

* Home  
* About (with sub-pages: Mission, Team, Consortium, Timeline)  
* Research (with sub-pages: Use Case 1 – Breast Cancer, Use Case 2 – Prostate Cancer, Multimodal Fusion Framework, Data Harmonization)  
* Tools & Data (with sub-pages: Open-Source Toolkit, Datasets, GitHub Repository)  
* Publications  
* News & Updates  
* Contact / Get Involved

## **5.2 Page Specifications**

### **5.2.1 Home Page**

**Purpose:** First impression; immediately communicates what MEFINDER is and why it matters.

**Hero Section:** A concise tagline (e.g., “Discovering Digital Cancer Phenotypes Through Multimodal AI”), brief sub-heading (2–3 sentences on the clinical problem and approach), primary call-to-action button linking to “Explore Our Tools,” and institutional logos of all consortium partners.

**Problem Statement Section:** A visual or infographic explaining the clinical challenge: same diagnosis, different outcomes. Simple data visualization showing the scale of the project (number of patients, datasets, institutions).

**Framework Overview:** A simplified diagram of the MEFINDER pipeline (data harmonization → feature extraction → multimodal embedding → phenotype discovery), adapted from the project overview figure used in presentations.

**Highlights Carousel:** 3–4 rotating cards showcasing recent milestones, publications, or tool releases.

**Quick Links:** Prominent cards linking to the two clinical use cases, the open-source toolkit, and the publications list.

### **5.2.2 About Section**

Mission Sub-page: Expanded description of the project’s scientific aims. Task 1 (Open-Source Fusion Framework) and Task 2 (Clinical Use Case Application) explained in accessible language with parallel technical detail for expert audiences. Include the NCI U01 funding acknowledgment.

Team Sub-page: Grid-style display of investigators with headshots, names, titles, institutional affiliations, and brief bios. Organized by institution. Include links to individual lab pages and ORCID profiles where available.

Consortium Sub-page: Interactive or static map of the United States highlighting the geographic distribution of consortium sites (Emory/Atlanta, Indiana, Stanford/California, Mayo Clinic, VA). Each site links to a brief profile describing their role and datasets contributed.

Timeline/Milestones Sub-page: Visual timeline (Gantt chart or scrollable milestone tracker) showing Milestone 1 (Months 1–6: Open-Source Fusion Framework Development) and Milestone 2 (Months 6–12: Multimodal Data Integration and Phenotype Discovery). Each milestone should display its subtasks and completion status.

### **5.2.3 Research Section**

Use Case 1 – Breast Cancer Sub-page: Clinical context explaining ER-positive breast cancer recurrence prediction. Description of the data modalities involved (mammography FFDM/DBT, breast MRI, digital pathology, clinical text, EHR). Summary of NLP-based recurrence labeling, causal feature integration in histopathology, and compartment-aware prognostication approaches. Key figures and visualizations adapted from presentations (e.g., tooling flowchart for BC use case, PRISMA systematic review diagrams). Results highlights with links to full publications.

Use Case 2 – Prostate Cancer Sub-page: Clinical context for biochemical recurrence after definitive prostate cancer therapy. Description of APIC (AI-based Pathology Image Classifier) and its ability to predict treatment benefit from standard H\&E slides. Prostate biological age estimation model using MRI radiomics. MRI batch effect harmonization methodology. Key figures from the prostate tooling pipeline and Kaplan-Meier survival curves. PRISMA systematic review diagram for the prostate use case.

Multimodal Fusion Framework Sub-page: Technical overview of the fusion strategies under development, including graph-based multimodal feature fusion (image \+ EHR), graph-based spatio-temporal feature fusion (image \+ EHR \+ time), vision-language contrastive training with knowledge grounding, and co-attention with causality. Architecture diagrams showing the hypergraph-based fusion approach. Preliminary results demonstrating fusion outperforming unimodal baselines. Discussion of model interpretability (SHAP values, attention maps, transcriptome analysis).

Data Harmonization Sub-page: Overview of the three-category tool structure: Data Harmonization Tools (DICOM preprocessing, 2D-to-3D ROI mapping, implant detection, quality assessment via MQUAL, Beaks, HistoQC, F-SYN), Feature Extraction Tools (radiopathomics extraction, deep joint embeddings), and Multimodal Data Embedding approaches. Data quality metrics for each modality (pathology, EHR, radiology). The Fourier-based normalization approach for pathology slides explained with before/after examples.

### **5.2.4 Tools & Data Section**

Open-Source Toolkit Sub-page: Catalog of all released tools organized by category (harmonization, feature extraction, embedding). Each tool entry should include the tool name and version, a brief description (1–2 sentences), supported data modalities, a link to the GitHub repository, installation instructions or link to documentation, and citation information. Featured tools should include HistoQC, F-SYN, MQUAL, Beaks, APIC, MamoCLIP, ProstateNet, and the NLP recurrence labeling toolkit.

Datasets Sub-page: Description of the primary datasets used in the project with summary statistics. Include EMBED v2 (260,815 patients, approximately 1 million exams with multimodal imaging), EPIP (approximately 5,000 prostate MRI patients), Mayo Clinic Biobank (75,000+ patients with 10–15 years follow-up), VA prostate data (387 biparametric MRI patients, expanding), and links to public datasets and clinical trial data (RTOG, TCIA, PICCAI/EDRN). Clear guidance on data access policies, DUA requirements, and TCIA/Zenodo repository links. Data standards used: DICOM, HL7 FHIR, ICD-10, PI-RADS v2.1, IBSI.

GitHub Repository Sub-page: Embedded or linked view of the central repository at github.com/Emory-Empathathetic-AI-for-Health-Inst/Multimodal-Multi-scale-Framework-for-Ethical-AI-Model-Development. Contribution guidelines and code of conduct. Getting started guide for new contributors.

### **5.2.5 Publications Page**

A dynamically maintained list of project publications, conference presentations, and preprints. Each entry should include the full citation, DOI link, abstract (expandable), associated MEFINDER tools or use cases, and journal/conference information. Filterable by year, use case (breast/prostate), and type (journal article, conference paper, preprint). Should highlight publications in key venues such as Clinical Cancer Research, JCO Clinical Cancer Informatics, Journal of Biomedical Informatics, MICCAI, NeurIPS, SIIM, and RSNA.

### **5.2.6 News & Updates Page**

Blog-style feed of project updates, milestone achievements, team news, and event announcements. Each post should be brief (200–400 words) with a featured image and clear date. Categories should include Milestones, Publications, Events, and Team. RSS feed capability for subscribers.

### **5.2.7 Contact / Get Involved Page**

Contact form directed to the project coordination team. Information for prospective collaborators, including how to propose tool integrations, data sharing arrangements, or joint analyses. Stakeholder engagement information for clinicians and patient advocates wishing to participate in focus groups or the usability study. Links to social media or academic profiles for the PI and key investigators.

# **6\. Design Specifications**

## **6.1 Visual Identity**

The website’s visual identity should align with the HITI Lab and Emory University branding while establishing MEFINDER’s distinct identity as a federally funded multi-institutional initiative.

**Primary Color Palette:** Emory Navy (\#012169), HITI Lab accent colors, and a secondary palette suitable for data visualization (blues, teals, grays). Avoid overly corporate aesthetics; the site should feel academic and research-oriented.

**Typography:** A clean sans-serif font family (e.g., Inter, Source Sans Pro, or Open Sans) for body text. A slightly bolder or distinctive heading font for hierarchy. Ensure accessibility compliance with WCAG 2.1 AA contrast ratios.

**Imagery:** Use original project diagrams, framework figures, and data visualizations wherever possible. Stock photography should be minimal and limited to contextual clinical settings if needed. Consortium partner logos should be displayed consistently.

**Tone:** Professional, accessible, scientifically rigorous but not impenetrable. The site should be equally comfortable for an NCI program officer reviewing milestones and a patient advocate exploring how the research benefits communities.

## **6.2 Responsive Design Requirements**

* Desktop-first design optimized for 1280px and above, with graceful degradation to tablet (768px) and mobile (375px).  
* Navigation should collapse to a hamburger menu on mobile.  
* Data tables and diagrams should be horizontally scrollable on small screens.  
* All interactive elements must be touch-friendly on mobile devices.

## **6.3 Accessibility Requirements**

* WCAG 2.1 Level AA compliance at minimum.  
* All images must have descriptive alt text, particularly for scientific diagrams and data visualizations.  
* Keyboard navigation support for all interactive elements.  
* Screen reader compatibility testing before launch.  
* Color choices must not rely on color alone to convey information.

# **7\. Technical Architecture**

## **7.1 Recommended Technology Stack**

The website should use a static site generator or modern framework that enables fast page loads, easy content updates by non-developers, and low maintenance overhead. The following approaches are recommended, in order of preference:

| Option | Technology | Rationale |
| :---- | :---- | :---- |
| **Option A (Recommended)** | Hugo or Jekyll static site generator, deployed via GitHub Pages or Netlify, Markdown-based content | Free hosting, Git-based workflow familiar to the team, fast performance, minimal maintenance, integrates naturally with existing GitHub repository |
| **Option B** | Next.js or Astro with headless CMS (Contentful, Sanity, or Notion as CMS), deployed on Vercel | More dynamic capability, easier non-technical editing, better for complex interactive visualizations, but higher maintenance and cost |
| **Option C** | WordPress with academic theme, institutional hosting | Lowest technical barrier for content updates, but higher security maintenance and less developer-friendly |

## **7.2 Hosting and Deployment**

* Domain: Acquire mefinder.org or mefinder.emory.edu (coordinate with Emory IT for subdomain allocation).  
* SSL: HTTPS required on all pages.  
* CDN: Use a content delivery network for static assets (built-in with GitHub Pages/Netlify/Vercel).  
* CI/CD: Automatic deployment on merge to main branch via GitHub Actions.  
* Uptime monitoring: Set up basic uptime checks (UptimeRobot or similar free service).

## **7.3 Content Management**

* Publications list should be manageable via a structured data file (YAML, JSON, or BibTeX) so that team members can add entries without editing HTML.  
* News posts should be authored in Markdown with frontmatter metadata (title, date, category, author, featured image).  
* Team member profiles should be data-driven (JSON or YAML) to simplify additions and updates.  
* Tool catalog entries should follow a standardized schema to ensure consistency.

## **7.4 Analytics and Privacy**

* Privacy-respecting analytics: Plausible, Fathom, or privacy-configured Google Analytics (no cookie banners required with Plausible/Fathom).  
* No third-party trackers, advertising pixels, or social media tracking scripts.  
* Contact form data handled via a simple backend (Formspree, Netlify Forms) with data retained per Emory’s data handling policies.

# **8\. Content Strategy**

## **8.1 Content Development Plan**

The following content must be created or adapted for the website launch. Sources include existing presentation slides, monthly progress reports, published manuscripts, and the project’s GitHub repository.

| Content Item | Source Material | Owner | Priority |
| :---- | :---- | :---- | :---- |
| Project overview text | Grant aims, slides | PI / Coordinator | P0 (Launch) |
| Team bios and headshots | Investigators | Each investigator | P0 (Launch) |
| Use case descriptions | Monthly reports, slides | Use case leads | P0 (Launch) |
| Tool catalog entries | GitHub repo, slides | Software developer | P0 (Launch) |
| Framework diagrams | Presentation figures | Design / Coordinator | P0 (Launch) |
| Publications list | Published papers | Coordinator | P0 (Launch) |
| Interactive consortium map | Dataset distribution slide | Developer | P1 (Post-launch) |
| Milestone timeline visualization | Milestone slides, Gantt chart | Developer | P1 (Post-launch) |
| Stakeholder engagement portal | Focus group planning docs | Engagement lead | P2 (Phase 2\) |

## **8.2 Content Maintenance Schedule**

* **Weekly:** News posts as warranted by milestones, publications, or events.  
* **Monthly:** Publications list update, tool catalog refresh aligned with monthly progress reports.  
* **Quarterly:** Team page review, use case descriptions updated with latest results, milestone tracker updated.  
* **Annually:** Full content audit, design refresh assessment, analytics review.

## **8.3 Plain-Language Summaries**

Every technical page should include a “Plain-Language Summary” section at the top, written for a general audience. This satisfies NIH’s public communication expectations and serves patient advocates and non-specialist visitors. The technical detail should follow below for expert readers.

# **9\. Functional Requirements**

## **9.1 Core Features (Launch)**

* Responsive navigation with clear hierarchy and breadcrumb trail.  
* Search functionality across all content (publications, tools, news).  
* Publication list with DOI links, expandable abstracts, and filtering by use case, year, and type.  
* Tool catalog with structured entries linking to GitHub, documentation, and citation information.  
* Contact form with anti-spam protection (honeypot or simple CAPTCHA).  
* Consortium partner logo display with links to institutional pages.  
* NCI funding acknowledgment in the footer on every page.

## **9.2 Enhanced Features (Post-Launch)**

* Interactive consortium map showing site locations with dataset tooltips.  
* Milestone progress tracker with visual completion indicators.  
* BibTeX export for individual or batch publications.  
* Dark mode toggle for accessibility and preference.  
* Embedded GitHub activity feed or commit summary for the central repository.  
* Interactive data visualizations for preliminary results (e.g., fusion performance charts).

## **9.3 Stakeholder Engagement Features (Phase 2\)**

* Focus group interest form and information page.  
* Usability study participation portal (for clinician, collaborator, and stakeholder feedback on the open-source framework).  
* Newsletter signup for quarterly project updates.  
* Event calendar for upcoming presentations, meetings, or webinars.

# **10\. SEO and Discoverability**

* All pages must have unique, descriptive title tags and meta descriptions.  
* Schema.org structured data markup for the organization (ResearchProject), team members (Person), and publications (ScholarlyArticle).  
* Open Graph and Twitter Card metadata for social sharing.  
* XML sitemap submitted to search engines.  
* Canonical URLs to prevent duplicate content issues.  
* Internal linking strategy connecting use cases to relevant tools and publications.  
* Alt text on all images, especially scientific diagrams, serves both accessibility and SEO.

# **11\. Launch Plan and Timeline**

## **11.1 Development Phases**

| Phase | Duration | Deliverables | Dependencies |
| :---- | :---- | :---- | :---- |
| **Phase 1: Setup** | 2 weeks | Domain acquisition, hosting setup, repo scaffolding, base theme/template | Domain decision, hosting account |
| **Phase 2: Core Pages** | 4 weeks | Home, About (all sub-pages), Research (all sub-pages), Contact page, responsive navigation | Content from team (bios, photos, diagrams) |
| **Phase 3: Tools & Pubs** | 3 weeks | Tools & Data section, Publications page with filtering, GitHub integration | Tool catalog data, publication list in structured format |
| **Phase 4: Polish & QA** | 2 weeks | Cross-browser testing, accessibility audit, content review, SEO setup, analytics integration | Review feedback from PI and team |
| **Phase 5: Launch** | 1 week | Soft launch to team, feedback incorporation, public launch, social media announcement | PI approval |

**Estimated Total:** 12 weeks from kickoff to public launch.

## **11.2 Post-Launch Roadmap**

* **Month 1–2 Post-Launch:** Interactive consortium map, milestone progress tracker, first round of news posts.  
* **Month 3–4 Post-Launch:** BibTeX export, dark mode, embedded GitHub activity.  
* **Month 5–6 Post-Launch:** Stakeholder engagement portal, newsletter integration, interactive data visualizations.

# **12\. Governance and Maintenance**

## **12.1 Content Ownership**

**Site Owner:** PI (Dr. Judy Gichoya) has final approval on all published content.

**Content Manager:** Project coordinator responsible for routine updates (publications, news, tool entries).

**Technical Maintainer:** Software developer manages deployments, dependency updates, and technical issues.

**Content Contributors:** Each use case lead is responsible for keeping their research section current. Investigators provide and approve their own bios and headshots.

## **12.2 Review and Approval Process**

* New research content or results must be reviewed by the relevant use case lead before publication.  
* News posts and updates require PI or coordinator sign-off.  
* Technical tool entries are verified by the developing team before listing.  
* A quarterly content audit ensures accuracy and currency of all published material.

## **12.3 Compliance and Acknowledgments**

Every page must include the NCI U01 award acknowledgment in the footer. The NIH Data Management and Sharing Plan commitments regarding open-source code, derived features, and data sharing through TCIA, Zenodo, and GitHub must be reflected accurately in the Tools & Data section. All content must comply with Emory University’s institutional policies on research communication and NIH’s public access requirements.

# **13\. Risks and Mitigations**

| Risk | Impact | Mitigation |
| :---- | :---- | :---- |
| Delayed content delivery from investigators | Launch delay, incomplete pages | Establish content deadlines 4 weeks before launch; use placeholder content with \[TBD\] markers |
| Headshots and bios not provided | Incomplete team page | Set early deadline; use institutional directory photos as fallback; allow self-service updates post-launch |
| Stale content after launch | Reduced credibility | Monthly update schedule aligned with progress reports; assign content ownership by section |
| Accessibility non-compliance | Excludes users; legal risk | Accessibility audit in Phase 4; automated testing with axe-core or Lighthouse |
| Security vulnerabilities | Data breach, reputation damage | Static site minimizes attack surface; HTTPS enforced; no user accounts or stored PII beyond contact forms |

# **14\. Appendices**

## **Appendix A: Key Repository and Data Links**

* **Central GitHub Repository:** github.com/Emory-Empathathetic-AI-for-Health-Inst/Multimodal-Multi-scale-Framework-for-Ethical-AI-Model-Development  
* **TCIA:** The Cancer Imaging Archive (public datasets)  
* **Zenodo:** Open-access data and code archival  
* **EMBED Dataset:** Emory Breast Imaging Dataset v2

## **Appendix B: Data Standards Referenced**

* **DICOM:** Digital Imaging and Communications in Medicine  
* **HL7 FHIR:** Health Level Seven Fast Healthcare Interoperability Resources  
* **ICD-10:** International Classification of Diseases, 10th Revision  
* **PI-RADS v2.1:** Prostate Imaging Reporting and Data System  
* **IBSI:** Image Biomarker Standardization Initiative

## **Appendix C: Named Tools Referenced in This Specification**

| Tool Name | Description |
| :---- | :---- |
| **HistoQC** | Pathology quality analysis tool with thousands of downloads |
| **F-SYN** | Fourier-based spatial image normalization for pathology, avoids generative adversarial network artifacts |
| **MQUAL** | MRI quality assessment tool |
| **Beaks** | Quality assessment for radiology and pathology images |
| **APIC** | AI-based Pathology Image Classifier for tumor-immune interaction and treatment benefit prediction |
| **MamoCLIP** | Federated contrastive learning for mammography |
| **ProstateNet** | TZ/PZ segmentation for prostate MRI |
| **PyComBatch** | Batch effect harmonization for MRI features across institutions |
| **HemaToMe** | Multimodal fusion framework for hematology and beyond |
| **MOSCARD** | Causal reasoning and de-confounding for multimodal opportunistic screening (MICCAI 2025\) |

*— End of Document —*