import React from 'react';

const MyImages = () => {
    return (
        <div>
            <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-md text-white mb-3'>
        <label className='text-center cursor-pointer' htmlFor="image">Upload Image</label>
        <input type="file" id="image" className='hidden' />
            </div>
            
        </div>
    );
};

export default MyImages;