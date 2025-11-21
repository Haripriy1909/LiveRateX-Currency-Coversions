import React from 'react';
import { Link } from 'react-router-dom';

const HomeBtn = () => {
  return (
    <div className="mt-10 sm:mt-14 flex items-center justify-center px-4">
      <Link
        to="/Converter"
        className="
          group
          relative
          inline-flex 
          items-center 
          justify-center
          px-6 sm:px-8 
          py-3 sm:py-4 
          text-2xl sm:text-4xl md:text-5xl
          font-bold 
          text-white 
          rounded-full 
          shadow-xl 
          bg-gradient-to-r 
          from-pink-500 via-purple-500 to-indigo-500 
          transition-all 
          duration-300 
          ease-in-out 
          hover:from-indigo-500 
          hover:via-pink-500 
          hover:to-yellow-500 
          hover:scale-105 
          hover:shadow-2xl
        "
      >
        <span className="mr-2 sm:mr-3 transition-transform duration-300 group-hover:-translate-x-1">
          Get In Touch
        </span>
        <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:translate-x-1">
          ➡️
        </span>
      </Link>
    </div>
  );
};

export default HomeBtn;
