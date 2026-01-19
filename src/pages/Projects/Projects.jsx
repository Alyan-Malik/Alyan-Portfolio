// import { ReactLenis } from "lenis/react";
// import { useTransform, motion, useScroll } from "framer-motion";
// import { useRef, useEffect } from "react";
// import PropTypes from "prop-types";
// import Meteors from "@/components/ui/meteors";


// const projects = [
//   {
//     title: "eAuction",
//     description:
//       "The eAuction system is an online auction platform designed to connect buyers and sellers in a competitive and dynamic marketplace. This software facilitates the buying and selling of goods through real-time bidding, offering an alternative to traditional e-commerce platforms that rely on fixed pricing.This system is to empower buyers to secure lower prices through competitive bidding. 💻✨",
//     src: "rock.jpg",
//     link: "src/assets/images/eAuction.jpeg",
//     color: "#5196fd",
//     githubLink: "https://github.com/Alyan-Malik/eAuction-Docker-Laravel",
//     demoLink: "",
//     liveLink: "https://olova.js.org/",
//   },
//   {
//     title: "Reflector",
//     description:
//       "Reflector is a modern agency website designed to represent a tech-driven company offering digital transformation services. The purpose of the website is to professionally present Reflector’s core offerings, including chatbot development, Amazon seller solutions, custom software, and other AI-powered digital tools. 💻✨",
//     src: "tree.jpg",
//     link: "src/assets/images/reflector.jpeg",
//     color: "#8f89ff",
//     githubLink: "https://github.com/seraprogrammer/portfolio",
//     demoLink: "",
//     liveLink: "https://codervai.vercel.app",
//   },
//   {
//     title: "🚀 Utility Meter Reading",
//     description:
//       "AI based automated smart meter reading web app. I developed a smart Utility Meter Reading App that leverages machine learning, deep learning and computer vision to automatically detect and extract meter readings from both analog and digital utility meters. The system is designed to streamline the process of capturing meter data with high accuracy and minimal human input.  💻✨",
//     src: "water.jpg",
//     link: "src/assets/images/meter.jpg",
//     color: "#fff",
//     githubLink: "https://github.com/seraprogrammer/codewhisperer",
//     demoLink: "",
//     liveLink: "https://codewhisperer.vercel.app/",
//   },
//   {
//     title: "CodeKori 🔥",
//     description:
//       "CodeKori is a powerful online code editor built with React and Tailwind CSS. Featuring real-time code execution, syntax highlighting, multi-language support, and a sleek UI. Start coding instantly! 💻✨",
//     src: "house.jpg",
//     link: "https://i.postimg.cc/cHQr4fpR/Annotation-2025-04-01-205350.png",
//     color: "#ed649e",
//     githubLink: "https://github.com/seraprogrammer/CodeKori",
//     liveLink: "https://codekori.js.org",
//   },
// ];

// export default function Projects() {
//   const container = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   useEffect(() => {
//     // Add specific styles for 1366x768 resolution
//     const style = document.createElement("style");
//     style.textContent = `
//       @media screen and (width: 1366px) and (height: 768px),
//              screen and (width: 1367px) and (height: 768px),
//              screen and (width: 1368px) and (height: 769px) {
//         .project-card {
//           scale: 0.85;
//           margin-top: -5vh;
//         }
//         .project-container {
//           height: 90vh;
//         }
//       }
//     `;
//     document.head.appendChild(style);

//     // Resolution check function
//     const checkResolution = () => {
//       const isTargetResolution =
//         window.innerWidth >= 1360 &&
//         window.innerWidth <= 1370 &&
//         window.innerHeight >= 760 &&
//         window.innerHeight <= 775;

//       if (isTargetResolution) {
//         document.documentElement.style.setProperty("--project-scale", "0.85");
//         document.documentElement.style.setProperty("--project-margin", "-5vh");
//       } else {
//         document.documentElement.style.setProperty("--project-scale", "1");
//         document.documentElement.style.setProperty("--project-margin", "0");
//       }
//     };

//     checkResolution();
//     window.addEventListener("resize", checkResolution);

