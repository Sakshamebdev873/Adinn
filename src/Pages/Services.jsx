import React from "react";
import Footer from "../components/Footer";
const Services = () => {
  const servdata = [
    {
      text: "Hoarding Services",
      para: " Large, impactful stationary boards  with messages or images.  Captivating visuals for effective  brand communication.",
    },
    {
      text: "Transit Advertising",
      para: "Placing ads strategically on buses,  trains, taxis, and various vehicles.  Mobile visibility for maximum reach  and brand exposure.",
    },
    {
      text: "Street Furniture Advertising",
      para: "Placing ads strategically on buses,  trains, taxis, and various vehicles.  Mobile visibility for maximum reach  and brand exposure.",
    },
    {
      text: "Point of Sale Advertising",
      para: "Displays and signs in retail locations,  promoting specific products or  promotions. Strategic placement for  enhanced product visibility and  consumer engagement",
    },
  ];
  return (
    <>
      <div className="w-full max-h-[120vh] overflow-hidden mt-[-100px] ">
        <div className="relative  bg-black w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/2d93/4a3f/889a4db7e62d366a1a784f98195d5e80?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C2GbF2-DV1k4SQ60CGd4S~t7pFOvEOMc2aR1hB7VMzkF2m7RTrR~5885mHOGAN1Y21AOmJfQ6PIMg8XuAiKQI-Q~Ujj0iY9xQ-1aQTUU0h1fhnooFlipeGKCklzg9aFZlXTpsazIBU~aIXEPITHctWCW91ZuWi61YCy39M0bDbxF1LSwedMo5CYPhDy~2gQjUQZevjC9MPalXSzV56RFOFjaqza7SSk07m4VS-erlGva~jvUpSCJQpsOzsj34qIo6fMYkREr7X1rpqKji7nIp~fHnOcIgdmlnqHf9WhDbdTeK811oxFgIiQ51f9AlqP-kZC9YItKzAYCTWe-OBdtBw__"
            alt="#"
            className="opacity-60 w-[1440px] mt-[-85vh]  h-[1899px] "
          />
        </div>
        <div className="flex flex-col justify-center items-center text-[#ffffff] absolute top-[22rem] left-[26rem]">
          <h1 className="world font-normal italic text-[54px] leading-[60px] uppercase ">
            OOH & Outdoor
          </h1>
          <p className="font-extrabold text-[54px] leading-[60px] uppercase ">
            Media Solutions
          </p>
          <div className="flex gap-4 mt-8">
            <button
              type="button"
              className="py-[15px] px-[28px] bg-black text-white rounded-[26px] "
            >
              View Projects
            </button>
            <button
              type="button"
              className="py-[15px] px-[28px]  bg-transparent text-white rounded-[26px] border border-[#eeeeee] "
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
      {/* after service section */}
      <div className="min-h-screen w-full">
        <div className="flex gap-4 justify-center mt-16 items-center">
          <div className="w-[428px] h-[215px] text-[20px] leading-[30px] gap-2 bg-[#F6F5F5] flex justify-center items-center flex-wrap rounded-[20px] ">
            <h1 className="font-medium flex justify-center items-center flex-row flex-wrap gap-1.5 ">
              We have more than{" "}
              <span className="font-medium text-[#EC2B45]">
                550 properties in 35{" "}
              </span>
              <span className="font-medium text-[#EC2B45]">towns</span>
              <span className="font-medium">across TamilNadu</span>
            </h1>
          </div>
          <div className="w-[428px] h-[215px] text-[20px] leading-[30px] gap-2 bg-[#F6F5F5] flex justify-center items-center flex-wrap rounded-[20px] ">
            <h1 className="font-medium flex justify-center items-center flex-row flex-wrap gap-1.5 ">
              Our Outdoor media covers over
              <span className="font-medium text-[#EC2B45]">
                3,30,300 square feet
              </span>
            </h1>
          </div>
          <div className="w-[428px] h-[215px] text-[20px] leading-[30px] gap-2 bg-[#F6F5F5] flex justify-center items-center flex-wrap rounded-[20px] ">
            <h1 className="font-medium flex justify-center items-center flex-row flex-wrap gap-1.5 ">
              The{" "}
              <span className="font-medium text-[#EC2B45]">only agency</span>to
              provide daily photographs
            </h1>
          </div>
        </div>
        {/* service section */}
        <div className="flex text-[72px] mt-48 px-4 gap-2 leading-[109px] ">
          <h1 className=" font-semibold text-black">Service</h1>
          <p className="world italic font-normal mt-1.5 text-[#CF1E00]">
            Offered
          </p>
        </div>
        {/* starts here */}
        <div className="flex flex-wrap gap-4 mt-8 justify-center items-center">
          {servdata.map((item, index) => {
            const { text, para } = item;
            return (
              <div className="bg-white rounded-[20px] flex flex-col justify-center items-center border border-[#EBE7E7] w-[654px] h-[250px] shadow-[0px_20.24px_19.2px_-3.21px_#6B708726] ">
                <h1 className="name text-[#BE3234] text-[32px] leading-[48px] font-medium">
                  {text}
                </h1>
                <h1 className="name text-[17px] text-[#616365] leading-[24px] px-20 text-center mt-5 font-medium">
                  {para}
                </h1>
              </div>
            );
          })}
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
          <h1 className="italic text-[130px] leading-[107px] font-normal text-[#CF1E00] " >Gallery</h1>
        </div>
      </div>
      {/* Project's image */}
      <div className="mt-20 min-h-screen " >
      <div className="flex flex-wrap gap-4 justify-center items-center " >
      <div className="flex flex-col" >
      <img src="/x1.png" alt="#" className="w-[886px] h-[466px] rounded-[16px] " />
      <div className="flex justify-between items-center mt-2  " >
<h1 className="text-[28px] leading-[36px] font-bold text-black " >3D & Cut - Out</h1>
<h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] " >Dindugal Thalappakatti</h1>
      </div>

      </div>
      <div className="flex flex-col" >
      <img src="/x2.png" alt="#" className="w-[425px] h-[466px] rounded-[16px] " />
      <div className="flex justify-between items-center  mt-2 " >
<h1 className="text-[28px] leading-[36px] font-bold text-black " >Geo Targeting</h1>
<h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] " >Malabar</h1>
      </div>

      </div>
      <div className="flex flex-col mt-8" >
      <img src="/x3.png" alt="#" className="w-[886px] h-[466px] rounded-[16px] " />
      <div className="flex justify-between items-center  mt-2 " >
<h1 className="text-[28px] leading-[36px] font-bold text-black " >Dynamic Lighting</h1>
<h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] " >Nipon Paint</h1>
      </div>

      </div>
      <div className="flex flex-col mt-8" >
      <img src="/x4.png" alt="#" className="w-[425px] h-[466px] rounded-[16px] " />
      <div className="flex justify-between items-center  mt-2 " >
<h1 className="text-[28px] leading-[36px] font-bold text-black " >Wall Painting</h1>
<h1 className="text-[18px] leading-[21px] font-bold text-[#AFB0B6] " >Nipon paint</h1>
      </div>

      </div>
      </div>
      <div className="flex justify-center items-center mt-16" >
        <button type="button" className="py-[10px] px-[20px] bg-[#EEEFF3] rounded-[31px] " >View Projects</button>
      </div>
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
      <Footer />
    </>
  );
};

export default Services;
