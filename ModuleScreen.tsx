import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import useStore from './store'
import { modules } from './data'
import { ArrowLeft, CheckCircle2, Circle } from 'lucide-react'

export default function ModuleScreen() {
  const { navigation, navigateTo, goBack, progress } = useStore()
  const moduleId = navigation.params?.moduleId

  const module = modules.find((m) => m.id === moduleId)

  if (!module) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Module not found</p>
        <Button onClick={goBack} className="mt-4">
          Go Back
        </Button>
      </div>
    )
  }

  const isModuleCompleted = progress.completedModules.includes(module.id)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h1 className="text-3xl font-bold">{module.title}</h1>
            {isModuleCompleted && <Badge variant="secondary">Completed</Badge>}
          </div>
          <p className="text-lg text-muted-foreground">{module.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>{module.estimatedTime} minutes total</span>
            <span>•</span>
            <span>{module.lessons.length} lessons</span>
            <span>•</span>
            <span>Level: {module.bloomLevel}</span>
          </div>
        </div>
      </div>

      {/* Prerequisites */}
      {module.prerequisites.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Prerequisites</CardTitle>
            <CardDescription>
              Complete these modules first for best understanding
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {module.prerequisites.map((prereqId) => {
                const prereq = modules.find((m) => m.id === prereqId)
                const isCompleted = progress.completedModules.includes(prereqId)
                return (
                  <Badge
                    key={prereqId}
                    variant={isCompleted ? 'secondary' : 'outline'}
                    className="cursor-pointer"
                    onClick={() => navigateTo('module', { moduleId: prereqId })}
                  >
                    {isCompleted && <CheckCircle2 className="w-3 h-3 mr-1" />}
                    {prereq?.title || prereqId}
                  </Badge>
                )
              })}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Lessons */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Lessons</h2>
        <div className="space-y-3">
          {module.lessons.map((lesson, index) => {
            const isCompleted = progress.completedLessons.includes(lesson.id)

            return (
              <Card
                key={lesson.id}
                className="cursor-pointer hover:bg-accent transition-colors"
                onClick={() => navigateTo('lesson', { lessonId: lesson.id })}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {isCompleted ? (
                        <CheckCircle2 className="w-6 h-6 text-primary" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-base">
                          {index + 1}. {lesson.title}
                        </CardTitle>
                        {isCompleted && <Badge variant="secondary">Done</Badge>}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {lesson.estimatedTime} min • {lesson.bloomLevel}
                      </div>
                      {lesson.objectives.length > 0 && (
                        <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                          {lesson.objectives.slice(0, 2).map((obj, i) => (
                            <li key={i}>• {obj}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
