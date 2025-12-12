import React from 'react'
import DeckCard from './DeckCard.jsx'

export default function DeckSection({ title, decks }) {
    return (
        <div className={title === 'Core Vendedores' ? 'special-section' : 'container'}>
            <h2>{title}</h2>
            <div className="grid">
                {decks.map((deck) => (
                    <DeckCard key={deck.id} {...deck} />
                ))}
            </div>
        </div>
    )
}
