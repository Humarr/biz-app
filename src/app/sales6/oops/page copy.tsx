/* eslint-disable react/no-unescaped-entities */
// sales6/oops.tsx
'use client';

import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const headerVariants = [
  "Caught You Slacking...",
  "Oh no you didn't! 😱",
  "A Little Premature, Aren't We?",
  "Someone's not playing by the rules...", 
  "We're Not Mad, Just Disappointed 😢"
];

const continueVariants = [
  "🙌 Fine, I'll Keep Reading",
  "😅 Alright, Let's See What I Missed",
  "🎉 Back to the Good Stuff",
  "🧐 Show Me Why I Should Care",
  "🔁 Resume the Journey"  
];

export default function OopsPage() {
  const router = useRouter();
  const fromPage = router.query.from as string || '/sales6';
  const fromSection = router.query.section as string || '';

  const [headerText] = useState(headerVariants[Math.floor(Math.random() * headerVariants.length)]);
  const [continueText] = useState(continueVariants[Math.floor(Math.random() * continueVariants.length)]);

  const handleContinue = () => {
    if (fromSection) {
      router.push(`${fromPage}#${fromSection}`);
    } else {
      router.push(fromPage);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-accent">{headerText}</h1>
        <div className="card p-8 mb-8">
          <p className="text-xl mb-6">
            The good stuff is just getting started. Don't miss out on what could change everything.
          </p>
          <Link href={fromPage}>
          <button
            onClick={handleContinue}
            className="btn-primary px-8 py-4 text-xl hover:scale-105 transition-transform"
          >
            {continueText}
          </button>
          </Link>
        </div>
        <p className="text-secondary">
          (This is your chance to turn things around)
        </p>
      </div>
    </div>
  );
}