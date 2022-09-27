import './App.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


const boxVariant = {
  visible: { opacity: 1, scale: 1, x: 400, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0, x: 800 },
}


const Box = ({ num, clas }) => {
  const control = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div variants={boxVariant}
      className={`${clas} box`}
      initial="hidden"
      animate={control}
      ref={ref}
    >
      <h1>Box {num}</h1>
    </motion.div>
  );
}


function App() {
  return (
    <div className="App">
      <Box num={1} clas={'tictactoe'}/>
      <Box num={2}/>
      <Box num={3}/>
      <Box num={4}/>
      <Box num={5}/>
      <Box num={6}/>
    </div>
  );
}

export default App;
