"use client";
import React, { useState } from "react";
import { RxQuote } from "react-icons/rx";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import { IReview } from "../types";
import { ReviewsData } from "@/data";
import Container from "./shared/ui/Container";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

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

  const renderRating = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <MdOutlineStar key={i} className="text-darkBlue" />
        ) : (
          <MdOutlineStarBorder key={i} className="text-darkBlue" />
        )
      );
    }
    return stars;
  };

  const ReviewItem = ({ item }: { item: IReview }) => {
    return (
      <div className="w-full drop-shadow-lg">
        <div className="p-2  md:px-10 rounded-t-xl flex flex-row w-full justify-between bg-lightGray">
          <div className="flex flex-col">
            <h4 className="text-black text-xs md:text-base font-medium">
              {item?.customer?.name}
            </h4>
            <p className="text-black text-[10px] lg:text-[12px]">
              {item?.customer?.position}
            </p>
          </div>

          <div className="flex items-center space-x-1">
            {renderRating(item?.rating || 0)}{" "}
          </div>
        </div>
        <div className="text-lightGrayText rounded-b-xl bg-white text-xs md:text-sm lg:text-[15px] flex flex-row pl-2 md:pl-10 py-[7%]">
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
        <h2 className=" text-black text-2xl md:text-3xl xl:text-4xl font-semibold">
          What our customers are saying.
        </h2>
        <span className={`text-sm md:text-base text-lightGrayText`}>
          Join the growing community of satisfied users who trust us for
          seamless crypto conversion and more. From effortless off-ramping to
          smooth transactions, see why our users love Swapam.
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
          className={`flex h-12 max-w-[350px] md:max-w-[450px] lg:max-w-[520px] absolute right-[5%] md:right-[5%] lg:right-[10%] xl:right-[10%] top-[70%] transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${currentIndex * 3}%)` }}
        >
          <ReviewItem item={ReviewsData[currentIndex]} />
        </div>
      </div>
    </div>
  );
};

export default CustomerReviews;
