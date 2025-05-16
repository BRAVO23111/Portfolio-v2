"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click.jsx";

import Image from "next/image";

export default function ProjectsPage() {
  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }
    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 mt-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          My Projects
        </h1>
        <p className="text-neutral-400 mx-auto my-2 text-lg text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          Explore some of my favorite work and collaborations.
        </p>
      </div>

      <div className="w-full max-w-2xl mx-auto">
        <ul className="w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-gray-900 dark:hover:bg-neutral-800 rounded-xl cursor-pointer bg-neutral-900/60 mb-4"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-24 md:w-24 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div>
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-200 text-center md:text-left text-xl md:text-2xl"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-yellow-400 hover:bg-yellow-300 text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>

            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>

                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "RBAC Hospital Management Application",
    title: "MedHelp",
    src: "/Project1.png",
    ctaText: "Try It!",
    ctaLink: "https://example.com/shopsmart",
    content: () => (
      <p>
        A complete e-commerce solution built with Next.js and Tailwind CSS.
        Features include product browsing, cart management, user authentication,
        and payment processing integration. <br /><br />The platform is highly
        customizable and was designed with performance and scalability in mind.
        It includes a fully responsive design for optimal user experience across
        all devices, and implements best practices for SEO and accessibility.
      </p>
    ),
  },
  {
    description: "AI-Content Writer",
    title: "Writee",
    src: "/Project2.png",
    ctaText: "Try It!",
    ctaLink: "https://example.com/taskflow",
    content: () => (
      <p>
        A productivity application that helps teams manage tasks efficiently.
        Built with React and Firebase, it provides real-time updates and collaboration
        features. <br /><br />The app includes features like drag-and-drop task
        organization, priority settings, deadline reminders, and team member assignment.
        Task analytics help teams understand their productivity patterns and improve
        workflow efficiency over time.
      </p>
    ),
  },
  {
    description: "Online Book selling Platform ",
    title: "Re-Story",
    src: "/Project3.png",
    ctaText: "Try It!",
    ctaLink: "https://example.com/convobot",
    content: () => (
      <p>
        An AI-powered chat assistant that provides intelligent responses to user
        queries. Implemented using Node.js backend with a React frontend and integrated
        with OpenAI&apos;s API. <br /><br />The application features conversation memory,
        context awareness, and the ability to handle complex queries with natural
        language understanding. It can be easily integrated into websites and 
        applications to provide instant customer support and information.
      </p>
    ),
  },
  {
    description: "AI Platform to Track Your Studies ",
    title: "StudyInsights-AI",
    src: "/Project4.png",
    ctaText: "Try It!",
    ctaLink: "https://example.com/wealthtracker",
    content: () => (
      <p>
        A comprehensive financial dashboard that helps users track investments,
        expenses, and savings goals. Built with Angular and Chart.js for data
        visualization. <br /><br />This application integrates with various financial
        APIs to provide real-time updates on market trends and portfolio performance.
        Users can set financial goals, track progress, and receive insights on
        spending patterns to improve financial health and decision-making.
      </p>
    ),
  },
];
