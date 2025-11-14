import type {
  Module,
  NormalTissue,
  CellInjury,
  Inflammation,
  MolecularPathway,
  IHCMarker,
  IHCPanel,
  Interactive,
  Assessment,
  IntegratedCase,
  GlossaryTerm,
} from './types'

// Normal Tissues
export const normalTissues: NormalTissue[] = [
  {
    id: 'nt-001',
    name: 'Stratified Squamous Epithelium',
    type: 'epithelial',
    organ: 'Esophagus',
    description: 'Non-keratinized stratified squamous epithelium forming a protective barrier',
    histologicFeatures: [
      'Multiple cell layers',
      'Basal cells with high nuclear:cytoplasmic ratio',
      'Progressive flattening toward surface',
      'No keratin layer (non-keratinized)',
    ],
    cellTypes: ['Basal cells', 'Parabasal cells', 'Superficial squamous cells'],
    functions: ['Protection from mechanical stress', 'Barrier function', 'Renewal capacity'],
  },
  {
    id: 'nt-002',
    name: 'Simple Columnar Epithelium',
    type: 'epithelial',
    organ: 'Intestine',
    description: 'Single layer of columnar cells with absorptive function',
    histologicFeatures: [
      'Single cell layer',
      'Columnar (tall) cell shape',
      'Basally located nuclei',
      'Microvilli (brush border)',
      'Goblet cells interspersed',
    ],
    cellTypes: ['Enterocytes', 'Goblet cells', 'Enteroendocrine cells', 'Paneth cells'],
    functions: ['Absorption', 'Secretion', 'Barrier function'],
  },
]

// Cell Injury Examples
export const cellInjuries: CellInjury[] = [
  {
    id: 'ci-001',
    name: 'Reversible Hypoxic Injury',
    type: 'reversible',
    triggers: ['Hypoxia', 'Ischemia (short duration)', 'ATP depletion'],
    morphologicChanges: [
      'Cellular swelling',
      'Plasma membrane blebbing',
      'Loss of microvilli',
      'Mitochondrial swelling',
      'ER dilation',
      'Chromatin clumping',
    ],
    molecularMechanisms: [
      'ATP depletion → Na⁺/K⁺-ATPase failure',
      'Na⁺ and water influx',
      'Ca²⁺ influx',
      'Ribosomal detachment',
      'Anaerobic glycolysis → lactic acid',
    ],
    reversibility: true,
    timeframe: 'Minutes to hours',
    clinicalExamples: ['Myocardial ischemia (angina)', 'Renal tubular injury', 'Hepatocyte swelling'],
  },
  {
    id: 'ci-002',
    name: 'Coagulative Necrosis',
    type: 'necrosis',
    necrosisType: 'coagulative',
    triggers: ['Severe hypoxia', 'Ischemia (prolonged)', 'Toxins'],
    morphologicChanges: [
      'Preservation of tissue architecture',
      'Cell outlines remain visible',
      'Nuclear changes: pyknosis → karyorrhexis → karyolysis',
      'Increased eosinophilia',
      'Loss of nuclei (ghost cells)',
    ],
    molecularMechanisms: [
      'Protein denaturation',
      'Enzyme inactivation',
      'Irreversible mitochondrial damage',
      'Membrane breakdown',
      'DNA degradation',
    ],
    reversibility: false,
    timeframe: 'Hours to days',
    clinicalExamples: ['Myocardial infarction', 'Renal infarction', 'Splenic infarction'],
  },
  {
    id: 'ci-003',
    name: 'Liquefactive Necrosis',
    type: 'necrosis',
    necrosisType: 'liquefactive',
    triggers: ['Bacterial infection', 'Fungal infection', 'Brain infarction'],
    morphologicChanges: [
      'Complete tissue dissolution',
      'Abscess formation',
      'Abundant neutrophils',
      'Liquefied debris',
      'Loss of architecture',
    ],
    molecularMechanisms: [
      'Hydrolytic enzyme release',
      'Neutrophil enzyme activity',
      'Lysosomal enzyme digestion',
      'Complete protein breakdown',
    ],
    reversibility: false,
    timeframe: 'Days',
    clinicalExamples: ['Brain infarction', 'Abscess', 'Bacterial pneumonia'],
  },
]

