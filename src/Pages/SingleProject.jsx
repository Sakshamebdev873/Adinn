import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import imgarray from "../Data/imgarray";
const SingleProject = () => {
  const { id } = useParams();
const [texting, setText] = useState(imgarray || []);

const fetchpro = () => {

  const selectedItem = texting.find(item => String(item.id) === String(id)); 

  if (selectedItem) {
    setText(selectedItem);
    console.log(selectedItem);
  } else {
    console.warn("No matching item found for id:", id);
  }
};

useEffect(() => {
  fetchpro();
}, [id]);

  return (
    <>
      <div className="h-[115vh] relative bg-gradient-to-b pb-28 pt-16 mt-[-70px] rounded-[16px]  flex justify-center items-center flex-col from-50% from-[#EC2B45] to-[#790619] mx-2 ">
        <span className="font-extrabold mt-[92px]  inline-block  text-[100px] bg-gradient-to-b uppercase leading-[108px] pt-28  from-[#ffffff] from-50% text-center  to-[#B8312E]  bg-clip-text text-transparent ">
          {texting.para}
        </span>
        <div className="relative">
          <img src="/banner.png" alt="banner" className="-mt-[270px] " />
          <img src="/over.png" alt="#" className="absolute inset-0 left-36" />
        </div>
        <div className="absolute  bottom-8 right-12 ">
          <Link
            to={"/service"}
            className="cursor-pointer my  text-white rounded-4xl text-[16px] leading-[21px] font-medium flex justify-center items-center overflow-hidden   py-[10px] px-[20px] bg-[black]"
          >
            View Service
          </Link>
          <h1 className="text-[20px] font-medium mt-2 text-white  leading-[30px]  ">
            {texting.text}
          </h1>
        </div>
      </div>
      <div className="min-h-screen w-full">
        <div className="flex gap-4 justify-between items-center px-20 mt-12 ">
          <div className="flex flex-col items-center justify-center name ">
            <h1 className="text-[20px] leading-[36px] font-bold text-black ">
              Client
            </h1>
            <p className="text-[14px] leading-[19px] font-normal w-[177px] text-center mt-2 h-[38px] text-[#696565]">
              Lorem ipsum dolor, sit amet constructor
            </p>
          </div>
          <div className="flex flex-col items-center justify-center name ">
            <h1 className="text-[20px] leading-[36px] font-bold text-black ">
              Service
            </h1>
            <p className="text-[14px] leading-[19px] font-normal text-[#696565] w-[177px] mt-2 text-center h-[38px] ">
              Lorem ipsum dolor, sit amet constructor
            </p>
          </div>
          <div className="flex flex-col items-center justify-center name ">
            <h1 className="text-[20px] leading-[36px] font-bold text-black ">
              Year
            </h1>
            <p className="text-[14px] leading-[19px] font-normal mt-2 text-[#696565]">
              2023
            </p>
          </div>
          <div className="flex flex-col items-center justify-center name ">
            <h1 className="text-[20px] leading-[36px] font-bold text-black ">
              Location
            </h1>
            <p className="text-[14px] leading-[19px] font-normal mt-2 text-[#696565]">
              India
            </p>
          </div>
        </div>
        <div className="mt-[10vh] mb-[60vh]">
          <div className="flex  overflow-hidden ml-[10vw]  gap-8  ">
            <img src="/single.png" alt="#" className="rounded-[39px]" />
            <div className="w-[431px] flex flex-col h-[699px]">
              <h1 className="text-[32px] leading-[30px] font-semibold text-black">
                Project Overview
              </h1>
              <div className="w-[725px] flex h-[172px] mt-20 bg-[#F6F6FA]  px-4 rounded-[20px] ">
                <div className="w-[37px] h-[37px] bg-[#EC2B45] text-white mt-4 flex justify-center items-center rounded-[50%] ">
                  01
                </div>
                <div className="flex flex-col w-[615px] mt-4 px-4 h-[95px]">
                  <h1 className="text-[20px] leading-[38px] font-bold text-black">
                    Problem
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium text-[#00000080] mt-2 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus placeat iste ipsum dignissimos tempora nisi eius
                    aperiam animi qui magnam, quaerat provident alias rem
                    quisquam iure dolore odio repellat ex?
                  </p>
                </div>
              </div>
              <div className="w-[725px] flex h-[172px] mt-12 bg-[#F6F6FA]  px-4 rounded-[20px] ">
                <div className="w-[37px] h-[37px] bg-[#EC2B45] text-white mt-4 flex justify-center items-center rounded-[50%] ">
                  02
                </div>
                <div className="flex flex-col w-[615px] mt-4 px-4 h-[95px]">
                  <h1 className="text-[20px] leading-[38px] font-bold text-black">
                    Solutions
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium text-[#00000080] mt-2 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus placeat iste ipsum dignissimos tempora nisi eius
                    aperiam animi qui magnam, quaerat provident alias rem
                    quisquam iure dolore odio repellat ex?
                  </p>
                </div>
              </div>
              <div className="w-[725px] flex h-[172px] mt-12 bg-[#F6F6FA]   px-4 rounded-[20px] ">
                <div className="w-[37px] h-[37px] bg-[#EC2B45] text-white mt-4 flex justify-center items-center rounded-[50%] ">
                  03
                </div>
                <div className="flex flex-col w-[615px] mt-4 px-4 h-[95px]">
                  <h1 className="text-[20px] leading-[38px] font-bold text-black">
                    Key Highlights
                  </h1>
                  <p className="text-[16px] leading-[25px] font-medium text-[#00000080] mt-2 ">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Doloribus placeat iste ipsum dignissimos tempora nisi eius
                    aperiam animi qui magnam, quaerat provident alias rem
                    quisquam iure dolore odio repellat ex?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Projects Gallery Section */}
      <div className="mt-24">
        <div className="flex justify-center items-center gap-4">
          <h1 className="font-bold text-[130px] leading-[84px] text-[#C6C6CB] ">
            Projects
          </h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/bddc/3cfd/971b9c152a7fcfe6d27085fe0848bb2d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gEoCxixdcDRuL9zaS-lWHL3cbeRiV8dgM-2svwWPttN5C~w96OvA8hfO2dtOrSylqUBrldzUdswfqOX8yN1a6gmK3ZtLsfg7e11YW5yqOQC9RerGotNcKhw6g2JDsAeMxm0K~NGKAHcrGVg5Y-f0S6BJNwKW-sasbRc~uKjUYtpVtxlfDmhawb9MCdHBu8PkCzEd7uB6htfkh00gGq1UmtGC2cSjBiC~C0PoG1wrj6-d3xLXi4NKTr4-YYfqt6V~FfGdl2SJQ3gyXSdRyYRps8ksqjPRqG2BuzljCociq4rcka4gm3D0OOlJ9b6xAI1ZseD87eHzbIfynsnY6YYMTA__"
            alt="#"
            className="h-[87px] w-[219px] mt-4 rounded-[47px]"
          />
          <h1 className="italic text-[130px] leading-[107px] font-normal text-[#CF1E00] ">
            Gallery
          </h1>
        </div>
      </div>
      {/* Project's image */}
      <div className="mt-20 min-h-screen ">
        <div className="flex flex-wrap gap-4 justify-center items-center ">
          <div className="flex flex-col">
            <img
              src="/x1.png"
              alt="#"
              className="w-[886px] h-[466px] rounded-[16px] "
            />
            <div className="flex justify-between items-center mt-2  ">
              <h1 className="text-[28px] leading-[36px] font-bold text-black ">
                3D & Cut - Out
              </h1>
              <h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] ">
                Dindugal Thalappakatti
              </h1>
            </div>
          </div>
          <div className="flex flex-col">
            <img
              src="/x2.png"
              alt="#"
              className="w-[425px] h-[466px] rounded-[16px] "
            />
            <div className="flex justify-between items-center  mt-2 ">
              <h1 className="text-[28px] leading-[36px] font-bold text-black ">
                Geo Targeting
              </h1>
              <h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] ">
                Malabar
              </h1>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <img
              src="/x3.png"
              alt="#"
              className="w-[886px] h-[466px] rounded-[16px] "
            />
            <div className="flex justify-between items-center  mt-2 ">
              <h1 className="text-[28px] leading-[36px] font-bold text-black ">
                Dynamic Lighting
              </h1>
              <h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] ">
                Nipon Paint
              </h1>
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <img
              src="/x4.png"
              alt="#"
              className="w-[425px] h-[466px] rounded-[16px] "
            />
            <div className="flex justify-between items-center  mt-2 ">
              <h1 className="text-[28px] leading-[36px] font-bold text-black ">
                Wall Painting
              </h1>
              <h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] ">
                Nipon paint
              </h1>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-16">
          <button
            type="button"
            className="py-[10px] px-[20px] bg-[#EEEFF3] rounded-[31px] "
          >
            View Projects
          </button>
        </div>
        <div className="w-full flex justify-center mt-24 pb-20 items-center">
          <div className="w-[1260px] h-[462px] bg-[#EC2B45] relative flex rounded-2xl mt-24 ">
            <img
              src="/star.png"
              alt="star"
              className="asbolute inset-0 top-7 left-0"
            />
            <div className="flex gap-y-4  px-6 items-center justify-center ">
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
                    Our team is here to help you succeed. <br />
                    Let's work together to achieve your goals and elevate your
                    brand to new heights.
                  </p>
                </div>
                <div className="w-full ">
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
      </div>
    </>
  );
};

export default SingleProject;
