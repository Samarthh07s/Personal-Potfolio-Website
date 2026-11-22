import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  direction = "bottom",
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} direction={direction} />
      <FloatingDockMobile items={items} className={mobileClassName} direction={direction} />
    </>
  );
};

const FloatingDockMobile = ({ items, className, direction = "bottom" }) => {
  const [open, setOpen] = useState(false);
  const isDown = direction === "bottom";

  return (
    <div className={cn("relative block md:hidden", className)}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation menu"
        className="liquid-glass-button h-12 w-12 rounded-full bg-sky-200/[0.12] border border-sky-100/35 flex items-center justify-center text-sky-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),0_12px_30px_rgba(0,0,0,0.3)] backdrop-blur-xl hover:border-sky-100/70 hover:bg-sky-200/[0.2] hover:text-white transition-all active:scale-95"
      >
        <IconLayoutNavbarCollapse className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className={cn(
              "absolute inset-x-0 flex flex-col items-center gap-2 z-50",
              isDown ? "top-full mt-3" : "bottom-full mb-3"
            )}
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: isDown ? -10 : 10, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  y: isDown ? -10 : 10,
                  scale: 0.8,
                  transition: {
                    delay: idx * 0.04,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.04 }}
              >
                <a
                  href={item.href}
                  key={item.title}
                  onClick={() => setOpen(false)}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={item.title}
                  className="liquid-glass-button h-11 w-11 rounded-full bg-sky-200/[0.1] border border-sky-100/30 flex items-center justify-center text-sky-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_10px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl hover:border-sky-100/65 hover:bg-sky-200/[0.18] hover:text-white transition-all"
                >
                  <div className="h-5 w-5 flex items-center justify-center">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className, direction = "bottom" }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-3 items-center rounded-2xl bg-sky-200/[0.08] border border-sky-100/30 px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.32),0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-2xl",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} direction={direction} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href, direction = "bottom" }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 72, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 36, 20]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);
  const isDown = direction === "bottom";

  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={title}
    >
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="liquid-glass-button aspect-square rounded-full bg-sky-200/[0.1] border border-sky-100/30 flex items-center justify-center relative shadow-[inset_0_1px_0_rgba(255,255,255,0.34),0_10px_24px_rgba(0,0,0,0.26)] hover:border-sky-100/65 hover:bg-sky-200/[0.18] hover:shadow-[0_0_24px_rgba(98,215,255,0.2)] transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: isDown ? -8 : 8, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: isDown ? -4 : 4, x: "-50%" }}
              className={cn(
                "px-2.5 py-1 whitespace-pre rounded-lg bg-slate-900/90 border border-sky-100/30 text-sky-50 absolute left-1/2 w-fit text-xs font-semibold shadow-2xl pointer-events-none z-50 tracking-wide backdrop-blur-xl",
                isDown ? "top-full mt-2.5" : "-top-9"
              )}
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-neutral-300 hover:text-white transition-colors"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}
