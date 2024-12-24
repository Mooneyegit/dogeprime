import './App.css';
import {motion}  from 'framer-motion';
import Home from './Component/Home';



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
      
     <Home />
    </motion.div>
    </div>
  );
}

export default App;
