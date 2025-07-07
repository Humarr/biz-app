/* eslint-disable react/no-unescaped-entities */
import { Kalam } from 'next/font/google'

const kalam = Kalam({ 
  subsets: ['latin'], 
  weight: ['400'],
  variable: '--font-handwritten'
})

export default function SalesPage() {
  return (
    <main className={`${kalam.variable} font-sans`}>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-yellow-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            <span className="text-red-600 block">TIRED OF BEING THE "BROKE UNCLE"</span>
            <span className="text-gray-900">AT FAMILY GATHERINGS?</span>
          </h1>
          
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-6 my-8 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Fed Up With Your Little Cousins Whispering <span className="text-red-600">"Here Comes The Stingy One"</span> Behind Your Back?
            </h2>
            <p className="text-lg">
              Sick of Calculating Every Last Naira While Your Younger Mates Are Making <span className="font-bold">"Bastard Money"</span> Like It's Child's Play?
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="relative mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800">
                If You're Reading This At 2 AM Because You Can't Sleep...
              </span>
            </h2>
            <div className="absolute -right-4 top-0 w-24">
              <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
                <p className="text-xs text-red-600 font-handwritten leading-tight">
                  This is you, right?
                </p>
              </div>
            </div>
          </div>

          <ul className="space-y-6 mb-12">
            <li className="flex items-start">
              <span className="text-red-500 text-3xl mr-3">•</span>
              <span className="text-xl">
                You're tired of your mum comparing you to your neighbor's son who just bought her a car while you can't even afford to fix your own slippers
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-3xl mr-3">•</span>
              <span className="text-xl">
                You're sick of dodging calls from your sister in school because you know she needs 10k for handouts and you don't have it
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-3xl mr-3">•</span>
              <span className="text-xl">
                You're frustrated that people dumber than you are living in Lekki while you're still calculating transport fare
              </span>
            </li>
          </ul>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <h3 className="text-2xl font-bold text-red-700 mb-4">
              Then you need to read every single word of this message.
            </h3>
            <p className="text-lg">
              Because what I'm about to tell you will either <span className="font-bold">piss you off completely</span>... or it will be the <span className="font-bold">turning point</span> that changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* Midnight Thoughts Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-900">
            THE MIDNIGHT THOUGHTS THAT WON'T LEAVE YOU ALONE
          </h2>

          <div className="relative mb-8">
            <p className="text-xl leading-relaxed mb-6">
              You know what's keeping you up at night, right?
            </p>
            <p className="text-xl leading-relaxed mb-6">
              It's not just the mosquitoes or the generator noise from your neighbor's compound.
            </p>
            <div className="absolute -right-4 top-0 w-24">
              <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
                <p className="text-xs text-red-600 font-handwritten leading-tight">
                  The real pain
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <p className="text-xl leading-relaxed">
              It's that crushing feeling in your chest when you realize you're 25... 28... 32... and you're still in the same exact spot you were 3 years ago.
            </p>
            <p className="text-xl leading-relaxed">
              It's the shame that burns in your throat when your parents throw those disappointed looks your way.
            </p>
            <p className="text-xl leading-relaxed">
              It's the anger that builds up when you see your former classmates posting pictures of their new cars while you're still begging for bike fare.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-xl italic">
              "You're tired of being invisible, aren't you?"
            </p>
          </div>
        </div>
      </section>

      {/* Brutal Truth Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-red-600">
            THE BRUTAL TRUTH ABOUT WHY YOU'RE STILL BROKE
          </h2>

          <p className="text-xl leading-relaxed mb-6">
            You want to know the real reason you're still struggling?
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">What It's NOT:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">•</span>
                  <span>Not because you're not smart enough</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">•</span>
                  <span>Not because you don't work hard enough</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">•</span>
                  <span>Not because you don't have connections</span>
                </li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">What It IS:</h3>
              <p className="font-bold">
                You've been lied to your entire life.
              </p>
              <p>
                You've been fed a script that was designed to keep you exactly where you are.
              </p>
            </div>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-6 my-8">
            <h3 className="text-2xl font-bold mb-4 text-center">THE GAME CHANGED DECADES AGO</h3>
            <p className="text-lg">
              The rules they taught you are from a different era. The script they gave you is obsolete. And that's why you're stuck.
            </p>
          </div>
        </div>
      </section>

      {/* Invisible Enemies Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            THE 5 INVISIBLE ENEMIES THAT HAVE BEEN SABOTAGING YOUR SUCCESS
          </h2>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-600">Enemy #1: The Poverty Programming</h3>
              <p>
                From the day you were born, you've been programmed to think small. "Money is not everything." "Rich people are greedy." These innocent-sounding phrases have been drilling into your subconscious for decades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-red-600">Enemy #2: The Education Scam</h3>
              <p>
                They sold you a lie called "go to school, get good grades, get a good job." They made you believe that a piece of paper would guarantee your success.
              </p>
            </div>

            {/* Additional enemies would go here */}
          </div>
        </div>
      </section>

      {/* The 5% Section */}
      <section className="py-12 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            <span className="text-blue-600">THE 5% WHO BROKE FREE</span>
            <br />
            <span className="text-gray-900">(And What They Know That You Don't)</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Secret #1:</h3>
              <p className="font-bold mb-2">They Know Business is Less Risky Than Employment</p>
              <p>
                While you're scared of starting a business because it's "risky," they know that depending on a job is the real risk.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Secret #2:</h3>
              <p className="font-bold mb-2">They Know How to Spot Real Opportunities</p>
              <p>
                While you're waiting for the "perfect opportunity," they're creating opportunities everywhere they look.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-xl font-semibold">
              But here's the million naira question: How do you join the 5% who have figured it out?
            </p>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            INTRODUCING: <span className="text-red-600">THE ULTIMATE CASH MACHINE</span>
          </h2>

          <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">
              Limited Time Offer
            </h3>
            <div className="text-6xl font-black mb-2">
              ₦9,950
            </div>
            <p className="text-xl mb-6 line-through opacity-75">
              Regular Price: ₦19,900
            </p>
            <button className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:shadow-lg transition-shadow cursor-pointer">
              GET YOUR COPY NOW
            </button>
            <p className="text-sm mt-4 opacity-90">
              Only 57 copies remaining
            </p>
          </div>

          <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 my-8 max-w-md mx-auto text-center">
            <p className="text-sm font-semibold text-yellow-800 mb-2">
              ⏰ PRICE INCREASES IN:
            </p>
            <div className="text-2xl font-bold text-red-600">
              2 Days 14 Hours 27 Minutes
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            MY <span className="text-green-600">BULLETPROOF</span> GUARANTEE
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className="text-xl mb-6">
              Follow the system in this guide for 30 days. If you don't see a clear path to making money, I'll refund every naira you paid.
            </p>
            <p className="text-lg font-bold text-green-600">
              No questions asked. No forms to fill. No hoops to jump through.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-b from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            THE MOMENT OF TRUTH
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white text-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-red-600">Choice #1:</h3>
              <p className="mb-4">Close this page and go back to your old life.</p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">•</span>
                  <span>Keep calculating every naira you spend</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">•</span>
                  <span>Keep dodging calls from family members</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 text-xl mr-2">•</span>
                  <span>Keep being the family disappointment</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-100 text-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-green-600">Choice #2:</h3>
              <p className="mb-4">Invest 9,950 naira in your future.</p>
              <ul className="space-y-3 text-left">
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">•</span>
                  <span>Learn what the 5% know</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">•</span>
                  <span>Start thinking like a business owner</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 text-xl mr-2">•</span>
                  <span>Begin your transformation today</span>
                </li>
              </ul>
            </div>
          </div>

          <button className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:shadow-lg transition-shadow cursor-pointer mb-6">
            GET YOUR COPY NOW
          </button>

          <p className="text-lg font-semibold">
            Remember: Only 57 copies remain. Choose wisely.
          </p>
        </div>
      </section>
    </main>
  )
}