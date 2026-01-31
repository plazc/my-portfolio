"use client";

import { resume } from "@/data/resume";
import Link from "next/link";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-20 max-w-5xl mx-auto"
    >
      {/* Hero Section */}
      <motion.section variants={item} className="space-y-6 pt-10">
        <div className="space-y-2">
          <h1 className="text-5xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-[image:var(--accent-gradient)] drop-shadow-sm">
            {resume.name}
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium text-neutral-800">
            {resume.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-neutral-600 font-medium text-sm sm:text-base">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {resume.contact.location}
          </span>
          <a href={`mailto:${resume.contact.email}`} className="hover:text-accent transition-colors flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {resume.contact.email}
          </a>
          {/* Socials can be added here if needed */}
        </div>

        <p className="text-xl sm:text-2xl leading-relaxed text-neutral-700 max-w-3xl font-light">
          {resume.about}
        </p>
      </motion.section>

      {/* Tech Stack & Expertise */}
      <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <span className="h-px bg-neutral-300 flex-1"></span>
            <span>Expertise</span>
            <span className="h-px bg-neutral-300 flex-1"></span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {resume.expertise.map((skill, idx) => (
              <div key={idx} className="flex items-center gap-2 px-4 py-2 bg-white/50 backdrop-blur-sm border border-orange-100 rounded-full shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-default">
                {skill.icon && <skill.icon className="text-accent text-lg" />}
                <span className="font-medium text-neutral-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3">
            <span className="h-px bg-neutral-300 flex-1"></span>
            <span>Tech Stack</span>
            <span className="h-px bg-neutral-300 flex-1"></span>
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
            {resume.techStack?.map((tech, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 group">
                <div className="w-14 h-14 flex items-center justify-center bg-white rounded-xl shadow-sm border border-orange-50 group-hover:scale-110 group-hover:shadow-md group-hover:border-orange-200 transition-all duration-300">
                  {tech.icon && <tech.icon className="text-3xl text-neutral-700 group-hover:text-accent transition-colors" />}
                </div>
                <span className="text-xs font-semibold text-neutral-500 group-hover:text-accent transition-colors">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section variants={item} id="experience" className="space-y-10">
        <h3 className="text-3xl font-black tracking-tighter text-neutral-900 border-l-8 border-accent pl-6">
          Professional Experience
        </h3>
        <div className="grid grid-cols-1 gap-8">
          {resume.experience.map((job, idx) => (
            <div key={idx} className="group relative bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-xl hover:border-orange-200 transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2">
                <h4 className="text-xl font-bold text-neutral-900 group-hover:text-accent transition-colors">{job.title}</h4>
                <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-bold tracking-wide shadow-inner">
                  {job.period}
                </span>
              </div>
              <ul className="space-y-3">
                {job.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-neutral-700 leading-relaxed">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0 group-hover:scale-150 transition-transform"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Education & Achievements Grid */}
      <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Education */}
        <div id="education" className="bg-white/60 backdrop-blur-md p-8 rounded-3xl border border-orange-100 shadow-sm hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold uppercase tracking-wider text-accent mb-6">Education</h3>
          <div>
            <h4 className="text-lg font-bold text-neutral-900">{resume.education.degree}</h4>
            <p className="text-neutral-600 font-medium mb-4">{resume.education.school}</p>
            <div className="inline-block px-3 py-1 bg-neutral-100 text-neutral-600 rounded-lg text-sm font-mono mb-6">
              {resume.education.period}
            </div>
            <ul className="space-y-2">
              {resume.education.details.map((detail, idx) => (
                <li key={idx} className="text-neutral-700 text-sm">{detail}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Key Achievements */}
        <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-8 rounded-3xl shadow-lg text-white">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-6 text-orange-100">Key Achievements</h3>
          <ul className="space-y-6">
            {resume.keyAchievements.map((item, idx) => (
              <li key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold text-sm">
                  {idx + 1}
                </div>
                <span className="text-orange-50 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer variants={item} className="pb-20 pt-10 text-center text-neutral-400 text-sm">
        <p>© {new Date().getFullYear()} {resume.name}. Built with Next.js & Tailwind.</p>
      </motion.footer>
    </motion.div>
  );
}
