"use client";

import React from 'react'

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Button } from "@/components/ui/button";
// import { JoinButton } from "../auth/components/join-button";

export default function CallToAction() {
    const words = [
        {
          text: "Manage",
        },
        {
          text: "awesome",
        },
        {
          text: "projects",
        },
        {
          text: "with",
        },
        {
          text: "Ascord.",
          className: "text-blue-500 dark:text-blue-500",
        },
      ];
  return (
    <section className="py-12">
         <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Ready to Get Started?
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            <Button>
                Get started
            </Button>
        </div>
    </div>
    </section>
  )
}
