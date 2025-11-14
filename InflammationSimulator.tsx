import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import { Slider } from './Slider'
import useStore from './store'
import { interactives } from './data'
import { ArrowLeft, RotateCcw } from 'lucide-react'

export default function InflammationSimulator() {
  const { goBack } = useStore()
  const interactive = interactives.find((i) => i.type === 'inflammation-simulator')

  const [values, setValues] = useState<Record<string, number>>({
    'neutrophil-mediators': 0,
    'macrophage-activation': 0,
    'granuloma-signals': 0,
  })

  if (!interactive) return null

  const handleReset = () => {
    const defaults: Record<string, number> = {}
    interactive.inputs.forEach((input) => {
      defaults[input.id] = input.default as number
    })
    setValues(defaults)
  }

  const handlePreset = (presetValues: Record<string, any>) => {
    setValues(presetValues as Record<string, number>)
  }

  const determineInflammationType = () => {
    const neutrophil = values['neutrophil-mediators'] || 0
    const macrophage = values['macrophage-activation'] || 0
    const granuloma = values['granuloma-signals'] || 0

    if (neutrophil > 70 && granuloma < 30) {
      return {
        type: 'Acute Inflammation',
        cells: 'Neutrophils (predominant)',
        mediators: ['IL-8', 'C5a', 'LTB4', 'Bacterial products'],
        histology: [
          'Dense neutrophilic infiltrate',
          'Vascular congestion and dilation',
          'Edema',
          'Fibrin deposition',
          'Tissue destruction',
        ],
        examples: ['Acute appendicitis', 'Lobar pneumonia', 'Acute abscess'],
        color: 'text-red-500',
        duration: 'Hours to days',
      }
    } else if (granuloma > 70 && macrophage > 60) {
      return {
        type: 'Granulomatous Inflammation',
        cells: 'Epithelioid macrophages, multinucleated giant cells, lymphocytes',
        mediators: ['IFN-γ', 'IL-12', 'TNF-α', 'IL-1'],
        histology: [
          'Well-formed granulomas',
          'Epithelioid macrophages (activated)',
          'Langhans or foreign body giant cells',
          'Lymphocyte rim',
          'Central necrosis (if caseating)',
        ],
        examples: ['Tuberculosis', 'Sarcoidosis', 'Crohn disease', 'Foreign body reaction'],
        color: 'text-purple-500',
        duration: 'Weeks to years',
      }
    } else if (macrophage > 50 && neutrophil < 40) {
      return {
        type: 'Chronic Inflammation',
        cells: 'Macrophages, lymphocytes, plasma cells, fibroblasts',
        mediators: ['IFN-γ', 'IL-12', 'IL-17', 'TGF-β', 'PDGF'],
        histology: [
          'Mononuclear infiltrate',
          'Tissue destruction',
          'Angiogenesis (new vessel formation)',
          'Fibrosis',
          'Ongoing tissue damage and repair',
        ],
        examples: ['Chronic gastritis', 'Rheumatoid arthritis', 'Chronic hepatitis'],
        color: 'text-blue-500',
        duration: 'Weeks to years',
      }
    } else {
      return {
        type: 'Mixed/Transitional Inflammation',
        cells: 'Mixed population of inflammatory cells',
        mediators: ['Variable mediator profile'],
        histology: [
          'Mixed acute and chronic features',
          'Both neutrophils and mononuclear cells',
          'Evolving tissue response',
        ],
        examples: ['Healing acute inflammation', 'Recurrent acute on chronic inflammation'],
        color: 'text-yellow-500',
        duration: 'Variable',
      }
    }
  }

  const outcome = determineInflammationType()

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-3xl font-bold">{interactive.title}</h1>
        <p className="text-muted-foreground mt-2">{interactive.description}</p>
      </div>

      {/* Presets */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Clinical Scenarios</CardTitle>
          <CardDescription>Try these common inflammatory conditions</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {interactive.presets.map((preset) => (
            <Button
              key={preset.name}
              variant="outline"
              onClick={() => handlePreset(preset.values)}
              size="sm"
            >
              {preset.name}
            </Button>
          ))}
          <Button variant="outline" onClick={handleReset} size="sm">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
        </CardContent>
      </Card>

      {/* Controls */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Inflammatory Mediators</CardTitle>
          <CardDescription>Adjust cytokine and chemokine levels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {interactive.inputs.map((input) => (
            <div key={input.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-medium text-sm">{input.label}</label>
                <span className="text-sm text-muted-foreground">{values[input.id] || 0}</span>
              </div>
              <Slider
                min={input.min}
                max={input.max}
                value={values[input.id] || input.default}
                onValueChange={(val) => setValues({ ...values, [input.id]: val })}
              />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Outcome */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Resulting Inflammation Type</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className={`text-2xl font-bold ${outcome.color}`}>{outcome.type}</h3>
            <div className="mt-3 space-y-2 text-sm">
              <div>
                <span className="font-semibold">Duration:</span> {outcome.duration}
              </div>
              <div>
                <span className="font-semibold">Predominant Cells:</span> {outcome.cells}
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Key Mediators:</h4>
            <div className="flex flex-wrap gap-2">
              {outcome.mediators.map((mediator, i) => (
                <Badge key={i} variant="secondary">
                  {mediator}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Histologic Features:</h4>
            <ul className="space-y-1">
              {outcome.histology.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Clinical Examples:</h4>
            <div className="flex flex-wrap gap-2">
              {outcome.examples.map((example, i) => (
                <Badge key={i} variant="outline">
                  {example}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
