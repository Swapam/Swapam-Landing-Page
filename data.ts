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
  { title: "11k+", subtitle: "downloads" },
  { title: "33k+", subtitle: "active users" },
];

// FeaturesOneData Type
export const FeaturesOneData: IFeatureOne[] = [
  {
    image: "/FeaturesOne/1.svg",
    title: "Swift Payments",
    subtitle:
      "Instant crypto-to-fiat conversions with seamless transactions designed to save you time. Pay bills, fund accounts, or cash out effortlessly.",
  },
  {
    image: "/FeaturesOne/6.svg",
    title: "Utilities at Your Fingertips",
    subtitle:
      "Top up airtime, pay electricity bills, renew cable subscriptions, and fund betting accounts—all in one convenient platform.",
  },
  {
    image: "/FeaturesOne/2.svg",
    bg: "#5CD2C6",
    title: "Best Rates",
    subtitle:
      "Enjoy competitive rates for all transactions, ensuring you get the most value when converting your crypto or paying for services.",
  },
  {
    image: "/FeaturesOne/3.svg",
    title: "Secured and Safe",
    subtitle:
      "Built with industry-standard security protocols, your funds and data are always protected for worry-free transactions.",
  },
  {
    image: "/FeaturesOne/4.svg",
    title: "24/7 Support System",
    subtitle:
      "Our dedicated support team is available around the clock to assist you with any issues or inquiries, ensuring a smooth experience.",
  },
  {
    image: "/FeaturesOne/5.svg",
    title: "Low Charges",
    subtitle:
      "Say goodbye to high fees. Enjoy low transaction charges, whether you’re cashing out crypto or settling everyday bills.",
  },
];

// FeaturesTwoData Type
export const FeaturesTwoData: IFeatureTwo[] = [
  {
    title: "Download the Swapam App",
    subtitle:
      "Available on iOS and Android, our app is designed for seamless navigation and secure transactions. Get started in just a few taps.",
  },
  {
    title: "Set Up Your Account",
    subtitle:
      "Sign up effortlessly and get your secure wallet. Access diverse features, including our crypto swap and off-ramp, utilities, and storing your assets securely.",
  },
  {
    title: "Start Converting Instantly",
    subtitle:
      "Swap crypto assets, convert to fiat, or seamlessly pay utility bills. Enjoy fast processing and unmatched convenience on our powerful platform.",
  },
];

// FeaturesThreeData Type
export const FeaturesThreeData: IFeatureThree[] = [
  {
    title: "Instant Crypto Swaps & Conversions",
    subtitle:
      "Swap your crypto assets or convert them into fiat currency instantly with the best rates, ensuring fast off-ramping.",
    index: "1",
  },
  {
    title: "Buy Airtime & Data Subscriptions",
    subtitle:
      "Easily recharge your mobile phone and data plans using your crypto. Enjoy fast and secure payments with just a few clicks.",
    index: "2",
  },
  {
    title: "Pay Bills and Utilities",
    subtitle:
      "Settle all your utility bills in a breeze — electricity, internet, and cable subscriptions — using your funds directly.",
    index: "3",
  },
  {
    title: "Secure Your Personal Finance",
    subtitle:
      "Take control of your finances with a secure digital wallet, track your assets, and manage your funds with ease.",
    index: "4",
  },
  {
    title: "Global Accessibility",
    subtitle:
      "No matter where you are, access your crypto funds and make transactions with ease across borders, supporting global financial freedom.",
    index: "5",
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
      "At first, I was skeptical about using crypto for off-ramping, especially given the complexities in Nigeria’s financial space. But after using this platform, I’ve been blown away by how simple and fast the process is. From converting crypto to Naira to paying bills with ease, everything works smoothly. This has completely changed how I manage my business transactions. I can now focus on growing P-Empire with peace of mind, knowing my crypto funds are in safe hands.",
    contact: {
      twitter: "precious_ubaniceo",
    },
  },
  {
    customer: {
      name: "James Efinan",
      position: "CEO, RX-Ventures",
    },
    rating: 4,
    comment:
      "I’ve been in the crypto space for a while, and let me tell you, I’ve tried many platforms. But none has impressed me like this one. The ease of converting my crypto to cash in Naira without the long waiting times or ridiculous fees is a game-changer. Initially, I wasn’t sure about their service, but after a few transactions, I trust them completely. RX-Ventures relies heavily on smooth financial transactions, and I’m happy I found this platform to make my processes easier.",
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
      "As a business owner in Nigeria, I’ve always struggled with the unpredictability of converting crypto to Naira. After hearing about this platform from a trusted friend, I decided to give it a try. I won’t lie, I was a bit skeptical at first, but after using it for a couple of months, I’m sold. From paying bills like electricity and internet to converting crypto effortlessly, it’s been a stress-free experience. Road Inc. now operates smoothly with this reliable solution at the center of our financial operations.",
    contact: {
      twitter: "hlo_nora",
    },
  },
];

