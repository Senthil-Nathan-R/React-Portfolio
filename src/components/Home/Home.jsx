import React, { useState, useEffect } from 'react'
import './Home.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, EffectCreative, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import profile from '../../assets/profile img.png'
import gradient from '../../assets/radial gradient.webp'
import whitegradient from '../../assets/white radial gradient.webp'
import triangle from '../../assets/triangle.svg'
import zigzagLine from '../../assets/zigzag-line.svg'
import { Link } from 'react-router-dom'
import ServiceCard from './ServiceCard'
import ProjectCard from '../Portfolio/ProjectCard'
import Connect from '../Connect'
import TypeEffect from './TypeEffect';

import portfolio from '../../assets/Portfolio.png';
import voting from '../../assets/Voting.png';


function Home({ isLoading }) {
  const [waitingTime, setWaitingTime] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setWaitingTime(true)
      }, 1800);
    }
  }, [])


  return (
    <>
      <section className='home-hero-section pt-32 pb-20 relative'>
        <img src={triangle} alt="triangle" className='absolute left-[10%] top-[20%] animate-rotate-up-down-left' />
        <img src={triangle} alt="triangle" className='absolute right-[12%] top-[30%] rotate-[78deg] animate-rotate-up-down-right' />
        <img src={triangle} alt="triangle" className='absolute left-2/4 bottom-[10%] rotate-[-90deg] animate-rotate-left-right' />
        <div className='container flex flex-wrap md:flex-nowrap justify-between items-center mx-auto my-10 gap-4 px-4'>
          <div className='relative '>
            <h1 className='text-2xl font-cairo font-semibold tracking-wide'>Hello World! <span className='emoji-wave' role='img' aria-labelledby='wave'>👋</span> I am  </h1><span className='text-secondary text-[42px] font-extrabold font-cairo tracking-wide relative sm:whitespace-normal whitespace-nowrap'><svg aria-hidden="true" id="name-underline" viewBox="0 0 297 33" className={`absolute left-0 top-[64%] h-[0.58em] w-full fill-transparent sm:opacity-0  ${waitingTime ? "block" : "hidden"} stroke-[#9fecff4b] stroke-[3.5]`} preserveAspectRatio="none"><path d="M0.999989 20.5C79.5 4.5 85.5 5.5 85.5 5.5C354.5 -9.50001 -56.5262 35.0001 216.5 22.8813C235.5 22.0379 266.931 23.7779 296.5 31" /></svg> <span className='glow'>Senthil Nathan R</span></span>
            <h2 className='text-3xl font-extrabold tracking-wide text-accent font-cairo my-7'><TypeEffect /></h2>
            <p className='hover:text-secondary fill-white w-max hover:fill-secondary mt-14 transition-all duration-300'>
              <Link to={'/portfolio'} className='learn-more-link flex items-center relative font-medium text-lg'><span>Explore My Portfolio</span> <svg xmlns="http://www.w3.org/2000/svg" className='h-[18px] fill-inherit ms-2' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg></Link>
            </p>
          </div>
          <div>
    <img
        src='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/u8g7elqqmc3ogww8lkg3'
        className='hidden md:block h-[300px] md:h-[400px] mt-10 md:mt-0'
        alt="homepage-illustration"
    />
</div>

        </div>
      </section>

      <section className='container px-4 mx-auto'>
        {/* Get To know me div */}
        <div className='py-20 '>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-center text-4xl md:mt-10 sm:mt-0'>Get To Know Me</h1>
            <hr className='border-b-4 border-secondary w-36 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <div className='flex flex-col md:flex-row gap-16 items-center'>
            <div>
              <p className='text-accent'>My journey in programming has been a thrilling ride of learning and discovery. I’ve developed skills in HTML, CSS, JavaScript, and Java, and I’m expanding my expertise in React JS and SpringBoot.</p><br />
              <p className='text-accent'>I enjoy building dynamic web applications that offer smooth user experiences. From front-end design to back-end logic, I take pleasure in creating efficient and elegant solutions.</p><br />
              <p className='text-accent'>I’m keen on exploring new technologies and frameworks, staying updated with trends in web development. Whether it’s interactive UIs or robust back-end systems, I’m passionate about turning ideas into reality through code.</p>

            </div>
            <div className='relative w-full flex justify-center'>
              <img src={profile} alt="profile-img" className='h-52 z-10' />
              <img src={gradient} alt="gradient" className='absolute -top-16 h-[350px] z-0' />
              <img src={whitegradient} alt="gradient" className='absolute blur-xl h-52  z-0' />
            </div>
          </div>
        </div>

        {/* Services div */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl mt-10 text-center'>What Can I Do <span className='whitespace-nowrap'>For You</span></h1>
            <hr className='border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent '>Discover how I can transform your projects from concept to completion. As a skilled Fullstack developer, I specialize in building seamless web applications, combining frontend expertise with React.js and backend strength in Java and Spring Boot. With a deep understanding of SQL databases, I ensure efficient data management and robust backend solutions. 
            Let's collaborate to bring your ideas to life with scalable, high-performance applications.</p>
          {/* For smaller screens */}
          <div className="md:hidden mt-14">
            <Swiper
              modules={[EffectCards, Pagination]}
              effect="cards"
              pagination={true}
              grabCursor={true}
              style={{ overflow: 'hidden' }}

            >
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/uiux'
                  title="Full Stack Developer"
                  description="As a Full-Stack Developer, I can design and build complete web applications, managing both frontend and backend components. I create responsive, user-friendly interfaces using HTML, CSS, and JavaScript, while ensuring robust backend functionality with Java, Spring Boot, and MySQL. I integrate front-end and back-end systems to deliver dynamic, feature-rich applications, optimizing performance and scalability while adhering to best practices in software development."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/frontend'
                  title="Java Developer"
                  description="As a Java Developer, I can design, develop, and maintain robust applications using Java and related technologies.
                              I write efficient and scalable code, debug and resolve software issues, and ensure the performance and security of applications. I also automate testing
                              and deployment processes and optimize application performance for better user
                              experience.My aim is to create high-quality, maintainable software that aligns with
                              both user expectations and business goals."
                />
              </SwiperSlide>
              <SwiperSlide className='justify-center' style={{ display: 'flex' }}>
                <ServiceCard
                  image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/backend'
                  title="SQL Developer"
                  description="As an SQL Developer, I can design and manage databases, write and optimize SQL queries, and ensure data integrity and performance.
                               I collaborate with teams to implement data solutions and troubleshoot issues, maintaining efficient database operations. Additionally, I create and
                               maintain stored procedures and work on improving query performance. My goal is to ensure reliable and secure data management systems that
                               support business needs."
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* For larger screens */}
          <div className='hidden md:flex justify-center items-center flex-row gap-14 flex-wrap mt-14'>
            <ServiceCard
              image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/uiux'
              title="Full Stack Developer"
              description=" As a Front-End Developer, I can design and build responsive, user-friendly web interfaces using HTML, CSS, and JavaScript.
                                I ensure websites are visually appealing, functional, and accessible across alldevices and browsers.
                                I also integrate with back-end services to deliver dynamic content and interactive features, while optimizing performance and adhering to best practices in web
                                development."/>
            <ServiceCard
              image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/frontend'
              title="Java Developer"
                  description="As a Java Developer, I can design, develop, and maintain robust applications using Java and related technologies.
                              I write efficient and scalable code, debug and resolve software issues, and ensure the performance and security of applications. I also automate testing
                              and deployment processes and optimize application performance for better user
                              experience.My aim is to create high-quality, maintainable software that aligns with
                              both user expectations and business goals."
                />
            <ServiceCard
              image='https://res.cloudinary.com/dn2xodesd/image/upload/f_auto,q_auto/backend'
              title="SQL Developer"
              description="As an SQL Developer, I can design and manage databases, write and optimize SQL queries, and ensure data integrity and performance.
                           I collaborate with teams to implement data solutions and troubleshoot issues, maintaining efficient database operations. Additionally, I create and
                           maintain stored procedures and work on improving query performance. My goal is to ensure reliable and secure data management systems that
                           support business needs."
            />
          </div>
        </div>

        {/* Highlighted creations div */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl mt-10 text-center'>Highlighted Creations</h1>
            <hr className='border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent mb-12'>Explore my top projects, crafted with creativity and precision. Each highlights my expertise in UI/UX design and web development, showcasing how I blend aesthetics with functionality. Check out my portfolio to see these impactful digital creations.</p>

          {/* Project card for smaller screens */}
          <div className='md:hidden my-10'>
            <Swiper
              modules={[EffectCreative, Pagination]}
              effect="creative"
              creativeEffect={{
                prev: {
                  shadow: true,
                  origin: 'left center',
                  translate: ['-5%', 0, -200],
                  rotate: [0, 100, 0],
                },
                next: {
                  origin: 'right center',
                  translate: ['5%', 0, -200],
                  rotate: [0, -100, 0],
                },
              }}
              pagination={true}
              grabCursor={true}
            >
              <SwiperSlide className='justify-center  items-center' style={{ display: 'flex' , flexDirection: 'column'}}>
                <ProjectCard
                  laptopImg={portfolio}
                  title="Portfolio"
                  description=" A personal portfolio built with React.js, showcasing projects, skills, and experience in a modern, responsive design. Includes interactive sections, smooth animations, 
                  and a user-friendly interface for easy navigation. Features dynamic content updates and a clean, professional layout."
                  codeLink="https://github.com/Senthil-Nathan-R/React-Portfolio"
                  className='hidden'
                />
                <ProjectCard
                  laptopImg={voting}
                  title="Online Voting System"
                  description="An online voting system built with secure, efficient, and user-friendly features. Admins can manage elections with start and end dates, while voters can choose candidates from dropdown lists. 
                  The platform ensures seamless voting and real-time results in a modern, intuitive interface for easy access."
                  codeLink="https://github.com/Senthil-Nathan-R/Online-Voting-System.git"
                  className='hidden'
                />
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Project card for larger screens */}
          <div className='hidden md:flex md:flex-wrap justify-center  items-center gap-20 '>
            <ProjectCard
            laptopImg={portfolio}
            
            title="Portfolio"
            description=" A personal portfolio built with React.js, showcasing projects, skills, and experience in a modern, responsive design. Includes interactive sections, smooth animations, 
            and a user-friendly interface for easy navigation. Features dynamic content updates and a clean, professional layout."
            codeLink="https://github.com/Senthil-Nathan-R/React-Portfolio"
              
              
            />
            <ProjectCard
            laptopImg={voting}
            
            title="Online Voting System"
            description="An online voting system built with secure, efficient, and user-friendly features. Admins can manage elections with start and end dates, while voters can choose candidates from dropdown lists. 
            The platform ensures seamless voting and real-time results in a modern, intuitive interface for easy access."
            codeLink="https://github.com/Senthil-Nathan-R/Online-Voting-System.git"
            className='hidden'
                />
          </div>
        </div>

        {/* Quote div */}
        <div className='py-20 text-center flex flex-col items-center'>
          <h1 className='font-cairo text-3xl md:text-[40px] font-semibold'>“If, at first, you do not succeed, call it version 1.0”.</h1>
          <p className='mt-6 text-[20px] text-accent'>- Khayri R.R. Woulfe</p>
          <img src={zigzagLine} alt="zigzag-line" className='w-56 md:w-80 mt-10 -skew-x-[20deg]' />
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </>
  )
}

export default Home
