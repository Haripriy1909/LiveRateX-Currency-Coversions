import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const navGreenRef = useRef(null);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Graph", to: "/charts" },
    { label: "Converter", to: "/converter" },
    { label: "About", to: "/about" },
  ];

  useGSAP(() => {
  if (isOpenMenu) {
    gsap.fromTo(
      ".menu-item",
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
      
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
      }
    );
  }
}, [isOpenMenu]);

  return (
    <>
      {/* Navbar */}
      <header className="absolute top-0 left-0 w-full z-50">
        <div className="flex items-center justify-between px-4 sm:px-8 py-5">
          
          {/* Logo */}
          <Link
            to="/"
            className="
              text-3xl
              sm:text-5xl
              lg:text-6xl
              font-black
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
            "
          >
            CashSwitch
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpenMenu(true)}
            onMouseEnter={() => {
              if (navGreenRef.current) {
                navGreenRef.current.style.height = "100%";
              }
            }}
            onMouseLeave={() => {
              if (navGreenRef.current) {
                navGreenRef.current.style.height = "0%";
              }
            }}
            className="
              relative
              w-16 sm:w-20
              h-12 sm:h-14
              rounded-xl
              overflow-hidden
              bg-black/70
              border border-white/10
              backdrop-blur-md
              flex items-center justify-center
            "
          >
            {/* Hover Background */}
            <div
              ref={navGreenRef}
              className="
                absolute
                bottom-0
                left-0
                w-full
                h-0
                bg-cyan-400
                transition-all
                duration-300
              "
            />

            {/* Hamburger Lines */}
            <div className="relative z-10 flex flex-col gap-1.5">
              <span className="w-8 h-1 bg-white rounded-full"></span>
              <span className="w-6 h-1 bg-white rounded-full"></span>
              <span className="w-4 h-1 bg-white rounded-full"></span>
            </div>
          </button>
        </div>
      </header>

      {/* Fullscreen Menu */}
      {isOpenMenu && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black/95
            backdrop-blur-xl
            overflow-y-auto
          "
        >
          {/* Close Button */}
          <button
            onClick={() => setOpenMenu(false)}
            className="
              fixed
              top-5
              right-5
              text-4xl
              sm:text-5xl
              text-white
              hover:text-cyan-400
              transition-all
              duration-300
              z-50
            "
          >
            ✕
          </button>

          <nav
            className="
              flex
              flex-col
              items-center
              justify-start
              min-h-screen
              pt-28
              pb-16
              gap-8
              sm:gap-[10vh]
              sm:text-5xl
            "
          >
            {navLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpenMenu(false)}
                className="
                  menu-item
                  text-4xl
                  sm:text-5xl
                  md:text-6xl
                  font-extrabold
                  uppercase
                  tracking-wide
                  text-white
                  transition-all
                  duration-300
                  hover:drop-shadow-2xl
                  hover:text-black
                  hover:bg-cyan-300
                  hover:px-8
                  hover:py-3
                  hover:rounded-full
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
