import './App.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Tapedeck from './Tapedeck.jsx';
import Tictactoe from './Tictactoe.jsx';
import Braintrain from './Braintrain.jsx';
import Burning from './Burning.jsx';


const boxVariant = {
  visible: { opacity: 1, scale: 1, x: '20vw', transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 800 },
}

function App() {
  return (
    <div className="App">
      <Burning />
      <Braintrain />
      <Tapedeck />
      <Tictactoe />
    </div>
  );
}

export default App;
