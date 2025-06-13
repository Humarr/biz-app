/* eslint-disable react/no-unescaped-entities */
// pages/oops.tsx
'use client';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

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
  const fromPath = router.query.from as string || '/';

  const [headerText] = useState(headerVariants[Math.floor(Math.random() * headerVariants.length)]);
  const [continueText] = useState(continueVariants[Math.floor(Math.random() * continueVariants.length)]);

  const handleContinue = () => {
    router.push(fromPath);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-accent">{headerText}</h1>
        <div className="card p-8 mb-8">
          <p className="text-xl mb-6">
            Looks like you almost missed the good stuff. Lucky for you, we believe in second chances.
          </p>
          <Link href="/sales6">
          <button
            onClick={handleContinue}
            className="btn-primary px-8 py-4 text-xl hover:scale-105 transition-transform"
          >
            {continueText}
          </button>
          </Link>
        </div>
        <p className="text-secondary">
          (We won't tell anyone you tried to leave early)
        </p>
      </div>
    </div>
  );
}