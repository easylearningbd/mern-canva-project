import React from 'react';

const Home = () => {
    return (
        <div className='pt-1 pl-3'>
            <div className='w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>
            
            <button className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#32769ead] text-white rounded-[3px] font-medium hover:bg-[#1e830f] absolute top-3 right-3'>
             Custom Size 
            </button>

                <div>
                    <h2 className='text-3xl pb-10 pt-6 font-semibold text-white'>What Will You Design Today</h2>
                </div>

            </div>
        </div>
    );
};

export default Home;