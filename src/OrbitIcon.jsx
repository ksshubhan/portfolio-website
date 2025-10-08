// OrbitIcon.jsx
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function OrbitIcon({
  angle = -90,
  radius = 160,
  children,
  delay = 0,
  duration = 10,
  repeatDelay = 0,
  fadeOutDuration = 0.8, // how long the post-hover fade-out lasts
  float = 6,
  bounceSpeed = 1.6,
  bounceDelay = 0,
}) {
  const opacityControls = useAnimation();
  const [isDark, setIsDark] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- Detect theme from <html data-theme="..."> ---
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "dark");
    };
    updateTheme();

    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    return () => observer.disconnect();
  }, []);

  // --- Detect if screen is mobile (<= 640px) ---
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // --- Scale radius automatically for mobile ---
  const effectiveRadius = isMobile ? radius * 0.55 : radius;

  // --- Opacity animation loop ---
  const startLoop = () =>
    opacityControls.start({
      opacity: [0, 1, 1, 0],
      transition: {
        delay,
        duration,
        repeat: Infinity,
        repeatDelay,
        ease: "easeInOut",
      },
    });

  useEffect(() => {
    opacityControls.set({ opacity: 0 });
    startLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleHoverStart = async () => {
    opacityControls.stop();
    await opacityControls.start({ opacity: 1, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = async () => {
    opacityControls.stop();
    await opacityControls.start({
      opacity: 0,
      transition: { duration: fadeOutDuration, ease: "easeInOut" },
    });
    startLoop();
  };

  return (
    <div
      className="absolute left-1/2 top-1/2 z-30"
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${effectiveRadius}px) rotate(${-angle}deg)`,
      }}
    >
      <motion.div animate={opacityControls}>
        <motion.div
          animate={{ y: [0, -float, 0] }}
          transition={{
            y: {
              delay: bounceDelay,
              duration: bounceSpeed,
              repeat: Infinity,
              ease: "easeInOut",
            },
            scale: { type: "spring", stiffness: 300, damping: 15 },
          }}
          whileHover={
            isDark
              ? {
                  scale: 1.15,
                  boxShadow: "0 0 20px rgba(255,255,255,0.5)",
                  borderColor: "rgba(255,255,255,0.6)",
                }
              : {
                  scale: 1.1,
                  boxShadow: "0 0 15px rgba(0,0,0,0.1)",
                  borderColor: "rgba(156, 163, 175, 0.3)",
                }
          }
          onHoverStart={handleHoverStart}
          onHoverEnd={handleHoverEnd}
          className="relative 
            w-[2.9rem] h-[2.9rem] sm:w-[3.77rem] sm:h-[3.77rem]
            rounded-full bg-white/90 text-black
            flex items-center justify-center border border-white/60
            ring-1 ring-gray-400/30 dark:ring-gray-400/60
            shadow-md hover:shadow-lg transition-shadow duration-300
            dark:shadow-[0_0_8px_2px_rgba(255,255,255,0.3)] cursor-pointer"
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
