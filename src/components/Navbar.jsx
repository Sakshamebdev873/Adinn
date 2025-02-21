import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Navbar = () => {
  const textref = useRef(null);
  const textref1 = useRef(null);
  const textref2 = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      textref.current.children,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 0.1 }
    );

    gsap.fromTo(
      textref1.current.children,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.1 }
    );

    gsap.fromTo(
      textref2.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    );

    gsap.fromTo(
      "#hello",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    );

    // gsap.fromTo(
    //   buttonRef.current.children,
    //   { y:-40, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.1 }
    // );
  }, []);

  return (
    <div className="w-full h-full text-white">
      <div className="mx-2 mt-2 grid grid-cols-3 items-center overflow-hidden text-[0.9rem] bg-[#EC2B45] px-6 rounded-t-xl">
        {/* Left Navigation Links */}
        <div ref={textref} className="flex pl-4 pt-[12px]  z-10 gap-16">
          <span className="font-bold cursor-pointer text-[14px]">Home</span>
          <span className="text-[#F9C0C0] cursor-pointer">About us</span>
          <span className="text-[#F9C0C0] cursor-pointer">Service</span>
        </div>

        {/* Centered Logo */}
        <div ref={textref1} className="flex justify-center -mt-1 z-10 relative">
          <img src="/Group 7.png" alt="Background Logo" />
          <img src="/logo.png" alt="Main Logo" className="absolute top-2 cursor-pointer" />
        </div>

        {/* Right Navigation + Button */}
        <div className="flex pt-[12px] justify-end pr-4 z-10 gap-16 items-center">
          <h1 ref={textref2} className="text-[#F9C0C0] cursor-pointer">Project</h1>
          <h1 id="hello" className="text-[#F9C0C0] cursor-pointer">Contact us</h1>
          
          {/* Animated Button */}
          <button
            className="text-black cursor-pointer rounded-4xl text-[1rem] flex font-semibold overflow-hidden text-center bg-white py-[10px] px-[20px]"
          >
            <span>B</span>
            <span>o</span>
            <span>o</span>
            <span>k</span>
            <span>&nbsp;</span> {/* Non-breaking space */}
            <span>a</span>
            <span>&nbsp;</span> {/* Non-breaking space */}
            <span>C</span>
            <span>a</span>
            <span>l</span>
            <span>l</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
