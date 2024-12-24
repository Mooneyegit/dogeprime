import React from 'react'
import Header from './Header'
import Buy from './Buy'
import SaleCountdown from './SaleConntdown'
import About from './About'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Header />
      <SaleCountdown />
      <Buy />
      <About />
      <Footer />
    </div>
  )
}

export default Home