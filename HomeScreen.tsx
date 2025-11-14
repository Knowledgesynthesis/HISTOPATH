import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import { Badge } from './Badge'
import { Progress } from './Progress'
import useStore from './store'
import { modules } from './data'
import { BookOpen, Microscope, Dna, FlaskConical, Award, BookMarked } from 'lucide-react'

export default function HomeScreen() {
  const { navigateTo, progress } = useStore()

  const completionPercentage =
    modules.length > 0 ? (progress.completedModules.length / modules.length) * 100 : 0

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center space-y-4 py-8">
        <div className="flex justify-center">
          <Microscope className="w-16 h-16 text-primary" />
        </div>
        <h1 className="text-4xl font-bold">Histopath Lab</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          The Morphology–Mechanism Map
        </p>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Master histopathology through integrated morphology, molecular mechanisms, and clinical
          correlation
        </p>
      </div>

      {/* Progress Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Progress</CardTitle>
          <CardDescription>
            {progress.completedModules.length} of {modules.length} modules completed
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={completionPercentage} className="h-3" />
          <div className="mt-2 text-sm text-muted-foreground text-right">
            {Math.round(completionPercentage)}%
          </div>
        </CardContent>
      </Card>

      {/* Quick Access */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => navigateTo('modules')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookOpen className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Learning Modules</CardTitle>
                <CardDescription>Structured pathology curriculum</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => navigateTo('morphology-explorer')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <Microscope className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Morphology Explorer</CardTitle>
                <CardDescription>Interactive tissue visualization</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => navigateTo('inflammation-simulator')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <FlaskConical className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Inflammation Simulator</CardTitle>
                <CardDescription>Explore inflammatory mechanisms</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => navigateTo('cell-injury-model')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <Dna className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Cell Injury Model</CardTitle>
                <CardDescription>Reversible vs irreversible injury</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => navigateTo('assessment')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Assessments</CardTitle>
                <CardDescription>Test your knowledge</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>

        <Card
          className="cursor-pointer hover:bg-accent transition-colors"
          onClick={() => navigateTo('glossary')}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <BookMarked className="w-8 h-8 text-primary" />
              <div>
                <CardTitle className="text-lg">Glossary</CardTitle>
                <CardDescription>Pathology terminology reference</CardDescription>
              </div>
            </div>
          </CardHeader>
        </Card>
      </div>

      {/* Featured Modules */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Learning Modules</h2>
        <div className="space-y-4">
          {modules.map((module) => {
            const isCompleted = progress.completedModules.includes(module.id)
            const completedLessons = module.lessons.filter((lesson) =>
              progress.completedLessons.includes(lesson.id)
            ).length
            const totalLessons = module.lessons.length

            return (
              <Card key={module.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-lg">{module.title}</CardTitle>
                        {isCompleted && <Badge variant="secondary">Completed</Badge>}
                      </div>
                      <CardDescription>{module.description}</CardDescription>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{module.estimatedTime} min</span>
                        <span>•</span>
                        <span>
                          {completedLessons}/{totalLessons} lessons
                        </span>
                      </div>
                    </div>
                    <Button onClick={() => navigateTo('module', { moduleId: module.id })}>
                      {isCompleted ? 'Review' : 'Start'}
                    </Button>
                  </div>
                </CardHeader>
                {totalLessons > 0 && (
                  <CardContent>
                    <Progress value={(completedLessons / totalLessons) * 100} className="h-2" />
                  </CardContent>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
