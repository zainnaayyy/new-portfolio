'use client'
import { useRef } from 'react'
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key={"1"} />,
          <FaCss3 key={"2"} />,
          <FaJs key={"3"} />,
          <FaReact key={"4"} />,
          <SiNextdotjs key={"5"} />,
          <SiFramer key={"6"} />,
          <FaWordpress key={"7"} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma key={"1"} />, <SiAdobexd key={"2"} />, <SiAdobephotoshop key={"3"} />],
      },
    ],
  },
  {
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];
import { motion, useInView, useScroll } from "framer-motion";
import Brain from "@/components/Brain";

const About = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
  <motion.div
    className='h-full'
    initial={{ y:"-200vh" }}
    animate={{y:"0%"}}
    transition={{ duration: 1 }}
  >
    {/* container */}
    <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
      {/* text conatiner */}
      <div className='p-4 pt-40 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:1/2'>
        {/* biography conatiner */}
        <div className='flex flex-col gap-12 justify-center'>
          <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
          <p className='text-lg'>
            Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is simply dummy text. Lore
            Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is simply dummy asdjas
            Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is simply dummysadasdsadas
            Lorem Ipsum 
          </p>
          <span className='italic'>
            Lorem Ipsum is Lorem Ipsum and Lorem Ipsum is simply.
          </span>
          <div className='self-end'>
          <svg width="120" height="120" viewBox="0 0 508 428" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 172C-13.3844 148.521 7.87802 105.946 28.9444 82.6111C46.7303 62.9099 69.0506 47.345 90 31.2222C94.9869 27.3843 100.03 23.6199 105.056 19.8333C107.465 18.0182 113.091 12.4849 113 15.5C112.819 21.4713 108.627 29.9848 106.889 35.2222C101.454 51.6004 95.9591 67.9641 90.6667 84.3889C73.0536 139.05 59.8432 194.691 50.4444 251.333C45.3794 281.858 40.1901 312.351 34.5556 342.778C33.7897 346.914 30.8688 359.192 31.8889 355.111C33.9037 347.052 36.6608 339.106 39.5556 331.333C46.3429 313.11 53.6593 288.412 69.4444 275.556C91.3003 257.754 117.928 285.518 141.556 281.222C152.493 279.234 162.93 269.605 170.333 262C183.425 248.552 191.774 231.098 198.444 213.778C203.5 200.65 206.821 187.124 209.167 173.278C211.382 160.205 214.008 145.541 211.556 132.278C207.031 107.806 186.34 151.34 184.056 156.833C174.497 179.817 167.132 208.909 172.222 233.889C173.572 240.512 176.929 244.506 184 244.444C196.828 244.333 204.021 232.959 209.278 222.833C221.433 199.419 227.962 172.371 229.556 146.111C230.201 135.472 228.3 125.866 227.222 115.444C227.139 114.639 227.403 112.29 227.667 113.056C230.448 121.146 231.357 130.211 233.056 138.556C235.892 152.489 249.492 214.964 273.778 184C286.488 167.795 289.653 142.429 293.167 122.778C294.698 114.215 295.852 105.28 296 96.5556C296.127 89.045 295.925 93.2572 296.778 99.0556C298.619 111.573 301.129 129.367 310 139.333C321.609 152.375 332.202 119.093 333.556 113.667C337.15 99.2563 338.881 84.3846 341.444 69.7778C342.529 63.5972 343.744 56.0898 345.833 49.9444C346.366 48.3792 347.736 45.3052 349.111 46.2222C352.342 48.3764 353.968 55.534 355.333 58.7778C358.458 66.1991 361.556 73.8348 365.667 80.7778C369.154 86.6673 373.521 93.1209 380.111 95.8889C389.459 99.815 396.49 92.2007 401.5 85.3333C411.623 71.457 418.492 55.5929 426.389 40.4444C431.826 30.0149 436.845 21.3154 450 25.3333C461.749 28.9217 471.658 36.1867 484.056 38.2222C499.665 40.7849 502.826 11.5211 506 2" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M284 46C284 57.3148 284 68.6296 284 79.9444C284 86.8693 282.427 79.9889 281 76.5556C278.084 69.5425 275.022 63.085 270.5 57.0556C270.109 56.5346 265.753 53.546 268.556 54.0556C272.886 54.8429 277.254 59.9324 281.556 61.5556C286.016 63.2386 289.688 66.4176 294.056 68.0556C295.313 68.5272 301.562 73 298 73C288.519 73 279.037 73 269.556 73C266.603 73 260.762 74.3613 263 70.4444C263.975 68.7385 266.653 67.6516 268.444 67C271.867 65.7555 273.727 62.1805 276.222 59.7778C280.289 55.8615 285 52.9432 285 47" stroke="white" stroke-width="3" stroke-linecap="round"/>
            <path d="M56 426C65.487 424.563 71.0625 417.762 77.7222 411.389C89.7365 399.891 102.545 389.299 114.444 377.667C169.586 323.764 231.084 278.197 292.944 232.389C323.709 209.608 355.26 187.941 386.778 166.222C407.231 152.128 427.843 137.753 449.833 126.111C464.689 118.246 483.085 110.114 500 108" stroke="white" stroke-width="3" stroke-linecap="round"/>
          </svg>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
            </motion.svg>
        </div>
        {/* skills conatiner */}
        <div className='flex flex-col gap-12 justify-center' ref={skillRef}>
          <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
          >
            SKILLS
          </motion.h1>
          <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
          >
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              JavaScript
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              TypeScript
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              React.JS
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              NEXT.JS
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              Node JS
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              Express JS
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              MongoDB
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              PostgreSQL
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              MSSQL
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              MySQL
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              Tailwind CSS
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              Dot NET Core
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              Python
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              AWS
            </div>
            <div className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
              Azure DevOps
            </div>
          </motion.div>
          {/* SKILL SCROLL SVG */}
          <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#ffffff" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#ffffff"
                strokeWidth="1"
              ></path>
          </motion.svg>
        </div>
        {/* experience conatiner */}
        <div className='flex flex-col gap-12 justify-center pb-48' ref={experienceRef}>
          <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
          >
            Experience
          </motion.h1>
          <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
          >
            <div className='flex justify-between h-48'>
              <div className='w-1/3'>
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Senior JavaScript Engineer</div>
                <div className='p-3 text-sm italic'>My current employment.Way better than the position before!</div>
                <div className='p-3 text-accent text-sm font-semibold'>2022 - Present</div>
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Apple</div>
              </div>
              <div className='w-1/6'>
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-accent bg-white -left-2'></div>
                </div>
              </div>
              <div className='w-1/3'></div>
            </div>
            <div className='flex justify-between h-48'>
              <div className='w-1/3'>
              </div>
              <div className='w-1/6'>
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-accent bg-white -left-2'></div>
                </div>
              </div>
              <div className='w-1/3'>
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Senior JavaScript Engineer</div>
                <div className='p-3 text-sm italic'>My current employment.Way better than the position before!</div>
                <div className='p-3 text-accent text-sm font-semibold'>2022 - Present</div>
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Apple</div>
              </div>
            </div>
            <div className='flex justify-between h-48'>
              <div className='w-1/3'>
                <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg text-black'>Senior JavaScript Engineer</div>
                <div className='p-3 text-sm italic'>My current employment.Way better than the position before!</div>
                <div className='p-3 text-accent text-sm font-semibold'>2022 - Present</div>
                <div className='p-1 rounded bg-white text-sm font-semibold w-fit text-black'>Apple</div>
              </div>
              <div className='w-1/6'>
                <div className='w-1 h-full bg-gray-600 rounded relative'>
                  <div className='absolute w-5 h-5 rounded-full ring-4 ring-accent bg-white -left-2'></div>
                </div>
              </div>
              <div className='w-1/3'></div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* SVG  conatiner */}
      <div className='hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2'>
        <Brain scrollYProgress={scrollYProgress} />
      </div>
    </div>
  </motion.div>
)
};

export default About;
