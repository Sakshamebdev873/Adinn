import React from "react";

const Contact = () => {
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col mt-28 items-center justify-center">
          <div className="flex gap-x-2 justify-center items-center ">
            <h1 className="uppercase text-[20px] leading-[34px] font-normal text-[#6A6B6D] ">
              Contact Us
            </h1>
            <img
              src="https://s3-alpha-sig.figma.com/img/0b73/70b7/2ff2fd1e25b8e58563d14bbbcdb229b4?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sdiMF86Lq1H2w681~exG~vp4mxSTzawRKKhg3kK69I4m9DedwOB-luORdhd965XvKglAQQQ3LPz6Rv69HMDTZk-q0ntQGeqaOPKWuQ4zDBo7dcn61QlRkIbCmETwnlTrofNW4gR5AFLbrdk4Okg~Vb~6IvLuinl31Cb6mHCzRjA8i-ze5BuPTuI4BXwzwP28dReFtLM5IuL9~8skIdq22JUxsuIdZ8JdVcoLfI1aK6uWy6unE99iQAgmaqy1IS6BQTp~A76JzWPjPy8chcapOemzfO7OLRaSsqMQ0vCml8DDpHTJbtC7qE8Nc~4r2pUocUfR4-rwz4Me2Z-mM3rICA__"
              alt="#"
              className="h-[104px] rotate-[50deg] w-[104px]"
            />
          </div>

          <h1 className="flex items-center mt-[-20px] justify-center text-[60px] gap-4 leading-[65px] font-semibold text-black  ">
            It's nice to
            <span className="italic world font-normal text-[#CF1E00]">
              meet ya
            </span>{" "}
          </h1>
          <img
            src="https://s3-alpha-sig.figma.com/img/bddc/3cfd/971b9c152a7fcfe6d27085fe0848bb2d?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gEoCxixdcDRuL9zaS-lWHL3cbeRiV8dgM-2svwWPttN5C~w96OvA8hfO2dtOrSylqUBrldzUdswfqOX8yN1a6gmK3ZtLsfg7e11YW5yqOQC9RerGotNcKhw6g2JDsAeMxm0K~NGKAHcrGVg5Y-f0S6BJNwKW-sasbRc~uKjUYtpVtxlfDmhawb9MCdHBu8PkCzEd7uB6htfkh00gGq1UmtGC2cSjBiC~C0PoG1wrj6-d3xLXi4NKTr4-YYfqt6V~FfGdl2SJQ3gyXSdRyYRps8ksqjPRqG2BuzljCociq4rcka4gm3D0OOlJ9b6xAI1ZseD87eHzbIfynsnY6YYMTA__"
            alt="#"
            className="h-[87px] w-[219px] rounded-[47px] mt-8 "
          />
          <form
            onSubmit={handlesubmit}
            method="post"
            className="w-[660px] h-[546px] border border-[#DDDAE0] rounded-[30px] my-24 "
          >
            <div className="flex items-center justify-center mt-8 gap-8 ">
              <div className="flex flex-col ">
                <h1 className="text-[16px] leading-[32px] font-semibold name flex px-1.5 gap-1  ">
                  First Name <span className="text-[#EC2B45]">*</span>
                </h1>
                <input
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  className="h-[49px] px-[20px] w-[272px] bg-[#F7F7F9] mt-2 border border-[#EFF0F5] rounded-[15px] "
                />
              </div>
              <div className="flex flex-col ">
                <h1 className="text-[16px] leading-[32px] font-semibold name px-1.5 flex gap-1  ">
                  Last Name <span className="text-[#EC2B45]">*</span>
                </h1>
                <input
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  className="h-[49px] px-[20px] w-[272px] bg-[#F7F7F9] border mt-2 border-[#EFF0F5] rounded-[15px] "
                />
              </div>
            </div>
            <div className="flex items-center flex-col mt-6 justify-center">
              <div className="flex flex-col">
                <h1 className="text-[16px] leading-[32px] px-1.5 font-semibold name flex gap-1  ">
                  Email <span className="text-[#EC2B45]">*</span>
                </h1>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-[575px] mt-2 px-[20px] h-[49px] border border-[#EFF0F5] rounded-[15px] bg-[#F7F7F9]   "
                  placeholder="youremail@gmail.com"
                />
              </div>
              <div className="flex flex-col mt-6">
                <h1 className="text-[16px] leading-[32px] font-semibold name px-1.5 flex gap-1  ">
                  Write Message
                </h1>
                <input
                  type="text"
                  name="message"
                  id="message"
                  className="w-[575px] h-[128px] mt-2 bg-[#F7F7F9] px-[20px] border rounded-[15px] border-[#EFF0F5] "
                  placeholder="Write your Message here"
                />
              </div>
              <button
                type="submit"
                className="rounded-[26px] py-[15px] px-[28px] cursor-pointer text-white w-[575px] h-[54px] mt-6 bg-gradient-to-r from-[#FF0004] to-[#D42E3C] "
              >
                Book a Call
              </button>
            </div>
          </form>
          <h1 className="text-[60px] leading-[90px] font-semibold text-center flex px-1.5 gap-4  ">
            A Message from{" "}
            <span className="text-[#EC2B45] world italic font-normal ">
              {" "}
              Our CEO
            </span>
          </h1>
          <p className="text-[20px] leading-[28px] font-medium text-center w-[818px] h-[84px] mt-8 text-[#838489]">
            “ At Ad inn, we are committed to being the most reputable agency in
            the advertising sector. Our mission is to consistently deliver
            reliable and impactful solutions that exceed expectations, earning
            the respect of our clients and peers alike. ”
          </p>
          <div className="flex items-center justify-center mt-16 mb-28 gap-4">
            <img src="/ceo.png" alt="#" className="h-[84px] w-[84px]" />
            <div className="flex flex-col  gap-2 ">
              <h1 className="text-[24px] leading-[28px] font-semibold text-black">
                John Doe
              </h1>
              <p className="text-[18px] leading-[28px] font-medium text-[#838489] ">
                CEO, Adinn
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
