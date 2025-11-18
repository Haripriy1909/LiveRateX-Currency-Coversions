import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomtext = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-24 ">
     <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] lg:h-44 flex items-center px-9 pt-0 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/Charts'>Graph</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50]  lg:h-44 flex items-center px-9 pt-0  border-white rounded-full uppercase'>
        <Link className='text-[6vw] lg:mt-6' to='/About'>About</Link>
      </div>
    </div>
  );
};

export default HomeBottomtext;
