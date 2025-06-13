'use client';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface MessageVariant {
  headline: string;
  body: string;
  buttonText: string;
}

// Default Oops messages (for all other sections)
const defaultMessageVariants: MessageVariant[] = [
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
    body: `You were this close to discovering the juicy bit… and then bailed for Netflix?

That algorithm doesn’t care about your growth. This page kinda does.

Hit the button. Let’s finish what we started — popcorn optional.`,
    buttonText: "🔁 Back to the Story"
  },
  {
    headline: "A Chump? Really? 🙈",
    body: `You're better than that.

You clicked the Chump Button. You named yourself a chump. That’s on you.

But hey — even chumps can change.

Come back in. Rewrite your label.`,
    buttonText: "🦸‍♂ Upgrade Me to Legend"
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

// Bonuses section specific Oops messages
const bonusesOopsVariants: MessageVariant[] = [
  {
    headline: "Wait! Don’t Leave the Treasure Behind! 🏴‍☠",
    body: `You almost walked away after seeing the bonuses?

The treasure’s just a click away.

Don’t be that person who misses the map because they peeked at the wrong spot.

Come on — let's finish the quest.`,
    buttonText: "🚀 Take Me Back to the Gold"
  },
  {
    headline: "Treasure Hunters Don’t Quit Now! 💎",
    body: `You’re inches from the X on the map and you’re thinking of leaving?

That’s rookie talk.

Click the button and claim what’s rightfully yours.

Your future self will thank you.`,
    buttonText: "🏴‍☠ Show Me the Loot"
  },
  {
    headline: "Bonus Round Abandoned? Not on My Watch! 🎰",
    body: `You hit “I’m too cool for bonuses” like it’s no big deal.

Newsflash: bonuses are the secret sauce.

Don’t blow this chance.

Click below and get your game on.`,
    buttonText: "🎲 Bring Me Back to the Game"
  },
  {
    headline: "Gold Rush Panic? Chill. 💰",
    body: `Panicking about the final steps?

Relax. You’ve got the map. The treasure is real.

Come back, catch your breath, and take the prize.`,
    buttonText: "💎 Back to the Treasure"
  },
  {
    headline: "Wait! You Forgot the X Marks the Spot! ✨",
    body: `Almost clicked away before the final claim?

Don’t be that person who leaves a treasure unclaimed.

Come on, one last click to glory.`,
    buttonText: "🏆 Claim My Treasure"
  }
];

export default function OopsMessage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const fromPage = searchParams.get('from') || '/sales6';
  const fromSection = searchParams.get('section') || '';
  const boredIndexStr = searchParams.get('boredIndex');
  const boredIndex = boredIndexStr ? parseInt(boredIndexStr, 10) : -1;

  const [message, setMessage] = useState<MessageVariant | null>(null);

  useEffect(() => {
    if (fromSection === 'bonuses' && boredIndex >= 0 && boredIndex < bonusesOopsVariants.length) {
      setMessage(bonusesOopsVariants[boredIndex]);
    } else {
      // If boredIndex is invalid or section isn't bonuses, pick random default
      if (boredIndex >= 0 && boredIndex < defaultMessageVariants.length) {
        setMessage(defaultMessageVariants[boredIndex]);
      } else {
        const random = defaultMessageVariants[Math.floor(Math.random() * defaultMessageVariants.length)];
        setMessage(random);
      }
    }
  }, [fromSection, boredIndex]);

  const handleContinue = () => {
    const path = fromSection ? `${fromPage}#${fromSection}` : fromPage;
    const next = searchParams.get('next');
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