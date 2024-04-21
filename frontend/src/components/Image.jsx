import React from 'react';

const Image = ({add_image,images,type,setImage}) => {
    return (
        <div className='grid grid-cols-2 gap-2'>
            {
                images.map((item, i) => <div key={i} onClick={() => type ==='background' ? setImage(item.image_url) : add_image(item.image_url)}  className='w-full h-[90px] overflow-hidden rounded-md cursor-pointer'>
                    <img className='w-full h-full' src={item.image_url} alt="" /> 
                </div> 
                )
            }
               
        </div>
    );
};

export default Image;