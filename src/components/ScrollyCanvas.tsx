'use client';
import { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent, useSpring } from 'framer-motion';
import { Overlay } from './Overlay';

const FRAME_COUNT = 121; // Number of frames extracted by ffmpeg

export function ScrollyCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
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

  // Preload sequence
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= FRAME_COUNT; i++) {
        const img = new Image();
        const frameNumber = i.toString().padStart(3, '0');
        img.src = `/sequence/frame_${frameNumber}.webp`;
        
        img.onload = () => {
           loadedCount++;
           if (loadedCount === FRAME_COUNT) {
             setImages(loadedImages);
             setIsLoaded(true);
             requestAnimationFrame(() => drawFrame(loadedImages[0]));
           }
        };
        img.onerror = () => {
           loadedCount++;
           if (loadedCount === FRAME_COUNT) {
             setImages(loadedImages);
             setIsLoaded(true);
             requestAnimationFrame(() => drawFrame(loadedImages[0]));
           }
        };
        loadedImages.push(img);
    }
  }, []);

  // Update canvas size only on resize to prevent expensive layout thrashing
  const updateCanvasSize = () => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    
    // Redraw current frame if images are loaded
    if (images.length > 0) {
      const frameIndex = Math.min(
          FRAME_COUNT - 1,
          Math.floor(smoothProgress.get() * FRAME_COUNT)
      );
      drawFrame(images[frameIndex]);
    }
  };

  useEffect(() => {
    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    return () => window.removeEventListener('resize', updateCanvasSize);
  }, [images]);

  const drawFrame = (img: HTMLImageElement | undefined) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
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
  };

  // Core smooth animation loop
  useMotionValueEvent(smoothProgress, "change", (latest: number) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
        FRAME_COUNT - 1,
        Math.floor(latest * FRAME_COUNT)
    );
    requestAnimationFrame(() => drawFrame(images[frameIndex]));
  });

  return (
    <div ref={containerRef} className="relative h-[500vh] w-full bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* The Sequence Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Loading state while frames download */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-background z-20">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin mb-4" />
              <p className="text-sm font-medium text-white/60 tracking-widest uppercase">
                Loading Cinematic Experience
              </p>
            </div>
          </div>
        )}

        {/* Text parralax layer */}
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  );
}
