import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomtext = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-12 sm:mt-24 px-4">
      
    
      <div className="
        border-2 
        hover:border-[#D3FD50] 
        hover:text-[#D3FD50] 
        lg:h-40 
        flex 
        items-center 
        justify-center
        px-6 sm:px-12 
        py-3 sm:py-4
        border-white 
        rounded-full 
        uppercase
        transition-all duration-300
      ">
        <Link
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-semibold
          "
          to="/Charts"
        >
          Graph
        </Link>
      </div>

    
      <div className="
        border-2 
        hover:border-[#D3FD50] 
        hover:text-[#D3FD50] 
        lg:h-40 
        flex 
        items-center 
        justify-center
        px-8 sm:px-12 
        py-3 sm:py-4
        border-white 
        rounded-full 
        uppercase
        transition-all duration-300
      ">
        <Link
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-semibold
          "
          to="/About"
        >
          About
        </Link>
      </div>

    </div>
  );
};

export default HomeBottomtext;
