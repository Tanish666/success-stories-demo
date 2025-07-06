'use client'
import {motion, useScroll, useTransform} from 'framer-motion'
import { IconArrowNarrowRight } from "@tabler/icons-react";
import FlipCard from '@/components/ui/flip-card'
import { MorphingText } from '@/components/ui/morphingText'
import { TextHoverEffect } from '@/components/ui/text-hover-effect'
import { TextReveal } from '@/components/ui/TextReveal'
import { Raleway,Inter } from 'next/font/google'
import React, { useRef,useEffect,useState,useId } from 'react'
import { RetroGrid } from '@/components/ui/retrogrid'
import { TextAnimate } from '@/components/ui/textAnimate'
import { BackgroundGradient } from '@/components/ui/background-gradient'
import CommentReplyCard from '@/components/ui/comment-reply-card';
import { Opacity } from '@tsparticles/engine';

interface CarouselProps {
  slides: SlideData[];
}

interface SlideData {
  title: string;
  button: string;
  src: string;
}
 
interface CarouselControlProps {
  type: string;
  title: string;
  handleClick: () => void;
}

interface SlideProps {
  index: number;
  current: number;
  image:string,
  link:string,
  salary:string,
  title:string,
  companyLogo:string,
  description:string,
  subtitle:string,
  handleSlideClick: (index: number) => void;
  
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // optional
  variable: '--font-inter', // optional, for CSS variable usage
});


