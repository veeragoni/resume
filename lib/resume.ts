import { readFileSync } from 'fs';
import { join } from 'path';
import yaml from 'js-yaml';

export interface ResumeData {
  personal: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    avatar: string;
    social: {
      github: string;
      linkedin: string;
      twitter: string;
    };
  };
  summary: string;
  experience: Array<{
    company: string;
    position: string;
    location: string;
    period: string;
    highlights: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    location: string;
    period: string;
    gpa: number;
  }>;
  skills: {
    technical: Array<{
      category: string;
      items: Array<{
        name: string;
        level: number;
      }>;
    }>;
    soft: string[];
  };
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link: string;
    highlights: string[];
  }>;
  certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    link: string;
  }>;
}

export function getResumeData(): ResumeData {
  const filePath = join(process.cwd(), 'data', 'resume.yaml');
  const fileContents = readFileSync(filePath, 'utf8');
  return yaml.load(fileContents) as ResumeData;
}