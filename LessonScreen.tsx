import { Card, CardHeader, CardTitle, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import useStore from './store'
import { modules } from './data'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function LessonScreen() {
  const { navigation, navigateTo, goBack, progress, completeLesson } = useStore()
  const lessonId = navigation.params?.lessonId

  // Find the lesson across all modules
  let lesson = null
  let module = null
  for (const mod of modules) {
    const found = mod.lessons.find((l) => l.id === lessonId)
    if (found) {
      lesson = found
      module = mod
      break
    }
  }

  if (!lesson || !module) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Lesson not found</p>
        <Button onClick={goBack} className="mt-4">
          Go Back
        </Button>
      </div>
    )
  }

  const isCompleted = progress.completedLessons.includes(lesson.id)

  const handleComplete = () => {
    completeLesson(lesson.id)
    goBack()
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to {module.title}
        </Button>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{lesson.title}</h1>
            {isCompleted && <Badge variant="secondary">Completed</Badge>}
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{lesson.estimatedTime} minutes</span>
            <span>•</span>
            <span>Bloom: {lesson.bloomLevel}</span>
          </div>
        </div>
      </div>

      {/* Learning Objectives */}
      {lesson.objectives.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Learning Objectives</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {lesson.objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Lesson Content */}
      <div className="space-y-4">
        {lesson.content.map((content, index) => {
          if (content.type === 'text') {
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div
                    className="prose prose-sm dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{
                      __html: content.content.replace(/\n\n/g, '</p><p>').replace(/\n/g, '<br/>'),
                    }}
                  />
                  {content.caption && (
                    <p className="text-sm text-muted-foreground mt-4 italic">{content.caption}</p>
                  )}
                </CardContent>
              </Card>
            )
          }

          if (content.type === 'interactive') {
            return (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="text-center py-8">
                    <p className="text-muted-foreground mb-4">{content.content}</p>
                    <Button
                      onClick={() => {
                        if (content.interactiveId) {
                          // Navigate to appropriate interactive based on ID
                          const interactiveType = content.interactiveId.split('-')[0]
                          navigateTo(interactiveType as any)
                        }
                      }}
                    >
                      Launch Interactive
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          }

          return null
        })}
      </div>

      {/* Completion Button */}
      <div className="flex justify-between items-center pt-6 border-t">
        <Button variant="outline" onClick={goBack}>
          Back to Module
        </Button>
        <Button onClick={handleComplete} disabled={isCompleted}>
          {isCompleted ? 'Completed' : 'Mark as Complete'}
        </Button>
      </div>
    </div>
  )
}
