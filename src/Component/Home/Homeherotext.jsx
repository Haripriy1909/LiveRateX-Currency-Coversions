import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';

const Homeherotext = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      rotation: 360,
      duration: 3,
      ease: 'power.out',
    });
  }, []);

  return (
    <div className="mt-6 sm:mt-10 flex flex-col items-center justify-center px-4">
      <div className="px-4 sm:px-6 py-6 sm:py-10 rounded-xl transition-all duration-300 hover:scale-105">
        <h1
          ref={headingRef}
          className="
            text-3xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-extrabold
            text-center
            bg-gradient-to-r
            from-pink-500 via-orange-400 to-yellow-400
            bg-clip-text 
            text-transparent 
            drop-shadow-md
          "
        >
          <span className="text-rose-600">👋 Hello, World</span>{' '}
          to{' '}
          <span className="text-amber-500">Traveler or Trader!</span>
        </h1>
      </div>
    </div>
  );
};

export default Homeherotext;
