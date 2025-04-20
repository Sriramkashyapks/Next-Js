"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  link,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.98, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mb-6 last:mb-0 max-w-3xl mx-auto w-full"
    >
      <section className="bg-gray-50 dark:bg-white/10 border border-black/5 rounded-xl p-6 w-full">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-blue-100 hover:bg-blue-200 text-blue-700 transition"
            >
              <HiOutlineEye className="text-lg" />
              View
            </a>
          )}
        </div>
        <p className="mb-6 mt-6 text-gray-700 dark:text-white/70">{description}</p>
        <ul className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              className="bg-gray-200 dark:bg-black/40 px-3 py-1 text-xs uppercase tracking-wider text-gray-800 dark:text-white/70 rounded-full"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
    </motion.div>
  );
}