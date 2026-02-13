import React, { useState } from "react";
import Image from "next/image";
import { MotionScrollReveal, MotionStaggerChild } from "./animations";
import { motion, AnimatePresence } from "framer-motion";

interface JourneyItem {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  link?: string;
}

const journeyItems: JourneyItem[] = [
  {
    image: "/images/journey/chris1992.png",
    alt: "Chris Schofield aged 5, asleep with headphones on",
    title: "Rooted in Sound",
    subtitle: "Early Obsession",
    description:
      "Headphones on, world off. The obsession started early and never really stopped.",
    year: "1988",
  },
  {
    image: "/images/journey/chrisdj2022.JPG",
    alt: "Chris Schofield DJing at Gold Soundz in 2012",
    title: "Building Experience",
    subtitle: "Gold Soundz DJ Service",
    description:
      "Running a music business is 10% music and 90% logistics, relationships, and showing up on time.",
    year: "2012",
  },
  {
    image: "/images/journey/sadactpromopic2021.JPG",
    alt: "Chris Schofield as sadact, radio promoter and producer, in 2021",
    title: "The Catalyst",
    subtitle: "Radio Promoter & Producer",
    description:
      "Five years of radio promotion. Releasing music as sadact. Both sides of the industry -- and why the tools weren't built for the people doing the work.",
    year: "2021",
    link: "https://sadact.uk",
  },
  {
    image: "/images/journey/chrisdecadance2024.JPG",
    alt: "Chris Schofield at Decadance UK radio station in 2024",
    title: "Industry Native",
    subtitle: "Decadance UK",
    description:
      "On the air at Decadance UK. Seeing the other side of the desk -- and why most pitches get ignored.",
    year: "2024",
  },
  {
    image: "/images/journey/chris-sadact-portrait.jpg",
    alt: "Chris Schofield, founder of Total Audio Promo, 2026",
    title: "Founder",
    subtitle: "TAP by Total Audio Promo",
    description:
      "Built TAP -- one workspace for the work of music PR. The system I wish I'd had from day one.",
    year: "2026",
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-16 sm:py-20 bg-black overflow-visible relative">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <MotionScrollReveal variant="fadeUp" className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-black uppercase tracking-[0.2em]">
            The Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-6 tracking-tight">
            Built on{" "}
            <span className="text-cyan-500">real experience.</span>
          </h2>
          <p className="text-xl text-stone-400 max-w-3xl mx-auto leading-relaxed font-medium">
            From running a music business to pitching BBC Radio 1, I built TAP
            because the tools we rely on were never designed for the people
            doing the work.
          </p>
        </MotionScrollReveal>

        <div className="relative">
          {/* Horizontal Line - Glowing */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden lg:block -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />

          <MotionScrollReveal
            variant="stagger"
            trigger="eager"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {journeyItems.map((item, index) => (
              <JourneyCard key={index} item={item} index={index} />
            ))}
          </MotionScrollReveal>
        </div>

        <MotionScrollReveal
          variant="fadeUp"
          delay={0.6}
          className="mt-14 flex flex-col items-center gap-6"
        >
          <a
            href="https://tap.totalaudiopromo.com/signup?source=timeline"
            className="inline-block px-8 py-4 text-base font-bold text-white bg-cyan-700 rounded-full hover:bg-cyan-800 transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.05),0_4px_16px_rgba(8,145,178,0.25)]"
          >
            Try TAP Free
          </a>

          <p className="text-sm text-stone-500 font-medium">
            5+ years in radio promotion
          </p>
        </MotionScrollReveal>
      </div>
    </section>
  );
};

const JourneyCard = ({ item, index }: { item: JourneyItem; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <MotionStaggerChild className="relative group">
      <motion.div
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        animate={{
          y: isHovered ? -10 : 0,
        }}
        className="h-full flex flex-col"
      >
        <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl border border-white/10 group-hover:border-cyan-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-cyan-500/20 bg-stone-900">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover grayscale-0 sm:grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
            priority={index < 3}
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 14vw"
          />

          {/* Scanline Effect on Hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10%] w-full animate-scan" />
                <div className="absolute inset-0 opacity-20 overflow-hidden">
                  <div className="w-full h-full bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />

          <div className="absolute bottom-4 left-4 z-20">
            <span className="text-3xl font-black text-white/50 group-hover:text-white transition-colors tracking-tighter italic">
              {item.year}
            </span>
          </div>
        </div>

        <div className="space-y-3 px-1">
          <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors tracking-tight">
            {item.title}
          </h3>
          <p className="inline-block px-2 py-0.5 rounded bg-cyan-500/10 text-[10px] font-black text-cyan-400 uppercase tracking-widest border border-cyan-500/20">
            {item.subtitle}
          </p>
          <p className="text-[15px] text-stone-400 leading-relaxed font-medium">
            {item.description}
          </p>
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-cyan-400/70 hover:text-cyan-400 transition-colors font-medium"
            >
              {item.link.replace(/^https?:\/\//, "")} &rarr;
            </a>
          )}
        </div>

        {/* Desktop vertical connector line node */}
        <div className="hidden lg:block absolute top-[150px] -left-[14px] w-2 h-2 rounded-full bg-white/20 border border-black group-hover:bg-cyan-500 group-hover:scale-125 transition-all z-30" />
      </motion.div>
    </MotionStaggerChild>
  );
};
