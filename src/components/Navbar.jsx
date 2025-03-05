import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { NavLink, Link, useLocation } from "react-router";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
  const textRef = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);
  const buttonRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.fromTo(
      textRef.current?.children,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, delay: 0.1 }
    );
    gsap.fromTo(
      textRef1.current?.children,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.1 }
    );
    gsap.fromTo(
      textRef2.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    );
    gsap.fromTo(
      "#hello",
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, delay: 0.1 }
    );
    gsap.fromTo(
      buttonRef.current?.children,
      { y: -40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, delay: 0.1 }
    );
  }, []);

  const isContactPage = pathname === "/contactus";
  const isProjectDetailPage = pathname.startsWith("/project/");
  const logoSrc = isContactPage ? "/logo.png" : "/whitelogo.png";
  const textColor = isContactPage ? "text-black" : "text-white";
  const buttonBg = isContactPage ? "bg-black" : "bg-[#444444]";

  return (
    <div className={`w-full h-full ${textColor}`}>
      <div className={isProjectDetailPage? `flex justify-between items-center overflow-hidden pt-6 text-[0.9rem] px-6`:`flex justify-between items-center overflow-hidden text-[0.9rem] px-6`}>
        <div>
          <Link to="/">
            <img src={logoSrc} alt="Main Logo" className={isProjectDetailPage ?`absolute top-10 z-[99] cursor-pointer`: `absolute top-4 z-[99] cursor-pointer`} />
          </Link>
        </div>
        <div ref={textRef} className={`flex pl-4 pt-[12px] ${textColor} z-10 gap-16`}>
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#CF1E00] cursor-pointer text-[14px]" : "cursor-pointer text-[14px]")}>Home</NavLink>
          <NavLink to="/about" ref={textRef2} className={({ isActive }) => (isActive ? "text-[#CF1E00] font-bold cursor-pointer" : "cursor-pointer")}>About us</NavLink>
          <NavLink to="/service" id="hello" className={({ isActive }) => (isActive ? "text-[#CF1E00] flex items-center justify-center font-bold cursor-pointer" : "flex items-center justify-center cursor-pointer")}>
            Service <MdKeyboardArrowDown />
          </NavLink>
          <NavLink to="/project" className={({ isActive }) => (isActive ? "text-[#CF1E00] font-bold cursor-pointer" : "cursor-pointer")}>Project</NavLink>
          <NavLink to="/contactus" className={({ isActive }) => (isActive ? "text-[#CF1E00] font-bold cursor-pointer" : "cursor-pointer")}>Contact Us</NavLink>
        </div>
        <div className="flex pt-[12px] justify-end pr-4 z-10 gap-16 items-center">
          <Link to={'/contactus'} className={isProjectDetailPage ? `bg-white cursor-pointer rounded-4xl text-[1rem] flex font-semibold overflow-hidden text-center backdrop-blur-2xl border border-white py-[10px] px-[20px] text-[black]`:`text-white cursor-pointer rounded-4xl text-[1rem] flex font-semibold overflow-hidden text-center backdrop-blur-2xl border border-white py-[10px] px-[20px] ${buttonBg}`}>
            Book a call
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
