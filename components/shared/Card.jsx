// components/Card.js
import Image from "next/image";

const Card = ({ imageUrl, title, description }) => {
  return (
    <div className="relative bg-white flex items-center justify-center px-0 md:px-5">
      <Image
        src="/cardBg.png"
        alt="Card Background"
        width={"600"}
        height={"750"}
        className={`object-contain w-full h-auto`}
      />
      <div className="absolute inset-0 flex flex-row justify-between items-center text-white">
        <div className="w-[65%] p-8 md:p-16 lg:p-24 xl:p-32">
          <h2 className="text-lg md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 md:mb-4">
            Don’t get stuck; swap, convert with ease!
          </h2>
          <p className="text-xs md:text-base lg:text-lg xl:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis
            nostrud exercitation ullamco.
          </p>
        </div>

        <Image
          src="/cardMockup.png"
          alt="Card Mockup"
          width={"150"}
          height={"150"}
          className={`object-contain w-1/3 h-auto pr-[5%]`}
        />
      </div>
    </div>
  );
};

export default Card;
