"use client";

import React from 'react'

import Logo from "@/components/logo";
import ModeToggle from '@/components/mode-toggle';

export default function Footer() {
  return (
    <footer className="py-5 border-t border-slate-300 dark:border-white/15">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-left">
          {/* Left Section */}
          <div className="flex gap-2 items-center justify-center lg:justify-start lg:flex-1">
            <Logo className="h-10 w-10" />
            <div className="font-medium">Ascord</div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col lg:flex-row gap-5 lg:gap-7 lg:flex-1 lg:justify-center">
            <a className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white text-xs md:text-sm transition" href="#features">Features</a>
            <a className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white text-xs md:text-sm transition" href="#testimonials">Testimonials</a>
            <a className="text-slate-600 dark:text-white/70 hover:text-black dark:hover:text-white text-xs md:text-sm transition" href="#changelog">Changelog</a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center justify-center lg:justify-end lg:flex-1">
            <ModeToggle />
          </div>
        </div>
      </div>
    </footer>
  )
}