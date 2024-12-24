import Image from "next/image";
import React from "react";
import Button from "./shared/Button";
import { statsData } from "@/data";
import Container from "./shared/ui/Container";

const Hero = () => {
  return (
    <div className="bg-darkBlue min-h-screen grid grid-cols-1 lg:grid-cols-2 justify-between pl-2 lg:pl-6 pb-8 lg:pb-0 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.svg"
          alt="Hero Image Background"
          layout="fill" // Ensures the image covers the container
          className="object-cover"
        />
      </div>
      <Container className="z-10">
        {" "}
        <div className="px-2 md:px-12 py-5">
          <div className="mt-[10%] mb-[7%]">
            <div className="mb-3 xl:mb-7">
              <h1
                className={`text-3xl md:text-4xl xl:text-5xl font-bold text-white`}
              >
                Unleashing the Future of Finance, One Crypto at a Time!
              </h1>
            </div>

            <span className="text-white text-sm md:text-base font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor Incididunt ut labore Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip
            </span>
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="w-full flex items-center justify-start gap-3">
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

            <div className="mt-[10%] flex gap-5">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <h3 className="capitalize text-white text-lg lg:text-xl">
                    {stat.title}
                  </h3>
                  <span className="capitalize text-white text-sm">
                    {stat.subtitle}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <div className="flex flex-col justify-center z-10">
        <Container delay={0.3} className="">
          <Image
            src="/hero.svg"
            alt="Hero Image"
            width={650}
            height={650}
            className={`mt-10 lg:mt-0 object-cover lg:object-contain `}
          />
        </Container>

        <div className="flex lg:hidden flex-col z-10 w-full items-center justify-center mt-10">
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

          <div className="mt-[10%] flex gap-5">
            {statsData.map((stat, index) => (
              <div
                className="flex flex-col items-center justify-center"
                key={index}
              >
                <h3 className="capitalize  text-lg lg:text-2xl ">
                  {stat.title}
                </h3>
                <span className="capitalize text-white text-sm lg:text-xl">
                  {stat.subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
