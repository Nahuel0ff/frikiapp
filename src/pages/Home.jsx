import React from 'react'
import { DECKS } from '../data/windows.js'
import DeckSection from '../components/DeckSection.jsx'

export default function Home() {
  const specialDecks = DECKS.slice(0, 2)
  const otherDecks = DECKS.slice(2)

  return (
    <div className="home">
      <DeckSection title="Core Vendedores" decks={specialDecks} />
      <DeckSection title="Mortales" decks={otherDecks} />
    </div>
  )
}