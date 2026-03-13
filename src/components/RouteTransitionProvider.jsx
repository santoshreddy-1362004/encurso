import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import ElectricGateTransition from './ElectricGateTransition'

const CLOSE_DURATION_MS = 1050
const OPEN_DURATION_MS = 620

const RouteTransitionContext = createContext(undefined)

function normalizePath(to) {
  if (typeof to === 'string') {
    return to
  }

  if (to && typeof to === 'object' && typeof to.pathname === 'string') {
    return to.pathname
  }

  return ''
}

export function RouteTransitionProvider({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const closeTimerRef = useRef(null)
  const openTimerRef = useRef(null)

  const [phase, setPhase] = useState('idle')
  const [targetPath, setTargetPath] = useState('')

  const startRouteTransition = useCallback(
    to => {
      const nextPath = normalizePath(to)

      if (!nextPath || nextPath === location.pathname || phase !== 'idle') {
        return false
      }

      setTargetPath(nextPath)
      setPhase('closing')
      return true
    },
    [location.pathname, phase],
  )

  useEffect(() => {
    return () => {
      window.clearTimeout(closeTimerRef.current)
      window.clearTimeout(openTimerRef.current)
    }
  }, [])

  useEffect(() => {
    if (phase !== 'closing' || !targetPath) {
      return
    }

    closeTimerRef.current = window.setTimeout(() => {
      navigate(targetPath)
      setPhase('opening')
    }, CLOSE_DURATION_MS)

    return () => {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = null
    }
  }, [navigate, phase, targetPath])

  useEffect(() => {
    if (phase !== 'opening') {
      return
    }

    openTimerRef.current = window.setTimeout(() => {
      setPhase('idle')
      setTargetPath('')
    }, OPEN_DURATION_MS)

    return () => {
      window.clearTimeout(openTimerRef.current)
      openTimerRef.current = null
    }
  }, [phase])

  useEffect(() => {
    if (phase === 'idle') {
      setTargetPath('')
    }
  }, [location.pathname, phase])

  const value = useMemo(
    () => ({
      startRouteTransition,
      isTransitioning: phase !== 'idle',
      transitionPhase: phase,
    }),
    [startRouteTransition, phase],
  )

  return (
    <RouteTransitionContext.Provider value={value}>
      {children}
      <ElectricGateTransition phase={phase} />
    </RouteTransitionContext.Provider>
  )
}

export function useRouteTransition() {
  const context = useContext(RouteTransitionContext)

  if (!context) {
    throw new Error('useRouteTransition must be used inside RouteTransitionProvider')
  }

  return context
}