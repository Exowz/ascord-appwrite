"use client";

import React from "react";

import { HeroParallax } from "@/components/ui/hero-parallax";

const Hero = () => {
  return (
    <HeroParallax products={products} />
  ); 
}

export default Hero;

export const products = [
  {
    title: "VSCode",
    link: "https://code.visualstudio.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/VSCode%402x.png",
  },
  {
    title: "ChatGPT",
    link: "https://chat.openai.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/ChatGPT%402x.png",
  },
  {
    title: "Supabase",
    link: "https://supabase.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Supabase%402x.png",
  },

  {
    title: "Auth.js",
    link: "https://authjs.dev",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Auth.js%402x.png",
  },
  {
    title: "Socket.IO",
    link: "https://socket.io",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Socket.io%402x.png",
  },
  {
    title: "Resend",
    link: "https://resend.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Resend%402x.png",
  },

  {
    title: "Warp",
    link: "https://warp.dev",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Warp.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "Framer Motion",
    link: "https://framer.com/motion",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/FramerMotion.png",
  },
  {
    title: "Shadcn UI",
    link: "https://ui.shadcn.com/",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/ShacnUI.png",
  },

  {
    title: "Vercel",
    link: "https://vercel.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Vercel.png",
  },
  {
    title: "Next.js",
    link: "https://nextjs.org",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Next.js.png",
  },
  {
    title: "Prisma",
    link: "https://prisma.io",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Prisma.png",
  },
  {
    title: "Uploadthing",
    link: "https://uploadthing.com",
    thumbnail:
      "https://raw.githubusercontent.com/Exowz/ascord-v2/refs/heads/main/app/assets/hero-thumbnails/Uploadthing.png",
  },
];
