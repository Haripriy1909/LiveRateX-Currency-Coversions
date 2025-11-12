import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const navGreenRef = useRef(null);
  
  useGSAP(function(){
    gsap.from("#Starger", {
      y: 50,
      stagger: 1,
      opacity: 0,
      duration: 1,
      delay: 1,
    });
  });
  
  return (
    <>
      <div className="absolute flex justify-between w-full px-6 py-4 z-20">
        <Link
          to="/"
          className="text-5xl sm:text-6xl font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 hover:from-purple-500 hover:via-pink-400 hover:to-green-400 transition-all duration-500 drop-shadow-md hover:scale-105"
        >
          CashSwitch
        </Link>
      
        <div
          onClick={() => setOpenMenu(true)}
          onMouseEnter={() => {
            navGreenRef.current.style.height = '100%';
          }}
          onMouseLeave={() => {
            navGreenRef.current.style.height = '0%';
          }}
          className="lg:h-16 h-10 bg-black relative lg:w-[16vw] w-48 cursor-pointer"
        >
          <div ref={navGreenRef} className="bg-[#D3FD50] transition-all absolute top-0 h-0 w-full"></div>
          <div className="relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5">
            <div className="lg:w-18 w-12 h-1 bg-white"></div>
            <div className="lg:w-10 w-6 h-1 bg-white"></div>
            <div className="lg:w-10 w-6 h-1 bg-white"></div>
          </div>
        </div>
      </div>
     
      {isOpenMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm z-50 flex flex-col items-center justify-center text-white transition-all duration-300">
          <div
            onClick={() => setOpenMenu(false)}
            className="absolute font-stretch-50% top-0 right-10 text-white text-9xl cursor-pointer hover:text-yellow-300 hover:scale-110 transition"
          >
            &#10005;
          </div>
        
          {/* Added margin-top and padding-top for spacing */}
          <nav id='Starger' className="flex w-full p-5 px-5 mt-20 pt-12 text-9xl flex-col uppercase gap-12 text-center">
            {[
              { label: 'Home', to: '/' },
              { label: 'Graph', to: '/Charts' },
              { label: 'Converter', to: '/Converter' },  
              { label: 'About', to: '/about' },
            ].map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpenMenu(false)}
                className="text-6xl sm:text-7xl hover:scroll-auto hover:text-black md:text-8xl font-extrabold transition-all duration-300 hover:bg-yellow-300 hover:rounded-full ease-in-out hover:px-8 hover:py-4"
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
