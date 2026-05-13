"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm a <span className="font-medium text-lg">Full Stack Engineer (SDE-1)</span> with nearly 2 years of experience building and maintaining production systems.
        I specialize in <span className="font-medium">React, Next.js, Nest.js, and MongoDB</span>. I've delivered scalable features,
        resolved live production issues, and optimized application performance to improve user experience. My current focus is on{" "}
        <span className="font-medium">system design and AI-integrated tooling</span> following agile methodology.
      </p>

      <p className="mb-3">
        <span className="italic">My core skills</span> include JavaScript, TypeScript, Node.js, Next.js, Mongo DB .
        I am also actively working with <span className="font-medium">AI/ML technologies</span> such as LangChain, OpenAI API, and RAG pipelines.
        I'm always eager to learn and implement new technologies to build robust and efficient systems.
      </p>

      <p>
        <span className="italic">In my free time</span>, I usually attending tech events do gaming, or rome around to explore world beneath us.
      </p>
    </motion.section>
  );
}
