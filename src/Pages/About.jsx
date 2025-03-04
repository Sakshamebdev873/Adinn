import React from "react";
import Footer from '../components/Footer'
const About = () => {
  const valuedata = [
    {
      id: 1,
      title: "Reliability",
      para: "We are committed to delivering on our promises and being a dependable partner for our clients..",
      image: "/i1.png",
    },
    {
      id: 2,
      title: "Respect",
      para: "We treat our clients, colleagues, and work with the utmost respect, valuing diverse perspectives and fostering  inclusive collaboration.",
      image: "/i2.png",
    },
    {
      id: 3,
      title: "Excellence",
      para: "We strive for excellence in everything we do, setting high standards for creativity, innovation, and results.",
      image: "/i3.png",
    },
    {
      id: 4,
      title: "Integrity",
      para: "We conduct ourselves with honesty and transparency, earning trust through ethical practices and accountability.",
      image: "/i4.png",
    },
    {
      id: 5,
      title: "Innovation",
      para: "We embrace creativity and forward-thinking, constantly seeking new and impactful ways to engage audiences  and drive results.",
      image: "/i5.png",
    },
    {
      id: 6,
      title: "Teamwork",
      para: "We believe in the power of collaboration, working together seamlessly to achieve success for our clients and  agency.",
      image: "/i6.png",
    },
  ];
  return (
    <>
      <div className="h-full w-full">
        <div className="relative mt-[-100px] min-h-screen bg-black w-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/66fb/b35b/a821f56708c70652cee9a677e5d43d3b?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RI-woVO2CkNKb~R~U3XmZm9i6ktRxaaHYXsNFYjgpG4cWvG0YZdXpm2WFAHegWo26DTAEDGMnMGBV81Qgzy9ojfBiS-AX1UxtRg2sjtxRbyUuFMyqxGmNdiP20zpGvVPM6pF4muqavyKxMcQ-Jj-Qhxsv1N2XG7vjQohSQQ7fb3AwiTPc~UgjBCKuyjBCY1cqhTfaW8DpJoNf64Ney5wGns4HWM~Gh4AXyEix4GUQ8eGH3JiJorbIPGpWPVfSTVzYvz7QnX6FJlxsJEtbUY8MNBgsO0W9k6SuwbFYEaJyQNXEUvcqy6SqOjw3nGmnafyxFv8JAydfJqXQcY3F6jfng__"
            alt="#"
            className="opacity-60"
          />
          <div className="flex flex-col absolute bottom-28 left-16">
            <h1 className="text-[54px] leading-[54px] text-white mb-4 font-extrabold">
              About us
            </h1>
            <p className="text-[20px] leading-[30px] text-[#E1E1E1CC]  font-normal">
              Lorem ipsum dolor sit amet consectetur
            </p>
          </div>
        </div>
        {/* about text */}
        <div className="w-full min-h-[65vh] ">
          <div className="flex items-center flex-col justify-center mt-24  w-full h-full">
            <h1 className="font-semibold text-[20px]  leading-[30px] text-[#616065] ">
              Who we are
            </h1>
            <div className="mt-8 flex flex-col items-center justify-center w-full">
              <span className="text-[#d8d8d8] text-[48px] font-normal mt-4 leading-[62.4px]">
                {" "}
                A<span className="text-[#2C2C2C]"> 23-year-oldagency</span>{" "}
                <span className="text-[#d8d8d8]">headquartered in</span>
              </span>
              <span className="text-[#2C2C2C] text-[48px] font-normal mt-4 leading-[62.4px]">
                Madurai and Branch
                <span className="text-[#d8d8d8]">
                  office in Chennai,catering
                </span>
              </span>

              <span className="text-[#2C2C2C] mt-4 text-[48px] font-normal leading-[62.4px]">
                <span className="text-[#d8d8d8]">to</span>entire SouthIndia
              </span>
            </div>
          </div>
        </div>
        {/* Achievements sections */}
        <div className="w-full min-h-[50vh] ">
          <div className="flex text-[72px]  px-4 gap-2 leading-[109px] ">
            <h1 className=" font-semibold text-black">Highlights of</h1>
            <p className="world italic font-normal mt-1.5 text-[#CF1E00]">
              Achievements
            </p>
          </div>
          <div className="flex items-center  px-4 justify-between mt-8 ">
            <div className="h-[215px] w-[428px]  border-2 flex-col  rounded-[20px] border-[#E7E5E5] flex items-center justify-center">
              <h1 className="text-[20px] leading-[30px] font-semibold text-[#444349]">
                Medias in chennai
              </h1>
              <h1 className="text-[54px] laeding-[61px] font-bold text-[#EC2B45] ">
                150+
              </h1>
            </div>
            <div className="h-[215px] w-[428px] border-2 flex-col  rounded-[20px] border-[#E7E5E5] flex items-center justify-center">
              <h1 className="text-[20px] leading-[30px] font-semibold text-[#444349]">
                largest in
              </h1>
              <h1 className="text-[54px] laeding-[61px] font-bold text-[#EC2B45] ">
                Tamil Nadu
              </h1>
            </div>
            <div className="h-[215px] w-[428px] border-2 flex-col  rounded-[20px] border-[#E7E5E5] flex items-center justify-center">
              <h1 className="text-[20px] leading-[30px] font-semibold text-[#444349]">
                Vehicles
              </h1>
              <h1 className="text-[54px] laeding-[61px] font-bold text-[#EC2B45] ">
                250+
              </h1>
            </div>
          </div>
        </div>
        {/* Expertise Section */}
        <div className="w-full min-h-screen">
          <h1 className="text-center text-[44px] leading-[84px] mt-48 font-normal ">
            TeamExpertise
          </h1>
          <img src="/aboutbanner.png" alt="#" />
        </div>
        {/* core values section */}
        <div className="flex justify-between items-center px-4 mt-80 ">
          <div className="leading-[105px] flex items-center justify-between text-[96px]">
            <span className=" font-extrabold ">OUR CORE</span>
            <h1 className="italic font-normal  mt-2 pl-5 text-[#CF1E00] world ">
              Values
            </h1>
          </div>

          <h1 className="text-[17px]  leading-[23.8px] text-[#7C7D7E] flex items-center justify-center font-medium ">
            Explore the exclusive advantages of partnering <br />
            with Adorn for all your creative needs.
          </h1>
        </div>

        <div className="flex flex-wrap items-center justify-center px-4 gap-6 mt-16">
          {valuedata.map((item) => {
            const { title, image, id, para } = item;
            return (
              <div
                key={id}
                className="h-[405px] flex flex-col w-[425px]  border relative overflow-hidden rounded-[20px] border-[#EBE7E7] shadow-xl"
              >
                <img src={image} alt="#" className="absolute right-0 " />
                <div className="flex name absolute bottom-6 left-6 w-[344px] flex-col">
                  <h1 className="text-[40px] leading-[48px] font-medium tracking-[-2px] pb-4 text-[#BE3234]">
                    {title}
                  </h1>
                  <p className="text-[17px] leading-[24px] font-medium tracking-normal text-[#616365]">
                    {para}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {/* showcase section */}
        <div className="mt-[50vh]">
          <div className="flex justify-center items-center gap-2 text-[72px] ">
            <p className="leading-[137px] font-medium">Showcase</p>
            <p className="world italic leading-[107px] font-normal text-[#CF1E00] mt-2 ">
              Our Work
            </p>
            <p></p>
          </div>
        </div>
        {/*showcase images*/}
        <div className="w-full min-h-screen">
          <div className="flex gap-2.5 px-2.5  mt-12 ">
            <div className="flex flex-col">
              <div className="flex gap-4 flex-col">
                <img
                  src="/f1.png"
                  alt="#"
                  className="h-[479px] rounded-[16px] w-[274px] "
                />
                <img
                  src="/f4.png"
                  alt="#"
                  className="h-[214px] w-[274px] rounded-[16px] "
                />
              </div>
              <div className="flex mt-4 gap-4 " >
              <img
                src="/f8.png"
                alt="#"
                className="h-[214px] w-[744px] rounded-[16px] "
              />
              <img src="/f9.png" alt="#" className="rounded-[16px]" />
              </div>
            </div>
            <div className="flex flex-col ml-[-55vw]">
              <div className="flex gap-4 ">
                <img
                  src="/f3.png"
                  alt="#"
                  className="h-[214px] w-[361px] rounded-[16px] "
                />
                <img
                  src="/f5.png"
                  alt="#"
                  className="h-[214px] w-[361px] rounded-[16px] "
                />
              </div>
              <img
                src="/f2.png"
                alt="#"
                className="w-[746px] h-[479px] mt-4 rounded-[16px] "
              />
            </div>
            <div className="flex flex-col gap-4 ml-4 ">
              <img src="/f6.png" alt="#" className="h-[466px] w-[274px]" />
              <img src="/f7.png" alt="#" className="h-[466px] w-[274px]" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-12 pb-[35vh] " >
<button type="button" className="w-[158px] h-[44px] rounded-[31px] bg-[#EEEFF3]" >View Projects</button>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
