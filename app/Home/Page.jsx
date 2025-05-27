import React from "react";
import HeroImage from "../../public/hero-image.jpg";
import Header from "@/components/Header";
const HomePage = () => {
  return (
    <div
      className="w-full h-screen  bg-cover  bg-top-right bg-no-repeat"
      style={{ backgroundImage: `url(${HeroImage.src})` }}
    >
      <div className="w-full md:h-[90px] h-auto md:py-0 py-5 bg-[#333333] fixed top-0 left-0 shadow-md z-50">
        <Header />
      </div>
      <div className="relative w-full md:h-screen h-auto flex justify-center items-center">
        <div className="overlay bg-black/15 absolute top-0 left-0 h-screen w-full"></div>
        <div className="content w-full h-screen absolute top-0 left-0 z-20 flex justify-center items-center">
          <div className="md:w-[85%] w-full md:px-0 px-3 h-auto flex items-center">
                <div className="lg:w-[55%] md:w-[70%] sm:w-full h-fit flex-col flex gap-4  text-white">
                        <h3 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-base font-semibold">Welcome to CarePoint </h3>
                        <h1 className="2xl:text-7xl xl:text-6xl sm:text-5xl text-4xl md:leading-18 sm:leading-14 leading-12 font-bold xl-leading-20">Your Partner in Health and Wellness</h1>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
