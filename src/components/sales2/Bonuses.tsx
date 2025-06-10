/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const BonusesSection = () => {
  return (
    <section aria-labelledby="bonus-heading" className="section-py container-narrow mt-20">
    <header className="mb-10 text-center">
      <h2 id="bonus-heading" className="uppercase text-accent text-3xl font-bold">
        🚀 Bonus Arsenal — The Cargo Hold
      </h2>
      <p className="max-w-xl mx-auto mt-4 text-lg leading-relaxed">
        Welcome to the cargo hold — where the extra loot is stashed.  
        The smuggled gold, juicy contraband, and those “how-is-this-even-legal-to-give-away?” bonuses that come bundled with your copy of:  
        <strong>🧨 Don’t Start a Business… Until You Read This 37-Page Rant</strong>
      </p>
    </header>
  
    <article className="space-y-14 max-w-4xl mx-auto text-left">
      {/* BONUS 1 */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold">
          🎁 BONUS #1: Impulse Offer Alchemy
        </h3>
        <p className="italic mb-3">
          💥 “How to Make a Product So Damn Tempting… Broke Strangers Say: ‘Just take my money jare’”
        </p>
        <p>
          Ever wonder why some offers get ghosted…  
          …while others get grabbed like Jollof at a wedding?
        </p>
        <p>This bonus shows you how to turn ANY product — even a boring one — into something that sells itself on impulse.</p>
        <p>🔮 Inside, you’ll learn:</p>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>The 5 human brain buttons that trigger YES faster than you can say “limited offer”</li>
          <li>Why most “value stacks” are trash (and how to build one that melts objections like suya in the sun)</li>
          <li>A weird but true pricing tweak that makes people feel stupid for not buying</li>
        </ul>
        <p>It’s like a cheat code for offer design. Without the scammy guilt trip.</p>
      </div>
  
      {/* BONUS 2 */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold">
          🎁 BONUS #2: Landing Pages That Sell (Not Sedate)
        </h3>
        <p className="italic mb-3">
          🛬 “The No-Fluff, Idiot-Proof Layout That Makes Visitors Pull Out Their Wallet Without Thinking”
        </p>
        <p>Most landing pages are as exciting as soggy bread. Too long, too dull, too meh.</p>
        <p>This bonus gives you a plug-and-play layout (with spicy examples) that grabs broke visitors by the eyeballs and makes them want to buy.</p>
        <p>🎯 Inside:</p>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>The 4 blocks of copy your page MUST have (miss one, and sales die quietly)</li>
          <li>The psychology behind button color, placement, and CTA text (don’t guess — just copy this)</li>
          <li>Real examples from 5 different niches — from digital products to physical services</li>
        </ul>
        <p>It's not about looking pretty. It’s about printing money with pixels.</p>
      </div>
  
      {/* BONUS 3 */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold">
          🎁 BONUS #3: The Broke, Hungry, Angry Blueprint
        </h3>
        <p className="italic mb-3">
          🔥 “How to Start From ₦0 and Turn Your Spite Into Sales”
        </p>
        <p>No laptop? No followers? No ideas? Perfect.</p>
        <p>This is your bare-knuckle, no-motivation-needed plan for flipping rock-bottom into real money.</p>
        <p>📉 To 📈.</p>
        <p>Inside:</p>
        <ul className="list-disc list-inside ml-6 space-y-1">
          <li>The ₦0 → ₦30k execution plan (even if all you have is anger and 3 bars of network)</li>
          <li>3 business filters: low-capital, high-urgency, pain-solvers only</li>
          <li>Word-for-word scripts to get your first customer without ads or online clout</li>
        </ul>
        <p>This one is ugly. Dirty. Real. But it works. It’s the street hustler’s MBA.</p>
      </div>
  
      {/* BONUS 4 */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold">
          🎁 BONUS #4: Lifetime Updates, Additions & Editions
        </h3>
        <p className="italic mb-3">
          🧠 “Buy It Once. Get Every Update Forever.”
        </p>
        <p>You’re not buying a frozen PDF. You’re buying a growing system.</p>
        <p>As this rant evolves — with new case studies, templates, mini-guides, interviews, and ideas — you get them all. Forever.</p>
        <p>No upsell. No “second edition” nonsense. You’re in for life.</p>
      </div>
  
      {/* BONUS 5 */}
      <div>
        <h3 className="flex items-center gap-3 text-2xl font-bold">
          🎁 BONUS #5: The “Rant Was Rubbish” Refund Guarantee
        </h3>
        <p>If you read the book, followed it, and it still didn’t help?</p>
        <p>Just say so. You’ll get your ₦4,500 back.</p>
        <p>No form. No drama. No explanation needed.</p>
        <p>I take all the risk. You get all the reward.</p>
      </div>
  
      {/* Final CTA */}
      <div className="mt-12 text-center">
        <p className="font-bold text-lg mb-4">
          These bonuses are:  
          <br />✅ Yours instantly  
          <br />✅ No hidden conditions  
          <br />✅ Worth way more than ₦4,500 on their own  
          <br />✅ And available only when you buy now
        </p>
        <p className="mb-6">So…</p>
        <a
          href="#buy-now"
          className="btn-primary inline-block px-8 py-4 uppercase tracking-wide font-bold"
          role="button"
        >
          👉🏾 Let’s Go. I’m In.
        </a>
      </div>
    </article>
  </section>
  
  );
};

export default BonusesSection;