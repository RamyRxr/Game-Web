/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import NavBar from './components/NavBar'
import Features from './components/Features'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <HeroSection />
      <About />
      <Features />

      {/* <section className='relative w-screen h-screen bg-violet-50' /> */}
    </main>
  )
}

export default App