//     return () => {
//       document.head.removeChild(style);
//       window.removeEventListener("resize", checkResolution);
//     };
//   }, []);

//   return (
//     <ReactLenis root>
//       <main className="bg-black" ref={container}>
//         <section className="text-white w-full bg-slate-950">
//           {projects.map((project, i) => {
//             const targetScale = 1 - (projects.length - i) * 0.05;
//             return (
//               <Card
//                 key={`p_${i}`}
//                 i={i}
//                 url={project.link}
//                 title={project.title}
//                 color={project.color}
//                 description={project.description}
//                 progress={scrollYProgress}
//                 range={[i * 0.25, 1]}
//                 targetScale={targetScale}
//                 githubLink={project.githubLink}
//                 liveLink={project.liveLink}
//                 demoLink={project.demoLink}
//               />
//             );
//           })}
//         </section>
//       </main>
//     </ReactLenis>
//   );
// }

// function Card({
//   i,
//   title,
//   description,
//   url,
//   color,
//   progress,
//   range,
//   targetScale,
//   githubLink,
//   liveLink,
//   demoLink,
// }) {
//   const container = useRef(null);
//   const scale = useTransform(progress, range, [1, targetScale]);

//   return (
//     <div
//       ref={container}
//       className="h-screen flex items-center justify-center sticky top-0 project-container"
//     >
      
//       <motion.div
//         style={{
//           scale,
//           top: `calc(-5vh + ${i * 25}px)`,
//           transform: `scale(var(--project-scale, 1))`,
//           marginTop: "var(--project-margin, 0)",
//         }}
//         className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
//         whileHover={{
//           y: -8,
//           transition: { duration: 0.3 },
//         }}
//       >
//           {/* Meteors Effect */}
//                             <div className="absolute inset-0 overflow-hidden pointer-events-none">
//                               <Meteors number={10} />
//                             </div>
//         {/* Modern split card design */}
//         <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          
//           {/* Image section - full width on mobile, 55% on desktop */}
//           <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            
//             <motion.img
//               src={url}
//               alt={title}
//               className="w-full h-full object-cover"
//               initial={{ scale: 1 }}
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.4 }}
//             />

//             {/* Colored overlay on hover */}
//             <motion.div
//               className="absolute inset-0"
//               style={{ backgroundColor: color, mixBlendMode: "overlay" }}
//               initial={{ opacity: 0 }}
//               whileHover={{ opacity: 0.3 }}
//               transition={{ duration: 0.3 }}
//             />

//             {/* Project number */}
//             <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
//               Project {i + 1}
//             </div>
//           </div>

//           {/* Content section - full width on mobile, 45% on desktop */}
//           <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
//             <div>
//               <div className="flex items-center gap-3 mb-4 md:mb-6">
//                 <div
//                   className="w-2 h-2 md:w-3 md:h-3 rounded-full"
//                   style={{ backgroundColor: color }}
//                 />
//                 <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
//               </div>

//               <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
//                 {title}
//               </h2>
//               <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
//                 {description}
//               </p>
//             </div>

//             <div className="mt-4 md:mt-auto pt-4">
//               <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

//               <div className="flex items-center gap-4">
//                 {/* GitHub Link */}
//                 <motion.a
//                   href={githubLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-2"
//                   whileHover={{ y: -3 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke={color}
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
//                   </svg>
//                   <span
//                     className="text-xs md:text-sm font-medium"
//                     style={{ color }}
//                   >
//                     Code
//                   </span>
//                 </motion.a>

                
//                 {/* Demo Link */}
//                 <motion.a
//                   href={demoLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-2"
//                   whileHover={{ y: -3 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                  <svg
//                  xmlns="http://www.w3.org/2000/svg"
//                  width="24"
//                  height="24"
//                  viewBox="0 0 24 24"
//                  fill="none"
//                  stroke={color}
//                  strokeWidth="2"
//                  strokeLinecap="round"
//                  strokeLinejoin="round"
//                  >
//                   {/* Camera Body with modern rounded corners */}
//                   <rect x="2" y="7" width="14" height="10" rx="2" ry="2"></rect>
//                   {/* Lens/Viewfinder part */}
//                   <path d="M22 8l-6 4 6 4V8z"></path>
//                  </svg>

