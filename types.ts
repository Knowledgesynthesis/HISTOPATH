// Core Type Definitions for Histopath Lab

export type LearnerLevel = 'preclinical' | 'clinical' | 'residency' | 'fellowship' | 'attending'

export type BloomLevel = 'remember' | 'understand' | 'apply' | 'analyze' | 'evaluate' | 'create'

export type CellType = 'epithelial' | 'connective' | 'muscle' | 'nervous' | 'blood' | 'immune'

export type InjuryType = 'reversible' | 'necrosis' | 'apoptosis' | 'autophagy'

export type NecrosisType = 'coagulative' | 'liquefactive' | 'caseous' | 'fat' | 'fibrinoid' | 'gangrenous'

export type InflammationType = 'acute' | 'chronic' | 'granulomatous'

// Normal Tissue Structure
export interface NormalTissue {
  id: string
  name: string
  type: CellType
  organ: string
  description: string
  histologicFeatures: string[]
  cellTypes: string[]
  functions: string[]
  imageUrl?: string
}

// Cell Injury & Death
export interface CellInjury {
  id: string
  name: string
  type: InjuryType
  necrosisType?: NecrosisType
  triggers: string[]
  morphologicChanges: string[]
  molecularMechanisms: string[]
  reversibility: boolean
  timeframe: string
  clinicalExamples: string[]
}

// Inflammation
export interface Inflammation {
  id: string
  name: string
  type: InflammationType
  triggers: string[]
  mediators: string[]
  cellsInvolved: string[]
  histologicFeatures: string[]
  duration: string
  outcomes: string[]
  clinicalExamples: string[]
}

// Molecular Pathways
export interface MolecularPathway {
  id: string
  name: string
  description: string
  components: PathwayComponent[]
  normalFunction: string
  diseaseAssociations: string[]
  morphologicCorrelates: string[]
}

export interface PathwayComponent {
  name: string
  type: 'gene' | 'protein' | 'receptor' | 'signaling' | 'transcription'
  function: string
  mutations?: string[]
  therapeuticTargets?: string[]
}

// IHC Markers
export interface IHCMarker {
  id: string
  name: string
  fullName: string
  markerType: 'lineage' | 'differentiation' | 'proliferation' | 'prognostic' | 'therapeutic'
  stainedStructures: string[]
  positiveIn: string[]
  negativeIn: string[]
  interpretation: string
  pitfalls: string[]
  clinicalUtility: string
}

// IHC Panel
export interface IHCPanel {
  id: string
  name: string
  purpose: string
  markers: string[] // IHC marker IDs
  expectedResults: { diagnosis: string; pattern: Record<string, 'positive' | 'negative' | 'variable'> }[]
  clinicalContext: string
}

// Molecular Markers
export interface MolecularMarker {
  id: string
  gene: string
  alterationType: 'mutation' | 'amplification' | 'deletion' | 'translocation' | 'methylation'
  detectionMethod: string[]
  associatedDiseases: string[]
  prognosticSignificance: string
  therapeuticImplications: string[]
  frequency: string
}

// Neoplasia
export interface Neoplasm {
  id: string
  name: string
  classification: 'benign' | 'malignant'
  tissue: string
  histologicFeatures: string[]
  gradingSystem?: string
  stagingSystem?: string
  ihcProfile: string[] // IHC marker IDs
  molecularProfile: string[] // Molecular marker IDs
  prognosis: string
  treatment: string[]
}

// Module Structure
export interface Module {
  id: string
  title: string
  description: string
  prerequisites: string[] // Module IDs
  learnerLevels: LearnerLevel[]
  bloomLevel: BloomLevel
  lessons: Lesson[]
  estimatedTime: number // minutes
  order: number
}

// Lesson Structure
export interface Lesson {
  id: string
  moduleId: string
  title: string
  bloomLevel: BloomLevel
  objectives: string[]
  content: LessonContent[]
  prerequisites: string[] // Lesson IDs
  estimatedTime: number // minutes
  order: number
}

export interface LessonContent {
  type: 'text' | 'image' | 'diagram' | 'interactive' | 'case' | 'quiz'
  content: string
  caption?: string
  interactiveId?: string
}

// Interactive Components
export interface Interactive {
  id: string
  type: 'morphology-explorer' | 'inflammation-simulator' | 'cell-injury-model' | 'neoplasia-panel' | 'pathway-visualizer' | 'repair-demo'
  title: string
  description: string
  purpose: string
  inputs: InteractiveInput[]
  presets: InteractivePreset[]
  guardrails: string[]
}

export interface InteractiveInput {
  id: string
  label: string
  type: 'slider' | 'toggle' | 'select' | 'multi-select'
  options?: { value: string; label: string }[]
  min?: number
  max?: number
  default: any
}

export interface InteractivePreset {
  name: string
  description: string
  values: Record<string, any>
  expectedOutcome: string
}

// Assessment
export interface Assessment {
  id: string
  moduleId: string
  type: 'mcq' | 'matching' | 'drag-drop' | 'short-answer' | 'case-based'
  question: string
  options?: AssessmentOption[]
  correctAnswer: string | string[]
  rationale: string
  bloomLevel: BloomLevel
  difficulty: 'easy' | 'medium' | 'hard'
  imageUrl?: string
}

export interface AssessmentOption {
  id: string
  text: string
  isCorrect: boolean
}

// Integrated Case
export interface IntegratedCase {
  id: string
  title: string
  patientPresentation: string
  clinicalFindings: string[]
  labFindings: string[]
  imagingFindings: string[]
  biopsyDescription: string
  morphologicFeatures: string[]
  ihcResults: Record<string, 'positive' | 'negative' | 'variable'>
  molecularResults: Record<string, string>
  mechanismExplanation: string
  diagnosis: string
  prognosis: string
  treatment: string[]
  learningPoints: string[]
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

// Glossary
export interface GlossaryTerm {
  id: string
  term: string
  category: 'morphology' | 'mechanism' | 'molecular' | 'clinical' | 'technique'
  definition: string
  synonyms: string[]
  relatedTerms: string[]
  examples: string[]
}

// User Progress (for state management)
export interface UserProgress {
  completedLessons: string[]
  completedModules: string[]
  assessmentScores: Record<string, number>
  lastAccessed: string
  bookmarks: string[]
}

// App Settings
export interface AppSettings {
  theme: 'light' | 'dark'
  learnerLevel: LearnerLevel
  fontSize: 'small' | 'medium' | 'large'
  offlineMode: boolean
  showPrerequisites: boolean
}

// Navigation
export type Screen =
  | 'home'
  | 'modules'
  | 'module'
  | 'lesson'
  | 'morphology-explorer'
  | 'inflammation-simulator'
  | 'cell-injury-model'
  | 'neoplasia-panel'
  | 'pathway-visualizer'
  | 'cases'
  | 'case'
  | 'assessment'
  | 'glossary'
  | 'settings'

export interface NavigationState {
  currentScreen: Screen
  params?: Record<string, string>
}
