import { useState, useEffect } from 'react'
import { THEME_STORAGE_KEY, DARK_THEME, LIGHT_THEME } from '../constants/theme.js'

export function useTheme() {
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const saved = localStorage.getItem(THEME_STORAGE_KEY)
    if (saved) {
      setIsDark(saved === DARK_THEME)
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? DARK_THEME : LIGHT_THEME)
    localStorage.setItem(THEME_STORAGE_KEY, isDark ? DARK_THEME : LIGHT_THEME)
  }, [isDark])

  return [isDark, setIsDark]
}