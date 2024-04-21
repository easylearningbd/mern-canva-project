import React from 'react';
import { Link } from 'react-router-dom';
import * as htmlToImage from 'html-to-image'

const Header = () => {



  const downloadImage = async () => {

    const getDiv = document.getElementById('main_design')
    const dataUrl = await htmlToImage.toPng(getDiv,{
      style: {
        transform: 'scale(1)'
      }
    })

    var link = document.createElement("a");
    link.download = 'image';
    link.href = dataUrl;
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link) 
  }




    return (
        <div className='h-[60px] bg-gradient-to-r from-[#212122] via-[#27282b] to-[#2a2b2c] w-full'>
          <div className='flex justify-between px-10 items-center text-gray-400 h-full'>
            <Link to='/'>
                <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />
            </Link>
            <span className='text-xl'>Easy Canva</span>

            <div className='flex justify-center items-center gap-2 text-gray-200'>
        <button className='px-3 py-[6px] outline-none bg-[#7482f6] rounded-md'> Save </button>
        <button onClick={downloadImage} className='px-3 py-[6px] outline-none bg-[#a855f7] rounded-md'> Download </button>
            </div>

          </div>
             
        </div>
    );
};

export default Header;