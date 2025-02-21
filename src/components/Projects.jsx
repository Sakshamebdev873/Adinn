import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  const img = useRef(null);
  const part = useRef(null);
  const proj = useRef([])
  const projectsdata = [
    {
      image: "/img1.png",
      title: "HDFC Bank",
      text: "Stall Design Structure",
      image2: "/img2.png",
    },
    {
      image: "/img4.png",
      title: "LIC",
      text: "External Branding",
      image2: "/img3.png",
    },
    {
      image: "/img5.png",
      title: "Muthoot Finance",
      text: "Local Visibility",
      image2: "/img6.png",
    },
    {
      image: "/img7.png",
      title: "TVS",
      text: "Digital Branding",
      image2: "",
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      img.current,
      {
        y: -120,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3.6,
        y: 0,
        delay: 0.2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: img.current,
          start: "top-=60 80%",
          end: "botom+=250 40%",
          // markers: true,
          scrub:true
        },
      }
    );
    gsap.fromTo(
      part.current,
      {
        y: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 3.6,
        y: 0,
        delay: 0.2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: img.current,
          start: "top-=40 80%",
          end: "botom+=250 40%",
          // markers: true,
          scrub:true
        },
      }
    );
    if (proj.current.length === 0) return; // Ensure elements are assigned

    gsap.fromTo(
      proj.current,
      { y: 80, opacity: 0 },
      {
        opacity: 1,
        duration: 0.6,
        y: 0,
        delay: 0.2,
        stagger: 0.15,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: proj.current[0], // Use the first element as a trigger
          start: "top-=140 80%",
          end: "bottom+=550 40%",
          // markers: true,
          // scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div className="mt-12 w-full h-full">
        <div className="grid grid-cols-2 w-full px-40">
          {/* part-1 */}
          <div ref={img} className="w-full h-full ">
            <div className="flex items-center relative justify-center">
              <img src="/b2.png" alt="" />
              <div className="absolute -mt-16 inset-0 flex items-center justify-center ">
                <img src="/s.png" alt="#" />
              </div>
            </div>
          </div>
          {/* part-2 */}
          <div className="flex flex-col  w-full  ">
            <div className="w-[551px] h-[2px] bg-[#DD1B31] mb-[70px] mt-8 px-16 "></div>
            <div ref={part} className="flex  text-[64px] w-full leading-[105px] text-left gap-x-1.5 ">
              <h1 className="font-bold uppercase text-left ">What</h1>
              <h1 className="italic font-normal world text-[#474747] text-left">
                We Do
              </h1>
            </div>
            <p className="text-[#BFBEC4] text-[18px] leading-[28px] font-medium w-[551px] ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi ad
              tempore assumenda quae iusto dicta alias, eum earum nihil
              laudantium facilis minima, suscipit atque ea distinctio
              temporibus? Nesciunt, quisquam officia!
            </p>
            <div className="flex  mt-12 text-white font-normal text-[16px] gap-4 leading-[33px] ">
              <button
                type="button"
                className=" py-[7px] px-[18px] bg-[#d62f3d] gap-1  flex justify-center items-center rounded-[25px]"
              >
                More about us
                <GoArrowUpRight className="text-2xl" />
              </button>
              <button
                type="button"
                className=" py-[7px] px-[18px] bg-[#EAEAEA] text-black rounded-[25px]"
              >
                Our Project
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* Projects */}
      <div className="min-h-[200vh] bg-black pb-20 mt-48 h-full w-full">
        <div className="w-full h-full text-white grid  grid-cols-2">
          <div className="flex items-center gap-2.5  mt-12 text-[96px] justify-center leading-[105px] ">
            <h1 className="font-bold">OUR</h1>
            <h1 className="world italic font-normal  mt-4 text-[#CF1E00]  ">
              Projects
            </h1>
          </div>
          <div className="text-[17px] leading-[24px] text-[#C9C9C9] px-36 ">
            <h1 className="mt-24">
              Explore the exclusive advantages of partnering with Adorn for all
              your creative needs.
            </h1>
          </div>
        </div>
        {/* now projects */}
        
        {projectsdata.map((item, index) => {
          const { image, image2, title, text } = item;
          return (
            <div ref={(el) => proj.current[index] = el }>
            <div 
            
              key={index}
              className={
                index % 2 == 0
                  ? `flex mt-20 w-full gap-x-20 justify-center items-center  `
                  : `flex mt-20 w-full gap-x-20 flex-row-reverse justify-center items-center`
              }
            >
              {/* part-1 */}
              <div 
                className={
                  index === 3
                    ? "flex flex-col pl-[20rem] relative"
                    : "flex flex-col relative"
                }
              >
                <div className="relative">
                  <img
                    src={image} 
                    alt="#"
                    className="w-[570px] bg-blend-difference   h-[330px] rounded-xl "
                  />
                  {/* {index>2?<div className="absolute inset-0 bg-gradient-to-b from-[#E3E3E3]  rounded-xl to-transparent"></div> : null} */}
                </div>
                <h1 className="text-[28px] mt-8 leading-[34px]  text-white font-bold  ">
                  {title}
                </h1>
                <h1 className="uppercase text-[14px] mt-2 leading-[20px] text-[#FF090D] ">
                  {text}
                </h1>
              </div>
              {/* part-2 */}
              <div className="pr-52 pb-24 ">
                {image2.length === 0 ? null : (
                  <img src={image2} alt="" className="h-[300px] w-[300px]" />
                )}
              </div>
            </div>
            </div>
          );
        })}
       
        <div className="flex justify-center items-center text-[16px] text-[#AEAEAE] mt-24 leading-[24px]">
          <button
            type="button"
            className="border border-[#AEAEAE] px-[20px] cursor-pointer rounded-[21px] py-[9px]"
          >
            View More
          </button>
        </div>

        {/* projetcs after part*/}
        <div className="w-full flex justify-center items-center">
          <div className="w-[1220px] h-[462px] bg-[#EC2B45] flex gap-y-4 rounded-2xl px-24  justify-center mt-24 items-center">
            <div className="w-full   text-[80px] gap-x-4 text-white leading-[88px]">
              <h1 className="whitespace-nowrap">Let's Create Your</h1>
              <h1 className="world italic "> Dream Project</h1>
            </div>
            <div className="flex flex-col  justify-center items-center ">
              <img
                src="/img8.png"
                alt=""
                className="h-[204px] mb-12 w-[182px]"
              />
              <div className="flex flex-col text-[17px] leading-[27px] -mt-12 text-[#eaacbf]">
                <p>
                  Our team is here to help you succeed. Let's work together to
                  achieve your goals and elevate your brand to new heights.
                </p>
              </div>
              <button
                type="button"
                className="cursor-pointer px-[24px] py-[16px] mt-4 bg-white font-semibold rounded-[26px] text-[17px] leading-[21px] "
              >
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
