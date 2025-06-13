// components/ChoiceBreak.tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

const readOnVariants = [
  "👉 Keep Going, I'm Hooked",
  "🚀 Yes, Tell Me More",
  "🔥 I Need to See What's Next",
  "📖 Continue the Story",
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
  nextSection: string;
  currentSection: string;
}

export default function ChoiceBreak({ nextSection, currentSection }: ChoiceBreakProps) {
  const router = useRouter();
  const [readText] = useState(readOnVariants[Math.floor(Math.random() * readOnVariants.length)]);
  const [boredText] = useState(boredVariants[Math.floor(Math.random() * boredVariants.length)]);

  const handleContinue = () => {
    // Smooth scroll to next section if it's an anchor
    if (nextSection.startsWith('#')) {
      document.querySelector(nextSection)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push(nextSection);
    }
  };

  const handleBored = () => {
    router.push(`/oops?from=${encodeURIComponent(currentSection)}`);
  };

  return (
    <div className="my-12 p-6 border-2 border-accent rounded-xl bg-background">
      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={handleContinue}
          className="btn-primary px-8 py-4 text-xl hover:scale-105 transition-transform"
        >
          {readText}
        </button>
        <button
          onClick={handleBored}
          className="px-8 py-4 text-xl border-2 border-accent rounded-lg bg-white hover:bg-gray-100 transition-colors hover:animate-wiggle"
        >
          {boredText}
        </button>
      </div>
    </div>
  );
}