// FAQData Type
export const FAQData: IFAQ[] = [
  {
    question: "How does Swapam work?",
    answer:
      "Swapam simplifies the process of exchanging cryptocurrency for Naira, making off-ramping faster and easier than ever. With an intuitive interface, you can convert your crypto assets to Naira and receive them directly to your bank account or use them for everyday services like bill payments, airtime recharge, and more. You can also manage your funds through your virtual wallet and access various features to make the most of your assets.",
  },
  {
    question: "Is Swapam safe?",
    answer:
      "Yes, Swapam is built with security in mind. We use industry-standard encryption, two-factor authentication (2FA), and secure APIs to protect your assets and personal information. Additionally, our platform employs decentralized security measures to ensure that your transactions and wallet are secure at all times. Your peace of mind is our priority.",
  },
  {
    question: "How do I register on Swapam?",
    answer:
      "To get started with Swapam, simply visit our website or download the Swapam app from the Google Play Store (Android) or the App Store (iOS). Registration is quick and easy—just follow the on-screen instructions, and you’ll be set up in less than a minute. Once registered, you’ll have full access to all features and services.",
  },
  {
    question: "How long do transactions take on Swapam?",
    answer:
      "Most transactions on Swapam are processed almost instantly. Depending on the type of transaction—such as off-ramping crypto to fiat or making payments for utilities—the timing may vary slightly. For most cryptocurrency swaps and conversions, you can expect the transaction to complete in minutes. However, please note that network congestion or other factors may occasionally affect the speed of transactions.",
  },
  {
    question: "How do I swap crypto on Swapam?",
    answer:
      "Swapping crypto on Swapam is simple. First, select the cryptocurrency you want to convert. You’ll be shown the current exchange rate and any applicable fees. Once confirmed, your swap will be processed, and the funds will be transferred to your wallet immediately. For more detailed guides and video tutorials, visit our help center.",
  },
  {
    question: "How do I pay for utilities on Swapam?",
    answer:
      "Settling utilities such as airtime, data, and paying bills is very easy on Swapam. Simply go to the 'Utilities' section in the app, choose the service you need (e.g., airtime, electricity, internet), and select the amount. We also offer discounted rates on some services, so you can enjoy better value for your funds.",
  },
  {
    question: "What are the available payment options on Swapam?",
    answer:
      "Swapam offers multiple payment options to suit your needs. You can make payments using Bank Transfers, Your Debit/Credit Card, or Tether (USDT). Whether you want to deposit, withdraw, or pay for services, we support these options for a seamless experience. Choose the method that works best for you!",
  },
  {
    question: "How do I get my wallet address on Swapam?",
    answer:
      "To find your wallet address on Swapam, simply open the app and navigate to the 'Swap' section. Select the cryptocurrency you want to use, and your wallet address will be displayed. You can use this address to receive crypto from other wallets or platforms. Always double-check your address before initiating any transactions to avoid errors.",
  },
  {
    question: "Can I use Swapam for cross-border transactions?",
    answer:
      "Yes! Swapam supports cross-border transactions, allowing you to complete transactions from anywhere in the world. You can swap your crypto for fiat and transfer it to any bank account, regardless of location. Swapam offers a secure and reliable way to transfer funds internationally, helping you achieve financial freedom without borders.",
  },
  {
    question: "How do I manage my virtual wallet on Swapam?",
    answer:
      "Managing your virtual wallet on Swapam is straightforward. In the app, you can view your balance, track transactions, and perform actions like transferring funds or swapping crypto. You can also check transaction history, set up notifications for activity alerts, and ensure that your wallet is always secure by enabling two-factor authentication (2FA).",
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
  title: "Connect with us",
  links: [
    { name: "Instagram", url: "https://www.instagram.com/swapamhq/" },
    { name: "Twitter", url: "https://x.com/swapamhq" },
    // { name: "Telegram", url: "/" },
    { name: "Whatsapp", url: "https://wa.me/2347081601461" },

    // { name: "LinkedIn", url: "/" },
    // { name: "TikTok", url: "/" },
  ],
};

export const appdata = { email: "swapamhq@gmail.com" };
