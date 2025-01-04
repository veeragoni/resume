"use client";

import { motion } from "framer-motion";
import { ResumeData } from "@/lib/resume";
import Image from "next/image";

export function Hero({
  personal,
  summary,
}: {
  personal: ResumeData["personal"];
  summary: string;
}) {
  return (
    <section className="min-h-screen pt-16 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {personal.name}
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              {personal.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">{summary}</p>
            <div className="flex gap-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90"
                >
                  Contact Me
                </a>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="/resume.pdf"
                  className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  Download CV
                </a>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square rounded-full border-0 border-muted"
          >
            <div className="absolute w-1/2 h-1/2 top-1/4 left-1/4">
              {" "}
              {/* Added wrapper div */}
              <Image
                src={personal.avatar}
                alt={personal.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
