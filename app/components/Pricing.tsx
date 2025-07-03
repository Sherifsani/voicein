import React from "react";
import { CiDollar } from "react-icons/ci";
import Badge from "./Badge";
import { IoMdCheckmark } from "react-icons/io";

const Pricing = () => {
  return (
    <section id="pricing" className="bg-gray-100 py-16 px-3 md:px-0">
      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col gap-3 items-center text-center">
          <Badge text="Transparent Pricing" />
          <h2 className="text-3xl font-semibold">
            Free Invoice Generator with Pay-As-You-Go Pricing
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Create unlimited invoices with no subscription - pay only 1% when
            you get paid
          </p>
        </div>
        <div className="bg-white shadow-sm border-gray-100 border rounded-lg max-w-3xl mx-auto mt-10">
          <div className="top-section p-6 border-b-gray-300 border-b-[0.5px] text-center flex items-center gap-2 flex-col">
            <div className="p-3 text-[#4F65B0] bg-[#4F65B0]/10 rounded-full">
              <CiDollar className="text-[#4F65B0] text-2xl" />
            </div>
            <h3 className="font-semibold text-2xl">
              1<span className="text-[#4f66b0]">%</span> Transaction Fee
            </h3>
            <p className="text-gray-500">Pay Only when you get paid</p>
          </div>
          <div className="mid-section mx-auto max-w-2xl p-6 md:px-12 flex flex-col gap-10 border-b-gray-300 border-b-[0.5px]">
            <div className="flex justify-between">
              <p className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">Invoice Amount</span>
                <span className="font-bold">#100,000</span>
              </p>
              <p className="font-medium text-xs text-gray-600">1% fee</p>
              <p className="flex flex-col gap-1">
                <span className="text-xs text-gray-500">You Pay</span>
                <span className="font-bold text-[#4f66b0]">1,000</span>
              </p>
            </div>
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
              <div>
                <h4 className="font-medium mb-4">Everything Included:</h4>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Unlimited professional invoices</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Custom branding & templates</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Automatic payment reminders</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Client trust metrics</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-4">Also Included:</h4>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Multi-currency support</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Advanced dashboard analytics</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Paystack payment integration</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <IoMdCheckmark className="text-[#4f66b0]" />
                    <span>Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bottom-bar flex flex-col items-center p-6 gap-2">
            <a
              href=""
              className="text-white bg-[#4f66b0] text-xl px-5 py-3 rounded-lg block text-center hover:bg-[#4f66b0]/90 transition-all duration-300 ease-in-out font-semibold"
            >
              Get Started
            </a>
            <p className="text-sm text-gray-500">
              No credit card required • No hidden fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
