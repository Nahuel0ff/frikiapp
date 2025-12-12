import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/variables.css'
import './styles/base.css'
import './styles/header.css'
import './styles/sections.css'
import './styles/cards.css'
import './styles/footer.css'
import './styles/order-manager.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App />)