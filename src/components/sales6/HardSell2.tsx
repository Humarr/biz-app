/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const FinalDecisionSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow text-center">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold uppercase tracking-wide">
            You're at the crossroads
          </h2>

          <div className="truth-bomb">
            <p className="text-xl">
              You're either gonna close this page...
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left mt-4">
              <li>Scroll TikTok.</li>
              <li>Download another free PDF.</li>
              <li>Convince yourself "you're still planning."</li>
            </ul>
          </div>

          <div className="highlight-box">
            <p className="text-2xl font-bold">
              OR
            </p>
            <p className="text-xl mt-4">
              You'll decide that ₦4500 is a small price to finally stop guessing — and start building something that pays.
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-bold">
              No hype. No passive income fairytales.
            </p>
            <p className="text-xl">
              Just a brutally honest book for people who've had enough of pretending.
            </p>
          </div>

          <div className="mt-8">
            <p className="text-2xl font-bold">
              You know what to do.
            </p>
            <p className="text-3xl font-bold text-accent mt-2">
              👇
            </p>
          </div>

          <div className="mt-8">
            <button className="btn-primary text-xl px-8 py-4 hover:scale-105 transition-transform duration-300">
              Click Here to Get the Book Now
            </button>
          </div>

          <div className="subtle-note max-w-md mx-auto">
            <p className="italic">
              Instant access. Read on any device. Money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalDecisionSection;