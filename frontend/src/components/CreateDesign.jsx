import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image'
import { useLocation } from 'react-router-dom';
import CreateComponent from './CreateComponent';
import RotateLoader from 'react-spinners/RotateLoader'
import api from '../utils/api'

const CreateDesign = () => {

    const ref = useRef()
    const {state} = useLocation()
    
    const obj = {
        name: "main_frame",
        type: "rect",
        id: Math.floor((Math.random() * 100) + 1),
        height: state.height,
        width: state.width,
        z_index: 1,
        color: 'green',
        image: ""
    } 

    const [loader, setLoader] = useState(false)

    return (
        <div className='w-screen h-screen flex justify-center items-center relative'>
            <div ref={ref} className='relative w-auto h-auto overflow-auto'>
        <CreateComponent info={obj}  current_component={{}} />
            </div>
            {
               loader && <div className='left-0 top-0 w-full h-full flex justify-center items-center bg-black absolute'>
                <RotateLoader color='white'/>
               </div> 
            }
        </div>
    );
};

export default CreateDesign;