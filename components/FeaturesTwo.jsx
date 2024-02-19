import React from "react";
import Button from "./shared/Button";
import { FeaturesTwoData } from "@/data";

const FeaturesTwo = () => {
  const RenderItem = ({ item, index }) => {
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
          <span className={`text-xs text-left text-lightGrayText`}>
            {item.subtitle}
          </span>
        </div>
      </div>
    );
  };
  return (
    <div className="bg-white min-h-screen relative flex flex-col pb-7 transition duration-300 ease-in-out">
      <div
        className="absolute z-0 h-full w-full"
        style={{
          backgroundImage: 'url("/FeaturesTwo/bg.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="py-10 px-[5%] lg:px-[10%]">
        <div className="w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-3">
          <h2 className="text-left text-black text-2xl md:text-3xl xl:text-3xl font-semibold">
            Value For Every Asset!
          </h2>
          <span className={`text-xs text-left text-lightGrayText`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Incididunt ut labore Ut enim ad minim veniam.
          </span>
        </div>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center transition duration-300 ease-in-out">
        <div className="order-last lg:order-first mt-12 lg:mt-0">
          <div className="relative w-full flex items-center justify-center">
            {/* First image */}
            <img
              src="/FeaturesTwo/Mockup1.png"
              alt="First Image"
              className="w-1/2 md:w-1/2 lg:w-[80%] h-auto mr-[10%]"
            />

            {/* Second image at the bottom right */}
            <img
              src="/FeaturesTwo/Mockup2.png"
              alt="Second Image"
              className="absolute bottom-0 right-[10%] md:right-[10%] lg:right-[-20%] top-[37%] w-1/2 md:w-1/2 lg:w-[80%] h-auto"
            />
          </div>
          <div className="flex lg:hidden flex-col z-10 w-full items-center justify-center mt-40 md:mt-[45%] lg:mt-[28%]">
            <div className="w-full flex items-center justify-center gap-3">
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
        </div>

        <div className="flex flex-col justify-center items-center h-full w-full gap-4 px-5 mt-10 lg:mt-0">
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
              <Button
                title="Play Store"
                image={"/playstore.png"}
                className={"bg-darkBlue"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesTwo;
