"use client";

import { useEffect, useRef } from "react";
import { usePrefersReducedMotion, useVisibleCanvas } from "@/lib/useVisibleCanvas";

const POINT_COUNT = 260;
const LINK_THRESHOLD = 0.34; // relative to sphere radius

type P3 = { x: number; y: number; z: number; amber: boolean; phase: number };

/** Fibonacci-distributed points on a unit sphere. */
function buildSphere(): P3[] {
  const pts: P3[] = [];
  const golden = Math.PI * (3 - Math.sqrt(5));
  for (let i = 0; i < POINT_COUNT; i++) {
    const y = 1 - (i / (POINT_COUNT - 1)) * 2;
    const r = Math.sqrt(1 - y * y);
    const theta = golden * i;
    pts.push({
      x: Math.cos(theta) * r,
      y,
      z: Math.sin(theta) * r,
      amber: i % 13 === 0,
      phase: (i % 17) * 0.37,
    });
  }
  return pts;
}

/** Neighbor pairs are rotation-invariant, so compute them once. */
function buildLinks(pts: P3[]): [number, number][] {
  const links: [number, number][] = [];
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const dz = pts[i].z - pts[j].z;
      if (dx * dx + dy * dy + dz * dz < LINK_THRESHOLD * LINK_THRESHOLD) {
        links.push([i, j]);
      }
    }
  }
  return links;
}

const SPHERE = buildSphere();
const LINKS = buildLinks(SPHERE);

const RINGS = [
  { scale: 1.32, tiltX: 1.15, tiltZ: 0.4, speed: 0.5, color: "232, 168, 32" },
  { scale: 1.5, tiltX: 1.35, tiltZ: -0.55, speed: -0.34, color: "94, 234, 212" },
  { scale: 1.72, tiltX: 1.05, tiltZ: 0.15, speed: 0.22, color: "56, 189, 248" },
];

