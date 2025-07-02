import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  return (
    <div
      className={`md:hidden absolute top-full left-0 flex flex-col gap-2 items-center justify-between px-5 w-full bg-white py-4 shadow-lg transition-all duration-300 ease-in-out z-0 ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <ul className="flex flex-col gap-4 text-base border-b border-gray-300 pb-4 w-full">
        <li>About</li>
        <li>Features</li>
        <li>Screens</li>
        <li>Help</li>
      </ul>
      <div className="cta flex flex-col gap-4 text-base w-full">
        <div className="rounded-lg py-2 px-4 border-gray-300 border-[0.3px] grid place-items-center">
          Sign in
        </div>
        <div className="bg-[#4F65B0] px-4 py-2 rounded-lg text-white grid place-items-center">
          Get started for free
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
