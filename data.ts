import {
  IFAQ,
  IFeatureOne,
  IFeatureThree,
  IFeatureTwo,
  IFooterSection,
  IReview,
  ISocialMediaFooter,
} from "./types";

export const navLinks = [
  { text: "Home", href: "/" },
  { text: "Product", href: "/#product" },
  { text: "Help", href: "/#faq" },
  { text: "Contact Us", href: "/#footer" },
];

export const statsData = [
  { title: "345k+", subtitle: "transactions" },
  { title: "20k+", subtitle: "downloads" },
  { title: "88k+", subtitle: "active users" },
];

// FeaturesOneData Type
export const FeaturesOneData: IFeatureOne[] = [
  {
    image: "/FeaturesOne/1.png",
    title: "Swift Payments",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do.",
  },
  {
    image: "/FeaturesOne/2.png",
    bg: "#5CD2C6",
    title: "Best Rates",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do.",
  },
  {
    image: "/FeaturesOne/3.png",
    title: "Secured And Safe",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do.",
  },
  {
    image: "/FeaturesOne/4.png",
    title: "24/7 Support System",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do.",
  },
  {
    image: "/FeaturesOne/5.png",
    title: "Low Charges",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do.",
  },
];

// FeaturesTwoData Type
export const FeaturesTwoData: IFeatureTwo[] = [
  {
    title: "Trade Your Assets",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    title: "Diverse Wallets",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    title: "Swap And Convert",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt sed do. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];

// FeaturesThreeData Type
export const FeaturesThreeData: IFeatureThree[] = [
  {
    title: "Buy Airtime And Data Subscription",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam,",
    index: "1",
  },
  {
    title: "Sort out all utilities",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam,",
    index: "2",
  },
  {
    title: "Fund betting accounts",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, ",
    index: "3",
  },
];

// ReviewsData Type
export const ReviewsData: IReview[] = [
  {
    customer: {
      name: "Precious Ubani",
      position: "CEO, P-Empire",
    },
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
    contact: {
      twitter: "precious_ubaniceo",
    },
  },
  {
    customer: {
      name: "James Efinan",
      position: "CEO, RX-Ventures",
    },
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
    contact: {
      twitter: "james_rxv",
    },
  },
  {
    customer: {
      name: "Nora Uwakwe",
      position: "CEO, Road Inc.",
    },
    rating: 5,
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
    contact: {
      twitter: "hlo_nora",
    },
  },
];

// FAQData Type
export const FAQData: IFAQ[] = [
  {
    question: "How to make withdrawals on Swapam",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How to make Deposits on Swapam",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How to swap coins on Swapam?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
  {
    question: "How to get my wallet address",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud exercitation ullamco.",
  },
];

// FooterData Type
export const FooterData: IFooterSection[] = [
  {
    title: "Company",
    links: [
      { name: "Home", url: "/" },
      { name: "About Us", url: "/#about" },
      { name: "Products", url: "/#product" },
      { name: "Terms of Service", url: "/terms-of-service" },
      { name: "Privacy Policy", url: "/privacy-policy" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQs", url: "/#faq" },
      { name: "Help Center", url: "/#faq" },
    ],
  },
];

// SocialMediaFooterLinks Type
export const socialMediaFooterLinks: ISocialMediaFooter = {
  title: "Socials",
  links: [
    { name: "Instagram", url: "/" },
    { name: "Twitter", url: "/" },
    { name: "Telegram", url: "/" },
    { name: "Whatsapp", url: "/" },
  ],
};
