import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";

import { Code2, Paintbrush, Database, Layout, Cpu, Cloud, DatabaseZap, FileAxis3D, Gpu, PowerIcon, ComputerIcon } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
  FaVuejs,
  FaLaravel,
  FaPhp,
  FaFlask,
  FaTag,
  FaServer,
  FaPlug,
  FaTrain,
  FaLink,
  FaNetworkWired,
  FaObjectGroup,
  FaObjectUngroup,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
  SiBootstrap,
  SiJavascript,
  SiLivewire,
  SiMysql,
  SiSqlite,
  SiScrapy,
  SiSelenium,
  SiScopus,
  SiPwa,
  SiKeras,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiWorkplace,
  SiLine,
  SiCnn,
  SiNewyorktimes,
  SiTensorflow,
  SiOpencv,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "Vue", icon: <FaVuejs className="w-4 h-4 text-[#42B883]" /> },
        {
          name: "Javascript",
          icon: <SiJavascript className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "Bootstrap",
          icon: <SiBootstrap className="w-4 h-4 text-[#7952B3]" />,
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Livewire",
          icon: <SiLivewire className="w-4 h-4 text-[#F38971]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Larvel",
          icon: <FaLaravel className="w-4 h-4 text-[#FF2D20]" />,
        },
        {
          name: "Php",
          icon: <FaPhp className="w-4 h-4 text-white" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
         {
          name: "Flask",
          icon: <FaFlask className="w-4 h-4 text-[#fffff]" />,
        },
        {
          name: "MySQL",
          icon: <SiMysql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "SQLite",
          icon: <SiSqlite className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },  
        {
          name: "Docker",
          icon: <FaDocker className="w-4 h-4 text-[#1D63ED]" />,
        },  
      ],
    },
    {
      icon: DatabaseZap,
      title: "Data Scrapping",
      color: "text-purple-400",
      skills: [
                { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },

                        { name: "Scrapy", icon: <SiScrapy className="w-4 h-4 text-[#00A5FA]" /> },
                { name: "Selenium", icon: <SiSelenium className="w-4 h-4 text-[#01A71C]" /> },
                { name: "Beautiful Soup", icon: <FaPython className="w-4 h-4 text-[#ffffff]" /> },
                { name: "PlayWright", icon: <FaPython className="w-4 h-4 text-[#ffffff]" /> },
                { name: "DrissionPage", icon: <FaPython className="w-4 h-4 text-[#ffffff]" /> },
                { name: "Api Integration", icon: <FaPlug className="w-4 h-4 text-[#FF6C37]" /> },
                { name: "Proxy Servers", icon: <FaServer className="w-4 h-4 text-[#0D6EFD]" /> },
      ],
    },
    {
      icon: Cpu,
      title: "Machine Learning",
      color: "text-orange-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },
       
        { name: "Keras", icon: <SiKeras className="w-4 h-4 text-[#D00000]" /> },
        {
          name: "Scikit-learn",
          icon: <SiScikitlearn className="w-4 h-4 text-[#F89939]" />,
        },
        { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#152199]" /> },
        { name: "Numpy", icon: <SiNumpy className="w-4 h-4 text-[#4D77CF]" /> },
        { name: "Model Training", icon: <FaTrain className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Evaluation", icon: <FaLink className="w-4 h-4 text-[#C3B091]" /> },
        { name: "Visualization", icon: <FileAxis3D className="w-4 h-4 text-[#FCC624]" /> },

      ],
    },
    {
      icon: Gpu,
      title: "Deep Learning",
      color: "text-pink-400",
      skills: [
        { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },

        {
          name: "Tensorflow",
          icon: <SiTensorflow className="w-4 h-4 text-[#FF6F00]" />,
        },
                 { name: "Keras", icon: <SiKeras className="w-4 h-4 text-[#D00000]" /> },

       { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#152199]" /> },
        { name: "Numpy", icon: <SiNumpy className="w-4 h-4 text-[#4D77CF]" /> },
        { name: "Model Training", icon: <FaTrain className="w-4 h-4 text-[#2496ED]" /> },
        { name: "Evaluation", icon: <FaLink className="w-4 h-4 text-[#C3B091]" /> },
        { name: "Visualization", icon: <FileAxis3D className="w-4 h-4 text-[#FCC624]" /> },
        { name: "Neural Networks", icon: <FaNetworkWired className="w-4 h-4 text-[#008080]" /> },

      ],
    },
    {
      icon: ComputerIcon,
      title: "Computer Vision",
      color: "text-yellow-400",
      skills: [
               { name: "Python", icon: <FaPython className="w-4 h-4 text-[#3776AB]" /> },

            { name: "Pandas", icon: <SiPandas className="w-4 h-4 text-[#152199]" /> },
        { name: "Numpy", icon: <SiNumpy className="w-4 h-4 text-[#4D77CF]" /> },
        { name: "OpenCV", icon: <SiOpencv className="w-4 h-4 text-[#FCC624]" /> },
             { name: "Model Training", icon: <FaTrain className="w-4 h-4 text-[#2496ED]" /> },
             { name: "Evaluation", icon: <FaLink className="w-4 h-4 text-[#C3B091]" /> },
             { name: "Visualization", icon: <FileAxis3D className="w-4 h-4 text-[#FCC624]" /> },
             { name: "Object Detection", icon: <FaObjectUngroup className="w-4 h-4 text-[#008080]" /> },
             
             { name: "Neural Networks", icon: <FaNetworkWired className="w-4 h-4 text-[#008080]" /> },
             { name: "YOLO", icon: <FaPython className="w-4 h-4 text-[#fffff]" /> },

      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
