"use client";
import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Sidebar from "./shared/Sidebar";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-darkBlue border-b-[0.5px] border-b-gray-500 flex flex-row items-center justify-between py-4 px-4 lg:py-4 lg:px-10">
      <div className="flex flex-row items-center justify-between border-white">
        <div
          className="flex items-center space-x-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="/logo.png"
            alt="Swapam Logo"
            width={300}
            height={300}
            className={`object-contain h-12 w-12 md:w-16 md:h-16`}
          />
          <Image
            src="/swapam.svg"
            alt="Swapam Logo"
            width={300}
            height={300}
            className={`hidden lg:block object-contain h-10 w-20 `}
          />
        </div>
        <div className="hidden lg:flex flex-row items-center justify-between border-l border-white gap-7 p-2 ml-4">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <p className="text-white ml-4 text-sm text-center hover:text-accent transition duration-300 ease-in-out">
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex border border-white rounded-full px-5 py-1">
        <span className="text-sm">Get App</span>
      </div>

      {/* Mobile Hamburger Menu */}
      <button
        className="lg:hidden text-white focus:outline-none transition duration-300 ease-in-out"
        onClick={toggleMobileMenu}
      >
        {isMobileMenuOpen ? (
          <IoMdClose size={25} />
        ) : (
          <HiOutlineBars3BottomRight size={25} />
        )}
      </button>

      {/* Mobile Navigation Links */}
      <Sidebar
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={navLinks}
      />
    </nav>
  );
};

export default Navbar;
