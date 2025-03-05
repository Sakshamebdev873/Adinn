import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "react-router";
const Footer = () => {
  const foot = useRef(null);
  const foot1 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const { pathname } = useLocation();
  const handlesumbit = (e) => {
    e.preventDefault();
  };
  // useEffect(() => {
  //   gsap.fromTo(
  //     foot.current.children,
  //     {
  //       y: 40,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.5,
  //       delay: 0.1,
  //       ease: "power2.in",
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: foot.current,
  //         // markers:true,
  //         // scrub:true,
  //         start: "top-=250 50%",
  //         end: "botom+=50 10%",
  //       },
  //     }
  //   );
  //   gsap.fromTo(
  //     foot1.current.children,
  //     {
  //       y: 40,
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       duration: 0.5,
  //       delay: 0.1,
  //       ease: "power2.in",
  //       stagger: 0.2,
  //       scrollTrigger: {
  //         trigger: foot.current,
  //         // markers:true,
  //         // scrub:true,
  //         start: "top-=250 50%",
  //         end: "botom+=50 10%",
  //       },
  //     }
  //   );
  // }, []);
  return (
    <>
      {pathname === "/contactus" ? (
        <>
          <div className="min-h-[80vh] w-full bg-black ">
            <div className="h-full w-full flex gap-2.5 mt-4">
              <div className="w-[50%] flex flex-col px-4">
                <div className=" relative  bg-[#121212] overflow-hidden  w-[656px] h-[354px] mt-8 rounded-2xl">
                  <img
                    src="/big-grad.png"
                    alt="#"
                    className="absolute right-0 top-[52px] rounded-2xl "
                  />
                  <h1 className="font-bold leading-[40px] text-[34px] text-white pl-16 pt-12">
                    Let's Work Together
                  </h1>
                  <div className="flex flex-col text-[16px] leading-[28px] mt-4 px-16 font-medium text-[#ADADAD] z-[999] ">
                    <h1>Email : Adin123@gmail.com</h1>
                    <h1>Phone No. : 144 - 23940193</h1>
                    <h1 className="z-50">
                      Address : 123 Innovation Drive, Tech City, TC 12345,{" "}
                    </h1>
                  </div>
                  <h1 className="text-[15px] leading-[24px] font-normal mt-24 z-50 px-16 text-[#ffffff] pb-6  ">
              © designed & developed by TIC GLOBAL.
            </h1>
                </div>

                <div className="flex gap-2.5 mt-8 pb-12 ">
                  <div className="w-[335px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/facebook.png" alt="#" />
                  </div>
                  <div className="w-[335px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/insta.png" alt="#" />
                  </div>
                </div>
              </div>
              <div className="flex mt-8 flex-col w-[50%]">
                <img src="/mainadinn.png" alt="#" className="w-[656px] h-[354px] " />

                <div className="flex gap-2.5 mt-8 pb-12 ">
                  <div className="w-[335px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/x.png" alt="#" />
                  </div>
                  <div className="w-[315px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/y.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] w-full bg-black ">
            <div ref={foot} className="h-full w-full flex mt-4">
              <div ref={foot1} className="w-[50%] flex flex-col px-4">
                <div className="h-[28vh] relative w-full bg-[#121212] mt-8 rounded-2xl">
                  <img
                    src="/grad.png"
                    alt="#"
                    className="absolute inset-0 top-[52px] rounded-2xl left-[220px]"
                  />
                  <h1 className="font-bold leading-[40px] text-[34px] text-white pl-16 pt-12">
                    Let's Work Together
                  </h1>
                  <h1 className="leading-[34px] text-[21px] font-normal text-white pl-16 pt-2  ">
                    hello@gmail.com
                  </h1>
                </div>
                <img
                  src="/mainadinn.png"
                  alt="#"
                  className="rounded-2xl  mt-4 "
                />
                <div className="flex gap-2.5 mt-8 pb-12 ">
                  <div className="w-[335px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/facebook.png" alt="#" />
                  </div>
                  <div className="w-[335px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/insta.png" alt="#" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col w-[50%]">
                <div className="w-[670px] mt-8 h-[544px] bg-[#121212] rounded-[28px]">
                  <div className="px-8 w-full h-full  ">
                    <form
                      method="post"
                      onSubmit={handlesumbit}
                      className="mt-16 boss "
                    >
                      <h1 className="text-[#BDBDBD] text-[12px] leading-[16px] uppercase">
                        Name
                      </h1>
                      <input
                        type="text"
                        className="border-b border-[#BDBDBD] w-[590px] h-[45px] "
                      />
                      <h1 className="text-[#BDBDBD] text-[12px] leading-[16px]  uppercase mt-4 ">
                        Email
                      </h1>
                      <input
                        type="email"
                        className="border-b border-[#BDBDBD] w-[590px] h-[45px] "
                      />
                      <div className="flex gap-4 w-full">
                        <div className="flex mt-4 flex-col">
                          <h1 className="text-[#BDBDBD] text-[12px] leading-[16px] uppercase">
                            Contact number
                          </h1>
                          <input
                            type="tel"
                            className="border-b border-[#BDBDBD] w-[285px] h-[45px] "
                          />
                        </div>
                        <div className="flex mt-4 flex-col">
                          <h1 className="text-[#BDBDBD] text-[12px] leading-[16px] uppercase">
                            Website (optional)
                          </h1>
                          <input
                            type="text"
                            className="border-b border-[#BDBDBD] w-[285px] h-[45px] "
                          />
                        </div>
                      </div>
                      <h1 className="text-[#BDBDBD] text-[12px] leading-[16px] mt-4 uppercase">
                        Message
                      </h1>
                      <input
                        type="text"
                        className="border-b border-[#BDBDBD] w-[590px] h-[100px] "
                      />
                      <button
                        type="submit"
                        className="w-[590px] h-[40px] bg-[#EC2B45]  uppercase text-[#ffffff] font-normal text-[12px] leading-[15px] text-center mt-8 rounded-[25px] "
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
                <div className="flex gap-2.5 mt-8 pb-12 ">
                  <div className="w-[335px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/x.png" alt="#" />
                  </div>
                  <div className="w-[315px] h-[80px] flex justify-center rounded-2xl items-center bg-[#121212] ">
                    <img src="/y.png" alt="#" />
                  </div>
                </div>
              </div>
            </div>
            <h1 className="text-[15px] leading-[24px] text-center text-[#ffffff] pb-6  ">
              © designed & developed by TIC GLOBAL.
            </h1>
          </div>
        </>
      )}
    </>
  );
};

export default Footer;
