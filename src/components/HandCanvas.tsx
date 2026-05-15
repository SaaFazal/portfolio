'use client';
import { useRef, useEffect, useState } from 'react';
import { useMotionValueEvent, useSpring, MotionValue } from 'framer-motion';

const FRAME_COUNT = 192;

interface HandCanvasProps {
    scrollYProgress: MotionValue<number>;
}

export function HandCanvas({ scrollYProgress }: HandCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Smooth scroll spring - same settings as ScrollyCanvas
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 30,
        restDelta: 0.001
    });

    // Preload all frames
    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const frameNumber = i.toString().padStart(3, '0');
            img.src = `/hand_sequence/frame_${frameNumber}.jpg`;

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
                }
            };
            loadedImages.push(img);
        }
    }, []);

    const updateCanvasSize = () => {
        if (!canvasRef.current) return;
        const canvas = canvasRef.current;
        const dpr = window.devicePixelRatio || 1;
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;

        if (images.length > 0) {
            const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(smoothProgress.get() * FRAME_COUNT));
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

        // Crop bottom 12% to hide the "Veo" watermark
        const sourceWidth = img.width;
        const sourceHeight = img.height * 0.88;
        const sourceX = 0;
        const sourceY = 0;

        // Detect mobile (portrait) vs desktop
        const isMobile = canvasWidth < canvasHeight;
        const imgRatio = sourceWidth / sourceHeight;

        let targetWidth: number, targetHeight: number, offsetX: number, offsetY: number;

        if (isMobile) {
            // Mobile: hand fills width, positioned in upper-center so finger tip hits the CTA below
            targetWidth = canvasWidth * 1.2;
            targetHeight = targetWidth / imgRatio;
            offsetX = (canvasWidth - targetWidth) / 2; // centered horizontally
            offsetY = canvasHeight * 0.15; // upper portion — finger naturally points to lower area
        } else {
            // Desktop: calibrated pixel offsets for 1280px screen
            targetHeight = canvasHeight * 0.75;
            targetWidth = targetHeight * imgRatio;
            offsetX = (canvasWidth - targetWidth) / 2 - 150;
            offsetY = (canvasHeight - targetHeight) / 2 + 80;
        }

        // Clear with pure black
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);
        ctx.fillStyle = '#000000';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        // Apply grayscale filter
        ctx.filter = 'grayscale(100%) brightness(0.75) contrast(1.2)';

        // Draw the frame
        ctx.drawImage(
            img,
            sourceX, sourceY, sourceWidth, sourceHeight,
            offsetX, offsetY, targetWidth, targetHeight
        );

        // Reset filter
        ctx.filter = 'none';

        // Left-right vignette to blend edges
        const leftGrad = ctx.createLinearGradient(0, 0, 120, 0);
        leftGrad.addColorStop(0, 'rgba(0,0,0,0.95)');
        leftGrad.addColorStop(1, 'transparent');
        ctx.fillStyle = leftGrad;
        ctx.fillRect(0, 0, 120, canvasHeight);

        const rightGrad = ctx.createLinearGradient(canvasWidth - 120, 0, canvasWidth, 0);
        rightGrad.addColorStop(0, 'transparent');
        rightGrad.addColorStop(1, 'rgba(0,0,0,0.95)');
        ctx.fillStyle = rightGrad;
        ctx.fillRect(canvasWidth - 120, 0, 120, canvasHeight);

        // Subtle dark overlay to blend with projects
        ctx.fillStyle = 'rgba(0, 0, 0, 0.35)';
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    };

    // Core animation loop - matches ScrollyCanvas exactly
    useMotionValueEvent(smoothProgress, 'change', (latest: number) => {
        if (images.length === 0) return;
        const frameIndex = Math.min(FRAME_COUNT - 1, Math.floor(latest * FRAME_COUNT));
        requestAnimationFrame(() => drawFrame(images[frameIndex]));
    });

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full"
            />
            {!isLoaded && (
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border-2 border-white/20 border-t-white/60 animate-spin" />
                </div>
            )}
        </div>
    );
}
