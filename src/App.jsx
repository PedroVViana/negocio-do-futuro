import React from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Highlights from './components/Highlights/Highlights'
import Price from './components/Price/Price'
import Questions from './components/Questions/Questions'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <div className="app">
      <Hero />
      <Benefits />
      <About />
      <Highlights />
      <Price />
      <Questions />
      <Footer />
      {/* Aqui você pode adicionar mais seções do site conforme necessário */}
    </div>
  )
}

export default App
