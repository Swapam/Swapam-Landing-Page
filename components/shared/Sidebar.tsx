import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

interface LinkItem {
  text: string;
  href: string;
}

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  links: LinkItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, links }) => {
  const router = useRouter();
  return (
    <div
      className={`fixed lg:hidden top-0 right-0 w-full h-full bg-black bg-opacity-50 z-50 transition-transform transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      onClick={onClose}
    >
      <div
        className="bg-white w-80 h-full px-6 py-8 shadow-lg fixed right-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-end items-end" onClick={onClose}>
          <IoMdClose size={25} className="text-darkBlue" />
        </div>
        <div className="flex flex-col space-y-8 mt-[30%]">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-darkBlue hover:text-accent text-lg"
              onClick={() => onClose()}
            >
              {link.text}
            </Link>
          ))}
        </div>

        <div className="w-full max-w-[60%] mt-10 flex flex-col space-y-4"></div>
      </div>
    </div>
  );
};

export default Sidebar;
