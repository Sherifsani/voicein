"use client";

import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { MdClose } from "react-icons/md";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/80 z-50">
      <nav className="relative flex justify-between mx-auto max-w-7xl py-6 px-4 md:px-0 text-lg items-center z-10">
        <h1 className="text-2xl md:text-4xl font-semibold">
          invoice<span>.</span>
        </h1>
        <ul className="gap-6 text-base hidden md:flex text-gray-500">
          <li>About</li>
          <li>Features</li>
          <li>Screens</li>
          <li>Help</li>
        </ul>

        <div className="cta hidden md:flex items-center gap-2 text-base">
          <div className="rounded-lg py-2 px-4 border-gray-300 border-[0.3px]">
            Sign in
          </div>
          <div className="bg-[#4F65B0] px-4 py-2 rounded-lg text-white ">
            Get started for free
          </div>
        </div>

        <MobileMenu isOpen={isOpen} />
        <div className="menu-icon md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <MdClose className="text-xl cursor-pointer" />
          ) : (
            <FaBars className="text-xl cursor-pointer" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
