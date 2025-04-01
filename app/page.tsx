"use client";
import CustomerReviews from "@/components/CustomerReviews";
import FAQ from "@/components/FAQ";
import FeaturesOne from "@/components/FeaturesOne";
import FeaturesThree from "@/components/FeaturesThree";
import FeaturesTwo from "@/components/FeaturesTwo";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import JoinUs from "@/components/JoinUs";
import Navbar from "@/components/Navbar";
import Card from "@/components/shared/Card";
import { handleAdRedirect } from "@/lib/redirect";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Run the redirect logic when the component mounts
    handleAdRedirect();
  }, []);

  return (
    <main className="">
      <Navbar />
      <Hero />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <Card />
      <CustomerReviews />
      <FAQ />
      <JoinUs />
      <Footer />
    </main>
  );
}
