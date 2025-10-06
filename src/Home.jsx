import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from "react-icons/fa";
import { Globe, Code2, Database, Server, Braces } from "lucide-react";
import { motion } from "framer-motion";
import OrbitIcon from "./OrbitIcon";
import FloatingIcon from "./FloatingIcon";

export default function Home({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen w-full bg-white text-black dark:bg-black dark:text-white flex justify-center items-center px-4 sm:px-8 md:px-16 transition-colors"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 xl:gap-56 pt-20 md:pt-24">
        {/* ======================= TEXT ======================= */}
        <div className="md:w-1/2 text-center md:text-left md:-ml-24">
          <motion.p
            className="text-[15px] sm:text-base md:text-lg text-gray-500 dark:text-gray-400 mb-2"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {"Hey! I'm".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: "0.2em" },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>

          <motion.h1
            className="whitespace-nowrap text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { delayChildren: 0.5, staggerChildren: 0.15 } },
            }}
          >
            {"Sshubhan Kammari".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={{
                  hidden: { opacity: 0, y: "0.2em" },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.05 } },
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.h1>

          <h2 className="whitespace-nowrap text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6">
            Computer Science Student @ University of Manchester
          </h2>

          <p className="text-[15px] sm:text-base text-gray-500 dark:text-gray-400 mb-3">
            I’m a developer passionate about blending creativity with code. I work on full-stack projects and am diving into the world of quantitative finance and algorithmic trading.
          </p>
          <p className="text-[15px] sm:text-base text-gray-500 dark:text-gray-400 mb-6">
            I love solving hard problems and building impactful tools. My goal is to make tech that’s both smart and scalable.
          </p>

          {/* Follow Me On */}
          <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-4 mb-6 text-gray-700 dark:text-gray-400 font-medium">
            <span className="text-sm sm:text-base">Follow me on:</span>

            <a
              href="https://github.com/ksshubhan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-100 dark:bg-gray-800 p-2.5 sm:p-[0.65rem] rounded-full shadow-md transition-all duration-300 hover:bg-black dark:hover:bg-white hover:-translate-y-1"
            >
              <FaGithub className="text-gray-600 dark:text-white text-lg sm:text-xl transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
            </a>

            <a
              href="https://www.linkedin.com/in/sshubhan"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gray-100 dark:bg-gray-800 p-2.5 sm:p-[0.65rem] rounded-full shadow-md transition-all duration-300 hover:bg-black dark:hover:bg-white hover:-translate-y-1"
            >
              <FaLinkedin className="text-gray-600 dark:text-white text-lg sm:text-xl transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
            </a>

            <a
              href="mailto:ksshubhan@gmail.com"
              className="group bg-gray-100 dark:bg-gray-800 p-2.5 sm:p-[0.65rem] rounded-full shadow-md transition-all duration-300 hover:bg-black dark:hover:bg-white hover:-translate-y-1"
            >
              <FaEnvelope className="text-gray-600 dark:text-white text-lg sm:text-xl transition-colors duration-300 group-hover:text-white dark:group-hover:text-black" />
            </a>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-3 sm:gap-4 mb-6">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 dark:bg-gray-50 flex items-center gap-2 px-4 sm:px-5 py-2 text-white dark:text-black font-medium rounded-md border border-black/10 dark:border-white/10 hover:bg-gray-700 dark:hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
            >
              <FaDownload className="text-white dark:text-black text-sm" />
              <span className="text-white dark:text-black text-sm sm:text-base">Download CV</span>
            </a>

            <a
              href="#contact"
              className="bg-gray-50 dark:bg-gray-800 flex items-center gap-2 px-4 sm:px-5 py-2 text-black dark:text-white font-medium rounded-md border border-black/10 dark:border-white/10 hover:bg-gray-300 dark:hover:bg-gray-700 hover:-translate-y-1 transition-all duration-300"
            >
              <FaEnvelope className="text-sm" />
              <span className="text-sm sm:text-base">Contact Me</span>
            </a>
          </div>
        </div>

        {/* ======================= AVATAR + ORBIT ======================= */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-2 md:mt-0">
          {/* Wrapper scales per breakpoint */}
          <div className="relative w-52 h-52 sm:w-60 sm:h-60 md:w-[22.5rem] md:h-[22.5rem]">
            <img
              src="/linkedinphoto.JPEG"
              alt="Sshubhan Kammari"
              className="absolute inset-0 w-full h-full rounded-full object-cover border-4 border-gray-100 dark:border-white z-10 transition-all duration-300 hover:-translate-y-2"
            />

            {/* Orbit icons: lighter footprint on small screens */}
            <div className="hidden sm:block"> {/* hide on very small screens */}
              {/* Top (north) */}
              <OrbitIcon angle={150} radius={220} delay={0.0} duration={3.2} repeatDelay={0.2} float={6} bounceDelay={0.0}>
                <Globe className="w-6 h-6" />
              </OrbitIcon>

              {/* Left-upper */}
              <OrbitIcon angle={185} radius={210} delay={0.25} duration={6.8} repeatDelay={0.1} float={6} bounceDelay={0.4}>
                <Braces className="w-6 h-6" />
              </OrbitIcon>

              {/* Left-lower */}
              <OrbitIcon angle={205} radius={190} delay={0.55} duration={3.51} repeatDelay={0.15} float={5} bounceDelay={0.8}>
                <Database className="w-6 h-6" />
              </OrbitIcon>

              {/* Right-lower */}
              <OrbitIcon angle={20} radius={195} delay={0.35} duration={7.4} repeatDelay={0.05} float={7} bounceDelay={1.2}>
                <Code2 className="w-6 h-6" />
              </OrbitIcon>

              {/* Right-upper */}
              <OrbitIcon angle={335} radius={235} delay={0.1} duration={5.0} repeatDelay={0.12} float={6} bounceDelay={1.6}>
                <Server className="w-6 h-6" />
              </OrbitIcon>
            </div>

            {/* Soft glow (dark only) */}
            <div className="pointer-events-none absolute inset-0 rounded-full z-0 shadow-none dark:shadow-[0_0_120px_40px_rgba(255,255,255,0.06)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