// Inflammation Examples
export const inflammations: Inflammation[] = [
  {
    id: 'inf-001',
    name: 'Acute Inflammation',
    type: 'acute',
    triggers: ['Infection', 'Trauma', 'Tissue necrosis', 'Foreign bodies'],
    mediators: [
      'Histamine',
      'Serotonin',
      'Prostaglandins',
      'Leukotrienes',
      'IL-1',
      'TNF-α',
      'Complement (C3a, C5a)',
    ],
    cellsInvolved: ['Neutrophils (predominant)', 'Macrophages', 'Mast cells'],
    histologicFeatures: [
      'Neutrophilic infiltrate',
      'Vascular dilation',
      'Edema',
      'Fibrin deposition',
      'Tissue destruction',
    ],
    duration: 'Minutes to days',
    outcomes: ['Complete resolution', 'Abscess formation', 'Progression to chronic', 'Scarring'],
    clinicalExamples: ['Acute appendicitis', 'Lobar pneumonia', 'Acute pyelonephritis'],
  },
  {
    id: 'inf-002',
    name: 'Chronic Inflammation',
    type: 'chronic',
    triggers: [
      'Persistent infection',
      'Prolonged toxin exposure',
      'Autoimmune disease',
      'Foreign material',
    ],
    mediators: [
      'IFN-γ',
      'IL-12',
      'IL-17',
      'Growth factors (PDGF, FGF, TGF-β)',
    ],
    cellsInvolved: ['Macrophages', 'Lymphocytes', 'Plasma cells', 'Fibroblasts'],
    histologicFeatures: [
      'Mononuclear infiltrate',
      'Tissue destruction',
      'Angiogenesis',
      'Fibrosis',
      'Granulation tissue',
    ],
    duration: 'Weeks to years',
    outcomes: ['Fibrosis', 'Tissue destruction', 'Organ dysfunction'],
    clinicalExamples: ['Chronic gastritis', 'Rheumatoid arthritis', 'Tuberculosis', 'Crohn disease'],
  },
  {
    id: 'inf-003',
    name: 'Granulomatous Inflammation',
    type: 'granulomatous',
    triggers: [
      'Mycobacterial infection (TB)',
      'Fungal infection',
      'Foreign body',
      'Sarcoidosis',
      'Crohn disease',
    ],
    mediators: [
      'IFN-γ',
      'IL-12',
      'TNF-α',
      'IL-1',
    ],
    cellsInvolved: [
      'Epithelioid macrophages',
      'Multinucleated giant cells',
      'Lymphocytes',
      'Fibroblasts',
    ],
    histologicFeatures: [
      'Well-formed granulomas',
      'Central necrosis (caseating) or no necrosis (non-caseating)',
      'Epithelioid macrophages',
      'Langhans or foreign body giant cells',
      'Lymphocyte rim',
    ],
    duration: 'Weeks to years',
    outcomes: ['Fibrosis', 'Calcification', 'Cavitation'],
    clinicalExamples: ['Tuberculosis', 'Sarcoidosis', 'Crohn disease', 'Foreign body reaction'],
  },
]

