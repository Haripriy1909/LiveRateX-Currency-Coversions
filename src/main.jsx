import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Stairs from './Animation/Stairs.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
  <StrictMode>
   <Stairs>
    <App />
    </Stairs>
  </StrictMode>
  </BrowserRouter>
)
