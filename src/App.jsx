import React from 'react'
import ThemeToggle from './components/ThemeToggle.jsx'
import Home from './pages/Home.jsx'
import OrderManager from './components/OrderManager.jsx'

export default function App() {

  return (
    <div className="app">
      <header className="header">
        <h1>Mercado Friki</h1>
        <ThemeToggle />
      </header>
      <main>
        <Home />
      </main>
      <OrderManager />
      <footer className="footer">
        <p>&copy; 2025 Mercado Friki. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}