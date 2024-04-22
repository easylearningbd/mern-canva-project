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
        <div className={`grid gap-2 ${type ? "grid-cols-2" : 'grid-cols-4 mt-5' }`}>
            {
                templates.map((design, i) => <div className={`relative cursor-pointer group w-full ${type ? "h-[100px]" : "h-[170px] px-4" } `}>
                    <div className={`w-full h-full block bg-slate-400 rounded-md ${type ? '' : 'p-4'} `}>
                <img className='w-full h-full rounded-md overflow-hidden' src={design.image_url} alt="" />
                    </div>
                </div> )
            }

        </div>
            
        </> 
    );
};

export default TemplateDesign;