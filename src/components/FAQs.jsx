import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const head = useRef(null);
  const part = useRef([]);
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.fromTo(
      head.current.children,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: head.current,
          // markers: true,
          start: "top-=150 80%",
          end: "bottom-=50 50%%",
          // scrub: true,
        },
      }
    );
    gsap.fromTo(
      part.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.2,
        stagger: 0.2,
        ease: 'power2.in',
        scrollTrigger: {
          trigger: head.current,
          // markers: true,
          start: "top+=150 80%",
          end: "bottom+=250 50%%",
          // scrub: true,
        },
      }
    );
  }, []);
  const Accorddata = [
    {
      id: 1,
      title: "How long does it take to complete a project?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in adipisci cupiditate consectetur necessitatibus asperiores, tempora voluptatem quas amet praesentium soluta accusamus, hic unde, ipsum animi velit ullam quae distinctio.",
    },
    {
      id: 2,
      title: "What is your design process like?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in adipisci cupiditate consectetur necessitatibus asperiores, tempora voluptatem quas amet praesentium soluta accusamus, hic unde, ipsum animi velit ullam quae distinctio.",
    },
    {
      id: 3,
      title: "Can I request revisions to the design?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in adipisci cupiditate consectetur necessitatibus asperiores, tempora voluptatem quas amet praesentium soluta accusamus, hic unde, ipsum animi velit ullam quae distinctio.",
    },
    {
      id: 4,
      title: "Do you provide support after project completion?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in adipisci cupiditate consectetur necessitatibus asperiores, tempora voluptatem quas amet praesentium soluta accusamus, hic unde, ipsum animi velit ullam quae distinctio.",
    },
    {
      id: 5,
      title: "Can I see examples of your previous work?",
      ans: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore in adipisci cupiditate consectetur necessitatibus asperiores, tempora voluptatem quas amet praesentium soluta accusamus, hic unde, ipsum animi velit ullam quae distinctio.",
    },
  ];

  return (
    <div className="min-h-screen pb-24 w-full">
      <div ref={head} className="mt-24 overflow-hidden ">
        <h1 className="text-center text-[96px] leading-[105px] font-medium text-[#28334D]">
          Clearing Up Common
        </h1>
        <h1 className="text-center text-[96px] leading-[105px] font-normal text-[#CF1E00] italic">
          Queries
        </h1>
        <p className="text-[17px]  leading-[24px] text-[#8693B1] font-medium text-center mt-4 ">
          Dive into our FAQ section for insights into our services. We've
          compiled answers{" "}
        </p>
        <p className="text-[17px]  leading-[24px] text-[#8693B1] font-medium text-center   ">
          to common questions to ensure you're well-informed.
        </p>
      </div>

      {/* Accordion */}
      {Accorddata.map((item, index) => (
        <div ref={(el)=>part.current[index] = el}
          key={index}
          className="flex flex-col mt-8 max-w-3/4 w-[60%] border-[#8693B1] mx-auto"
        >
          <div className="flex justify-between items-center">
            <p className="font-medium text-[17px] leading-[24px]">
              {item.title}
            </p>
            <p
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="text-[17px] leading-[24px] cursor-pointer  transition-all ease-in duration-500"
            >
              {activeIndex === index ? "−" : "+"}
            </p>
          </div>
          <p
            className={
              "text-[17px] mt-4 block leading-[24px] text-[#8693B1] font-medium"
            }
          >
            {activeIndex === index && item.ans}
          </p>
          <p className="w-full h-[1px] bg-[#8693B1] mt-4"></p>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