// Molecular Pathways
export const molecularPathways: MolecularPathway[] = [
  {
    id: 'mp-001',
    name: 'p53 Pathway',
    description: 'Guardian of the genome - tumor suppressor pathway',
    components: [
      {
        name: 'TP53',
        type: 'gene',
        function: 'Encodes p53 protein, transcription factor',
        mutations: ['Missense (most common)', 'Deletion', 'Nonsense'],
      },
      {
        name: 'p53 protein',
        type: 'protein',
        function: 'Cell cycle arrest, DNA repair, apoptosis',
        therapeuticTargets: ['MDM2 inhibitors', 'p53 reactivation compounds'],
      },
      {
        name: 'MDM2',
        type: 'protein',
        function: 'Negative regulator of p53',
      },
    ],
    normalFunction: 'Responds to DNA damage by inducing cell cycle arrest, DNA repair, or apoptosis',
    diseaseAssociations: [
      'Li-Fraumeni syndrome',
      'Most human cancers (>50%)',
      'Colorectal carcinoma',
      'Lung carcinoma',
      'Breast carcinoma',
    ],
    morphologicCorrelates: [
      'Loss of normal growth control',
      'Increased mitotic activity',
      'Nuclear atypia',
      'Resistance to apoptosis',
    ],
  },
  {
    id: 'mp-002',
    name: 'RAS-MAPK Pathway',
    description: 'Growth factor signaling pathway frequently dysregulated in cancer',
    components: [
      {
        name: 'KRAS',
        type: 'gene',
        function: 'GTPase signal transducer',
        mutations: ['Codon 12', 'Codon 13', 'Codon 61'],
        therapeuticTargets: ['KRAS G12C inhibitors'],
      },
      {
        name: 'BRAF',
        type: 'gene',
        function: 'Serine/threonine kinase',
        mutations: ['V600E (most common)', 'V600K'],
        therapeuticTargets: ['BRAF inhibitors (vemurafenib)', 'MEK inhibitors'],
      },
      {
        name: 'MEK',
        type: 'protein',
        function: 'Downstream kinase',
        therapeuticTargets: ['Trametinib', 'Cobimetinib'],
      },
    ],
    normalFunction: 'Transmits growth factor signals from cell surface to nucleus',
    diseaseAssociations: [
      'Colorectal carcinoma (KRAS)',
      'Pancreatic adenocarcinoma (KRAS)',
      'Melanoma (BRAF)',
      'Lung adenocarcinoma (KRAS)',
    ],
    morphologicCorrelates: [
      'Uncontrolled proliferation',
      'Loss of contact inhibition',
      'Increased nuclear:cytoplasmic ratio',
    ],
  },
]

// IHC Markers
export const ihcMarkers: IHCMarker[] = [
  {
    id: 'ihc-001',
    name: 'CK7',
    fullName: 'Cytokeratin 7',
    markerType: 'lineage',
    stainedStructures: ['Cytoplasm'],
    positiveIn: [
      'Lung adenocarcinoma',
      'Ovarian carcinoma',
      'Breast carcinoma',
      'Cholangiocarcinoma',
      'Transitional cell carcinoma',
    ],
    negativeIn: [
      'Colorectal carcinoma',
      'Hepatocellular carcinoma',
      'Prostate carcinoma',
      'Squamous cell carcinoma (most)',
    ],
    interpretation: 'Epithelial lineage marker, useful in carcinoma of unknown primary',
    pitfalls: ['Variable staining in some tumors', 'Can be positive in mesothelioma'],
    clinicalUtility: 'Part of CK7/CK20 panel for carcinoma classification',
  },
  {
    id: 'ihc-002',
    name: 'CK20',
    fullName: 'Cytokeratin 20',
    markerType: 'lineage',
    stainedStructures: ['Cytoplasm'],
    positiveIn: [
      'Colorectal carcinoma',
      'Transitional cell carcinoma',
      'Merkel cell carcinoma',
      'Gastric carcinoma',
    ],
    negativeIn: [
      'Lung adenocarcinoma',
      'Breast carcinoma',
      'Ovarian carcinoma',
      'Prostate carcinoma',
    ],
    interpretation: 'Epithelial marker with GI/urothelial preference',
    pitfalls: ['Not entirely specific', 'Pattern matters (diffuse vs focal)'],
    clinicalUtility: 'Part of CK7/CK20 panel for carcinoma classification',
  },
  {
    id: 'ihc-003',
    name: 'Ki-67',
    fullName: 'Ki-67 (MKI67)',
    markerType: 'proliferation',
    stainedStructures: ['Nucleus'],
    positiveIn: ['Proliferating cells (all phases except G0)'],
    negativeIn: ['Quiescent cells (G0)'],
    interpretation: 'Proliferation index - percentage of positive nuclei',
    pitfalls: [
      'Variability in counting methods',
      'Hot spots vs overall average',
      'Fixation dependent',
    ],
    clinicalUtility: 'Grading (breast, neuroendocrine), prognosis, proliferative activity',
  },
]

