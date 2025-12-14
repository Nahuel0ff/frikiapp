import React, { useState, useEffect, useRef } from 'react'

export default function DeckCard({ name, links, color, whatsapp, ck, icon }) {
  const [isOpen, setIsOpen] = useState(false)
  const [imgError, setImgError] = useState(false)
  const dropdownRef = useRef(null)

  const iconSrc = icon || '/favicon.svg'

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
        {!imgError ? (
          <img
            src={iconSrc}
            alt={name}
            className="deck-icon"
            onError={() => setImgError(true)}
          />
        ) : (
          <svg
            className="deck-icon-fallback"
            width="48"
            height="48"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-hidden
          >
            <rect width="48" height="48" rx="8" fill="rgba(255,255,255,0.95)" />
            <text x="50%" y="50%" textAnchor="middle" dominantBaseline="central" fontWeight="700" fontSize="20" fill="#111">M</text>
          </svg>
        )}
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
            <span>Ver Link →</span>
          )}
        </div>
      </div>
    </>
  )

  return (
    <div className={`deck-card ${isOpen ? 'expanded' : ''}`} style={{ borderTopColor: color }} ref={dropdownRef}>
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

      {/* Links panel: expands the card to reveal available links */}
      {hasMultipleLinks && (
        <div className="links-panel" aria-hidden={!isOpen}>
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