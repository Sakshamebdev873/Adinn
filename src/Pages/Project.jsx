import React, { useEffect, useState } from "react";
import Footer from '../components/Footer' 
import imgarray from '../Data/imgarray'
import {Link, useLocation} from 'react-router'
const Project = () => {
  const txtarray = [
    "Outddor Media Solution",
    "Roadshow",
    "Retail Branding & Signage Solutions",
    "Exhibition Design Solution",
    "Events & Activate Solutions",
    "Digital Marketing",
    "Buying & Planning",
    "Rural Engagement & Solutions",
  ];
  const [isVisible, setIsVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const ScrollToTop = () => {
    useEffect(() => {
      window.addEventListener("scroll", toggleVisibility);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener("scroll", toggleVisibility);
      };
    }, []);

    // Reset visibility on route change
    useEffect(() => {
      setIsVisible(false);
    }, [location]);
  };
  const location = useLocation();
  
  return (
    <>
      <div className="w-full h-full mt-[-100px] ">
        <div className="relative min-h-screen bg-black w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/4214/564b/1a7eb4cc615c2b375547f38a64733c67?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Rf4ElCbq5-NHGLM8YGuxtTqpz~YxixvAffQVtfMYqEVyEKAe2ZmmvK9XKli0xG9hiwRygBvuvp8ocoiDGw5p1AB6Flc5xTWNLElqLl~yrbzYdYZf6QIcA1g52E9SBp-HywDVDwAY6bJTFUK-uZiGdX-8bWYd1dCB5a9pBOxQBzXfZRDZnTFDH4OpSdjMnBdm8y57b2O8pggmyd3YRFALJX0ylhM5YJrzTA02DUHNx9Q2BCE2QZlWulpL8wIFKUy38-II4Kv4xc4Z1qiewamhB5~ysTKS5JUoExBB95Wp42a-4TwAdR8e1qFvtxpC2WeMQh0lblhit02mLJoEVf3kJA__"
            alt="#"
            className="opacity-60 w-[1440px] h-[768px] "
          />
          <div className="flex flex-col absolute bottom-28 left-16">
            <h1 className="text-[54px] leading-[54px] text-white mb-4 drop-shadow-[0px_4px_39.1px_rgba(207,30,0,0.5)] font-extrabold">
              Projects
            </h1>
            <p className="text-[20px] leading-[30px] text-[#E1E1E1CC] font-normal">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 flex justify-center px-2.5 gap-2.5  items-center flex-row flex-wrap ">
        {txtarray.map((item, index) => {
          return (
            <div key={index} className="flex justify-center mt-4 items-center ">
              <button
                type="button"
                className={
                  index == 0
                    ? "py-[15px] px-[20px] bg-gradient-to-r from-[#EC2B45] to-[#861927] rounded-[26px] text-white text-[14px] leading-[21px] font-medium "
                    : "py-[15px] px-[20px] bg-gradient-to-r rounded-[26px] text-[#2A2A2A] shadow-xl text-[14px] leading-[21px] border border-[#F5F5F542]  font-medium  "
                }
              >
                {item}
              </button>
            </div>
          );
        })}
      </div>
      <div className="mt-[10vh]">
        <div className="flex justify-center items-center gap-2 text-[72px] ">
          <p className="leading-[137px] font-medium">Outdoor Media</p>
          <p className="world italic leading-[107px] font-normal text-[#CF1E00] mt-2 ">
            Solutions
          </p>
          <p></p>
        </div>
      </div>
      {/* images section */}
      <div className="flex flex-row flex-wrap mt-12 px-2.5 gap-6 " > 
        {imgarray.map((item)=>{
          const {id , text,para,image} = item
          return <Link to={`/project/${id}`} onClick={ScrollToTop} key={id} className={id>3 ?"relative max-w-fit rounded-[16px] mt-12  bg-black" : "relative max-w-fit rounded-[16px]  bg-black" }>
          <img
            src={image}
            alt="#"
            className="h-[465px]  w-[428px]  rounded-[16px] object-cover opacity-55"
          />
          <div className="absolute bottom-8 left-4">
            <h1 className="text-[24px] leading-[31px] font-extrabold text-white ">
              {text}
            </h1>
            <h1 className=" text-[17px] leading-[18px] font-bold text-[#AFB0B6] mt-2 ">
              {para}
            </h1>
          </div>
        </Link>
        } )}
      </div>
      {/* image after part.... */}
      <div className="w-full flex justify-center mt-24 pb-20 items-center">
        <div className="w-[1260px] h-[462px] bg-[#EC2B45] relative flex rounded-2xl mt-24 ">
          <img
            src="/star.png"
            alt="star"
            className="asbolute inset-0 top-7 left-0"
          />
          <div className="flex gap-y-4  px-6 items-center justify-center " >
            <div className="w-full   text-[80px] gap-x-4 text-white leading-[88px]">
              <h1 className="whitespace-nowrap">Let's Create Your</h1>
              <h1 className="world italic "> Dream Project</h1>
            </div>
            <div className="flex flex-col">
              <img
                src="/img8.png"
                alt=""
                className="h-[124px] ml-24  mb-36 w-[124px]"
              />
              <div className="flex flex-col text-[17px] text-right leading-[27px] -mt-12 text-[#eaacbf]">
                <p>
                  Our team is here to help you succeed. <br/>Let's work together to
                  achieve your goals and elevate your brand to new heights.
                </p>
              </div>
             <div className="w-full " >
             <Link
                to={'/contactus'} onClick={ScrollToTop}
                className="cursor-pointer px-[24px] py-[16px] mt-4 flex justify-center items-center w-[212px] h-[52px] bg-white float-right font-semibold rounded-[26px] text-[17px] leading-[21px] "
              >
                Book a call
              </Link>
             </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Project;
