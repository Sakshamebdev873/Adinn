import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink,Link } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";
const Navbar = () => {
  const textref = useRef(null);
  const textref1 = useRef(null);
  const textref2 = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // gsap.fromTo(
    //   textref.current.children,
    //   { y: -100, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 0.1 }
    // );
    // gsap.fromTo(
    //   textref1.current.children,
    //   { y: -100, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.1 }
    // );
    // gsap.fromTo(
    //   textref2.current,
    //   { y: -100, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    // );
    // gsap.fromTo(
    //   "#hello",
    //   { y: -100, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    // );
    // gsap.fromTo(
    //   buttonRef.current.children,
    //   { y:-40, opacity: 0 },
    //   { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.1 }
    // );
  }, []);

  return (
    <div className="w-full h-full text-white">
      <div className="flex justify-between items-center   overflow-hidden text-[0.9rem] px-6">
        <div className="" >
          <Link to={'/'} ><img
            src="/whitelogo.png"
            alt="Main Logo"
            className="absolute top-4 z-[99] cursor-pointer"
          /></Link>
        </div>
        {/* Left Navigation Links */}
        <div
          ref={textref}
          className="flex pl-4 pt-[12px] text-white  z-10 gap-16"
        >
          <NavLink to={'/'} className={({isActive}) =>  isActive ? " text-[#CF1E00] cursor-pointer text-[14px]":"cursor-pointer text-[14px]"}>Home</NavLink>
          <NavLink to={'/about'} ref={textref2} className={({isActive})=> isActive ? "text-[#CF1E00] font-bold cursor-pointer":" cursor-pointer"}>
            About us
          </NavLink>
          <NavLink to={'/service'} id="hello" className={({isActive})=> isActive ? "text-[#CF1E00] flex items-center justify-center font-bold cursor-pointer":" flex items-center justify-center cursor-pointer"}>
            Service<MdKeyboardArrowDown/>
          </NavLink>
          <NavLink to={'/project'} className={({isActive})=> isActive ? "text-[#CF1E00] font-bold cursor-pointer":" cursor-pointer"}>Project</NavLink>
          <NavLink to={'/'} className={({isActive})=> isActive ? "text-[#CF1E00] font-bold cursor-pointer":" cursor-pointer"}>Contact us</NavLink>
        </div>

        {/* Centered Logo */}
        {/* <div ref={textref1} className="flex justify-center -mt-1 z-10 relative">
          <img src="/Group 7.png" alt="Background Logo" />
        </div> */}

        {/* Right Navigation + Button */}
        <div className="flex pt-[12px] justify-end pr-4 z-10 gap-16 items-center">
          {/* Animated Button */}
          <button className="text-white cursor-pointer rounded-4xl text-[1rem] flex font-semibold overflow-hidden text-center  backdrop-blur-2xl border bg-[#444444]  border-white  py-[10px] px-[20px]">
            Book a call
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