//                   <span
//                     className="text-xs md:text-sm font-medium"
//                     style={{ color }}
//                   >
//                     Demo
//                   </span>
//                 </motion.a>
                
                
//                 {/* Live Link */}
//                 <motion.a
//                   href={liveLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group flex items-center gap-2"
//                   whileHover={{ y: -3 }}
//                   transition={{ type: "spring", stiffness: 400 }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="22"
//                     height="22"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke={color}
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <circle cx="12" cy="12" r="10"></circle>
//                     <line x1="2" y1="12" x2="22" y2="12"></line>
//                     <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
//                   </svg>
//                   <span
//                     className="text-xs md:text-sm font-medium"
//                     style={{ color }}
//                   >
//                     Live
//                   </span>
//                 </motion.a>



                
//               </div>
//             </div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// // Add PropTypes validation
// Card.propTypes = {
//   i: PropTypes.number.isRequired,
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   color: PropTypes.string.isRequired,
//   progress: PropTypes.object.isRequired,
//   range: PropTypes.array.isRequired,
//   targetScale: PropTypes.number.isRequired,
//   githubLink: PropTypes.string.isRequired,
//   liveLink: PropTypes.string.isRequired,
//   demoLink: PropTypes.string.isRequired,

// };







import { ReactLenis } from "lenis/react";
import { motion } from "framer-motion";
import ProjectSection from "@/components/ProjectSection";
import Meteors from "@/components/ui/meteors";

// Web Development Projects
const webProjects = [
  {
  title: "eAuction",
  detailSlides: [
  {
    title: "Overview",
    text: "The eAuction system is an online auction platform designed to connect buyers and sellers in a competitive and dynamic marketplace. This software facilitates the buying and selling of goods through real-time bidding, offering an alternative to traditional e-commerce platforms.",
  },
  {
    title: "Key Features",
    text: "• Real-time bidding\n• Secure authentication\n• Admin dashboard\n• Dockerized deployment",
  },
  {
    title: "Tech Stack",
    text: "• Frontend: HTML5, CSS3, Bootstrap, Tailwind CSS, \u00A0 \u00A0Livewire, Vite\n• Backend: Laravel, MySQL, Docker, REST APIs",
  },
],
  slides: [
    {
      image: "src/assets/images/eAuction.jpeg",
      // caption: "Live bidding interface"
    },
    {
      image: "src/assets/images/eAuction2.jpeg",
      // caption: "System architecture"
    },
    {
      image: "src/assets/images/eAuction3.png",
      // caption: "Admin dashboard & analytics"
    }
  ],
  color: "#5196fd",
  githubLink: "https://github.com/Alyan-Malik/eAuction-Docker-Laravel",
  demoLink: "https://youtu.be/N7buk83mJr0?si=JCD3yd-TtBcVZz8W",
  liveLink: "https://auctions.codiro.cloud/"
},
  {
  title: "Reflector",
  detailSlides: [
  {
    title: "Overview",
    text: "Reflector is a modern agency website designed to represent a tech-driven company offering digital transformation services. The purpose of the website is to professionally present Reflector’s core offerings, including chatbot development, Amazon seller solutions, custom software.",
  },
  {
    title: "Key Features",
    text: "• Secure authentication\n• Admin dashboard\n• ChatBot",
  },
  {
    title: "Tech Stack",
    text: "• Frontend: HTML5, CSS3, Bootstrap\n• Backend: Laravel, MySQL, Docker, REST APIs",
  },
],
  slides: [
    {
      image: "src/assets/images/reflector.jpeg",
      // caption: "Live bidding interface"
    },
    {
      image: "src/assets/images/reflector2.jpeg",
      // caption: "System architecture"
    },
    {
      image: "src/assets/images/reflector3.jpeg",
      // caption: "Admin dashboard & analytics"
    }
  ],
  color: "#5196fd",
  githubLink: "https://github.com/Alyan-Malik/Reflector-Agency-Website",
  demoLink: "https://drive.google.com/file/d/1RTe8zy1U0FMq-obzE_vWbCiVu3ANG3q7/view",
  liveLink: ""
},
// {
//   title: "Real Estate CRM",
//   detailSlides: [
//   {
//     title: "Overview",
//     text: "The eAuction system is an online auction platform designed to connect buyers and sellers in a competitive marketplace.",
//   },
//   {
//     title: "Key Features",
//     text: "• Real-time bidding\n• Secure authentication\n• Admin dashboard\n• Dockerized deployment",
//   },
//   {
//     title: "Tech Stack",
//     text: "Laravel, MySQL, Docker, Tailwind CSS, REST APIs",
//   },
// ],
//   slides: [
//     {
//       image: "src/assets/images/",
//       // caption: "Live bidding interface"
//     },
//     {
//       image: "src/assets/images/",
//       // caption: "System architecture"
//     },
//     {
//       image: "src/assets/images/",
//       // caption: "Admin dashboard & analytics"
//     }
//   ],
//   color: "#5196fd",
//   githubLink: "...",
//   demoLink: "",
//   liveLink: "..."
// },
];

