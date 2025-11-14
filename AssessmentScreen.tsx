import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import useStore from './store'
import { assessments } from './data'
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react'

export default function AssessmentScreen() {
  const { goBack, updateAssessmentScore, progress } = useStore()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [showRationale, setShowRationale] = useState(false)

  const assessment = assessments[currentIndex]

  if (!assessment) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No assessments available</p>
        <Button onClick={goBack} className="mt-4">
          Go Back
        </Button>
      </div>
    )
  }

  const handleSubmit = () => {
    if (selectedAnswer) {
      const isCorrect = selectedAnswer === assessment.correctAnswer
      updateAssessmentScore(assessment.id, isCorrect ? 100 : 0)
      setShowRationale(true)
    }
  }

  const handleNext = () => {
    if (currentIndex < assessments.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedAnswer(null)
      setShowRationale(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setSelectedAnswer(null)
      setShowRationale(false)
    }
  }

  const isCorrect = selectedAnswer === assessment.correctAnswer

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Assessment</h1>
            <p className="text-muted-foreground mt-2">
              Question {currentIndex + 1} of {assessments.length}
            </p>
          </div>
          <div className="text-right">
            <Badge variant="outline">{assessment.difficulty}</Badge>
          </div>
        </div>
      </div>

      {/* Question */}
      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <CardTitle className="text-lg flex-1">{assessment.question}</CardTitle>
          </div>
          <div className="flex gap-2 mt-2">
            <Badge variant="secondary" className="text-xs">
              {assessment.bloomLevel}
            </Badge>
            <Badge variant="secondary" className="text-xs">
              {assessment.type}
            </Badge>
          </div>
        </CardHeader>

        {/* Options */}
        {assessment.options && (
          <CardContent className="space-y-3">
            {assessment.options.map((option) => {
              const isSelected = selectedAnswer === option.id
              const isCorrectOption = option.id === assessment.correctAnswer
              const showCorrectness = showRationale

              let borderColor = 'border-border'
              if (showCorrectness && isCorrectOption) {
                borderColor = 'border-green-500 bg-green-500/10'
              } else if (showCorrectness && isSelected && !isCorrectOption) {
                borderColor = 'border-red-500 bg-red-500/10'
              } else if (isSelected) {
                borderColor = 'border-primary'
              }

              return (
                <div
                  key={option.id}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${borderColor} ${
                    showRationale ? 'cursor-default' : 'hover:border-primary'
                  }`}
                  onClick={() => {
                    if (!showRationale) {
                      setSelectedAnswer(option.id)
                    }
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {showCorrectness && isCorrectOption && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                      {showCorrectness && isSelected && !isCorrectOption && (
                        <XCircle className="w-5 h-5 text-red-500" />
                      )}
                      {!showCorrectness && isSelected && (
                        <div className="w-4 h-4 rounded-full bg-primary" />
                      )}
                      {!showCorrectness && !isSelected && (
                        <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <span className="font-semibold mr-2">{option.id.toUpperCase()}.</span>
                      {option.text}
                    </div>
                  </div>
                </div>
              )
            })}
          </CardContent>
        )}
      </Card>

      {/* Rationale */}
      {showRationale && (
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-green-500" />
              ) : (
                <XCircle className="w-6 h-6 text-red-500" />
              )}
              <CardTitle className="text-lg">
                {isCorrect ? 'Correct!' : 'Incorrect'}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="leading-relaxed">{assessment.rationale}</p>
          </CardContent>
        </Card>
      )}

      {/* Actions */}
      <div className="flex justify-between items-center">
        <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
          Previous
        </Button>

        <div className="flex gap-2">
          {!showRationale ? (
            <Button onClick={handleSubmit} disabled={!selectedAnswer}>
              Submit Answer
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={currentIndex === assessments.length - 1}>
              Next Question
            </Button>
          )}
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex gap-2 justify-center flex-wrap">
        {assessments.map((_, index) => {
          const isPastQuestion = index < currentIndex
          const isCurrentQuestion = index === currentIndex
          const questionScore = progress.assessmentScores[assessments[index].id]

          let bgColor = 'bg-muted'
          if (isPastQuestion && questionScore === 100) {
            bgColor = 'bg-green-500'
          } else if (isPastQuestion && questionScore === 0) {
            bgColor = 'bg-red-500'
          } else if (isCurrentQuestion) {
            bgColor = 'bg-primary'
          }

          return (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${bgColor} transition-colors cursor-pointer`}
              onClick={() => {
                setCurrentIndex(index)
                setSelectedAnswer(null)
                setShowRationale(false)
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
