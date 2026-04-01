export type ToolCategory =
  | 'Multimodal Fusion'
  | 'NLP & Clinical Text'
  | 'Data Infrastructure'
  | 'Prostate Cancer'

export interface Tool {
  name: string
  category: ToolCategory
  description: string
  details: string
  venue?: string
  metrics?: string
  availability: string
  installCmd?: string
  githubUrl?: string
  tags: string[]
}

export const tools: Tool[] = [
  // ── Multimodal Fusion ──────────────────────────────────────────────────────
  {
    name: 'MOSCARD',
    category: 'Multimodal Fusion',
    description:
      'Addresses bias in multimodal medical imaging by integrating causal reasoning.',
    details:
      'Uses chest X-ray (CXR) as primary modality and ECG as complementary guiding modality. Employs a co-attention mechanism and Vision Transformer (ViT)/MedCLIP encoder. Includes a structural causal model (SCM) for de-confounding. Supports four training modes: Baseline, Causal, Conf, and CaConf. Code available in repository.',
    venue: 'MICCAI 2025',
    availability: 'GitHub',
    tags: ['Framework', 'Causal AI'],
  },
  {
    name: 'VLM for Mammography',
    category: 'Multimodal Fusion',
    description:
      'Knowledge-grounded adaptation strategy for vision-language models for screening mammography.',
    details:
      'Builds unique case-sets for screening mammography using mini-batch selective sampling for VLM adaptation. Evaluated with two VLMs: MedCLIP (in-domain) and ALBEF (out-of-domain). Validated zero-shot, few-shot, and supervised on UW Madison datasets and externally on Mayo Clinic. Authors include Aisha Urooj Khan et al. Model checkpoints available via download link.',
    venue: 'MICCAI 2024',
    availability: 'GitHub; model checkpoints via download link',
    tags: ['Breast Cancer', 'Vision-Language'],
  },
  {
    name: 'MM-STGNN',
    category: 'Multimodal Fusion',
    description:
      'Multimodal spatiotemporal graph neural network for 30-day all-cause hospital readmission prediction.',
    details:
      'Fuses longitudinal chest radiographs and EHR data using a GraphSAGE + GRU architecture. Achieved AUROC 0.79 on both evaluation datasets (MIMIC-IV). Code available in repository.',
    venue: 'IEEE Journal of Biomedical and Health Informatics, 2023',
    metrics: 'AUROC 0.79 (MIMIC-IV)',
    availability: 'GitHub',
    tags: ['Framework', 'Multimodal Fusion'],
  },

  // ── NLP & Clinical Text ────────────────────────────────────────────────────
  {
    name: 'BreastRecurrence_Transformer',
    category: 'NLP & Clinical Text',
    description:
      'Transformer-based NLP for identification of breast cancer recurrence occurrence and timing from EMRs.',
    details:
      'Adaptable to other cancer sites. Validated on Mayo, Stanford, Emory, and UC Davis. Released with an academic open-source license and packaged in Docker. Model weights available via Google Drive.',
    availability: 'Google Drive (model weights); Docker',
    tags: ['Breast Cancer', 'NLP'],
  },
  {
    name: 'Breast Cancer Treatment Extraction',
    category: 'NLP & Clinical Text',
    description:
      'Hybrid UMLS parser + fine-tuned LLM for extracting longitudinal treatment timelines from free-text clinical notes.',
    details:
      'Combines a UMLS-based parser with fine-tuned language models (GPT-2, BioGPT, LLaMA) to extract structured treatment timelines from unstructured clinical notes. Validated on Mayo, Stanford, Emory, and UC Davis. Released with an academic open-source license and packaged in Docker.',
    availability: 'GitHub; Docker',
    tags: ['Breast Cancer', 'NLP'],
  },
  {
    name: 'PCO Extraction',
    category: 'NLP & Clinical Text',
    description:
      'Fine-tuning framework for LLMs to extract patient-centered outcomes from breast cancer clinical notes.',
    details:
      'Extracts treatment-related side effects including fatigue, depression, anxiety, nausea, and lymphedema from breast cancer clinical notes. Validated on Mayo, Stanford, Emory, and UC Davis. Released with an academic open-source license and packaged in Docker.',
    availability: 'GitHub; Docker',
    tags: ['Breast Cancer', 'NLP'],
  },
  {
    name: 'Recurrence Site Extraction (BioLinkBERT)',
    category: 'NLP & Clinical Text',
    description:
      'Fine-tuned BioLinkBERT model for extracting sites of distant recurrence from clinical, radiology, and pathology notes.',
    details:
      'Fine-tuned on annotated clinical, radiology, and pathology notes to identify distant recurrence sites. Validated on Mayo, Stanford, Emory, and UC Davis. Released with an academic open-source license and packaged in Docker.',
    availability: 'GitHub; Docker',
    tags: ['Breast Cancer', 'NLP'],
  },

  // ── Data Infrastructure ────────────────────────────────────────────────────
  {
    name: 'Mammogram Implant Identifier',
    category: 'Data Infrastructure',
    description:
      'ResNet18 CNN that identifies breast implants in mammograms without relying on DICOM tags.',
    details:
      'Trained on 6,250 mammograms (5,000 train/validate, 1,250 test). Does not rely on DICOM metadata tags. Model weights available in repository.',
    metrics: 'AUROC 0.998 · Sensitivity 0.966 · Specificity 1.000',
    availability: 'GitHub (model weights in repository)',
    tags: ['Breast Cancer', 'Data Infrastructure'],
  },
  {
    name: 'Niffler',
    category: 'Data Infrastructure',
    description:
      'DICOM framework for machine learning pipelines enabling real-time and on-demand DICOM retrieval from PACS.',
    details:
      'Enables real-time and on-demand DICOM retrieval from PACS, metadata extraction, anonymization, and processing workflows. Published in the Journal of Digital Imaging (JDI), 2021.',
    venue: 'Journal of Digital Imaging (JDI), 2021',
    availability: 'GitHub',
    githubUrl: 'https://github.com/Emory-HITI/Niffler',
    tags: ['Framework', 'Data Infrastructure'],
  },
  {
    name: 'HITI-Preproc',
    category: 'Data Infrastructure',
    description: 'Python package for DICOM preprocessing workflows.',
    details:
      'Provides standardized DICOM preprocessing utilities installable directly via PyPI.',
    availability: 'PyPI',
    installCmd: 'pip install hiti-preproc',
    tags: ['Data Infrastructure'],
  },
  {
    name: 'RadPrompter',
    category: 'Data Infrastructure',
    description:
      'Tool for simplified and reproducible LLM prompting for structured radiology reporting and dataset relabeling.',
    details:
      'Provides a reproducible interface for prompting large language models to generate structured radiology reports and relabel datasets. Installable via PyPI.',
    availability: 'PyPI',
    installCmd: 'pip install radprompter',
    tags: ['Framework', 'Data Infrastructure'],
  },

  // ── Prostate Cancer ────────────────────────────────────────────────────────
  {
    name: 'Prostate Cancer Lesion Detection (nnU-Net)',
    category: 'Prostate Cancer',
    description:
      'nnU-Net-based framework for prostate cancer lesion detection.',
    details:
      'Developed at Indiana University (Shiradkar Lab). Trained on the PI-CAI and Prostate-158 datasets. Model weights available on request from the authors.',
    availability: 'Request from authors (Indiana University, Shiradkar Lab)',
    tags: ['Prostate Cancer'],
  },
  {
    name: 'PI-QUAL vs MRQy Comparison',
    category: 'Prostate Cancer',
    description:
      'Code and analysis for prostate MRI quality assessment comparing PI-QUAL and MRQy quality metrics.',
    details:
      'Compares PI-QUAL and MRQy quality metrics for prostate MRI. Uses UMAP clustering, V-Net segmentation, and VoxelMorph deformable registration for analysis.',
    availability: 'GitHub',
    tags: ['Prostate Cancer', 'Data Infrastructure'],
  },
]
