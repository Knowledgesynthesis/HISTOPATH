import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import useStore from './store'
import { integratedCases } from './data'
import { ArrowLeft, FileText, ChevronDown, ChevronUp } from 'lucide-react'

export default function CasesScreen() {
  const { goBack, navigation } = useStore()
  const caseId = navigation.params?.caseId
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    clinical: true,
    morphology: false,
    ihc: false,
    molecular: false,
    diagnosis: false,
  })

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({ ...prev, [section]: !prev[section] }))
  }

  // If specific case ID is provided, show single case
  if (caseId) {
    const selectedCase = integratedCases.find((c) => c.id === caseId)

    if (!selectedCase) {
      return (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Case not found</p>
          <Button onClick={goBack} className="mt-4">
            Go Back
          </Button>
        </div>
      )
    }

    return (
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <Button variant="ghost" onClick={goBack} className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Cases
          </Button>

          <div className="flex items-center gap-2 mb-2">
            <h1 className="text-3xl font-bold">{selectedCase.title}</h1>
            <Badge variant="outline">{selectedCase.difficulty}</Badge>
          </div>
          <p className="text-muted-foreground">Integrated clinical case</p>
        </div>

        {/* Clinical Presentation */}
        <Card>
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleSection('clinical')}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Clinical Presentation</CardTitle>
              {expandedSections.clinical ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CardHeader>
          {expandedSections.clinical && (
            <CardContent className="space-y-3">
              <p>{selectedCase.patientPresentation}</p>
              <div>
                <h4 className="font-semibold mb-2">Clinical Findings:</h4>
                <ul className="space-y-1">
                  {selectedCase.clinicalFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Laboratory Findings:</h4>
                <ul className="space-y-1">
                  {selectedCase.labFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Imaging:</h4>
                <ul className="space-y-1">
                  {selectedCase.imagingFindings.map((finding, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Morphology */}
        <Card>
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleSection('morphology')}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Histopathology</CardTitle>
              {expandedSections.morphology ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CardHeader>
          {expandedSections.morphology && (
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">{selectedCase.biopsyDescription}</p>
              <div>
                <h4 className="font-semibold mb-2">Morphologic Features:</h4>
                <ul className="space-y-1">
                  {selectedCase.morphologicFeatures.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          )}
        </Card>

        {/* IHC Results */}
        <Card>
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleSection('ihc')}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Immunohistochemistry</CardTitle>
              {expandedSections.ihc ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CardHeader>
          {expandedSections.ihc && (
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.entries(selectedCase.ihcResults).map(([marker, result]) => (
                  <div key={marker} className="flex items-center justify-between p-3 border rounded">
                    <span className="font-medium">{marker}</span>
                    <Badge
                      variant={
                        result === 'positive'
                          ? 'default'
                          : result === 'negative'
                          ? 'secondary'
                          : 'outline'
                      }
                    >
                      {result}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Molecular Results */}
        <Card>
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleSection('molecular')}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Molecular Testing</CardTitle>
              {expandedSections.molecular ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CardHeader>
          {expandedSections.molecular && (
            <CardContent className="space-y-3">
              <div className="grid gap-3">
                {Object.entries(selectedCase.molecularResults).map(([test, result]) => (
                  <div key={test} className="p-3 border rounded">
                    <div className="font-medium mb-1">{test}</div>
                    <div className="text-sm text-primary">{result}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          )}
        </Card>

        {/* Mechanism Explanation */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Mechanism Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">{selectedCase.mechanismExplanation}</p>
          </CardContent>
        </Card>

        {/* Diagnosis & Management */}
        <Card>
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleSection('diagnosis')}
          >
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Diagnosis & Management</CardTitle>
              {expandedSections.diagnosis ? <ChevronUp /> : <ChevronDown />}
            </div>
          </CardHeader>
          {expandedSections.diagnosis && (
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Diagnosis:</h4>
                <p className="text-lg text-primary font-medium">{selectedCase.diagnosis}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Prognosis:</h4>
                <p>{selectedCase.prognosis}</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Treatment:</h4>
                <ul className="space-y-1">
                  {selectedCase.treatment.map((tx, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>{tx}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          )}
        </Card>

        {/* Learning Points */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Key Learning Points</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {selectedCase.learningPoints.map((point, i) => (
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

  // Show list of all cases
  return (
    <div className="space-y-6">
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex items-center gap-3 mb-2">
          <FileText className="w-10 h-10 text-primary" />
          <h1 className="text-3xl font-bold">Integrated Cases</h1>
        </div>
        <p className="text-muted-foreground">
          Clinical cases integrating morphology, mechanisms, and molecular diagnostics
        </p>
      </div>

      {integratedCases.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <p className="text-muted-foreground">No cases available yet</p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-4">
          {integratedCases.map((caseItem) => (
            <Card
              key={caseItem.id}
              className="cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => goBack()} // Navigate to case detail
            >
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                      <Badge variant="outline">{caseItem.difficulty}</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {caseItem.patientPresentation}
                    </CardDescription>
                  </div>
                  <Button
                    onClick={(e) => {
                      e.stopPropagation()
                      useStore.getState().navigateTo('case', { caseId: caseItem.id })
                    }}
                  >
                    Review Case
                  </Button>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
