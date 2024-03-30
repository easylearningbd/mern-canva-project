import React from 'react';
import Header from '../components/Header';
import { LuLayoutTemplate } from "react-icons/lu";
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { BsImages } from "react-icons/bs";
import { RxTransparencyGrid } from "react-icons/rx";


const Main = () => {
    return (
<div className='min-w-screen h-screen bg-black'>
    <Header/>

    <div className='flex h-[calc(100%-60px)] w-screen'>
        <div className='w-[80px] bg-[#18191B] z-50 h-full text-gray-400 overflow-y-auto'>
       
        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
            <span className='text-2xl'><LuLayoutTemplate /></span>
            <span className='text-xs font-medium'>Design</span>
            </div>

        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaShapes /></span>
        <span className='text-xs font-medium'>Shapes</span>
        </div>

        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaCloudUploadAlt  /></span>
        <span className='text-xs font-medium'>Upload</span>
        </div>

        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaTextHeight  /></span>
        <span className='text-xs font-medium'>Text</span>
        </div>


        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><FaFolderOpen  /></span>
        <span className='text-xs font-medium'>Project</span>
        </div>

        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><BsImages   /></span>
        <span className='text-xs font-medium'>Images</span>
        </div>

        <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1 hover:text-gray-100`}>
        <span className='text-2xl'><RxTransparencyGrid   /></span>
        <span className='text-xs font-medium'>Background</span>
        </div>

        </div>

    </div>
    
</div>
    );
};

export default Main;