"use client"

import { motion } from "framer-motion"
import { ResumeData } from "@/lib/resume"
import { Award, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Certifications({ certifications }: { certifications: ResumeData['certifications'] }) {
  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Certifications</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <div className="flex items-start gap-4">
                <Award className="h-6 w-6 text-primary shrink-0" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{cert.name}</h3>
                  <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mt-2">Issued: {cert.date}</p>
                  <Link 
                    href={cert.link} 
                    target="_blank"
                    className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}