'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const readOnVariants = [
  "👉 Keep Going, I'm Hooked",
  "🚀 Yes, Tell Me More", 
  "🔥 I Need to See What's Next",
  // "📖 Continue the Story",
  "🎯 I'm Still With You"
];

const boredVariants = [
  "😴 Meh... This Isn't for Me",
  "🙄 I've Seen Enough",
  "💤 I'm Getting Sleepy", 
  "😐 This Better Get Better...",
  "🚪 I Might Be Out..."
];

interface ChoiceBreakProps {
  nextPage: string;
  currentPage: string;
  currentSection: string;
}

export default function ChoiceBreak({ nextPage, currentPage, currentSection }: ChoiceBreakProps) {
  const router = useRouter();

  const [readText, setReadText] = useState('');
  const [boredText, setBoredText] = useState('');

  useEffect(() => {
    // Randomize text *after* the component has mounted
    setReadText(readOnVariants[Math.floor(Math.random() * readOnVariants.length)]);
    setBoredText(boredVariants[Math.floor(Math.random() * boredVariants.length)]);
  }, []);

  const handleContinue = () => {
    router.push(nextPage);
  };

  const handleBored = () => {
    router.push(`/sales6/oops?from=${encodeURIComponent(currentPage)}&section=${encodeURIComponent(currentSection)}`);
    // router.push(`/oops?from=${encodeURIComponent(currentPage)}&section=${encodeURIComponent(currentSection)}`);
  };

  // Prevent rendering until variant text is ready (hydration-safe)
  if (!readText || !boredText) return null;

  return (
    <div className="my-12 p-6 border-2 border-accent rounded-xl bg-background">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={handleContinue}
          className="btn-primary px-8 py-4 text-xl hover:scale-105 transition-transform font-sans rounded-2xl"
        >
          {readText}
        </button>
        <button
          onClick={handleBored}
          className="px-8 py-4 text-xl border-2 border-accent rounded-xl bg-white hover:bg-gray-100 transition-colors hover:animate-wiggle font-sans"
        >
          {boredText}
        </button>
      </div>
    </div>
  );
}
