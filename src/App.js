import './App.css';
import {motion}  from 'framer-motion';
import Home from './Component/Home';
import Whitepaper from './Component/Whitepaper';
import { Route, Routes } from 'react-router-dom';
import Sales from './Component/Sales';



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
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sale" element={<Sales />} />
      <Route path="/Whitepaper" element={<Whitepaper/>} />
    </Routes>
    </motion.div>
    </div>
  );
}

export default App;
