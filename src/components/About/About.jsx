import React from 'react'
import { Link } from "react-router-dom";
import { Breadcrumbs, Tooltip } from "@material-tailwind/react";
import SkillBox from './SkillBox';
import htmlIcon from '../../assets/html-logo.svg';
import cssIcon from '../../assets/css-logo.svg';
import jsIcon from '../../assets/js-logo.svg';
import tailwindIcon from '../../assets/tailwind-logo.svg';
import bootstrapIcon from '../../assets/bootstrap-logo.svg';
import reactIcon from '../../assets/react-logo.svg';
import pythonIcon from '../../assets/python-logo.svg';
import djangoIcon from '../../assets/django-logo.svg';
import wordpressIcon from '../../assets/wordpress-logo.svg';
import figmaIcon from '../../assets/figma-logo.svg';
import vscodeIcon from '../../assets/vscode-logo.svg';
import githubIcon from '../../assets/github-logo.svg';
import educationIcon from '../../assets/education-icon.svg';
import certificationIcon from '../../assets/certification-icon.svg';
import downloadIcon from '../../assets/download-icon.svg';
import arrowIcon from '../../assets/arrow.svg';
import CustomButton from '../CustomButton';
import Connect from '../Connect';
import './About.css'

function About() {
  return (
    <>
      <section className='about-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black '>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>About Me</h1>
        <Breadcrumbs
          separator={<p className='text-white'>/</p>}
          className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>
            HOME
          </Link>
          <Link to="/about" className='text-white text-base' style={{ fontWeight: '400' }}>ABOUT</Link>
        </Breadcrumbs>
      </section>
      <section className='container px-4 mx-auto'>
        {/* Know who I am div */}
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Know Who I Am</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>Hi, I'm Senthil Nathan, a Full Stack Developer from Vellore, Tamil Nadu, India, with a passion for creating engaging and interactive websites. I recently completed my Bachelor of Engineering in Computer Science and am currently pursuing a Java Full-Stack course,
             focusing on both front-end and back-end development to expand my expertise.</p><br />
          <p className='text-accent'>I collaborate closely with teams to implement data solutions, troubleshoot issues, and ensure efficient database operations. Additionally, I specialize in developing and maintaining stored procedures while optimizing query performance.</p><br />
          <p className='text-accent'>My ultimate goal is to deliver reliable and secure data management systems that meet business needs effectively.</p>
        </div>

        {/* Areas of Expertise div */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Areas of Expertise</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>I’ve built a diverse skill set through education and hands-on projects. My expertise spans several areas, allowing me to tackle complex challenges effectively. Here are key areas where I excel and deliver high-quality results.</p>
          <div className='flex flex-wrap justify-center gap-12 my-14'>
          <Tooltip
              content="Java"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={pythonIcon} className='bg-pythonColor border-pythonColor' /></div>
            </Tooltip>
            <Tooltip
              content="JavaScript"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={jsIcon} className='bg-jsColor border-jsColor' /></div>
            </Tooltip>
            <Tooltip
              content="React JS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={reactIcon} className='bg-reactColor border-reactColor' /></div>
            </Tooltip>
            <Tooltip
              content="HTML"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <div ><SkillBox icon={htmlIcon} className='bg-htmlColor border-htmlColor' /></div>
            </Tooltip>
            <Tooltip
              content="CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div className='cursor-default'><SkillBox icon={cssIcon} className='bg-cssColor border-cssColor' /></div>
            </Tooltip>
           
            <Tooltip
              content="Tailwind CSS"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={tailwindIcon} className='bg-tailwindColor border-tailwindColor' /></div>
            </Tooltip>
            <Tooltip
              content="Bootstrap"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={bootstrapIcon} className='bg-bootstrapColor border-bootstrapColor' /></div>
            </Tooltip>
            
            

          </div>
        </div>

        {/* Tools I play with div */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>Tools I play With</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>I use various tools to streamline my workflow and boost productivity. Eclipse and Visual Studio Code for coding, and GitHub for version control and collaboration.</p>
          <div className='flex flex-wrap justify-center gap-12 my-14'>
            <Tooltip
              content="Eclipse"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={figmaIcon} className='bg-figmaColor border-figmaColor' /></div>
            </Tooltip>
            <Tooltip
              content="VS Code"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={vscodeIcon} className='bg-vscodeColor border-vscodeColor' /></div>
            </Tooltip>
            <Tooltip
              content="GitHub"
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}>
              <div><SkillBox icon={githubIcon} className='bg-githubColor border-githubColor' /></div>
            </Tooltip>
          </div>
        </div>

        {/* Education and certifications div */}
        <div className="py-20">
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center'>Education and Certifications</h1>
            <hr className='border-b-4 border-secondary w-48 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>My education and certifications provide a strong foundation in Full Stack development. From basic to advanced skills, these achievements showcase my dedication to learning and expertise in creating effective web applications.</p>
          <div className='flex justify-center md:gap-20 flex-col md:flex-row mt-10'>
            <div className='mb-5'>
              <h2 className='font-cairo text-2xl font-semibold border-b-4 border-secondary w-max'>Education:</h2>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={educationIcon} alt="degree-icon" className='mt-1' /><span>Computer Science Engineering (B.E) <br /> <span className='font-extralight'>C.Abdul Hakeem College of Engineering and Technology, Ranipet, Tamil Nadu </span></span></p>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={educationIcon} alt="degree-icon" className='mt-1' /><span>HSC  <br /> <span className='font-extralight'>Vidhyalakshmi Matric Higher Secondary School, Vellore, Tamil Nadu.</span><br /> <span className='font-extralight'></span></span></p>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={educationIcon} alt="degree-icon" className='mt-1' /><span>SSLC <br /> <span className='font-extralight'>Vidhyalakshmi CBSE School, Vellore, Tamil Nadu. </span></span></p>
            
            
            </div>
            <div>
              <h2 className='font-cairo text-2xl font-semibold border-b-4 border-secondary w-max'>Certifications:</h2>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={certificationIcon} alt="certification-icon" className='mt-1' /><span>Java Full Stack Development <br /> <span className='font-extralight'>Besant Technologies, 2024</span></span></p>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={certificationIcon} alt="certification-icon" className='mt-1' /><span>JavaScript Basic <br /> <span className='font-extralight'>Udemy, 2024</span></span></p>
              <p className='font-medium flex items-start gap-2 my-7 text-accent'><img src={certificationIcon} alt="certification-icon" className='mt-1' /><span>Full Stack <br /> <span className='font-extralight'>Infosys Springboard, 2023</span></span></p>
            </div>
          </div>

        </div>
        <hr className='border-[#ffffff25]' />

        {/* View Resume */}
        <div className='py-20 flex flex-col items-center'>
          <p className='text-accent italic mb-6'>Curious about my journey and achievements? Take a closer look at my detailed resume.</p>
          <img src={arrowIcon} alt="arrow-icon" className='translate-x-10 mb-3' />
          <a href="https://docs.google.com/document/d/1MRi7q0htK3EcaTv2nPOFzkZ-PfZ8AflP5lNEQpKRgnM/view?pli=1" >
          <button>
          <CustomButton
            text="View My Resume"
            icon={downloadIcon}
            className='w-[18px]'
          /></button></a>
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </>
  )
}

export default About
