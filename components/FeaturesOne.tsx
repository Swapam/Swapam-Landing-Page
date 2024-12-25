"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IFeatureOne } from "../types";
import { FeaturesOneData } from "@/data";
import Container from "./shared/ui/Container";

const FeaturesOne = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the window object exists and set the state
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    // Set the initial value
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const RenderItem = ({
    item,
    index,
  }: {
    item: IFeatureOne;
    index: number;
  }) => {
    return (
      <Container
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
      </Container>
    );
  };

  return (
    <div
      id="about"
      className="bg-white min-h-screen flex flex-col px-[10%] justify-start lg:justify-center items-start lg:items-center py-10 lg:py-20  transition duration-300 ease-in-out"
    >
      <div className="w-full lg:w-[60%]">
        <h2 className="text-left lg:text-center text-black py-16 text-xl md:text-3xl lg:text-4xl font-semibold">
          Simplify Your Finances, Empower Your Lifestyle With Seamless Crypto
          Solutions!
        </h2>
      </div>
      <Container className="w-full grid grid-cols-1 lg:grid-cols-3 place-items-center lg:pl-6 py-8 lg:pb-0 gap-6 transition duration-300 ease-in-out">
        {FeaturesOneData?.map((item, index) => (
          <RenderItem item={item} index={index} key={index} />
        ))}
      </Container>
    </div>
  );
};

export default FeaturesOne;
