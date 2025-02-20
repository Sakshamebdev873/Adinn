import React from "react";

const Hero = () => {
  return (
    <>
      <div className="h-full w-full  ">
        <div className="h-dvh relative bg-gradient-to-b pb-16  flex justify-center items-center flex-col from-50% from-[#EC2B45] to-[#790619] mx-2 ">
          <h1 className="font-extrabold text-[100px] bg-gradient-to-b uppercase leading-[108px] pt-28  from-[#ffffff] from-50% text-center  to-[#B8312E]  bg-clip-text text-transparent ">
            {" "}
            Lorem ipsum dolor sit amet consectetur.{" "}
          </h1>

          <img src="/banner.png" alt="banner" className="-mt-[270px]" />

          <div className="absolute  bottom-8 right-12 ">
            <img src="/people.png" alt="" className="" />
            <div className="flex mt-2 gap-x-1  ">
              <h1 className="text-[15px] text-white font-bold leading-[18px] ">
                1000+
              </h1>
              <h1 className="text-[15px] text-[#d8d8d8] font-bold leading-[18px]">
                clients statisfied
              </h1>
            </div>
          </div>
        </div>

        {/* hero 2 section */}

        <div className="w-full min-h-[85vh] ">
          <div className="flex items-center justify-center w-full h-full">
            <div className="mt-24   flex items-center text-[45px]  flex-row w-[90%] leading-[62.4px] justify-center text-center">
              <span className="text-[#2C2C2C]   ">
                Adnin
                <span className="text-[#d8d8d8]"> is a hub </span>
                <span className="text-[#2C2C2C]">
                  of creativity and innovation.
                </span>
                <span className="text-[#d8d8d8]">We're dedicated to </span>
                <span className="text-[#2C2C2C]">
                  bringing your brands to life through unique impactful design
                  solutions.
                </span>
                <span className="text-[#d8d8d8]">Dive into our world and</span>
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center w-full ">
            <button
              type="button"
              className="mt-12 bg-white text-[17px] rounded-2xl  shadow-[0px_1px_33.4px_rgba(241,96,96,0.15)] drop-shadow-xl leading-[20.4px] text-center py-[16px] px-[24px] "
            >
              Discover more about us
            </button>
          </div>
         
        </div>
      </div>
      <div className="grid grid-cols-2 px-12 mt-24 ">
            <span className="text-[96px] font-extrabold leading-[105px] flex  " >
              OUR<h1 className="italic font-normal  mt-2 pl-5 text-[#CF1E00] world " >Services</h1>
            </span>
            <h1 className="text-[17px]  leading-[23.8px] text-[#7C7D7E] flex items-center justify-center font-medium " >
              Dive into a world of creativity and inspiration with  our
              portfolio. Explore our <br/>work and imagine the possibilities for your
              brand.
            </h1>
          </div>
    </>
  );
};

export default Hero;
