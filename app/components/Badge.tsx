import React from 'react'

const Badge = ({text, className}:{text:string, className?:string}) => {
  return (
    <span className={`text-[#4F65B0] bg-[#4F65B0]/10 px-2 py-1 text-sm rounded-2xl font-semibold ${className}`}>
      {text}
    </span>
  );
}

export default Badge