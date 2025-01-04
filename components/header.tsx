"use client";

import { motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { ResumeData } from "@/lib/resume";

export function Header({ personal }: { personal: ResumeData["personal"] }) {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="text-lg font-semibold">
            {personal.name}
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href={`https://github.com/${personal.social.github}`}
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href={`https://linkedin.com/in/${personal.social.linkedin}`}
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link
            href={`https://twitter.com/${personal.social.twitter}`}
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <Twitter className="h-5 w-5" />
            </Button>
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </motion.header>
  );
}
