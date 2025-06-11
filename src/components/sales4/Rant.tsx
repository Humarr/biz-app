/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const TruthBombSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center text-accent uppercase tracking-wide">
            Here's the truth nobody's screaming loud enough:
          </h2>

          <div className="truth-bomb">
            <p className="text-xl">
              Most business advice online is written for people who already have money, time, or an audience.
              <br />
              <span className="font-bold">Not for broke, hungry, angry humans like you.</span>
            </p>
          </div>

          <div className="scribble-note">
            <p>They'll tell you to...</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Pick a niche."</li>
              <li>"Create a brand."</li>
              <li>"Give value."</li>
              <li>"Be patient."</li>
              <li>"Build a funnel."</li>
              <li>"Run Facebook ads."</li>
            </ul>
          </div>

          <div className="text-center">
            <p className="hook-warning text-3xl">Are you serious?</p>
          </div>

          <div className="highlight-box">
            <p className="text-xl">
              How are you going to run ads when you're borrowing money to buy data?
            </p>
          </div>

          <div className="accent-block">
            <p>
              These people don't live where NEPA takes light at 7PM.
              <br />
              They've never missed a meal to buy a domain name.
              <br />
              They don't know what it feels like when you're too broke to even afford a side hustle.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold">But you?</h3>
            <p className="text-xl">You've seen it all.</p>
          </div>

          <ul className="list-disc pl-8 space-y-4 text-lg">
            <li>
              You've watched fake gurus shout "money mindset" while selling ₦80k courses to jobless people.
            </li>
            <li>
              You've joined Telegram groups where everyone's pretending to make bank — and you're the only one saying, "Wait... is this normal?"
            </li>
            <li>
              You've tried to sell stuff online, only to feel like a hawker on Instagram stories, begging for attention that never comes.
            </li>
          </ul>

          <div className="truth-bomb">
            <h3>And let's not even talk about the "just create content" crowd.</h3>
            <p>
              They'll have you designing 30-day calendars on Canva like you're running Coca-Cola's ad team...
              <br />
              Meanwhile, you don't even know what to sell.
              <br />
              Or who will buy it.
              <br />
              Or how to collect the money if they say yes.
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold text-accent">It's madness.</p>
            <p className="text-xl">
              It's like telling someone drowning to "just swim better."
              <br />
              No direction. No ground game. No bloody sense.
            </p>
          </div>

          <div className="subtle-note">
            <p className="text-xl italic">
              And deep down, you've started to wonder:
              <br />
              "Maybe this whole business thing just isn't for people like me..."
            </p>
          </div>

          <div className="truth-bomb">
            <h3 className="text-gradient">BUT THAT'S EXACTLY WHAT THEY WANT YOU TO BELIEVE.</h3>
            <p className="text-xl font-bold">
              Because if you wake up...
              <br />
              If you start moving with ruthless clarity instead of recycled fluff...
            </p>
          </div>

          <div className="text-center space-y-4">
            <p className="text-3xl font-bold">You become dangerous.</p>
            <p className="text-xl">Not a follower.</p>
            <p className="text-xl">Not a fan.</p>
            <p className="text-xl">Not another broke scroll zombie.</p>
            <p className="text-3xl font-bold text-accent animate-float">You become a weapon.</p>
            <p className="text-2xl font-bold">And that's when the whole damn game changes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TruthBombSection;