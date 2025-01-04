"use client"

import { motion } from "framer-motion"
import { ResumeData } from "@/lib/resume"
import { GraduationCap, Calendar } from "lucide-react"

export function Education({ education }: { education: ResumeData['education'] }) {
  return (
    <section id="education" className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{edu.degree}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mt-1">
                    <GraduationCap className="h-4 w-4" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
              </div>
              <p className="mt-2 text-muted-foreground">GPA: {edu.gpa}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}