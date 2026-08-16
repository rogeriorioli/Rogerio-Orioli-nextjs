"use client";

import { motion } from "framer-motion";

export function AnimatedHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center gap-8 text-center"
    >
      <motion.div
        animate={{ rotate: [0, 4, -4, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300"
      >
        Next.js + Framer Motion
      </motion.div>
      <div className="space-y-4">
        <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-zinc-950 sm:text-7xl dark:text-white">
          Build interfaces that feel alive.
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          A clean Next.js starter with smooth, expressive motion ready to go.
        </p>
      </div>
      <motion.a
        href="https://motion.dev/docs/react-quick-start"
        target="_blank"
        rel="noreferrer"
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className="rounded-full bg-zinc-950 px-6 py-3 font-medium text-white shadow-lg shadow-zinc-950/20 dark:bg-white dark:text-zinc-950"
      >
        Explore Motion
      </motion.a>
    </motion.div>
  );
}
