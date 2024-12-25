"use client";
import { FAQData } from "@/data";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Container from "./shared/ui/Container";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      id="faq"
      className="bg-white flex flex-col items-center px-[5%] lg:px-[15%] py-[5%]"
    >
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-center w-full">
        <img
          src="/faq.png"
          alt="FAQ"
          className={`object-contain w-[150px] md:w-[200px] h-auto`}
        />
        <div className="text-center lg:text-left px-[10%] lg:px-0">
          <h2 className="text-black text-2xl md:text-3xl xl:text-3xl font-semibold">
            Got Questions? We've Got Answers!
          </h2>
          <div className="pr-0 lg:pr-[20%]">
            <span
              className={`text-sm md:text-base  text-lightGrayText text-wrap `}
            >
              Find everything you need to know about using Swapam. From deposits
              to withdrawals, we're here to guide you.
            </span>
          </div>
        </div>
      </div>

      <Container className="w-full mx-auto my-8">
        {FAQData.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex w-full items-center justify-between">
                <p className="text-darkBlue text-base md:text-base font-medium">
                  {faq.question}
                </p>

                {openIndex === index ? (
                  <IoIosArrowUp color="#363753" size={20} />
                ) : (
                  <IoIosArrowDown color="#363753" size={20} />
                )}
              </div>
            </div>
            <div
              className={`${
                openIndex === index
                  ? "max-h-[1000px] opacity-100 p-5"
                  : "max-h-0 opacity-0"
              } transition-all duration-500 ease-in-out bg-white overflow-hidden`}
            >
              <p className="text-darkBlue text-sm md:text-sm lg:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default FAQ;
