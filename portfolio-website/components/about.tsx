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
        I'm a passionate <span className="font-medium text-lg">Frontend Developer</span> with a strong focus on{" "}
        <span className="font-medium text-md">UI/UX design and building the same</span> for creating accessible, performance-optimized web experiences. 
        I've built impactful projects like an eye-controlled virtual keyboard to help differently-abled individuals, 
        and contributed to social causes through my work with the{" "}
        <span className="font-medium">Soul of Braj Federation</span>. My current stack includes{" "}
        <span className="font-medium">React JS, Tailwind CSS, JavaScript</span>, 
        and I’m constantly exploring new technologies and frameworks.
      </p>

      <p className="mb-3">
        <span className="italic">What excites me most</span> is transforming ideas into interactive user experiences. 
        I enjoy contributing to open-source, collaborating on meaningful projects, and always strive for clean, maintainable code. 
        I've also explored areas like <span className="font-medium">computer vision with Python and OpenCV</span>, 
        and have hands-on experience with <span className="font-medium">Git, GitHub, MongoDB, and AWS</span>.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I’ll be usually attending tech events, gaming, or 
        working on side projects with my team.
      </p>
    </motion.section>
  );
}
