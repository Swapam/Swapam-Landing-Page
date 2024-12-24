"use client";
import React, { useState } from "react";
import { RxQuote } from "react-icons/rx";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { IReview } from "../types";
import { ReviewsData } from "@/data";
import Container from "./shared/ui/Container";

const CustomerReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ReviewsData.length);
  };

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? ReviewsData.length - 1 : prevIndex - 1
    );
  };
  const ReviewItem = ({ item }: { item: IReview }) => {
    return (
      <div className="w-full drop-shadow-lg">
        <div className="p-2  md:px-10 rounded-t-xl flex flex-row w-full justify-between bg-lightGray">
          <div className="flex flex-col">
            <h4 className="text-black text-xs md:text-sm font-normal">
              {item?.customer?.name}
            </h4>
            <p className="text-black text-[10px]">{item?.customer?.position}</p>
          </div>

          <div className="">
            <h2 className="">{"RATING"}</h2>
          </div>
        </div>
        <div className="text-lightGrayText rounded-b-xl bg-white text-xs md:text-sm flex flex-row pl-2 md:pl-10 py-[7%]">
          <span className="pt-2">{item?.comment}</span>

          <div className="w-full pr-[-5]">
            <RxQuote size={35} />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen flex flex-col gap-10 md:gap-20 items-center justify-start lg:justify-center pt-[20%] lg:pt-[10%] pb-0 md:pb-[15%] transition duration-300 ease-in-out">
      <div className="w-[80%] md:w-[60%] lg:w-[40%] flex flex-col gap-3 text-center">
        <h2 className=" text-black text-2xl md:text-3xl xl:text-3xl font-semibold">
          Satisfied Customers Streaks
        </h2>
        <span className={`text-sm md:text-base text-lightGrayText`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor Incididunt ut labore Ut enim ad minim veniam,
        </span>
      </div>

      <div className="w-full pr-[20%] lg:pr-[20%] flex flex-row relative justify-evenly">
        <img
          src="/CustomerReviews/lady.png"
          alt="Customer"
          className={`object-contain w-[220px] md:w-1/2 h-auto`}
        />

        <div className="absolute flex w-full pl-[15%] justify-between items-center top-1/2">
          <IoIosArrowDropleft
            size={40}
            color="black"
            onClick={handlePrevClick}
            className="w-10 md:w-14"
          />
          <IoIosArrowDropright
            size={40}
            color="black"
            onClick={handleNextClick}
          />
        </div>

        <div
          className={`flex h-12 max-w-[260px] md:max-w-[400px] absolute right-[5%] md:right-[5%] lg:right-[10%] xl:right-[10%] top-[70%] transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 3}%)` }}
        >
          <ReviewItem item={ReviewsData[currentIndex]} />
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
