"use client";
import React, { useState, useEffect, useId } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function ContainerTextFlip({
  words = ["Software Engineer", "Full Stack Developer", "Backend Developer"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);
    return () => clearInterval(intervalId);
  }, [words, interval, isMounted]);

  return (
    <div className="flex justify-center w-full">
      <motion.div
        layout
        layoutId={`words-here-${id}`}
        className={cn(
          "relative rounded-lg pt-2 pb-3 text-center",
          className
        )}
        key={words[currentWordIndex]}
      >
        <motion.div
          transition={{
            duration: animationDuration / 1000,
            ease: "easeInOut",
          }}
          className={cn("text-center mx-auto", textClassName)}
          layoutId={`word-div-${words[currentWordIndex]}-${id}`}
        >
          <motion.div className="inline-block text-center">
            {words[currentWordIndex].split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={isMounted ? {
                  opacity: 0,
                  filter: "blur(10px)",
                } : false}
                animate={isMounted ? {
                  opacity: 1,
                  filter: "blur(0px)",
                } : false}
                transition={{
                  delay: index * 0.02,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}