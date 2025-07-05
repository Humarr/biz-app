/* eslint-disable react/no-unescaped-entities */
// pages/index.tsx

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background text-primary font-body px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto space-y-20">

      {/* HERO */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-headline2 font-bold uppercase leading-tight">
          The ATM Decoder Protocol
        </h1>
        <h2 className="text-3xl md:text-4xl font-semibold text-accent underline">
          The 12 Economic Filters That Separate Million-Naira Ideas From Garbage
        </h2>
        <p className="italic text-secondary text-lg tracking-wide">
          *Free Extract From "The Ultimate Cash Machine"*
        </p>
        <hr className="border-2 border-accent max-w-xs mx-auto mt-4" />
      </section>

      {/* STORY & 4 IDEAS */}
      <section className="lg:flex lg:space-x-12">
        {/* Left - story text */}
        <article className="lg:w-2/3 space-y-6 leading-relaxed text-lg md:text-xl">
          <p className="drop-cap">
            Let me tell you about Kemi, Tunde, Blessing, and David.
          </p>
          <p>Four friends. Four business ideas. Same neighborhood in Lagos.</p>
          <p className="font-bold text-xl">Only one of them is still in business today.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            {/* Kemi */}
            <div className="p-4 border border-gray-300 rounded shadow-sm bg-white">
              <p><strong>Kemi's Idea:</strong> Perfume oil business</p>
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li><strong>Investment:</strong> ₦25,000</li>
                <li><strong>Result:</strong> Made ₦3,000 profit in 6 months. Quit.</li>
              </ul>
            </div>
            {/* Tunde */}
            <div className="p-4 border border-gray-300 rounded shadow-sm bg-white">
              <p><strong>Tunde's Idea:</strong> Online phone accessories</p>
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li><strong>Investment:</strong> ₦40,000</li>
                <li><strong>Result:</strong> Sold 12 items in 4 months. Quit.</li>
              </ul>
            </div>
            {/* Blessing */}
            <div className="p-4 border border-gray-300 rounded shadow-sm bg-white">
              <p><strong>Blessing's Idea:</strong> Home-made snacks delivery</p>
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li><strong>Investment:</strong> ₦15,000</li>
                <li><strong>Result:</strong> Lost ₦8,000. Quit.</li>
              </ul>
            </div>
            {/* David */}
            <div className="p-4 border border-gray-300 rounded shadow-sm bg-white">
              <p><strong>David's Idea:</strong> Laundry pickup service</p>
              <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
                <li><strong>Investment:</strong> ₦12,000</li>
                <li><strong>Result:</strong> Now makes ₦340,000 every month. Still growing.</li>
              </ul>
            </div>
          </div>

          <p><strong>What made the difference?</strong></p>
          <p>David was the only one who knew about the 12 Economic Filters.</p>
          <p>Before he spent a single kobo, he put his laundry idea through all 12 tests.</p>
          <p><strong>It passed.</strong></p>
          <p>The others? They just jumped in and hoped for the best.</p>

          <p className="bg-highlight p-4 rounded-md font-semibold text-lg max-w-prose">
            Today, you're going to learn 4 of those 12 filters. The same ones that could have saved Kemi, Tunde, and Blessing from wasting their money.
          </p>
        </article>

        {/* Right - Illustration placeholder */}
        <div className="lg:w-1/3 mt-10 lg:mt-0 flex items-center justify-center ">
          <div
            aria-label="Illustration suggestion"
            className="w-full h-96 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 italic select-none"
          >
            <Image
            src="/presell.png"
            alt="Illustration suggestion"
            width={500}
            height={500}
            className="w-full h-96 rounded-lg bg-gray-200 flex items-center justify-center text-gray-400 italic select-none border-3 border-dashed border-accent"
            
            />
          </div>
        </div>
            <p className="text-center font-scribble text-secondary tetxt-2xl italic">Caption: The four friends</p>
      </section>

      {/* FILTERS */}
      <section className="space-y-20">
        {/* Filter 1 */}
        <article className="bg-white p-8 rounded-lg shadow-lg space-y-6 leading-relaxed text-lg md:text-xl">
          <h3 className="text-3xl font-bold text-accent uppercase underline tracking-wide">
            Filter #1: The Pain Test
          </h3>
          <p className="italic font-semibold">
            <span className="font-normal">Question:</span> Does your business idea solve a real problem that people are already frustrated about?
          </p>

          <div className="columns-1 md:columns-2 gap-8 space-y-4">
            <p>Most people start businesses based on what they think people need.</p>
            <p>David asked a different question: "What problems do people in my area complain about every day?"</p>
            <p>He noticed something. Every weekend, he saw the same scene:</p>
            <p className="italic font-semibold text-accent text-lg">Young professionals washing clothes in buckets outside their flats.</p>
            <p>Not because they wanted to. Because they HAD to.</p>
            <p>The nearby dry cleaner was expensive (₦500 per shirt).</p>
            <p>The local laundromat was dirty and unreliable.</p>
            <p>Most people didn't have washing machines.</p>
            <p className="font-bold underline">The pain was real. The frustration was daily. The solution was obvious.</p>

            <p>Compare that to Kemi's perfume oil business.</p>
            <p>Did people in her area complain about not having enough perfume options? No.</p>
            <p>Did they wake up frustrated about perfume scarcity? No.</p>
            <p>Did they actively look for new perfume suppliers? No.</p>
            <p className="font-bold">Her idea failed the Pain Test.</p>
          </div>

          <div className="mt-4 pl-6 border-l-4 border-accent space-y-2">
            <p className="font-semibold underline">How to apply this filter:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Spend one week listening to people complain</li>
              <li>Write down every problem you hear mentioned more than once</li>
              <li>Ask yourself: "Are people actively trying to solve this problem?"</li>
              <li>If yes, you pass Filter #1</li>
            </ol>
          </div>
        </article>

        {/* Filter 2 */}
        <article className="bg-white p-8 rounded-lg shadow-lg space-y-6 leading-relaxed text-lg md:text-xl">
          <h3 className="text-3xl font-bold text-accent uppercase underline tracking-wide">
            Filter #2: The Money Test
          </h3>
          <p className="italic font-semibold">
            <span className="font-normal">Question:</span> Do people already spend money trying to solve this problem?
          </p>

          <div className="columns-1 md:columns-2 gap-8 space-y-4">
            <p>This is where most Nigerian entrepreneurs get it wrong.</p>
            <p>They find a real problem, but it's not a problem people PAY to solve.</p>
            <p>David's laundry service passed this test beautifully.</p>
            <p>People were already spending money on laundry:</p>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li>₦500 per shirt at the dry cleaner</li>
              <li>₦200 for detergent every week</li>
              <li>₦300 for transportation to the laundromat</li>
              <li>Hours of their own time (which is also money)</li>
            </ul>
            <p className="font-semibold underline">They were already spending. David just offered a better option.</p>

            <p>Now look at Tunde's phone accessories business.</p>
            <p>Yes, people need phone accessories. But were they actively looking to buy them online?</p>
            <p>Most people bought phone accessories when their old ones broke. And when they needed them, they wanted them immediately.</p>
            <p>They went to the nearest phone shop, not an online store.</p>
            <p className="font-bold">Tunde's idea failed the Money Test.</p>
          </div>

          <div className="mt-4 pl-6 border-l-4 border-accent space-y-2">
            <p className="font-semibold underline">How to apply this filter:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Find 10 people who have the problem you want to solve</li>
              <li>Ask them: "How much did you spend last month trying to fix this?"</li>
              <li>If they can't give you a number, you fail</li>
              <li>If they say "I just manage it," you fail</li>
              <li>If they tell you specific amounts, you pass Filter #2</li>
            </ol>
          </div>
        </article>

        {/* Filter 3 */}
        <article className="bg-white p-8 rounded-lg shadow-lg space-y-6 leading-relaxed text-lg md:text-xl">
          <h3 className="text-3xl font-bold text-accent uppercase underline tracking-wide">
            Filter #3: The Frequency Test
          </h3>
          <p className="italic font-semibold">
            <span className="font-normal">Question:</span> How often do people encounter this problem?
          </p>

          <div className="columns-1 md:columns-2 gap-8 space-y-4">
            <p>This is the difference between a one-time sale and a recurring business.</p>
            <p>David's laundry service scored perfectly here.</p>
            <p>People need clean clothes every week. Some people, twice a week.</p>
            <p>This wasn't a "once in a while" problem. It was a "every single week" problem.</p>
            <p className="font-bold underline">This means recurring revenue potential.</p>

            <p>Blessing's home-made snacks delivery failed this test.</p>
            <p>People do buy snacks occasionally, but not regularly enough to sustain a business.</p>
            <p>Her customers often bought snacks elsewhere or made their own.</p>
            <p>Her revenue was too unpredictable.</p>
          </div>

          <div className="mt-4 pl-6 border-l-4 border-accent space-y-2">
            <p className="font-semibold underline">How to apply this filter:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Ask potential customers: "How often do you face this problem?"</li>
              <li>Calculate potential repeat sales</li>
              <li>If problem frequency is weekly or more, you pass Filter #3</li>
              <li>If monthly or less, reconsider</li>
            </ol>
          </div>
        </article>

        {/* Filter 4 */}
        <article className="bg-white p-8 rounded-lg shadow-lg space-y-6 leading-relaxed text-lg md:text-xl">
          <h3 className="text-3xl font-bold text-accent uppercase underline tracking-wide">
            Filter #4: The Complexity Test
          </h3>
          <p className="italic font-semibold">
            <span className="font-normal">Question:</span> Is the problem simple enough to solve quickly and affordably?
          </p>

          <div className="columns-1 md:columns-2 gap-8 space-y-4">
            <p>Some problems are complex, expensive, and require high skills.</p>
            <p>Those ideas need more time, money, and resources to become profitable.</p>
            <p>David's laundry pickup was simple: collect, wash, deliver.</p>
            <p>He didn't try to build a dry cleaning plant. He rented space and hired trustworthy washers.</p>
            <p className="font-bold underline">Simple, repeatable, scalable.</p>

            <p>Kemi tried to make perfume oils herself, but production was inconsistent and expensive.</p>
            <p>She lacked skills and had high upfront costs.</p>
            <p>Her idea failed the Complexity Test.</p>
          </div>

          <div className="mt-4 pl-6 border-l-4 border-accent space-y-2">
            <p className="font-semibold underline">How to apply this filter:</p>
            <ol className="list-decimal list-inside space-y-1">
              <li>Analyze the skills and resources needed to start</li>
              <li>Estimate time to first profit</li>
              <li>If it takes more than 3 months or requires expensive tools, be cautious</li>
              <li>If it's simple, fast, and low cost, you pass Filter #4</li>
            </ol>
          </div>
        </article>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-accent uppercase leading-tight">
          Ready To Stop Guessing And Start Winning?
        </h2>
        <p className="text-lg md:text-xl">
          Click the link below to get <strong>The Ultimate Cash Machine</strong> right now.
        </p>
        <a
          href='/business/offer'
          className="inline-block bg-accent text-white text-xl font-bold uppercase py-5 px-12 rounded shadow-lg hover:shadow-xl transition focus:outline-none"
          aria-label="Get The Ultimate Cash Machine now"
        >
          GET THE COMPLETE 12-FILTER SYSTEM NOW
        </a>
      </section>

      {/* COST & PS */}
      <section className="space-y-12 max-w-4xl mx-auto">
        {/* COST */}
        <div className="bg-white p-8 rounded-lg shadow-md space-y-6 text-lg md:text-xl">
          <h3 className="text-2xl font-bold uppercase tracking-wide">
            The Real Cost Of Not Knowing
          </h3>
          <p>Every failed business idea costs you more than just money.</p>
          <ul className="list-disc list-inside ml-6 space-y-2">
            <li>Lost time</li>
            <li>Lost confidence</li>
            <li>Lost opportunities</li>
          </ul>
          <p>
            <strong>The average Nigerian entrepreneur wastes ₦200,000 on failed businesses before they figure out what works.</strong>
          </p>
          <p>
            <strong>The complete 12-filter system costs ₦11,950.</strong>
          </p>
          <p>
            <strong>You do the math.</strong>
          </p>
        </div>

        {/* PS handwritten style */}
        <div className="bg-note p-8 rounded-lg shadow-sm font-scribble italic text-lg md:text-xl space-y-6">
          <h4 className="text-3xl font-bold underline">
            P.S. - The Truth About Business Success
          </h4>
          <p>
            <strong>The 12 Economic Filters are your unfair advantage.</strong> They help you cut through the noise, avoid costly mistakes, and fast-track your way to a thriving business.
          </p>
          <a
            href='/business/offer'
            className="inline-block bg-accent text-white text-xl font-bold py-5 px-14 rounded shadow hover:bg-red-700 transition focus:outline-none"
            aria-label="Get the complete system now"
          >
            YES, I WANT THE COMPLETE SYSTEM
          </a>
        </div>
      </section>
    </main>
  );
}
