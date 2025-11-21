import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const navGreenRef = useRef(null);

  useGSAP(() => {
    gsap.from("#Starger", {
      y: 50,
      stagger: 0.2,
      opacity: 0,
      duration: 0.8,
      delay: 0.4,
      ease: "power2.out"
    });
  }, [isOpenMenu]);

  return (
    <>
    
      <div className="absolute top-0 left-0 flex justify-between items-center w-full px-4 sm:px-8 py-4 z-20">

      
        <Link
          to="/"
          className="
            text-3xl sm:text-5xl md:text-6xl 
            font-mono font-bold 
            text-transparent bg-clip-text 
            bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600
            hover:from-purple-500 hover:via-pink-400 hover:to-green-400
            transition-all duration-500 drop-shadow-md hover:scale-105
          "
        >
          CashSwitch
        </Link>

     
       <div
  onClick={() => setOpenMenu(true)}
  onMouseEnter={() => (navGreenRef.current.style.height = "100%")}
  onMouseLeave={() => (navGreenRef.current.style.height = "0%")}
  className="
    h-10 sm:h-12 lg:h-16 
    bg-black 
    relative 
    w-24 sm:w-32 lg:w-[16vw] 
    cursor-pointer 
    rounded-md sm:rounded-none
  "
>

          <div
            ref={navGreenRef}
            className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"
          ></div>

          <div className="relative h-full px-6 sm:px-10 flex flex-col justify-center items-end gap-1 sm:gap-1.5">
            <div className="w-8 sm:w-10 lg:w-16 h-1 bg-white"></div>
            <div className="w-6 sm:w-8 lg:w-10 h-1 bg-white"></div>
            <div className="w-6 sm:w-8 lg:w-10 h-1 bg-white"></div>
          </div>
        </div>
      </div>

     
      {isOpenMenu && (
        <div className="
          fixed inset-0 
          bg-black bg-opacity-80 
          backdrop-blur-sm 
          z-50 sm:w-
          flex flex-col 
          items-center 
          justify-center 
          text-white 
          transition-all duration-300
        ">
          
        
          <div
            onClick={() => setOpenMenu(false)}
            className="
              absolute top-5 right-6 
              text-5xl sm:text-7xl md:text-8xl 
              cursor-pointer 
              hover:text-yellow-300 
              hover:scale-110 
              transition 
            "
          >
            ✕
          </div>

        
          <nav
            id="Starger"
            className="
              flex 
              w-full 
              mt-10 
              flex-col 
              items-center 
              gap-6 sm:gap-10 md:gap-12 
              pt-16 
            "
          >
            {[
              { label: "Home", to: "/" },
              { label: "Graph", to: "/Charts" },
              { label: "Converter", to: "/Converter" },
              { label: "About", to: "/about" },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpenMenu(false)}
                className="
                  text-4xl 
                  sm:text-6xl 
                  md:text-7xl 
                  lg:text-8xl 
                  font-extrabold 
                  uppercase 
                  hover:text-black 
                  hover:bg-yellow-300 
                  hover:rounded-full 
                  hover:px-6 sm:hover:px-8 
                  hover:py-2 sm:hover:py-3 
                  transition-all duration-300 ease-in-out
                "
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
