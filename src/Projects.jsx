export default function Projects({ sectionRef }) {
  const projectData = [
    {
      title: 'QuantVision',
      description:
        'An interactive quant strategy dashboard built with React and FastAPI. Visualises algorithmic trading performance through dynamic equity curves, Sharpe ratios, and backtest metrics.',
      tags: ['React', 'FastAPI', 'Python', 'Recharts'],
      image: '/quantvision-preview.png',
      code: 'https://github.com/ksshubhan/quantvision-frontend',
      demo: 'https://quantvision.vercel.app',
      status: 'complete',
    },
    {
      title: 'Coming Soon',
      description:
        "This project is currently in progress. Check back soon to see what I'm building!",
      tags: ['React', 'Tailwind CSS', 'Fintech'],
      status: 'in-progress',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 pb-[5.5rem] border-t border-white dark:border-gray-900 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2 pb-[0.4rem]">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-5 mb-8 text-base sm:text-[1.11rem]">
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-16">
          {projectData.map((project, index) => (
            <div key={index}>
              {project.status === 'complete' ? (
                <div
                  className="w-full max-w-[88rem] mx-auto bg-white dark:bg-gray-800
                            text-gray-900 dark:text-white rounded-2xl shadow-sm
                            border border-gray-200 dark:border-gray-700
                            flex flex-col md:flex-row items-center gap-6 p-6 md:p-7
                            hover:shadow-md transition-all duration-300"
                >
                  {/* Image */}
                  {project.image && (
                    <div className="w-full md:w-[40%] h-40 lg:h-48 rounded-xl overflow-hidden flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  )}

                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-left w-full md:w-[60%] space-y-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-[0.93rem] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-[0.25rem] text-[0.83rem] bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2.5 mt-2">
                      <a
                        href={project.code}
                        className="px-3 py-[0.45rem] text-[0.82rem] font-medium border border-gray-300 dark:border-gray-600 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Code
                      </a>
                      <a
                        href={project.demo}
                        className="px-3 py-[0.45rem] text-[0.82rem] font-medium bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                /* === If project is still in progress === */
                <div
                  className="w-full max-w-[88rem] mx-auto bg-white dark:bg-gray-800
                            text-gray-900 dark:text-white rounded-2xl shadow-sm
                            border border-gray-200 dark:border-gray-700
                            flex flex-col md:flex-row items-center gap-6 p-6 md:p-7
                            hover:shadow-md transition-all duration-300"
                >
                  {/* Placeholder Image */}
                  <div className="w-full md:w-[40%] h-40 lg:h-48 bg-gray-200 dark:bg-gray-700 rounded-xl flex items-center justify-center">
                    <div className="w-[90%] h-[85%] bg-gray-300 dark:bg-gray-600 rounded-xl animate-pulse" />
                  </div>

                  {/* Text Section */}
                  <div className="flex flex-col justify-center text-left w-full md:w-[60%] space-y-3">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-[0.93rem] leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-1">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-[0.25rem] text-[0.83rem] bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2">
                      <div className="w-[10%] h-full bg-black dark:bg-white rounded-full" />
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-[6px]">10% complete</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
