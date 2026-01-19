import { useRef } from "react";
import { useTransform, motion } from "framer-motion";
import Meteors from "@/components/ui/meteors";
import { Github, Video, Globe } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


export default function ProjectCard({
  i,
  title,
  detailSlides,
  slides,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  demoLink,
})
 {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  const LinkButton = ({ href, icon: Icon, label, disabled }) => {
    if (disabled) {
      return (
        <div className="group flex items-center gap-2 opacity-30 cursor-not-allowed">
          <Icon size={20} className="text-muted-foreground" />
          <span className="text-xs md:text-sm font-medium text-muted-foreground">
            {label}
          </span>
        </div>
      );
    }

    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2"
        whileHover={{ y: -3 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <Icon size={20} style={{ color }} />
        <span className="text-xs md:text-sm font-medium" style={{ color }}>
          {label}
        </span>
      </motion.a>
    );
  };

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Meteors Effect */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
          <Meteors number={10} />
        </div>

        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-card rounded-2xl overflow-hidden shadow-xl border border-border/50">
          {/* Image section */}
          {/* Left Swiper Section */}
<div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
  <Swiper
    modules={[Pagination, Mousewheel]}
    pagination={{ clickable: true }}
    mousewheel
    className="w-full h-full"
  >
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <motion.img
          src={slide.image}
          alt={slide.caption || title}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        />

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: color,
            mixBlendMode: "overlay",
            opacity: 0.25,
          }}
        />

        {/* Caption */}
        {slide.caption && (
          <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs text-center w-40 md:text-sm px-3 py-2 rounded-lg">
            {slide.caption}
          </div>
        )}
      </SwiperSlide>
    ))}
  </Swiper>

  {/* Project Number */}
  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium z-10">
    Project {i + 1}
  </div>
</div>


          {/* Content section */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-muted-foreground/30" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-2 md:mb-4">
                {title}
              </h2>

             <div className="right-panel-swiper relative flex h-full">
  <Swiper
    modules={[Pagination]}
    pagination={{ clickable: true }}
    className="description-swiper flex-1"
  >

  {detailSlides.map((slide, index) => (
    <SwiperSlide key={index}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h3
          className="text-lg md:text-xl font-semibold mb-3"
          style={{ color }}
        >
          {slide.title}
        </h3>

        <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line max-w-md">
          {slide.text}
        </p>
      </motion.div>
    </SwiperSlide>
  ))}
</Swiper>
</div>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-border mb-4 md:mb-6" />

              <div className="flex items-center gap-6">
                <LinkButton
                  href={githubLink}
                  icon={Github}
                  label="Code"
                  disabled={!githubLink}
                />
                <LinkButton
                  href={demoLink}
                  icon={Video}
                  label="Demo"
                  disabled={!demoLink}
                />
                <LinkButton
                  href={liveLink}
                  icon={Globe}
                  label="Live"
                  disabled={!liveLink}
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
