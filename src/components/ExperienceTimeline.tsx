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
    alt: "Chris Schofield as a child in 1988, asleep with headphones on",
    title: "Rooted in Sound",
    subtitle: "Early Obsession",
    description:
      "Headphones on before I could talk. The obsession started early and never really stopped.",
    year: "1988",
  },
  {
    image: "/images/journey/chrisdj2022.JPG",
    alt: "Chris Schofield DJing at Gold Soundz in 2012",
    title: "Building Experience",
    subtitle: "Gold Soundz DJ Service",
    description:
      "Learning that a music business is 10% music and 90% logistics, relationships, and showing up on time.",
    year: "2012",
  },
  {
    image: "/images/journey/hisandhersfloor.JPG",
    alt: "Chris Schofield performing with His & Hers hardcore band in 2015",
    title: "Stage & Spirit",
    subtitle: "His & Hers",
    description:
      "DIY or die. Touring with His & Hers taught me the reality of the grind—loading vans and empty rooms.",
    year: "2015",
  },
  {
    image: "/images/journey/sadactpromopic2021.JPG",
    alt: "Chris Schofield as a radio promoter in 2021",
    title: "The Catalyst",
    subtitle: "Radio Promoter",
    description:
      "Five years of radio promotion. Seeing first-hand how 'luck' is usually just a well-managed relationship.",
    year: "2021",
  },
  {
    image: "/images/journey/sadact2023studio.jpg",
    alt: "Chris Schofield producing music as sadact in 2023",
    title: "Technical Depth",
    subtitle: "sadact / Sound Design",
    description:
      "Back in the studio as sadact. Rediscovering the technical side of sound so I could build tools that respect the craft.",
    year: "2023",
    link: "https://sadact.uk",
  },
  {
    image: "/images/journey/chrisdecadance2024.JPG",
    alt: "Chris Schofield at Decadance UK radio station in 2024",
    title: "Industry Native",
    subtitle: "Decadance UK",
    description:
      "On the air at Decadance UK. Getting a proper look at the other side of the desk and why most pitches get ignored.",
    year: "2024",
  },
  {
    image: "/images/journey/chris-sadact-portrait.jpg",
    alt: "Chris Schofield, founder of Total Audio Promo, 2026",
    title: "Founder",
    subtitle: "Total Audio Promo",
    description:
      "Distilling thirty years of wins, losses, and noise into the system I wish I'd had from day one.",
    year: "2026",
  },
];

export const ExperienceTimeline = () => {
  return (
    <section className="py-24 bg-black overflow-hidden relative">
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

      {/* Floating Network Nodes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-intel-500/10 blur-xl"
            initial={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              opacity: 0,
            }}
            animate={{
              x: [null, (Math.random() - 0.5) * 10 + "%"],
              y: [null, (Math.random() - 0.5) * 10 + "%"],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ willChange: "transform, opacity" }}
          />
        ))}
      </div>

      <div className="max-w-[1700px] mx-auto px-6 relative z-10">
        <MotionScrollReveal variant="fadeUp" className="text-center mb-20">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-intel-500/30 bg-intel-500/5 text-intel-400 text-xs font-black uppercase tracking-[0.2em]">
            Legacy & Logic
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">
            Nearly four decades{" "}
            <span className="text-intel-500">on the ground.</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            I built Total Audio Promo because the work demanded it. Since
            1988—from DIY tours in vans to national radio campaigns—it became
            clear that the tools we rely on were never actually designed for the
            people doing the work.
          </p>
        </MotionScrollReveal>

        <div className="relative">
          {/* Horizontal Line - Glowing */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent hidden xl:block -translate-y-1/2 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />

          <MotionScrollReveal
            variant="stagger"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6"
          >
            {journeyItems.map((item, index) => (
              <JourneyCard key={index} item={item} index={index} />
            ))}
          </MotionScrollReveal>
        </div>

        <MotionScrollReveal
          variant="fadeUp"
          delay={0.6}
          className="mt-24 flex flex-col items-center gap-6"
        >
          <a href="https://intel.totalaudiopromo.com" className="group">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="inline-block p-[2px] rounded-full bg-gradient-to-r from-intel-500 via-blue-500 to-purple-500 shadow-[0_0_30px_rgba(58,169,190,0.3)]"
            >
              <div className="px-10 py-4 rounded-full bg-black text-white font-bold text-lg group-hover:bg-transparent transition-all duration-300 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-intel-500 animate-pulse" />
                See the Platform
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.div>
          </a>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-gray-500 font-medium">
              Established 1988
            </p>
            <span className="hidden sm:inline text-gray-700">•</span>
            <a
              href="https://sadact.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-intel-400 hover:text-intel-300 font-medium transition-colors underline decoration-intel-500/30 underline-offset-4"
            >
              sadact.uk
            </a>
          </div>
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
        <div className="relative aspect-[3/4] mb-6 overflow-hidden rounded-2xl border border-white/10 group-hover:border-intel-500/50 transition-all duration-500 shadow-2xl group-hover:shadow-intel-500/20 bg-gray-900">
          <Image
            src={item.image}
            alt={item.alt}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
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
          <h3 className="text-xl font-bold text-white group-hover:text-intel-400 transition-colors tracking-tight">
            {item.title}
          </h3>
          <p className="inline-block px-2 py-0.5 rounded bg-intel-500/10 text-[10px] font-black text-intel-400 uppercase tracking-widest border border-intel-500/20">
            {item.subtitle}
          </p>
          <p className="text-[15px] text-gray-400 leading-relaxed font-medium">
            {item.description}
          </p>
        </div>

        {/* Desktop vertical connector line node */}
        <div className="hidden xl:block absolute top-[150px] -left-[14px] w-2 h-2 rounded-full bg-white/20 border border-black group-hover:bg-intel-500 group-hover:scale-125 transition-all z-30" />
      </motion.div>
    </MotionStaggerChild>
  );
};
