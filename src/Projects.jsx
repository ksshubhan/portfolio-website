export default function Projects({ sectionRef }) {
  const projectData = [
    {
      title: 'QuantVision',
      description:
        'An interactive quant strategy dashboard built with React and FastAPI. Visualises algorithmic trading performance through dynamic equity curves, Sharpe ratios, and backtest metrics.',
      tags: ['React', 'FastAPI', 'Python', 'Recharts'],
      image: '/quantvision-preview.png', // ✅ place a screenshot in your /public/assets folder
      liveDemo: 'https://quantvision.vercel.app',
      code: 'https://github.com/ksshubhan/quantvision-frontend',
      progress: 100,
    },
    {
      title: 'Coming Soon',
      description:
        "This project is currently in progress. Check back soon to see what I'm building!",
      tags: ['React', 'Tailwind CSS', 'Fintech'],
      progress: 10,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16 pb-[5.5rem] scroll-mt-24 overflow-hidden z-10 border-t border-white dark:border-gray-900"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2 pb-[0.4rem]">
          Featured Projects
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mt-5 mb-8 text-base sm:text-[1.11rem]">
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-16">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-6xl mx-auto bg-gray-100 dark:bg-gray-800 rounded-3xl shadow-lg p-8 flex flex-col md:flex-row gap-6 hover:scale-[1.01] border border-gray-300 dark:border-gray-600 transition-transform duration-300"
            >
              {project.image ? (
                <div className="w-full md:w-[45%] h-60 lg:h-64 rounded-3xl overflow-hidden flex items-center justify-center -ml-2 md:-ml-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-3xl transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              ) : (
                <div className="w-full md:w-[45%] h-60 lg:h-64 bg-gray-300 dark:bg-gray-700 rounded-3xl animate-pulse -ml-2 md:-ml-4" />
              )}

              {/* Project Details */}
              <div className="flex flex-col justify-center text-left w-full md:w-1/2">
                <h3 className="text-2xl font-semibold text-black dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 text-sm font-medium px-3 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links (if available) */}
                {project.liveDemo && (
                  <div className="flex gap-3 mb-4">
                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                      View Code
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-md bg-black text-white font-medium hover:bg-gray-800 transition-colors"
                    >
                      Live Demo
                    </a>
                  </div>
                )}

                {/* Progress bar */}
                <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-2">
                  <div
                    className="h-full bg-black dark:bg-white rounded-full transition-all"
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-[10px]">
                  {project.progress}% complete
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
