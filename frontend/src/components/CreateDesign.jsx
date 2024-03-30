import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import CreateComponent from './CreateComponent';

const CreateDesign = () => {

    const ref = useRef()
    const {state} = useLocation()
    console.log(state)

    return (
        <div className='w-screen h-screen flex justify-center items-center relative'>
            <div ref={ref} className='relative w-auto h-auto overflow-auto'>
        <CreateComponent/>
            </div>
        </div>
    );
};

export default CreateDesign;