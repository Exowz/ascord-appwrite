"use client";

import React from "react";

import {
  TextRevealCard,
} from "@/components/ui/text-reveal-card";

const WhyAscord = () => {
  return (
    <section className="py-20">
      {/* Heading Section */}
      <div className="max-w-7xl relative mx-auto w-full flex flex-col items-center justify-center text-center py-16 md:py-40 px-4">
        <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
          Why Ascord?
        </h2>
      </div>

      {/* Card Section */}
      <div className="flex justify-center">
        <TextRevealCard
          text="In a world filled with distractions, Ascord is designed to help you focus on what matters."
          revealText="Whether you’re working solo or with a team, Ascord creates a balanced, immersive experience that’s both powerful and easy to use."
        />
      </div>
    </section>
  );
}

export default WhyAscord;