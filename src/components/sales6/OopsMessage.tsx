'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface MessageVariant {
  headline: string;
  body: string;
  buttonText: string;
}

const messageVariants: MessageVariant[] = [
  {
    headline: "Soft? Nah, You're Just Warming Up 💪",
    body: `You clicked “I'm too soft for this”? Come on.

You're not made of marshmallows. You're built for breakthroughs.

That moment of doubt? That was just the plot twist.

Click the button. Prove Soft-You wrong.`,
    buttonText: "💥 Show Me What I Was Missing"
  },
  {
    headline: "Netflix Can Wait 🍿",
    body: `You were *this close* to discovering the juicy bit… and then bailed for Netflix?

That algorithm doesn’t care about your growth. This page kinda does.

Hit the button. Let’s finish what we started — popcorn optional.`,
    buttonText: "🔁 Back to the Story"
  },
  {
    headline: "A Chump? Really? 🙈",
    body: `You're better than that.

You clicked the Chump Button. You *named yourself* a chump. That’s on you.

But hey — even chumps can change.

Come back in. Rewrite your label.`,
    buttonText: "🦸‍♂️ Upgrade Me to Legend"
  },
  {
    headline: "Wow. Drama Queen Exit 💅",
    body: `You hit “Fine, I’ll Leave” like this was some reality TV walkout.

But guess what? The story didn’t stop. The best part is still waiting backstage.

You can still make your entrance. Let’s go.`,
    buttonText: "🎤 I’m Back, Don’t Clap Too Loud"
  },
  {
    headline: "Lost in the Forest? I Brought a Map 🧭",
    body: `So you're wandering in the woods now? Please.

This page isn’t a forest — it's a treasure map. You just stepped off the trail.

Good news: I’ve got snacks and a shortcut.

Click the button. Let’s get you un-lost.`,
    buttonText: "🌟 Lead Me to the Gold"
  }
];

export default function OopsMessage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const fromPage = searchParams.get('from') || '/sales6';
  const fromSection = searchParams.get('section') || '';
  const boredIndexParam = searchParams.get('boredIndex');
  const next = searchParams.get('next');

  const [message, setMessage] = useState<MessageVariant | null>(null);

  useEffect(() => {
    const index = boredIndexParam ? parseInt(boredIndexParam) : -1;
    const fallback = 0; // default to first message if index invalid
    const validMessage = messageVariants[index] || messageVariants[fallback];
    setMessage(validMessage);
  }, [boredIndexParam]);

  const handleContinue = () => {
    const path = fromSection ? `${fromPage}#${fromSection}` : fromPage;
    if (next) {
      router.push(next);
    } else {
      router.push(path);
    }
  };

  if (!message) return null;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-accent">{message.headline}</h1>
      <div className="card p-8 mb-8 text-left whitespace-pre-wrap text-lg">
        <p className="mb-6">{message.body}</p>
        <button
          onClick={handleContinue}
          className="btn-primary px-8 py-4 text-xl hover:scale-105 transition-transform"
        >
          {message.buttonText}
        </button>
      </div>
      <p className="text-secondary text-sm">(Don&apos;t make us come back here again.)</p>
    </div>
  );
}
