"use client";
import { useEffect, useRef } from "react";

/** Decorative canvas only: no external libraries, network access, or telemetry. */
export default function BinaryParticles() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let width = 0, height = 0, raf = 0, last = 0;
    const fontSize = 15;
    let columns: { x: number; y: number; speed: number; alpha: number; seed: number }[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      columns = Array.from({length: Math.ceil(width / 30)}, (_, i) => ({
        x: i * 30 + Math.random() * 12,
        y: Math.random() * height,
        speed: 0.25 + Math.random() * 0.7,
        alpha: 0.11 + Math.random() * 0.19,
        seed: Math.random() * 1000
      }));
    };
    resize();
    const onResize = () => resize();
    window.addEventListener('resize', onResize, { passive: true });
    const draw = (t: number) => {
      raf = requestAnimationFrame(draw);
      if (t - last < 45 || document.hidden) return;
      last = t;
      ctx.clearRect(0, 0, width, height);
      ctx.font = `12px monospace`;
      for (const col of columns) {
        for (let j = 0; j < 11; j++) {
          const y = (col.y - j * fontSize + height + fontSize * 12) % (height + fontSize * 12) - fontSize * 11;
          if (y < 0 || y > height) continue;
          const alpha = col.alpha * (1 - j / 12);
          ctx.fillStyle = j === 0 ? `rgba(110,245,225,${alpha * 1.4})` : `rgba(58,177,232,${alpha})`;
          ctx.fillText(Math.sin(col.seed + j * 17 + Math.floor(t / 280)) > 0 ? '1' : '0', col.x, y);
        }
        col.y += col.speed * 1.4;
        if (col.y > height + fontSize * 11) col.y = 0;
      }
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', onResize); };
  }, []);
  return <canvas ref={ref} className="binary-particles-canvas" aria-hidden="true" />;
}
