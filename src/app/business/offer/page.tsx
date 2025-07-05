/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

export default function SalesPage() {
  const router = useRouter();

  const handleSubmit = () => {
    // Analytics tracking placeholder
    console.log("User submitted sales page");

    router.push("/sales9/checkout");
  };
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-sans bg-white">
      {/* Headline */}
      <section id="headline" className="mb-10 text-center">
        <h1 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Most Nigerians Waste Their Last Savings on Dead Businesses — Here's How to Print Money Like a Hacked ATM Instead
        </h1>
      </section>

      {/* Lead */}
      <section id="lead" className="mb-12">
        <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
          <p className="text-xl font-semibold mb-4">Let me hit you straight:</p>
          <p className="mb-4">
            You don't fail at business because you're lazy.<br />
            Or because you didn't "hustle hard" enough.<br />
            You fail because you <span className="font-bold">guess</span> what business to start.
          </p>
          <p className="mb-4">
            You know it:<br />
            Your uncle said "try POS."<br />
            Your friend said "import clothes."<br />
            Your aunt said "sell hair."<br />
            You tried.<br />
            It flopped.<br />
            You lost money you couldn't afford to lose.<br />
            And now you're more scared than ever to try again.
          </p>
        </div>
      </section>

      {/* Agitate the Pain */}
      <section id="agitate" className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-600">
          Every day you wake up, check your phone, and see people living the life you dream about:
        </h2>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">—</span>
            <span>Moving to better neighborhoods</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">—</span>
            <span>Driving cars that don't break down every week</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">—</span>
            <span>Paying hospital bills without begging on Facebook</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-600 mr-2 font-bold">—</span>
            <span>Eating real meals instead of surviving on garri for the 5th time today</span>
          </li>
        </ul>

        <div className="bg-gray-100 p-6 rounded-xl">
          <p className="font-bold mb-4">Meanwhile, you're stuck:</p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">—</span>
              <span>Afraid of trying again</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">—</span>
              <span>Afraid of staying broke</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-600 mr-2 font-bold">—</span>
              <span>Afraid of explaining to friends why "things are still tight"</span>
            </li>
          </ul>
        </div>

        <p className="mt-6 text-lg">
          Deep down, you KNOW you can't stay like this.<br />
          But you're terrified to waste money one more time.<br />
          Because if you fail again... you might never recover.
        </p>
      </section>

      {/* Relatable Story */}
      <section id="story" className="mb-12 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600">
        <h2 className="text-2xl font-bold mb-4 text-blue-800">I've seen it happen too many times.</h2>
        <p className="mb-4">
          Musa thought he was smart.<br />
          He borrowed 300k to open a small shop selling men's shoes.<br />
          His cousin told him, "People like shoes, you'll make it."<br />
          Three months later?
        </p>
        <p className="mb-4">
          He hadn't sold half his stock.<br />
          His landlord was banging on his door.<br />
          His girlfriend left because he was always broke.<br />
          Musa packed up and went back to begging his parents for survival.
        </p>
        <p className="font-bold text-blue-800">
          But here's the thing Musa didn't know:<br />
          The problem wasn't Musa.<br />
          The problem was his idea.<br />
          He didn't know how to test if his idea would work BEFORE spending a kobo.
        </p>
      </section>

      {/* New Opportunity */}
      <section id="opportunity" className="mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-green-700">
          What if there was a way to know — with scary certainty — whether your business idea would make you money... before you spent a dime?
        </h2>
        <p className="text-xl mb-6">
          What if you could find sweet, irresistible business ideas that hit people's deepest pain and desires — so they chase YOU with cash in hand?
        </p>
        <p className="text-xl mb-6">
          What if you could pick an idea perfectly suited for your life, skills, and resources — instead of copying random hustlers and dying broke?
        </p>
        <div className="bg-green-100 p-6 rounded-xl">
          <p className="text-2xl font-bold text-green-800">
            That's exactly why I created The Ultimate Cash Machine — the stupidly simple, step-by-step guide that shows you how to start a business that prints money like a hacked ATM.
          </p>
        </div>
      </section>

      {/* Big Benefits */}
      <section id="benefits" className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Inside, you'll discover:
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">Why starting a business isn't risky</span> if you pick the right idea first — and why NOT starting is the real danger.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">How to spot top-tier business ideas</span> that make broke customers find money to buy from you.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">The 12 economic filters</span> that slice through dumb ideas and leave you with pure gold — ideas guaranteed to work for you right now.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">How to stand out so boldly</span> that even the "big boys" in your industry start checking your page and shaking in their expensive shoes.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">How to craft offers so irresistible</span> customers feel stupid saying no — even if you're new.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">The pricing secret</span> that lets you sell higher than your competitors who beg with pity-pricing.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">The easy way to make your first customers</span> turn into free marketers who spread your name like wildfire — no manipulation or fake reviews needed.</span>
          </li>
          <li className="flex items-start bg-yellow-50 p-4 rounded-lg">
            <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">✅</span>
            <span><span className="font-bold">9 powerful copywriting secrets</span> (headline, offers, CTAs, and more) so you don't just sell — you sell out.</span>
          </li>
        </ul>
      </section>

      {/* Features */}
      <section id="features" className="mb-12 bg-gray-100 p-6 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          Here's everything you get in The Ultimate Cash Machine:
        </h2>
        <ul className="space-y-4">
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">🎯</span>
            <span><span className="font-bold">150+ pages</span> of no-fluff, straight-talking guidance — you can finish it in a weekend.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">🎯</span>
            <span><span className="font-bold">Real-world examples</span> of ideas that fail vs. ideas that explode in Nigeria.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">🎯</span>
            <span><span className="font-bold">The exact questions</span> to test your business ideas against 12 rock-solid economic principles.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">🎯</span>
            <span><span className="font-bold">Templates</span> for crafting your first offer, pricing like a pro, and writing ads that magnetically attract buyers.</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-1">🎯</span>
            <span><span className="font-bold">Bonus: The Emotional Money Switch</span> — a simple mindset shift to kill your fear of selling forever.</span>
          </li>
        </ul>
      </section>

      {/* Value Stack */}
      <section id="value" className="mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Think about this:
        </h2>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-red-50 p-6 rounded-xl">
            <p className="text-xl font-bold mb-2">❌ One failed business can easily waste ₦200,000+</p>
            <p>Another six months of guessing costs you lost income, respect, and time you'll never get back.</p>
          </div>
          <div className="bg-green-50 p-6 rounded-xl">
            <p className="text-xl font-bold mb-2">✅ But for less than the price of one night out at a bar</p>
            <p>You could own a blueprint that changes your life forever.</p>
          </div>
        </div>
        <p className="text-xl font-bold">
          What's smarter?
        </p>
      </section>

      {/* Objections */}
      <section id="objections" className="mb-12 bg-yellow-50 p-6 rounded-xl">
        <h2 className="text-2xl font-bold mb-6 text-center">
          "But what if..."
        </h2>
        <div className="space-y-6">
          <div>
            <p className="font-bold mb-2">"But I don't have enough capital..."</p>
            <p>You don't need big capital if your idea is strong. Picking the right idea means customers bring the cash — not you.</p>
          </div>
          <div>
            <p className="font-bold mb-2">"But I'm not smart enough for business..."</p>
            <p>Business isn't school. It's about understanding what people want — and I'll show you how to see it clearer than your so-called "smart" friends.</p>
          </div>
          <div>
            <p className="font-bold mb-2">"What if it doesn't work for me?"</p>
            <p>If you follow the steps and filters inside, it's almost impossible to pick a dead idea again. The only way this won't work is if you don't read it.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="mb-12 text-center bg-blue-800 text-white p-8 rounded-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Stop living on garri.<br />
          Stop guessing what to sell.<br />
          Stop letting fear hold you hostage.
        </h2>
        <p className="text-xl mb-6">
          Click below now to get instant access to The Ultimate Cash Machine and start your journey to a business that prints money like a hacked ATM.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-xl transition duration-200">
          GET INSTANT ACCESS NOW →
        </button>
      </section>

      {/* Guarantee */}
      <section id="guarantee" className="mb-12 bg-green-100 p-6 rounded-xl text-center">
        <h2 className="text-2xl font-bold mb-4 text-green-800">
          Your Risk: 0% — Mine: 100%
        </h2>
        <p className="mb-4">
          Read the guide. If you don't honestly feel it shows you how to pick, launch, and grow a profitable business idea, message me within 7 days for a full refund.
        </p>
        <p className="font-bold">
          Because I know one thing: once you read it, you won't want your money back — you'll wish you'd found it years ago.
        </p>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="mb-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-red-600">
          You've suffered enough.<br />
          You've guessed enough.<br />
          You've wasted enough.
        </h2>
        <p className="text-xl mb-6">
          Today is the day you stop hoping — and start knowing.
        </p>
        <button onClick={handleSubmit} className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-200">
          GET THE ULTIMATE CASH MACHINE NOW →
        </button>
      </section>

      {/* PS */}
      <section id="ps" className="text-center bg-gray-100 p-6 rounded-xl">
        <p className="font-bold">
          P.S. Every day you keep guessing is a day you risk staying broke forever. Secure your guide now and start picking ideas that feed you for life.
        </p>
      </section>
    </main>
  );
}