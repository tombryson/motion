import Tictactoe from "./Tictactoe.jsx";
import './App.css';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: '20vw', transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0, x: 800 },
  }

const Box = ({ num, projectClass, project, children }) => {
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
      <>
        <motion.div variants={boxVariant}
          className={`project-container`}
          initial="hidden"
          animate={control}
          ref={ref}
        >
          <div className='project-underlay'>
          </div>
          <div className={`project-overlay ${projectClass}`}>
          <div>{children}</div>
          </div>
        </motion.div>
        </>
      );
    }

export default Box;