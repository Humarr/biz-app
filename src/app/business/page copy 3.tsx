// pages/index.tsx

import Typewriter from "@/components/business/Typewriter";
import React from "react";

export default function HomePage() {
  return (
    <div className="bg-white text-black font-body">
      {/* Wrapper */}
      <main className="max-w-3xl mx-auto px-4 py-12 space-y-12">
        {/* Headline */}
        <section className="text-center space-y-4">
          <Typewriter
            speed={130}
            className="text-4xl md:text-5xl font-extrabold"
            text={[
              {
                text: "The Ugly Truth About Why Most ",
                className: "text-red-600",
              },
              { text: "Nigerians ", className: "text-green-700" },
              { text: "Fail in Business", className: "text-red-600" },
            ]}
          />

          <p className="text-lg font-medium text-gray-800">
            Let’s stop pretending.
          </p>
        </section>

        {/* Pain Section */}
        <section className="bg-yellow-100 border-l-4 border-yellow-500 p-6 space-y-4">
          <p className="text-lg font-semibold">
            Most people start businesses by guessing or copying what others do.
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Their neighbor sells it</li>
            <li>Their uncle told them it’s “moving”</li>
            <li>They saw it trending on Instagram</li>
          </ul>
          <p className="text-lg font-medium">And then they’re shocked when:</p>
          <ul className="list-disc pl-6 space-y-2 text-red-600 font-semibold">
            <li>Their money disappears faster than airtime on GLO</li>
            <li>No one buys</li>
            <li>They’re stuck explaining to family why they’re broke again</li>
          </ul>
        </section>

        {/* Insanity Section */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-black uppercase">
            You know what’s insane?
          </h2>
          <p className="text-lg text-gray-800">
            People keep repeating this cycle, over and over — because nobody
            taught them how to find business ideas that actually stand a chance.
          </p>
        </section>

        {/* Broke Section */}
        <section className="bg-black text-white p-6 rounded-lg space-y-4 shadow-md">
          <h2 className="text-2xl font-bold uppercase text-yellow-400">
            Here’s The Real Reason You’re Broke (And How To Break Free)
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-white font-medium">
            <li>You don’t lack motivation.</li>
            <li>You don’t lack discipline.</li>
            <li>You don’t even lack time.</li>
          </ul>
          <p className="font-semibold">
            You just don’t know how to spot ideas rooted in deep pain. Pains so
            intense that people will throw money at you for relief.
          </p>
        </section>

        {/* Pain-Spotting */}
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold text-red-700 uppercase">
            The Pain-Spotting Secret Nobody Teaches
          </h2>
          <p className="text-gray-800">
            Money hides in pain. But you’ve been trained to chase passion or
            trends — not pain.
          </p>
          <p className="text-gray-800">
            So you wander around, day after day, passing hidden opportunities:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>
              The frustrated mother looking for a weekend meal-prep solution
            </li>
            <li>The young worker tired of commuting long distances</li>
            <li>The countless people sick of unreliable services</li>
          </ul>
          <p className="font-semibold text-black">
            Every one of these is a goldmine.
          </p>
          <p className="text-red-700 uppercase font-bold">
            But until you learn to see them, you’ll stay stuck.
          </p>
        </section>

        {/* Common Ideas */}
        <section className="bg-gray-100 p-6 rounded-lg space-y-4">
          <h2 className="text-xl font-bold text-black">
            Why Most “Business Ideas” You See Online Are Useless
          </h2>
          <p className="text-gray-700">
            Google{" "}
            <span className="font-scribble text-lg">
              &quot;small business ideas in Nigeria&quot;
            </span>{" "}
            and you’ll find:
          </p>
          <ul className="list-disc pl-6 text-gray-800">
            <li>POS agent</li>
            <li>Recharge card reseller</li>
            <li>Selling thrift clothes</li>
          </ul>
          <p className="text-gray-800">
            Everyone and their cousin knows these ideas. That’s why competition
            is brutal, margins are trash, and you end up stuck fighting 10 other
            sellers on your street.
          </p>
          <p className="font-semibold text-black">
            What you need is a new way to see opportunities nobody else notices
            — ideas right under your nose but invisible until you change how you
            look at pain.
          </p>
        </section>

        {/* Free Guide CTA */}
        <section className="text-center space-y-6 bg-red-600 text-white p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl md:text-4xl font-black uppercase">
            That’s Why I Created This FREE Guide
          </h2>
          <p className="text-lg font-medium">
            The Hidden Art of Spotting Stupidly Simple Money-Making
            Opportunities is a raw, no-fluff guide that teaches you:
          </p>
          <ul className="text-left list-disc pl-8 space-y-2 text-yellow-100 font-scribble font-semibold text-2xl">
            <li>
              🔥 10+ practical ways to sniff out business ideas rooted in real
              pain
            </li>
            <li>🔥 How to flip boring everyday frustrations into cash cows</li>
            <li>
              🔥 Real-life Nigerian stories of regular people who got rich
              solving simple pains
            </li>
            <li>
              🔥 The mindset shift that’ll make you see money everywhere you go
            </li>
          </ul>
        </section>

        {/* Imagine Section */}
        <section className="bg-yellow-50 p-6 rounded-md border border-yellow-400 space-y-4 text-black">
          <h3 className="text-xl font-bold uppercase text-orange-600">
            Imagine This…
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              You walk down your street and spot 3 pain-based business ideas
              before you get to the bus stop
            </li>
            <li>You stop wasting time and money on random ideas that flop</li>
            <li>
              You feel confident picking opportunities, knowing they’re backed
              by real pain people will pay to end
            </li>
            <li>
              You finally break the cycle of begging for loans or depending on
              “salary alerts”
            </li>
          </ul>
        </section>

        {/* Final CTA */}
        <section className="text-center bg-black text-white p-8 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-yellow-400">
            This Guide Is 100% Free (But Won’t Be Forever)
          </h2>
          <p className="text-2xl font-scribble">
            I’m giving it away because I know once you taste what’s inside,
            you’ll never want to go back to guessing again — and you’ll crave
            the complete blueprint to turn these ideas into cash.
          </p>

          <h3 className="text-2xl font-bold uppercase text-red-500">
            ⚠️ Don’t Keep Walking Past Your Fortune
          </h3>
          <p>
            Every day you spend{" "}
            <span className="font-bold">blind to hidden pains</span> is a day
            you watch someone else wake up, solve them, and take your money.
          </p>

          {/* Form CTA */}
          <form className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-xl border-2 border-yellow-300 text-white placeholder:text-gray-600 focus:outline-none font-body"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-xl border-2 border-yellow-300 text-white placeholder:text-gray-600 focus:outline-none font-body"
            />
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-xl text-xl shadow-md transition-all cursor-pointer"
            >
              YES! Send Me The Free Guide Now
            </button>
          </form>
        </section>

        {/* PS Note */}
        <section className="pt-8 text-center">
          <p className="text-base font-handwritten text-gray-700 italic underline underline-offset-2">
            P.S.
          </p>
          <p className="scribble-note text-gray-800 max-w-lg mx-auto mt-2">
            This isn’t just another “10 business ideas you can start” list. It’s
            a mindset shift you’ll use for life — so you never have to guess
            again.
          </p>

          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg shadow-lg transition-colors cursor-pointer">
            Get The Free Guide Instantly
          </button>
        </section>
      </main>

      {/* Handwritten font fallback and font import */}
      {/* <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Handlee&display=swap');
        .font-handwritten {
          font-family: 'Handlee', cursive;
        }
      `}</style> */}
    </div>
  );
}
