import Image from "next/image";
import React from "react";

const Button = ({ title = "Get Started", onClick, className, image }) => {
  return (
    <button
      className={`flex gap-2 rounded-full px-5 py-1 pt-2 ${className}`}
      onClick={onClick}
    >
      {image ? (
        <Image
          src={image}
          width={"25"}
          height={"25"}
          className={"object-contain max-w-[25px]"}
        />
      ) : null}
      <span className="text-sm whitespace-nowrap">{title}</span>
    </button>
  );
};

export default Button;
