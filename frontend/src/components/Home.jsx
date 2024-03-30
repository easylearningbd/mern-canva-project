import React, { useState } from 'react';

const Home = () => {

    const [show, setShow] = useState(false)
    const [state, setState] = useState({
        width: 0,
        height: 0
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div className='pt-1 pl-3'>
            <div className='w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>
            
            <button onClick={() => setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#32769ead] text-white rounded-[3px] font-medium hover:bg-[#1e830f] absolute top-3 right-3'>
             Custom Size 
            </button>

<form className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-50'} transition-all duration-500`}>
    <div className='grid grid-cols-2 pb-4 gap-3'>
        <div className='flex gap-2 justify-center items-start flex-col'>
            <label htmlFor="width">Width</label>
            <input onChange={inputHandle} type="number" name='width'id='width' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' />
        </div>

        <div className='flex gap-2 justify-center items-start flex-col'>
            <label htmlFor="height">Height</label>
            <input onChange={inputHandle} type="number" name='height'id='height' className='w-full outline-none px-2 py-[4px] bg-[#1b1a1a] border border-[#404040] rounded-md' />
        </div> 
    </div>

    <button className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#32769ead] text-white rounded-[3px] font-medium hover:bg-[#1e830f] w-full'>
            Create New Design
      </button>

</form>

                <div>
                    <h2 className='text-3xl pb-10 pt-6 font-semibold text-white'>What Will You Design Today</h2>
                </div>

            </div>
        </div>
    );
};

export default Home;