// Machine Learning Projects
const mlProjects = [
  {
  title: "Utility Meter Reading",
  detailSlides: [
  {
    title: "Overview",
    text: "AI based automated smart meter reading web app for HMC society. I developed a smart Utility Meter Reading App that leverages machine learning, deep learning and computer vision to automatically detect and extract meter readings from both analog and digital utility meters.",
  },
  {
    title: "Key Features",
    text: "• Automatic Meter Detection\n• Analog & Digital Meter Support\n• Intelligent Digit Recognition\n• Image Preprocessing Pipeline\n• Decimal Placement Logic",
  },
  {
    title: "Tech Stack",
    text: "• Frontend: HTML5, CSS3, Bootstrap\n• Backend: Flask, REST APIs\n• Machine Learning & Computer Vision: Python, \u00A0 \u00A0 \u00A0Deep Learning (CNNs), YOLO (Object \u00A0\u00A0\u00A0Detection), OpenCV, TensorFlow / Keras, \u00A0\u00A0\u00A0Scikit-learn",
  },
],
  slides: [
    {
      image: "src/assets/images/meter.jpg",
      // caption: "Live bidding interface"
    },
    {
      image: "src/assets/images/meter4.jpeg",
      // caption: "System architecture"
    },
    {
      image: "src/assets/images/meter6.jpeg",
      // caption: "Admin dashboard & analytics"
    }
  ],
  color: "#5196fd",
  githubLink: "https://github.com/Alyan-Malik/utility-meter-reading-flask",
  demoLink: "https://drive.google.com/file/d/1N4lpiP6lzeDVYRrk19a5XvSdEa4HvUvN/view",
  liveLink: ""
},
{
  title: "Captcha Recognition",
  detailSlides: [
  {
    title: "Overview",
    text: "The CAPTCHA Recognition System is an AI powered system designed to automatically detect and recognize text from distorted CAPTCHA images commonly used on websites for bot prevention.This system was developed for a client specific use case.",
  },
  {
    title: "Key Features",
    text: "• Deep Learning Based Recognition\n• Handles Complex Distortions\n• Advanced Image Preprocessing\n• Alphanumeric Support (A–Z, a–z) (0–9)\n• Extra Fast Response (.tflite model conversion)",
  },
  {
    title: "Tech Stack",
        text: "• Machine Learning & Deep Learning: Python, \u00A0\u00A0\u00A0Convolutional Neural Networks (CNNs), \u00A0\u00A0\u00A0TensorFlow / Keras\n• Image Processing & OCR: OpenCV, NumPy, \u00A0\u00A0\u00A0Custom Segmentation Logic\n• Backend: Flask, Gunicorn",
  },
],
  slides: [
    {
      image: "src/assets/images/captcha5.jpg",
      // caption: "Live bidding interface"
    },
    {
      image: "src/assets/images/captcha6.png",
      // caption: "System architecture"
    },
    
  ],
  color: "#5196fd",
  githubLink: "https://github.com/Alyan-Malik/captcha-recognition-system",
  demoLink: "https://drive.google.com/file/d/1cVdTW2j8ht-ubkanh8NqFHrp2pozamsE/view?usp=sharing",
  liveLink: ""
},

];

