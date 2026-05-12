import React from "react";
import { Link } from "react-router-dom";

const HomeBtn = () => {
  return (
    <div className="mt-12 sm:mt-16 flex items-center justify-center px-4">
      <Link
        to="/Converter"
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          px-6 sm:px-10
          py-3 sm:py-5
          text-xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold
          text-white
          rounded-full
          shadow-2xl
          bg-gradient-to-r
          from-cyan-500
          via-blue-500
          to-purple-600
          transition-all
          duration-500
          hover:scale-105
          hover:shadow-cyan-500/40
          hover:from-purple-600
          hover:via-pink-500
          hover:to-orange-400
        "
      >
        <span className="mr-3 transition-transform duration-300 group-hover:-translate-x-1">
          Get In Touch
        </span>

        <span className="text-2xl sm:text-4xl transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

export default HomeBtn;
