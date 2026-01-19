import IconCloud from "./ui/icon-cloud";

const slugs = [
  // Frontend
  "javascript",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "vuejs",

  // Backend
  "php",
  "laravel",
  "python",
  "flask",
  "mysql",
  "sqlite",
  "docker",
  "rest",

  // Data Scraping
  "scrapy",
  "selenium",
  "postman",
  "proxy",
  "git",
  "github",

  // Machine Learning
  "python",
  "scikitlearn",
  "pandas",
  "numpy",

  // Deep Learning
  "tensorflow",
  "keras",

  // Computer Vision
  "opencv",
  "yolo",
];

function IconCloudDemo() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 bg-transparent">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}

export default IconCloudDemo;
