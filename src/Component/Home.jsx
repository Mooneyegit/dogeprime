import React from 'react'
import Header from './Header'
import Buy from './Buy'
import SaleCountdown from './SaleConntdown'
import About from './About'
import Footer from './Footer'
import Presale from './Presale'

const Home = () => {
  return (
    <div>
      <Header />
      <SaleCountdown />
      <Presale />
      <About />
      <Footer />
    </div>
  )
}

export default Home