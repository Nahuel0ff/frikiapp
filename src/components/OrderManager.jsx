import React, { useState, useEffect } from 'react'

export default function OrderManager() {
    const [isOpen, setIsOpen] = useState(false)
    const [notes, setNotes] = useState('')

    // Load notes from local storage on mount
    useEffect(() => {
        const savedNotes = localStorage.getItem('orderNotes')
        if (savedNotes) {
            setNotes(savedNotes)
        }
    }, [])

    // Save notes to local storage on change
    useEffect(() => {
        localStorage.setItem('orderNotes', notes)
    }, [notes])

    const handleCopy = () => {
        navigator.clipboard.writeText(notes).then(() => {
            alert('¡Pedido copiado al portapapeles!')
        })
    }

    return (
        <div className={`order-manager ${isOpen ? 'open' : ''}`}>
            {/* Toggle Button (Visible when minimized) */}
            {/* Toggle Button (Visible when minimized) */}
            <button
                className={`order-toggle ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Abrir notas de pedido"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                </svg>
            </button>

            {/* Main Panel */}
            <div className="order-panel">
                <div className="order-header">
                    <h3>Mi Pedido</h3>
                    <div className="order-controls">
                        <button
                            className="minimize-btn"
                            onClick={() => setIsOpen(false)}
                            aria-label="Minimizar"
                        >
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="order-body">
                    <textarea
                        placeholder="Anota aquí las cartas que te interesan..."
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    />
                </div>

                <div className="order-footer">
                    <button className="action-btn copy-btn" onClick={handleCopy}>
                        Copiar Texto
                    </button>
                </div>
            </div>
        </div>
    )
}
