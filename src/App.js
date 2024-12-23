import './App.css';
import {motion}  from 'framer-motion'
import Buy from './Component/Buy';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import SaleCountdown from './Component/SaleConntdown';
import Footer from './Component/Footer';
import Total from './Component/Total';
import About from './Component/About';
import Primenomic from './Component/Primenomic';


function App() {
  return (
    <div className="App">
      <motion.div
      variants={{
        hidden:{opacity:0, y:75},
        visible:{opacity:1, y:0}
      }}
      initial="hidden"
      animate="visible"
      transition={{duration:0.5, delay:0.25}}
      >  
      <Navbar />
      <Hero />
      <SaleCountdown />
      <Buy />
      <Total />
      <About />
      <Primenomic />
      <Footer />
    </motion.div>
    </div>
  );
}

export default App;
