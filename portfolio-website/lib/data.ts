import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
// import corpcommentImg from "@/public/corpcomment.png";
// import rmtdevImg from "@/public/rmtdev.png";
// import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "SDE-1 @Alferix Inc",
    location: "Coimbatore, India",
    description:
      "Built core modules for an enterprise compliance platform using Next.js, Nest.js, and MongoDB. Diagnosed bottlenecks, applied targeted indexing (44% faster load times), and shipped frontend features for an Azure-hosted platform.",
    icon: React.createElement(CgWorkAlt),
    date: "Sep 2024 - Current",
  },
  {
    title: "Frontend Developer @Curious Ecosystem",
    location: "Remote",
    description:
      "Implemented API integrations with Axios, dynamic routing with React Router, and robust Redux state management. Coordinated feature delivery with backend teams and designed Figma prototypes.",
    icon: React.createElement(FaReact),
    date: "Aug 2023 - Sep 2024",
  },
  {
    title: "Bachelors of Computer Science",
    location: "Mysuru, India",
    description:
      "Graduated from Maharaja Institute of Technology, Mysore with an 8 CGPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2024",
  },

] as const;

export const projectsData = [
  {
    title: "RehearseMe",
    description:
      "Agentic Interview Preparation Simulator. Architected a real-time AI mock interview engine using FastAPI and WebSockets. Engineered a targeted RAG pipeline (LangChain, pgvector, OpenAI) to extract context from user resumes and calculate automated performance scores.",
    tags: ["FastAPI", "Python", "WebSockets", "LangChain", "OpenAI", "React", "Next.js"],
    demoUrl: "https://rehearseme.vercel.app/",
    githubUrl: "https://github.com/Sriramkashyapks/rehearseme",
  },
  {
    title: "NitroLink",
    description:
      "Intent-Based Liquidity Engine abstracting cross-chain complexity. Features a 'Rapid Zap' teleporter via LI.FI SDK and a 'Flash Stream' off-chain State Channel via NestJS WebSockets for high-frequency value transfers, settling on Base Sepolia.",
    tags: ["Next.js", "Tailwind", "LI.FI SDK", "NestJS", "Socket.io", "Wagmi", "MongoDB"],
    demoUrl: "https://nitrolink-web.vercel.app/",
    githubUrl: "https://github.com/Sriramkashyapks/nitrolink",
  },
  {
    title: "Stakra",
    description:
      "Decentralized lending protocol providing non-custodial credit lines and Buy Now, Pay Later (BNPL) functionality on the BNB Chain. Leverages isolated smart vaults and a proprietary ZK-verified price oracle for secure collateral management.",
    tags: ["Next.js", "Solidity", "Smart Contracts", "DeFi", "BNB Chain"],
    demoUrl: "https://stakra.vercel.app/",
    githubUrl: "https://github.com/Sneekyboots/Stakra",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Zustand",
  "Tailwind CSS",
  "Node.js",
  "Nest.js",
  "REST APIs",
  "WebSockets",
  "GraphQL",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Azure",
  "LangChain",
  "OpenAI API",
  "RAG",
  "Jest",
  "Git",
  "Postman",
  "Figma",
] as const;
