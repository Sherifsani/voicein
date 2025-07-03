import React from "react";
import Badge from "./Badge";
import FaqCard from "./FaqCard";
import { faqsData } from "../../data/index";

const Faqs = () => {
  return (
    <section className="py-16 px-3 md:px-0">
      <div className="flex flex-col gap-3 items-center text-center">
        <Badge text="FAQs" />
        <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Common questions about creating and sending invoices with Invoyce
        </p>
      </div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
        {faqsData.map((faq, index) => (
          <FaqCard key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
