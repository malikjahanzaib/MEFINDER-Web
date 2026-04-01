export interface Publication {
  id: number
  title: string
  authors: string
  venue: string
  year: number
  doi?: string
  arxiv?: string
  tags: string[]
}

export const publications: Publication[] = [
  {
    id: 1,
    title:
      'Predicting 30-day all-cause hospital readmission using multimodal spatiotemporal graph neural networks.',
    authors:
      'Tang, Siyi, Amara Tariq, Jared A. Dunnmon, Umesh Sharma, Praneetha Elugunti, Daniel L. Rubin, Bhavik N. Patel, and Imon Banerjee.',
    venue: 'IEEE Journal of Biomedical and Health Informatics 27, no. 4 (2023): 2071–2082.',
    year: 2023,
    doi: 'https://ieeexplore.ieee.org/abstract/document/10016722',
    tags: ['Framework', 'Multimodal Fusion'],
  },
  {
    id: 2,
    title:
      'Knowledge-grounded Adaptation Strategy for Vision-language Models: Building a Unique Case-set for Screening Mammograms for Residents Training.',
    authors:
      'Khan, Aisha Urooj, John Garrett, Tyler Bradshaw, Lonie Salkowski, Jiwoong Jeong, Amara Tariq, and Imon Banerjee.',
    venue: 'MICCAI 2024.',
    year: 2024,
    arxiv: 'https://arxiv.org/abs/2405.19675',
    tags: ['Breast Cancer', 'Vision-Language'],
  },
  {
    id: 3,
    title:
      'A DICOM Framework for Machine Learning Pipelines against Real-Time Radiology Images.',
    authors:
      'Kathiravelu, Pradeeban, Puneet Sharma, Ashish Sharma, Imon Banerjee, Hari Trivedi, Saptarshi Purkayastha, Priyanshu Sinha, Alexandre Cadrin-Chenevert, Nabile Safdar, and Judy Wawira Gichoya.',
    venue: 'Journal of Digital Imaging (JDI), August 2021.',
    year: 2021,
    doi: 'https://doi.org/10.1007/s10278-021-00491-w',
    tags: ['Framework', 'Data Infrastructure'],
  },
  {
    id: 4,
    title: 'Understanding Scanner Utilization With Real-Time DICOM Metadata Extraction.',
    authors: 'Kathiravelu, Pradeeban, Ashish Sharma, and Puneet Sharma.',
    venue: 'IEEE Access 9 (2021): 10621–10633.',
    year: 2021,
    doi: 'https://doi.org/10.1109/ACCESS.2021.3050467',
    tags: ['Framework', 'Data Infrastructure'],
  },
  {
    id: 5,
    title:
      'MOSCARD: Addressing bias in multimodal medical imaging with causal reasoning.',
    authors: 'HITI Lab, Emory University.',
    venue: 'MICCAI 2025.',
    year: 2025,
    tags: ['Framework', 'Causal AI'],
  },
  {
    id: 6,
    title:
      'Fine-tuning LLMs for Treatment-Related Side Effect Extraction from Breast Cancer Clinical Notes.',
    authors: 'HITI Lab collaboration.',
    venue: 'JCO Clinical Cancer Informatics.',
    year: 2024,
    tags: ['Breast Cancer', 'NLP'],
  },
  {
    id: 7,
    title:
      'Hybrid Information Extraction for Longitudinal Breast Cancer Treatment Timelines from Clinical Notes.',
    authors: 'HITI Lab collaboration.',
    venue: 'JCO Clinical Cancer Informatics.',
    year: 2024,
    tags: ['Breast Cancer', 'NLP'],
  },
  {
    id: 8,
    title:
      'Automated Framework for Extracting Breast Cancer Recurrence Timeline and Sites from Free-Text Notes.',
    authors: 'HITI Lab collaboration.',
    venue: 'JCO Clinical Cancer Informatics.',
    year: 2024,
    tags: ['Breast Cancer', 'NLP'],
  },
]
