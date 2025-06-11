/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const BonusesSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-center uppercase tracking-wide">
            🎁 Your Power-Up Bonuses
          </h2>
          <p className="text-xl text-center">
            Each one designed to turn your hustle from "hoping" to "holy shit, this works"
          </p>

          {/* Bonus 1 */}
          <div className="bonus-card hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">
              🎁 BONUS #1 — Impulse Offer Alchemy
            </h3>
            <p className="italic mb-4">
              (How to make broke strangers say: "Lemme just buy this thing jare.")
            </p>
            <div className="space-y-4">
              <p className="text-xl font-bold">
                Ever stare at your screen wondering: "Why isn't anybody buying?"
              </p>
              <p className="text-accent font-bold">
                This bonus is your antidote.
              </p>
              <p>
                You'll discover the exact psychology behind spontaneous purchases — even from people who swore they wouldn't spend a dime today.
                It's not manipulation.
                It's alignment.
              </p>
              <p>
                You'll learn how to package your offer so clean, so low-friction, so irresistible...
                ...that even your skeptical cousin will hit "Buy Now."
              </p>
              <p className="font-bold">
                Perfect if you sell physical goods, digital services, or just yourself.
                Zero fluff. All action.
              </p>
            </div>
          </div>

          {/* Bonus 2 */}
          <div className="bonus-card hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">
              🎁 BONUS #2 — Landing Pages That Sell (Not Sedate)
            </h3>
            <p className="italic mb-4">
              (A no-fluff layout that makes people buy — not bounce.)
            </p>
            <div className="space-y-4">
              <p className="font-bold">
                Most people's sales pages are boring.
                <br />
                Yours won't be.
              </p>
              <p>
                This bonus breaks down a plug-and-play layout that converts even sleepy, half-distracted scrollers.
                You'll see why most "about me" pages are silent killers...
              </p>
              <p>
                ...why "ugly sells" more than "pretty"...
              </p>
              <p>
                ...and how to use the Bulletproof Buyer Journey to write copy that whispers:
                "You need this... right now."
              </p>
              <p className="font-bold">
                Oh — and yes. It works on Instagram, Twitter, email, or even WhatsApp catalog offers.
              </p>
            </div>
          </div>

          {/* Bonus 3 */}
          <div className="bonus-card hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-4">
              🎁 BONUS #3 — The Broke, Hungry, Angry Blueprint
            </h3>
            <p className="italic mb-4">
              (Your ₦3k-to-₦30k hustle map — no laptop, no followers, no excuses.)
            </p>
            <div className="space-y-4">
              <p className="text-xl font-bold">
                No capital?
                <br />
                No connections?
                <br />
                No cheerleaders?
              </p>
              <p className="text-accent font-bold">
                Perfect.
              </p>
              <p>
                This bonus gives you the raw execution plan for starting with absolutely nothing — and flipping it into real money.
                You'll learn:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>What to sell (even if you "don't have skills")</li>
                <li>How to sell it fast</li>
                <li>What to say, word-for-word, to get paid today</li>
              </ul>
              <p>
                And when the sales start slowing down?
                You'll know exactly how to pivot, repackage, and push through.
              </p>
              <p className="font-bold">
                Think of it as your angry little GPS out of financial quicksand.
              </p>
            </div>
          </div>

          <div className="truth-bomb mt-8">
            <h3 className="text-gradient">Field-Tested, Not Theory</h3>
            <p className="text-xl">
              Each bonus was carved out of blood, mistakes, and ₦0-to-₦300k field missions.
            </p>
            <p className="text-xl font-bold mt-4">
              Not theory.
              <br />
              Not fluff.
              <br />
              Just what worked.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button className="btn-primary text-xl px-8 py-4 hover:scale-105 transition-transform">
              GET THE RANT + BONUSES NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;