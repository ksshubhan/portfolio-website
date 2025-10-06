export default function Projects({ sectionRef }) {
  const projectData = [
    { title: 'Coming Soon',
      description: "This project is currently in progress. Check back soon to see what I'm building!",
      tags: ['React', 'Tailwind CSS', 'Fintech'],
    },
    { title: 'Coming Soon',
      description: "This project is currently in progress. Check back soon to see what I'm building!",
      tags: ['React', 'Tailwind CSS', 'Fintech'],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative w-full
        relative w-full
        bg-gray-100 dark:bg-gray-900 text-black dark:text-white
        -mt-px                 /* kiss Skills */
        border-t border-white dark:border-gray-900  /* paint the seam the same as bg */
        py-16
        pb-[5.5rem]
        scroll-mt-24
        [&>*:last-child]:mb-0
        overflow-hidden
        z-10
      "
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-2 pb-[0.4rem]">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-5 mb-8 text-base sm:text-[1.11rem]">
          Here are some of my recent projects that showcase my skills and experience.
        </p>

        <div className="grid grid-cols-1 gap-10 mt-16">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-5xl mx-auto bg-gray-100 dark:bg-gray-800 text-white rounded-3xl shadow-lg p-6
                         flex flex-col md:flex-row gap-6 transition-transform duration-300
                         hover:scale-[1.01] border border-gray-300 dark:border-gray-600"
            >
              <div className="w-full md:w-1/2 h-48 bg-gray-300 dark:bg-gray-700 rounded-xl animate-pulse" />
              <div className="flex flex-col justify-center text-left w-full md:w-1/2">
                <h3 className="text-2xl text-black dark:text-white font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-full mt-4">
                  <div className="w-1/10 h-full bg-black dark:bg-white rounded-full" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-[18px]">10% complete</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
