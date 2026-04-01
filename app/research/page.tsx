import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'

const nlpTools = [
  {
    name: 'BreastRecurrence_Transformer',
    description:
      'Transformer-based NLP for identification of breast cancer recurrence occurrence and timing from EMRs. Adaptable to other cancer sites.',
  },
  {
    name: 'Breast Cancer Treatment Extraction',
    description:
      'Hybrid UMLS parser + fine-tuned LLM (GPT-2/BioGPT/LLaMA) for extracting longitudinal treatment timelines from free-text clinical notes.',
  },
  {
    name: 'PCO Extraction',
    description:
      'Fine-tuning framework for LLMs to extract patient-centered outcomes (treatment-related side effects: fatigue, depression, anxiety, nausea, lymphedema) from breast cancer clinical notes.',
  },
  {
    name: 'Recurrence Site Extraction (BioLinkBERT)',
    description:
      'Fine-tuned BioLinkBERT model for extracting sites of distant recurrence from clinical, radiology, and pathology notes.',
  },
]

export default function ResearchPage() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />

      <PageHeader
        label="Our Research"
        heading="Multimodal AI frameworks for cancer phenotype discovery."
        subtext="MEFINDER develops and validates open-source computational frameworks that fuse imaging, pathology, and clinical text to discover patterns no single modality can reveal."
      />

      <div className="max-w-5xl mx-auto px-8 py-20">

        {/* Model 1 — MOSCARD */}
        <section className="border-b border-rule pb-16 mb-16">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-amber">
                Multimodal Fusion · MICCAI 2025
              </p>
              <h2 className="font-serif text-3xl text-ink mt-2">MOSCARD</h2>
            </div>
            <span className="font-sans text-xs uppercase tracking-wide border border-rule text-ink-light px-2 py-0.5 self-start mt-1">
              Causal AI
            </span>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="col-span-2 space-y-4">
              <p className="font-sans text-base text-ink leading-relaxed">
                MOSCARD addresses a core challenge in multimodal medical imaging: bias introduced
                when one modality systematically confounds another. By integrating causal reasoning
                directly into the fusion architecture, MOSCARD learns de-confounded representations
                that are more robust across patient populations and imaging conditions.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                The model uses chest X-ray (CXR) as the primary modality and ECG as a complementary
                guiding modality. A co-attention mechanism learns which regions of the CXR are most
                relevant given the ECG signal. Encoders based on Vision Transformer (ViT) and
                MedCLIP provide modality-specific representations.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                A structural causal model (SCM) is integrated into the training pipeline to
                explicitly model and remove confounding relationships between modalities. The
                framework supports four training modes: Baseline, Causal, Conf, and CaConf,
                enabling controlled ablation studies of each causal component.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-4">Architecture</p>
              <div className="space-y-3">
                {[
                  ['Primary modality', 'Chest X-ray (CXR)'],
                  ['Guiding modality', 'ECG'],
                  ['Encoder', 'ViT / MedCLIP'],
                  ['Fusion', 'Co-attention mechanism'],
                  ['Causal model', 'Structural causal model (SCM)'],
                  ['Training modes', 'Baseline, Causal, Conf, CaConf'],
                  ['Code', 'Available in repository'],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-rule pt-3">
                    <p className="font-sans text-xs text-ink-light">{k}</p>
                    <p className="font-sans text-sm text-ink mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Model 2 — VLM for Mammography */}
        <section className="border-b border-rule pb-16 mb-16">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-amber">
                Multimodal Fusion · MICCAI 2024
              </p>
              <h2 className="font-serif text-3xl text-ink mt-2">VLM for Mammography</h2>
            </div>
            <span className="font-sans text-xs uppercase tracking-wide border border-rule text-ink-light px-2 py-0.5 self-start mt-1">
              Vision-Language
            </span>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="col-span-2 space-y-4">
              <p className="font-sans text-base text-ink leading-relaxed">
                A knowledge-grounded adaptation strategy for vision-language models (VLMs) applied
                to screening mammography. The framework constructs unique case-sets designed for
                resident training and few-shot adaptation, addressing the challenge of limited
                annotated mammography data.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                Mini-batch selective sampling is used to build case-sets that maximize
                representational diversity within each adaptation batch. Two VLMs are evaluated:
                MedCLIP (in-domain, trained on medical imaging) and ALBEF (out-of-domain, trained
                on general vision-language pairs).
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                The approach is validated across zero-shot, few-shot, and supervised settings on
                UW Madison datasets, with external validation on Mayo Clinic. Authors include
                Aisha Urooj Khan, John Garrett, Tyler Bradshaw, Lonie Salkowski, Jiwoong Jeong,
                Amara Tariq, and Imon Banerjee. Code and model checkpoints are publicly available.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-4">Details</p>
              <div className="space-y-3">
                {[
                  ['Method', 'Mini-batch selective sampling'],
                  ['VLMs evaluated', 'MedCLIP (in-domain), ALBEF (out-of-domain)'],
                  ['Evaluation', 'Zero-shot, few-shot, supervised'],
                  ['Primary validation', 'UW Madison'],
                  ['External validation', 'Mayo Clinic'],
                  ['Code', 'Available in repository'],
                  ['Checkpoints', 'Available via download link'],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-rule pt-3">
                    <p className="font-sans text-xs text-ink-light">{k}</p>
                    <p className="font-sans text-sm text-ink mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Model 3 — MM-STGNN */}
        <section className="border-b border-rule pb-16 mb-16">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <p className="font-sans text-xs uppercase tracking-widest text-amber">
                Multimodal Fusion · IEEE J. Biomed. Health Informatics 2023
              </p>
              <h2 className="font-serif text-3xl text-ink mt-2">MM-STGNN</h2>
            </div>
            <span className="font-sans text-xs uppercase tracking-wide border border-rule text-ink-light px-2 py-0.5 self-start mt-1">
              Readmission Prediction
            </span>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-16">
            <div className="col-span-2 space-y-4">
              <p className="font-sans text-base text-ink leading-relaxed">
                A multimodal spatiotemporal graph neural network for predicting 30-day all-cause
                hospital readmission. MM-STGNN fuses two distinct data streams: longitudinal chest
                radiographs (capturing imaging trajectory over time) and electronic health records
                (capturing structured clinical measurements and events).
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                The architecture combines GraphSAGE for learning patient similarity graphs from
                the EHR modality with a Gated Recurrent Unit (GRU) for modeling temporal dynamics
                in both imaging and clinical sequences. A cross-modal attention mechanism aligns
                representations from the two modalities before final prediction.
              </p>
              <p className="font-sans text-base text-ink-light leading-relaxed">
                Evaluated on the MIMIC-IV dataset, MM-STGNN achieved AUROC 0.79 on both
                evaluation splits, demonstrating that fusing longitudinal imaging with EHR data
                provides a meaningful improvement over single-modality baselines. Authors include
                Siyi Tang, Amara Tariq, Jared A. Dunnmon, and Imon Banerjee, among others.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <p className="font-sans text-xs uppercase tracking-widest text-ink-light mb-4">Performance</p>
              <div className="space-y-3">
                {[
                  ['Task', '30-day all-cause readmission'],
                  ['Modalities', 'Chest X-ray + EHR'],
                  ['Architecture', 'GraphSAGE + GRU'],
                  ['Dataset', 'MIMIC-IV'],
                  ['AUROC', '0.79'],
                  ['Code', 'Available in repository'],
                ].map(([k, v]) => (
                  <div key={k} className="border-t border-rule pt-3">
                    <p className="font-sans text-xs text-ink-light">{k}</p>
                    <p className="font-sans text-sm text-ink mt-0.5">{v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* NLP Framework */}
        <section>
          <p className="font-sans text-xs uppercase tracking-widest text-ink-light">
            NLP Framework
          </p>
          <h2 className="font-serif text-3xl text-ink mt-2 mb-4">
            Breast cancer clinical text mining.
          </h2>
          <p className="font-sans text-base text-ink-light leading-relaxed max-w-2xl mb-12">
            Four NLP tools extract structured outcomes from free-text clinical notes. All tools are
            validated on data from Mayo Clinic, Stanford University, Emory University, and UC Davis.
            All are released with academic open-source licenses and packaged in Docker for
            reproducible deployment.
          </p>

          <div className="space-y-0">
            {nlpTools.map((tool, i) => (
              <div key={tool.name} className="border-t border-rule py-8 grid grid-cols-[60px_1fr] gap-6 items-start">
                <p className="font-serif text-4xl text-rule leading-none select-none">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <div>
                  <h3 className="font-serif text-xl text-ink">{tool.name}</h3>
                  <p className="font-sans text-sm text-ink-light mt-2 leading-relaxed max-w-xl">
                    {tool.description}
                  </p>
                  <p className="font-sans text-xs text-ink-light mt-3 uppercase tracking-wide">
                    Validated: Mayo Clinic · Stanford · Emory · UC Davis &nbsp;&middot;&nbsp; Docker packaged
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-rule"></div>
          </div>
        </section>

      </div>

      <Footer />
    </main>
  )
}
