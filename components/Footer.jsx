import { FooterData } from "@/data";
import Image from "next/image";
import React from "react";
import Button from "./shared/Button";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="bg-darkBlue flex flex-col lg:flex-row items-center px-[10%] md:px-[5%] py-[5%] gap-7 ">
        <div className="px-0 lg:px-[10%]">
          <Image
            src="/logo.png"
            alt="Swapam Logo"
            width={"150"}
            height={"40"}
            className={`object-contain h-10 w-24 md:w-1/4 my-6`}
          />

          <p className="text-white text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Incididunt ut labore Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip{" "}
          </p>

          <div className="mt-5 lg:mt-10 w-full flex items-center justify-center lg:justify-start gap-3">
            <Button
              title="App Store"
              className={"bg-lightPurple"}
              image={"/apple.png"}
            />
            <Button
              title="Play Store"
              image={"/playstore.png"}
              className={"bg-lightPurple"}
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
        </div>
      </div>

      <div className="w-full border-t border-t-white px-[5%] py-4 bg-darkBlue">
        <span className="text-left text-white text-xs md:text-sm font-normal">
          Swapam 2024. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