// Data Scraping Projects
const scrapingProjects = [
  {
  title: "Chinese Market Scrap",
  detailSlides: [
  {
    title: "Overview",
    text: "A comprehensive Python based web scraping system designed for client to extract publicly available data from Chinese e-commerce, oil & gas, food, manufacturing, and product listing websites, along with Chinese business data from Google Maps.",
  },
  {
    title: "Key Features",
    text: "• Chinese E-Commerce Websites\n• Oil & Gas Companies \n• Food & Beverage Businesses\n• Manufacturers & Product Listing Portals\n• Wholesale & Supplier Marketplaces\n• Google Maps Scraping",
  },
  {
    title: "Tech Stack",
    text: "Python, requests, BeautifulSoup (bs4), lxml, pandas, selenium, undetected-chromedriver, playwright, drissionpage, Proxies",
  },
],
  slides: [
    {
      image: "src/assets/images/webscraper3.png",
      // caption: "Live bidding interface"
    },
    {
      image: "src/assets/images/webscraper2.png",
      // caption: "System architecture"
    },
  ],
  color: "#5196fd",
  githubLink: "https://github.com/Alyan-Malik/Chinese-Market-Intelligence-Web-Scraper",
  demoLink: "https://drive.google.com/file/d/1uelAKuATe4rVjA_-WTzv3z9MYqYMc6vi/view?usp=sharing",
  liveLink: ""
},
{
  title: "Chinese Websites Scrap",
  detailSlides: [
  {
    title: "Overview",
    text: "A Python based web scraping project for client designed to extract structured data from publicly listed Chinese websites for scrap data and automation purposes. This project demonstrates practical skills in web scraping, data extraction, automation, and handling multilingual content. ",
  },
  {
    title: "Key Features",
        text: "• Scrapes multiple listed Chinese websites\n• Handles Chinese (UTF-8)\n• Configurable scraping targets\n• Supports pagination & dynamic content\n• Exports data (CSV, Excel)",
  },
  {
    title: "Tech Stack",
    text: "Python, requests, BeautifulSoup (bs4), lxml, pandas, selenium, Firefox GeckoDriver",
  },
],
  slides: [
    {
      image: "src/assets/images/webscraper6.jpg",
      // caption: "Live bidding interface"
    },
    {
      image: "src/assets/images/webscraper5.png",
      // caption: "System architecture"
    },
    
  ],
  color: "#5196fd",
  githubLink: "https://github.com/Alyan-Malik/Chinese-Websites-Web-Scraper",
  demoLink: "https://drive.google.com/file/d/14gUNP8gpkg41vkmDyCNZyqDmDcFf9Lxu/view?usp=sharing",
  liveLink: ""
},

];

export default function Projects() {
  return (
    <ReactLenis root>
      <main className="bg-background min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Meteors */}
          <div className="absolute inset-0 overflow-hidden">
            <Meteors number={30} />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-background" />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10 text-center px-6"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">
                Portfolio Showcase
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
              My{" "}
             <span className="bg-gradient-to-r from-primary via-accent-blue to-purple-600 bg-clip-text text-transparent">
  Projects
</span>

            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my work across web development, machine learning, and data engineering
            </p>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="mt-12"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 mx-auto flex items-start justify-center p-2"
              >
                <motion.div className="w-1 h-2 rounded-full bg-muted-foreground" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>

        {/* Web Development Section */}
        <ProjectSection
          title="Web Development"
          subtitle="Full-stack applications built with modern frameworks and best practices"
          projects={webProjects}
          accentColor="#5196fd"
        />

        {/* Machine Learning Section */}
        <ProjectSection
          title="Machine Learning"
          subtitle="AI-powered solutions using cutting-edge deep learning technologies"
          projects={mlProjects}
          accentColor="#00d4aa"
        />

        {/* Data Scraping Section */}
        <ProjectSection
          title="Web Scraping"
          subtitle="Intelligent data collection systems with robust extraction pipelines"
          projects={scrapingProjects}
          accentColor="#a855f7"
        />
      </main>
    </ReactLenis>
  );
}
