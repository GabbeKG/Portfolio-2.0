
import { useState } from 'react'

import Navbar from './components/Navbar'
import {BrowserRouter} from 'react-router-dom'
import './App.css'
import Hero from './components/Hero'
import ShowCase from './components/ShowCase'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/footer'

const App=()=> {
  

  return (
    <BrowserRouter>
      <div className=' w-screen h-screen relative z-0 bg-primary'>
        <div className=' '>

          <Navbar className='bg-[#535e9c]' />
          <Hero />
          <Experiences />
          <Skills />
          <ShowCase id='showcase' className="w-[90vw] " />
          <Contact />
          <Footer />
        </div>
      </div>
      
    </BrowserRouter>
  )
}

export default App
