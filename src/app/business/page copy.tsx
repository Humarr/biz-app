// import Typewriter from '@/components/business/Typewriter';
import React from 'react';

export default function Home() {
  return (
    <div className="bg-white text-black px-6 py-12 max-w-3xl mx-auto font-sans space-y-12">
      
      <section className="text-center">
      {/* <Typewriter
  text="The Ugly Truth About Why Most Nigerians Fail in Business"
  speed={80}
  className="text-4xl md:text-5xl font-extrabold text-red-600 uppercase mb-4 leading-tight"
/> */}

        {/* <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 uppercase mb-4 leading-tight">
          The Ugly Truth About Why Most Nigerians Fail in Business
        </h1> */}
        <p className="text-lg text-gray-800 italic">Let’s stop pretending.</p>
      </section>

      <section className="space-y-6 text-lg leading-relaxed">
        <p><strong>Most people start businesses by guessing or copying what others do.</strong></p>
        <ul className="list-disc pl-6">
          <li>Their neighbor sells it</li>
          <li>Their uncle told them it’s “moving”</li>
          <li>They saw it trending on Instagram</li>
        </ul>
        <p>And then they’re shocked when:</p>
        <ul className="list-disc pl-6">
          <li>Their money disappears faster than airtime on GLO</li>
          <li>No one buys</li>
          <li>They’re stuck explaining to family why they’re broke again</li>
        </ul>
        <p className="bg-yellow-100 border-l-4 border-yellow-500 p-4 font-semibold italic">
          You know what’s insane?<br />
          People keep repeating this cycle, over and over — because nobody taught them how to find business ideas that actually stand a chance.
        </p>
      </section>

      <section className="text-2xl font-bold text-center text-black">
        <h2 className="text-3xl text-red-700 uppercase">Here’s The Real Reason You’re Broke (And How To Break Free)</h2>
        <p className="mt-4 text-lg">
          You don’t lack motivation.<br />
          You don’t lack discipline.<br />
          You don’t even lack time.<br /><br />
          You just don’t know how to spot ideas rooted in deep pain.<br />
          Pains so intense that people will throw money at you for relief.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold text-red-600 uppercase mb-2">The Pain-Spotting Secret Nobody Teaches</h3>
        <p>Money hides in pain. But you’ve been trained to chase passion or trends — not pain.</p>
        <p className="mt-4">So you wander around, day after day, passing hidden opportunities:</p>
        <ul className="list-disc pl-6">
          <li>The frustrated mother looking for a weekend meal-prep solution</li>
          <li>The young worker tired of commuting long distances</li>
          <li>The countless people sick of unreliable services</li>
        </ul>
        <p className="font-bold text-green-700 mt-4">Every one of these is a goldmine.</p>
        <p>But until you learn to see them, you’ll stay stuck.</p>
      </section>

      <section>
        <h3 className="text-2xl text-red-700 uppercase font-bold mb-4">Why Most “Business Ideas” You See Online Are Useless</h3>
        <p>Google “small business ideas in Nigeria” and you’ll find:</p>
        <ul className="list-disc pl-6">
          <li>POS agent</li>
          <li>Recharge card reseller</li>
          <li>Selling thrift clothes</li>
        </ul>
        <p>Everyone and their cousin knows these ideas. That’s why competition is brutal, margins are trash, and you end up stuck fighting 10 other sellers on your street.</p>
        <p className="bg-gray-100 border-l-4 border-gray-500 p-4 mt-4">What you need is a new way to see opportunities nobody else notices — ideas right under your nose but invisible until you change how you look at pain.</p>
      </section>

      <section className="bg-yellow-50 border border-yellow-400 p-6 rounded-lg shadow">
        <h3 className="text-xl uppercase font-bold text-red-600 mb-2">That’s Why I Created This FREE Guide</h3>
        <p className="mb-2 italic">The Hidden Art of Spotting Stupidly Simple Money-Making Opportunities is a raw, no-fluff guide that teaches you:</p>
        <ul className="list-disc pl-6 space-y-1 text-lg">
          <li>🔥 10+ practical ways to sniff out business ideas rooted in real pain</li>
          <li>🔥 How to flip boring everyday frustrations into cash cows</li>
          <li>🔥 Real-life Nigerian stories of regular people who got rich solving simple pains</li>
          <li>🔥 The mindset shift that’ll make you see money everywhere you go</li>
        </ul>
      </section>

      <section className="bg-black text-white p-6 rounded-lg space-y-4 shadow-lg text-lg">
        <h4 className="text-2xl font-bold uppercase text-yellow-400">Imagine This…</h4>
        <ul className="list-disc pl-6">
          <li>You walk down your street and spot 3 pain-based business ideas before you get to the bus stop</li>
          <li>You stop wasting time and money on random ideas that flop</li>
          <li>You feel confident picking opportunities, knowing they’re backed by real pain people will pay to end</li>
          <li>You finally break the cycle of begging for loans or depending on “salary alerts”</li>
        </ul>
      </section>

      <section className="bg-red-100 p-6 rounded-lg border-l-4 border-red-500 shadow space-y-4">
        <h4 className="text-xl font-extrabold uppercase text-red-700">This Guide Is 100% Free (But Won’t Be Forever)</h4>
        <p>I’m giving it away because I know once you taste what’s inside, you’ll never want to go back to guessing again — and you’ll crave the complete blueprint to turn these ideas into cash.</p>
      </section>

      <section className="text-center space-y-4">
        <p className="text-lg font-bold text-red-700 uppercase">⚠️ Don’t Keep Walking Past Your Fortune</p>
        <p className="text-md">Every day you spend blind to hidden pains is a day you watch someone else wake up, solve them, and take your money.</p>
        <p className="text-xl font-semibold">Enter your name and email below — get the guide instantly — and start seeing ideas that could change your life.</p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full text-xl shadow transition duration-300">
          [ YES! Send Me The Free Guide Now ]
        </button>
      </section>

      <section className="mt-10 text-center text-sm italic text-gray-700">
        <p className="border-t border-gray-300 pt-6">P.S.<br />
          This isn’t just another “10 business ideas you can start” list. It’s a mindset shift you’ll use for life — so you never have to guess again.
        </p>
        <button className="mt-4 text-yellow-600 underline text-lg font-bold">[ Get The Free Guide Instantly ]</button>
      </section>

    </div>
  );
}
