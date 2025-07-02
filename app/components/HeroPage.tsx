import React from "react";
import Nav from "./Nav";
import HeroText from "./HeroText";

const HeroPage = () => {
  return (
    <section className="w-screen min-h-screen bg-cover bg-center relative pt-24">
      <Nav />
      <div className="mx-auto max-w-7xl px-4 md:px-0 flex flex-col md:flex-row md:items-center md:justify-between gap-5 w-full">
        <HeroText />
        <div className="w-full md:w-1/2">
          <img
            src="/hero-illustration.svg"
            alt="hero image"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
