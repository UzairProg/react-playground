import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeContext from './context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeContext> {/* wraps the whole app so every component can read theme context */}
    <App />
  </ThemeContext>,
)
