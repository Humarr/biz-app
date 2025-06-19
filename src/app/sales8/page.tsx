/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'
import Link from 'next/link'

export default function PreSellPage() {
  return (
    <div className="bg-white font-sans antialiased text-gray-900">
      <Head>
        <title>The Business Filter - Stop Wasting Time on Dead-End Ideas</title>
        <meta name="description" content="Get the free guide that shows you how to pick business ideas that actually make money - not just look good on Instagram" />
      </Head>

      {/* Hero Section */}
      <header className="relative bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">⚠️ WARNING: This isn't for everyone</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            You ever wonder why it's always the dumbest people that seem to be making money?
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-medium opacity-90">
            Meanwhile, you — the one who actually reads, learns, sacrifices — still feel like a ghost in this thing called "success."
          </p>
          <div className="mt-10">
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse">
              Grab Your Free Guide Now →
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Opening Hook */}
        <section className="mb-20">
          <div className="prose prose-lg sm:prose-xl lg:prose-2xl mx-auto">
            <p className="text-2xl sm:text-3xl font-medium leading-relaxed text-gray-800">
              There's a reason for that.<br/>
              And it has nothing to do with intelligence.
            </p>
            
            <div className="mt-12 space-y-8 text-lg">
              <p>
                <span className="font-bold">In fact...</span><br/>
                The smarter you are, the harder it gets.
              </p>
              
              <p>
                Because smart people overthink.<br/>
                They chase perfection.<br/>
                They waste time trying to "build something meaningful."<br/>
                While Mr. Influencer McNugget just copies some Canva thing and cashes out.
              </p>
              
              <div className="bg-gray-100 p-6 rounded-xl border-l-4 border-amber-500">
                <p className="font-bold">If you've ever tried:</p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Affiliate marketing</li>
                  <li>Crypto (because your friend "cashed out")</li>
                  <li>Selling clothes, perfume, thrift, services</li>
                  <li>Running ads for someone</li>
                  <li>Building a social media page</li>
                  <li>Starting a YouTube channel</li>
                  <li>Or anything that looked like a business...</li>
                </ul>
                <p className="mt-4 font-bold">And still ended up broke, confused, and doubting yourself?</p>
                <p className="mt-2 text-amber-600 font-bold">Then you're exactly who I made this for.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-20 bg-red-50 p-8 rounded-xl border border-red-200">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-red-700">💀 Real talk:</h2>
            <p className="text-xl">
              Most people don't start businesses.<br/>
              They start waste-of-time machines.<br/>
              Money-eating, confidence-destroying, soul-sucking monsters dressed up as "hustle."
            </p>
            
            <div className="mt-8 space-y-6">
              <p className="font-bold">And here's the sick part:</p>
              <p>
                Most of them look like businesses on the outside.<br/>
                But inside? They're dead on arrival.
              </p>
              
              <ul className="list-disc list-inside space-y-2">
                <li>No demand.</li>
                <li>No path to profit.</li>
                <li>No proof it works.</li>
                <li>Just vibes.</li>
              </ul>
              
              <p>So what do you get?</p>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p>"Bro I'm trying"</p>
                <p>"Sis I'm learning"</p>
                <p>"God's timing"</p>
                <p>"I just need one more YouTube video"</p>
              </div>
              
              <p className="font-bold text-xl">
                You don't need more motivation.<br/>
                You don't need another online course.<br/>
                You need a business that actually makes money.
              </p>
            </div>
          </div>
        </section>

        {/* Objection Handling */}
        <section className="mb-20">
          <div className="prose prose-lg mx-auto">
            <div className="bg-amber-100 p-6 rounded-xl">
              <p className="text-xl font-bold italic">😤 "But I've tried everything... and nothing's working."</p>
              <p className="mt-4">
                You haven't tried everything.<br/>
                You've just tried everything loud on Instagram.
              </p>
            </div>
            
            <div className="mt-12 space-y-8">
              <p className="text-2xl font-medium">
                But you've never sat down and learned how to pick a business idea that's right for <span className="underline">you</span>.
              </p>
              
              <p>
                Not your friend.<br/>
                Not your mentor.<br/>
                Not the guy on Twitter with a Lambo and a course.<br/>
                <span className="font-bold">You.</span>
              </p>
              
              <p className="text-xl">
                Because once you pick the right idea — everything else gets easier.<br/>
                Marketing feels natural.<br/>
                Sales stop being a struggle.<br/>
                You finally feel like "this is what I should've started with."
              </p>
              
              <p className="text-2xl font-bold text-center mt-12">
                And that's exactly what this guide will show you:
              </p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-20 bg-gray-900 text-white p-8 rounded-xl">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-3xl font-bold text-center mb-8">📥 What you'll get inside this FREE  guide:</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <span className="text-3xl mr-4">🧠</span>
                <div>
                  <h3 className="text-xl font-bold">A dead-simple method to filter business ideas like a sniper.</h3>
                  <p>You'll stop guessing. You'll know what to pick — and what to avoid like poison.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-3xl mr-4">🔥</span>
                <div>
                  <h3 className="text-xl font-bold">The 3 deadly traps that make people waste 2–5 years "trying" without results.</h3>
                  <p>Once you see them, you'll feel like slapping your past self (gently... or not).</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-3xl mr-4">💸</span>
                <div>
                  <h3 className="text-xl font-bold">Why "online vs. offline" doesn't matter — and what actually does.</h3>
                  <p>The broke vs. rich line is not "internet connection." It's clarity.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-3xl mr-4">📉</span>
                <div>
                  <h3 className="text-xl font-bold">How to test if an idea is profitable before spending a single naira.</h3>
                  <p>Yes, even if you have zero capital and zero audience.</p>
                </div>
              </div>
              
              <p className="text-xl font-bold mt-8">
                And most importantly...
              </p>
              
              <p className="text-2xl font-bold text-amber-400">
                💥 You'll finally understand why you've been stuck — and how to snap out of it with one shift.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-20 text-center">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">🧨 Here's the part that'll sting a bit…</h2>
            <p className="text-xl">
              It's not your fault that you've been broke.<br/>
              <span className="font-bold">But it is your responsibility to change it.</span>
            </p>
            
            <p className="mt-6">
              And the longer you keep watching people less talented than you succeed, the harder it becomes to believe in yourself.
            </p>
            
            <p className="text-2xl font-bold mt-8">
              Let's change that.
            </p>
            
            <p className="mt-4">
              Not with hype.<br/>
              Not with fake screenshots.<br/>
              But with one PDF that flips your brain like a pancake and gives you the foundation no one ever taught you.
            </p>
            
            <p className="text-xl font-bold mt-8">
              Because when the base is strong?
            </p>
            
            <p className="text-2xl font-bold text-amber-600 mt-4">
              The business becomes your ATM.<br/>
              Not the other way around.
            </p>
          </div>
        </section>

        {/* Who It's For */}
        <section className="mb-20 bg-gray-100 p-8 rounded-xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">📌 This isn't for everyone.</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg border border-red-300">
                <h3 className="text-xl font-bold text-red-600 mb-4">This is NOT for you if:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>You still believe money comes from "passion"</li>
                  <li>You're looking for a get-rich-quick fix</li>
                  <li>You're not willing to face hard truths</li>
                  <li>You think business is about vibes and luck</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-green-300">
                <h3 className="text-xl font-bold text-green-600 mb-4">But if:</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>You're tired of being the smartest broke person in the room</li>
                  <li>You've tried multiple hustles and still feel lost</li>
                  <li>You're ready to do the deep work that leads to real, lasting money</li>
                  <li>You want to build a life where you control your time, income, and peace</li>
                </ul>
              </div>
            </div>
            
            <p className="text-center text-xl font-bold mt-8">
              Then you're going to read this free guide and say:<br/>
              <span className="text-amber-600">"Damn. This is what I've been missing."</span>
            </p>
          </div>
        </section>

        {/* Results */}
        <section className="mb-20">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">🧠 What happens after you read this:</h2>
            <p className="text-xl">
              You're not going to suddenly become rich overnight.<br/>
              <span className="font-bold">That's a scam.</span>
            </p>
            
            <p className="text-xl font-bold mt-8">
              But here's what will happen:
            </p>
            
            <ul className="list-disc list-inside space-y-4 mt-6 text-lg">
              <li>You'll stop wasting time chasing the wrong ideas</li>
              <li>You'll finally feel confidence in your direction</li>
              <li>You'll spot BS from 10 miles away (goodbye fake gurus)</li>
              <li>You'll be ready for The Ultimate Cash Machine — because now, you're thinking like someone who builds real businesses</li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-20 bg-black text-white p-8 rounded-xl text-center">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-3xl font-bold mb-6">🚨 You've been on "pause" for too long</h2>
            <p className="text-xl">
              Every month you spend "researching,"<br/>
              Every day you spend watching others "try"...<br/>
              <br/>
              ...is one more step deeper into the spiral of confusion, fear, and wasted potential.
            </p>
            
            <p className="text-2xl font-bold mt-8">
              Let this free PDF be your slap-in-the-face wake up call.
            </p>
            
            <p className="mt-4">
              It's raw.<br/>
              It's short.<br/>
              It's practical.<br/>
              And it's exactly what you need before you build anything else.
            </p>
            
            <div className="mt-12">
              <Link href="/sales8/lead-magnet-intro" passHref>
              <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                👇 Get the free guide now.
              </button>
              </Link>
              <p className="mt-4 font-bold">
                Stop guessing. Start filtering. Build your own damn ATM.
              </p>
            </div>
            
            <div className="mt-8 p-4 bg-gray-800 rounded-lg">
              <p className="text-amber-400 font-bold">👉 [Download the FREE Guide]</p>
              <p className="text-sm">(Instant access. No BS.)</p>
            </div>
            
            <div className="mt-12 border-t border-gray-700 pt-8">
              <p className="font-bold italic">PS: You've read this far. That's not normal.</p>
              <p className="mt-2">
                Most people scroll.<br/>
                You stayed.<br/>
                You felt something.
              </p>
              <p className="mt-4 font-bold text-amber-400">
                That's your sign.
              </p>
              <p className="mt-2">
                Don't waste it.
              </p>
              <p className="mt-2 font-bold">
                Click. Read. Apply.<br/>
                Let this be the start of something that actually makes you money.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/* <footer className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <p className="mt-2">No spam. No bullshit. Just real talk that helps you make money.</p>
      </footer> */}
    </div>
  )
}