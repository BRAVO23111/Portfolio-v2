"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";



export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <div className="max-w-2xl mx-auto p-4 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          Hi, I&apos;m Debanjan Mukherjee
        </h1>
        <ContainerTextFlip
      words={["Software Engineer", "Full Stack Developer", "Backend Developer"]}
      className="my-4 font-sans text-2xl md:text-3xl font-semibold text-yellow-300 text-center justify-center items-center"
      style={{ fontFamily: 'Nunito Sans, sans-serif' }}
    />
        <p className="text-neutral-400 mx-auto my-2 text-lg text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          I build beautiful, performant web applications and digital experiences.
        </p>
        <p className="text-neutral-400 max-w-lg mx-auto my-2 text-lg text-center" style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
          Let&apos;s work together to create something amazing!
        </p>
        <div className="flex justify-center mt-6">
          <Link href="/projects" className="bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">View My Projects</Link>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="text-3xl hover:text-yellow-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-3xl hover:text-yellow-400 transition" />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)">
            <FaXTwitter className="text-3xl hover:text-yellow-400 transition" />
          </a>
        </div>
      </div>
      <BackgroundBeams/>
 


    </div>
  );
}
