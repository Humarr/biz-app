'use client';
import React, { useEffect, useState } from 'react';

type Props = {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
};

const Typewriter: React.FC<Props> = ({ text, speed = 50, className }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(i));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    
    <h1 className={`${className}`}>
      {displayedText}
      <span className="border-r-2 border-accent animate-pulse ml-1">&nbsp;</span>
    </h1>
  );
};

export default Typewriter;
