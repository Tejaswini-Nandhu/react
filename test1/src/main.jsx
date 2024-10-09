import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MockApiComponent from './MockApiComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MockApiComponent />
  </StrictMode>,
)
