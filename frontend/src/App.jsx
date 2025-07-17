import { useState, useEffect } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Dashboard from './components/dashboard'
import "@fontsource/roboto";
//import Footer from './components/footer'

import './App.css'

function App() {

  return (
    <div className="flex flex-col h-screen justify-between">
    <Header />
    <Dashboard />
    <Footer />
    </div>
  )
}

export default App
