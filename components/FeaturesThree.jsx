import React from "react";
import Button from "./shared/Button";
import { FeaturesThreeData } from "@/data";

const FeaturesThree = () => {
  const RenderItem = ({ item }) => {
    return (
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center transition duration-300 ease-in-out px-0 lg:px-[15%]">
        <div
          className={`mt-12 lg:mt-0 pl-10 lg:pl-0 ${
            item?.index.toString() === "2" ? " order-first lg:order-last" : ""
          }`}
        >
          <div className="relative w-full flex items-center justify-center">
            {/* First image */}
            <img
              src={`/FeaturesThree/Person${item?.index}.png`}
              alt="First Image"
              className="w-1/2 md:w-1/2  h-auto mr-[10%] z-10"
            />

            {/* Second image at the bottom right */}
            <img
              src={`/FeaturesThree/dottedImg${item?.index}.png`}
              alt="Second Image"
              className="absolute bottom-0 right-[40%] md:right-[40%] top-[0%] w-1/2 md:w-1/2  h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col items-center lg:items-start h-full w-full mt-10 lg:mt-0 gap-7 px-[10%]">
          <div className="w-full flex flex-col justify-center items-center lg:items-start gap-4 ">
            <h3
              className={`text-lg md:text-xl lg:text-2xl xl:text-3xl text-center lg:text-left font-semibold text-black`}
            >
              {item?.title}
            </h3>
            <span
              className={`text-sm md:text-base xl:text-lg text-center lg:text-left text-lightGrayText`}
            >
              {item?.subtitle}
            </span>
          </div>
          <Button
            className={
              "bg-darkBlue pb-3 pt-3 px-10 flex items-center justify-center"
            }
          />
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white min-h-screen relative flex flex-col py-10 lg:py-20 gap-7 lg:gap-12 transition duration-300 ease-in-out">
      {/* <div
        className="absolute z-0 h-full w-full"
        style={{
          backgroundImage: 'url("/FeaturesThree/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div> */}
      <div className="pt-10 px-[5%] lg:px-[10%]">
        <div className="w-full flex flex-col gap-3">
          <h2 className="text-center lg:text-left text-black text-2xl md:text-3xl lg:text-4xl font-semibold">
            Do More With Cryptocurrencies!
          </h2>
        </div>
      </div>

      {FeaturesThreeData?.map((feature) => (
        <RenderItem item={feature} />
      ))}
    </div>
  );
};

export default FeaturesThree;
