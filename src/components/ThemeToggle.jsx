import React from 'react'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useTheme()

    return (
        <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
        >
            <div className="toggle-track">
                <div className="toggle-thumb">
                    <span className="toggle-icon">{isDark ? '🌙' : '☀️'}</span>
                </div>
            </div>
        </button>
    )
}
