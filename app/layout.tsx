import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  metadataBase: "https://swapamnow.com",
  title: {
    default: "Swapam | Unlock the Future of Payments",
    template: "%s | Unlock the Future of Payments",
  },
  description: "Unlock the Future of Payments",
  url: "https://swapamnow.com",
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
