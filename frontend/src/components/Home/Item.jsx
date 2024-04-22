import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaTrashAlt } from "react-icons/fa";

const Item = ({design}) => {
    return (
        <div className='relative group w-full h-[170px] px-2'>
                <Link to={`/design/${design._id}/edit`} className='w-full h-full block bg-slate-100 p-4 rounded-md'>
                    <img className='w-full h-full rounded-md overflow-hidden' src={design.image_url} alt="" />
                </Link>
                <div className='absolute hidden cursor-pointer top-1 right-2 text-red-500 p-2 transition-all duration-500 group-hover:block'>
                <FaTrashAlt />
                </div>
            </div>
    );
};

export default Item;