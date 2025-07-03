import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface FaqCardProps {
  question: string;
  answer: string;
}

const FaqCard = ({ question, answer }: FaqCardProps) => {
  return (
    <div className="flex flex-row gap-2 items-start border-gray-300 border-[0.5px] p-6 md:py-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 ease-in-out">
      <div className="bg-[#4f66b0]/10 p-2 rounded-full">
        <AiOutlineQuestionCircle className="text-lg text-[#4f66b0]" />
      </div>
      <div>
        <h3 className="font-medium text-lg">
          {question}
        </h3>
        <p className="text-gray-500">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FaqCard;
