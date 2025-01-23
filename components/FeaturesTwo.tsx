import React from "react";
import Button from "./shared/Button";
import { FeaturesTwoData } from "@/data";
import { IFeatureTwo } from "../types";
import Container from "./shared/ui/Container";
import Image from "next/image";

const FeaturesTwo = () => {
  const RenderItem = ({
    item,
    index,
  }: {
    item: IFeatureTwo;
    index: number;
  }) => {
    return (
      <div
        className={`flex items-center justify-center lg:justify-start py-2 gap-4`}
      >
        <div
          className={`h-full w-[2.5px] rounded-lg ${
            index === 0 ? "bg-lightOrange" : "bg-lightGray"
          }`}
        ></div>
        <div className="flex flex-col w-full md:w-[70%]">
          <h2 className="text-left text-black text-lg md:text-xl font-semibold">
            {item?.title}
          </h2>
          <span className={`text-xs md:text-sm text-left text-lightGrayText`}>
            {item.subtitle}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div
      id="get-started"
      className="bg-white min-h-screen relative flex flex-col pb-7 transition duration-300 ease-in-out"
    >
      <div
        className="absolute z-0 h-full w-full"
        style={{
          backgroundImage: 'url("/FeaturesTwo/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <Container className="py-10 px-[5%] lg:px-[10%]">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-3">
          <h2 className="text-left text-black text-2xl md:text-3xl lg:text-3xl xl:text-3xl  font-semibold">
            Your Journey to Instant Crypto Off-Ramping Begins Here!
          </h2>
          <span className={`text-sm md:text-base text-left text-lightGrayText`}>
            Download the app, set it up in minutes, and start trading your
            crypto assets with ease. Available on both Android and iOS.
          </span>
        </div>
      </Container>

      <Container className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center transition duration-300 ease-in-out">
        <div className="order-last lg:order-first mt-12 lg:mt-0">
          <div className="relative w-full flex items-center justify-center ">
            <Image
              alt="Mobile App"
              src={"/mockup-1.svg"}
              width={450}
              height={450}
              className=""
            />
          </div>
          <div className="flex lg:hidden flex-col z-10 w-full items-center justify-center  mt-10 md:mt-10">
            <div className="w-full flex items-center justify-center gap-3 z-10">
              <Button
                title="App Store"
                className={"bg-lightPurple"}
                image={"/apple.png"}
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.mxnuchim.Swapam_App"
                className=""
                target="_blank"
              >
                <Button
                  title="Play Store"
                  image={"/playstore.png"}
                  className={"bg-lightPurple"}
                />
              </a>
            </div>
          </div>
        </div>

        <Container className="flex flex-col justify-center items-center h-full w-full gap-4 px-5 mt-10 lg:mt-0">
          {FeaturesTwoData.map((item, index) => (
            <RenderItem item={item} index={index} key={index} />
          ))}

          <div className="hidden lg:flex flex-col z-10 w-full items-start justify-start mt-5">
            <div className="w-full flex items-center justify-start gap-3">
              <Button
                title="App Store"
                className={"bg-darkBlue"}
                image={"/apple.png"}
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.mxnuchim.Swapam_App"
                className=""
                target="_blank"
              >
                <Button
                  title="Play Store"
                  image={"/playstore.png"}
                  className={"bg-darkBlue"}
                />
              </a>
            </div>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default FeaturesTwo;
