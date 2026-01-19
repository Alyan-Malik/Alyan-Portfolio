import HeroImg from "@/assets/images/Alyan.png";
import OlovaLogo from "@/assets/images/logo.png";
import Meteors from "@/components/ui/meteors";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 bg-[#04081A] text-white overflow-hidden"
    >
        {/* Meteors Effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <Meteors number={10} />
                </div>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b  via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Image Section */}
          <div className="relative flex justify-center">
            <div className="relative rounded-2xl p-[2px] bg-gradient-to-br from-blue-500/40 via-purple-500/30 to-transparent shadow-xl">
              <img
                src={HeroImg}
                alt="Alyan Malik"
                className="rounded-2xl w-full max-w-md object-cover bg-black/20 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Me
            </h2>

            <p className="text-gray-300 leading-relaxed">
              I am a <span className="text-white font-semibold">Full Stack Web Developer</span> and
              <span className="text-white font-semibold"> Machine Learning Engineer</span> with
              strong expertise in <span className="text-blue-400">Laravel, PHP, Python, and Flask</span>.
              I specialize in building scalable backend systems and modern, responsive frontend
              interfaces using <span className="text-purple-400">JavaScript, Vue.js, Tailwind CSS, and Bootstrap</span>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I have extensive experience developing <span className="text-white font-medium">robust web applications, RESTful APIs, and data-driven platforms</span>,
              along with integrating <span className="text-blue-400">Machine Learning, Deep Learning, and Computer Vision </span>
              models into real-world applications. My work includes authentication systems,
              dynamic dashboards, e-commerce platforms, and intelligent features such as
              <span className="text-purple-400"> object detection, OCR, recommendation systems, and predictive analytics</span>.
            </p>

            <p className="text-gray-300 leading-relaxed">
              I also have hands-on experience in <span className="text-white font-medium">data scraping and automation </span>
              using Python, Selenium, Scrapy, Beautiful Soup, and API integrations.
              I’m proficient in model training, evaluation, and visualization with
              <span className="text-blue-400"> Scikit-Learn, TensorFlow, Keras, Pandas, NumPy, and OpenCV</span>.
            </p>

            <div className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p className="text-gray-200 font-medium">
                I focus on <span className="text-white">clean architecture</span>, 
                <span className="text-blue-400"> performance optimization</span>, and
                <span className="text-purple-400"> workflow automation</span>, transforming
                complex problems into efficient, scalable, and maintainable solutions.
              </p>
            </div>

            {/* Signature */}
            <div className="flex items-center gap-3 pt-6 border-t border-white/10">
              <img
                src={OlovaLogo}
                alt="Logo"
                className="h-6 opacity-90"
              />
              <cite className="not-italic font-semibold text-white">
                Alyan Malik
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
