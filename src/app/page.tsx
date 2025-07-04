'use client'
import { ShootingStars } from '@/components/ui/shooting-stars'
import {motion, useScroll, useTransform} from 'framer-motion'
import { Raleway,Inter } from 'next/font/google'
import { StarsBackground } from '@/components/ui/stars-background'
import { useRef,useEffect } from 'react'
import Image from 'next/image'
import Lenis from 'lenis'
import React from 'react'

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100'], // specify weights you want
  variable: '--font-raleway', // optional: if using as CSS variable
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // optional
  variable: '--font-inter', // optional, for CSS variable usage
});
function Page() {
  const mainRef = useRef(null);
   const {scrollYProgress} = useScroll({
    target:mainRef,
    offset:['start start','end start']
   })
    
const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  useEffect(()=>{
    const lenis = new Lenis({
      duration:5
    });
    function raf(time: any){
     lenis.raf(time) 
     requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf);
   },[])

  return (
    <div  ref={mainRef} className='relative w-full text-white bg-[#000000] overflow-hidden'>
     <div className='absolute top-0 w-full mt-5 px-16 flex justify-between'>
      <img src="/logo.webp" alt="logo" width={250} height={50}/>
      <span className={`bg-white text-black flex justify-center items-center p-2 w-40 font-bold rounded-full ${inter.className} `}>DASHBOARD</span>
     </div>

      <motion.div style={{y:bgY}} className='absolute h-full w-full'>
      <ShootingStars/>
      <ShootingStars/>
      <ShootingStars/>
      <ShootingStars/>
      <ShootingStars/>
      <ShootingStars/>
      <ShootingStars/>
      <ShootingStars/>   
      </motion.div>
       
      <motion.div   className='relative h-[100vh] w-full flex flex-col justify-center items-center'>
        
        <motion.div style={{y:bgY}} className='absolute h-full w-full'>
   
        <StarsBackground/>
        </motion.div>
      <motion.h1 initial={{opacity:0,filter:'blur(50px)'}} animate={{opacity:[0.1,0.5,1,0.8],filter:'blur(0px)'}} transition={{duration:1.1}} className={`text-8xl font-light ${raleway.className}`}>MISSION & VISION</motion.h1>
      <motion.span initial={{opacity:0}} animate={{opacity:1}} transition={{delay:2}}>
      <motion.h2 animate={{opacity:[0.2,1]}} transition={{repeat:Infinity,repeatType:'mirror',duration:1}} className='font-mono'>More ↓</motion.h2>
      </motion.span>
      </motion.div>


      <div className='relative flex flex-col items-center gap-16'>
      <h1 className='font-mono text-2xl'>Mission</h1>

        <motion.div style={{y:bgY}} className='absolute h-full w-full'>
        <ShootingStars/>
        <StarsBackground/>
        </motion.div>

      <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center gap-5`}>
      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}}  viewport={{ once: true, amount: 0.5 }}>  We spend two thirds of our life working</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.2}}  viewport={{ once: true, amount: 0.5 }}>  So why not we optimise this time for maximum learning and fun</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.4}}  viewport={{ once: true, amount: 0.5 }}> On things that we are passionate about</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.6}} viewport={{ once: true, amount: 0.5 }}>Going to work shouldn't bring up a sigh</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}>  Going to work should lit up our eyes</motion.p>
      <p></p>
      </div>

      <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center gap-5`}>
      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}}  viewport={{ once: true, amount: 0.5 }}>  We need to spend our time working</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.2}} viewport={{ once: true, amount: 0.5 }}>   On things that give us joy</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.4}}  viewport={{ once: true, amount: 0.5 }}>  On projects once we finish, we feel satisfied</motion.p>

      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.6}}  viewport={{ once: true, amount: 0.5 }}> Therefore at TechKareer, we want to help you find the perfect workplaces for</motion.p>


      </div>

      <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center gap-5`}>
      <motion.p className='text-nowrap flex' initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}>  If you love making video games, we want to connect you with the 
<a className='mx-5' title="Take-Two Interactive, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Rockstar_Games_Logo.svg"><img width="51" alt="Rockstar Games logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Rockstar_Games_Logo.svg/512px-Rockstar_Games_Logo.svg.png?20161113121956"/></a>
                  and 
<a className='mx-5' title="Ubisoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ubisoft_logo.svg"><img width="51"  style={{
        filter: 'invert(1) brightness(2)',
      }}alt="Ubisoft logo since 2017." src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ubisoft_logo.svg/512px-Ubisoft_logo.svg.png?20210605170316"/></a>
                  of the world
      </motion.p>


            <motion.p className='text-nowrap flex' initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}> If you love building software, we want to connect you with the 
<a className='mx-5' title="Meta Platforms, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Meta_Platforms_Inc._logo_(cropped).svg"><img width="51" alt="Meta Platforms Inc. logo (cropped)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/256px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png?20230731184236"/></a>
                  and 
<a className='mx-5' title="Ubisoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ubisoft_logo.svg"><img width="45"  style={{
        filter: 'invert(1) brightness(2)',
      }}alt="Ubisoft logo since 2017." src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/ChatGPT-Logo.svg/512px-ChatGPT-Logo.svg.png?20240214002031"/></a>
                  of the world
      </motion.p>


            <motion.p className='text-nowrap flex' initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}> If you love building hardwares, we want to connect you with the 
<a className='mx-5' title="Meta Platforms, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Meta_Platforms_Inc._logo_(cropped).svg"><img width="51" alt="Meta Platforms Inc. logo (cropped)" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/256px-Tesla_Motors.svg.png?20220430025811"/></a>
                  and 
<a  className='mx-5 mt-3' title="Ubisoft, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:Ubisoft_logo.svg"><img width="80"  style={{
        filter: 'invert(1) brightness(2)',
      }}alt="Ubisoft logo since 2017." src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/SpaceX-Logo.svg/256px-SpaceX-Logo.svg.png?20150525050531"/></a>
                  of the world
      </motion.p>
      </div>

      <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center`}>
      <motion.p className='text-nowrap flex' initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}>   We want to connect the <span className="font-light italic mx-2 text-purple-200 mr-3">Murphs</span> and <span className="font-light mx-2 text-purple-200 italic">Coops</span> of the world to the 
      <a className='mx-3' title="National Aeronautics and Space Administration, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:NASA_logo.svg"><img width="80" alt="NASA logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/64px-NASA_logo.svg.png?20181013191516"/></a>
         of the world
      </motion.p>

            <motion.p className='text-nowrap flex' initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}> so that we can push humanity further...
      </motion.p>


      </div>

      <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center`}>
            <motion.p className='text-nowrap flex italic' initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:0.6,filter:'blur(0px)'}} transition={{duration:1,delay:0.8}}  viewport={{ once: true, amount: 0.5 }}>                   Yes, we are big fans of <span className="text-blue-300 ml-3">Interstellar</span> :)
      </motion.p>


      </div>



      </div>


            <div className='relative flex flex-col items-center gap-16 mt-32'>
      <h1 className='font-mono text-2xl'>Vision</h1>
          <motion.div style={{y:bgY}} className='absolute h-[150vh] w-full'>
    
        <StarsBackground/>
        </motion.div>
      <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center gap-5`}>
      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}}  viewport={{ once: true, amount: 0.5 }}>   Connect all <span className="text-purple-200">8+ billion people</span> in the planet<br/>
                to their perfect workplaces.</motion.p>
      </div>

            <div className={`text-3xl ${raleway.className} flex flex-col justify-center items-center gap-5`}>
      <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}}  viewport={{ once: true, amount: 0.5 }}>    Help <span className="text-blue-200 text-2xl font-light">1M</span> people by <span className="text-purple-200">2026</span>.</motion.p>
            <motion.p initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}}  viewport={{ once: true, amount: 0.5 }}>     Help <span className="text-purple-200 text-2xl font-light">1B</span> people by <span className="text-blue-200">2030</span>.</motion.p>
      </div>

            <div className={`text-5xl ${raleway.className} flex flex-col justify-center items-center gap-5 mb-28`}>
      <motion.p  initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} transition={{duration:1}}  viewport={{ once: true, amount: 0.5 }}>LFG!</motion.p>

      </div>


      </div>

       <div className='relative flex justify-between text-white p-8 w-full opacity-60'>
                <motion.div style={{y:bgY}} className='absolute h-[100vh] w-full'>

        <StarsBackground/>
        </motion.div>
         <div className='flex flex-col px-5'>
          <img src="logo.webp" alt=""  width={200}/>
          <p className={`${inter.className} text-2xl w-[32rem]`}>The biggest tech opportunities aggregator. Find your next gig, internship, and job at our platform.</p>
          <span className='flex gap-3'><a href="https://x.com/techkareer" aria-label="X" className="hover:text-white"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="md:w-10 md:h-10" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path></svg></a>
          <a href="https://www.linkedin.com/company/thetechkareer" aria-label="LinkedIn" className="hover:text-white"><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="md:w-10 md:h-10" height="32" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></a></span>
         </div>


         <div className='flex text-white gap-10'>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>COMMUNITY</h1>
            <h2 className='opacity-65'>Discord</h2>
            <h2 className='opacity-65'>Whatsapp</h2>
            <h2 className='opacity-65'>Telegram</h2>
          </div>
          <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>OTHERS</h1>
            <h2 className='opacity-65'>Blog</h2>
            <h2 className='opacity-65'>Case Studies</h2>
           
          </div>
                   <div className='flex flex-col gap-2'>
            <h1 className='font-bold'>LEGAL</h1>
            <h2 className='opacity-65'>Privacy Police</h2>
            <h2 className='opacity-65'>Terms of Service</h2>
          </div>
         </div>
       </div>

    </div>
  )
}

export default Page