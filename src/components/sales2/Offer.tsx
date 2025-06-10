/* eslint-disable react/no-unescaped-entities */
'use client';
import router from 'next/router';
import React from 'react';

const OfferTeaseSection = () => {
  return (
    <section className="section-py bg-[rgb(var(--background))]">
      <div className="container-narrow">
        <div className="scribble-note mb-8">
          ⚠️ THE OFFER TEASE: "The Map You Were Never Given"
        </div>

        <h2 className="mb-8">So now you know:</h2>

        <ul className="mb-8 space-y-3 text-xl">
          <li>You're not crazy.</li>
          <li>You're not lazy.</li>
          <li>And no — you're not "not trying hard enough."</li>
        </ul>

        <h1 className="mb-8 text-gradient">
          You were simply never handed the real map.
        </h1>

        <p className="mb-8">
          But imagine...
        </p>

        <h3 className="mb-8">
          Just imagine...
        </h3>

        <p className="mb-8">
          What if that map already existed?
        </p>

        <p className="mb-6">
          What if someone who's been in your shoes — broke, pissed, fed up, and DONE with business advice from people with trust funds and soft hands — actually wrote down the playbook they wish they had when they were just trying to survive?
        </p>

        <h2 className="mb-8">
          A battle manual written specifically for:
        </h2>

        <ul className="mb-8 space-y-3">
          <li className="flex items-start">
            <span className="text-[rgb(var(--accent))] mr-2">•</span>
            The guy who only has ₦2,850 left in his account and still hasn't eaten
          </li>
          <li className="flex items-start">
            <span className="text-[rgb(var(--accent))] mr-2">•</span>
            The girl with 17 business ideas and a headache
          </li>
          <li className="flex items-start">
            <span className="text-[rgb(var(--accent))] mr-2">•</span>
            The angry, broke, data-hustling rebel who's tried EVERYTHING and still feels like a fraud
          </li>
          <li className="flex items-start">
            <span className="text-[rgb(var(--accent))] mr-2">•</span>
            The introvert who's sick of fake "build-in-public" people who never show their failure screenshots
          </li>
        </ul>

        <p className="mb-6">
          No sugar-coating.<br />
          No funnels.<br />
          No "just visualize abundance" nonsense.
        </p>

        <h1 className="mb-8 text-gradient">
          Just pure, strategy-laced, street-smart business truth.
        </h1>

        <p className="mb-6">
          The kind that doesn't pat you on the back...
        </p>

        <h2 className="mb-8">
          It SLAPS you across the face — and yells:
        </h2>

        <div className="quote mb-8">
          "WAKE UP.<br />
          HERE'S WHAT TO DO.<br />
          NOW MOVE."
        </div>

        <p className="mb-6">
          The kind of guide that makes you say:
        </p>

        <div className="quote mb-8">
          "Damn. This is what I've been looking for."
        </div>

        <p className="mb-8">
          But here's the twist:
        </p>

        <p className="mb-6">
          You won't find it in a course.<br />
          Or a webinar.<br />
          Or buried under ten hours of someone's podcast where they say "value" 67 times.
        </p>

        <h2 className="mb-8">
          This thing?
        </h2>

        <ul className="mb-8 space-y-3 text-xl">
          <li>It's short.</li>
          <li>It's loud.</li>
          <li>It's brutally honest.</li>
          <li>And it's built for speed — not shelf decoration.</li>
        </ul>

        <p className="mb-6">
          It's not for everyone.<br />
          It's not polite.<br />
          And if you're still clinging to your romantic dreams of passive income without sweat?
        </p>

        <h2 className="mb-8">
          You should NOT read this.
        </h2>

        <p className="mb-6">
          But if you're tired...<br />
          If you're furious...<br />
          If you've got that fire in your chest and you're ready to go from broke to bold?
        </p>

        <h1 className="mb-8 text-gradient">
          Then what you're about to see next might just change everything.
        </h1>

        <h2 className="mb-8">
          Ready to meet your war manual?
        </h2>

        <p className="mb-8">
          Say the word.
        </p>

        <h3 className="mb-8">
          And I'll hand it to you.
        </h3>

        <div className="scribble-note">
          (With gloves. It bites.)
        </div>

        <div className="text-center mt-12">
          <button onClick={() => router.push('/payment')} className="btn-primary text-xl px-8 py-4">
            SHOW ME THE DAMN MANUAL
          </button>
        </div>
      </div>
    </section>
  );
};

export default OfferTeaseSection;