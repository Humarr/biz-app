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
    headline: "Email from Future You 📩",
    body: `Hey. It's Future You.

You were *this* close to seeing the thing that changes everything.

But no. You clicked the “I’m bored” button. And now I'm stuck in a timeline where you're still wondering why things aren’t working.

But here's the deal: it’s not too late to fix this.

You can go back. Read the part you skipped. And maybe, just maybe… give Future You something better to wake up to.

Hit the button, champ.`,
    buttonText: "🔁 Rewind Time (and Read On)"
  },
  {
    headline: "You Just Clicked the Quitter Button 🤦‍♂️",
    body: `We literally called it that internally.

The Quitter Button.

And you clicked it. Wild.

You were 3 inches of scrolling away from the *good stuff*, but your thumb got bored and bailed.

But hey — everyone deserves a second chance.

Press the button, get back in, and let’s pretend this never happened.`,
    buttonText: "😬 Okay, I’m Back In"
  },
  {
    headline: "We’re Not Mad. Just… Disappointed 😢",
    body: `You stopped reading?

Right before the part where it got really juicy?

That’s like walking out of “Inception” during the final scene and saying, “Meh. Kinda slow.”

Don’t do that.

You’ve got one click to redeem yourself.

No judgment… *if* you act now.`,
    buttonText: "😓 Fine. Let Me See the Rest"
  },
  {
    headline: "Your Brain’s Been TikTok’d 🧠⚡",
    body: `Oh no. Not you too.

Your attention span’s been hijacked by cat reels and cooking hacks. So when this page dared to make you *read*... you bailed.

But guess what?

We were *just* about to hit the dopamine jackpot.

You’ve got one more chance to snap out of the scroll-hole and rejoin reality. No filters. No dancing.

Just the truth you needed to see.

Let’s go.`,
    buttonText: "📖 Bring Me Back"
  },
  {
    headline: "You Weren’t Supposed to Click That 🚨",
    body: `That was the decoy button. The escape hatch. The trapdoor we put there to weed out the weak.

And... you clicked it.

But hey — maybe you were testing us. Or maybe your cat walked on your keyboard. Who knows?

Point is: the story’s not over. The twist is still waiting.

You in?`,
    buttonText: "🚪 Okay Okay, Take Me Back"
  }
];

export default function OopsMessage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const fromPage = searchParams.get('from') || '/sales6';
  const fromSection = searchParams.get('section') || '';

  const [message, setMessage] = useState<MessageVariant | null>(null);

  useEffect(() => {
    const random = messageVariants[Math.floor(Math.random() * messageVariants.length)];
    setMessage(random);
  }, []);

  const handleContinue = () => {
    const path = fromSection ? `${fromPage}#${fromSection}` : fromPage;
    router.push(path);
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
      <p className="text-secondary text-sm">(Don&apos; make us come back here again.)</p>
    </div>
  );
}
