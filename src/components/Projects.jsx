import React, { useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Projects = () => {
  gsap.registerPlugin(ScrollTrigger);
  // const img = useRef(null);
  // const part = useRef(null);
  const proj = useRef([]);
  const projectsdata = [
    {
      image: "/p1.png",
      title: "Tvs",
    },
    {
      image: "/p2.png",
      title: "Malabar",
    },
    {
      image: "/p3.png",
      title: "Haier",
    },
    {
      image: "/p4.png",
      title: "Tata IPL",
    },
  ];

  useEffect(() => {
    // gsap.fromTo(
    //   img.current,
    //   {
    //     y: -120,
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 3.6,
    //     y: 0,
    //     delay: 0.2,
    //     ease: 'power2.in',
    //     scrollTrigger: {
    //       trigger: img.current,
    //       start: "top-=60 80%",
    //       end: "botom+=250 40%",
    //       // markers: true,
    //       scrub:true
    //     },
    //   }
    // );
    // gsap.fromTo(
    //   part.current,
    //   {
    //     y: 100,
    //     opacity: 0,
    //   },
    //   {
    //     opacity: 1,
    //     duration: 3.6,
    //     y: 0,
    //     delay: 0.2,
    //     ease: 'power2.in',
    //     scrollTrigger: {
    //       trigger: img.current,
    //       start: "top-=40 80%",
    //       end: "botom+=250 40%",
    //       // markers: true,
    //       scrub:true
    //     },
    //   }
    // );
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
        ease: "power2.in",
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
      <div className="min-h-[90vh] w-full">
        <div className="flex items-center h-full mt-36 w-full justify-center relative ">
          <div className="uppercase text-[92px] leading-[104px] font-bold ">
            <h1 className="absolute top-44 left-60 ">WHAT</h1>
          </div>
          <img src="/phone.png" alt="" />

          <div className="flex flex-col  mt-12 text-white font-normal text-[16px] gap-4 absolute right-52 bottom-36 leading-[33px] ">
            <h1 className="text-[92px] leading-[105px] font-bold text-black">
              We do
            </h1>
            <div className="flex gap-4">
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
      <div className="min-h-[200vh]  pb-20 mt-48 h-full w-full">
        <div className="w-full h-full text-white grid  grid-cols-2">
          <div className="flex items-center gap-2.5  mt-12 text-[96px] justify-center leading-[105px] ">
            <h1 className="font-bold text-black ">OUR</h1>
            <h1 className="world italic font-normal  mt-4 text-[#CF1E00]  ">
              Projects
            </h1>
          </div>
          <div className="text-[17px] leading-[24px] text-[#404145] px-36 ">
            <h1 className="mt-24">
              Explore the exclusive advantages of partnering with Adorn for all
              your creative needs.
            </h1>
          </div>
        </div>
        {/* now projects */}
        <div className="w-full h-full mt-24 ">
          <div className="flex justify-center items-center gap-8 flex-wrap">
            {projectsdata.map((item, index) => {
              const { image, title, text } = item;
              return (
                <div
                  className={
                    index > 1 ? "flex flex-col mt-4 " : "flex flex-col "
                  }
                >
                  <img
                    src={image}
                    alt="image"
                    className="rounded-4xl h-[704px] w-[624px] "
                  />
                  <div className="flex justify-between items-center text-[20px] font-bold leading-[24px] px-4 mt-8">
                    <h1 className="text-black">{title}</h1>
                    <h1 className="text-[#AFB0B6] flex items-center justify-center gap-2 ">
                      View Projects <GoArrowUpRight className="text-2xl" />{" "}
                    </h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* projetcs after part*/}
      <div className="w-full flex justify-center items-center">
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
             <button
                type="button"
                className="cursor-pointer px-[24px] py-[16px] mt-4 w-[212px] h-[52px] bg-white float-right font-semibold rounded-[26px] text-[17px] leading-[21px] "
              >
                Book a call
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
{
  /* <div className="mt-12 w-full h-full">
        <div className="grid grid-cols-2 w-full px-40">
          
          <div ref={img} className="w-full h-full ">
            <div className="flex items-center relative justify-center">
              <img src="/b2.png" alt="" />
              <div className="absolute -mt-16 inset-0 flex items-center justify-center ">
                <img src="/s.png" alt="#" />
              </div>
            </div>
          </div>
      
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
      </div> */
}
