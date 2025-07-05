import React from 'react';

export default function Home() {
  return (
    <div className="bg-background text-primary font-body">
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">

        {/* HEADLINE */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-headline text-accent uppercase mb-4">
            The Ugly Truth About Why Most Nigerians Fail in Business
          </h1>
          <p className="text-xl md:text-2xl font-semibold">
            Let’s stop pretending.
          </p>
        </section>

        {/* PAIN COPY */}
        <section className="space-y-6 text-lg leading-relaxed">
          <p>Most people start businesses by guessing or copying what others do. They buy inventory because:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Their neighbor sells it</li>
            <li>Their uncle told them it’s “moving”</li>
            <li>They saw it trending on Instagram</li>
          </ul>
          <p className="mt-4">And then they’re shocked when:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>Their money disappears faster than airtime on GLO</li>
            <li>No one buys</li>
            <li>They’re stuck explaining to family why they’re broke again</li>
          </ul>
        </section>

        {/* HOOK */}
        <section className="bg-highlight p-6 rounded-xl shadow-lg text-center text-xl font-bold uppercase tracking-wide">
          You know what’s insane?<br />
          People keep repeating this cycle, over and over — because nobody taught them how to find business ideas that actually stand a chance.
        </section>

        {/* THE SHIFT */}
        <section className="space-y-6 text-lg leading-relaxed">
          <h2 className="text-2xl text-accent font-bold uppercase">Here’s The Real Reason You’re Broke (And How To Break Free)</h2>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>You don’t lack motivation.</li>
            <li>You don’t lack discipline.</li>
            <li>You don’t even lack time.</li>
          </ul>
          <p>You just don’t know how to spot ideas rooted in deep pain. Pains so intense that people will throw money at you for relief.</p>
        </section>

        {/* PAIN-SPOTTING SECRET */}
        <section className="bg-white border-l-4 border-accent p-6 shadow-lg rounded-lg">
          <h2 className="text-xl font-bold uppercase text-accent mb-4">The Pain-Spotting Secret Nobody Teaches</h2>
          <p>Money hides in pain.</p>
          <p>But you’ve been trained to chase passion or trends — not pain.</p>
          <p>So you wander around, day after day, passing hidden opportunities:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>The frustrated mother looking for a weekend meal-prep solution</li>
            <li>The young worker tired of commuting long distances</li>
            <li>The countless people sick of unreliable services</li>
          </ul>
          <p className="font-bold mt-4 text-accent">Every one of these is a goldmine.</p>
          <p>But until you learn to see them, you’ll stay stuck.</p>
        </section>

        {/* BAD BUSINESS IDEAS */}
        <section className="text-lg space-y-4">
          <h2 className="text-2xl uppercase text-accent font-bold">Why Most “Business Ideas” You See Online Are Useless</h2>
          <p>Google “small business ideas in Nigeria” and you’ll find:</p>
          <ul className="list-disc list-inside space-y-2 pl-4">
            <li>POS agent</li>
            <li>Recharge card reseller</li>
            <li>Selling thrift clothes</li>
          </ul>
          <p className="italic">Everyone and their cousin knows these ideas.</p>
          <p>That’s why competition is brutal, margins are trash, and you end up stuck fighting 10 other sellers on your street.</p>
          <p className="font-bold text-[var(--accent)]">What you need is a new way to see opportunities nobody else notices — ideas right under your nose but invisible until you change how you look at pain.</p>
        </section>

        {/* FREE GUIDE */}
        <section className="bonus-card space-y-4 text-lg">
          <h2 className="text-2xl uppercase text-accent font-bold">That’s Why I Created This FREE Guide</h2>
          <p className="text-xl font-bold italic">The Hidden Art of Spotting Stupidly Simple Money-Making Opportunities</p>
          <p>is a raw, no-fluff guide that teaches you:</p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li>🔥 10+ practical ways to sniff out business ideas rooted in real pain</li>
            <li>🔥 How to flip boring everyday frustrations into cash cows</li>
            <li>🔥 Real-life Nigerian stories of regular people who got rich solving simple pains</li>
            <li>🔥 The mindset shift that’ll make you see money everywhere you go</li>
          </ul>
        </section>

        {/* VISION BLOCK */}
        <section className="text-center text-xl md:text-2xl font-semibold space-y-6">
          <p><strong>Imagine This…</strong></p>
          <p>You walk down your street and spot 3 pain-based business ideas before you get to the bus stop</p>
          <p>You stop wasting time and money on random ideas that flop</p>
          <p>You feel confident picking opportunities, knowing they’re backed by real pain people will pay to end</p>
          <p>You finally break the cycle of begging for loans or depending on “salary alerts”</p>
        </section>

        {/* URGENCY SECTION */}
        <section className="text-box-accent text-center text-lg md:text-xl space-y-4">
          <p className="uppercase tracking-wide">This Guide Is 100% Free (But Won’t Be Forever)</p>
          <p>I’m giving it away because I know once you taste what’s inside, you’ll never want to go back to guessing again — and you’ll crave the complete blueprint to turn these ideas into cash.</p>
        </section>

        {/* ⚠️ WARNING */}
        <section className="text-center bg-note border-l-4 border-accent p-6 rounded-xl shadow-md text-lg md:text-xl">
          <p className="font-headline uppercase text-accent tracking-wide">
            ⚠️ Don’t Keep Walking Past Your Fortune
          </p>
          <p>Every day you spend blind to hidden pains is a day you watch someone else wake up, solve them, and take your money.</p>
        </section>

        {/* CTA FORM */}
        <section className="text-center space-y-4">
          <p className="text-xl font-bold uppercase">Enter your name and email below — get the guide instantly — and start seeing ideas that could change your life.</p>
          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button type="submit" className="btn btn-primary w-full text-xl">
              YES! Send Me The Free Guide Now
            </button>
          </form>
        </section>

        {/* P.S. SECTION */}
        <section className="scribble-note text-lg">
          <p><strong>P.S.</strong></p>
          <p>This isn’t just another “10 business ideas you can start” list. It’s a mindset shift you’ll use for life — so you never have to guess again.</p>
          <div className="mt-4 text-center">
            <button className="btn btn-secondary text-lg">Get The Free Guide Instantly</button>
          </div>
        </section>

      </main>
    </div>
  );
}
