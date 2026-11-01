'use client';
import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

interface ProjectMediaProps {
  title: string;
  image?: string;
  preview?: string; // short muted webm loop
}

// Plays the preview loop only while the card is on screen; reduced motion keeps the still image
export function ProjectMedia({ title, image, preview }: ProjectMediaProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();
  const [failed, setFailed] = useState(false);
  const showVideo = Boolean(preview) && !reduceMotion && !failed;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !showVideo) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        video.play().catch(() => { /* autoplay blocked: the poster stays */ });
      } else {
        video.pause();
      }
    }, { threshold: 0.5 });
    observer.observe(video);
    return () => observer.disconnect();
  }, [showVideo]);

  const mediaClass = 'w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700';

  if (showVideo) {
    return (
      <video
        ref={videoRef}
        src={preview}
        poster={image}
        muted
        loop
        playsInline
        preload="none"
        aria-label={`${title} screen recording`}
        onError={() => setFailed(true)}
        className={mediaClass}
      />
    );
  }

  if (image) {
    return <img src={image} alt={title} loading="lazy" decoding="async" className={mediaClass} />;
  }

  return null;
}
