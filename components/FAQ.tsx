"use client";
import { FAQData } from "@/data";
import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

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
            Value For Every Asset!
          </h2>
          <span className={`text-sm md:text-base  text-lightGrayText`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor Incididunt ut labore Ut enim ad minim veniam.
          </span>
        </div>
      </div>

      <div className="w-full mx-auto my-8">
        {FAQData.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <div
              className="p-4 cursor-pointer"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex w-full items-center justify-between ">
                <p className="text-darkBlue text-sm md:text-base">
                  {faq.question}
                </p>

                {openIndex === index ? (
                  <IoIosArrowUp color="#363753" size={20} />
                ) : (
                  <IoIosArrowDown color="#363753" size={20} />
                )}
              </div>
            </div>
            {openIndex === index && (
              <div className="bg-white p-4">
                <p className="text-darkBlue text-xs md:text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
