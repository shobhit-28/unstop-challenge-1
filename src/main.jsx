import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { StateHandler } from './context/stateHandlerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <StateHandler>
        <App />
      </StateHandler>
    </BrowserRouter>
  </React.StrictMode>,
)
