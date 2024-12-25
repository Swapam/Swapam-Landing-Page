"use client";
import Image from "next/image";
import { MdOutlineContentCopy } from "react-icons/md";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Telegram from "./icons/Telegram";
import WhatsApp from "./icons/Whatsapp";
import Linkedin from "./icons/Linkedin";
import TikTok from "./icons/TikTok";
import { socialMediaFooterLinks } from "@/data";
import Container from "./shared/ui/Container";

interface JoinUsProps {
  imageUrl?: string; // Optional background image URL
  title?: string; // Optional title
  description?: string; // Optional description
  telegramLink?: string; // Telegram link
}

const JoinUs = ({ imageUrl, title, description }: JoinUsProps) => {
  const getSocialIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case "instagram":
        return <Instagram className="w-5 h-5 lg:w-10 lg:h-8" />;
      case "twitter":
        return <Twitter className="w-5 h-5 lg:w-10 lg:h-8" />;
      case "telegram":
        return <Telegram className="w-5 h-5 lg:w-10 lg:h-8" />;
      case "whatsapp":
        return <WhatsApp className="w-5 h-5 lg:w-10 lg:h-8" />;
      case "linkedin":
        return <Linkedin className="w-5 h-5 lg:w-10 lg:h-8" />;
      case "tiktok":
        return <TikTok className="w-5 h-5 lg:w-10 lg:h-8" />;
      default:
        return null; // Default case if no match is found
    }
  };

  return (
    <div className="relative bg-white drop-shadow-lg flex items-center justify-center px-0 md:px-5 py-[5%]">
      <Image
        src="/join-us.svg"
        alt="Card Background"
        width={"600"}
        height={"750"}
        className={`object-contain w-full h-auto`}
      />
      <Container className="absolute inset-0 flex flex-row justify-center items-center text-white py-2">
        <div className="w-[70%] md:w-[65%] p-6 md:p-16 lg:p-20 xl:p-32">
          <h2 className="text-base md:text-2xl lg:text-3xl font-bold mb-0 md:mb-4 text-center">
            Join the Swapam Tribe!
          </h2>
          <p className="text-[10px] md:text-sm lg:text-base text-center text-white">
            Become part of a growing community that’s reshaping the future of
            crypto. Connect, share, and stay updated with all things Swapam!
          </p>

          <div className="flex items-center justify-center flex-wrap gap-2 mt-4 md:mt-12 space-x-4 lg:space-x-5">
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

          <div className="w-full flex justify-center"></div>
        </div>
      </Container>
    </div>
  );
};

export default JoinUs;
