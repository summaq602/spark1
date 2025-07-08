import React from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Faq from "./components/Faq";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
