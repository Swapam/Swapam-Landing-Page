"use client";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import Button from "./shared/Button";

const JoinUs = ({ imageUrl, title, description }) => {
  return (
    <div className="relative bg-white drop-shadow-lg flex items-center justify-center px-0 md:px-5 py-[5%]">
      <Image
        src="/joinUsBg.png"
        alt="Card Background"
        width={"600"}
        height={"750"}
        className={`object-contain w-full h-auto`}
      />
      <div className="absolute inset-0 flex flex-row justify-center items-center text-white py-2">
        <div className="w-[70%] md:w-[65%] p-8 md:p-16 lg:p-24 xl:p-32">
          <h2 className="text-sm md:text-2xl lg:text-3xl font-bold mb-0 md:mb-4 text-center">
            Join Our Community!
          </h2>
          <p className="text-[8px] md:text-sm text-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt
          </p>

          <div className="flex items-center justify-center gap-5 my-2 md:my-6">
            <MdOutlineContentCopy className="text-accent" size={16} />

            <a
              href="www.google.com"
              className="text-accent underline cursor-pointer text-[10px] md:text-sm"
            >
              Swapam.telegram.channels.t
            </a>
          </div>

          <div className="flex w-full justify-center">
            <Button
              title="Join Us"
              className={`bg-accent py-0 md:py-1 lg:py-2 px-2 md:px-10`}
              textClassName={`text-[9px] md:text-sm`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
