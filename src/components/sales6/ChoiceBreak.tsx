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

const bonusesPrimaryVariants = [
  "🧐 Let Me Peek at the FAQs First",
  "🎯 Yeah Yeah, Hit Me With the Last Pitch",
  "😅 Okay, Convince Me All the Way"
];

const bonusesCheckoutVariants = [
  "🔥 Take Me to the Final Call",
  "🤏 Alright, I’m Almost Sold. What Else?",
  "🏆 Claim My Bonus Now",
  "🚀 Take Me to the Gold"
];

interface ChoiceBreakProps {
  nextPage: string;
  currentPage: string;
  currentSection: string;
}

export default function ChoiceBreak({ nextPage, currentPage, currentSection }: ChoiceBreakProps) {
  const router = useRouter();
  const [primaryText, setPrimaryText] = useState('');
  const [secondaryText, setSecondaryText] = useState('');
  const [introText, setIntroText] = useState('');

  useEffect(() => {
    if (currentSection === 'bonuses') {
      setIntroText(bonusesIntro);
      setPrimaryText(bonusesPrimaryVariants[Math.floor(Math.random() * bonusesPrimaryVariants.length)]);
      setSecondaryText(bonusesCheckoutVariants[Math.floor(Math.random() * bonusesCheckoutVariants.length)]);
    } else {
      setIntroText(introVariants[Math.floor(Math.random() * introVariants.length)]);
      setPrimaryText(readOnVariants[Math.floor(Math.random() * readOnVariants.length)]);
      setSecondaryText(boredVariants[Math.floor(Math.random() * boredVariants.length)]);
    }
  }, [currentSection]);

  const handlePrimary = () => {
    if (currentSection === 'bonuses') {
      router.push('/sales6/part4'); // Or wherever you want to send the user for more info
    } else {
      router.push(nextPage);
    }
  };

  const handleSecondary = () => {
    if (currentSection === 'bonuses') {
      router.push('/sales6/checkout'); // Or wherever your final CTA/checkout is
    } else {
      router.push(
        `/sales6/oops?from=${encodeURIComponent(currentPage)}&section=${encodeURIComponent(currentSection)}&next=${encodeURIComponent(nextPage)}&boredIndex=${getBoredIndex()}`
      );
    }
  };

  function getBoredIndex() {
    if (currentSection === 'bonuses') return -1; // Not relevant anymore
    return boredVariants.indexOf(secondaryText);
  }

  if (!primaryText || !secondaryText || !introText) return null;

  return (
    <div className="my-12 p-8 max-w-3xl mx-auto border-2 border-accent rounded-xl bg-background shadow-md">
      <p className="card text-center mb-8 whitespace-pre-wrap">{introText}</p>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <button
          onClick={handlePrimary}
          className="btn btn-primary text-xl px-8 py-4"
          aria-label="Primary action"
        >
          {primaryText}
        </button>

        <button
          onClick={handleSecondary}
          className="btn btn-secondary text-xl px-8 py-4"
          aria-label="Secondary action"
        >
          {secondaryText}
        </button>
      </div>
    </div>
  );
}
