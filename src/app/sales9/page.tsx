/* eslint-disable react/no-unescaped-entities */
// app/sales9/page.tsx
'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

export default function Page() {

  const router = useRouter();

  const handleClick = () => {
    // TODO: replace with actual analytics logic
    console.log('User clicked CTA - track this event');
    // e.g., analytics.track('Lead Magnet Clicked');

    // Navigate to the lead-magnet-optin page
    router.push('/sales9/lead-magnet-optin');
  };


  return (
    <main className="max-w-3xl mx-auto p-4 sm:p-6 md:p-8 font-sans bg-white">
      {/* Headline Section */}
      <section className="mb-8 md:mb-12 text-center">
        <h1 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          WILL YOU MAKE THE <span className="underline decoration-yellow-500">90% MISTAKE</span> THAT DESTROYS MOST NIGERIAN BUSINESSES BEFORE THEY EVEN START?
        </h1>
        
        <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
          <p className="text-xl sm:text-xl md:text-2xl italic font-semibold text-red-600">
            You know that sinking feeling when:
          </p>
        </div>
      </section>

      {/* Pain Points List */}
      <section className="mb-10 md:mb-14">
        <ul className="space-y-3">
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">•</span>
            <span className="text-lg">Your <span className="font-bold italic">"surefire"</span> business sits <span className="font-bold underline">emptier than a politician's promises</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">•</span>
            <span className="text-lg">The shop rent collector knows your name <span className="font-bold">better than your customers do</span></span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">•</span>
            <span className="text-lg">Friends suddenly develop <span className="font-bold italic">"network issues"</span> when you call</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">•</span>
            <span className="text-lg">Family starts suggesting <span className="bg-yellow-100 px-1 font-bold">"government jobs"</span> with pity in their eyes</span>
          </li>
        </ul>
      </section>

      {/* Core Message */}
      <section className="mb-10 md:mb-14">
        <div className="bg-red-50 p-6 rounded-lg border-l-8 border-red-600 mb-6">
          <p className="text-xl sm:text-xl md:text-2xl font-bold">
            This isn't failure — it's <span className="text-red-600">economic suicide by guesswork.</span> And Nigeria's streets are littered with the corpses of businesses that died from one fatal mistake:
          </p>
        </div>
        
        <p className="text-center text-2xl sm:text-2xl md:text-3xl font-bold text-red-600 mb-6">
          Selling what YOU think people want instead of what they'll PAY for TODAY.
        </p>
      </section>

      {/* Brutal Truth Section */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 text-red-600">
          The Brutal Truth No One Tells You:
        </h2>
        
        <div className="space-y-6">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl sm:text-xl md:text-2xl text-yellow-600 mb-2">The "Follow Trends" Trap</h3>
            <p className="text-lg">That phone accessory shop making your friend's cousin rich? By the time you copy it, the market's already flooded with <span className="font-bold">17 identical shops</span> in your area.</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl sm:text-xl md:text-2xl text-yellow-600 mb-2">The Location Lottery</h3>
            <p className="text-lg">Your perfect shop space means nothing if your ideal customers never walk past it. Yet you're paying rent like it's a <span className="font-bold">golden ticket</span>.</p>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-bold text-xl sm:text-xl md:text-2xl text-yellow-600 mb-2">The Silent Killer</h3>
            <p className="text-lg">Every unsold inventory item isn't just lost money — it's <span className="font-bold">stolen time, hope, and opportunities</span> you'll never get back.</p>
          </div>
        </div>
        
        <p className="mt-6 font-bold italic text-lg">
          These deadly mistakes don't just ruin dreams in theory — they destroy real people every day.
        </p>
      </section>

      {/* Success Stories */}
      <section className="mb-10 md:mb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold text-green-800 text-lg">Aisha lost <span className="text-xl">₦800k</span> on bad hair inventory before she found the missing piece and rebuilt her business <span className="underline">stronger than ever</span>.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-800 text-lg">Emeka turned his side hustle into a <span className="text-xl">₦2.3m/month</span> delivery service without even renting a shop once he learned what the market <span className="font-bold italic">really wanted.</span></p>
          </div>
        </div>
      </section>

      {/* What Successful Entrepreneurs Know */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-6 text-blue-600">
          What Successful Entrepreneurs Know (That You Don't)
        </h2>
        <p className="mb-6 text-lg">The richest business owners test before they invest, using:</p>
        
        <ul className="space-y-4">
          <li className="flex items-start text-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span className="font-bold">The 3-Day Market Probe</span> – Know if customers will buy before you stock a single item
          </li>
          <li className="flex items-start text-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span className="font-bold">The Silent Salesman Method</span> – Make perfect strangers beg to buy from you (no ads needed)
          </li>
          <li className="flex items-start text-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span className="font-bold">The Poverty Escape Ladder</span> – Turn your current skills into income streams in 72 hours
          </li>
        </ul>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="bg-yellow-100 p-6 rounded-lg border-2 border-yellow-500 mb-6">
          <p className="text-xl font-bold mb-4">💡 Your Next Move</p>
          <p className="text-2xl sm:text-2xl md:text-3xl font-bold mb-4">
            👉 See the <button onClick={handleClick} className="text-red-600 cursor-pointer underline">5 Business Autopsy Reports</button> → showing exactly why Nigerian businesses bleed money — and how to bulletproof your next venture.
          </p>
        </div>
        
        <div className="bg-gray-100 p-4 rounded-lg italic">
          <p className="font-bold text-lg">PS: The market doesn't care about your hustle — only what solves its pain.</p>
          <p className="text-lg">👉 Learn the language of demand before your savings join the <button onClick={handleClick} className="font-bold text-red-600 cursor-pointer underline">90% graveyard</button>. →</p>
        </div>
      </section>
    </main>
  );
}