import React from 'react'
import App from './App'
import './index.css'
import { GameEngineProvider } from './hooks/useGameEngine'
import { insertCoin } from 'playroomkit'
import { createRoot } from 'react-dom/client'

insertCoin().then(() => {
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <GameEngineProvider>
      <App />
    </GameEngineProvider>
  </React.StrictMode>,
  )
})
