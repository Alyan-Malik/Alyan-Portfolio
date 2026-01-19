import { useRef } from "react";
import { useScroll } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function ProjectSection({
  title,
  subtitle,
  projects,
  accentColor,
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="bg-background">
      {/* Section Header */}
      <div className="sticky top-0 z-10 py-12 md:py-20 px-6 md:px-12 bg-gradient-to-b from-background via-background to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div
              className="w-4 h-4 rounded-full animate-pulse"
              style={{ backgroundColor: accentColor }}
            />
            <div
              className="h-[2px] w-16 md:w-24"
              style={{ backgroundColor: accentColor }}
            />
          </div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2">
            {title}
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Project Cards */}
      <div className="relative">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;

          return (
            <ProjectCard
  key={`${title}_${i}`}
  i={i}
  slides={project.slides}
  title={project.title}
  color={project.color}
 detailSlides={project.detailSlides}
  progress={scrollYProgress}
  range={[i * (1 / projects.length), 1]}
  targetScale={targetScale}
  githubLink={project.githubLink}
  liveLink={project.liveLink}
  demoLink={project.demoLink}
/>

          );
        })}
      </div>
    </section>
  );
}
