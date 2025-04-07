import React, { useRef } from 'react';
import camsetVideo from '../assets/videos/camset.mp4';

const ScrollVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    videoRef.current?.pause();
  };

  return (
    <a
      href="https://drive.google.com/file/d/1QAijZqzROOFWq7DK6RPdn-MUgvB7PhnB/view?usp=sharing"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block', marginBottom: '0.5rem' }}
    >
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          width: '90%',
          aspectRatio: '4 / 3',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <video
          ref={videoRef}
          src={camsetVideo}
          muted
          playsInline
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </a>
  );
};

export default ScrollVideo;
