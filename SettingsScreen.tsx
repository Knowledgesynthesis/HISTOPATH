import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './Card'
import { Button } from './Button'
import useStore from './store'
import { ArrowLeft, Moon, Sun, Type, User } from 'lucide-react'

export default function SettingsScreen() {
  const { goBack, settings, setTheme, setLearnerLevel, setFontSize } = useStore()

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Header */}
      <div>
        <Button variant="ghost" onClick={goBack} className="mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground mt-2">Customize your learning experience</p>
      </div>

      {/* Theme */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            {settings.theme === 'dark' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
            <CardTitle className="text-lg">Theme</CardTitle>
          </div>
          <CardDescription>Choose your preferred color scheme</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button
            variant={settings.theme === 'light' ? 'default' : 'outline'}
            onClick={() => setTheme('light')}
          >
            Light
          </Button>
          <Button
            variant={settings.theme === 'dark' ? 'default' : 'outline'}
            onClick={() => setTheme('dark')}
          >
            Dark
          </Button>
        </CardContent>
      </Card>

      {/* Learner Level */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <User className="w-5 h-5" />
            <CardTitle className="text-lg">Learner Level</CardTitle>
          </div>
          <CardDescription>Set your current level for personalized content</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {(['preclinical', 'clinical', 'residency', 'fellowship', 'attending'] as const).map(
            (level) => (
              <Button
                key={level}
                variant={settings.learnerLevel === level ? 'default' : 'outline'}
                onClick={() => setLearnerLevel(level)}
                size="sm"
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </Button>
            )
          )}
        </CardContent>
      </Card>

      {/* Font Size */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Type className="w-5 h-5" />
            <CardTitle className="text-lg">Font Size</CardTitle>
          </div>
          <CardDescription>Adjust text size for better readability</CardDescription>
        </CardHeader>
        <CardContent className="flex gap-2">
          <Button
            variant={settings.fontSize === 'small' ? 'default' : 'outline'}
            onClick={() => setFontSize('small')}
            size="sm"
          >
            Small
          </Button>
          <Button
            variant={settings.fontSize === 'medium' ? 'default' : 'outline'}
            onClick={() => setFontSize('medium')}
            size="sm"
          >
            Medium
          </Button>
          <Button
            variant={settings.fontSize === 'large' ? 'default' : 'outline'}
            onClick={() => setFontSize('large')}
            size="sm"
          >
            Large
          </Button>
        </CardContent>
      </Card>

      {/* About */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">About Histopath Lab</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>
            <strong className="text-foreground">Histopath Lab</strong> is an interactive
            educational platform for learning histopathology through integrated morphology,
            molecular mechanisms, and clinical correlation.
          </p>
          <p className="text-xs">Version 1.0.0</p>
          <p className="text-xs">
            Built with React, TypeScript, and Tailwind CSS. Designed for offline-first learning.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
