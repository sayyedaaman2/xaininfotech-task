import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./global.css"
import App from './App.jsx'


createRoot(document.body).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
