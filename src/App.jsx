import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ElectricParticles from './components/ElectricParticles'
import ElectricCursor from './components/ElectricCursor'
import { RouteTransitionProvider } from './components/RouteTransitionProvider'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import WorkshopsPage from './pages/WorkshopsPage'
import RegistrationPage from './pages/RegistrationPage'
import HelplinePage from './pages/HelplinePage'
import './App.css'

function AppContent() {
  useEffect(() => {
    if (!import.meta.env.PROD) {
      return undefined
    }

    const preventDefault = event => {
      event.preventDefault()
    }

    const preventCopyShortcuts = event => {
      if (!(event.ctrlKey || event.metaKey)) {
        return
      }

      const blockedKeys = ['a', 'c', 'p', 's', 'u', 'x']

      if (blockedKeys.includes(event.key.toLowerCase())) {
        event.preventDefault()
      }
    }

    document.addEventListener('copy', preventDefault)
    document.addEventListener('cut', preventDefault)
    document.addEventListener('contextmenu', preventDefault)
    document.addEventListener('selectstart', preventDefault)
    document.addEventListener('dragstart', preventDefault)
    document.addEventListener('keydown', preventCopyShortcuts)

    return () => {
      document.removeEventListener('copy', preventDefault)
      document.removeEventListener('cut', preventDefault)
      document.removeEventListener('contextmenu', preventDefault)
      document.removeEventListener('selectstart', preventDefault)
      document.removeEventListener('dragstart', preventDefault)
      document.removeEventListener('keydown', preventCopyShortcuts)
    }
  }, [])

  return (
    <RouteTransitionProvider>
      <div className="app">
        <ElectricCursor />
        <ElectricParticles />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/workshops" element={<WorkshopsPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/helpline" element={<HelplinePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RouteTransitionProvider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
