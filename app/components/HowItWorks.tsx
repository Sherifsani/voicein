import React from "react";
import { howItworksData } from "@/data";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white px-3 md:px-0">
      <div className="w-full mx-auto max-w-7xl flex flex-col items-center gap-4">
        <h2 className="font-bold text-3xl md:text-4xl animate-fadeInUp">
          How it Works
        </h2>
        <p className="text-lg text-gray-500 -mt-2 text-center animate-fadeInUp animation-delay-100">
          Get started in minutes with our simple, intuitive workflow
        </p>
        <div className="animate-scaleIn animation-delay-200">
          <img src="/workflow-illustration.svg" alt="workflow image" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {howItworksData.map(({ head, text }, idx) => (
            <div
              className="shadow-sm p-6 rounded-lg border border-gray-300 flex flex-col gap-4 animate-fadeInUp hover:shadow-md hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              key={idx}
              style={{ animationDelay: `${300 + idx * 100}ms` }}
            >
              <h3 className="text-[#4f66b0] font-semibold text-xl">{head}</h3>
              <p className="text-gray-500">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
