import Image from "next/image";
import React from "react";
import Button from "./shared/Button";
import { appdata, FooterData, socialMediaFooterLinks } from "@/data";
import Container from "./shared/ui/Container";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Telegram from "./icons/Telegram";
import WhatsApp from "./icons/Whatsapp";
import Linkedin from "./icons/Linkedin";
import TikTok from "./icons/TikTok";
import { MdOutlineEmail } from "react-icons/md";
import Facebook from "./icons/Facebook";

const Footer = () => {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return <Instagram className="w-8 h-8 lg:w-10 lg:h-8" />;
      case "twitter":
        return <Twitter className="w-8 h-8 lg:w-10 lg:h-8" />;
      case "facebook":
        return <Facebook className="w-8 h-8 lg:w-10 lg:h-8" />;
      case "telegram":
        return <Telegram className="w-8 h-8 lg:w-10 lg:h-8" />;
      case "whatsapp":
        return <WhatsApp className="w-8 h-8 lg:w-10 lg:h-8" />;
      case "linkedin":
        return <Linkedin className="w-8 h-8 lg:w-10 lg:h-8" />;
      case "tiktok":
        return <TikTok className="w-8 h-8 lg:w-10 lg:h-8" />;
      default:
        return null; // Default case if no match is found
    }
  };

  return (
    <div id="footer" className="w-full">
      <div className="bg-darkBlue flex flex-col lg:flex-row items-center px-6 md:px-[5%] lg:px-0 py-16 gap-7 ">
        <Container className="px-0 lg:px-[5%]">
          <div className="flex items-center space-x-1 -ml-2">
            <Image
              src="/logo.png"
              alt="Swapam Logo"
              width={"150"}
              height={"40"}
              className={`object-contain h-12 w-12`}
            />
            <Image
              src="/swapam.svg"
              alt="Swapam"
              width={"150"}
              height={"40"}
              className={`object-contain h-10 w-16 md:w-20`}
            />
          </div>

          <div className="lg:max-w-[700px]">
            <p className="text-white text-xs md:text-sm">
              Swapam offers a seamless experience for anyone looking to convert
              crypto to fiat, manage their assets, or pay bills with ease.
              Whether you’re swapping crypto or paying for utilities, Swapam
              combines convenience, speed, and security to meet all your
              financial needs.
            </p>
            <div className="flex items-center my-6 lg:my-6 space-x-2">
              <MdOutlineEmail size={18} color="white" />
              <p className="text-white text-xs md:text-sm">{appdata.email}</p>
            </div>
          </div>

          <div className="mt-5 lg:mt-10 w-full flex items-center justify-center lg:justify-start gap-3">
            <a href="https://bit.ly/4ivSLfh" className="" target="_blank">
              <Button
                title="App Store"
                className={
                  "bg-lightPurple w-full lg:w-auto flex items-center justify-center"
                }
                image={"/apple.png"}
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.mxnuchim.Swapam_App"
              className=""
            >
              <Button
                title="Play Store"
                image={"/playstore.png"}
                className={
                  "bg-lightPurple w-full lg:w-auto flex items-center justify-center"
                }
              />
            </a>
          </div>
        </Container>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-7 pr-3 lg:pr-7">
          {FooterData.map((item, index) => (
            <Container
              className="w-full items-center justify-center"
              key={index}
            >
              <span className="font-semibold text-sm md:text-base">
                {item.title}
              </span>

              <div className="flex flex-col mt-4 md:mt-7 gap-7">
                {item.links.map((link) => (
                  <a
                    className="text-white hover:text-teal-500 text-xs md:text-sm font-normal"
                    href={link.url}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </Container>
          ))}
          {/** SOCIAL ICONS (DESKTOP ONLY) */}
          <Container className="w-full hidden lg:block">
            <span className="font-semibold text-sm md:text-base">
              {socialMediaFooterLinks.title}
            </span>

            <div className="flex flex-wrap items-center mt-4 md:mt-7 gap-7">
              {socialMediaFooterLinks.links.map((link, index) => (
                <a
                  key={index}
                  className="flex items-center gap-3 text-white hover:text-teal-500 text-xs md:text-sm font-normal"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getSocialIcon(link.name)}
                </a>
              ))}
            </div>
          </Container>
        </div>
        {/** SOCIAL ICONS (MOBILE ONLY) */}
        <Container className="w-full flex flex-col items-center lg:hidden">
          <span className="font-semibold text-sm md:text-base">
            {socialMediaFooterLinks.title}
          </span>

          <div className="flex flex-wrap items-center mt-4 md:mt-7 gap-7">
            {socialMediaFooterLinks.links.map((link, index) => (
              <a
                key={index}
                className="flex items-center gap-3 text-white hover:text-teal-500 text-xs md:text-sm font-normal"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {getSocialIcon(link.name)}
              </a>
            ))}
          </div>
        </Container>
      </div>

      <div className="w-full border-t-[0.5px] border-t-gray-500 px-[5%] py-4 bg-darkBlue">
        <span className="text-left text-gray-300 text-xs md:text-sm font-normal">
          Swapam {new Date().getFullYear()}. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
