'use client';

import { useEffect, useRef } from 'react';

type Particle = { x: number; y: number; vx: number; vy: number; r: number };

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let particles: Particle[] = [];
    let rafId = 0;
    const mouse: { x: number | null; y: number | null } = { x: null, y: null };
    const maxDist = 130;
    const mouseDist = 160;

    function resize() {
      if (!canvas || !ctx) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(110, Math.max(40, Math.round((w * h) / 16000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        if (mouse.x != null && mouse.y != null) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.hypot(dx, dy);
          if (d < mouseDist && d > 0.01) {
            const f = ((mouseDist - d) / mouseDist) * 0.04;
            p.x += (dx / d) * f;
            p.y += (dy / d) * f;
          }
        }
      }

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < maxDist) {
            ctx.strokeStyle = `rgba(255,31,61,${(1 - d / maxDist) * 0.18})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
        if (mouse.x != null && mouse.y != null) {
          const d = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (d < mouseDist) {
            ctx.strokeStyle = `rgba(255,84,112,${(1 - d / mouseDist) * 0.35})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = 'rgba(255,84,112,0.55)';
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!reduceMotion) rafId = requestAnimationFrame(step);
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    function handleMouseLeave() {
      mouse.x = null;
      mouse.y = null;
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    resize();
    step();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas id="bg-canvas" ref={canvasRef} aria-hidden="true" />;
}
