import React from "react";
import Map from "../../public/map.png";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
const ContactPage = () => {
  return (
    <div className="w-full h-auto my-35 flex flex-col justify-center items-center">
      <div className="lg:w-[90%] w-full lg:px-0 px-3 flex md:flex-row flex-col gap-5 justify-start items-start h-auto">
        <div className="img md:w-[50%] w-full h-auto flex justify-center items-center">
          <Card
            className="flex justify-end flex-col relative items-center bg-cover bg-top-left h-[600px] max-sm:w-full xl:w-[600px] w-[500px] rounded-lg"
            style={{ backgroundImage: `url(${Map.src})` }}
          >
            <CardContent className="bg-[#A8D5BA] absolute top-0 left-0 min-h-[320px] md:min-h-[400px] text-white p-5 w-full gap-3 flex flex-col justify-start rounded-lg items-center">
              <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center text-[#2E8B57]">
                Contact
              </h2>
              <div className="flex flex-col gap-4 justify-start items-start w-full">
                <p className="md:text-xl sm:txet-lg text-base font-medium flex gap-2 max-[450px]:flex-col text-gray-600">
                  <span className="lg:text-2xl md:text-xl sm:text-lg font-bold text-black">
                    Location:
                  </span>{" "}
                  [Insert Address]{" "}
                </p>
                <p className="md:text-xl sm:txet-lg text-base font-medium flex gap-2 max-[450px]:flex-col text-gray-600">
                  <span className="lg:text-2xl md:text-xl sm:text-lg font-bold text-black">Phone:</span>{" "}
                  [Insert Phone Number]{" "}
                </p>
                <p className="md:text-xl sm:txet-lg text-base font-medium flex gap-2 max-[450px]:flex-col text-gray-600">
                  <span className="lg:text-2xl md:text-xl sm:text-lg font-bold text-black">Email:</span>{" "}
                  [Insert Email Address]{" "}
                </p>
                <p className="md:text-xl sm:txet-lg text-base font-medium flex gap-2 max-[450px]:flex-col text-gray-600">
                  <span className="lg:text-2xl md:text-xl sm:text-lg font-bold text-black">Hours:</span>{" "}
                  [Insert Operating Hours]{" "}
                </p>
                <p className="md:text-xl sm:txet-lg text-base font-medium flex gap-2 max-[450px]:flex-col text-gray-600">
                  <span className="lg:text-2xl md:text-xl sm:text-lg font-bold text-black">
                    Online Appointement:
                  </span>{" "}
                  [Link To Booking Platform]{" "}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="content md:w-[50%] sm:w-[80%] w-full sm:p-0 px-5 h-auto flex flex-col my-5 justify-start items-start gap-4">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold  text-[#2E8B57]">
            Get In Touch
          </h2>
          <div className="contact-form flex-wrap flex justify-between gap-10 items-center p-5">
            <div className="grid w-full lg:max-w-[45%] items-center gap-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                className="rounded-none bg-gray-100 border-none"
              />
            </div>
            <div className="grid w-full lg:max-w-[45%] items-center gap-1.5">
              <Label htmlFor="phone-number">Phone Number</Label>
              <Input
                type="number"
                id="phone-number"
                className="rounded-none bg-gray-100 border-none"
              />
            </div>
            <div className="grid w-full lg:max-w-[45%] items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                className="rounded-none bg-gray-100 border-none"
              />
            </div>
            <div className="grid w-full lg:max-w-[45%] items-center gap-1.5">
              <Label htmlFor="depart">Select Department</Label>
              <Input
                type="text"
                id="depart"
                className="rounded-none bg-gray-100 border-none"
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Write A message</Label>
              <Textarea placeholder="Type your message here." id="message"  className="rounded-none bg-gray-100 border-none" />
            </div>
          </div>
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
