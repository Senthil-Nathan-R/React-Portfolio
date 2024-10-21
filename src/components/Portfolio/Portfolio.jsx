import React, { useState } from 'react'
import { Breadcrumbs } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProjectCard from './ProjectCard';
import Connect from '../Connect'
import './Portfolio.css';
import portfolio from '../../assets/Portfolio.png';
import voting from '../../assets/Voting.png';
import library from '../../assets/image-1.jpg';
import login from '../../assets/loginpage.jpg';
import bank from '../../assets/image-4.jpg';
import cal from '../../assets/simple_calculator.png';
import crud from '../../assets/CRUD.png';

function Portfolio() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      laptopImg: portfolio,
      title:"Portfolio",
      description:" A personal portfolio built with React.js, showcasing projects, skills, and experience in a modern, responsive design. Includes interactive sections, smooth animations, and a user-friendly interface for easy navigation. Features dynamic content updates and a clean, professional layout.",

      codeLink: "https://github.com/Senthil-Nathan-R/React-Portfolio"
    },
    {
      laptopImg: voting,
      title:"Online Voting System",
      description:"An online voting system built with secure, efficient, and user-friendly features. Admins can manage elections with start and end dates, while voters can choose candidates from dropdown lists. The platform ensures seamless voting and real-time results in a modern, intuitive interface for easy access.",

      codeLink: "https://github.com/Senthil-Nathan-R/Online-Voting-System.git"
    },
    
    {
      laptopImg: crud,
      title:"CRUD Operation",
      description:"A CRUD Operation application built with Spring Boot and a REST API, supporting create, read, update, and delte (CRUD) operation. The system offers seamless interaction, dynamic content updates,and ensures data consistency for effective management.",

      codeLink: "https://github.com/Senthil-Nathan-R/CRUD-Operation "
    },
    {
      laptopImg: login,
      title:"Login Page",
      description:"A Login Page built with JSP, MySQL, Servlet, and JavaScript ensuring secure and efficient user authentication. Users enter credentials, Validated against a MySQL database. JavaScript enhances the interface with dynamic validation, providing smooth interaction and a user-friendly, reliable login experience.",
      codeLink: "https://github.com/Senthil-Nathan-R/Login-Page"
    },
    {
      laptopImg: bank,
      title:"Banking Interface",
      description:"A Banking interface built with Java, featuring ATM Card Activation and User Management. Users can activate their cards and manage thier profiles a secure and intuitive system. The platform ensures seamless integration with backend services, providing efficient, reliable, and user-friendly banking operations.",

      codeLink: "https://github.com/Senthil-Nathan-R/Banking-Interface-ATM-Card-Activation-and-User-Management"
    },
    {
      laptopImg: cal,
      title:"Calculator",
      description:"A calculator built with JavaScript, HTML, and CSS, offering basic arithmetic operations in a simple and user-friendly interface. The design features a clean layout and responsive buttons, ensuring smooth functionality. JavaScript powers the calculations, while HTML and CSS provide an intuitive, modern design.",
      codeLink: "https://github.com/Senthil-Nathan-R/Calculator"
    },


    {
      laptopImg: library,
      title:"Library Management System",
      description:"A Java-based library management system that enables users to efficiently manage books, track loans, and maintain records. The user-friendly interface ensures smooth operations for both users and administrators.",
      codeLink: "https://github.com/Senthil-Nathan-R/LibraryManagementSystem"
    }
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <>
      <section className='portfolio-hero-section relative min-h-[45vh] md:min-h-[65vh] flex flex-col justify-center items-center shadow-lg shadow-black'>
        <h1 className='text-4xl font-cairo md:text-[40px] lg:text-5xl font-bold mb-3 mt-14'>Portfolio</h1>
        <Breadcrumbs separator={<p className='text-white'>/</p>} className='bg-transparent '>
          <Link to="/" className="opacity-60 text-white text-base" style={{ fontWeight: '400' }}>HOME</Link>
          <Link to="/portfolio" className='text-white text-base' style={{ fontWeight: '400' }}>PORTFOLIO</Link>
        </Breadcrumbs>
      </section>
      <section className='container px-4 mx-auto'>
        <div className='py-20'>
          <div className='flex flex-col items-center'>
            <h1 className='font-cairo font-bold text-4xl text-center mt-10'>My Recent Works</h1>
            <hr className='border-b-4 border-secondary w-40 mt-3 mb-14 mx-auto md:mx-0' />
          </div>
          <p className='text-accent'>Explore my portfolio to see a selection of recent projects that highlight my web development and design skills. Each project showcases my commitment to quality and innovation. Check out my work to see how I can bring your ideas to life.</p>
          <div className='flex justify-center items-center flex-wrap gap-20 my-16'>
            {visibleProjects.map((project, index) => (
              <ProjectCard
                key={index}
                laptopImg={project.laptopImg}
                mobileImg={project.mobileImg}
                title={project.title}
                description={project.description}
                demoLink={project.demoLink}
                codeLink={project.codeLink}
              />
            ))}
          </div>
          <div className='flex justify-center'>
            <button
              onClick={() => setShowAll(!showAll)}
              className=' text-white load-link flex items-center font-semibold'
            >
              <span>{showAll ? 'Show Less' : 'Load More'}</span><svg xmlns="http://www.w3.org/2000/svg" className='h-[16px] fill-white ms-3' viewBox="0 0 512 512"><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" /></svg>
            </button>
          </div>
        </div>

        {/* Let's Connect div */}
        <div className='py-20'>
          <Connect />
        </div>
      </section>
    </>
  );
}

export default Portfolio;
