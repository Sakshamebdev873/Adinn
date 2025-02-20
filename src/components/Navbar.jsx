import React from 'react';

const Navbar = () => {
  return (
    <div className="w-full h-full text-white">
      <div className="mx-2 mt-2 grid grid-cols-3 items-center text-[0.9rem] bg-[#EC2B45]  px-6 rounded-t-xl">
        
        {/* Left Navigation Links */}
        <div className="flex pl-4 pt-[12px] gap-16">
          <h1 className="font-bold text-[14px]">Home</h1>
          <h1 className="text-[#F9C0C0]">About us</h1>
          <h1 className="text-[#F9C0C0]">Service</h1>
        </div>

        {/* Centered Logo */}
        <div className="flex justify-center -mt-1 relative">
          <img src="/Group 7.png" alt="Background Logo" className="" />
          <img src="/logo.png" alt="Main Logo" className="absolute top-2" />
        </div>

        {/* Right Navigation + Button */}
        <div className="flex pt-[12px] justify-end pr-4 gap-16 items-center">
          <h1 className="text-[#F9C0C0]">Project</h1>
          <h1 className="text-[#F9C0C0]">Contact us</h1>
          <button className="text-black rounded-4xl text-[1rem] font-semibold text-center bg-white py-[10px] px-[20px]">
            Book a Call
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
