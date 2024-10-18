import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/Senthil.png'

function Footer() {
  return (
    <footer className="mt-auto mx-auto container p-4 pt-10 ">
      <div className="flex flex-wrap items-end gap-y-6 gap-x-12 text-center justify-between mb-14">
        <div className='text-left'>
          <Link to="#" className=''>
            <img src={logo} className="h-12 mb-5" style={{border : "2.3px solid white"}} alt="" />
          </Link>
          <p className='text-gray-300 text-base'>Crafting innovative web solutions with a passion for excellence and a touch of creativity.</p>
        </div>
        <ul className="flex flex-wrap items-center gap-x-4">
          <a href='https://github.com/Senthil-Nathan-R' target='_blank'><li className='border-2 rounded-full hover:scale-110 hover:border-secondary transition-all duration-500'><svg xmlns="http://www.w3.org/2000/svg" className='w-[34px] h-[34px] p-2 fill-white transition-all duration-500' viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" /></svg></li></a>
          <a href='https://www.linkedin.com/in/senthil-nathan-r-767b972b2/' target='_blank'><li className='border-2 rounded-full hover:scale-110 hover:border-secondary transition-all duration-500'><svg xmlns="http://www.w3.org/2000/svg" className='w-[34px] h-[34px] p-2 fill-white transition-all duration-500' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg></li></a>
          <a href='https://www.instagram.com/senthilnathan__r/' target='_blank'><li className='border-2 rounded-full hover:scale-110 hover:border-secondary transition-all duration-500'>
             <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-[34px] h-[34px] p-2 fill-white transition-all duration-700"
    viewBox="0 0 512 512"
  >
    <path d="M349.33 69.33h-186.66C103.75 69.33 69.33 103.75 69.33 162.67v186.66c0 58.92 34.42 93.34 93.34 93.34h186.66c58.92 0 93.34-34.42 93.34-93.34V162.67c0-58.92-34.42-93.34-93.34-93.34zM256 346.67c-50.35 0-90.67-40.31-90.67-90.67S205.65 165.33 256 165.33 346.67 205.65 346.67 256 306.35 346.67 256 346.67zm112-184a16 16 0 1 1 16-16 16 16 0 0 1-16 16z" />
    <circle cx="256" cy="256" r="58.67" />
  </svg>

</li></a>
        </ul>
      </div>
      <div className="text-center text-gray-300 ">
        <hr className="my-5 w-full border-[#ffffff25]" />
        <p className='text-base'>
          Copyright &copy; 2024 <span className='italic text-white'>AC</span>
        </p>
        <p className='mt-1 text-base'>Designed & Developed by <a href="https://github.com/Senthil-Nathan-R" target='_blank'><span className='text-secondary font-medium'>Senthil Nathan</span></a></p>
      </div>
    </footer>
  )
}

export default Footer
