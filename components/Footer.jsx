import React from "react";
import Logo from "../public/logo.png";
import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoLogoWhatsapp } from "react-icons/io5";
import { CiFacebook , CiLinkedin , CiInstagram } from "react-icons/ci";
const Footer = () => {
  return (
    <footer className="w-full h-auto my-10 flex justify-start items-center">
      <div className="w-full md:w-[85%] h-auto flex justify-center items-center flex-col gap-6">
        <div className="w-full flex items-start justify-start gap-4">
          <div className="content flex gap-2 flex-col h-auto lg:w-[25%]">
            <div className="logo w-auto h-auto">
              <Image src={Logo} alt="Logo" className="max-w-[500px]" />
            </div>
            <p className="md:text-lg sm:text-base text-sm">
              At [Website Name], we are dedicated to delivering exceptional
              medical care and services tailored to meet your unique needs. Our
              team of highly skilled professionals and state-of-the-art
              facilities ensure you receive compassionate and comprehensive
              care.
            </p>
          </div>
          <div className="flex flex-col lg:w-[25%] h-autogap-2">
            <h3 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-base font-semibold text-[#2E8B57]">
              Quick Links{" "}
            </h3>
            <ul className="w-full h-auto flex flex-col gap-1 md:text-base text-sm">
              <li className="cursor-pointer">
                <a
                  href="/"
                  className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/"
                  className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer"
                >
                  About Us
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/"
                  className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer"
                >
                  Services
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/"
                  className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer"
                >
                  Doctors
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/"
                  className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer"
                >
                  FAQs
                </a>
              </li>
              <li className="cursor-pointer">
                <a
                  href="/"
                  className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="newsletter flex flex-col gap-2">
            <h3 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-base font-semibold text-[#2E8B57]">
              NewsLetter{" "}
            </h3>
            <div className="flex flex-col gap-5 text-neutral-500 font-medium">
              <div className="flex w-full max-w-sm items-center">
                <Input
                  type="email"
                  placeholder="@gmail.com"
                  className="send-mail"
                />
                <Button
                  type="submit"
                  className="send-btn rounded-none max-sm:px-4 max-sm:py-1 py-1 px-4 bg-[#2E8B57] text-white text-sm "
                >
                  Send
                </Button>
              </div>
              <div className="flex justify-start items-center gap-3 px-3">
                <IoLogoWhatsapp size={25} className="text-[#2E8B57]" />
                <CiFacebook size={25} className="text-[#2E8B57]" />
                <CiInstagram size={25} className="text-[#2E8B57]" />
                <CiLinkedin size={25} className="text-[#2E8B57]" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright max-h-[50px] w-full flex justify-center items-center gap-1 text-xs sm:text-sm md:text-base">
          © 2025 Elite Escape All Rights Reserved by{" "}
          <span className="company-name text-[#2E8B57]">
            {" "}
            Rootletsolutions.com
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
