/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const BonusSection = () => {
  return (
    <section className="section-py bg-[rgb(var(--background))]">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-headline2 uppercase">
            Captain... welcome to the cargo hold.
          </h2>
          <p className="text-xl mt-4">
            Where we've stashed the extra loot — the smuggled gold, the juicy contraband, the "how-is-this-even-legal-to-give-away?" bonuses that come bundled with your copy of:
          </p>
        </div>

        <div className="bg-accent text-white p-6 rounded-lg text-center mb-12">
          <h3 className="text-2xl font-headline2 uppercase">
            🧨 Don't Start a Business... Until You Read This 37-Page Rant
          </h3>
        </div>

        <div className="space-y-16">
          {/* Bonus 1 */}
          <div className="bonus-card">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎁</span>
              <h3 className="text-2xl font-headline2 uppercase">BONUS #1: Impulse Offer Alchemy</h3>
            </div>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="font-bold">💥 "How to Make a Product So Damn Tempting... Broke Strangers Say: 'Just take my money jare'"</p>
            </div>
            <p className="text-secondary mb-4">
              Ever wonder why some offers get ghosted...<br />
              ...while others get grabbed like Jollof at a wedding?
            </p>
            <p className="text-secondary mb-4">
              This bonus shows you how to turn ANY product — even a boring one — into something that sells itself on impulse.
            </p>
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-headline2 uppercase text-primary mb-2">🔮 Inside, you'll learn:</h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>The 5 human brain buttons that trigger YES faster than you can say "limited offer"</li>
                <li>Why most "value stacks" are trash (and how to build one that melts objections like suya in the sun)</li>
                <li>A weird but true pricing tweak that makes people feel stupid for not buying</li>
              </ul>
            </div>
            <p className="text-primary font-bold mt-4">
              It's like a cheat code for offer design.<br />
              Without the scammy guilt trip.
            </p>
          </div>

          {/* Bonus 2 */}
          <div className="bonus-card">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎁</span>
              <h3 className="text-2xl font-headline2 uppercase">BONUS #2: Landing Pages That Sell (Not Sedate)</h3>
            </div>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="font-bold">🛬 "The No-Fluff, Idiot-Proof Layout That Makes Visitors Pull Out Their Wallet Without Thinking"</p>
            </div>
            <p className="text-secondary mb-4">
              Most landing pages are as exciting as soggy bread.<br />
              Too long, too dull, too meh.
            </p>
            <p className="text-secondary mb-4">
              This bonus gives you a plug-and-play layout (with spicy examples) that grabs broke visitors by the eyeballs and makes them want to buy.
            </p>
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-headline2 uppercase text-primary mb-2">🎯 Inside:</h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>The 4 blocks of copy your page MUST have (miss one, and sales die quietly)</li>
                <li>The psychology behind button color, placement, and CTA text (don't guess — just copy this)</li>
                <li>Real examples from 5 different niches — from digital products to physical services</li>
              </ul>
            </div>
            <p className="text-primary font-bold mt-4">
              It's not about looking pretty.<br />
              It's about printing money with pixels.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="bonus-card">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎁</span>
              <h3 className="text-2xl font-headline2 uppercase">BONUS #3: The Broke, Hungry, Angry Blueprint</h3>
            </div>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="font-bold">🔥 "How to Start From ₦0 and Turn Your Spite Into Sales"</p>
            </div>
            <p className="text-secondary mb-4">
              No laptop?<br />
              No followers?<br />
              No ideas?<br />
              Perfect.
            </p>
            <p className="text-secondary mb-4">
              This is your bare-knuckle, no-motivation-needed plan for flipping rock-bottom into real money.
            </p>
            <div className="text-center mb-4">
              <p className="text-xl font-bold">📉 To 📈.</p>
            </div>
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-headline2 uppercase text-primary mb-2">Inside:</h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>The ₦0 → ₦30k execution plan (even if all you have is anger and 3 bars of network)</li>
                <li>3 business filters: low-capital, high-urgency, pain-solvers only</li>
                <li>Word-for-word scripts to get your first customer without ads or online clout</li>
              </ul>
            </div>
            <p className="text-primary font-bold mt-4">
              This one is ugly. Dirty. Real.<br />
              But it works.<br />
              It's the street hustler's MBA.
            </p>
          </div>

          {/* Bonus 4 */}
          <div className="bonus-card">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎁</span>
              <h3 className="text-2xl font-headline2 uppercase">BONUS #4: Lifetime Updates, Additions & Editions</h3>
            </div>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="font-bold">🧠 "Buy It Once. Get Every Update Forever."</p>
            </div>
            <p className="text-secondary mb-4">
              You're not buying a frozen PDF.
            </p>
            <p className="text-secondary mb-4">
              You're buying a growing system.
            </p>
            <p className="text-secondary mb-4">
              As this rant evolves — with new case studies, templates, mini-guides, interviews, and ideas — you get them all.
            </p>
            <p className="text-primary font-bold">
              Forever.
            </p>
            <p className="text-secondary mt-2">
              No upsell. No "second edition" nonsense.<br />
              You're in for life.
            </p>
          </div>

          {/* Bonus 5 */}
          <div className="bonus-card">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🎁</span>
              <h3 className="text-2xl font-headline2 uppercase">BONUS #5: The "Rant Was Rubbish" Refund Guarantee</h3>
            </div>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="font-bold">💸 "I Take All The Risk. You Get All The Reward."</p>
            </div>
            <p className="text-secondary mb-4">
              If you read the book, followed it, and it still didn't help?
            </p>
            <p className="text-secondary mb-4">
              Just say so.
            </p>
            <p className="text-primary font-bold mb-4">
              You'll get your ₦4,500 back.<br />
              No form. No drama. No explanation needed.
            </p>
            <p className="text-accent font-bold">
              I take all the risk. You get all the reward.
            </p>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-headline2 uppercase mb-4">
              These bonuses are:
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <p className="flex items-center justify-center">
                <span className="text-primary font-bold mr-2">✅</span> Yours instantly
              </p>
              <p className="flex items-center justify-center">
                <span className="text-primary font-bold mr-2">✅</span> No hidden conditions
              </p>
              <p className="flex items-center justify-center">
                <span className="text-primary font-bold mr-2">✅</span> Worth way more than ₦4,500 on their own
              </p>
              <p className="flex items-center justify-center">
                <span className="text-primary font-bold mr-2">✅</span> And available only when you buy now
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl mb-8">
              So...<br />
              Click below.<br />
              Grab the book.<br />
              Take the bonuses.<br />
              And start your business the right way — before it becomes another sad Instagram case study.
            </p>
           
            <Link href="/payment" passHref>
      <button className="btn-primary text-xl px-8 py-4 mb-4 animate-float">
              👉🏾 Let's Go. I'm In.
        
      </button>
    </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;