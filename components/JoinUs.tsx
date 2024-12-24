"use client";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";

interface JoinUsProps {
  imageUrl?: string; // Optional background image URL
  title?: string; // Optional title
  description?: string; // Optional description
  telegramLink?: string; // Telegram link
}

const JoinUs = ({ imageUrl, title, description }: JoinUsProps) => {
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

          <div className="flex items-center justify-center gap-2 my-2 md:my-6">
            <MdOutlineContentCopy className="text-accent" size={16} />

            <a
              href="www.google.com"
              className="text-accent underline cursor-pointer text-[10px] md:text-sm"
            >
              Swapam.telegram.channels.t
            </a>
          </div>

          <div className="w-full flex justify-center">
            <div className="flex w-1/3 justify-center items-center py-1 md:py-2 lg:py-3 px-6 md:px-10 bg-accent rounded-full">
              <p className="text-[10px] md:text-sm whitespace-nowrap">
                Join Us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
