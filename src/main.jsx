import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app.jsx' // Importing lowercase file as Uppercase 'App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* This MUST be Capital 'A' so your friends see the site, not a blank screen */}
    <App /> 
  </React.StrictMode>
)