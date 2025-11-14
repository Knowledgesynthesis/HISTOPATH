import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import { Slider } from './Slider'
import useStore from './store'
import { interactives } from './data'
import { ArrowLeft, RotateCcw } from 'lucide-react'

export default function CellInjurySimulator() {
  const { goBack } = useStore()
  const interactive = interactives.find((i) => i.type === 'cell-injury-model')

  const [values, setValues] = useState<Record<string, number>>({
    'atp-level': 0,
    'ros-level': 0,
    calcium: 0,
    duration: 10,
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

  const determineOutcome = () => {
    const atpDepletion = values['atp-level'] || 0
    const duration = values['duration'] || 0

    if (atpDepletion > 85 && duration > 30) {
      return {
        type: 'Irreversible Injury → Coagulative Necrosis',
        description:
          'Severe ATP depletion for prolonged duration has caused irreversible mitochondrial damage. Cell death is inevitable.',
        morphology: [
          'Nuclear pyknosis → karyorrhexis → karyolysis',
          'Increased cytoplasmic eosinophilia',
          'Preserved tissue architecture (ghost cells)',
          'Loss of cell membrane integrity',
        ],
        color: 'text-red-500',
      }
    } else if (atpDepletion > 40 && duration <= 30) {
      return {
        type: 'Reversible Injury',
        description:
          'Moderate ATP depletion but duration is short enough that mitochondria remain viable. Cell can recover if insult is removed.',
        morphology: [
          'Cellular swelling',
          'Plasma membrane blebs',
          'Loss of microvilli',
          'Mitochondrial swelling',
          'ER dilation',
          'Chromatin clumping',
        ],
        color: 'text-yellow-500',
      }
    } else if (atpDepletion <= 40) {
      return {
        type: 'Minimal/No Injury',
        description:
          'ATP levels remain sufficient to maintain Na⁺/K⁺-ATPase function. Cell homeostasis preserved.',
        morphology: ['Normal cell architecture', 'Intact membranes', 'Normal organelle structure'],
        color: 'text-green-500',
      }
    } else {
      return {
        type: 'Progressive Injury',
        description:
          'Cell is accumulating damage. Outcome depends on whether oxygen/nutrients are restored.',
        morphology: [
          'Moderate swelling',
          'Early membrane damage',
          'Mitochondrial dysfunction',
          'Decreased protein synthesis',
        ],
        color: 'text-orange-500',
      }
    }
  }

  const outcome = determineOutcome()

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
          <CardTitle className="text-lg">Preset Scenarios</CardTitle>
          <CardDescription>Try these common clinical scenarios</CardDescription>
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
          <CardTitle className="text-lg">Injury Parameters</CardTitle>
          <CardDescription>Adjust the cellular stress conditions</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {interactive.inputs.map((input) => (
            <div key={input.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="font-medium">{input.label}</label>
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
          <CardTitle className="text-lg">Predicted Outcome</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className={`text-2xl font-bold ${outcome.color}`}>{outcome.type}</h3>
            <p className="text-muted-foreground mt-2">{outcome.description}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Morphologic Changes:</h4>
            <ul className="space-y-1">
              {outcome.morphology.map((change, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>{change}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Guardrails / Learning Points */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Key Concepts</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {interactive.guardrails.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <Badge variant="outline" className="flex-shrink-0">
                  {i + 1}
                </Badge>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
