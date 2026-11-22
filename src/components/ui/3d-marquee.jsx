import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const ThreeDMarquee = ({
  images,
  items,
  className,
}) => {
  // Ensure we have enough items (at least 48) so all 6 columns are deeply populated and continuous
  let data = items || images || [];
  if (data.length > 0 && data.length < 48) {
    const original = [...data];
    while (data.length < 48) {
      data = [...data, ...original];
    }
  }

  // Split into 6 columns for dense, wall-to-wall 3D isometric coverage
  const numCols = 6;
  const chunkSize = Math.max(1, Math.ceil(data.length / numCols));
  const chunks = Array.from({ length: numCols }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return data.slice(start, start + chunkSize);
  });

  return (
    <div
      className={cn(
        "mx-auto block h-[650px] overflow-hidden rounded-3xl max-sm:h-[500px] relative select-none",
        className,
      )}
      style={{ perspective: "1200px" }}
    >
      {/* Soft gradient vignettes for subtle edge fading */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-40 h-16 bg-gradient-to-b from-[#0d0a0b]/80 via-[#0d0a0b]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-40 h-16 bg-gradient-to-t from-[#0d0a0b]/80 via-[#0d0a0b]/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-40 w-14 bg-gradient-to-r from-[#0d0a0b]/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-40 w-14 bg-gradient-to-l from-[#0d0a0b]/80 to-transparent" />

      <div className="flex size-full items-center justify-center">
        <div className="size-[2200px] shrink-0 scale-[0.48] sm:scale-[0.62] md:scale-[0.75] lg:scale-[0.88] xl:scale-100">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
              transformStyle: "preserve-3d",
            }}
            className="relative top-48 right-[46%] grid size-full origin-top-left grid-cols-6 gap-6"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={{ y: colIndex % 2 === 0 ? 130 : -130 }}
                transition={{
                  duration: 13 + (colIndex % 3) * 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-6"
              >
                <GridLineVertical className="-left-3" offset="80px" />
                {subarray.map((item, itemIndex) => {
                  const key = typeof item === "string" ? `${colIndex}-${itemIndex}-${item}` : `${colIndex}-${itemIndex}-${item.name || item.title}`;
                  return (
                    <div className="relative w-full" key={key}>
                      <GridLineHorizontal className="-top-3" offset="20px" />
                      {typeof item === "string" ? (
                        <motion.img
                          whileHover={{
                            y: -10,
                            scale: 1.02,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          src={item}
                          alt={`Tech item ${itemIndex + 1}`}
                          className="aspect-[970/700] w-full rounded-2xl object-cover ring-1 ring-white/10 shadow-2xl hover:shadow-orange-500/20"
                          width={970}
                          height={700}
                        />
                      ) : (
                        <motion.div
                          whileHover={{
                            y: -10,
                            scale: 1.03,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                          }}
                          className={cn(
                            "group relative aspect-[970/700] w-full overflow-hidden rounded-2xl p-5 sm:p-6 flex flex-col justify-between",
                            "border border-white/10 bg-gradient-to-br from-[#1c1618] via-[#120d0f] to-[#0a0709]",
                            "shadow-xl hover:shadow-2xl transition-all duration-300",
                            item.borderHover || "hover:border-orange-500/40"
                          )}
                          style={{
                            boxShadow: "0 20px 50px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          {/* Ambient glow matching tech brand color */}
                          <div
                            className="absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"
                            style={{ background: item.color || "#ff7a1a" }}
                          />

                          {/* Card Header: Icon + Badge */}
                          <div className="relative z-10 flex items-center justify-between">
                            <div
                              className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-inner"
                              style={{ color: item.color || "#ffb173" }}
                            >
                              {item.icon}
                            </div>
                            <span
                              className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider border border-white/10 backdrop-blur-md"
                              style={{
                                color: item.color || "#ffb173",
                                backgroundColor: `${item.color || "#ff7a1a"}15`,
                              }}
                            >
                              {item.tag || "Language"}
                            </span>
                          </div>

                          {/* Card Body: Tech Name & Description */}
                          <div className="relative z-10 mt-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-orange-200 transition-colors">
                              {item.name}
                            </h3>
                            <p className="mt-1 text-sm font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors">
                              {item.description}
                            </p>
                          </div>

                          {/* Proficiency / Stat Bar */}
                          {item.proficiency && (
                            <div className="relative z-10 mt-3">
                              <div className="flex justify-between text-xs text-neutral-400 mb-1">
                                <span>Proficiency</span>
                                <span className="font-semibold text-neutral-200">{item.proficiency}</span>
                              </div>
                              <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                                <div
                                  className="h-full rounded-full transition-all duration-500"
                                  style={{
                                    width: item.proficiency,
                                    backgroundColor: item.color || "#ff7a1a",
                                  }}
                                />
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const GridLineHorizontal = ({
  className,
  offset,
}) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(255, 255, 255, 0.15)",
        "--height": "1px",
        "--width": "5px",
        "--fade-stop": "90%",
        "--offset": offset || "200px",
        "--color-dark": "rgba(255, 255, 255, 0.15)",
      }}
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-[length:var(--width)_var(--height)]",
        "z-30 pointer-events-none",
        className,
      )}
    />
  );
};

export const GridLineVertical = ({
  className,
  offset,
}) => {
  return (
    <div
      style={{
        "--background": "#ffffff",
        "--color": "rgba(255, 255, 255, 0.15)",
        "--height": "5px",
        "--width": "1px",
        "--fade-stop": "90%",
        "--offset": offset || "150px",
        "--color-dark": "rgba(255, 255, 255, 0.15)",
      }}
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "bg-[length:var(--width)_var(--height)]",
        "z-30 pointer-events-none",
        className,
      )}
    />
  );
};
