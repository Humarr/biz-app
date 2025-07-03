// pages/presell.tsx
'use client'
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

interface EventMetadata {
  [key: string]: string | number;
}

const Presell: React.FC = () => {
  useEffect(() => {
    let sessionId: string | null = localStorage.getItem("sessionId");
    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem("sessionId", sessionId);
      createSession(sessionId);
    }
    const startTime = Date.now();

    const handleBeforeUnload = () => {
      const timeSpent = Math.floor((Date.now() - startTime) / 1000);
      if (sessionId) logEvent(sessionId, "time_on_page", { timeSpent });
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  const createSession = async (sessionId: string): Promise<void> => {
    try {
      await fetch("/api/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, pageName: "presell" }),
      });
    } catch (err) {
      console.error("Failed to create session:", err);
    }
  };

  const logEvent = async (sessionId: string, type: string, metadata: EventMetadata): Promise<void> => {
    try {
      await fetch("/api/event", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId, type, metadata }),
      });
    } catch (err) {
      console.error("Failed to log event:", err);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const sessionId = localStorage.getItem("sessionId");
    if (sessionId) {
      logEvent(sessionId, "button_click", {
        buttonText: (e.target as HTMLButtonElement).innerText,
      });
    }
  };

  return (
    <div className="bg-white  max-w-3xl mx-auto px-4 py-8 font-sans ">
      <h1 className="text-3xl text-red-700 font-bold mb-12 text-center">
        Will You Make the 90% Mistake That <span className="italic underline">Destroys</span> Most Businesses Before They Even Start?
      </h1>
      <p className="mb-4 mt-12 font-medium text-xl text-center mx-2">Most people think failure happens because they’re lazy, lack connections, or don’t hustle hard enough.</p>

      <p className="mb-4 mt-6 font-bold bg-yellow-200 inline-block">But that’s a lie.</p>

      <p className="mb-4 font-medium">
        The truth?
        <br /> Businesses don’t die because of lack of effort.
        <br /> They die before they ever get a chance to succeed…
      </p>

      <div className="border-3 border-red-500 p-4 my-6">
        Because 90% of people make the same silent, deadly mistake at the very start:
        <span className="font-bold block mt-2">They guess ideas.</span>
        They spend weeks, months — even years — building something nobody wants.
        <span className="block mt-2">Something nobody pays for.</span>
        <span className="block mt-2">Something doomed from day one.</span>
      </div>

      <p className="mb-4">And by the time they realize it, they’re broke, tired, and blaming the economy.</p>

      <p className="mb-4 font-bold bg-yellow-200 inline-block">But what if you could flip this script?</p>

      <p className="mb-4">
        What if you could learn how to spot business ideas people desperately want — ideas they pay for without hesitation?
        <br /> What if you could start with the kind of idea that almost forces customers to chase you?
      </p>

      <p className="mb-4 font-bold">That’s exactly what I’m about to show you.</p>

      <p className="mb-4">And if you read every word on this page, you’ll see exactly why most businesses fail before they start — and how you can avoid the mistake that keeps 90% of hustlers broke.</p>

      <h2 className="text-2xl font-bold my-6 bg-yellow-200 inline-block">
        🔥 Ever Wonder Why Some People’s Ideas Blow Up Overnight… While Yours Collect Dust?
      </h2>

      <p className="mb-4">You’ve seen it: Someone launches a business — and before you know it, they’re sold out, moving into bigger apartments, or flexing new cars.</p>

      <p className="mb-4">Meanwhile, you’re stuck watching, wondering: “What did they do differently? Why isn’t it working for me?”</p>

      <p className="mb-4 font-bold">Here’s the cold truth:</p>

      <div className="border-3 border-gray-400 p-4 my-6">
        Most people don’t fail because they’re lazy or unlucky.
        <br /> They fail because they guess ideas based on vibes, random trends, or what friends say.
        <br /> They think,
        <ul className="list-disc pl-6 mt-2">
          <li>“This product is trending…”</li>
          <li>“Everyone’s talking about this new hustle…”</li>
          <li>“My cousin made money selling this, so I’ll do the same…”</li>
        </ul>
      </div>

      <p className="mb-4">But they never stop to ask:</p>

      <div className="border-l-4 border-yellow-500 pl-4 my-4">
        <p>Do people truly want this?</p>
        <p className="mt-2">Is there pain or frustration screaming for a solution?</p>
        <p className="mt-2">Will they pay immediately — or just compliment me and move on?</p>
      </div>

      <p className="mb-4">And so they spend months building, branding, posting, and praying… only to end up broke, frustrated, and stuck in the same spot.</p>

      <h2 className="text-2xl font-bold my-6 bg-yellow-200 inline-block">You Don’t Have to Keep Guessing</h2>

      <p className="mb-4">Because once you learn how to spot ideas born from real pain — ideas people are dying to solve — you flip the entire game. People don’t just notice you; they line up for what you offer.</p>

      <h2 className="text-2xl font-bold my-6 mt-16 bg-yellow-200 inline-block">🔥 Coming Up Next:</h2>

      <p className="mb-4">I’ll show you how to flip your hustle from guessing random “hot cakes” to building cash-generating businesses from scratch. But first, let me show you what happens when you don’t…</p>

      <h2 className="text-2xl font-bold my-6 mt-24 bg-yellow-200 inline-block">🔥 Here’s What Happens When You Keep Guessing…</h2>

      <div className="border-4 border-orange-400 p-4 my-6">
        <p>You spend weeks building something nobody asked for.</p>
        <p className="mt-2">You launch… and your phone stays silent.</p>
        <p className="mt-2">No alerts. No orders. No one even asks for your price.</p>
      </div>

      <p className="mb-4">You start doubting yourself:</p>

      <ul className="list-disc pl-6 mb-4">
        <li>“Maybe I’m not cut out for business…”</li>
        <li>“Maybe people just don’t support me…”</li>
      </ul>

      <p className="mb-4">So you try posting more flyers, changing your logo, or dropping prices. But nothing changes — because you’re solving problems no one cares about.</p>

      <div className="border-l-4 border-red-500 pl-4 my-6">
        Meanwhile… your rent is due. <br /> Your data is running out. <br /> Your family is asking why you keep “wasting time.” <br /> Poverty starts feeling permanent.
      </div>

      <p className="mb-4">You see friends cashing out from ideas you think are “too simple” or “too common,” and it burns. You keep wondering why you’re stuck in one spot, while everyone else seems to move forward.</p>

      <div className="border border-black p-4 my-6 bg-yellow-100">
        This is the silent killer of 90% of hustles:
        <ul className="list-disc pl-6 mt-2">
          <li>They guess.</li>
          <li>They guess wrong.</li>
          <li>They keep guessing… until they’re broke, bitter, and burnt out.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold my-6 bg-yellow-200 inline-block">🔥 But What If You Could Flip This?</h2>

      <p className="mb-4">What if you could learn exactly how to find business ideas rooted in pain people pay to solve? What if you knew the #1 secret the best hustlers use to build businesses that print cash — even if they start with zero capital?</p>

      <h2 className="text-2xl font-bold my-6 mt-24 bg-yellow-200 inline-block">🔥 Ready to Learn the Secret to Ideas That Practically Print Money?</h2>

      <p className="mb-4 font-bold">Because here’s what I’m about to give you:</p>

      <div className="border border-green-500 p-4 my-6 bg-green-50">
        <p className="font-bold mb-2">A FREE, step-by-step guide showing you the #1 most urgent thing you need before you start any business:</p>
        <ul className="pl-6 space-y-2">
          <li><span className="font-bold text-green-700 text-lg mr-2">✓</span> How to come up with killer business ideas that solve problems people are desperate to fix</li>
          <li><span className="font-bold text-green-700 text-lg mr-2">✓</span> How to spot hidden pains that force people to pay without begging</li>
          <li><span className="font-bold text-green-700 text-lg mr-2">✓</span> How to filter out bad ideas before you waste your time and money</li>
          <li><span className="font-bold text-green-700 text-lg mr-2">✓</span> How to turn complaints, frustrations, and random rants you hear every day into businesses that make you money on autopilot</li>
        </ul>
      </div>

      <p className="mb-4">Why this matters: When you start with a great idea, everything becomes easier:</p>

      <div className="border-l-4 border-green-500 pl-4 my-4">
        <p>Customers find you.</p>
        <p className="mt-2">You don’t waste months building what nobody wants.</p>
        <p className="mt-2">Your hustle pays you fast, instead of draining you dry.</p>
      </div>

      <p className="mb-4">And right now, you can grab this guide completely FREE. Because until you learn how to spot great business ideas, every hustle will feel like you’re pushing a car with no engine.</p>

      <h2 className="text-2xl font-bold my-6 mt-24 bg-yellow-200 inline-block">🔥 Click below to get instant access. Don’t spend another month guessing. 👇</h2>

      <button
        onClick={handleClick}
        className="bg-black text-white font-bold py-4 px-8 rounded hover:bg-gray-800"
      >
        Get Your Free Guide Now
      </button>
    </div>
  );
};

export default Presell;
