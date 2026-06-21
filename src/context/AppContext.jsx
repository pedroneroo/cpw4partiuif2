import React, { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react'
import { useOnlineStatus } from '../hooks/useOnlineStatus'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [toast, setToast] = useState(null)
  const isOnline = useOnlineStatus()
  const isFirstRender = useRef(true)

  // showToast declarado ANTES do useEffect que o usa
  const showToast = useCallback((message, type = 'info') => {
    setToast({ message, type })
    setTimeout(() => setToast(null), 3500)
  }, [])

  // Toast automático ao mudar status — ignora a primeira renderização
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    showToast(
      isOnline ? '✅ Você está online!' : '📴 Modo offline ativado',
      isOnline ? 'success' : 'warning'
    )
  }, [isOnline, showToast])

  return (
    <AppContext.Provider value={{ toast, showToast, isOnline }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp deve ser usado dentro de AppProvider')
  return ctx
}
