import React from 'react'
import ReactDom from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {UserProvider} from './context/userContext'

ReactDom.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <App />
  </UserProvider>,
)