function Page() {
    const heroRef = useRef(null);
    const {scrollYProgress} = useScroll({
      target:heroRef,
      offset:['start start','end start']
    })


     const salary1 = {
        src: "https://cdn.techkareer.com/success-stories/manan.jpeg",
        title: "Manan Adhikari",
        category: "Product Designer (Contract)",
        companyLogo: "https://cdn.techkareer.com/success-stories/Luppa.jpeg",
        companyName: "Luppa",
          bio: "4.0 YOE, Ex Silver, HackerRank, Innovacer, and more.",
        linkedin: "https://linkedin.com/in/mananadhikari",
        salaryRange: "20-40 LPA",
        content: null,
     }

   
     const salary2 = [
      {
        src: "https://cdn.techkareer.com/success-stories/Debabrata.jpeg",
        title: "Debabrata Mondal",
        category: "AI Engineer (Full-Time)",
          bio: "2.0 YOE, Founder of citrus, an open-source vector database. Worked at Dashibase and Pebblely.",
        linkedin: "https://www.linkedin.com/in/0xdebabrata/",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/rifflix_logo.jpeg",
        companyName: "Rifflix",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Royal.jpeg",
        title: "Royal Sanga",
        category: "AI Engineer (Full-Time)",
          bio: "3.0 YOE, Extensive experience in building AI-powered apps",
        linkedin: "https://linkedin.com/in/royal-sanga-267655191",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/rifflix_logo.jpeg",
        companyName: "Rifflix",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Tushar.jpeg",
        title: "Tushar Verma",
        category: "Software Engineer (Full-Time)",
        bio: "1.0 YOE, Founder of CrafturaAI (craftura.art) and GupShupAI (gupshap.fun). Ex ChatGPT Writer and Adimis.",
        linkedin: "https://linkedin.com/in/tushar-verma-developer",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://pub-cb911cae9c3e4c4c887c2f8360e681c7.r2.dev/success-stories/space_harpoon.jpeg",
        companyName: "Space Harpoon",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Marvel.jpeg",
        title: "Marvel John",
        category: "QA Engineer (Full-Time)",
          bio: "3.0 YOE, Experienced with Web/iOS/Android testing. At last company, worked on 5+ AI based apps & 15+ hyper-casual games. Worked at Quiet Games (Game publisher), Gameberry Labs (Game Dev company), Indium Software (IT consulting firm), and more.",
        linkedin: "https://linkedin.com/in/marveljohn",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/Luppa.jpeg",
        companyName: "Luppa",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/lavish.jpeg",
        title: "Lavish Goyal",
        category: "Software Engineer (Contract)",
          bio: "2.0 YOE, Working at a YC startup",
        linkedin: "https://www.linkedin.com/in/goellavish10/",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/funnel_kit.jpeg",
        companyName: "Funnel Kit",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Joshua.jpeg",
        title: "Joshua D'Costa",
        category: "Growth Lead (Full-Time)",
          bio: "4.0 YOE, At last job at Xoxoday, generated over $150k in revenue & $2M pipeline via growth. Ex Unifynd Technologies and Points for Good.",
        linkedin: "https://www.linkedin.com/in/joshua-d-costa/",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/dodo.jpeg",
        companyName: "Dodo",
      },
    ]




    const textRevealY = useTransform(scrollYProgress,[0,1],["0%","-30%"])
    const words = [
      '20+ Satisfied Founders',
      '20+ Successful Candidates'
  ];

  return (
    <div  className='relative bg-[#000000] w-full text-white'>
      
       <div ref={heroRef} className='absolute top-0 w-full mt-5 px-16 flex justify-between'>
      <img src="/logo.webp" alt="logo" width={250} height={50}/>
      <span className={`bg-white text-black flex justify-center items-center p-2 w-40 font-bold rounded-full ${inter.className} `}>DASHBOARD</span>
     </div>

      
      <div className='relative flex gap-16 justify-center items-center w-full h-[100vh] '>
            <div className="absolute h-[150rem] flex items-center justify-center mb-20">
      <TextHoverEffect text="#TechKareer"  />
    </div>
 
      <motion.span initial={{opacity:0,filter:'blur(50px)'}} animate={{opacity:1,filter:'blur(0px)'}} 
      transition={{delay:1,duration:1.5}}
      className='relative flex flex-col justify-center items-center w-full text-[	#EDEADE] mt-[18rem] '>
      <MorphingText className='text-nowrap' texts={words}/>
          <h1 className='opacity-65 text-2xl font-mono'>Connecting exceptional talent with innovative companies</h1>
       </motion.span>
        
       <RetroGrid/>
      </div>

        <motion.div  className='h-[200vh] w-full bg-[#EDEADE]'>
          <TextReveal>LET'S SHED SOME LIGHT ON OTHER CAREERS. 💡</TextReveal>
        </motion.div>

        <div className='relative h-[100vh] w-full'>
         <motion.div initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)',}} viewport={{ once: true }}
      transition={{duration:1}} className='absolute top-0 p-12'>
          <h1 className='text-5xl font-mono'>20-40 LPA</h1>
          <h2 className='text-xl font-mono'>1 Success Story</h2> 
         </motion.div>
        
        <div className='h-full w-full mt-20'>
        <div className='flex justify-center gap-16 pt-44 px-24'>
          <BackgroundGradient>
       <img src={salary1.src} 
       className='object-cover w-[30vw] rounded-3xl' alt="" />
       </BackgroundGradient>
        <span className='text-xl'>

            <h1 className='mb-8 pt-4 text-5xl'>{salary1.title}</h1>
          <div className='flex gap-3 mb-4 items-center'>
              <img src={salary1.companyLogo} className='size-16 rounded-xl' alt="" />
          <span className='text-2xl mb-5 opacity-75'>{salary1.companyName}</span>
        </div>

    <TextAnimate animation="blurIn" duration={2} as="h1">
       {salary1.category+" "+salary1.bio}
    </TextAnimate>
         <span className='flex'>
          <h1 className='bg-[#EDEADE] text-black p-1 rounded-sm mt-5 w-28 h-8 font-mono'>{salary1.salaryRange}</h1>
          </span>
          <motion.button onClick={() => window.location.href = salary1.linkedin} whileHover={{scale:1.1}} className='mt-3  p-1 text-sm font-mono bg-[#0077B5] rounded-sm'>Linkedin</motion.button>
          </span>
       </div>
        </div>
        </div>


        <div className='relative h-[100vh] w-full overflow-hidden pb-52'>
         <motion.div viewport={{ once: true }} initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} 
      transition={{duration:1}} className='absolute top-0 p-12'>
          <h1 className='text-5xl font-mono'>10-20 LPA</h1>
          <h2 className='text-xl font-mono'>6 Success Story</h2> 
         </motion.div>
        
        <div className='p-52 flex justify-center items-center h-full w-full mt-20'>
        <Carousel/>
        </div>
        </div>


        <div className='relative h-[100vh] w-full overflow-hidden pb-52'>
         <motion.div viewport={{ once: true }} initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} 
      transition={{duration:1}} className='absolute top-0 p-12'>
          <h1 className='text-5xl font-mono'>5-10 LPA</h1>
          <h2 className='text-xl font-mono'>3 Success Story</h2> 
         </motion.div>
        
        <div className='p-52 flex justify-center items-center h-full w-full mt-20'>
        <Carousel2/>
        </div>
        </div>

        <div className='relative h-[100vh] w-full overflow-hidden pb-52'>
         <motion.div viewport={{ once: true }} initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} 
      transition={{duration:1}} className='absolute top-0 p-12'>
          <h1 className='text-5xl font-mono'>3-5 LPA</h1>
          <h2 className='text-xl font-mono'>3 Success Story</h2> 
         </motion.div>
        
        <div className='p-52 flex justify-center items-center h-full w-full mt-20'>
        <Carousel3/>
        </div>
        </div>
        

        <div className='flex flex-col'>

                 <h1 className='text-5xl mt-16 text-center '>Why wait so long? Let's get this party started already!🚀</h1>
        <motion.div viewport={{ once: true }} initial={{opacity:0,filter:'blur(50px)'}} whileInView={{opacity:1,filter:'blur(0px)'}} 
      transition={{duration:1}}  className='mt-20'>
        <CommentReplyCard
        initialComments={[
         {
        avatarColor: 'tech_kareer_logo.jpg',
        id: 1,
        text: [
        'What about your career? Ready to build it with us?'
        ],
        time: 'Just Now',
        user: 'TechKareer'
        }
        ]}
       />
       </motion.div>


       </div>


  <div className='relative flex justify-between text-white p-8 w-full opacity-60'>
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








