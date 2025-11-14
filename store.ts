import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { AppSettings, UserProgress, NavigationState, Screen } from './types'

interface AppState {
  // Settings
  settings: AppSettings
  setTheme: (theme: 'light' | 'dark') => void
  setLearnerLevel: (level: AppSettings['learnerLevel']) => void
  setFontSize: (size: AppSettings['fontSize']) => void
  toggleOfflineMode: () => void

  // Navigation
  navigation: NavigationState
  navigateTo: (screen: Screen, params?: Record<string, string>) => void
  goBack: () => void

  // User Progress
  progress: UserProgress
  completeLesson: (lessonId: string) => void
  completeModule: (moduleId: string) => void
  updateAssessmentScore: (assessmentId: string, score: number) => void
  toggleBookmark: (itemId: string) => void

  // History for back navigation
  history: NavigationState[]
}

const useStore = create<AppState>()(
  persist(
    (set) => ({
      // Initial Settings
      settings: {
        theme: 'dark',
        learnerLevel: 'clinical',
        fontSize: 'medium',
        offlineMode: false,
        showPrerequisites: true,
      },

      setTheme: (theme) =>
        set((state) => ({
          settings: { ...state.settings, theme },
        })),

      setLearnerLevel: (learnerLevel) =>
        set((state) => ({
          settings: { ...state.settings, learnerLevel },
        })),

      setFontSize: (fontSize) =>
        set((state) => ({
          settings: { ...state.settings, fontSize },
        })),

      toggleOfflineMode: () =>
        set((state) => ({
          settings: { ...state.settings, offlineMode: !state.settings.offlineMode },
        })),

      // Initial Navigation
      navigation: {
        currentScreen: 'home',
        params: {},
      },

      history: [],

      navigateTo: (screen, params = {}) =>
        set((state) => ({
          history: [...state.history, state.navigation],
          navigation: { currentScreen: screen, params },
        })),

      goBack: () =>
        set((state) => {
          if (state.history.length === 0) return state
          const previous = state.history[state.history.length - 1]
          return {
            history: state.history.slice(0, -1),
            navigation: previous,
          }
        }),

      // Initial Progress
      progress: {
        completedLessons: [],
        completedModules: [],
        assessmentScores: {},
        lastAccessed: new Date().toISOString(),
        bookmarks: [],
      },

      completeLesson: (lessonId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            completedLessons: state.progress.completedLessons.includes(lessonId)
              ? state.progress.completedLessons
              : [...state.progress.completedLessons, lessonId],
            lastAccessed: new Date().toISOString(),
          },
        })),

      completeModule: (moduleId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            completedModules: state.progress.completedModules.includes(moduleId)
              ? state.progress.completedModules
              : [...state.progress.completedModules, moduleId],
            lastAccessed: new Date().toISOString(),
          },
        })),

      updateAssessmentScore: (assessmentId, score) =>
        set((state) => ({
          progress: {
            ...state.progress,
            assessmentScores: {
              ...state.progress.assessmentScores,
              [assessmentId]: score,
            },
            lastAccessed: new Date().toISOString(),
          },
        })),

      toggleBookmark: (itemId) =>
        set((state) => ({
          progress: {
            ...state.progress,
            bookmarks: state.progress.bookmarks.includes(itemId)
              ? state.progress.bookmarks.filter((id) => id !== itemId)
              : [...state.progress.bookmarks, itemId],
          },
        })),
    }),
    {
      name: 'histopath-lab-storage',
    }
  )
)

export default useStore
