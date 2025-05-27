import React from "react";
import Map from "../../public/map.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const ContactPage = () => {
  return (
    <div className="w-full h-auto my-35 flex flex-col justify-center items-center">
      <div className="lg:w-[90%] w-full flex md:flex-row flex-col gap-5 justify-center items-center h-auto">
        <div className="img md:w-[50%] h-auto flex justify-center items-center">
          <Card
            className="flex justify-end flex-col relative items-center bg-cover bg-top-left xl:h-[600px] xl:w-[600px] h-[500px] w-[500px] rounded-lg"
            style={{ backgroundImage: `url(${Map.src})` }}
          >
            <CardContent className="bg-[#A8D5BA] absolute top-0 left-0 min-h-[400px] text-white p-5 w-full flex flex-col justify-end rounded-lg items-center">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold  text-[#2E8B57]">
                Contact
              </h2>
              <p className="text-2xl font-medium flex gap-2 text-black"><span className="text-xl font-bold text-black">Location:</span> [Insert Address] </p>
            </CardContent>
          </Card>
        </div>
        <div className="content md:w-[50%] sm:w-[80%] w-full sm:p-0 px-5 h-auto flex flex-col justify-center items-start gap-4">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold  text-[#2E8B57]">
            Get In Touch
          </h2>

          <div className="button w-full h-auto flex justify-center items-center ">
            <Button className="bg-[#A8D5BA] py-6 px-8 rounded-lg text-[#2E8B57] text-base font-bold hover:bg-[#b7e7ca] ">
              Book Your Appointment
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
