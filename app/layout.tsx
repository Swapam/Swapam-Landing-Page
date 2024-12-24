import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://swapam.com",
  title: {
    default: "Swapam",
    template: "%s | Swapam",
  },
  description: "Buy and sell 150+ cryptocurrencies without any hassle.",
  url: "https://swapam.com",
  favicon: "/favicon.ico",
  icons: {
    icon: "/icon.png",
  },
  category: "finance",
  applicationName: "Swapam",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={quicksand.className}>{children}</body>
    </html>
  );
}
