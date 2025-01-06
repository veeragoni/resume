"use client";

import { ResumeData } from "@/lib/resume";
import { motion } from "framer-motion";
import { Copy } from "lucide-react";
import { useState } from "react";

export function Contact({ personal }: { personal: ResumeData["personal"] }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="text-lg">{personal.email}</span>
            <button
              onClick={handleCopyClick}
              className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              title="Copy email"
            >
              <Copy size={16} />
            </button>
            {copied && (
              <span className="text-sm text-muted-foreground">Copied!</span>
            )}
          </div>
          <div className="flex justify-center gap-4">
            {personal.social &&
              Object.entries(personal.social).map(([platform, username]) => (
                <a
                  key={platform}
                  href={`https://${platform}.com/${username}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {/* {platform.charAt(0).toUpperCase() + platform.slice(1)} */}
                </a>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