// IHC Panels
export const ihcPanels: IHCPanel[] = [
  {
    id: 'panel-001',
    name: 'Carcinoma of Unknown Primary - Initial Panel',
    purpose: 'Determine primary site of metastatic carcinoma',
    markers: ['ihc-001', 'ihc-002'], // CK7, CK20
    expectedResults: [
      {
        diagnosis: 'Colorectal origin likely',
        pattern: { 'ihc-001': 'negative', 'ihc-002': 'positive' },
      },
      {
        diagnosis: 'Lung/Breast/Ovarian origin likely',
        pattern: { 'ihc-001': 'positive', 'ihc-002': 'negative' },
      },
      {
        diagnosis: 'Transitional cell carcinoma possible',
        pattern: { 'ihc-001': 'positive', 'ihc-002': 'positive' },
      },
      {
        diagnosis: 'Further workup needed',
        pattern: { 'ihc-001': 'negative', 'ihc-002': 'negative' },
      },
    ],
    clinicalContext: 'Metastatic adenocarcinoma, primary site unknown',
  },
]

// Glossary Terms
export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'gloss-001',
    term: 'Necrosis',
    category: 'morphology',
    definition:
      'Cell death characterized by cell swelling, membrane rupture, and inflammatory response',
    synonyms: ['Oncosis'],
    relatedTerms: ['Apoptosis', 'Coagulative necrosis', 'Liquefactive necrosis'],
    examples: ['Myocardial infarction', 'Abscess formation'],
  },
  {
    id: 'gloss-002',
    term: 'Apoptosis',
    category: 'mechanism',
    definition:
      'Programmed cell death characterized by cell shrinkage, chromatin condensation, and formation of apoptotic bodies without inflammation',
    synonyms: ['Programmed cell death'],
    relatedTerms: ['Necrosis', 'Caspases', 'Bcl-2'],
    examples: ['Embryonic development', 'Immune cell selection', 'p53-mediated cell death'],
  },
  {
    id: 'gloss-003',
    term: 'Granuloma',
    category: 'morphology',
    definition:
      'Organized collection of epithelioid macrophages, often with multinucleated giant cells',
    synonyms: [],
    relatedTerms: ['Epithelioid macrophages', 'Granulomatous inflammation', 'Giant cells'],
    examples: ['Tuberculosis', 'Sarcoidosis', 'Crohn disease'],
  },
  {
    id: 'gloss-004',
    term: 'Metaplasia',
    category: 'morphology',
    definition: 'Reversible change of one differentiated cell type to another',
    synonyms: [],
    relatedTerms: ['Dysplasia', 'Barrett esophagus', 'Squamous metaplasia'],
    examples: ['Barrett esophagus (squamous → columnar)', 'Smoker lung (columnar → squamous)'],
  },
  {
    id: 'gloss-005',
    term: 'Dysplasia',
    category: 'morphology',
    definition:
      'Disordered growth and maturation of cells, characterized by nuclear atypia and loss of normal architecture',
    synonyms: ['Intraepithelial neoplasia'],
    relatedTerms: ['Carcinoma in situ', 'Metaplasia', 'Neoplasia'],
    examples: ['Cervical dysplasia', 'Colonic dysplasia in IBD'],
  },
]

