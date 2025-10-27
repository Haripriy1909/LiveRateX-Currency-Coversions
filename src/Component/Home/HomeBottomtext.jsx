import React from 'react';
import { Link } from 'react-router-dom';

const HomeBottomtext = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 mt-24 px-4">
      <Link
        to="/Charts"
        className=" px-[14vh] py-[5vh] text-3xl sm:text-5xl lg:text-5xl uppercase font-bold text-white border-2  border-yellow-200 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-teal-300 hover:text-black shadow-lg"
      >
        Graph
      </Link>

      <Link
        to="/about"
        className="px-[14vh] py-[5vh]  text-3xl sm:text-4xl lg:text-5xl uppercase font-bold text-white border-2 border-yellow-200 rounded-full transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-purple-400 hover:to-blue-400 hover:text-black shadow-lg"
      >
        About
      </Link>
    </div>
  );
};

export default HomeBottomtext;
