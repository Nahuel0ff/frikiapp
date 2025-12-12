import React, { useState, useEffect, useRef } from 'react'

export default function DeckCard({ name, links, color, whatsapp, ck }) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)

  const whatsappLink = `https://wa.me/${whatsapp}?text=Hola,%20me%20interesa%20tu%20mazo%20${encodeURIComponent(name)}`
  const hasMultipleLinks = links && links.length > 1
  const primaryLink = links && links.length > 0 ? links[0].url : '#'

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleCardClick = (e) => {
    if (hasMultipleLinks) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  const CardContent = () => (
    <>
      <div className="deck-header" style={{ backgroundColor: color }}>
        <span className="deck-icon">🃏</span>
      </div>

      <div className="deck-body">
        <div className="deck-title-row">
          <h3>{name}</h3>
          <div className="deck-ck">CK: ${ck?.toFixed(2) ?? '—'}</div>
        </div>

        <div className="deck-action">
          {hasMultipleLinks ? (
            <span>Ver Links {isOpen ? '▲' : '▼'}</span>
          ) : (
            <span>Ver mazo →</span>
          )}
        </div>
      </div>
    </>
  )

  return (
    <div className="deck-card" style={{ borderTopColor: color }} ref={dropdownRef}>
      {/* Main Card Interaction */}
      {hasMultipleLinks ? (
        <div className="deck-link action-trigger" onClick={handleCardClick}>
          <CardContent />
        </div>
      ) : (
        <a href={primaryLink} target="_blank" rel="noopener noreferrer" className="deck-link">
          <CardContent />
        </a>
      )}

      {/* Dropdown Menu */}
      {hasMultipleLinks && isOpen && (
        <div className="dropdown-menu">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      {/* Whatsapp Button */}
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="deck-whatsapp">
        💬 Contactar
      </a>
    </div>
  )
}