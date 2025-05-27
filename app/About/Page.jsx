import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import AboutImage from "../../public/about-image.jpg";
import { Button } from "@/components/ui/button";
const AboutPage = () => {
  return (
    <div className="w-full h-auto my-35 flex flex-col justify-center items-center">
      <div className="lg:w-[90%] w-full flex md:flex-row flex-col gap-5 justify-center items-center h-auto">
        <div className="img md:w-[50%] w-full sm:px-0 px-3 h-auto flex justify-center items-center">
          <Card
            className="flex justify-end flex-col relative items-center bg-cover bg-top-left xl:h-[600px] max-sm:w-full xl:w-[600px] h-[500px] w-[500px] rounded-none"
            style={{ backgroundImage: `url(${AboutImage.src})` }}
          >
            <CardContent className="bg-neutral-800 absolute bottom-0 left-0 min-h-[100px] text-white p-5 w-full flex flex-col justify-end items-center">
              <p className="font-semibold text-xl md:text-2xl">
                “Experience world-class healthcare with a personal touch.”
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="content md:w-[50%] sm:w-[80%] w-full sm:p-0 px-5 h-auto flex flex-col justify-center items-start gap-4">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold  text-[#2E8B57]">
            About Us
          </h2>
          <p className="md:text-lg sm:text-base text-sm">
            At [Website Name], we are dedicated to delivering exceptional
            medical care and services tailored to meet your unique needs. Our
            team of highly skilled professionals and state-of-the-art facilities
            ensure you receive compassionate and comprehensive care.
          </p>
          <div className="visions flex flex-col gap-3 py-4 h-auto w-full">
            <div className="w-full h-auto gap-3 flex flex-col ">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold  text-[#2E8B57]">
                Our Mission:
              </h2>
              <p className="md:text-base sm:text-sm text-xs">
                To provide high-quality, patient-centered healthcare that
                enhances the lives of individuals and communities.
              </p>
            </div>
            <div className="w-full h-auto gap-3 flex flex-col ">
              <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold  text-[#2E8B57]">
                Our Vision:
              </h2>
              <p className="md:text-base sm:text-sm text-xs">
                To be a trusted healthcare partner known for innovation,
                excellence, and compassion.
              </p>
            </div>
          </div>
          <div className="button w-full h-auto ">
            <Button className="bg-[#A8D5BA] py-6 px-8 rounded-lg text-[#2E8B57] text-base font-bold hover:bg-[#b7e7ca] ">Book Your Appointment</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
