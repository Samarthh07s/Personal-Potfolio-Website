import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

export function ContainerTextFlip({
  words = [],
  interval = 2800,
  className,
  textClassName,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const measureRef = useRef(null);
  const id = useId();

  // Measure the current word width so the container transitions smoothly
  useEffect(() => {
    if (measureRef.current) {
      setWidth(measureRef.current.scrollWidth + 8);
    }
  }, [currentIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearInterval(timer);
  }, [words.length, interval]);

  return (
    <motion.span
      layout
      animate={{ width }}
      transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden",
        "rounded-lg px-3 py-0.5",
        "bg-gradient-to-r from-orange-500/20 via-amber-400/15 to-orange-500/20",
        "border border-orange-400/30",
        "text-orange-300",
        className
      )}
    >
      {/* Hidden span used purely for width measurement */}
      <span
        ref={measureRef}
        aria-hidden
        className={cn(
          "invisible absolute whitespace-nowrap font-semibold",
          textClassName
        )}
      >
        {words[currentIndex]}
      </span>

      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={`${id}-${currentIndex}`}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -14, filter: "blur(6px)" }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          className={cn("whitespace-nowrap font-semibold", textClassName)}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </motion.span>
  );
}
