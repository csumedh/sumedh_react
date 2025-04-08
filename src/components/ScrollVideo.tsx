import React, { useEffect, useRef, useState } from 'react';
import camsetVideo from '../assets/videos/camset.mp4';

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5, // 50% of the video is visible
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isVisible) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [isVisible]);

  return (
    <div
      ref={containerRef}
      style={{
        width: '90%',
        aspectRatio: '4 / 3',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '0.5rem',
      }}
    >
      <video
        ref={videoRef}
        src={camsetVideo}
        muted
        playsInline
        preload="auto"
        loop
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          borderRadius: '12px',
        }}
      />
    </div>
  );
};

export default ScrollVideo;
