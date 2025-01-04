"use client"

import { motion } from "framer-motion"
import { ResumeData } from "@/lib/resume"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects({ projects }: { projects: ResumeData['projects'] }) {
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <Link href={project.link} target="_blank" className="text-muted-foreground hover:text-primary">
                  <ExternalLink className="h-5 w-5" />
                </Link>
              </div>
              <p className="mt-2 text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground">
                    • {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}