// Modules
export const modules: Module[] = [
  {
    id: 'mod-001',
    title: 'Normal Histology Foundations',
    description:
      'Master the normal microscopic anatomy of tissues - the foundation for recognizing pathology',
    prerequisites: [],
    learnerLevels: ['preclinical', 'clinical'],
    bloomLevel: 'understand',
    lessons: [
      {
        id: 'lesson-001',
        moduleId: 'mod-001',
        title: 'Epithelial Tissues',
        bloomLevel: 'understand',
        objectives: [
          'Identify major types of epithelial tissues',
          'Understand structural-functional relationships',
          'Recognize normal variants',
        ],
        content: [
          {
            type: 'text',
            content:
              '**Epithelial tissues** form the body\'s covering and lining surfaces. They\'re the first line of defense and the interface between body and environment.\n\n**Key Principle**: Form follows function - the structure of each epithelium perfectly matches its role.',
          },
          {
            type: 'text',
            content:
              '**Stratified Squamous Epithelium**\n\nFound in: Esophagus, skin (keratinized), vagina\n\n**Why multiple layers?** Protection from mechanical stress. Think about it - your esophagus faces constant abrasion from food. A single cell layer would be destroyed.\n\n**Key features:**\n- Basal layer: stem cells, high N:C ratio\n- Progressive flattening toward surface\n- Non-keratinized (esophagus) vs keratinized (skin)',
          },
        ],
        prerequisites: [],
        estimatedTime: 15,
        order: 1,
      },
    ],
    estimatedTime: 60,
    order: 1,
  },
  {
    id: 'mod-002',
    title: 'Cell Injury & Death',
    description:
      'Understand how cells respond to stress - from reversible injury to irreversible death',
    prerequisites: ['mod-001'],
    learnerLevels: ['preclinical', 'clinical', 'residency'],
    bloomLevel: 'analyze',
    lessons: [
      {
        id: 'lesson-002',
        moduleId: 'mod-002',
        title: 'Reversible vs Irreversible Injury',
        bloomLevel: 'analyze',
        objectives: [
          'Distinguish reversible from irreversible cell injury',
          'Map morphologic changes to molecular mechanisms',
          'Predict outcomes based on injury type and duration',
        ],
        content: [
          {
            type: 'text',
            content:
              '**The Critical Question**: When does reversible injury become irreversible?\n\n**Point of No Return**: Two critical events:\n1. Irreversible mitochondrial damage\n2. Profound membrane damage\n\nOnce these occur, the cell cannot recover even if oxygen returns.',
          },
          {
            type: 'text',
            content:
              '**Reversible Injury - The Cascade**\n\nTrigger: ATP depletion (hypoxia, ischemia)\n\n**Mechanism**:\n1. ATP ↓ → Na⁺/K⁺-ATPase fails\n2. Na⁺ accumulates intracellularly\n3. Water follows (osmosis)\n4. Cell swells → ER swells → blebs form\n\n**Morphology**:\n- Cellular swelling\n- Membrane blebs\n- Loss of microvilli\n- Mitochondrial swelling\n- Chromatin clumping\n\n**Key**: Architecture preserved, cell can recover if insult removed',
          },
        ],
        prerequisites: ['lesson-001'],
        estimatedTime: 20,
        order: 1,
      },
    ],
    estimatedTime: 90,
    order: 2,
  },
  {
    id: 'mod-003',
    title: 'Inflammation Spectrum',
    description: 'Master the inflammatory response from acute to chronic to granulomatous',
    prerequisites: ['mod-001'],
    learnerLevels: ['clinical', 'residency'],
    bloomLevel: 'apply',
    lessons: [],
    estimatedTime: 120,
    order: 3,
  },
]

