"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
};

const float: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  const { content } = useLanguage();

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-24 max-w-5xl mx-auto pb-20"
    >
      {/* Hero Section */}
      <motion.section variants={item} className="space-y-8 pt-10 sm:pt-20">
        <div className="space-y-4">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            className="relative w-48 h-48 sm:w-64 sm:h-64 mb-6 rounded-full overflow-hidden border-4 border-white/80 shadow-2xl"
          >
            <Image
              src={content.contact.avatarUrl || "/me.jpg"}
              alt={content.name}
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          <motion.div animate="animate" variants={float}>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tighter text-transparent bg-clip-text bg-[image:var(--accent-gradient)] drop-shadow-sm pb-2">
              {content.name}
            </h1>
          </motion.div>
          <h2 className="text-3xl sm:text-4xl font-medium text-slate-700">
            {content.title}
          </h2>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-slate-600 font-medium text-base sm:text-lg">
          <span className="flex items-center gap-2 px-3 py-1 bg-white/40 rounded-full border border-white/50 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-pulse"></span>
            {content.contact.location}
          </span>
          <a href={`mailto:${content.contact.email}`} className="flex items-center gap-2 px-3 py-1 bg-white/40 rounded-full border border-white/50 backdrop-blur-sm hover:bg-white/60 hover:text-orange-600 transition-all cursor-pointer">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
            {content.contact.email}
          </a>
        </div>

        <p className="text-xl sm:text-2xl leading-relaxed text-slate-700 max-w-3xl font-light">
          {content.about}
        </p>
      </motion.section>

      {/* Tech Stack & Expertise */}
      <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-8">
          <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3 text-slate-800">
            <div className="h-1 w-8 bg-orange-500 rounded-full"></div>
            <span>{content.ui.expertise}</span>
          </h3>
          <div className="flex flex-wrap gap-3">
            {content.expertise.map((skill, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-5 py-2.5 bg-white/70 backdrop-blur-md border border-white/60 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 hover:bg-white transition-all cursor-default"
              >
                {skill.icon && <skill.icon className="text-orange-500 text-lg" />}
                <span className="font-semibold text-slate-700">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h3 className="text-2xl font-bold tracking-tight flex items-center gap-3 text-slate-800">
            <div className="h-1 w-8 bg-rose-500 rounded-full"></div>
            <span>{content.ui.techStack}</span>
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-4 sm:gap-6">
            {content.techStack?.map((tech, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-slate-100 group-hover:shadow-lg group-hover:border-orange-200 transition-all duration-300">
                  {tech.icon && <tech.icon className="text-3xl text-slate-600 group-hover:text-orange-500 transition-colors transform group-hover:scale-110 duration-300" />}
                </div>
                <span className="text-xs font-bold text-slate-500 group-hover:text-orange-600 transition-colors text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section variants={item} id="experience" className="space-y-10">
        <div className="flex items-center gap-4">
          <h3 className="text-3xl font-black tracking-tighter text-slate-900">
            {content.ui.experience}
          </h3>
          <div className="h-px bg-gradient-to-r from-slate-200 to-transparent flex-1"></div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {content.experience.map((job, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="group relative bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl hover:border-orange-100 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="text-9xl font-black text-orange-900 pointer-events-none select-none">
                  0{idx + 1}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 gap-2 relative z-10">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-rose-600 transition-all">{job.title}</h4>
                </div>
                <span className="inline-block px-4 py-1.5 bg-orange-50 text-orange-700 rounded-full text-sm font-bold tracking-wide shadow-sm border border-orange-100">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-4 relative z-10">
                {job.description.map((desc, dIdx) => (
                  <li key={dIdx} className="flex items-start gap-3 text-slate-600 leading-relaxed font-medium">
                    <span className="mt-2.5 w-1.5 h-1.5 rounded-sm bg-orange-400 shrink-0 rotate-45 group-hover:rotate-180 transition-transform duration-500"></span>
                    <span>{desc}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education & Achievements Grid */}
      <motion.section variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
        {/* Education */}
        <motion.div
          id="education"
          whileHover={{ y: -4 }}
          className="bg-white/70 backdrop-blur-md p-8 sm:p-10 rounded-3xl border border-white/60 shadow-sm hover:shadow-xl transition-all"
        >
          <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-2xl text-orange-600">
            🎓
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">{content.ui.education}</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-bold text-orange-600">{content.education.degree}</h4>
              <p className="text-slate-700 font-semibold text-lg">{content.education.school}</p>
              <p className="text-slate-500 text-sm mt-1">{content.education.period}</p>
            </div>

            <div className="h-px bg-slate-100 w-full my-4"></div>

            <ul className="space-y-2">
              {content.education.details.map((detail, idx) => (
                <li key={idx} className="text-slate-600 text-sm flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-slate-300"></div>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Key Achievements */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-gradient-to-br from-orange-500 via-rose-600 to-violet-600 p-8 sm:p-10 rounded-3xl shadow-xl text-white relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-rose-500/20 rounded-full blur-2xl"></div>

          <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 text-2xl">
            🏆
          </div>
          <h3 className="text-2xl font-bold text-white mb-6">{content.ui.keyAchievements}</h3>
          <ul className="space-y-5 relative z-10">
            {content.keyAchievements.map((item, idx) => (
              <li key={idx} className="flex gap-4 items-start">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center shrink-0 font-bold text-xs mt-0.5 border border-white/30">
                  {idx + 1}
                </div>
                <span className="text-indigo-50 font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <motion.footer variants={item} className="pt-10 text-center">
        <div className="inline-block px-4 py-2 rounded-full bg-white/30 backdrop-blur-md border border-white/40 text-slate-500 text-sm font-medium">
          © {new Date().getFullYear()} {content.name} • {content.ui.footer}
        </div>
      </motion.footer>
    </motion.div>
  );
}
