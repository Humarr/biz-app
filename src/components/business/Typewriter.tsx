'use client';
import React, { useEffect, useState } from 'react';

type TextChunk = {
  text: string;
  className?: string;
};

type Props = {
  text: TextChunk[];         // array of text + optional style per chunk
  speed?: number;            // ms per character
  className?: string;        // overall container styling
};

const Typewriter: React.FC<Props> = ({ text, speed = 50, className }) => {
  // Flatten all text chunks into one string to count total chars
  const fullText = text.map((chunk) => chunk.text).join('');
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    setCharCount(0);  // reset if text changes
    if (!fullText.length) return;

    let i = 0;
    const interval = setInterval(() => {
      i++;
      setCharCount(i);
      if (i >= fullText.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed]);

  // Render visible text by slicing each chunk's text accordingly
  let remaining = charCount;
  const renderedChunks = text.map(({ text: chunkText, className }, idx) => {
    if (remaining <= 0) return null;

    const visibleCount = Math.min(remaining, chunkText.length);
    const visibleText = chunkText.slice(0, visibleCount);
    remaining -= visibleCount;

    return (
      <span key={idx} className={className}>
        {visibleText}
      </span>
    );
  });

  return (
    <h1 className={className}>
      {renderedChunks}
      <span className="border-r-2 border-accent animate-pulse ml-1">&nbsp;</span>
    </h1>
  );
};

export default Typewriter;
