import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './pages/Login/login'
import './index.css'
import Cadastro from './pages/Cadastro'
import App from './app'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)