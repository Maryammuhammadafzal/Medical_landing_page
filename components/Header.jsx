import Image from "next/image";
import React from "react";
import Logo from "../public/logo.png";
import Link from "next/link";
const Header = () => {
  return (
    <div className="w-full h-[90px]  flex justify-center items-center text-white">
      <div className="lg:w-[90%] w-full flex md:flex-row flex-col md:gap-0 gap-8 justify-between items-center h-auto p-2">
        <div className="logo w-auto h-auto">
          <Image src={Logo} alt="Logo" className="max-w-[500px]" />
        </div>
        <div className="tabs w-auto h-auto flex justify-center items-center">
          <ul className="w-full h-auto flex justify-center items-center xl:gap-13 lg:gap-10 md:gap-8 xs:gap-5 gap-3">
            <li className="cursor-pointer">
              <a href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Home
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                About Us
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Services
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Doctors
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                FAQs
              </a>
            </li>
            <li className="cursor-pointer">
              <a href="/" className="lg:text-lg sm:text-base text-sm hover:text-green-300 focus:text-green-300 cursor-pointer">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
