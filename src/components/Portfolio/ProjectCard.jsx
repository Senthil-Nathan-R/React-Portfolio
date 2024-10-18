import React, { useState } from 'react';
import githubhicon from '../../assets/github-icon.svg';
import CustomButton from '../CustomButton';

function ProjectCard({ laptopImg, title, description, codeLink, className }) {
    const [isActive, setIsActive] = useState(false); // State to manage active background

    // Detect screen width for touch/hover conflict resolution
    const handleTouch = () => {
        if (window.innerWidth < 768) {
            setIsActive(true);
        }
    };

    const handleTouchEnd = () => {
        if (window.innerWidth < 768) {
            setIsActive(false);
        }
    };

    return (
        <div
            className={`rounded-2xl relative pt-8 pb-16 md:pb-10 mt-14 w-[350px] bg-[#51c5ff19] border border-[#ffffff25] 
            ${isActive ? 'bg-black' : 'md:hover:bg-black'}`} // Hover for medium screens
            onTouchStart={handleTouch}  // Activate on touch
            onTouchEnd={handleTouchEnd}   // Deactivate on touch end
        >
            <div className='p-5 pt-2'>
                <img 
                    className='rounded-lg' 
                    style={{ height: '150px', width: "100%" }} 
                    src={laptopImg} 
                    alt={`Screenshot of the project: ${title}`} // Descriptive alt text
                />
            </div>
            <div className='text-center mx-5 flex flex-col items-center'>
                <h2 className='text-2xl mb-4 font-semibold'>{title}</h2>
                <p className='text-accent text-base min-h-36 mb-8'>{description}</p>
                <div className='flex flex-wrap gap-8 justify-center'>
                    <a href={codeLink} target='_blank' rel='noopener noreferrer'>
                        <CustomButton
                            text="Code"
                            icon={githubhicon}
                            className='w-5'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;
