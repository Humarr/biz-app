// app/sales6/oops/page.tsx
'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

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
  const searchParams = useSearchParams();

  const fromPage = searchParams.get('from') || '/sales6';
  const fromSection = searchParams.get('section') || '';

  const [headerText, setHeaderText] = useState('');
  const [continueText, setContinueText] = useState('');

  useEffect(() => {
    setHeaderText(headerVariants[Math.floor(Math.random() * headerVariants.length)]);
    setContinueText(continueVariants[Math.floor(Math.random() * continueVariants.length)]);
  }, []);

  const handleContinue = () => {
    const path = fromSection ? `${fromPage}#${fromSection}` : fromPage;
    router.push(path);
  };

  if (!headerText || !continueText) return null;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-accent">{headerText}</h1>
        <div className="card p-8 mb-8">
          <p className="text-xl mb-6">
            The good stuff is just getting started. Don&apos;t miss out on what could change everything.
          </p>
          <button
            onClick={handleContinue}
            className="btn-primary px-8 py-4 text-xl hover:scale-105 transition-transform"
          >
            {continueText}
          </button>
        </div>
        <p className="text-secondary">
          (This is your chance to turn things around)
        </p>
      </div>
    </div>
  );
}
