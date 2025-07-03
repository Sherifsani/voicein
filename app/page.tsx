import React from "react";
import HeroPage from "./components/HeroPage";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import Faqs from "./components/Faqs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <HeroPage />
      <Features />
      <HowItWorks />
      <Pricing />
      <Faqs />
      <Footer />
    </main>
  );
}
