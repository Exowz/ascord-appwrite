"use client";

import React, { ReactNode, useRef } from "react";
import { SiNextdotjs, SiSupabase, SiAppwrite, SiSocketdotio, SiPrisma, SiFramer, SiHono } from "react-icons/si";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

const Features = () => {
  return (
    <section className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full" id="features">
        <div className="max-w-7xl relative mx-auto w-full flex flex-col items-center justify-center text-center py-16 md:py-40 px-4">
            <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
                Features
            </h2>
        </div>
    <div className="bg-white dark:bg-black">
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Centralized Task Management"
        heading="Never compromise" 
      >
        <ExampleContent2 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Seamless Navigation" 
        heading="Built for all of us."
      >
        <ExampleContent />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Streamlined Dock Access"
        heading="Dress for the best."
      >
        <ExampleContent3 />
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl="https://images.unsplash.com/photo-1504610926078-a1611febcad3?q=80&w=2416&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        subheading="Unified Communication & Collaboration"
        heading="Never miss a beat."
      >
        <ExampleContent4 />
      </TextParallaxContent>
    </div>
    <div className="max-w-7xl relative mx-auto w-full flex flex-col items-center justify-center text-center py-16 md:py-40 px-4">
        <h4 className="max-w-2xl text-base md:text-xl mb-4 dark:text-neutral-200">
            Frameworks
        </h4>
        <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
            Best Practices
        </h2>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
            Ascord was built around the most popular frameworks and tools to ensure seamless integration and compatibility.
        </p>
        <>
        <div className="py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-center bg-white dark:bg-black w-full mx-auto px-8">
    <Card title="NextJS" icon={<SiNextdotjs className="text-black dark:text-white w-10 h-10" />}>
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900"
      />
    </Card>
    <Card title="HonoJS" icon={<SiHono className="text-black dark:text-white w-10 h-10" />}>
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-black"
        colors={[
          [236, 72, 153],
          [232, 121, 249],
        ]}
        dotSize={2}
      />
      {/* Radial gradient for the cute fade */}
      <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
    </Card>
    <Card title="Appwrite" icon={<SiAppwrite className="text-black dark:text-white w-10 h-10" />}>
      <CanvasRevealEffect
        animationSpeed={3}
        containerClassName="bg-sky-600"
        colors={[[125, 211, 252]]}
      />
    </Card>
    <Card title="Prisma" icon={<SiPrisma className="text-black dark:text-white w-10 h-10" />}>
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900"
      />
    </Card>
    <Card title="Socket.io" icon={<SiSocketdotio className="text-black dark:text-white w-10 h-10" />}>
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900"
      />
    </Card>
    <Card title="Framer" icon={<SiFramer className="text-black dark:text-white w-10 h-10" />}>
      <CanvasRevealEffect
        animationSpeed={5.1}
        containerClassName="bg-emerald-900"
      />
    </Card>
  </div>
        </>
    </div>
    </section>
  );
};

export default Features;

const IMG_PADDING = 12;

const TextParallaxContent = ({
  imgUrl,
  subheading,
  heading,
  children,
}: {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: ReactNode;
}) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }: { imgUrl: string }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({
  subheading,
  heading,
}: {
  subheading: string;
  heading: string;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};

const ExampleContent = () => (
  <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
    <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
      Because we don't want to be cluttered, the floating sidebar.
    </h2>
    <div className="col-span-1 md:col-span-8">
      <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
      Ascord&rsquo;s sleek, auto-hiding sidebar gives you quick access to key sections &mdash; private messages, project spaces, and account settings &mdash; without cluttering your workspace.
      </p>
      <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
      Icons keep everything simple and intuitive, letting you focus on your tasks and conversations without distraction.
      </p>
    </div>
  </div>
);

const ExampleContent2 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        The central task hub, a revolution.
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        At the core of Ascord is the central task hub. This dynamic, blank workspace adapts to your current selection, displaying projects, tasks, or messages based on what you choose. 
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        With the whole screen at your disposal, you can dive deep into each task with clarity and focus.
        </p>
      </div>
    </div>
  );

  const ExampleContent3 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Reinventing the wheel of navigation.
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Forget the complexity of traditional channel lists. Ascord&rsquo;s dock at the bottom of your screen replaces customizable channels with predefined spaces tailored to your needs.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Quickly switch between projects, messages, and resources &mdash; all organized to keep you moving forward without the need to customize or configure.
        </p>
      </div>
    </div>
  );

  const ExampleContent4 = () => (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold md:col-span-4">
        Peak collaboration.
      </h2>
      <div className="col-span-1 md:col-span-8">
        <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
        Say goodbye to switching between apps. With real-time messaging and updates, Ascord lets you communicate and collaborate in one place.
        </p>
        <p className="mb-8 text-xl text-neutral-600 md:text-2xl">
        Work with teammates, get feedback, and make decisions without losing your train of thought.
        </p>
      </div>
    </div>
  );
  
  const Card = ({
    title,
    icon,
    children,
  }: {
    title: string;
    icon: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem]"
      >
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
   
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full w-full absolute inset-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
   
        <div className="relative z-20">
          <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
            {icon}
          </div>
          <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
            {title}
          </h2>
        </div>
      </div>
    );
  };
   
  const AceternityIcon = () => {
    return (
      <svg
        width="66"
        height="65"
        viewBox="0 0 66 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
      >
        <path
          d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
          stroke="currentColor"
          strokeWidth="15"
          strokeMiterlimit="3.86874"
          strokeLinecap="round"
          style={{ mixBlendMode: "darken" }}
        />
      </svg>
    );
  };
   
  export const Icon = ({ className, ...rest }: any) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={className}
        {...rest}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
      </svg>
    );
  };
  
  
