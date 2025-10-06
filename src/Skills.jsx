import { useState, useEffect, useRef } from 'react';
import {
  FaLaptopCode,
  FaUsers,
  FaToolbox,
  FaCloud,
  FaCodeBranch,
  FaComments,
  FaCogs,
  FaBullseye,
  FaCrown,
  FaSearch,
  FaLightbulb,
} from 'react-icons/fa';

export default function Skills({ sectionRef }) {
  const [activeTab, setActiveTab] = useState('technical');
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });
  const tabRefs = useRef({});

  const tabs = [
    { id: 'technical', label: 'Technical', icon: <FaLaptopCode /> },
    { id: 'soft', label: 'Soft Skills', icon: <FaUsers /> },
    { id: 'tools', label: 'Tools', icon: <FaToolbox /> },
  ];

  useEffect(() => {
    const el = tabRefs.current[activeTab];
    if (el) setPillStyle({ left: el.offsetLeft, width: el.offsetWidth });
  }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        relative w-full
        bg-white dark:bg-black text-black dark:text-white
        scroll-mt-24
        -mt-px          /* kiss About */
        -mb-px          /* overlap Projects by 1px */
        py-[3.78rem]
        pb-[11rem]
        [&>*:last-child]:mb-0
        overflow-hidden
        z-0
      "
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold mb-6 pb-[0.08rem]">Skills &amp; Expertise</h2>

        <p className="text-gray-600 dark:text-gray-400 mb-10 text-base sm:text-[1.11rem]">
          Technical competencies and professional skills I've developed through experience,
          <br />
          and continuous learning
        </p>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="relative flex bg-white rounded-4xl border border-black/10 px-1 py-[7.4px] shadow-md dark:shadow-[0_0_10px_3px_rgba(255,255,255,0.45)]">
            <div
              className="absolute h-[42px] bg-[#0F172A] rounded-full transition-all duration-300 ease-in-out z-0 shadow-md"
              style={{ top: 4.5, left: pillStyle.left, width: pillStyle.width }}
            />
            {tabs.map(({ id, label, icon }) => (
              <div
                key={id}
                ref={(el) => (tabRefs.current[id] = el)}
                className="relative z-10"
              >
                <button
                  onClick={() => setActiveTab(id)}
                  className={`relative z-10 flex items-center gap-1 w-[124px] justify-center px-2.5 py-2 rounded-full font-semibold text-sm transition-colors duration-[1000ms] ease-in-out whitespace-nowrap
                    focus:outline-none focus:ring-0
                    ${activeTab === id ? 'text-white' : 'text-gray-800'}`}
                  style={{ backgroundColor: 'transparent', width: '124px' }}
                >
                  <span className={activeTab === id ? 'text-white' : 'text-[#0F172A]'}>{icon}</span>
                  {label}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-3 gap-8 px-4 sm:px-0">
          {activeTab === 'technical' && (
            <>
              <SkillCard
                title="Frontend Development"
                icon={<FaLaptopCode />}
                items={['React', 'Next.js', 'JavaScript', 'Tailwind CSS', 'HTML5', 'CSS3']}
              />
              <SkillCard
                title="Backend Development"
                icon={<FaCodeBranch />}
                items={['Node.js', 'Python', 'Java', 'C#']}
              />
              <SkillCard title="Database & Cloud" icon={<FaCloud />} items={['Azure']} />
            </>
          )}

          {activeTab === 'soft' && (
            <>
              <SoftSkillCard
                title="Communication"
                icon={<FaComments />}
                description="Effective verbal and written communication skills with stakeholders, team members, and clients."
              />
              <SoftSkillCard
                title="Problem Solving"
                icon={<FaBullseye />}
                description="Analytical thinking and creative problem-solving abilities to tackle complex challenges."
              />
              <SoftSkillCard
                title="Leadership"
                icon={<FaCrown />}
                description="Experience leading teams, mentoring juniors, and driving project success."
              />
              <SoftSkillCard
                title="Adaptability"
                icon={<FaLightbulb />}
                description="Quick learner with the ability to adapt to new technologies and changing environments."
              />
              <SoftSkillCard
                title="Team Collaboration"
                icon={<FaUsers />}
                description="Strong team player with experience in agile methodologies and cross-functional collaboration."
              />
              <SoftSkillCard
                title="Attention to Detail"
                icon={<FaSearch />}
                description="Meticulous approach to code quality, testing, and polished delivery."
              />
            </>
          )}

          {activeTab === 'tools' && (
            <>
              <SkillCard title="Dev Tools" icon={<FaToolbox />} items={['VS Code', 'Git', 'GitHub']} />
              <SkillCard title="Design Tools" icon={<FaLightbulb />} items={['Canva']} />
              <SkillCard title="Testing & Deployment" icon={<FaCogs />} items={['Netlify']} />
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function SkillCard({ title, icon, items }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md border border-gray-200 transition hover:scale-[1.01]">
      <div className="flex items-center gap-2 mb-4">
        <div className="bg-white p-3 rounded-full text-black shadow">{icon}</div>
        <h3 className="text-lg font-semibold text-gray-950">{title}</h3>
      </div>
      <div className="grid grid-cols-2 gap-2 text-sm">
        {items.map((skill, i) => (
          <span
            key={i}
            className="bg-white text-black border border-gray-100 px-4 py-3 rounded-lg text-center font-medium transition-colors duration-300 hover:bg-gray-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function SoftSkillCard({ title, icon, description }) {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-md transition hover:scale-[1.01] text-center border border-gray-200">
      <div className="flex justify-center mb-4">
        <div className="bg-[#0F172A] text-white p-4 rounded-full shadow-md text-3xl">{icon}</div>
      </div>
      <h3 className="text-lg font-semibold text-gray-950 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
