import React, { useEffect, useRef } from "react";
import {gsap} from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Hero = () => {
  gsap.registerPlugin(ScrollTrigger);
  const maintext = useRef(null)
  const imageref = useRef(null)
  const imageref2 = useRef(null)
  const slidetext = useRef(null)
  const serv = useRef(null)
  const slide = useRef(null)
  useEffect(()=>{
    gsap.fromTo(maintext.current,{
      y:20,
      opacity:0
    },{
      y:0,
      opacity : 1,
      duration:0.8,
      delay:0.1,
      ease: 'sine.in',
      stagger:0.05
    })
    
    gsap.fromTo(imageref.current,{
      y:-20,
      opacity:0
    },{
      y:0,
      opacity : 1,
      duration:0.8,
      delay:0.1,
      ease: 'sine.in',
      stagger:0.05
    })
    gsap.fromTo(imageref2.current,{
      scale:0,
      opacity:0
    },{
      opacity : 1,
      duration:0.8,
      delay:0.1,
      scale:1,
      ease: 'sine.in',
      stagger:0.05
    })
    gsap.fromTo(slidetext.current.children, 
      { y: -180, opacity: 0 ,}, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.1, 
        stagger: 0.5,
        ease:'power2.in',
        scrollTrigger: {
          trigger: slide.current,  
          start: "top-=400 10%",  
          end: "bottom-=200 80%", 
          scrub: true, 
          // markers: true, 
        }
      }
    );
    gsap.fromTo(serv.current.children, 
      { y: -80, opacity: 0 ,}, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.5, 
        delay: 0.1, 
        ease: 'power2.in',
        stagger:0.15,
        scrollTrigger: {
          trigger: serv.current,  
          start: "top-=100 80%",  
          end: "bottom-=50 50%", 
          // scrub: true, 
          // markers: true, 
        }
      }
    );
  },[])
  return (
    <>
      <div className="h-full w-full  ">
        <div  className="h-dvh relative bg-gradient-to-b pb-16  flex justify-center items-center flex-col from-50% from-[#EC2B45] to-[#790619] mx-2 ">
          <span ref={maintext} className="font-extrabold inline-block  text-[100px] bg-gradient-to-b uppercase leading-[108px] pt-28  from-[#ffffff] from-50% text-center  to-[#B8312E]  bg-clip-text text-transparent ">
          Lorem ipsum dolor sit
          amet consectetur. 
          </span>

          <img src="/banner.png" ref={imageref} alt="banner" className="-mt-[270px]" />

          <div className="absolute  bottom-8 right-12 ">
            <img src="/people.png" alt="" ref={imageref2} className="" />
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

        <div ref={slide} className="w-full min-h-[85vh] ">
          <div className="flex items-center justify-center   w-full h-full">
            <div  className="mt-24   flex items-center text-[45px]  flex-row w-[90%] leading-[62.4px] justify-center text-center">
              <div ref={slidetext} className="" >
           <span className="text-[#2C2C2C]"> Adinn</span>
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
              </div>
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
      <div ref={serv} className="grid grid-cols-2  overflow-hidden px-12 mt-24 ">
      
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
