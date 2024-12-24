import { FeaturesOneData } from "@/data";
import Image from "next/image";
import React from "react";

const FeaturesOne = () => {
  const isMobile = () => window.innerWidth < 768;
  const RenderItem = ({ item, index }) => {
    return (
      <div
        className={`${
          item?.bg ? `bg-accent` : "bg-white"
        } rounded-xl py-6 px-4 pt-10 drop-shadow-md max-w-[250px] md:max-w-[310px] lg:max-w-[350px] ${
          isMobile && index % 2 === 0
            ? "flex justify-self-start"
            : "flex justify-self-end"
        }`}
      >
        <div className="flex flex-col gap-2 px-4">
          <div
            className={`rounded-full items-center justify-center p-2 mb-4 ${
              item?.bg ? `bg-lightGreen` : "bg-lightGray"
            } w-16 h-16`}
          >
            <Image
              src={item?.image}
              alt={`${item?.title} Image`}
              width={"60"}
              height={"60"}
              className={`object-cover lg:object-contain`}
            />
          </div>

          <h3
            className={`text-sm md:text-lg ${
              item?.bg ? `text-white` : "text-black"
            } text-left font-semibold`}
          >
            {item.title}
          </h3>
          <span
            className={`text-xs md:text-sm  text-left ${
              item?.bg ? `text-white` : "text-black"
            }`}
          >
            {item.subtitle}
          </span>
        </div>
      </div>
    );
  };

  return (
    <div
      id="about"
      className="bg-white min-h-screen flex flex-col px-[10%] justify-start lg:justify-center items-start lg:items-center py-10 lg:py-20  transition duration-300 ease-in-out"
    >
      <h2 className="text-left lg:text-center text-black py-16 text-xl md:text-3xl lg:text-4xl font-semibold">
        Where Digital Dreams Meet <br />
        Decentralized Deals!
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 place-items-center lg:pl-6 py-8 lg:pb-0 gap-6 transition duration-300 ease-in-out">
        {FeaturesOneData?.map((item, index) => (
          <RenderItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturesOne;
