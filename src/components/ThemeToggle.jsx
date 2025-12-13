import React from 'react'
import { useTheme } from '../hooks/useTheme.js'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useTheme()
    const base = import.meta.env.BASE_URL || '/'

    const sunPng = `${base}sun.png`
    const sunJpg = `${base}sun.jpg`
    const moonPng = `${base}moon.png`
    const moonJpg = `${base}moon.jpg`

    return (
        <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle theme"
        >
            <div className="toggle-track">
                <div className="toggle-thumb">
                    <img
                        src={isDark ? moonPng : sunPng}
                        alt={isDark ? 'Luna' : 'Sol'}
                        className="toggle-img"
                        onError={(e) => {
                            // if png not found, try jpg variant
                            const cur = e.target.src
                            if (cur.endsWith('.png')) e.target.src = cur.replace('.png', '.jpg')
                        }}
                    />
                </div>
            </div>
        </button>
    )
}
