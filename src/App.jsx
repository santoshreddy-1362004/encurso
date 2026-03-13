import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ElectricParticles from './components/ElectricParticles'
import ElectricCursor from './components/ElectricCursor'
import { RouteTransitionProvider } from './components/RouteTransitionProvider'
import HomePage from './pages/HomePage'
import EventsPage from './pages/EventsPage'
import WorkshopsPage from './pages/WorkshopsPage'
import TimelinePage from './pages/TimelinePage'
import HelplinePage from './pages/HelplinePage'
import './App.css'

function AppContent() {
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
            <Route path="/timeline" element={<TimelinePage />} />
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
