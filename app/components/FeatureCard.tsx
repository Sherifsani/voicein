"use client";

import React from "react";
import { FiCreditCard } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { LuUsers } from "react-icons/lu";
import { SiSimpleanalytics } from "react-icons/si";
import { TbInvoice } from "react-icons/tb";

interface featureProps {
  iconText: string;
  head: string;
  text: string;
}

const FeatureCard = ({ iconText, head, text }: featureProps) => {
  const getIcon = () => {
    const iconClass = "text-3xl font-bold";

    switch (iconText) {
      case "document":
        return <IoDocumentTextOutline className={iconClass} />;
      case "card":
        return <FiCreditCard className={iconClass} />;
      case "alarm":
        return <FaRegBell className={iconClass} />;
      case "user":
        return <LuUsers className={iconClass} />;
      case "analytics":
        return <SiSimpleanalytics className={iconClass} />;
      default:
        return <TbInvoice className={iconClass} />;
    }
  };

  return (
    <div className="flex flex-col gap-4 p-8 bg-white shadow-sm items-start rounded-xl">
      <div className="p-3 text-[#4F65B0] bg-[#4F65B0]/10 rounded-2xl">
        {getIcon()}
      </div>
      <h3 className="font-semibold text-xl">{head}</h3>
      <p className="text-gray-500">{text}</p>
    </div>
  );
};

export default FeatureCard;
