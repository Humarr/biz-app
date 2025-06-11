/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const FinalCTASection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow text-center">
        <div className="space-y-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide">
            If you're still here...
          </h2>
          
          <div className="space-y-4">
            <p className="text-xl">
              Still reading...
            </p>
            <p className="text-xl font-bold">
              Still whispering "Damn. This guy's not lying..."
            </p>
          </div>

          <div className="truth-bomb">
            <p className="text-xl">
              Then maybe it's time to stop chasing the next fake-guru thread.
              <br />
              <span className="font-bold">And sit with the truth.</span>
            </p>
          </div>

          <div className="highlight-box">
            <p>
              This 37-page rant won't tell you to "just start."
              <br />
              It won't slap fake urgency on a broken plan.
              <br />
              And it sure as daylight won't pat your back while you stay broke.
            </p>
          </div>

          <div className="accent-block">
            <p className="text-xl font-bold">
              But if what you need is someone to hand you the business map you wish you had before you wasted all that time...
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-2xl font-bold">
              Then the table is set.
            </p>
            <p className="text-xl">
              You're invited to read what others never had the guts to say out loud.
            </p>
          </div>

          <div className="mt-8 animate-float">
            <p className="text-2xl font-bold text-accent">
              👉🏽 Come see what this rant can do for your wallet — and your dignity.
            </p>
          </div>

          <div className="mt-12">
            <button className="btn-primary text-xl px-8 py-4 hover:scale-105 transition-transform duration-300">
              CLAIM YOUR COPY NOW
            </button>
          </div>

          <div className="subtle-note max-w-md mx-auto mt-6">
            <p className="italic">
              No fluff. No upsells. Just the raw truth you need to start making real money.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;