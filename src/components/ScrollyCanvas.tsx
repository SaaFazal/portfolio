'use client';
import { useRef, useEffect, useState, useCallback } from 'react';
import { useScroll, useMotionValueEvent, useSpring, useReducedMotion } from 'framer-motion';
import { Overlay } from './Overlay';

// Every other frame of the original 121, in two sizes: /sequence/d (1440px) and /sequence/m (960px, phones)
const FRAME_COUNT = 61;
const LOAD_CONCURRENCY = 6;

export function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<(HTMLImageElement | null)[]>(new Array(FRAME_COUNT).fill(null));
  const [isLoaded, setIsLoaded] = useState(false);
  const rafRef = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Add smoothing to the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndexFor = (progress: number) =>
    Math.min(FRAME_COUNT - 1, Math.max(0, Math.floor(progress * FRAME_COUNT)));

  // Frames stream in after the first one, so fall back to the closest frame already loaded
  const nearestLoaded = (index: number) => {
    const frames = framesRef.current;
    for (let offset = 0; offset < FRAME_COUNT; offset++) {
      const before = frames[index - offset];
      if (before) return before;
      const after = frames[index + offset];
      if (after) return after;
    }
    return undefined;
  };

  const drawFrame = useCallback((img: HTMLImageElement | undefined) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Cap DPR to 1.5 to dramatically reduce fill-rate rendering overhead on 4K/Retina displays
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const canvasWidth = canvas.width / dpr;
    const canvasHeight = canvas.height / dpr;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Crop bottom 10% to remove 'veo' watermark
    const sourceWidth = img.width;
    const sourceHeight = img.height * 0.90;
    const sourceX = 0;
    const sourceY = 0;

    // object-fit logic
    const imgRatio = sourceWidth / sourceHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    const isMobile = canvasWidth < canvasHeight;

    if (isMobile) {
      drawHeight = canvasHeight * 0.65;
      drawWidth = drawHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
      offsetY = (canvasHeight - drawHeight) * 0.4;
    } else {
      if (imgRatio > canvasRatio) {
        drawWidth = canvasHeight * imgRatio;
        offsetX = (canvasWidth - drawWidth) / 2;
      } else {
        drawHeight = canvasWidth / imgRatio;
        offsetY = (canvasHeight - drawHeight) / 2;
      }
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Background base
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // Draw the image
    ctx.drawImage(
      img,
      sourceX, sourceY, sourceWidth, sourceHeight,
      offsetX, offsetY, drawWidth, drawHeight
    );

    if (isMobile) {
      const topGrad = ctx.createLinearGradient(0, offsetY, 0, offsetY + 60);
      topGrad.addColorStop(0, '#050505');
      topGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = topGrad;
      ctx.fillRect(0, offsetY, canvasWidth, 60);

      const botGrad = ctx.createLinearGradient(0, offsetY + drawHeight - 60, 0, offsetY + drawHeight);
      botGrad.addColorStop(0, 'transparent');
      botGrad.addColorStop(1, '#050505');
      ctx.fillStyle = botGrad;
      ctx.fillRect(0, offsetY + drawHeight - 60, canvasWidth, 60);
    }

    // Overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }, []);

  const redraw = useCallback(() => {
    drawFrame(nearestLoaded(frameIndexFor(smoothProgress.get())));
  }, [drawFrame, smoothProgress]);

  // Load frame 1 first so the hero shows straight away, then stream the rest in the background.
  // With reduced motion the portrait stays on frame 1, so the other frames are never downloaded.
  useEffect(() => {
    if (reduceMotion === null) return;
    let cancelled = false;
    const dir = window.innerWidth < 768 ? 'm' : 'd';
    const src = (i: number) => `/sequence/${dir}/frame_${String(i + 1).padStart(3, '0')}.webp`;

    const load = (i: number) => new Promise<void>(resolve => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src(i);
      img.onload = async () => {
        try { await img.decode(); } catch { /* older browsers */ }
        if (!cancelled) framesRef.current[i] = img;
        resolve();
      };
      img.onerror = () => resolve();
    });

    load(0).then(() => {
      if (cancelled) return;
      setIsLoaded(true);
      requestAnimationFrame(redraw);
      if (reduceMotion) return;

      let next = 1;
      const worker = async () => {
        while (!cancelled && next < FRAME_COUNT) {
          await load(next++);
        }
      };
      for (let w = 0; w < LOAD_CONCURRENCY; w++) worker();
    });

    return () => { cancelled = true; };
  }, [reduceMotion, redraw]);

  // Update canvas size only on resize to prevent expensive layout thrashing
  useEffect(() => {
    const updateCanvasSize = () => {
      if (!canvasRef.current) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvasRef.current.width = window.innerWidth * dpr;
      canvasRef.current.height = window.innerHeight * dpr;
      redraw();
    };
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [redraw]);

  // Core smooth animation loop
  useMotionValueEvent(smoothProgress, "change", (latest: number) => {
    if (!isLoaded || reduceMotion) return;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      drawFrame(nearestLoaded(frameIndexFor(latest)));
      rafRef.current = null;
    });
  });

  return (
    <div ref={containerRef} className="relative h-[350vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">

        {/* The Sequence Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />

        {/* Loading state while the first frame downloads */}
        {!isLoaded && (
          // Sits under the text layer so the name, line and buttons are readable while frames download
          <div className="absolute inset-0 flex items-end justify-center pb-10 bg-background z-[5]" aria-hidden="true">
            <div className="w-6 h-6 rounded-full border-2 border-primary border-t-transparent animate-spin" />
          </div>
        )}

        {/* Text parallax layer */}
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
