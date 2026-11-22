import {
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const Timeline = ({ data, className }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setHeight(rect.height);
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      updateHeight();
    });

    if (ref.current) {
      resizeObserver.observe(ref.current);
    }

    window.addEventListener("resize", updateHeight);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 70%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.08], [0, 1]);

  return (
    <div
      className={cn("w-full relative", className)}
      ref={containerRef}
    >
      <div ref={ref} className="relative w-full pb-10">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-16 md:gap-10"
          >
            {/* Sticky Milestone Marker & Title (Desktop) */}
            <div className="sticky flex flex-col md:flex-row z-30 items-center top-28 self-start max-w-xs md:w-56 lg:w-64">
              <div className="h-10 absolute left-2 md:left-2 w-10 rounded-full bg-[#1e1713] border border-orange-400/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,140,50,0.25)]">
                <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 ring-2 ring-orange-500/40" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-16 lg:pl-18 font-bold text-orange-200/90 tracking-tight">
                {item.title}
              </h3>
            </div>

            {/* Content Area */}
            <div className="relative pl-16 pr-2 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-3 text-left font-bold text-orange-200 tracking-tight">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Vertical Track Line */}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute left-[27px] md:left-[27px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-white/15 to-transparent [mask-image:linear-gradient(to_bottom,transparent_0%,black_6%,black_94%,transparent_100%)] pointer-events-none"
        >
          {/* Animated Glowing Light Beam */}
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-orange-500 via-amber-300 to-transparent from-[0%] via-[40%] rounded-full shadow-[0_0_12px_#ff8f33]"
          />
        </div>
      </div>
    </div>
  );
};
