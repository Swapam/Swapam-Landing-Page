import Image from "next/image";
import React from "react";

interface ButtonProps {
  title?: string; // Optional string with a default value
  onClick?: () => void; // Optional click handler function
  className?: string; // Optional string for button styles
  textClassName?: string; // Optional string for text styles
  image?: string; // Optional string for the image source
}

const Button: React.FC<ButtonProps> = ({
  title = "Get Started",
  onClick,
  className = "",
  textClassName = "",
  image,
}) => {
  return (
    <button
      className={`flex ${
        image ? "gap-2" : ""
      } rounded-full px-5 py-2.5 ${className}`}
      onClick={onClick}
    >
      {image ? (
        <Image
          src={image}
          width={25}
          height={25}
          className={"object-contain max-w-[25px]"}
          alt={title} // Add alt for accessibility
        />
      ) : null}
      <span className={`text-sm whitespace-nowrap  ${textClassName}`}>
        {title}
      </span>
    </button>
  );
};

export default Button;
