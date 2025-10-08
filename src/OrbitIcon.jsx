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
  fadeOutDuration = 0.8,  // how long the post-hover fade-out lasts
  float = 6,
  bounceSpeed = 1.6,
  bounceDelay = 0,
}) {
  const opacityControls = useAnimation();
  const [isDark, setIsDark] = useState(false);

  // --- Detect theme from <html data-theme="..."> ---
  useEffect(() => {
    const updateTheme = () => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "dark");
    };
    updateTheme();

    // Optional: watch for manual changes while page is open
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  // Helper to (re)start the infinite fade loop
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
    // start the loop once on mount
    opacityControls.set({ opacity: 0 });
    startLoop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handlers that sequence the opacity correctly
  const handleHoverStart = async () => {
    opacityControls.stop();
    await opacityControls.start({ opacity: 1, transition: { duration: 0.2 } });
  };

  const handleHoverEnd = async () => {
    opacityControls.stop();
    // fade out smoothly first…
    await opacityControls.start({
      opacity: 0,
      transition: { duration: fadeOutDuration, ease: "easeInOut" },
    });
    // …then resume the normal loop
    startLoop();
  };

  return (
    <div
      className="absolute left-1/2 top-1/2 z-30"
      style={{
        transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${radius}px) rotate(${-angle}deg)`,
      }}
    >
      {/* Opacity controller wrapper */}
      <motion.div animate={opacityControls}>
        {/* Bouncing bubble */}
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
            w-[1.55rem] h-[1.55rem] sm:w-[3.77rem] sm:h-[3.77rem] 
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
