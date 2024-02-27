import FeaturesOne from "@/components/FeaturesOne";
import FeaturesThree from "@/components/FeaturesThree";
import FeaturesTwo from "@/components/FeaturesTwo";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Card from "@/components/shared/Card";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <Card />
    </main>
  );
}
