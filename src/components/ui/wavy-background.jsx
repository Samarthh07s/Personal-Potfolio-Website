import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createNoise2D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill = "transparent",
  blur = 12,
  speed = "fast",
  waveOpacity = 0.35,
  isFixed = true,
  ...props
}) => {
  const noise = createNoise2D();
  const canvasRef = useRef(null);

  const getSpeed = () => {
    switch (speed) {
      case "slow":
        return 0.0008;
      case "fast":
        return 0.0018;
      default:
        return 0.0012;
    }
  };

  const waveColors = colors ?? [
    "#ff8f33",
    "#ff5e1e",
    "#ffa854",
    "#38bdf8",
    "#818cf8",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.25);
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resizeCanvas = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      ctx.canvas.width = Math.floor(w * pixelRatio);
      ctx.canvas.height = Math.floor(h * pixelRatio);
      ctx.canvas.style.width = `${w}px`;
      ctx.canvas.style.height = `${h}px`;
      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    };

    resizeCanvas();
    ctx.filter = `blur(${blur}px)`;
    let nt = 0;
    let animationId;
    let isPageVisible = document.visibilityState === "visible";

    const handleResize = () => {
      resizeCanvas();
      ctx.filter = `blur(${blur}px)`;
    };

    const handleVisibilityChange = () => {
      isPageVisible = document.visibilityState === "visible";
      if (isPageVisible) {
        render();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const drawWave = (n) => {
      nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 45;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x <= w; x += 10) {
          const y = noise(x / 750, 0.3 * i + nt) * 110;
          ctx.lineTo(x, y + h * 0.48); // centered wave horizon
        }
        ctx.stroke();
        ctx.closePath();
      }
    };

    const render = () => {
      if (!isPageVisible) {
        animationId = 0;
        return;
      }

      ctx.clearRect(0, 0, w, h);
      if (backgroundFill && backgroundFill !== "transparent") {
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, w, h);
      }
      ctx.globalAlpha = waveOpacity || 0.4;
      drawWave(3);

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [blur, speed, waveWidth, waveOpacity, backgroundFill]);

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        isFixed
          ? "wavy-ambient fixed inset-0 pointer-events-none z-[-3] overflow-hidden w-full h-full"
          : "relative w-full h-screen overflow-hidden",
        containerClassName
      )}
      style={{ isolation: "isolate" }}
    >
      <canvas
        className="absolute inset-0 w-full h-full pointer-events-none"
        ref={canvasRef}
        id="wavy-canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      />
      {children && (
        <div className={cn("relative z-10 pointer-events-auto", className)} {...props}>
          {children}
        </div>
      )}
    </div>
  );
};
