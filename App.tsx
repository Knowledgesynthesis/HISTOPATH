import { useEffect } from 'react'
import useStore from './store'
import HomeScreen from './HomeScreen'
import ModulesListScreen from './ModulesListScreen'
import ModuleScreen from './ModuleScreen'
import LessonScreen from './LessonScreen'
import GlossaryScreen from './GlossaryScreen'
import SettingsScreen from './SettingsScreen'
import CellInjurySimulator from './CellInjurySimulator'
import InflammationSimulator from './InflammationSimulator'
import AssessmentScreen from './AssessmentScreen'
import CasesScreen from './CasesScreen'
import { Settings, BookMarked, Home } from 'lucide-react'
import { Button } from './Button'

export default function App() {
  const { navigation, settings, navigateTo } = useStore()

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement
    if (settings.theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [settings.theme])

  // Apply font size to document
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('text-sm', 'text-base', 'text-lg')

    if (settings.fontSize === 'small') {
      root.classList.add('text-sm')
    } else if (settings.fontSize === 'large') {
      root.classList.add('text-lg')
    } else {
      root.classList.add('text-base')
    }
  }, [settings.fontSize])

  // Render current screen based on navigation state
  const renderScreen = () => {
    switch (navigation.currentScreen) {
      case 'home':
        return <HomeScreen />
      case 'modules':
        return <ModulesListScreen />
      case 'module':
        return <ModuleScreen />
      case 'lesson':
        return <LessonScreen />
      case 'glossary':
        return <GlossaryScreen />
      case 'settings':
        return <SettingsScreen />
      case 'cell-injury-model':
        return <CellInjurySimulator />
      case 'inflammation-simulator':
        return <InflammationSimulator />
      case 'morphology-explorer':
        return <CellInjurySimulator />
      case 'assessment':
        return <AssessmentScreen />
      case 'cases':
        return <CasesScreen />
      case 'case':
        return <CasesScreen />
      default:
        return <HomeScreen />
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Navigation Bar */}
      <nav className="border-b bg-card sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateTo('home')}
                className="flex items-center gap-2"
              >
                <Home className="w-5 h-5" />
              </Button>
              <h1 className="text-xl font-bold hidden sm:block">Histopath Lab</h1>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateTo('glossary')}
                title="Glossary"
              >
                <BookMarked className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => navigateTo('settings')}
                title="Settings"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 pb-20">
        {renderScreen()}
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
          <p>
            Histopath Lab - The Morphology–Mechanism Map
          </p>
          <p className="mt-1">
            Educational tool for integrated histopathology learning
          </p>
        </div>
      </footer>
    </div>
  )
}
