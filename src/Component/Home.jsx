import React from 'react'
import Header from './Header'
// import Buy from './Buy'
import SaleCountdown from './SaleConntdown'
import About from './About'
import Footer from './Footer'
import Presale from './Presale'
import Primenomic from './Primenomic'
// import Hero from './Hero'
// import Buy from './Buy'
import Free from './Free'
import WhitepaparRealease from './WhitepaparRealease'


const Home = () => {
  return (
    <div>
 
      <Header />
      <Free />
      <SaleCountdown />
      <Presale />
      <Primenomic />
      <WhitepaparRealease />
      <About />
      <Footer />
    </div>
  )
}

export default Home