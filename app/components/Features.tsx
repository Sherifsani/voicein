import React from "react";
import Badge from "./Badge";
import FeatureCard from "./FeatureCard";
import { featuresData } from "@/data";

const Features = () => {
  return (
    <section className="py-20 bg-gray-100 px-3 md:px-0 ">
      <div className="mx-auto max-w-7xl flex flex-col gap-12">
        <div className="flex flex-col items-center gap-4 text-center">
          <Badge text="Features" />
          <h2 className="font-bold text-4xl md:text-5xl">
            Create, Send & Track Invoices Easily
          </h2>
          <p className="text-lg text-gray-500">
            Invoyce provides all the tools you need to generate professional
            invoices, send
            <br /> payment requests, and get paid online - optimized for
            freelancers in Africa.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7">
          {featuresData.map(({ icon, head, text }, idx) => (
            <FeatureCard key={idx} iconText={icon} head={head} text={text} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
