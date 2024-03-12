import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-darkBlue flex flex-col lg:flex-row items-center px-[10%] md:px-[5%] py-[5%] gap-7">
      <div className="px-0 lg:px-[10%]">
        <Image
          src="/logo.png"
          alt="Swapam Logo"
          width={"150"}
          height={"40"}
          className={`object-contain h-10 w-24 md:w-1/4 my-6`}
        />

        <p className="text-white text-[8px] md:text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Incididunt ut labore Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip{" "}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-7 ">
        {["Company", "Support", "Socials"].map((item) => (
          <div className="w-full items-center justify-center" key={item}>
            <span className="font-semibold text-xs md:text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
