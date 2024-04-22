import React, { useEffect, useState } from 'react';
import api from '../../utils/api'

const TemplateDesign = ({type}) => {

    const [templates, setTemplates] = useState([])

    useEffect(() => {
        const get_tamplates = async () => {
            try {
                const {data} = await api.get('/api/templates')
                setTemplates(data.templates)
            } catch (error) {
                console.log(error)
            }
        }
        get_tamplates()
    },[])





    return (
        <>
            {
                [1,2,3,4].map((design,i) => <div className={`group w-full rounded-md overflow-hidden bg-[#ffffff] cursor-pointer`}>
                    <img className='w-full h-full' src="http://localhost:5173/canva.png" alt="" />
                </div>
                )
            }    
        </> 
    );
};

export default TemplateDesign;