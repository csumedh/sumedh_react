import React, { useEffect, useRef, useState } from 'react';
import '../assets/styles/Education.scss';
import robotImg from '../assets/images/robot-icon.png';
import gearsImg from '../assets/images/gear-icon.png';

function Education() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [animateTop, setAnimateTop] = useState(false);
  const [animateBottom, setAnimateBottom] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === topRef.current) setAnimateTop(true);
            if (entry.target === bottomRef.current) setAnimateBottom(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    const top = topRef.current;
    const bottom = bottomRef.current;

    if (top) observer.observe(top);
    if (bottom) observer.observe(bottom);

    return () => {
      if (top) observer.unobserve(top);
      if (bottom) observer.unobserve(bottom);
    };
  }, []);

  return (
    <div id="education" className="education-custom">
      <h1>Education</h1>

      <div className="edu-wrapper">
        <div ref={topRef} className={`edu-entry top ${animateTop ? 'animate' : ''}`}>
          <div className="edu-content">
            <h2>2025</h2>
            <h3>MASTERS IN ROBOTICS</h3>
            <p>University Of Maryland, College park</p>
            <img src={robotImg} alt="robot" />
          </div>
        </div>

        <div className="edu-connector">
          <span className="circle" />
          <div className="line" />
          <span className="circle" />
        </div>

        <div ref={bottomRef} className={`edu-entry bottom ${animateBottom ? 'animate' : ''}`}>
          <div className="edu-content">
            <h2>2023</h2>
            <h3>BACHELOR’S IN MECHANICAL ENGINEERING</h3>
            <p>University of Mumbai</p>
            <img src={gearsImg} alt="gears" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
