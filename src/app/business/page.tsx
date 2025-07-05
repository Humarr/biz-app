/* eslint-disable react/no-unescaped-entities */
// /pages/index.tsx
import Link from 'next/link';
import React from 'react';

export default function Home() {
  return (
    <main className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section className="text-center px-4 py-20 bg-black text-white">
        <h1 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide text-red-500 mb-4">
          You Don't Have A Business Problem
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-yellow-400">
          You Have An Idea Problem
        </h2>
        <p className="italic mt-4 text-lg">*And it's costing you everything.*</p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-300 my-8" />

      {/* Scene Section */}
      <section className="max-w-3xl mx-auto px-4 space-y-6">
        <h3 className="text-xl font-bold uppercase text-center">The Scene You Know Too Well</h3>
        <p>It's 11:47 PM.</p>
        <p>You're lying in bed, scrolling through your phone, looking at other people's success stories.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>The guy who started selling shoes online and now owns 3 stores.</li>
          <li>The girl who began with homemade snacks and now supplies 15 offices.</li>
          <li>The friend who started a simple service and now drives a car you can only dream of.</li>
        </ul>
        <p className="font-bold text-lg text-red-600">And you're wondering: "What's wrong with me?"</p>
        <p>You've tried. <span className="font-bold">God knows you've tried.</span> </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You sold perfume oils for 6 months. Made ₦3,000 profit.</li>
          <li>You tried dropshipping. Lost ₦15,000 to Facebook ads that brought zero sales.</li>
          <li>You even sold recharge cards. Felt like a failure counting ₦500 profit after a whole week.</li>
        </ul>
        <p className="font-bold">Each failure chips away at something inside you.</p>
        <p>Your confidence. Your hope. Your family's belief in you.</p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* The Lie Section */}
      <section className="bg-yellow-100 px-4 py-10">
        <h3 className="text-xl font-bold uppercase text-center mb-6">The Lie Everyone Believes</h3>
        <p className="max-w-3xl mx-auto text-center space-y-2">
          Here's what everyone tells you:
        </p>
        <ul className="list-disc max-w-2xl mx-auto pl-5 space-y-1 mt-4">
          <li>"You just need to work harder."</li>
          <li>"You need more capital."</li>
          <li>"You need better connections."</li>
          <li>"You need to be more patient."</li>
        </ul>
        <p className="text-center text-red-600 font-bold mt-6">They're all wrong.</p>
        <p className="text-center max-w-3xl mx-auto mt-4">
          You don't need to work harder. You're already working hard enough.
          <br />
          You don't need more capital. David started his ₦340,000/month business with just ₦12,000.
          <br />
          You don't need better connections. You need better ideas.
        </p>
        <p className="text-center font-bold text-xl text-black mt-6">
          The truth is painful but liberating:
        </p>
        <p className="text-center text-2xl font-bold uppercase text-red-600 mt-2">
          You don't have a business problem. You have an idea problem.
        </p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* 12 Tests Section */}
      <section className="max-w-3xl mx-auto px-4 space-y-6">
        <h3 className="text-xl font-bold uppercase text-center">The Real Reason You Keep Failing</h3>
        <p>Every business idea goes through 12 tests.</p>
        <p className="font-bold text-red-600">Most entrepreneurs don't even know these tests exist.</p>
        <p>They pick ideas based on:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>What they think people need</li>
          <li>What worked for someone else</li>
          <li>What seems "trendy" right now</li>
          <li>What they're passionate about</li>
        </ul>
        <p className="font-bold">Then they wonder why 9 out of 10 businesses fail.</p>
        <p>The successful entrepreneurs? They know the 12 tests.</p>
        <p className="font-bold text-green-700">They don't start ANY business until their idea passes all 12.</p>
        <p className="text-lg font-bold text-center text-red-500">That's why they succeed while others fail.</p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* Sample Tests */}
      <section className="max-w-3xl mx-auto px-4 space-y-6">
        <h3 className="text-xl font-bold uppercase text-center">What These Tests Look Like</h3>
        {[
          {
            title: 'Test #1: The Pain Test',
            desc: 'Does your idea solve a problem people are already frustrated about?',
          },
          {
            title: 'Test #2: The Money Test',
            desc: 'Do people already spend money trying to solve this problem?',
          },
          {
            title: 'Test #3: The Frequency Test',
            desc: 'How often do people encounter this problem?',
          },
          {
            title: 'Test #4: The Urgency Test',
            desc: 'When people have this problem, do they need it solved immediately?',
          },
        ].map(({ title, desc }) => (
          <div key={title}>
            <h4 className="font-bold text-red-600">{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
        <p className="font-bold text-center text-lg text-gray-700">And there are 8 more tests that most entrepreneurs never learn.</p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* Two Ideas Story */}
      <section className="max-w-3xl mx-auto px-4 space-y-4">
        <h3 className="text-xl font-bold uppercase text-center">The Story Of Two Ideas</h3>
        <p className="font-bold">Idea A: Perfume Oil Business</p>
        <ul className="list-disc pl-5">
          <li>Passes 2 out of 12 tests</li>
          <li>Result: ₦3,000 profit in 6 months</li>
        </ul>
        <p className="font-bold">Idea B: Laundry Pickup Service</p>
        <ul className="list-disc pl-5">
          <li>Passes 12 out of 12 tests</li>
          <li>Result: ₦340,000 profit per month</li>
        </ul>
        <p className="font-bold text-center">
          Same neighborhood. Same economy. Same type of customers.
          <br />
          The only difference? One idea was tested. The other was guessed.
        </p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* Cost of Not Knowing */}
      <section className="bg-red-50 px-4 py-10 space-y-6">
        <h3 className="text-xl font-bold uppercase text-center text-red-600">The Cost Of Not Knowing</h3>
        <p className="max-w-3xl mx-auto text-center font-bold">Every failed business costs you more than money.</p>
        <ul className="list-disc max-w-xl mx-auto pl-5 space-y-1">
          <li>Time you'll never get back</li>
          <li>Confidence in your abilities</li>
          <li>Respect from family and friends</li>
          <li>Opportunities you miss while chasing the wrong idea</li>
        </ul>
        <p className="text-center max-w-2xl mx-auto">
          The average Nigerian entrepreneur wastes ₦47,000 on failed businesses before they figure out what works.
        </p>
        <p className="text-center font-bold text-xl text-green-700">But what if you could skip all that?</p>
        <p className="text-center max-w-2xl mx-auto font-bold">What if you could test any business idea in 48 hours and know for certain if it's worth pursuing?</p>
        <p className="text-center font-bold text-black text-lg">That's exactly what the 12 Economic Filters do.</p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* The ATM Decoder Protocol */}
      <section className="max-w-3xl mx-auto px-4 space-y-6">
        <h3 className="text-xl font-bold uppercase text-center text-red-600">The ATM Decoder Protocol</h3>
        <p>I've created a free guide that teaches you 4 of the 12 Economic Filters.</p>
        <p className="font-bold">These 4 filters alone will save you thousands of naira and months of wasted time.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>How to spot problems worth solving</li>
          <li>How to know if people will actually pay for your solution</li>
          <li>How to identify recurring income opportunities</li>
          <li>How to find problems that allow premium pricing</li>
        </ul>

        {/* Testimonials */}
        <div className="space-y-4">
          {[
            '"I wish I had these filters before I wasted ₦35,000 on a business that was doomed from day one."',
            '"The Pain Test alone saved me from making a huge mistake."',
            '"These 4 filters are more valuable than the business courses I paid ₦50,000 for."',
          ].map((quote, i) => (
            <div key={i} className="p-4 border-l-4 border-yellow-400 bg-yellow-50 shadow">
              <p className="italic">*{quote}*</p>
            </div>
          ))}
        </div>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* Call to Action */}
      <section className="bg-black text-white px-4 py-12 text-center space-y-6">
        <h3 className="text-2xl font-bold uppercase text-yellow-400">Get The Free Guide Now</h3>
        <p>Enter your email below and I'll send you <strong>The ATM Decoder Protocol</strong> immediately.</p>
        <ul className="list-disc max-w-xl mx-auto text-left text-sm space-y-1 pl-5">
          <li>The 4 Core Economic Filters</li>
          <li>Real case studies of ideas that passed (and failed)</li>
          <li>The exact questions to ask before starting any business</li>
          <li>Step-by-step instructions for testing your ideas</li>
        </ul>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <input
            type="email"
            placeholder="Email"
            className="px-4 py-3 w-72 text-black rounded border focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 text-lg rounded font-bold">
            SEND ME THE FREE GUIDE
          </button>
        </div>
        <p className="text-sm italic mt-2">*No spam. No annoying emails. Just the guide you requested.*</p>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* Final Close */}
      <section className="max-w-3xl mx-auto px-4 space-y-6 text-center">
        <h3 className="text-xl font-bold uppercase text-red-600">The Real Question</h3>
        <p>You're probably thinking, "What if this doesn't work for me?"</p>
        <p className="font-bold text-lg">But that's the wrong question.</p>
        <p className="text-2xl font-bold text-black uppercase">The right question is: "What if this DOES work for me?"</p>
        <ul className="list-disc text-left max-w-xl mx-auto pl-5 space-y-1">
          <li>What if 6 months from now, you're the one making ₦200,000 every month?</li>
          <li>What if your family starts calling you for business advice?</li>
          <li>What if you never have to worry about money again?</li>
          <li>What if you become the success story that inspires other people?</li>
        </ul>
        <p className="font-bold">All of that starts with learning how to pick the right ideas.</p>
        <p>And that starts with getting <strong>The ATM Decoder Protocol</strong>.</p>
        <button className="mt-4 bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 text-lg rounded font-bold">
          GET THE FREE GUIDE
        </button>
      </section>

      <div className="border-t border-gray-300 my-8" />

      {/* P.S. Section */}
      <section className="bg-yellow-50 px-4 py-10 text-black font-handwritten text-lg">
        <h3 className="text-center text-xl font-bold uppercase mb-4">P.S. - The Truth About Successful Entrepreneurs</h3>
        <p className="text-center italic max-w-3xl mx-auto">
          They're not smarter than you.
          <br />
          They're not luckier than you.
          <br />
          They don't have better connections than you.
        </p>
        <p className="text-center font-bold mt-4">
          They just know how to avoid the ideas that don't work.
        </p>
        <p className="text-center mt-2">
          While everyone else is guessing, they're knowing.
          <br />
          While everyone else is hoping, they're planning.
          <br />
          While everyone else is failing, they're winning.
        </p>
        <p className="text-center mt-4 font-bold text-red-600">
          The 12 Economic Filters are your unfair advantage.
        </p>
        <p className="text-center font-bold">But it starts with learning the first 4.</p>
        <p className="text-center mt-2">Get <strong>The ATM Decoder Protocol</strong> right now.</p>
        <p className="text-center text-xl font-bold mt-4">Stop guessing. Start knowing.</p>
        <div className="text-center mt-4">
          <Link href="/business/opt-in">
            <button className="bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 text-lg rounded font-bold">
              SEND ME THE FREE GUIDE
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
