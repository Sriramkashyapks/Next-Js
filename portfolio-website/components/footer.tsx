import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-gray-500 text-sm">
      <small className="block text-xs mb-2">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-gray-700 dark:text-white">Sriram Kashyap</span>. All rights reserved.
      </small>

      <p className="text-xs mb-1">
        <span className="font-semibold">Crafted with ❤️ using</span>
      </p>
      <p className="text-xs">
        <span className="text-blue-600 dark:text-blue-400 font-medium">React</span>,{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">Next.js</span> (App Router + Server Actions),{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">TypeScript</span>,{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">Tailwind CSS</span>,{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">Framer Motion</span>, and{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">Resend</span>. Deployed on{" "}
        <span className="text-blue-600 dark:text-blue-400 font-medium">Vercel</span>.
      </p>
    </footer>
  );
}
