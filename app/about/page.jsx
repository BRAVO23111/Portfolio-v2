"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 85 },
    { name: "Tailwind CSS", level: 90 },
    { name: "MongoDB", level: 75 },
    { name: "SQL", level: 80 },
  ];

  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading the frontend development team in building scalable web applications using React and Next.js.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2020 - 2022",
      description: "Developed and maintained full-stack web applications using MERN stack and integrated third-party APIs.",
    },
    {
      title: "Web Developer",
      company: "WebCraft Studio",
      period: "2018 - 2020",
      description: "Created responsive websites and implemented SEO strategies to improve client visibility.",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-16 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Get to Know Me!
          </h1>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
            Getting to know the developer behind the code
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-5 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-2xl border-2 border-yellow-400/20">
              <Image 
                src="/profile-placeholder.jpg" 
                alt="Debanjan Mukherjee" 
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-7"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-yellow-300">
              Debanjan Mukherjee
            </h2>
            <h3 className="text-xl text-neutral-300 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              Software Engineer & Full Stack Developer
            </h3>
            <p className="text-neutral-400 mb-4" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              I'm a passionate software engineer with over 5 years of experience creating elegant, high-performance web applications. I specialize in modern JavaScript frameworks like React and Next.js, with a strong foundation in backend development using Node.js.
            </p>
            <p className="text-neutral-400 mb-6" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
              My approach combines technical excellence with creative problem-solving. I'm dedicated to building intuitive user experiences that not only look beautiful but also perform flawlessly across all devices.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <div className="bg-neutral-900 px-4 py-2 rounded-full text-sm">
                <span className="text-yellow-300">Location:</span> New York, USA
              </div>
              <div className="bg-neutral-900 px-4 py-2 rounded-full text-sm">
                <span className="text-yellow-300">Available for:</span> Freelance
              </div>
              <div className="bg-neutral-900 px-4 py-2 rounded-full text-sm">
                <span className="text-yellow-300">Experience:</span> 5+ Years
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Technical Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-neutral-300">{skill.name}</span>
                  <span className="text-yellow-300">{skill.level}%</span>
                </div>
                <div className="w-full bg-neutral-800 rounded-full h-2.5">
                  <div 
                    className="bg-yellow-400 h-2.5 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-yellow-400/30">
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-yellow-400"></div>
                <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                <div className="flex flex-wrap items-center gap-2 mb-2 mt-1">
                  <span className="text-yellow-300">{exp.company}</span>
                  <span className="text-neutral-500">|</span>
                  <span className="text-neutral-400">{exp.period}</span>
                </div>
                <p className="text-neutral-400" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <BackgroundBeams />
    </div>
  );
}