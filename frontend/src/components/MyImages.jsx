import React, { useState } from 'react';
import Image from './Image';
import api from '../utils/api'
import BarLoader from 'react-spinners/BarLoader'
import toast from 'react-hot-toast';


const MyImages = ({add_image}) => {

    const [loader, setLoader] = useState(false)

    const image_upload = async (e) => {
        if (e.target.files.length > 0) {
            const formData = new FormData()
            formData.append('image',e.target.files[0])

            try {
                setLoader(true)
                const { data } = await api.post('/api/add-user-image',formData)
                setLoader(false)
            } catch (error) {
                setLoader(false)
                toast.error(error.response.data.message)
            }
        }
    }

    return (
        <div>
            <div className='w-full h-[40px] flex justify-center items-center bg-purple-500 rounded-md text-white mb-3'>
        <label className='text-center cursor-pointer' htmlFor="image">Upload Image</label>
        <input readOnly={loader} onChange={image_upload} type="file" id="image" className='hidden' />
            </div>

        {
            loader && <div className='flex justify-center items-center mb-2'>
                <BarLoader color="#fff" />
            </div>
        }

        <div className='h-[80vh] overflow-x-auto flex justify-start items-start scrollbar-hide'>
            <Image/>
            </div>    
            
        </div>
    );
};

export default MyImages;