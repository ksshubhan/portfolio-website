import { FaUserGraduate, FaEnvelope, FaBrain, FaMapMarkerAlt, FaLanguage, FaGraduationCap, FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa';

export default function About({ sectionRef }) {
  return (
    <section ref={sectionRef} id="about" className="relative w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white
    pt-20 pb-[33px] px-6 scroll-mt-24
    [&>*:last-child]:mb-0
    overflow-hidden
    -mb-px">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center -mb-[0.2rem] -mt-7 ">
          About <span className="text-black dark:text-white">Me</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 mt-[1.75rem] text-base sm: text-[1.11rem]">
          Learn more about my background, interests, and what drives my work.
        </p>

        {/* Grid layout: image + 6 info cards */}
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-start gap-12">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className="w-[20rem] h-[20rem] rounded-full overflow-hidden border-4 border-white transition-all duration-300 hover:-translate-y-2 -translate-x-0 md:-translate-x-24 md:translate-y-[1.5rem]">
              <img
                src="/linkedinphoto.JPEG"
                alt="Sshubhan Kammari"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-6">
          {[
              {
                icon: <FaUserGraduate className="text-white text-3xl" />,
                title: "Bio",
                text: "First-year Computer Science student at the University of Manchester. Passionate about full-stack development, fintech, and quantitative trading.",
              },
              {
                icon: <FaEnvelope className="text-white text-3xl" />,
                title: "Contact",
                text: (
                    <>
                    Email: ksshubhan@gmail.com<br />
                    LinkedIn: linkedin.com/in/sshubhan<br />
                    </>
                ),
              },
              {
                icon: <FaBrain className="text-white text-3xl" />,
                title: "Hobbies",
                text: "Gym, reading, and exploring finance, languages, and AI automation through data-driven tools.",
              },
              {
                icon: <FaMapMarkerAlt className="text-white text-3xl" />,
                title: "Location",
                text: "Based in London & Manchester. Open to remote and hybrid opportunities across the UK.",
              },
              {
                icon: <FaLanguage className="text-white text-3xl" />,
                title: "Languages",
                text: "Fluent in English and Telugu. Currently learning Kannada.",
              },
              {
                icon: <FaGraduationCap className="text-white text-3xl" />,
                title: "Education",
                text: "BSc Computer Science @ University of Manchester (2024–2027). Focused on software development, algorithms, and financial technology.",
              }
             ].map(({ icon, title, text }, i) => (
              <div key={i} className="p-4 rounded-md hover:shadow-lg transition text-left">
                {/* Icon + Title in one row */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-gray-800 p-3 rounded-full w-fit h-fit">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                </div>

                {/* Description underneath */}
                <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Me Section */}
        <div className="mt-12 translate-x-[24rem] translate-y-[2rem] pb-0">
          <div className="flex items-center justify-start gap-4">
            <span className="text-gray-700 dark:text-gray-400 font-medium text-lg">Follow me on:</span>

            <a
              href="https://github.com/ksshubhan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-800 rounded-full shadow-md p-[0.65rem] hover:bg-black dark:hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
            >
              <FaGithub className="text-gray-800 dark:text-white text-lg group-hover:text-white dark:group-hover:text-black" />
            </a>

            <a
              href="https://linkedin.com/in/sshubhan"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-200 dark:bg-gray-800 rounded-full shadow-md p-[0.65rem] hover:bg-black dark:hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
            >
              <FaLinkedin className="text-gray-800 dark:text-white text-lg group-hover:text-white dark:group-hover:text-black" />
            </a>

            <a
              href="mailto:ksshubhan@gmail.com"
              className="bg-gray-200 dark:bg-gray-800 rounded-full shadow-md p-[0.65rem] hover:bg-black dark:hover:bg-white hover:-translate-y-1 transition-all duration-300 group"
            >
              <FaEnvelope className="text-gray-800 dark:text-white text-lg group-hover:text-white dark:group-hover:text-black" />
            </a>
          </div>
        </div>


        {/* Download Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-12 translate-x-[44rem] -translate-y-[3.5rem] pb-0">
          <a
            href="/Resume.pdf"
            className="bg-black dark:bg-white flex items-center gap-2 px-5 py-2 text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="text-white dark:text-black text-sm" />
            <span className = 'text-white dark:text-black'>Download CV</span>
          </a>
  
          <a
            href="/Transcript.pdf"
            className="bg-black dark:bg-white flex items-center gap-2 px-5 py-2 text-white dark:text-black font-medium rounded-md hover:bg-gray-800 dark:hover:bg-gray-300 hover:-translate-y-1 transition-all duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload className="text-white dark:text-black text-sm" />
            <span className = 'text-white dark:text-black'>Download Transcript</span>
          </a>
        </div>
      </div>
    </section>
  );
}
