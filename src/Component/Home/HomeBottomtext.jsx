import React from "react";
import { Link } from "react-router-dom";

const HomeBottomtext = () => {
  const buttonStyle = `
    border-2 border-white/30
    hover:border-cyan-400
    hover:text-cyan-300
    backdrop-blur-md
    bg-white/5
    flex items-center justify-center
    px-8 sm:px-12 lg:px-16
    py-4 sm:py-5
    rounded-full
    uppercase
    transition-all duration-300
    hover:scale-105
    shadow-lg
  `;

  return (
    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 mt-14 sm:mt-24 px-4">
      
      <div className={buttonStyle}>
        <Link
          className="
            text-xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            tracking-wide
          "
          to="/Charts"
        >
          Graph
        </Link>
      </div>

      <div className={buttonStyle}>
        <Link
          className="
            text-xl
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
            font-bold
            tracking-wide
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
