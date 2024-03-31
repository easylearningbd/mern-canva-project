import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div className='h-[88vh] overflow-x-auto flex justify-start items-start scrollbar-hide w-full'>
            <div className='grid grid-cols-2 gap-2 mt-5 w-full'>
            {
                [1,2,3,4,5,6].map((img, i) => <Link key={i} className='w-full h-[90px] overflow-hidden rounded-sm cursor-pointer'>
                <img className='w-full h-full object-fill' src="http://localhost:5173/canva.png" alt="" />
                </Link>
                )
            }
            </div>
            
        </div>
    ); 
};

export default Projects;