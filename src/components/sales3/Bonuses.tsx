/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const BonusesSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <article className="space-y-8">
          <div className="text-center mb-8">
            <h2 className="text-accent text-3xl font-bold uppercase tracking-tight">
              🔥 BONUSES (That Might Just Be Better Than the Book Itself... But Shhh)
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-primary text-lg">
              You didn't think I'd just drop the book and walk away, did you?
            </p>
            
            <p className="text-primary text-xl font-bold">
              Nope.
            </p>
            
            <div className="bg-highlight p-4 rounded-lg">
              <p className="text-primary text-xl font-bold">
                Because I want you to win so badly...
                <br />
                I added 3 savage bonuses.
              </p>
            </div>
            
            <p className="text-primary text-lg font-bold">
              And yes — you get them free when you grab the book now.
            </p>
          </div>

          {/* Bonus 1 */}
          <div className="space-y-6 bg-note p-6 rounded-lg">
            <h3 className="text-accent text-2xl font-bold uppercase">
              🎁 BONUS #1: Impulse Offer Alchemy
            </h3>
            <p className="text-primary text-lg italic">
              "How to Sell Anything to Anyone Who Wasn't Even Planning to Buy"
            </p>
            
            <p className="text-primary text-lg">
              Ever seen someone say:
            </p>
            
            <div className="scribble-note text-lg">
              "I didn't plan to buy, but I just had to..."
            </div>
            
            <p className="text-primary text-lg">
              This bonus shows you how to create that reaction — using simple, savage principles.
              <br />
              You'll learn:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-primary text-lg">
              <li>The secret psychological "buy-switch" you can trigger in broke people</li>
              <li>Why most offers are ignored (and how to build one that slaps instantly)</li>
              <li>The 4 'magic moves' that turn any product into an impulse-purchase magnet</li>
            </ul>
            
            <p className="text-primary text-lg font-bold">
              Use this to make your product, skill, or hustle instantly more sellable — even if it's dry garri in a sachet.
            </p>
          </div>

          {/* Bonus 2 */}
          <div className="space-y-6 bg-accent/10 p-6 rounded-lg">
            <h3 className="text-accent text-2xl font-bold uppercase">
              🎁 BONUS #2: Landing Pages That Sell (Not Sedate)
            </h3>
            <p className="text-primary text-lg italic">
              "A No-Fluff, Idiot-Proof Layout That Makes Strangers Say: 'You know what, lemme just buy this thing jare.'"
            </p>
            
            <p className="text-primary text-lg">
              If you're trying to sell anything — and your landing page is boring, stiff, or confusing?
            </p>
            
            <p className="text-primary text-lg font-bold">
              You're already losing money.
            </p>
            
            <p className="text-primary text-lg">
              This bonus gives you a step-by-step breakdown of a high-converting sales page built for people with:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-primary text-lg">
              <li>₦0 for ads</li>
              <li>₦0 for fancy design</li>
              <li>₦0 patience for fluff</li>
            </ul>
            
            <p className="text-primary text-lg font-bold">
              Swipe it. Copy it. Tattoo it on your wall.
              <br />
              Whatever you do — use it before you lose more sales.
            </p>
          </div>

          {/* Bonus 3 */}
          <div className="space-y-6 bg-highlight p-6 rounded-lg">
            <h3 className="text-accent text-2xl font-bold uppercase">
              🎁 BONUS #3: The Broke, Hungry, Angry Blueprint
            </h3>
            <p className="text-primary text-lg italic">
              "Your Full, Unfiltered Plan for Starting From Absolute Scratch (Even If You've Got ₦0, No Laptop, and No Clue)"
            </p>
            
            <p className="text-primary text-lg">
              This is the battle-plan for the truly fed-up beginner.
              <br />
              Inside, you'll learn:
            </p>
            
            <ul className="list-disc list-inside space-y-2 text-primary text-lg">
              <li>How to start with ₦3k (or less) and flip it into ₦30k, then ₦300k</li>
              <li>The 3 fastest ways to get your first customer — no followers, no ads</li>
              <li>What to sell TODAY (based on what you already know but don't realise)</li>
              <li>How to use other people's products to make your first profit</li>
            </ul>
            
            <p className="text-primary text-xl font-bold">
              It's not for dreamers.
              <br />
              It's for fighters.
            </p>
          </div>

         
        </article>
      </div>
    </section>
  );
};

export default BonusesSection;