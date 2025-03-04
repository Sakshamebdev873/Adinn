import React from "react";
import Footer from '../components/Footer' 
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
  const imgarray = [
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 1,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 2,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 3,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 4,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 5,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 6,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 7,
      text: "Geo Targeting",
      para: "Malabar",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/6d71/fd79/723d37da1f1218d8e7f423b847fb1fff?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=r9WD-uAUuLLiz3F5hlPbJ5gFOOb-JjHoR0q4QBOfULZqYsxi06E8YMCCdd-DhhxOs1YfD6A0CzQTKf2iZBKJE5-6PifRYE7Cac5ggZagsiVgwVYgUkMbB4CyxaLd-eYxBWjRPuQ021qqQAAOmPWx1NIuiTD0AQsWie7QEKE8DHkEg0Ei3MCwuxNwqqeNnS4WNPq95s-ftwHDX5yP-kE2CpbfVhGMgKPkPSR4KlREiaj1rnxW3Cv4RnH82amkimZjMBU5HAB83kQES2HkgpJ-GIimh5C6467XnchCd1F7TLEff96grn8sjKEycr99xHeMZZRgDJJvJAzmvNM-YD06OA__",
      id: 8,
      text: "3D & Cut - Out",
      para: "Dindugal Thalappakatti",
    },
    {
      image:
        "https://s3-alpha-sig.figma.com/img/7062/addc/12762627b6173008db913fe2398246ce?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=f-aUTYVn7bwX5pNkuGOne9Qh5EMkbs9~FiZjE1NxCqpYmKvA8bBgVB7i7KojHOu7QoqGbGzF96-xF9NTSsMiH4effyTQd20UAvaqFjscbTMbWDatY9QB9fOFe6llgcr4i1y3eoTijGR35LBQDGspWKxNH~auI2ymGbUs0JtIbSeu4pZzh~IcQ5c-A8A5bih92bbbfPrYt4xU1hZ4gA50matDw~UNm3UvVKOKpWXmirQE3RQ~TasuhXdJYHvzoQWm1UKMCKpVQpsVTbfNmX268wrnkCsrU2hz7nhW0alzg0Oi0A9L9Mh-9NfNccemE5R-BtCLkvBAyyaN~o-mFPd0cg__",
      id: 9,
      text: "Geo Targeting",
      para: "Malabar",
    },
  ];
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
          return <div key={id} className={id>3 ?"relative max-w-fit rounded-[16px] mt-12  bg-black" : "relative max-w-fit rounded-[16px]  bg-black" }>
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
        </div>
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
      <Footer/>
    </>
  );
};

export default Project;
