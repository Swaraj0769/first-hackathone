import '@fortawesome/fontawesome-free/css/all.min.css';
import { StrictMode } from 'react'
import ReactDOM,{ createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
      <StrictMode>
        <App />
        <Toaster toastOptions={{
    style: {
      background: "#333",
      color: "#fff",
    },
  }} position="top-right" reverseOrder={false} />
      </StrictMode>
    </BrowserRouter>
  ,
)
  