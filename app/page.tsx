import { getResumeData } from '@/lib/resume'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Experience } from '@/components/sections/experience'
import { Education } from '@/components/sections/education'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from "@/components/contact";

export default function Home() {
  const resumeData = getResumeData()
  
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header personal={resumeData.personal} />
      <Hero personal={resumeData.personal} summary={resumeData.summary} />
      <Experience experience={resumeData.experience} />
      <Education education={resumeData.education} />
      <Skills skills={resumeData.skills} />
      <Projects projects={resumeData.projects} />
      <Certifications certifications={resumeData.certifications} />
      <Contact personal={resumeData.personal} />
    </main>
  )
}