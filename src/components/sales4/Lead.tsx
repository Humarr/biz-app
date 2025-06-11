/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const RealityCheckSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <div className="space-y-6">
          <p className="text-xl font-medium">
            You've been online for months... maybe years.
            <br />
            Scrolling. Watching. Liking. Hoping.
          </p>

          <div className="scribble-note">
            <p>"Just start," they say.</p>
            <p>"Post content," they say.</p>
            <p>"Be consistent, and the money will come."</p>
          </div>

          <p className="text-xl font-medium">So you try.</p>

          <ul className="list-disc pl-8 space-y-2 text-lg">
            <li>You post a few reels.</li>
            <li>You make a Canva graphic.</li>
            <li>You even do a mini-course.</li>
          </ul>

          <div className="text-box-accent">
            <p className="font-bold text-center">But nothing happens.</p>
            <p className="font-bold text-center">Nobody buys.</p>
            <p className="font-bold text-center">Nobody cares.</p>
          </div>

          <p className="text-xl font-medium">
            And every time someone asks, "How's your business going?"
            <br />
            You feel like a damn fraud.
          </p>

          <div className="accent-block">
            <p>
              They don't know you've been watching YouTube videos at 2AM...
              <br />
              Taking free webinars...
              <br />
              Following guru after guru on IG...
              <br />
              Trying to figure out what the hell you're missing.
            </p>
          </div>

          <div className="highlight-box">
            <p>
              Meanwhile, your data is finished.
              <br />
              Your phone screen is cracked.
              <br />
              And your account balance?
              <br />
              <span className="text-3xl font-bold text-accent">₦612.</span>
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-xl font-bold">You're not lazy.</p>
            <p className="text-xl font-bold">You're not dumb.</p>
            <p className="text-xl font-bold">
              You just feel like something's wrong with you — because it's "working for everyone else."
            </p>
          </div>

          <div className="truth-bomb mt-8">
            <h3>But here's the real reason you're stuck (and nobody told you):</h3>
            <p className="text-xl">
              You've been force-fed business fairytales from content clowns who never started from zero.
              <br />
              They had followers. Or a laptop. Or rich parents. Or a tech job.
              <br />
              Not ₦3k and a broken Infinix.
            </p>
          </div>

          <div className="text-center mt-8 space-y-2">
            <p className="text-2xl font-bold">And so you're chasing advice that was never meant for you.</p>
            <p className="text-2xl font-bold text-accent">No wonder you're tired.</p>
            <p className="text-2xl font-bold text-accent">No wonder you're angry.</p>
            <p className="text-2xl font-bold text-accent">No wonder you're this close to quitting.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheckSection;