import { Sora } from 'next/font/google'
import { motion } from 'framer-motion';

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

import { Header, Nav, TopLeftImg } from '../components'

const Layout = ({children}) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
      <motion.div className='h-screen' initial={{y:'-200vh'}} animate={{y:"0%"}} transition={{duration: 1}}>
        {children}
      </motion.div>
    </div>
  ) 
};

export default Layout;