const Slide = ({
  image,
  link,
  salary,
  title,
  companyLogo,
  description,
  subtitle,
  index, current, handleSlideClick }: SlideProps) => {
  const slideRef = useRef<HTMLLIElement>(null);
 
  const xRef = useRef(0);
  const yRef = useRef(0);
  const frameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return;
 
      const x = xRef.current;
      const y = yRef.current;
 
      slideRef.current.style.setProperty("--x", `${x}px`);
      slideRef.current.style.setProperty("--y", `${y}px`);
 
      frameRef.current = requestAnimationFrame(animate);
    };
 
    frameRef.current = requestAnimationFrame(animate);
 
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);
 
  const handleMouseMove = (event: React.MouseEvent) => {
    const el = slideRef.current;
    if (!el) return;
 
    const r = el.getBoundingClientRect();
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2));
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2));
  };
 
  const handleMouseLeave = () => {
    xRef.current = 0;
    yRef.current = 0;
  };
 
  const imageLoaded = (event: React.SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.style.opacity = "1";
  };
 
   
 
  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform:
            current !== index
              ? "scale(0.98) rotateX(8deg)"
              : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
  <FlipCard
  description={description}
  salary={salary}
  link={link}
  image={image}
  rotate="y"
  subtitle={subtitle}
  title={title}
  companyLogo={companyLogo}
