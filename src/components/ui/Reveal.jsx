import { motion } from "motion/react";

const variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Fades and lifts its children into view the first time they scroll on screen.
 * Respects prefers-reduced-motion via the global CSS rule in index.css.
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const Component = motion[as] ?? motion.div;
  return (
    <Component
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
