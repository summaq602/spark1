import React from "react"
import { Navbar } from "./components/Navbar"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Faq from "./components/Faq"
import ContactForm from "./components/ContactForm"
import Footer from "./components/Footer"


function App() {
   return (
    <div className='overflow-hidden'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Faq/>
      <ContactForm/>
      <Footer/>
      
    </div>
  )
}

export default App
