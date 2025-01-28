import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1>What Birds Eat Game</h1>
    <App />
    <footer>v1 by Michael Phillips <a href="http:\\www.area2.co.uk">home</a></footer>
  </StrictMode>,
)
