import React from 'react'
import Hero from './Hero'
import Header from './Header'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'
import  Footer  from './Footer'


const Layout = () => {
  return (
    <>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Portfolio/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default Layout