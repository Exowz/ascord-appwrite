"use client";

import React, { useState } from "react";
import Link from "next/link";

import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
// import { JoinButton } from "../auth/components/join-button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed md:top-4 left-0 w-full z-[9999]">
      <div className="flex justify-center">
        <div className="flex items-center bg-white dark:bg-black md:border md:border-slate-300 md:dark:border-white/[0.15] p-4 md:rounded-xl w-full md:mx-8 md:bg-white md:dark:bg-black shadow-md transition-colors duration-300">
          {/* Left Section: Navigation */}
          <div className="flex flex-1 items-center">
            <nav className="flex gap-8 ml-4">
              <a
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
                href="#features"
              >
                Features
              </a>
              <a
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
                href="#testimonials"
              >
                Testimonials
              </a>
              <a
                className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition"
                href="#changelog"
              >
                Changelog
              </a>
            </nav>
          </div>

          {/* Center Section: Logo */}
          <div className="flex justify-center items-center">
            <Logo className="h-10 w-10"/>
          </div>

          {/* Right Section: Login Button */}
          <div className="flex flex-1 justify-end items-center gap-2">
                <Button asChild>
                  <Link href={`/register`}>
                    Get started
                  </Link>
                </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;