'use client';
import { useRef, useEffect, useState } from 'react';
import { useScroll, useMotionValueEvent } from 'framer-motion';
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
             drawFrame(loadedImages[0]);
           }
        };
        img.onerror = () => {
           // Fallback in case a frame is missing
           loadedCount++;
           if (loadedCount === FRAME_COUNT) {
             setImages(loadedImages);
             setIsLoaded(true);
             drawFrame(loadedImages[0]);
           }
        };
        loadedImages.push(img);
    }
  }, []);

  const drawFrame = (img: HTMLImageElement | undefined) => {
    if (!canvasRef.current || !img) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high-DPI displays for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    const canvasWidth = window.innerWidth;
    const canvasHeight = window.innerHeight;
    
    canvas.width = canvasWidth * dpr;
    canvas.height = canvasHeight * dpr;
    
    ctx.scale(dpr, dpr);
    
    // Crop bottom 10% to remove 'veo' watermark
    const sourceWidth = img.width;
    const sourceHeight = img.height * 0.90;
    const sourceX = 0;
    const sourceY = 0;

    // object-fit: cover logic using the cropped dimensions
    const imgRatio = sourceWidth / sourceHeight;
    const canvasRatio = canvasWidth / canvasHeight;

    let drawWidth = canvasWidth;
    let drawHeight = canvasHeight;
    let offsetX = 0;
    let offsetY = 0;

    if (imgRatio > canvasRatio) {
      drawWidth = canvasHeight * imgRatio;
      offsetX = (canvasWidth - drawWidth) / 2;
    } else {
      drawHeight = canvasWidth / imgRatio;
      offsetY = (canvasHeight - drawHeight) / 2;
    }

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    
    // Optional: dark gradient overlay backing if images have bright areas
    ctx.fillStyle = '#050505'; 
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw the Cropped Image
    ctx.drawImage(
      img, 
      sourceX, sourceY, sourceWidth, sourceHeight,
      offsetX, offsetY, drawWidth, drawHeight
    );
    
    // Add a dark semi-transparent overlay directly on canvas to ensure text is ALWAYS readable
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  };

  // Update canvas on window resize to maintain cover fit
  useEffect(() => {
    const handleResize = () => {
      if (images.length > 0) {
        const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.floor(scrollYProgress.get() * FRAME_COUNT)
        );
        drawFrame(images[frameIndex]);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [images, scrollYProgress]);

  // Core animation loop linked to scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return;
    const frameIndex = Math.min(
        FRAME_COUNT - 1,   // max index is 119
        Math.floor(latest * FRAME_COUNT)
    );
    drawFrame(images[frameIndex]);
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
