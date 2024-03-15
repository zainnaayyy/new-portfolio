import { motion } from "framer-motion";

const transitionVariants = {
  initial: {
    x: '100%',
    width: '100%',
  },
  animate: {
    x: '0%',
    width: '0%'
  },
  exit: {
    x: ['0%', '100%'],
    width: ['0%', '100%'],
  }
}

const Transition = ({pathname}) => {
  return (
    <>
      <motion.div className="fixed w-screen h-screen z-30 rounded-b-[100px] bg-[#2e2257]" animate={{height: '0vh'}} exit={{height: '100vh'}} transition={{duration: 0.6, ease: 'easeOut'}} />
      <motion.div className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white text-8xl cursor-default z-50 w-fit h-fit uppercase" initial={{opacity: 1}} animate={{opacity: 0}} exit={{opacity: 0}} transition={{duration: 0.5, ease: 'easeOut'}} >{pathname.substring(1)}</motion.div>
      <motion.div className="fixed w-screen h-screen z-30 rounded-t-[100px] bottom-0 bg-[#4b3792]" initial={{height:"140vh"}} animate={{height: '0vh', transition: { delay: 0.6 }}} />
      <motion.div className="fixed w-screen h-screen z-30 rounded-t-[100px] bottom-0 bg-[#3b2d71]" initial={{height:"140vh"}} animate={{height: '0vh', transition: { delay: 0.4 }}} />
      <motion.div className="fixed w-screen h-screen z-30 rounded-t-[100px] bottom-0 bg-[#2e2257]" initial={{height:"140vh"}} animate={{height: '0vh', transition: { delay: 0.2 }}} />
      {/* <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay: 0.6, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#3b2d71]" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay: 0.4, duration: 0.6, ease: 'easeInOut'}}></motion.div>
      <motion.div className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#4b3792]" variants={transitionVariants} initial="initial" animate="animate" exit="exit" transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}></motion.div> */}
    </>
  );
};

export default Transition;
