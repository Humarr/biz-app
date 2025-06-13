'use client';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const readOnVariants = [
  "⚔️ Bring it on — Show Me the Truth",
  "🎬 Hit Me With the Next Episode",
  "🤘 I’m a Legend — Let’s Go",
  "💅 Okay Sass-Master, I’m Staying",
  "🏆 I’m the 3% — Show Me the Gold"
];

const boredVariants = [
  "😩 Nah, I'm Too Soft for This",
  "💤 Nah, I’ll Go Watch Actual Netflix",
  "🙃 I’m a Chump, I Guess",
  "😤 Ugh Fine, I’ll Leave",
  "🌲 Guess I’ll Stay Lost in the Forest"
];

const introVariants = [
  "Okay... You've made it this far, which means you're either really interested… or just really bored. Either way, you’ve earned the right to see what comes next. But only if you’re brave enough to handle the truth.",
  "This is the part where most people scroll away. But you? You’re not most people. Or are you? 👀 Ready for the next episode?",
  "Pop quiz: What do legends do when they’re on the verge of discovering something game-changing? \na) Tap out like a chump \nb) Lean in like a legend \nc) You can only pick one.",
  "Oof. That last section was a lot, huh? I get it — intensity isn't for everyone. You can tap out now and return to scrolling TikToks… Or you can stay, and maybe… actually do something epic for yourself.",
  "Legend has it… only 3% of readers ever make it to the treasure. Most give up just before they hit gold. So… are you the 97% or the 3%?"
];

// Bonuses section specific variants
const bonusesIntro = "You’ve Got the Treasure Map 🗺\nThe gold’s on the table.\nYour bag is halfway packed.\nWanna ask a few questions first — or just grab it and run?";

const bonusesReadOnVariants = [
  "🧐 Let Me Peek at the FAQs First",
  "🔥 Take Me to the Final Call",
  "🎯 Yeah Yeah, Hit Me With the Last Pitch",
  "🤏 Alright, I’m Almost Sold. What Else?",
  "😅 Okay, Convince Me All the Way"
];

const bonusesBoredVariants = [
  "🙄 This Can’t Be That Good",
  "🫠 Nah, I’ve Seen Enough",
  "🤷‍♀ Eh, Maybe Later",
  "😬 No Thanks, I Prefer Regret",
  "😎 I'm Too Cool for Bonuses, Apparently"
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
    if (currentSection === 'bonuses') {
  // Use bonuses variants
  setIntroText(bonusesIntro);
  setReadText(bonusesReadOnVariants[Math.floor(Math.random() * bonusesReadOnVariants.length)]);
  setBoredText(bonusesBoredVariants[Math.floor(Math.random() * bonusesBoredVariants.length)]);
} else {
  // Use default variants
  setIntroText(introVariants[Math.floor(Math.random() * introVariants.length)]);
  setReadText(readOnVariants[Math.floor(Math.random() * readOnVariants.length)]);
  setBoredText(boredVariants[Math.floor(Math.random() * boredVariants.length)]);
}

  }, [currentSection]);

  const handleContinue = () => {
    router.push(nextPage);
  };

  const handleBored = () => {
    router.push(
  `/sales6/oops?from=${encodeURIComponent(currentPage)}&section=${encodeURIComponent(currentSection)}&next=${encodeURIComponent(nextPage)}&boredIndex=${getBoredIndex()}`
);
  };

  // Helper to get the bored index depending on section + boredText
  function getBoredIndex() {
    if (currentSection === 'bonuses') {
      return bonusesBoredVariants.indexOf(boredText);
    }
    return boredVariants.indexOf(boredText);
  }

  if (!readText || !boredText || !introText) return null;

  return (
    <div className="my-12 p-8 max-w-3xl mx-auto border-2 border-accent rounded-xl bg-background shadow-md">
      <p className="card text-center mb-8">
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