/>
      </li>
    </div>
  );
};
 

 
const CarouselControl = ({
  type,
  title,
  handleClick,
}: CarouselControlProps) => {
  return (
    <button
      className={`w-10 mt-6 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <IconArrowNarrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  );
};
 

 
function Carousel() {
  const [current, setCurrent] = useState(0);
        const salary2 = [
      {
        src: "https://cdn.techkareer.com/success-stories/Debabrata.jpeg",
        title: "Debabrata Mondal",
        category: "AI Engineer (Full-Time)",
          bio: "2.0 YOE, Founder of citrus, an open-source vector database. Worked at Dashibase and Pebblely.",
        linkedin: "https://www.linkedin.com/in/0xdebabrata/",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/rifflix_logo.jpeg",
        companyName: "Rifflix",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Royal.jpeg",
        title: "Royal Sanga",
        category: "AI Engineer (Full-Time)",
        bio: "3.0 YOE, Extensive experience in building AI-powered apps",
        linkedin: "https://linkedin.com/in/royal-sanga-267655191",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/rifflix_logo.jpeg",
        companyName: "Rifflix",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Tushar.jpeg",
        title: "Tushar Verma",
        category: "Software Engineer (Full-Time)",
        bio: "1.0 YOE, Founder of CrafturaAI (craftura.art) and GupShupAI (gupshap.fun). Ex ChatGPT Writer and Adimis.",
        linkedin: "https://linkedin.com/in/tushar-verma-developer",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://pub-cb911cae9c3e4c4c887c2f8360e681c7.r2.dev/success-stories/space_harpoon.jpeg",
        companyName: "Space Harpoon",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Marvel.jpeg",
        title: "Marvel John",
        category: "QA Engineer (Full-Time)",
          bio: "3.0 YOE, Experienced with Web/iOS/Android testing. At last company, worked on 5+ AI based apps & 15+ hyper-casual games. Worked at Quiet Games (Game publisher), Gameberry Labs (Game Dev company), Indium Software (IT consulting firm), and more.",
        linkedin: "https://linkedin.com/in/marveljohn",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/Luppa.jpeg",
        companyName: "Luppa",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/lavish.jpeg",
        title: "Lavish Goyal",
        category: "Software Engineer (Contract)",
          bio: "2.0 YOE, Working at a YC startup",
        linkedin: "https://www.linkedin.com/in/goellavish10/",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/funnel_kit.jpeg",
        companyName: "Funnel Kit",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Joshua.jpeg",
        title: "Joshua D'Costa",
        category: "Growth Lead (Full-Time)",
          bio: "4.0 YOE, At last job at Xoxoday, generated over $150k in revenue & $2M pipeline via growth. Ex Unifynd Technologies and Points for Good.",
        linkedin: "https://www.linkedin.com/in/joshua-d-costa/",
        salaryRange: "10-20 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/dodo.jpeg",
        companyName: "Dodo",
      },
    ]
  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? salary2.length - 1 : previous);
  };
 
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === salary2.length ? 0 : next);
  };
 
  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };
 
  const id = useId();
 
  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / salary2.length)}%)`,
        }}
      >
        {salary2.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            image={slide.src}
            salary={slide.salaryRange}
            description={`${slide.category} ${slide.bio}`}
            link={slide.linkedin}
            companyLogo={slide.companyLogo}
            subtitle={slide.companyName}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
 
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
 
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}



export function Carousel2() {
  const [current, setCurrent] = useState(0);
        const salary2 =[
      {
        src: "https://cdn.techkareer.com/success-stories/akshat.jpeg",
        title: "Akshat Goel",
        category: "Software Engineer (Full-Time)",
          bio: "1.0 YOE, Ex SDE at Procurenet. Reported to the CEO Gurbaksh Chahal, a prominent serial entrepreneur.",
        linkedin: "https://www.linkedin.com/in/akshatgoel7/",
        salaryRange: "5-10 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/enpointe.jpeg",
        companyName: "Enpointe",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/Sahil.jpeg",
        title: "Sahil Zambani",
        category: "Software Engineer (Full-Time)",
          bio: "1.0 YOE, Runs his own frontend dev agency",
        linkedin: "https://linkedin.com/in/sahilzambani",
        salaryRange: "5-10 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/enpointe.jpeg",
        companyName: "Enpointe",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/manu.jpeg",
        title: "Manu Goel",
        category: "Software Engineer (Full-Time)",
          bio: "1.0 YOE, Launched his own Outlook extension to speed up reviewing emails and drafting new ones. Had good work experience, worked remotely for an AI startup where he built multiple products from scrach and mentored juniors.",
        linkedin: "https://www.linkedin.com/in/manu-goel-7899781a0",
        salaryRange: "5-10 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/aeos.jpeg",
        companyName: "Aeos",
      },
    ]

  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? salary2.length - 1 : previous);
  };
 
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === salary2.length ? 0 : next);
  };
 
  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };
 
  const id = useId();
 
  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / salary2.length)}%)`,
        }}
      >
        {salary2.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            image={slide.src}
            salary={slide.salaryRange}
            description={`${slide.category} ${slide.bio}`}
            link={slide.linkedin}
            companyLogo={slide.companyLogo}
            subtitle={slide.companyName}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
 
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
 
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}


export function Carousel3() {
  const [current, setCurrent] = useState(0);
        const salary2 =[
      {
        src: "https://cdn.techkareer.com/success-stories/jignesh.jpeg",
        title: "Jignesh Sharma",
        category: "Software Engineer (Full-time)",
          bio: "0.5 YOE, Had PHP specific expertise which the hiring partner (FunnelKit) required",
        linkedin: "https://linkedin.com/in/jignesh-sharma-a6243b234",
        salaryRange: "3-5 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/funnel_kit.jpeg",
        companyName: "Funnel Kit",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/prakher.jpeg",
        title: "Prakhar Shukla",
        category: "Software Engineer (Internship)",
          bio: "1.0 YOE, Founder of Andronix (1.7M+ downloads, ranks #1), An app that lets you install linux distros on Android, and Lumoflo (beta) Centralised marketplace with separate domains for customers. All batteries included e-commerce store created for merchants.",
        linkedin: "https://linkedin.com/in/iamprakharshukla",
        salaryRange: "3-5 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/casecraft.jpeg",
        companyName: "CaseCraft",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/saket.jpeg",
        title: "Saket Sarin",
        category: "Software Engineer (Internship)",
          bio: "1.0 YOE, Ex SDE at DoWhile (Backed by Sequoia and Nexus Venture Partners), MFSewa, and E33 Productions",
        linkedin: "https://linkedin.com/in/saketsarin",
        salaryRange: "3-5 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/banterai.jpeg",
        companyName: "BanterAI",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/utkarsh.jpeg",
        title: "Utkarsh Utkarsh",
        category: "Software Engineer (Internship)",
        bio: "0.5 YOE, Built impressive projects for college hackathons and portfolio. Contributor to GeeksForGeeks articles.",
        linkedin: "https://linkedin.com/in/utkarsh575",
        salaryRange: "3-5 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/Slashbase.jpeg",
        companyName: "Slashbase",
      },
      {
        src: "https://cdn.techkareer.com/success-stories/sagar.jpeg",
        title: "Sagar Pant",
        category: "3D Designer (Freelance)",
          bio: "2.0 YOE, Worked as an indie 3D generalist and VFX artist at Wrought Studios.",
        linkedin: "https://linkedin.com/in/dokutaiyo",
        salaryRange: "3-5 LPA",
        content: null,
        companyLogo: "https://cdn.techkareer.com/success-stories/reddygames_logo.jpeg",
        companyName: "Reddy Games",
      },
    ]


  const handlePreviousClick = () => {
    const previous = current - 1;
    setCurrent(previous < 0 ? salary2.length - 1 : previous);
  };
 
  const handleNextClick = () => {
    const next = current + 1;
    setCurrent(next === salary2.length ? 0 : next);
  };
 
  const handleSlideClick = (index: number) => {
    if (current !== index) {
      setCurrent(index);
    }
  };
 
  const id = useId();
 
  return (
    <div
      className="relative w-[70vmin] h-[70vmin] mx-auto"
      aria-labelledby={`carousel-heading-${id}`}
    >
      <ul
        className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * (100 / salary2.length)}%)`,
        }}
      >
        {salary2.map((slide, index) => (
          <Slide
            key={index}
            title={slide.title}
            image={slide.src}
            salary={slide.salaryRange}
            description={`${slide.category} ${slide.bio}`}
            link={slide.linkedin}
            companyLogo={slide.companyLogo}
            subtitle={slide.companyName}
            index={index}
            current={current}
            handleSlideClick={handleSlideClick}
          />
        ))}
      </ul>
 
      <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
        <CarouselControl
          type="previous"
          title="Go to previous slide"
          handleClick={handlePreviousClick}
        />
 
        <CarouselControl
          type="next"
          title="Go to next slide"
          handleClick={handleNextClick}
        />
      </div>
    </div>
  );
}