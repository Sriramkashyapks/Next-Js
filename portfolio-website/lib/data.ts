import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor of Engineering",
    location: "Mysore, India",
    description:
      "I graduated with a Bachelor's Degree in the filed of Computer Science and Engineering from MIT Mysore college.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2020 - Jun 2024",
  },
  {
    title: "Software Engineer Trainee",
    location: "Coimbatore, India",
    description:
      "I worked as a Frontend Developer for 6 months and was promoted to Software Engineer. During this time, I contributed to projects involving React as a frontend developer.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Mar 2025",
  },
  {
    title: "Software Developer",
    location: "Coimbatore, India",
    description:
      "I’m currently working with Next.js and NestJS on an upcoming project, and I'm looking forward to exploring more on both the frontend and backend sides to further enhance my skills.",
    icon: React.createElement(FaReact),
    date: "Mar 2025 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Notes Application",
    description:
      "Developed an Android application using Java. The application features a customizable user interface, enabling users to personalize their experience with preferred colors and themes including quick search option.",
    tags: ["Java", "Android Studio"],
    link: "https://github.com/Sriramkashyapks/notes_app",
  },
  {
    title: "Disney Plus Clone",
    description:
      "I created a Disney clone web app, using Axios to fetch TMDb data using themovieorg, organizing movies by genre, and integrating Tailwind CSS styling.",
    tags: ["React", "Tailwind", "Redux", "Axios", "Figma"],
    link: "https://github.com/Sriramkashyapks/react/tree/main/Projects/DisneyPlusClone",
  },
  {
    title: "Eye Pointer Technology",
    description:
      "Developed an eye-controlled virtual keyboard using Python, enabling disabled users to communicate through real-time eye detection, blink key presses, gaze navigation, and audio feedback.",
    tags: ["Python", "OpenCV"],
    link: "https://github.com/Sriramkashyapks/Eye-Pointer-technology",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind CSS",
  "Redux",
  "Python",
  "Java",
  "Framer Motion",
  "Android Studio",
] as const;
