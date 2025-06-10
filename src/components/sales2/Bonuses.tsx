/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const BonusesSection = () => {
  return (
    <section aria-labelledby="bonus-heading" className="section-py container-narrow mt-24">
      <header className="mb-14 text-center">
        <h2 id="bonus-heading" className="uppercase text-accent text-4xl font-bold tracking-tight">
          🚀 The Bonus Arsenal: Welcome to The Cargo Hold
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg leading-relaxed text-secondary">
          This is where the good stuff’s hidden.  
          The contraband. The extra juice. The unfair advantage you get with your copy of:  
          <strong className="text-primary block mt-2">🧨 “Don’t Start a Business… Until You Read This 37-Page Rant”</strong>
        </p>
      </header>

      <article className="space-y-20 max-w-4xl mx-auto text-left">
        {/* BONUS 1 */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-primary">
            🎁 BONUS #1: Impulse Offer Alchemy
          </h3>
          <p className="italic mb-2 text-accent">
            💥 “Make it so tempting they scream: ‘Just take my money jare!’”
          </p>
          <p>Why do some offers flop while others sell out in hours?</p>
          <p>This bonus shows how to turn even boring products into magnetic, can’t-ignore offers.</p>
          <p className="mt-4 font-semibold">🔮 You’ll uncover:</p>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>The 5 psychological buttons that scream “YES” in the brain</li>
            <li>Why most “value stacks” are weak—and how to build one that slaps</li>
            <li>A sneaky pricing trick that makes not buying feel dumb</li>
          </ul>
        </div>

        {/* BONUS 2 */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-primary">
            🎁 BONUS #2: Landing Pages That Sell (Not Sedate)
          </h3>
          <p className="italic mb-2 text-accent">
            🛬 “The no-fluff layout that unlocks wallets”
          </p>
          <p>Tired of landing pages that feel like a lecture? This layout sells while staying spicy.</p>
          <p className="mt-4 font-semibold">🎯 Inside:</p>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>The 4 must-have sections that drive action</li>
            <li>CTA psychology: button color, copy & placement (no guesswork)</li>
            <li>Proven examples from 5 hot niches</li>
          </ul>
        </div>

        {/* BONUS 3 */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-primary">
            🎁 BONUS #3: The Broke, Hungry, Angry Blueprint
          </h3>
          <p className="italic mb-2 text-accent">
            🔥 “No cash? No clout? Start here.”
          </p>
          <p>No fluff. No excuses. This is the gritty, zero-budget roadmap to ₦30k and beyond.</p>
          <p className="mt-4 font-semibold">💼 Here’s what’s inside:</p>
          <ul className="list-disc list-inside ml-5 space-y-1">
            <li>The ₦0 → ₦30k plan using just WhatsApp & willpower</li>
            <li>3 filters to pick profitable, fast-start biz ideas</li>
            <li>Scripts that land your first customer (no ads, no fans)</li>
          </ul>
        </div>

        {/* BONUS 4 */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-primary">
            🎁 BONUS #4: Lifetime Updates & Additions
          </h3>
          <p className="italic mb-2 text-accent">
            🧠 “One payment. All future upgrades.”
          </p>
          <p>This isn't a static PDF. It’s a living library. New templates, mini-guides, interviews, examples—free. Forever.</p>
          <p>No upsells. No gimmicks. Just value for life.</p>
        </div>

        {/* BONUS 5 */}
        <div>
          <h3 className="flex items-center gap-2 text-2xl font-bold text-primary">
            🎁 BONUS #5: The “Rant Was Rubbish” Refund
          </h3>
          <p>If you read it, applied it, and didn’t get value?</p>
          <p>You get a full refund. No questions. No hoops.</p>
          <p>You're covered. I take the risk. You keep the wins.</p>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <p className="font-bold text-lg leading-relaxed mb-6">
            ✅ All 5 bonuses are yours — instantly  
            <br />✅ No fine print  
            <br />✅ Worth more than ₦4,500 alone  
            <br />✅ But only available *right now*
          </p>
          <a
            href="#buy-now"
            className="btn-primary inline-block px-8 py-4 uppercase tracking-wide font-bold shadow-md hover:shadow-xl animate-float"
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
