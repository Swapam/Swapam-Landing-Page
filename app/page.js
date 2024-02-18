import FeaturesOne from "@/components/FeaturesOne";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <FeaturesOne />
    </main>
  );
}