// Assessments
export const assessments: Assessment[] = [
  {
    id: 'assess-001',
    moduleId: 'mod-002',
    type: 'mcq',
    question:
      'A 65-year-old man experiences chest pain for 20 minutes, which resolves. Myocardial biopsy would most likely show which finding?',
    options: [
      {
        id: 'a',
        text: 'Normal myocardium',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Cellular swelling and membrane blebs',
        isCorrect: true,
      },
      {
        id: 'c',
        text: 'Coagulative necrosis with preserved architecture',
        isCorrect: false,
      },
      {
        id: 'd',
        text: 'Complete tissue dissolution',
        isCorrect: false,
      },
    ],
    correctAnswer: 'b',
    rationale:
      '20 minutes of ischemia causes **reversible injury**. The morphologic hallmark is cellular swelling due to Na⁺/K⁺-ATPase failure. The injury is reversible because mitochondria are still viable. Coagulative necrosis requires longer ischemia (>20-30 min). The patient\'s symptoms resolved, suggesting reperfusion occurred before irreversible damage.',
    bloomLevel: 'apply',
    difficulty: 'medium',
  },
  {
    id: 'assess-002',
    moduleId: 'mod-002',
    type: 'mcq',
    question:
      'Which type of necrosis is characterized by preservation of tissue architecture despite cell death?',
    options: [
      {
        id: 'a',
        text: 'Liquefactive necrosis',
        isCorrect: false,
      },
      {
        id: 'b',
        text: 'Caseous necrosis',
        isCorrect: false,
      },
      {
        id: 'c',
        text: 'Coagulative necrosis',
        isCorrect: true,
      },
      {
        id: 'd',
        text: 'Fat necrosis',
        isCorrect: false,
      },
    ],
    correctAnswer: 'c',
    rationale:
      '**Coagulative necrosis** preserves tissue architecture because proteins denature but are not immediately digested. You can still see "ghost" outlines of cells. This is classic in ischemic injury (MI, renal infarct). Liquefactive necrosis completely dissolves tissue (brain infarct, abscess). Caseous has a cheese-like appearance (TB).',
    bloomLevel: 'remember',
    difficulty: 'easy',
  },
]

// Interactives
export const interactives: Interactive[] = [
  {
    id: 'int-001',
    type: 'cell-injury-model',
    title: 'Cell Injury Outcome Simulator',
    description: 'Explore how different injury parameters lead to reversible vs irreversible outcomes',
    purpose: 'Understand the molecular mechanisms determining cell fate after injury',
    inputs: [
      {
        id: 'atp-level',
        label: 'ATP Depletion (%)',
        type: 'slider',
        min: 0,
        max: 100,
        default: 0,
      },
      {
        id: 'ros-level',
        label: 'ROS Generation',
        type: 'slider',
        min: 0,
        max: 100,
        default: 0,
      },
      {
        id: 'calcium',
        label: 'Calcium Influx',
        type: 'slider',
        min: 0,
        max: 100,
        default: 0,
      },
      {
        id: 'duration',
        label: 'Injury Duration (minutes)',
        type: 'slider',
        min: 0,
        max: 120,
        default: 10,
      },
    ],
    presets: [
      {
        name: 'Brief Ischemia (Reversible)',
        description: '10 minutes of moderate ischemia - cell can recover',
        values: {
          'atp-level': 40,
          'ros-level': 30,
          'calcium': 25,
          'duration': 10,
        },
        expectedOutcome: 'Reversible injury with cellular swelling',
      },
      {
        name: 'Myocardial Infarction',
        description: 'Prolonged ischemia - irreversible damage',
        values: {
          'atp-level': 90,
          'ros-level': 80,
          'calcium': 85,
          'duration': 60,
        },
        expectedOutcome: 'Coagulative necrosis',
      },
    ],
    guardrails: [
      'ATP depletion >85% for >30min → irreversible',
      'Calcium overload triggers membrane damage',
      'ROS generation accelerates injury',
    ],
  },
  {
    id: 'int-002',
    type: 'inflammation-simulator',
    title: 'Inflammation Type Predictor',
    description: 'Adjust inflammatory mediators and see the resulting histologic pattern',
    purpose: 'Connect molecular mediators to morphologic outcomes in inflammation',
    inputs: [
      {
        id: 'neutrophil-mediators',
        label: 'Neutrophil Chemokines (IL-8, C5a)',
        type: 'slider',
        min: 0,
        max: 100,
        default: 0,
      },
      {
        id: 'macrophage-activation',
        label: 'Macrophage Activation (IFN-γ)',
        type: 'slider',
        min: 0,
        max: 100,
        default: 0,
      },
      {
        id: 'granuloma-signals',
        label: 'Granuloma Signals (IL-12, TNF-α)',
        type: 'slider',
        min: 0,
        max: 100,
        default: 0,
      },
    ],
    presets: [
      {
        name: 'Acute Bacterial Infection',
        description: 'High neutrophil recruitment',
        values: {
          'neutrophil-mediators': 90,
          'macrophage-activation': 20,
          'granuloma-signals': 10,
        },
        expectedOutcome: 'Acute inflammation with neutrophilic infiltrate',
      },
      {
        name: 'Tuberculosis',
        description: 'Granulomatous response to mycobacteria',
        values: {
          'neutrophil-mediators': 10,
          'macrophage-activation': 80,
          'granuloma-signals': 95,
        },
        expectedOutcome: 'Caseating granulomatous inflammation',
      },
    ],
    guardrails: [
      'High neutrophil signals → acute inflammation',
      'High granuloma signals + macrophage activation → granulomas',
      'Mixed signals → chronic inflammation',
    ],
  },
]

