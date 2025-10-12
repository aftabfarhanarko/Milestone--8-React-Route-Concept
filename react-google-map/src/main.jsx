import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { APIProvider } from '@vis.gl/react-google-maps'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <APIProvider apiKey='AIzaSyC1234567890abcdefgHIJKLMNOPQ'>
    <App/>
   </APIProvider>
  </StrictMode>,
)
