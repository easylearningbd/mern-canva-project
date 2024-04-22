import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";
import Item from './Home/Item';
import api from '../utils/api'
import toast from 'react-hot-toast';

const Home = () => {

    const [designs, setDesign] = useState([])
    const navigate = useNavigate()
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

    const responsive = {
        superLargeDesktop: {
         
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


      const create = () => {
        navigate('/design/create',{
            state: {
                type: 'create',
                width: state.width,
                height: state.height
            } 
        })
      }

       
    const get_user_design = async () => {
        try {
            const {data} = await api.get('/api/user-designs')
            setDesign(data.designs)
        } catch (error) {
            console.log(error)
        }
    }
         
    useEffect(() => {
        get_user_design()
    },[])

    const delete_design = async (design_id) => {
        try {
            const { data } = await api.put(`/api/delete-user-image/${design_id}`)
            toast.success(data.message)
            get_user_design()
        } catch (error) {
            toast.error(error.response.data.message)
        }
    }


    return (
        <div className='pt-1 pl-3'>
            <div className='w-full flex justify-center items-center h-[250px] bg-gradient-to-r from-[#4c76cf] to-[#552ab8] relative rounded-md overflow-hidden'>
            
            <button onClick={() => setShow(!show)} className='px-4 py-2 text-[15px] overflow-hidden text-center bg-[#32769ead] text-white rounded-[3px] font-medium hover:bg-[#1e830f] absolute top-3 right-3'>
             Custom Size 
            </button>

<form onSubmit={create} className={`absolute top-16 right-3 gap-3 bg-[#252627] w-[250px] p-4 text-white ${show ? 'visible opacity-100' : 'invisible opacity-50'} transition-all duration-500`}>
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

    <div>
        <h2 className='text-xl py-6 font-semibold text-white'>Your Recent Designs </h2>

       <div>
        <Carousel
            autoPlay={true}
            infinite={true}
            responsive={responsive}
            transitionDuration={500}
        >
            {
                designs.map((d,i) => <Item delete_design={delete_design} design={d} key={i} />
                )
            } 
        </Carousel>
       
       
        </div>   





    </div>





        </div>
    );
};

export default Home;