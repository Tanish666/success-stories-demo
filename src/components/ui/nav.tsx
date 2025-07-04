import React from 'react'
import {motion} from 'framer-motion'
import { Barlow_Semi_Condensed, Plus_Jakarta_Sans,Oswald } from 'next/font/google';
import { AnimatedBackground } from '../motion-primitives/animated-background';
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['700'], // Adjust the weights as per your needs
});


function Nav() {
    const tabs = [ "About","Contact","Submit"]; 
  
    return (
    <motion.span initial={{opacity:0,filter:'blur(10px)'}} animate={{opacity:1,filter:'blur(0px)'}} transition={{delay:9,duration:1}} className={`${plusJakartaSans.className} absolute top-5 flex gap-2 text-[1.2vw] `}>
    <AnimatedBackground
    className='rounded-lg bg-zinc-300 dark:bg-zinc-800'
    transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.3,
              }}
              enableHover
    >   

      {tabs.map((tab, index) => (
          <button
            key={index}
            data-id={tab}
            type='button'
            className='p-2 cursor-pointer'
          >
            {tab}
          </button>
        ))}

    </AnimatedBackground>
</motion.span>
  )
}

export default Nav