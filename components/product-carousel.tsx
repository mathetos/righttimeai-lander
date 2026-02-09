"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import confetti from "canvas-confetti";

const steps = [
  {
    id: 1,
    title: "Create your Invite",
    description: "Set up your event details and guest list",
    image: "/images/carousel-screenshot1.png",
  },
  {
    id: 2,
    title: "Guests Connect Calendars",
    description: "Invitees securely connect their calendars",
    image: "/images/carousel-screenshot2.png",
  },
  {
    id: 3,
    title: "Review Recommended Times",
    description: "See the best times that work for everyone",
    image: "/images/carousel-screenshot3.png",
  },
  {
    id: 4,
    title: "Meeting Scheduled",
    description: "Confirmed and added to everyone's calendar",
    image: "/images/carousel-screenshot4.png",
  },
];

type Direction = 1 | -1;

const centerVariants = {
  enter: (direction: Direction) => ({
    opacity: 0,
    scale: 0.96,
    x: direction === 1 ? 24 : -24,
    transformOrigin: direction === 1 ? "right center" : "left center",
  }),
  center: {
    opacity: 1,
    scale: 1,
    x: 0,
    transformOrigin: "center center",
  },
  exit: (direction: Direction) => ({
    opacity: 0,
    scale: 0.96,
    x: direction === 1 ? -24 : 24,
    transformOrigin: direction === 1 ? "left center" : "right center",
  }),
};

const CENTER_DURATION_MS = 250;

export function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<Direction>(1);
  const [leftDisplayIndex, setLeftDisplayIndex] = useState(
    (0 - 1 + steps.length) % steps.length
  );
  const [rightDisplayIndex, setRightDisplayIndex] = useState(
    (0 + 1) % steps.length
  );
  const [maxCenterHeight, setMaxCenterHeight] = useState(0);
  const centerRef = useRef<HTMLDivElement>(null);
  const confettiCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      setLeftDisplayIndex(
        (currentIndex - 1 + steps.length) % steps.length
      );
      setRightDisplayIndex((currentIndex + 1) % steps.length);
    }, CENTER_DURATION_MS);
    return () => clearTimeout(t);
  }, [currentIndex]);

  useEffect(() => {
    if (currentIndex !== 3) return;
    const t = setTimeout(() => {
      requestAnimationFrame(() => {
        const canvas = confettiCanvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        if (rect.width === 0 || rect.height === 0) return;
        canvas.width = Math.round(rect.width);
        canvas.height = Math.round(rect.height);
        const myConfetti = confetti.create(canvas, {
          resize: false,
          disableForReducedMotion: true,
        });
        myConfetti({
          particleCount: 500,
          spread: 80,
          origin: { x: 0.5, y: 1 },
        });
      });
    }, 500);
    return () => clearTimeout(t);
  }, [currentIndex]);

  useEffect(() => {
    const el = centerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect.height;
        setMaxCenterHeight((prev) => Math.max(prev, h));
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [currentIndex]);

  const next = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % steps.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + steps.length) % steps.length);
  };

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-[1800px] mx-auto px-8 py-20">
      <div
        className="relative flex items-center justify-center"
        style={maxCenterHeight > 0 ? { minHeight: maxCenterHeight } : undefined}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`prev-${leftDisplayIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden lg:block absolute left-0 w-[600px] cursor-pointer hover:opacity-60 transition-opacity z-0"
            style={{ transform: "translateX(-35%) rotate(-8deg)" }}
            onClick={prev}
          >
            <div className="rounded-xl overflow-hidden shadow-xl border border-border bg-card">
              <Image
                src={steps[leftDisplayIndex].image}
                alt="Previous step"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="relative flex-grow max-w-6xl z-20">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              ref={centerRef}
              key={currentIndex}
              custom={direction}
              variants={centerVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative"
            >
              <div
                className="relative overflow-hidden backdrop-blur-xl bg-white/70 border border-white/50 rounded-3xl shadow-2xl p-12 md:p-16"
              >
                {currentIndex === 3 && (
                  <canvas
                    ref={confettiCanvasRef}
                    className="absolute inset-0 z-10 pointer-events-none w-full h-full rounded-3xl"
                    aria-hidden
                  />
                )}
                <div className="relative z-0 flex flex-col lg:flex-row items-center gap-12">
                  <div className="flex-shrink-0 lg:w-1/3 text-center lg:text-left">
                    <span className="inline-block text-lg font-medium text-[#657A8E] bg-brand-soft/25 rounded-full px-4 py-1.5 mb-3">
                      Step {steps[currentIndex].id}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                      {steps[currentIndex].title}
                    </h2>
                    <p className="text-muted-foreground text-lg">
                      {steps[currentIndex].description}
                    </p>
                    <div className="flex gap-2 mt-8 justify-center lg:justify-start">
                      {steps.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => goTo(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentIndex
                              ? "w-10 bg-[#657A8E]"
                              : "w-2 bg-muted hover:bg-muted-foreground/40"
                          }`}
                          aria-label={`Go to step ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex-1 w-full min-w-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
                      <Image
                        src={steps[currentIndex].image}
                        alt={steps[currentIndex].title}
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                        unoptimized
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 lg:-translate-x-16 w-14 h-14 rounded-full bg-white shadow-xl border border-border flex items-center justify-center hover:bg-muted hover:scale-110 transition-all z-30"
            aria-label="Previous step"
          >
            <ChevronLeft className="w-7 h-7 text-foreground" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 lg:translate-x-16 w-14 h-14 rounded-full bg-white shadow-xl border border-border flex items-center justify-center hover:bg-muted hover:scale-110 transition-all z-30"
            aria-label="Next step"
          >
            <ChevronRight className="w-7 h-7 text-foreground" />
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={`next-${rightDisplayIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden lg:block absolute right-0 w-[600px] cursor-pointer hover:opacity-60 transition-opacity z-0"
            style={{ transform: "translateX(35%) rotate(8deg)" }}
            onClick={next}
          >
            <div className="rounded-xl overflow-hidden shadow-xl border border-border bg-card">
              <Image
                src={steps[rightDisplayIndex].image}
                alt="Next step"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
