import { Mail, Github, Linkedin, Code2 } from 'lucide-react';

export default function Contact({ sectionRef }) {
  return (
    <section
      ref={sectionRef}
      id="contact"
      className="
        relative w-full bg-gray-100 dark:bg-gray-900 text-white
        scroll-mt-24
        -mt-px              
        pt-20 px-6
        overflow-hidden
        [&>*:last-child]:mb-0
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl text-black dark:text-white font-bold mb-4 pb-[1.11rem]">Let's Work Together</h2>

        <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 text-base sm:text-[1.15rem]">
          Open to roles, internships, and collaborations — feel free to reach out if you're hiring
          or working on something exciting.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {/* Email Button */}
          <a
            href="mailto:ksshubhan@gmail.com"
            className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-medium rounded-md flex items-center gap-2 
                      hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors duration-300"
          >
            <Mail className="w-5 h-5 text-white dark:text-black" />  {/* 👈 text-current makes the icon follow text color */}
            <span className="text-white dark:text-black">Send Email</span>
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://linkedin.com/in/sshubhan"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-white dark:bg-black text-black dark:text-white font-medium rounded-md flex items-center gap-2 
                      hover:bg-gray-200 dark:hover:bg-gray-800 border border-black/10 dark:border-white/20 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5 text-current" />  {/* 👈 follows text color */}
            <span className="text-black dark:text-white">Connect on LinkedIn</span>
          </a>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-3 gap-8 text-sm text-gray-400 max-w-4xl mx-auto mb-12 pb-10">
          <div className="flex flex-col items-center text-center">
            <Mail className="w-9 h-9 text-black dark:text-white mb-2" />
            <p className="font-semibold text-black dark:text-white text-lg mb-1">Email</p>
            <p className="text-base text-gray-500 dark:text-gray-400">ksshubhan@gmail.com</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Linkedin className="w-9 h-9 text-black dark:text-white mb-2" />
            <p className="font-semibold text-black dark:text-white text-lg mb-1">LinkedIn</p>
            <p className="text-base text-gray-500 dark:text-gray-400">linkedin.com/in/sshubhan</p>
          </div>

          <div className="flex flex-col items-center text-center">
            <Github className="w-9 h-9 text-black dark:text-white mb-2" />
            <p className="font-semibold text-black dark:text-white text-lg mb-1">GitHub</p>
            <p className="text-base text-gray-500 dark:text-gray-400">github.com/sshubhan</p>
          </div>
        </div>
      </div>

      {/* Footer INSIDE the same section */}
      <footer className="w-full border-t border-gray-300 dark:border-gray-800 -mt-px">
        <div className="max-w-6xl mx-auto pt-8 pb-8 px-4 text-xs sm:text-sm flex flex-col sm:flex-row sm:items-center justify-between">
          
          {/* Left side: message */}
          <p className="flex items-center gap-2 mb-4 sm:mb-0 text-gray-500 dark:text-gray-300">
            <Code2 className="w-4 h-4 text-gray-500 dark:text-gray-300" />
            Built with React and Tailwind CSS. © 2025 Sshubhan Kammari.
          </p>

          {/* Right side: icons */}
          <div className="flex gap-4 justify-center sm:justify-start text-gray-500 dark:text-gray-300">
            <a
              href="https://github.com/sshubhan"
              className="hover:text-gray-800 dark:hover:text-gray-50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sshubhan"
              className="hover:text-gray-800 dark:hover:text-gray-50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:ksshubhan@gmail.com"
              className="hover:text-gray-800 dark:hover:text-gray-50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
