import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { IoBagAddSharp } from "react-icons/io5";
import { FaMaskFace } from "react-icons/fa6";
import { BsFillChatHeartFill } from "react-icons/bs";
import { FaStethoscope } from "react-icons/fa";
const ServicesPage = () => {
  let service_data = [
    {
      service_name: "General Health Check-ups",
    },
    {
      service_name: "Specialist Consultations",
    },
    {
      service_name: "Diagnostic Imaging",
    },
    {
      service_name: "Laboratory Services",
    },
  ];
  return (
    <div className="w-full h-auto my-25 flex flex-col justify-center items-center ">
      <div className="xl:w-[90%] w-full flex  flex-col justify-center gap-14 items-center h-auto">
        <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold  text-[#2E8B57]">
          Our Services
        </h2>
      
      <div className="cards flex justify-center gap-6 max-lg:flex-wrap items-center w-full h-auto">
        {service_data &&
          service_data.map(({ service_name } , index) => (
            <Card key={index} className="bg-[#A8D5BA] flex justify-center items-center h-[200px] w-[300px] ">
              <CardContent className=" text-[#2E8B57] text-center w-full flex flex-col gap-6 justify-center items-center">
                {
                index === 0 && (<FaStethoscope size={45} />) ||
                index === 1 && (<BsFillChatHeartFill size={45} />) ||
                index === 2 && (<FaMaskFace size={45} />) ||
                index === 3 && (<IoBagAddSharp size={45} />) 
                  }
                <p className="font-bold text-2xl md:text-3xl">{service_name}</p>
              </CardContent>
            </Card>
          ))}
      </div>
      </div>
    </div>
  );
};

export default ServicesPage;
