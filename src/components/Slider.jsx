import React from "react";

const Slider = () => {
  const sliderdata = [
    {
      image: "/c1.png",
      title: "Marketing™",
      description:
        "Redefining luxury in audio with advanced technology and exquisite design.",
    },
    {
      image: "/c2.png",
      title: "Media Buying & Planning™",
      description:
        "Redefining luxury in audio with advanced technology and exquisite design.",
    },
    {
      image: "/c3.png",
      title: "Exhibition Services™",
      description:
        "Redefining luxury in audio with advanced technology and exquisite design.",
    },
    {
      image: "/c4.png",
      title: "Video Creation™",
      description:
        "Redefining luxury in audio with advanced technology and exquisite design.",
    },
  ];

  return (
    <div className="w-full overflow-x-auto mt-2 pb-4 ">
      {/* Scrollable wrapper */}
      <div className="mt-8 flex flex-nowrap gap-4 px-4 w-max">
        {sliderdata.map((item, index) => {
          const { image, title, description } = item;
          return (
            <div key={index} className="relative w-[750px] h-[540px] flex-shrink-0">
              <img src={image} alt="#" className="rounded-xl w-full h-full" />
              {index > 1 && (
                <div className="absolute inset-0 bg-gradient-to-b h-full w-full from-[#171E2E00] to-[#181F2FBF] rounded-xl"></div>
              )}
              <div className="flex flex-col absolute inset-0 items-center justify-between w-full h-full">
                <div className="flex w-full items-end justify-end gap-4 mt-4 px-4">
                  <button
                    type="button"
                    className="bg-[#B3B3B366] bg-opacity-[45%] rounded-[18px] px-2.5 backdrop-blur-[5px] py-1.5 text-white"
                  >
                    Product Design
                  </button>
                  <button
                    type="button"
                    className="bg-[#B3B3B366] bg-opacity-[45%] rounded-[18px] px-2.5 backdrop-blur-[5px] py-1.5 text-white"
                  >
                    Motion Graphics
                  </button>
                </div>
                <div className="flex justify-between w-full text-white items-center gap-16 px-8 pb-6">
                  <h1 className="text-[40px] leading-[48px] font-medium">{title}</h1>
                  <p className="font-medium leading-[24px] text-[#7c8d99]">{description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
