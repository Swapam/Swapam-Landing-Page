import { FooterData, socialMediaFooterLinks } from "@/data";
import Image from "next/image";
import React from "react";
import Button from "./shared/Button";

const Footer = () => {
  return (
    <div id="footer" className="w-full">
      <div className="bg-darkBlue flex flex-col lg:flex-row items-center px-6 md:px-[5%] py-16 gap-7 ">
        <div className="px-0 lg:px-[10%]">
          <div className="flex items-center space-x-1 -ml-2">
            <Image
              src="/logo.png"
              alt="Swapam Logo"
              width={"150"}
              height={"40"}
              className={`object-contain h-12 w-12`}
            />
            <Image
              src="/swapam.svg"
              alt="Swapam"
              width={"150"}
              height={"40"}
              className={`object-contain h-10 w-16 md:w-20`}
            />
          </div>

          <p className="text-white text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>

          <div className="mt-5 lg:mt-10 w-full flex items-center justify-center lg:justify-start gap-3">
            <Button
              title="App Store"
              className={
                "bg-lightPurple w-full lg:w-auto flex items-center justify-center"
              }
              image={"/apple.png"}
            />
            <Button
              title="Play Store"
              image={"/playstore.png"}
              className={
                "bg-lightPurple w-full lg:w-auto flex items-center justify-center"
              }
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-7 ">
          {FooterData.map((item) => (
            <div className="w-full items-center justify-center" key={item}>
              <span className="font-semibold text-sm md:text-base">
                {item.title}
              </span>

              <div className="flex flex-col mt-4 md:mt-7 gap-7">
                {item.links.map((link) => (
                  <a
                    className="text-white text-xs md:text-sm font-normal"
                    href={link.url}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          ))}

          <div className="w-full items-center justify-center">
            <span className="font-semibold text-sm md:text-base">
              {socialMediaFooterLinks.title}
            </span>

            <div className="flex flex-col mt-4 md:mt-7 gap-7">
              {socialMediaFooterLinks.links.map((link) => (
                <a
                  className="text-white text-xs md:text-sm font-normal"
                  href={link.url}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t-[0.5px] border-t-white px-[5%] py-4 bg-darkBlue">
        <span className="text-left text-gray-300 text-xs md:text-sm font-normal">
          Swapam {new Date().getFullYear()}. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
