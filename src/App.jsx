/* eslint-disable no-unused-vars */
import React from 'react'
import HeroSection from './components/HeroSection'
import About from './components/About'
import NavBar from './components/NavBar'
import Features from './components/Features'
import Story from './components/Story'
import Contact from './components/Contact'
import Footer from './components/Footer'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <NavBar />
      <HeroSection />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />

      {/* <section className='relative w-screen h-screen bg-violet-50' /> */}
    </main>
  )
}

export default App