// Integrated Case
export const integratedCases: IntegratedCase[] = [
  {
    id: 'case-001',
    title: 'Chronic Smoker with Persistent Cough',
    patientPresentation:
      '58-year-old man, 40 pack-year smoking history, presents with persistent cough and hemoptysis',
    clinicalFindings: [
      'Weight loss (15 lbs over 3 months)',
      'Chronic cough with blood-tinged sputum',
      'No fever',
    ],
    labFindings: ['Mild anemia', 'Elevated ESR', 'Normal WBC'],
    imagingFindings: ['Chest CT: 4cm mass in right upper lobe', 'Hilar lymphadenopathy'],
    biopsyDescription:
      'Bronchoscopic biopsy shows malignant cells with glandular differentiation',
    morphologicFeatures: [
      'Malignant glands infiltrating stroma',
      'Nuclear atypia and pleomorphism',
      'Increased mitotic activity',
      'Desmoplastic stroma',
    ],
    ihcResults: {
      'TTF-1': 'positive',
      'Napsin A': 'positive',
      'CK7': 'positive',
      'CK20': 'negative',
      'p40': 'negative',
    },
    molecularResults: {
      'EGFR': 'Exon 19 deletion detected',
      'ALK': 'Negative',
      'PD-L1': '60% tumor proportion score',
    },
    mechanismExplanation:
      'Chronic tobacco exposure → carcinogen-induced DNA damage → **EGFR mutation** (exon 19 deletion) → constitutive activation of RAS-MAPK pathway → uncontrolled proliferation. The EGFR exon 19 deletion is a driver mutation in lung adenocarcinoma.',
    diagnosis: 'Lung Adenocarcinoma, EGFR-mutant',
    prognosis: 'Good response expected to EGFR tyrosine kinase inhibitor therapy',
    treatment: [
      'EGFR TKI (erlotinib, gefitinib, osimertinib)',
      'Staging for surgical resection',
      'Consider immunotherapy (high PD-L1)',
    ],
    learningPoints: [
      'TTF-1 and Napsin A are specific for lung adenocarcinoma',
      'CK7+/CK20- pattern supports lung origin',
      'EGFR mutations are targetable with TKIs',
      'Exon 19 deletions respond better than other EGFR mutations',
      'High PD-L1 suggests potential immunotherapy benefit',
    ],
    difficulty: 'advanced',
  },
]
