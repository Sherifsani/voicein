import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-5 items-start w-full md:w-[50%]">
      <p className="px-2 py-1 text-[#4F65B0] font-semibold bg-[#4F65B0]/10 rounded-lg text-sm">
        New: 1% Transaction Fee Model
      </p>
      <h1 className="text-4xl md:text-5xl font-bold">
        Smart Invoicing for your business needs
      </h1>
      <p className="text-gray-500 text-lg max-w-lg">
        Create and send professional invoices, get paid faster, and track
        payments—with our simple invoicing tool designed for freelancers in
        Africa and beyond.
      </p>
      <p className="text-[#4F65B0] font-medium">
        No monthly subscriptions - pay only 1% when your clients pay you.
      </p>

      <div className="cta flex flex-col md:flex-row gap-4  w-full text-lg">
        <a
          className="bg-[#4F65B0] px-4 py-3 rounded-lg text-white grid place-items-center shadow font-semibold"
          href="/dashboard"
        >
          Get started for free
        </a>
        <div className="rounded-lg py-3 px-4 border-gray-300 border-[0.3px] grid place-items-center shadow font-semibold">
          View Features
        </div>
      </div>
    </div>
  );
};

export default HeroText;
