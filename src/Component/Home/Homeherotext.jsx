import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const Homeherotext = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.from(headingRef.current, {
      rotationX: 90,
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power4.out",
    });
  }, []);

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-7xl">
        <h1
          ref={headingRef}
          className="
            text-4xl
            sm:text-5xl
            md:text-6xl
            lg:text-7xl
            xl:text-8xl
            font-black
            text-center
            leading-tight
            tracking-tight
          "
        >
          <span
            className="
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-600
              bg-clip-text
              text-transparent
            "
          >
            👋 Hello World
          </span>

          <br />

          <span
            className="
              bg-gradient-to-r
              from-pink-500
              via-orange-400
              to-yellow-400
              bg-clip-text
              text-transparent
            "
          >
            Traveler or Trader!
          </span>
        </h1>

        <p
          className="
            mt-6
            text-center
            text-gray-300
            text-sm
            sm:text-lg
            md:text-xl
            max-w-3xl
            mx-auto
          "
        >
          Convert currencies instantly, explore charts, and experience
          smooth financial interactions with modern UI.
        </p>
      </div>
    </div>
  );
};

export default Homeherotext;
