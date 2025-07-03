import React from "react";
import { howItworksData } from "@/data";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white px-3 md:px-0">
      <div className="w-full mx-auto max-w-7xl flex flex-col items-center gap-4">
        <h2 className="font-bold text-3xl md:text-4xl">How it Works</h2>
        <p className="text-lg text-gray-500 -mt-2 text-center" >
          Get started in minutes with our simple, intuitive workflow
        </p>
        <div>
          <img src="/workflow-illustration.svg" alt="workflow image" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {howItworksData.map(({ head, text }, idx) => (
            <div
              className="shadow-sm p-6 rounded-lg border border-gray-300 flex flex-col gap-4"
              key={idx}
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
