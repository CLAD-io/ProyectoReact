import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ArticuloProvider } from './contexts/articuloContext.jsx'
import { CarritoProvider } from './contexts/carritoContext.jsx'
import { LoginProvider } from './contexts/loginContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

import './index.css'


createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
    <ArticuloProvider>
    <CarritoProvider>
      <LoginProvider>
    <App />
    </LoginProvider>
    </CarritoProvider>
    </ArticuloProvider>
    </AuthProvider>
  // </StrictMode>,
)
