"use client";
import { navLinks } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav className="bg-darkBlue border-b flex flex-row items-center justify-between py-4 px-7 lg:py-6 lg:px-10">
      <div className="flex flex-row items-center justify-between border-white">
        <Image
          src="/logo.png"
          alt="Swapam Logo"
          width={"100"}
          height={"40"}
          className={`object-contain h-10 w-24 md:w-32`}
        />
        <div className="hidden lg:flex flex-row items-center justify-between border-l border-white gap-7 p-2">
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
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-0 left-0 bg-white transition duration-300 ease-in-out">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              <p
                className="block text-black text-sm lg:text-base py-2 px-4 text-center hover:text-accent transition duration-300 ease-in-out"
                onClick={toggleMobileMenu}
              >
                {link.text}
              </p>
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
