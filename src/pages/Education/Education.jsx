import React, { useState } from "react";
import Meteors from "@/components/ui/meteors";
import {
  Award,
  Calendar,
  BookOpen,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      degree: "Bachelor's in Software Engineering",
      school: "COMSATS University Islamabad, Wah Campus",
      year: "2021 – 2025",
      achievements: ["CGPA: 3.00"],
      skills: [
        "Full Stack Development",
        "Machine Learning",
        "Problem Solving",
      ],
      description:
        "Built a strong foundation in software engineering, data structures, web technologies, and intelligent systems while working on real-world academic and personal projects.",
    },
  ];

  return (
    <section className="relative min-h-screen py-32 bg-[#04081A] overflow-hidden">
      {/* Meteors */}
      <div className="absolute inset-0 pointer-events-none">
        <Meteors number={12} />
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[length:40px_40px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            A journey of structured learning, problem solving, and technical
            growth.
          </p>
        </motion.div>

        {/* Centered Card */}
        <div className="flex justify-center">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative w-full max-w-3xl rounded-2xl p-8 md:p-10 
                bg-gray-900/60 backdrop-blur-xl border 
                transition-all duration-300
                ${
                  hoveredIndex === index
                    ? "border-teal-400 shadow-2xl shadow-teal-500/20 scale-[1.02]"
                    : "border-white/10"
                }`}
            >
              {/* Degree Header */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-teal-500/10">
                    <GraduationCap className="w-7 h-7 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-400 flex items-center gap-2 mt-1">
                      <BookOpen className="w-4 h-4 text-teal-400" />
                      {edu.school}
                    </p>
                  </div>
                </div>

                {/* Year Badge */}
                <span className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-full bg-blue-500/10 text-blue-400">
                  <Calendar className="w-4 h-4" />
                  {edu.year}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed border-l-2 border-teal-400 pl-4 italic">
                {edu.description}
              </p>

              {/* Achievements */}
              <div className="mt-8">
                <h4 className="flex items-center gap-2 text-white font-semibold mb-3">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  Achievements
                </h4>
                <div className="flex flex-wrap gap-3">
                  {edu.achievements.map((item, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 px-4 py-1.5 text-sm rounded-full 
                      bg-teal-500/10 text-teal-400"
                    >
                      <Award className="w-4 h-4" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Skills */}
              <div className="mt-8 flex flex-wrap gap-2">
                {edu.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-md 
                    bg-blue-500/10 text-blue-300 border border-blue-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