/** Abstract futuristic hero visual — rotating holographic particle sphere */
export default function HoloSphere({ className = "" }: { className?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const active = useVisibleCanvas(wrapRef);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !active) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let t = 0;
    let w = 0;
    let h = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Rotate + tilt + perspective-project a unit-sphere point.
    const project = (p: { x: number; y: number; z: number }, R: number, rotY: number, tiltX: number) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = p.x * cosY + p.z * sinY;
      const z1 = -p.x * sinY + p.z * cosY;
      const cosX = Math.cos(tiltX);
      const sinX = Math.sin(tiltX);
      const y2 = p.y * cosX - z1 * sinX;
      const z2 = p.y * sinX + z1 * cosX;
      const persp = 2.6 / (2.6 - z2);
      return { sx: x1 * R * persp, sy: y2 * R * persp, depth: z2 };
    };

    const tick = () => {
      t += reduced ? 0 : 0.0135;
      ctx.clearRect(0, 0, w, h);

      const cx = w * 0.5;
      const cy = h * 0.5;
      const R = Math.min(w, h) * 0.3;
      const rotY = t * 0.4;
      const tilt = -0.42 + Math.sin(t * 0.3) * 0.05;

      // Core glow
      const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 1.15);
      core.addColorStop(0, "rgba(45, 212, 191, 0.16)");
      core.addColorStop(0.55, "rgba(16, 56, 112, 0.1)");
      core.addColorStop(1, "rgba(16, 56, 112, 0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(cx, cy, R * 1.15, 0, Math.PI * 2);
      ctx.fill();

      const projected = SPHERE.map((p) => project(p, R, rotY, tilt));

      // Links — depth-faded wireframe
      ctx.lineWidth = 0.6;
      for (const [a, b] of LINKS) {
        const pa = projected[a];
        const pb = projected[b];
        const depth = (pa.depth + pb.depth) / 2; // -1 (back) .. 1 (front)
        const alpha = 0.04 + (depth + 1) * 0.09;
        ctx.strokeStyle = `rgba(45, 212, 191, ${alpha})`;
        ctx.beginPath();
        ctx.moveTo(cx + pa.sx, cy + pa.sy);
        ctx.lineTo(cx + pb.sx, cy + pb.sy);
        ctx.stroke();
      }

      // Points
      for (let i = 0; i < SPHERE.length; i++) {
        const p = SPHERE[i];
        const pr = projected[i];
        const front = (pr.depth + 1) / 2; // 0 back .. 1 front
        const twinkle = 0.75 + 0.25 * Math.sin(t * 2 + p.phase);
        const size = (p.amber ? 2.6 : 1.5) * (0.5 + front * 0.9) * twinkle;
        const alpha = (0.18 + front * 0.8) * twinkle;

        if (p.amber) {
          const glow = ctx.createRadialGradient(cx + pr.sx, cy + pr.sy, 0, cx + pr.sx, cy + pr.sy, size * 5);
          glow.addColorStop(0, `rgba(232, 168, 32, ${alpha * 0.5})`);
          glow.addColorStop(1, "rgba(232, 168, 32, 0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(cx + pr.sx, cy + pr.sy, size * 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = `rgba(232, 168, 32, ${alpha})`;
        } else {
          ctx.fillStyle = `rgba(94, 234, 212, ${alpha})`;
        }
        ctx.beginPath();
        ctx.arc(cx + pr.sx, cy + pr.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Orbit rings with comets
      for (const ring of RINGS) {
        const steps = 90;
        // Faint ring path
        ctx.beginPath();
        for (let s = 0; s <= steps; s++) {
          const a = (s / steps) * Math.PI * 2;
          const p = {
            x: Math.cos(a) * ring.scale,
            y: Math.sin(a) * Math.sin(ring.tiltZ) * ring.scale,
            z: Math.sin(a) * Math.cos(ring.tiltZ) * ring.scale,
          };
          const pr = project(p, R, rotY * 0.15, ring.tiltX);
          if (s === 0) ctx.moveTo(cx + pr.sx, cy + pr.sy);
          else ctx.lineTo(cx + pr.sx, cy + pr.sy);
        }
        ctx.strokeStyle = `rgba(${ring.color}, 0.1)`;
        ctx.lineWidth = 0.8;
        ctx.stroke();

        // Comet + fading trail
        const head = t * ring.speed;
        for (let k = 0; k < 14; k++) {
          const a = head - k * 0.035 * Math.sign(ring.speed);
          const p = {
            x: Math.cos(a) * ring.scale,
            y: Math.sin(a) * Math.sin(ring.tiltZ) * ring.scale,
            z: Math.sin(a) * Math.cos(ring.tiltZ) * ring.scale,
          };
          const pr = project(p, R, rotY * 0.15, ring.tiltX);
          const fade = 1 - k / 14;
          const front = (pr.depth + 1) / 2;
          ctx.beginPath();
          ctx.arc(cx + pr.sx, cy + pr.sy, (2.4 - k * 0.13) * (0.55 + front * 0.6), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${ring.color}, ${fade * fade * (0.25 + front * 0.65)})`;
          ctx.fill();
        }
      }

      // Scan line — horizontal sweep across the sphere
      const scanY = cy + Math.sin(t * 0.7) * R * 0.85;
      const scanGrad = ctx.createLinearGradient(cx - R * 1.15, 0, cx + R * 1.15, 0);
      scanGrad.addColorStop(0, "rgba(94, 234, 212, 0)");
      scanGrad.addColorStop(0.5, "rgba(94, 234, 212, 0.22)");
      scanGrad.addColorStop(1, "rgba(94, 234, 212, 0)");
      ctx.strokeStyle = scanGrad;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(cx - R * 1.15, scanY);
      ctx.lineTo(cx + R * 1.15, scanY);
      ctx.stroke();

      raf = requestAnimationFrame(tick);
    };
    tick();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [active, reduced]);

  return (
    <div ref={wrapRef} className={`relative w-full h-full ${className}`} aria-hidden>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
