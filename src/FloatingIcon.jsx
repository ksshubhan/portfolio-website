import { motion } from "framer-motion";

/**
 * Small bouncing bubble for an icon.
 * `className` is applied to the OUTER wrapper so you can position it (`top`, `left`, etc.).
 */
export default function FloatingIcon({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, -8, 0], opacity: 1 }}
      transition={{ duration: 2.4, ease: "easeInOut", repeat: Infinity, delay }}
      className={
        // base bubble styles + your positioning classes
        "absolute flex items-center justify-center w-10 h-10 rounded-full " +
        "bg-white/95 text-black shadow-[0_12px_28px_rgba(0,0,0,.25)] ring-1 ring-black/10 " +
        "backdrop-blur " +
        className
      }
    >
      {children}
    </motion.div>
  );
}
