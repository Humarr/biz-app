/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const BonusesSection = () => {
  return (
    <section id="bonuses" className="section-py bg-background">
  <div className="container-narrow">
    <h2 className="text-3xl font-bold mb-12 uppercase text-center">
      ✨YOU GET THIS EBOOK:
    </h2>

    <div className="bonus-card mb-12">
      <h3 className="text-2xl font-bold mb-4 text-accent">
        📕 "Don't Start a Business... Until You Read This 37-Page Rant"
      </h3>
      <p className="font-bold mb-4">
        A Brutally Honest Guide to Starting a Business That Actually Makes Money (and Doesn't Ruin Your Life)
      </p>
      <p className="mb-4">
        This isn't a "step-by-step" snoozefest. It's a flamethrower.
      </p>
      <p className="mb-4">
        A 37-page beatdown of every lie, myth, and fake guru fantasy that's been choking your chances of starting a real business.
      </p>
      <div className="accent-block">
        <p>
          You'll laugh.<br />
          You'll nod violently.<br />
          You'll scream "WHERE HAS THIS BEEN ALL MY LIFE?"
        </p>
        <p className="font-bold mt-2">
          Then you'll start building.
        </p>
      </div>
    </div>

    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center text-accent">
        But wait... You don't just get that.
      </h3>
      <p className="text-center font-bold text-xl mb-8">
        You also get these 4 nasty little extras designed to make you unstoppable:
      </p>

      <div className="space-y-12">
        {/* BONUS 1 */}
        <div className="card">
          <h4 className="text-xl font-bold mb-2 text-accent">
            🎁 BONUS #1: Impulse Offer Alchemy
          </h4>
          <p className="font-bold mb-4">
            How to Create Offers So Irresistible, They Convert Like Black Friday at 3 a.m.
          </p>
          <p className="mb-4">
            No branding.<br />
            No funnel-juggling.<br />
            Just raw, punchy, BUY-ME-NOW offers that pull money out of pockets before people even know what hit them.
          </p>
          <p className="font-bold mb-2">
            Inside, you'll learn:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>What to say (and not say) in your offers</li>
            <li>How to structure a killer deal</li>
            <li>Why your current "offers" are invisible to broke people and rich people</li>
            <li>The one tweak that can 10x your conversion without touching your product</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 border border-accent rounded-lg">
              <p>Value: ₦10,000</p>
            </div>
            <div className="px-4 py-2 bg-accent text-white rounded-lg">
              <p className="font-bold">Yours: Free</p>
            </div>
          </div>
          <p className="italic mt-2">
            (Use it once and you'll recoup that ₦4,500 in your sleep.)
          </p>
        </div>

        {/* BONUS 2 */}
        <div className="card">
          <h4 className="text-xl font-bold mb-2 text-accent">
            🎁 BONUS #2: Landing Pages That Sell (Not Sedate)
          </h4>
          <p className="font-bold mb-4">
            Forget pretty. Learn profitable.
          </p>
          <p className="mb-4">
            You ever see those nice-looking websites?<br />
            Yeah — the kind that get ZERO sales.
          </p>
          <p className="mb-4">
            This bonus teaches you the dark art of building pages that close deals.<br />
            Not show off your brand.<br />
            Not look "clean."<br />
            Just convert.
          </p>
          <p className="font-bold mb-2">
            Inside:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The only 3 things your landing page actually needs</li>
            <li>Why 98% of online business owners write dead copy (and how to sound like someone who actually wants to sell)</li>
            <li>Real examples. Short templates. Quick wins.</li>
          </ul>
          <div className="flex flex-wrap gap-4">
            <div className="px-4 py-2 border border-accent rounded-lg">
              <p>Value: ₦15,000</p>
            </div>
            <div className="px-4 py-2 bg-accent text-white rounded-lg">
              <p className="font-bold">Yours: Free</p>
            </div>
          </div>
          <p className="italic mt-2">
            This bonus alone will make your future website jealous.
          </p>
        </div>

        {/* BONUS 3 */}
        <div className="card">
          <h4 className="text-xl font-bold mb-2 text-accent">
            🎁 BONUS #3: The Broke, Hungry, Angry Blueprint
          </h4>
          <p className="font-bold mb-4">
            What to do when you've got zero funds, zero luck, and zero patience
          </p>
          <p className="mb-4">
            This is not motivational fluff.
          </p>
          <p className="mb-4">
            It's a savage little battle plan for the worst-case scenario:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="p-3 border border-accent rounded-lg">
              <p>You've got no capital</p>
            </div>
            <div className="p-3 border border-accent rounded-lg">
              <p>You're mentally fried</p>
            </div>
            <div className="p-3 border border-accent rounded-lg">
              <p>And you need to make money... yesterday</p>
            </div>
          </div>
          <p className="mb-4">
            Written for the hustlers who didn't get "seed funding" from Daddy.<br />
            The misfits who are sick of being stuck.<br />
            The rebels who can't afford to fail again.
          </p>
          <p className="font-bold text-accent">
            If that's you... you'll feel this one deep in your chest.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <div className="px-4 py-2 border border-accent rounded-lg">
              <p>Value: Priceless</p>
            </div>
            <div className="px-4 py-2 bg-accent text-white rounded-lg">
              <p className="font-bold">Yours: Still Free</p>
            </div>
          </div>
        </div>

        {/* BONUS 4 */}
        <div className="card">
          <h4 className="text-xl font-bold mb-2 text-accent">
            🎁 BONUS #4: Yeah... A Guarantee
          </h4>
          <p className="mb-4">
            Because if this ebook doesn't punch you in the brain and make you rethink everything...
          </p>
          <p className="font-bold text-xl text-accent mb-4">
            You don't just walk away.
          </p>
          <p className="font-bold text-xl mb-4">
            You get your money back.
          </p>
          <p className="mb-4">
            Not because I'm scared you'll hate it —<br />
            ...but because I know you won't.
          </p>
          <div className="highlight-box">
            <p className="font-bold">
              Read it. Use it. If it doesn't shake something loose in you?
            </p>
            <p className="mt-2">
              I'll give you a refund faster than you can say "I'll think about it."
            </p>
            <p className="mt-2">
              No forms. No guilt trip.<br />
              Just a DM, and it's done.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-center">
        So now let's recap this chaos:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 border border-accent rounded-lg">
          <p>The 37-page Ebook (actual business sanity)</p>
        </div>
        <div className="p-4 border border-accent rounded-lg">
          <p>Impulse Offer Alchemy (turning words into cash)</p>
        </div>
        <div className="p-4 border border-accent rounded-lg">
          <p>Landing Pages That Sell (not sedate)</p>
        </div>
        <div className="p-4 border border-accent rounded-lg">
          <p>Broke, Hungry, Angry Blueprint (savage survival gameplan)</p>
        </div>
        <div className="p-4 border border-accent rounded-lg md:col-span-2">
          <p>And a No-Excuses Guarantee (you literally can't lose)</p>
        </div>
      </div>
      <p className="text-center font-bold text-2xl mb-6">
        All for ₦4,500.
      </p>
      <p className="text-center font-bold text-xl text-accent mb-6">
        That's not a "deal."<br />
        That's straight-up robbery (on my end).
      </p>
    </div>

    <div className="text-center">
      <p className="font-bold text-2xl mb-6">
        You in?
      </p>
      <Link href="/payment3" passHref>
      <button className="btn-primary text-2xl px-8 py-4 mb-6 animate-chill-pulse font-sans">
        GRAB IT NOW BEFORE I COME TO MY SENSES
      </button>
      </Link>
      <p className="font-bold text-2xl">
        👇👇👇
      </p>
    </div>
  </div>
</section>
  );
};

export default BonusesSection;