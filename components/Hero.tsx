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
          <div className="mt-[10%] mb-[7%] flex flex-col justify-center lg:justify-start">
            <div className="mb-3 xl:mb-7">
              <h1
                className={`text-center lg:text-left text-3xl md:text-5xl lg:text-5xl lg:leading-[56px] font-bold text-white`}
              >
                Seamless Crypto-to-Fiat Transactions for Africa
              </h1>
            </div>

            <span className="text-center lg:text-left text-white text-sm md:text-lg lg:text-lg font-light">
              Unlock the easiest way to off-ramp your crypto into fiat with
              instant access to virtual accounts, secure wallets, and a complete
              suite of utilities. Whether it’s airtime, electricity, or betting
              funds, we’ve got you covered.
            </span>
          </div>
          <div className="hidden lg:flex flex-col">
            <div className="w-full flex items-center justify-start gap-3">
              <Button
                title="Get on App Store"
                className={"bg-lightPurple"}
                image={"/apple.png"}
              />
              <Button
                title="Get on Play Store"
                image={"/playstore.png"}
                className={"bg-lightPurple"}
              />
            </div>

            <Container delay={0.35} className="mt-[10%] flex gap-5">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <h3 className="capitalize text-white text-lg lg:text-2xl">
                    {stat.title}
                  </h3>
                  <span className="capitalize text-white text-sm lg:text-base">
                    {stat.subtitle}
                  </span>
                </div>
              ))}
            </Container>
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
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-3">
            <Button
              title="Get on App Store"
              className={"bg-lightPurple"}
              image={"/apple.png"}
            />
            <Button
              title="Get on Play Store"
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
