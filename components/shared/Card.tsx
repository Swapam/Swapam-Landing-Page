// components/Card.js
import Image from "next/image";
import Container from "./ui/Container";

interface ButtonProps {
  imageUrl?: string;
  title?: string;
  description?: string;
}

const Card = ({ imageUrl, title, description }: ButtonProps) => {
  return (
    <div className="relative bg-white flex items-center justify-center px-0 md:px-5">
      <Image
        src="/cardBg.svg"
        alt="Card Background"
        width={"600"}
        height={"750"}
        className={`object-contain w-full h-auto`}
      />
      <Container className="absolute inset-0 flex flex-row justify-between items-center text-white">
        <div className="w-[70%] md:w-[65%] p-8 md:p-16 lg:p-24 xl:p-32">
          <h2 className="text-base md:text-3xl lg:text-4xl xl:text-4xl font-bold mb-0 md:mb-4">
            Unlock the Power of Easy Crypto Conversions
          </h2>
          <p className="text-[10px] md:text-base lg:text-lg xl:text-xl">
            Experience the simplicity of swapping and converting your crypto
            assets without the complications.
          </p>
        </div>

        <Image
          src="/cardImg.svg"
          alt="Card Mockup"
          width={"150"}
          height={"150"}
          className={`object-contain w-1/3 lg:w-[550px] h-auto pr-[5%]`}
        />
      </Container>
    </div>
  );
};

export default Card;
