'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const readOnVariants = [
  "👀 Okay... You’ve Got My Attention",
  "😏 Alright, Impress Me",
  "🧠 I’m Into This Brain Juice",
  "🔥 That Better Not Be the Best Part",
  "🚀 Take Me to the Plot Twist",
  "🧐 I'm Suspiciously Invested Now",
  "🎯 Let's See Where This Is Going",
  "💡 Keep Feeding Me the Good Stuff",
  "👏 You Win. Show Me More",
  "📈 Still Scrolling. Still Curious"
];

const boredVariants = [
  "🙄 Pfft. This Better Get Better",
  "😴 Wake Me When It Gets Good",
  "🫠 I'm Bored. Redeem Yourself",
  "🤷‍♂️ Is This Going Somewhere?",
  "🚪 I Might Bail, Just Sayin’",
  "📉 Losing Me... Fast",
  "😐 Page Needs More Spice, Tbh",
  "😬 Starting to Regret Clicking",
  "🥱 Impress Me or I’m Out",
  "🪫 Battery's Low... So’s My Interest"
];

const introVariants = [
  "Alright, champion — time to choose: dive deeper or take a breather? The next chapter’s calling.",
  "This is it: keep riding this wave or tap out for now? Your call, boss.",
  "You’re on the edge of something good. Ready to jump in or chill for a sec?",
  "Not everyone gets this far. Ready to level up, or want to catch your breath?",
  "The story’s heating up! Do you stay for the fireworks or step aside for now?",
  "Okay, big decision: press forward and get smarter, or hit pause and save the juice?",
  "Here’s your checkpoint. Keep exploring or take five — no shame in either.",
  "You’re locked in. Keep scrolling to unlock more, or call it here (for now).",
  "You’ve earned a choice: keep your curiosity fed, or rest the mind a bit?",
  "The next bit’s a game-changer. Ready to play, or you wanna park it for now?"
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
  const [introText, setIntroText] = useState('');

  useEffect(() => {
    setReadText(readOnVariants[Math.floor(Math.random() * readOnVariants.length)]);
    setBoredText(boredVariants[Math.floor(Math.random() * boredVariants.length)]);
    setIntroText(introVariants[Math.floor(Math.random() * introVariants.length)]);
  }, []);

  const handleContinue = () => {
    router.push(nextPage);
  };

  const handleBored = () => {
    router.push(
      `/sales6/oops?from=${encodeURIComponent(currentPage)}&section=${encodeURIComponent(currentSection)}&next=${encodeURIComponent(nextPage)}`
    );
  };

  if (!readText || !boredText || !introText) return null;

  return (
    <div className="my-12 p-8 max-w-3xl mx-auto border-2 border-accent rounded-xl bg-background shadow-md">
      <p className="card text-center mb-8">
      {/* <p className="hook-intro text-center mb-8"> */}
        {introText}
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={handleContinue}
          className="btn btn-primary text-xl px-8 py-4"
          aria-label="Continue reading"
        >
          {readText}
        </button>

        <button
          onClick={handleBored}
          className="btn btn-secondary text-xl px-8 py-4"
          aria-label="Stop reading"
        >
          {boredText}
        </button>
      </div>
    </div>
  );
}
