// Navbar.jsx
import { useEffect, useRef, useState, useCallback } from "react";
import { Scrollspy } from "@makotot/ghostui";
import {
  Home as HomeIcon,
  UserRound,
  Wrench as SkillsIcon,
  FolderGit2,
  BriefcaseBusiness,
  MessageCircleMore,
  Download as DownloadIcon,
  ChevronsLeftRight as ChevronsIcon,
  Sun,
  Moon,
} from "lucide-react";

/* sections */
const sections = [
  { id: "home",       label: "Home",       Icon: HomeIcon },
  { id: "about",      label: "About",      Icon: UserRound },
  { id: "skills",     label: "Skills",     Icon: SkillsIcon },
  { id: "projects",   label: "Projects",   Icon: FolderGit2 },
  { id: "experience", label: "Experience", Icon: BriefcaseBusiness },
  { id: "contact",    label: "Contact",    Icon: MessageCircleMore },
];

const PILL_MS = 320;
const PILL_EASE = "ease-out";

/* ---- MINIMAL THEME (light/dark only) ---- */
const THEME_KEY = "theme"; // 'light' | 'dark'

function getInitialTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  return saved === "dark" ? "dark" : "light";
}

export default function Navbar({ sectionRefs }) {
  const sectionRefList = sections.map(({ id }) => sectionRefs[id]);

  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === "dark";

  useEffect(() => {
  document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
  document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
  /* ---- END MINIMAL THEME ---- */



  /* nav + pill */
  const navRef = useRef(null);
  const barRef = useRef(null);
  const linkRefs = useRef({});
  const [pill, setPill] = useState({ left: 0, width: 0, height: 0 });
  const [spyOffset, setSpyOffset] = useState(100);

  useEffect(() => {
    const measure = () => {
      if (!navRef.current) return;
      const h = Math.ceil(navRef.current.getBoundingClientRect().height);
      setSpyOffset(h + 1);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (navRef.current) ro.observe(navRef.current);
    const vv = window.visualViewport;
    vv?.addEventListener?.("resize", measure, { passive: true });
    vv?.addEventListener?.("scroll", measure, { passive: true });
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      ro.disconnect();
      vv?.removeEventListener?.("resize", measure);
      vv?.removeEventListener?.("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const updatePill = useCallback((activeId) => {
    const el = linkRefs.current[activeId];
    const bar = barRef.current;
    if (!el || !bar) return;
    const er = el.getBoundingClientRect();
    const br = bar.getBoundingClientRect();
    requestAnimationFrame(() => {
      setPill({ left: er.left - br.left, width: er.width, height: er.height });
    });
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => updatePill("home"));
    return () => cancelAnimationFrame(raf);
  }, [updatePill]);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50">
      <div className="bg-white/70 dark:bg-black/70 backdrop-blur
                      text-black dark:text-white
                      border-b border-black/10 dark:border-white/20
                      transition-colors">
        <div className="max-w-8xl mx-auto px-4">
          <div className="flex items-center py-3">
            {/* LEFT: toggle + brand (near the left edge) */}
            <div className="flex items-center gap-3 pl-3">
              {/* Toggle */}

              {/* Theme toggle – knob-only clickable */}
              <div className="relative inline-flex items-center select-none">
                {/* Track (non-interactive) */}
                <span
                  className={`pointer-events-none relative block w-[66px] h-[34px] rounded-3xl border
                              overflow-hidden backdrop-blur-sm transition-colors duration-300
                              ${isDark ? "bg-white/5 border-white/15" : "bg-white border-black/15"}`}
                >
                  <Sun
                    className={`absolute right-2 top-1/2 -translate-y-1/2 w-[14px] h-[14px]
                                transition-opacity duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                                text-yellow-400
                                ${isDark ? "opacity-0" : "opacity-100"}`}
                    strokeWidth={2}
                  />
                  <Moon
                    className={`absolute left-2 top-1/2 -translate-y-1/2 w-[14px] h-[14px]
                                transition-opacity duration-300
                                ${isDark ? "opacity-100" : "opacity-0"}`}
                    strokeWidth={2}
                  />
                </span>

                {/* Knob (only interactive element) */}
                <div
                  type="button"
                  role="switch"
                  aria-label="Toggle dark mode"
                  aria-checked={isDark}
                  onClick={toggleTheme}
                  className={`absolute top-1/2 -translate-y-1/2
                        left-[4px] w-[25px] h-[25px] rounded-full z-10
                        shadow-md cursor-pointer
                        transition-transform duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                        will-change-transform
                        ${isDark ? "translate-x-[32px] bg-white" : "translate-x-[1px] bg-black"}`}
                ></div>
              </div>



              {/* Brand */}
              <a
                href="#home"
                className="hidden sm:flex items-center gap-2
                           text-black/90 hover:text-black
                           dark:text-white/90 dark:hover:text-white
                           transition-colors select-none"
              >
                <ChevronsIcon className="w-[28px] h-[28px]" strokeWidth={1.5} />
                <span className="font-semibold tracking-tight">Sshubhan Kammari</span>
              </a>
            </div>

            {/* RIGHT: links + resume */}
            <div className="ml-auto flex items-center gap-6 pr-4 sm:pr-[120px]">
              <Scrollspy sectionRefs={sectionRefList} offset={spyOffset - 115}>
                {({ currentElementIndexInViewport }) => {
                  const idx =
                    typeof currentElementIndexInViewport === "number" &&
                    currentElementIndexInViewport >= 0
                      ? currentElementIndexInViewport
                      : 0;
                  const activeId = sections[idx]?.id;
                  requestAnimationFrame(() => activeId && updatePill(activeId));
                  return (
                    <div ref={barRef} className="relative isolate">
                      <span
                        className="absolute top-1/2 -translate-y-1/2 bg-black dark:bg-white rounded-full z-0"
                        style={{
                          left: pill.left,
                          width: pill.width,
                          height: pill.height,
                          transitionProperty: "left, width, height",
                          transitionDuration: `${PILL_MS}ms`,
                          transitionTimingFunction: PILL_EASE,
                        }}
                      />
                      <ul className="flex gap-2 sm:gap-3 text-sm sm:text-base relative z-10">
                        {sections.map(({ id, label, Icon }) => {
                          const isActive = activeId === id;
                          return (
                            <li key={id}>
                              <a
                                href={`#${id}`}
                                ref={(el) => (linkRefs.current[id] = el)}
                                data-active={isActive ? "true" : "false"}
                                className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors
                                            ${isActive
                                              ? "!text-white dark:!text-black font-semibold"
                                              : "text-black/80 hover:text-black dark:text-white/85 dark:hover:text-white"}`}
                                style={{
                                  lineHeight: 1,
                                  transitionDuration: `${PILL_MS}ms`,
                                  transitionTimingFunction: PILL_EASE,
                                }}
                              >
                                <Icon
                                  className={`w-[15px] h-[15px] ${
                                    isActive ? "text-white dark:text-black" : "text-black/80 dark:text-white/85"
                                  }`}
                                  strokeWidth={2}
                                />
                                <span className="select-none">{label}</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  );
                }}
              </Scrollspy>

              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border px-3 py-[4.6px]
                           rounded-lg transition-colors
                           border-black/30 text-black hover:bg-black/5
                           dark:border-white/40 dark:text-white dark:hover:bg-white/10"
              >
                <DownloadIcon className="w-[16px] h-[16px]" strokeWidth={2} />
                <span className="text-sm select-none">Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
