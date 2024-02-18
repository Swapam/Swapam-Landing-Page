import React from "react";

const FeaturesTwo = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col py-10 lg:py-12 px-[5%] lg:px-[10%] transition duration-300 ease-in-out">
      <div className="w-[60%] flex flex-col gap-3">
        <h2 className="text-left text-black text-2xl md:text-3xl xl:text-3xl font-semibold">
          Value For Every Asset!
        </h2>
        <span className={`text-xs  text-left text-lightGrayText`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Incididunt ut labore Ut enim ad minim veniam.
        </span>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center transition duration-300 ease-in-out"></div>
    </div>
  );
};

export default FeaturesTwo;
