import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import { Progress } from './Progress'
import useStore from './store'
import { modules } from './data'
import { ArrowLeft, BookOpen } from 'lucide-react'

export default function ModulesListScreen() {
  const { navigateTo, goBack, progress } = useStore()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="w-10 h-10 text-primary" />
          <h1 className="text-3xl font-bold">Learning Modules</h1>
        </div>
        <p className="text-muted-foreground">
          Structured curriculum covering histopathology fundamentals
        </p>
      </div>

      {/* Overall Progress */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Overall Progress</CardTitle>
          <CardDescription>
            {progress.completedModules.length} of {modules.length} modules completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress
            value={modules.length > 0 ? (progress.completedModules.length / modules.length) * 100 : 0}
            className="h-3"
          />
        </CardContent>
      </Card>

      {/* Modules List */}
      <div className="space-y-4">
        {modules.map((module, index) => {
          const isCompleted = progress.completedModules.includes(module.id)
          const completedLessons = module.lessons.filter((lesson) =>
            progress.completedLessons.includes(lesson.id)
          ).length
          const totalLessons = module.lessons.length
          const moduleProgress = totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0

          return (
            <Card key={module.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">{index + 1}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <CardTitle className="text-xl">{module.title}</CardTitle>
                          {isCompleted && <Badge variant="secondary">Completed</Badge>}
                        </div>
                        <CardDescription className="mt-1">{module.description}</CardDescription>
                      </div>
                    </div>

                    {/* Module Stats */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <BookOpen className="w-4 h-4" />
                        <span>
                          {completedLessons}/{totalLessons} lessons
                        </span>
                      </div>
                      <span>•</span>
                      <span>{module.estimatedTime} minutes</span>
                      <span>•</span>
                      <Badge variant="outline" className="text-xs">
                        {module.bloomLevel}
                      </Badge>
                    </div>

                    {/* Prerequisites */}
                    {module.prerequisites.length > 0 && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Prerequisites: </span>
                        {module.prerequisites.map((prereqId, i) => {
                          const prereq = modules.find((m) => m.id === prereqId)
                          const prereqCompleted = progress.completedModules.includes(prereqId)
                          return (
                            <span key={prereqId}>
                              <Badge
                                variant={prereqCompleted ? 'secondary' : 'outline'}
                                className="text-xs cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  navigateTo('module', { moduleId: prereqId })
                                }}
                              >
                                {prereq?.title || prereqId}
                              </Badge>
                              {i < module.prerequisites.length - 1 && ', '}
                            </span>
                          )
                        })}
                      </div>
                    )}

                    {/* Progress Bar */}
                    {totalLessons > 0 && (
                      <div>
                        <Progress value={moduleProgress} className="h-2" />
                        <div className="mt-1 text-xs text-muted-foreground text-right">
                          {Math.round(moduleProgress)}% complete
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Action Button */}
                  <Button
                    onClick={() => navigateTo('module', { moduleId: module.id })}
                    size="lg"
                  >
                    {isCompleted ? 'Review' : completedLessons > 0 ? 'Continue' : 'Start'}
                  </Button>
                </div>
              </CardHeader>
            </Card>
          )
        })}
      </div>

      {/* Learning Path Info */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Learning Path</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Recommended Order:</strong> Start with Normal
            Histology Foundations to build your foundation, then progress through Cell Injury &
            Death and Inflammation Spectrum.
          </p>
          <p>
            Each module builds on previous concepts, integrating morphology, molecular mechanisms,
            and clinical correlation for comprehensive understanding.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
