/* eslint-disable react/no-unescaped-entities */
'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function SalesPage() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-900 to-purple-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
            How ANY Nigerian student Can Make An Extra ₦100k To ₦300k Consistently EVERY Month Even If You Currently Don't Have ANY skill
          </h1>
          <p className="text-xl md:text-2xl font-semibold mb-8 bg-yellow-400 text-black p-4 rounded-lg">
            I HATE TO SWEAR, BUT YOU WON'T BELIEVE EVERYTHING (WORTH ₦200,000) ON THIS PAGE IS ALMOST 100% FREE!
          </p>
          <p className="text-lg mb-8">
            And they have the ultimate power to make you live comfortably in school and after graduation - even if you're starting from zero - by adding an extra ₦100k to ₦500k (or more) to your monthly income as soon as you start putting them into fast action!
          </p>
          <p className="text-lg font-medium mb-8">
            In fact, it doesn't matter if you're a fresher, 200 level student, 300 level student, or ANYONE, as long as you want to make money consistently and secure your life before graduation!
          </p>
          <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8">
            <p className="font-bold">(Over 1000 students like you who will be your competitors will get this today. Some might have even gotten it already)</p>
          </div>
        </div>
      </header>

      {/* Author Credibility Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">A Special Life-changing (yet, thought-provoking) message from:</h2>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600">
            <p className="font-semibold mb-2">An ex-poor student…</p>
            <p className="mb-2">…Who spent his first few years in school thinking that's the only way to success…</p>
            <p className="mb-4">…Focusing ONLY on academics, but now has multiple profitable businesses giving him consistent monthly income, and also currently building a tech startup company.</p>
            <p>From 2021 to 2025, he has successfully studied from the best business minds world-wide and built businesses, even while facing heavy criticism and resistance from those who said "you must face your studies so you can get a good job"</p>
          </div>
        </div>
      </section>

      {/* Emotional Hook Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            "How did a student who once struggled to get good food end up learning about business and trying to help other students make their first ₦100k+?"
          </h2>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
            <p className="font-bold text-lg mb-4">Dear Frustrated Student,</p>
            <p className="mb-4">Do you feel the pain in your struggling parent's voices when you call home to ask for money?</p>
            <p className="mb-4">The way they pause...</p>
            <p className="mb-4">Before they say "How much do you need this time?"</p>
            <p className="mb-4">That silence that feels like forever...</p>
            <p className="mb-4">Where you can literally hear them calculating what bills they'll skip to send you money.</p>
            <p className="mb-4">The guilt that eats you up inside...</p>
            <p className="mb-4">Knowing your dad just borrowed money from his colleague at work...</p>
            <p className="mb-4">Again.</p>
            <p className="mb-4">And your mom is probably thinking of what to sell...</p>
            <p className="mb-4">Just so you can eat this week.</p>
            <p className="font-bold text-lg mb-4">Mehnnn.</p>
            <p className="font-bold text-lg mb-4">That pain is real.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold mb-4">Would you like to CONSISTENTLY earn enough money monthly without begging or disturbing anyone?</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold mb-4">Would you like to be the child who calls home to say "Mummy, I want to send you money this month"?</p>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-8">
            <p className="font-bold mb-4">Would you like to NOT be like those guys who graduated 6 years ago… sitting at home, "begging to apply", begging for "any opportunity"?</p>
            <p className="mb-2">The ones refreshing job sites every 30 minutes?</p>
            <p className="mb-2">The ones whose CV has been "under review" for 8 months?</p>
            <p className="mb-4">The ones whose parents keep asking "So what's the update on that interview?"</p>
            <p className="font-bold">Are you ready to learn how to generate ₦100k+ consistently EVERY month even if you don't have any skills right now?</p>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="font-bold mb-4">If you answer yes to any of the above questions…</p>
            <p className="font-bold">…What I'm about to reveal will shock you.</p>
            <p className="mt-4">And you may not want to hear it at first, but deep down, you'll come to realize - without this…</p>
            <p className="font-bold">Your dream of living comfortably as a student and securing your financial future before you graduate will continue to slip away while you watch others break free, and are no longer disturbing their parents, siblings, and friends for money.</p>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="py-12 px-4 bg-gray-100" id="solution">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">So, what is it?</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">Whether you're a fresher, in your second year…</p>
            <p className="mb-4">Or maybe an IT student, in final year, or ANYONE…</p>
            <p className="mb-4">As long as you want to make consistent money that gives you a soft life as a student and prepares you for the future…</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold">The harsh truth is:</p>
              <p className="font-bold">The real reason why most students never attain financial freedom has nothing to do with lack of capital or skills.</p>
            </div>
            
            <p className="italic mb-6">Surprised?</p>
            <p className="mb-4">I didn't believe it either when my mentor told me.</p>
            <p className="mb-4">And he said…</p>
            
            <div className="bg-blue-100 p-4 my-6 border-l-4 border-blue-500">
              <p className="font-bold">That's because most universities have been keeping this secret from you…</p>
              <p className="mb-2">Maybe because they don't want you to succeed because who would write jamb, post jamb to go to school if you succeed?</p>
              <p>Or maybe they don't even FULLY understand it themselves on a deeper level.</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="font-bold mb-4">And have you ever wondered why most people never get the money and freedom they want?</p>
            <p className="mb-4">As in, you've tried everything - praying to God to show you the way, begging your parents/guardians for money, saving money, trying to get a small job…</p>
            <p className="font-bold mb-4">Yet, things don't just go as you hoped.</p>
            
            <div className="bg-red-100 p-4 my-6 border-l-4 border-red-500">
              <p className="font-bold">Look, it's frustrating, isn't it?</p>
              <p>Trying all you can: investing time, energy, and even money, only to see everything fall flat like a collapsing house.</p>
            </div>

            <div className="bg-green-100 p-4 my-6 border-l-4 border-green-500">
              <p className="font-bold text-lg">Here's what I discovered:</p>
              <p className="font-bold">I'm at a point where I genuinely believe any student can build a successful business - and touching ₦100k+ within months of starting - especially given that every single business I start has the potential of reaching incredible heights and making "BIG money".</p>
            </div>

            <div className="bg-purple-100 p-4 my-6 border-l-4 border-purple-500">
              <p className="font-bold text-lg">And the reason for this is simple.</p>
              <p className="font-bold text-xl">I've mastered what I call "The Alert Manual" system.</p>
              <p className="mt-2">These are subtle but powerful techniques that gives you the almost super human ability to see opportunities others miss, know if a venture will be profitable before wasting your energy, time, and money…</p>
              <p className="font-bold">… And built profitable businesses that practically run themselves (it doesn't matter if you have zero experience or skills).</p>
              <p>Plus, it's this system that I've been using to build profitable businesses and also help other students earn ₦100k+ time and time again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">BUT BEFORE YOU READ ON, HERE'S SOME OF WHAT I PREDICT YOU'LL SAY ABOUT WORKING WITH ME:</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <p className="font-bold mb-4">"Hey man, you changed my life. I went from broke student who could barely afford a single meal in a day to making 300k+ monthly from my online service business. The framework in chapter 1 alone is worth millions"</p>
              <p className="text-sm italic">That's not the only thing you'll say because this stuff is this good…</p>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold mb-4">"Chapter 3's Free Advertising secrets helped me get my first 50 customers without spending money on ads. This is pure gold"</p>
              <p className="text-sm italic">That's not all…</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold mb-4">"This guy understands the Nigerian business landscape. No wonder his strategies works for students who want a stable and legal way to generate cool cash"</p>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-bold mb-4">"This guy is someone who can take students who are complete beginners and then turn them into profitable business owners, regardless of the economic situation. Remarkable"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Promise Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Here's something you better believe that will drastically change everything for you:</h2>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold">Listen:</p>
              <p className="font-bold">It's NOT your background, your capital, the government (they don't care about you anyway), the economy (even though it's soo bad) or your skills that determine business success, or generate money for you.</p>
            </div>
            
            <div className="bg-red-100 p-4 my-6 border-l-4 border-red-500">
              <p className="font-bold">Look, the problem lies in something deeper:</p>
              <p className="font-bold">Your mind is not trained to spot hidden opportunities around you every single day!</p>
            </div>
            
            <p className="mb-4">Or you might think financial freedom comes from having the perfect ideas or lots of money to start.</p>
            <p className="font-bold mb-4">But these are not the real reasons students gain financial freedom.</p>
            
            <div className="bg-blue-100 p-4 my-6 border-l-4 border-blue-500">
              <p className="font-bold">Even having a first class degree which seems like the obvious answer, is NOT even the top factor for success in making money!</p>
            </div>
            
            <div className="bg-green-100 p-4 my-6 border-l-4 border-green-500">
              <p className="font-bold text-lg">What's missing?</p>
              <p className="font-bold text-xl">The Alert Manual system.</p>
              <p className="mt-2">That's what you're about to discover in a moment almost for free.</p>
            </div>
            
            <div className="bg-red-100 p-4 my-6 border-l-4 border-red-500">
              <p className="font-bold">And without this system...</p>
              <p className="font-bold">Opportunities Will Keep Passing You By (no matter how smart you think you are)</p>
            </div>
            
            <p className="mb-4">You know that guy in your class who's always talking about "when I finish school"?</p>
            <p className="mb-2">The one who has big dreams...</p>
            <p className="mb-2">But never takes action?</p>
            <p className="mb-4">The one who's waiting for the "perfect time"?</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold">That could be you in 5 years.</p>
              <p className="mb-2">Still waiting.</p>
              <p className="mb-2">Still hoping.</p>
              <p>Still broke.</p>
            </div>
            
            <p className="mb-4">In fact, you'll graduate broke throughout your student life…</p>
            <p className="mb-4">…Stuck in the line with former students who've graduated 6 years ago but are still walking around with their certificates BEGGING to work for someone else…</p>
            <p className="mb-4">…Who offers them ₦80k salary (after all the suffering in school)...</p>
            <p className="mb-4">…And can still fire them anytime without any reason forever…</p>
            <p className="font-bold mb-4">And even miss profitable opportunities daily.</p>
            
            <div className="bg-purple-100 p-4 my-6 border-l-4 border-purple-500">
              <p className="font-bold">Listen, The Alert Manual system is what separates successful people from dreamers!</p>
            </div>
            
            <div className="bg-red-100 p-4 my-6 border-l-4 border-red-500">
              <p className="font-bold">And without it,</p>
              <p className="font-bold">Even the best skills or unlimited capital won't matter because you won't know how to use them to generate MORE money CONSISTENTLY.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Details */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">So, what's the solution?</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="font-bold mb-4">Look, this is your secret weapon because it's the one skill that cannot be outsourced - the ability to see money making opportunities that no one else sees.</p>
            <p className="mb-4">And it's even the foundation every business opportunity is built on!</p>
            <p className="font-bold mb-4">Plus, when you develop this system in any…</p>
            <p className="font-bold mb-4">I repeat, in ANY area of business - maybe idea validation, customer psychology, profitable pricing strategy…</p>
            <p className="mb-4">You're not just starting a business…</p>
            <p className="font-bold">You're building a money-making machine (and you'll never wonder why you've been begging your parents for money for everything).</p>
          </div>
          
          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-8">
            <p className="font-bold mb-4">And you'll kick yourself if you keep thinking you have to wait until after graduation without learning this… but you MUST be willing to take action for this to work effectively…</p>
            <p className="font-bold">There's no room for laziness here!</p>
          </div>
          
          <h3 className="text-xl font-bold mb-4">For example:</h3>
          
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <p className="font-bold mb-4">Imagine being able to create an ad like this…</p>
            <p className="font-bold italic">"Why Most Food Vendors Struggle to Make ₦50k Monthly (And The Simple System That Can Transform Their Income In 90 Days)"</p>
            <p className="mt-4">If you're a food vendor…</p>
            <p className="mb-2">That makes you think…</p>
            <p className="mb-2">"What system?"</p>
            <p>"How can I use this to improve my sales?"</p>
            <p className="mt-4">You see, you're hooked because you need urgent answers.</p>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-8">
            <p className="font-bold mb-4">Or look at this marketing "bullet" below:</p>
            <p className="font-bold italic">"The One Service Every Lagos Professional Needs But Not One Is Providing (Hint: it's NOT What You Think)"</p>
            <p className="mt-4">Now, can you feel the pull?</p>
            <p className="font-bold">Bang!</p>
          </div>
          
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-8">
            <p className="font-bold mb-4">Let me say this:</p>
            <p className="font-bold">With The Alert Manual system, you can NEVER stop seeing opportunities because your mind is constantly looking for profitable gaps - and even legendary business icons like Dangote confirmed it!</p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-lg border border-red-200 mb-8">
            <p className="font-bold">As in, successful entrepreneurs don't just stumble into success…</p>
            <p className="font-bold">They develop the ability to see what others miss…</p>
            <p className="font-bold text-center my-4">EVEN IF THEY START WITH NOTHING (THE FASTER THEY SPOT HIDDEN OPPORTUNITIES, THE QUICKER THEY BUILD WEALTH)</p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-lg mb-8">
            <p className="font-bold mb-4">Listen:</p>
            <p className="font-bold">If you want to make ₦100k+ consistently…</p>
            <p className="font-bold mb-4">Just like a sharp hunter who never misses his target…</p>
            <p className="mb-4">Then don't just focus on capital and skills (they're helpful but not essential).</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold text-lg">What to focus on?</p>
              <p className="font-bold">Start by developing your Alert Manual system because once you can see opportunities, EVERYTHING else falls into place.</p>
            </div>
          </div>
          
          <div className="bg-blue-100 p-6 rounded-lg border border-blue-200 mb-8">
            <p className="font-bold mb-4">But, and here's a bigger but:</p>
            <p className="font-bold">The Alert Manual can make or destroy your financial future.</p>
            <p className="mt-4 font-bold">But the kicker is…</p>
            <p className="font-bold">Most students get it completely wrong.</p>
            <p className="mt-4">As in, they either overthink every opportunity and never act, or they jump into bad ideas without proper validation.</p>
          </div>
          
          <div className="bg-green-100 p-6 rounded-lg border border-green-200">
            <p className="font-bold text-xl mb-4">So, would you love to know the RIGHT WAY to develop your Alert Manual system (that actually works in 2025) to spot profitable opportunities everywhere and build wealth systematically?</p>
            <p className="font-bold mb-4">Well, I'm teaching this almost 100% free.</p>
            <p className="mb-4">But only if you act now by clicking just 1 link below (towards the end of this page)...</p>
            <p className="font-bold">…to learn the exact frameworks that successful students use to turn opportunities into consistent income!</p>
          </div>
        </div>
      </section>

      {/* Risk Reversal Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Here's something to pay attention to:</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="font-bold text-green-600 text-xl mb-4">This is 100% free and you got NOTHING to lose</p>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-red-50 p-4 rounded text-center">
                <p className="font-bold">❌ No risk</p>
              </div>
              <div className="bg-red-50 p-4 rounded text-center">
                <p className="font-bold">❌ No hidden costs</p>
              </div>
              <div className="bg-red-50 p-4 rounded text-center">
                <p className="font-bold">❌ No upselling</p>
              </div>
            </div>
            <p className="font-bold mb-4">Just pure value that could change your life forever.</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold">If you don't, you'll miss out and NOTHING will change.</p>
            </div>
            
            <div className="bg-green-100 p-4 my-6 border-l-4 border-green-500">
              <p className="font-bold">But if you do?</p>
              <p className="font-bold">You'll start seeing profitable opportunities everywhere and your life will NEVER be the same.</p>
            </div>
            
            <p className="font-bold text-center">I promise.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Can you use this system for service businesses?</h3>
            <p className="font-bold text-green-600 text-lg mb-4">Absolutely!</p>
            <p className="font-bold mb-4">It works for ANY type of business - online services, physical products, digital products, you name it!</p>
            
            <div className="bg-blue-50 p-4 my-6 rounded border border-blue-200">
              <p className="italic">"I applied the pricing strategies in my fashion business, and I was scared at first. But when I started getting customers who are paying my new prices even though it was HIGHER? Mehnnn!"</p>
            </div>
            
            <p className="font-bold mb-4">How about e-commerce, consulting, freelancing and more?</p>
            <p className="font-bold text-green-600 text-lg">Yes, it works for ANYTHING - as long as the goal is to build sustainable wealth!</p>
          </div>
        </div>
      </section>

      {/* Value Proposition - Chapters */}
      <section className="py-12 px-4 bg-white" id="chapters">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">HERE'S WHAT ELSE AWAITS YOU INSIDE "THE ALERT MANUAL," READY TO ADD AN EXTRA ₦500K - 1 MILLION NAIRA (OR MORE), TO YOUR MONTHLY INCOME</h2>
          
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="mb-4">You see:</p>
            <p className="font-bold mb-4">There are 3 types of people:</p>
            <ol className="list-decimal pl-6 mb-4">
              <li className="font-bold mb-2">Those who build businesses and create wealth</li>
              <li className="font-bold mb-2">Those who work for business owners their entire lives</li>
              <li className="font-bold">Those who dream about building wealth but never do anything</li>
            </ol>
            <p className="mb-4">No matter which group you fall into, one thing is certain:</p>
            <p className="font-bold text-center bg-yellow-100 p-4 rounded">"You want to break free from poverty and build something that pays you consistently"</p>
            <p className="text-center mt-4 font-bold">Is that correct?</p>
            <p className="text-center font-bold text-green-600 text-xl mt-4">IF YOUR ANSWER IS YES, THEN TODAY (RIGHT NOW), YOU'LL ALSO GET 7 LIFE-CHANGING CHAPTERS - ALMOST 100% FREE</p>
          </div>
          
          {/* Chapter 1 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-blue-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">✔️ CHAPTER ONE: "Before You Quit Your Job Or Waste Your Savings" — The Business Cemetery Prevention Guide That Could Save You From Joining The 90% Of Failed Entrepreneurs Who Thought They Had "The Next Big Thing"</h3>
            <p className="mb-4">You know that friend who quit school to start a business?</p>
            <p className="mb-2">The one who was so confident...</p>
            <p className="mb-2">Talking about how he'd be the next Dangote...</p>
            <p className="mb-2">Posted motivational quotes every morning on WhatsApp status...</p>
            <p className="mb-2">"Success is coming"</p>
            <p className="mb-2">"Grinding mode activated"</p>
            <p className="mb-4">"Watch me blow"</p>
            <p className="font-bold mb-4">Where is he now?</p>
            <p className="mb-2">Back home.</p>
            <p className="mb-2">Begging his parents for transport fare.</p>
            <p className="mb-2">Scrolling through job vacancy posts.</p>
            <p className="mb-4">Wondering where it all went wrong.</p>
            
            <div className="bg-gray-100 p-4 my-6 rounded">
              <p className="font-bold">Here's the thing:</p>
              <p className="font-bold">It wasn't his fault.</p>
              <p>Nobody taught him the Business Cemetery Prevention Guide.</p>
            </div>
            
            <p className="mb-4">Look, every day in Nigeria, brilliant students with "amazing" business ideas jump in headfirst...</p>
            <p className="mb-2">They spend their school fees...</p>
            <p className="mb-2">Borrow money from siblings...</p>
            <p className="mb-4">Even sell their phones...</p>
            <p className="font-bold mb-4">All because they "believed" in their idea.</p>
            <p className="font-bold mb-4">But believing is not enough.</p>
            
            <div className="bg-red-100 p-4 my-6 border-l-4 border-red-500">
              <p className="font-bold">The brutal truth?</p>
              <p className="font-bold">The business cemetery is full of people who "believed" in their ideas.</p>
            </div>
            
            <p className="font-bold mb-4">What separates the 10% who succeed from the 90% who fail?</p>
            <p className="font-bold mb-4">They know The Business Analyzer Framework.</p>
            <p className="mb-4">The same framework I reveal in Chapter 1 that shows you how to spot the difference between a goldmine opportunity and a money-draining disaster...</p>
            <p className="font-bold mb-4">...BEFORE you invest a single kobo.</p>
            
            <div className="bg-blue-50 p-4 my-6 rounded">
              <p className="font-bold">This chapter includes:</p>
              <ul className="list-disc pl-6 mt-2">
                <li className="mb-2">The 9-Point Business Analyzer Framework that predicts success with scary accuracy</li>
                <li className="mb-2">Why most businesses fail before they even start (and how to avoid their mistakes)</li>
                <li className="mb-2">The "Starving Crowd" detection method that guarantees customers</li>
                <li className="mb-2">How to validate any business idea in 48 hours without spending money</li>
                <li className="mb-2">The underground drivers that make people spend money (ignore these and stay broke)</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <p className="font-bold">Think about it:</p>
              <p className="mb-2">If this prevents you from wasting just ₦50,000 on a bad business idea...</p>
              <p className="font-bold">You've already made 10x your investment back.</p>
              <p className="mt-2">But what if it saves you from wasting ₦200,000?</p>
              <p className="mb-2">Or ₦500,000?</p>
              <p className="font-bold">Even if I'm half right about this...</p>
              <p className="font-bold">This one chapter pays for itself 100 times over.</p>
            </div>
            
            <p className="text-center font-bold">And that's just Chapter 1.</p>
          </div>
          
          {/* Chapter 2 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-purple-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-700">✔️ CHAPTER TWO: "How to Own Space in Your Customer's Mind" — The Mental Real Estate Strategy That Makes Competition Irrelevant And Forces Customers To Choose You (Even When Cheaper Options Exist)</h3>
            <p className="mb-4">You've seen it happen...</p>
            <p className="mb-4">Two businesses selling the exact same thing...</p>
            <p className="mb-2">Same location...</p>
            <p className="mb-2">Same target market...</p>
            <p className="mb-4">Same pricing...</p>
            <p className="font-bold mb-4">But one is always packed with customers while the other is struggling to survive.</p>
            <p className="font-bold mb-4">What's the difference?</p>
            <p className="font-bold text-purple-700 text-xl mb-4">Mental real estate.</p>
            <p className="mb-4">One business owns space in their customers' minds.</p>
            <p className="mb-4">The other is just... there.</p>
            
            <div className="bg-gray-100 p-4 my-6 rounded">
              <p className="font-bold">Look, in a country like Nigeria where everyone seems to be selling the same thing...</p>
              <p className="mb-2">Rice and stew, POS, fashion, graphics design, web development...</p>
              <p className="font-bold">How do you stand out?</p>
              <p className="font-bold">How do you become THE choice instead of just A choice?</p>
            </div>
            
            <p className="font-bold mb-4">Chapter 2 reveals the 4 positioning strategies that make customers see you as the obvious and only option:</p>
            
            <div className="bg-purple-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">The "First In Market" strategy (and what to do if you're not first)</li>
                <li className="mb-2">How to add a feature that changes everything</li>
                <li className="mb-2">The niche domination secret that eliminates competition</li>
                <li className="mb-2">The business model disruption that makes big competitors look stupid</li>
              </ul>
            </div>
            
            <p className="font-bold mb-4">Plus, you'll discover:</p>
            
            <div className="bg-purple-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">The David vs Goliath strategy for beating established competitors</li>
                <li className="mb-2">How to own mental real estate even in crowded markets</li>
                <li className="mb-2">Why being different is more profitable than being better</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 my-6 rounded border border-yellow-200">
              <p className="font-bold">Real talk:</p>
              <p className="mb-2">Most businesses compete on price because they don't know how to compete on positioning.</p>
              <p className="font-bold">That's a race to the bottom.</p>
              <p className="mt-2">This chapter shows you how to win the race to the top.</p>
            </div>
            
            <p className="font-bold mb-4">When customers think of your category, they think of you FIRST.</p>
            <p className="font-bold text-purple-700">That's mental real estate.</p>
            <p className="font-bold text-purple-700">And it's worth millions.</p>
          </div>
          
          {/* Chapter 3 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-green-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-700">✔️ CHAPTER THREE: "The Advertising Secret That Makes People Buy Instantly" — How To Create Ads That Sell Even When You Have No Money For Expensive Marketing (Plus The 8 Laws That Separate Amateur Advertisers From Money-Making Professionals)</h3>
            <p className="font-bold mb-4">Quick question:</p>
            <p className="font-bold mb-4">Why do most Nigerian businesses waste money on advertising?</p>
            <p className="mb-2">They print beautiful flyers...</p>
            <p className="mb-2">Pay for radio spots...</p>
            <p className="mb-4">Even buy expensive newspaper ads...</p>
            <p className="font-bold mb-4">But nothing happens.</p>
            <p className="mb-2">No customers.</p>
            <p className="mb-2">No sales.</p>
            <p className="mb-4">No results.</p>
            
            <div className="bg-gray-100 p-4 my-6 rounded">
              <p className="font-bold">Here's why:</p>
              <p className="font-bold">They're doing "brand advertising" when they should be doing "direct response advertising."</p>
            </div>
            
            <p className="font-bold mb-4">What's the difference?</p>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <p className="font-bold mb-2">Brand advertising says: "Buy Coca-Cola because it's refreshing."</p>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <p className="font-bold">Direct response advertising says: "Buy this weight loss tea and lose 5kg in 14 days or get your money back. Call 08012345678 now. Only 50 packs left."</p>
            </div>
            
            <p className="font-bold text-center mb-4">Which one makes you want to act immediately?</p>
            <p className="font-bold text-center text-green-700 mb-4">Exactly.</p>
            
            <p className="font-bold mb-4">Chapter 3 breaks down The 8 Unbreakable Laws of Direct Response Marketing:</p>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <ol className="list-decimal pl-6">
                <li className="mb-2">Choose who you're fighting for (and who you're ignoring)</li>
                <li className="mb-2">Grab attention with headlines that stop people in their tracks</li>
                <li className="mb-2">Make an irresistible offer (not just a product announcement)</li>
                <li className="mb-2">Tell them exactly what to do (confused customers don't buy)</li>
                <li className="mb-2">Create urgency that makes them act NOW</li>
                <li className="mb-2">Build trust without begging for it</li>
                <li className="mb-2">Remove risk from the buyer's mind</li>
                <li className="mb-2">Track and test everything (or stay broke)</li>
              </ol>
            </div>
            
            <p className="font-bold mb-4">But that's not all...</p>
            <p className="font-bold mb-4">You'll also discover:</p>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">The headline formula that never fails (even if you're terrible at writing)</li>
                <li className="mb-2">How to create powerful offers that sell even expensive products</li>
                <li className="mb-2">The WhatsApp marketing goldmine strategy</li>
                <li className="mb-2">Why most flyers are complete waste of money (and how to fix them)</li>
                <li className="mb-2">The neighborhood domination strategy for small budgets</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-4 my-6 rounded border border-yellow-200">
              <p className="font-bold">Listen:</p>
              <p className="mb-2">Every ₦1,000 you spend on advertising using these laws can easily bring back ₦5,000-₦10,000.</p>
              <p className="font-bold">Every single time.</p>
              <p className="mt-2">But spend that same ₦1,000 using amateur methods?</p>
              <p className="font-bold">You just donated money to the radio station.</p>
            </div>
            
            <p className="font-bold text-center">This chapter alone could be sold for ₦50,000 and be worth every kobo.</p>
          </div>
          
          {/* Chapter 4 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-yellow-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-yellow-700">✔️ CHAPTER FOUR: "The Unpaid Sales Army: How To Get Others To Promote Your Business FOR FREE" — The Word-Of-Mouth Multiplication System That Turns Every Customer Into Your Personal Marketing Department</h3>
            
            <div className="bg-blue-50 p-4 my-6 rounded">
              <p className="font-bold mb-4">Imagine this scenario:</p>
              <p className="mb-2">You serve one customer today...</p>
              <p className="mb-2">And by next week, that customer has brought you 5 more customers...</p>
              <p className="mb-2">Without you asking...</p>
              <p className="mb-2">Without you paying for ads...</p>
              <p className="mb-4">Without you doing anything extra.</p>
              <p className="font-bold">Sounds too good to be true?</p>
              <p className="font-bold">It's happening all around you.</p>
            </div>
            
            <p className="font-bold mb-4">Think about it:</p>
            <p className="mb-2">When you need a good mechanic, who do you ask?</p>
            <p className="mb-2">When you want to buy a phone, whose opinion matters most?</p>
            <p className="mb-4">When you need a reliable tailor, where do you turn?</p>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <p className="font-bold">Your friends.</p>
              <p className="font-bold">Your family.</p>
              <p className="font-bold">People you trust.</p>
            </div>
            
            <p className="font-bold mb-4">Word-of-mouth is the most powerful form of advertising in Nigeria.</p>
            <p className="font-bold text-green-600 mb-4">And it's completely FREE.</p>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <p className="font-bold">But here's the problem:</p>
              <p className="font-bold">Most businesses hope word-of-mouth happens.</p>
              <p className="font-bold">Smart businesses make it happen.</p>
            </div>
            
            <p className="font-bold mb-4">Chapter 4 shows you the 6 strategies that turn every customer into your unpaid sales army:</p>
            
            <div className="bg-yellow-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">How to stay in customers' minds long after they buy</li>
                <li className="mb-2">The loyalty rewards system that makes customers feel special</li>
                <li className="mb-2">How to use influencers without paying influencer prices</li>
                <li className="mb-2">The outstanding service delivery framework</li>
                <li className="mb-2">How to reward referrals without going broke</li>
                <li className="mb-2">Building an online presence that sells while you sleep</li>
              </ul>
            </div>
            
            <p className="font-bold mb-4">Plus, you'll discover:</p>
            
            <div className="bg-yellow-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">Why Nigerian customers trust recommendations more than ads</li>
                <li className="mb-2">The compound effect of word-of-mouth marketing</li>
                <li className="mb-2">How one happy customer can be worth 50 advertising campaigns</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded border border-green-200">
              <p className="font-bold">Real example:</p>
              <p className="mb-2">One of my students used these strategies in his phone accessories business.</p>
              <p className="mb-2">In 3 months, 80% of his customers came from referrals.</p>
              <p className="font-bold mb-2">His advertising budget?</p>
              <p className="font-bold text-green-600 mb-2">Zero.</p>
              <p className="font-bold mb-2">His profit margins?</p>
              <p className="font-bold">Higher than competitors who spend thousands on ads monthly.</p>
            </div>
            
            <p className="font-bold text-center text-yellow-700">That's the power of unpaid sales armies.</p>
          </div>
          
          {/* Chapter 5 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-red-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-700">✔️ CHAPTER FIVE: "How to Set a Price That Feels Fair — And Sells Like Crazy" — The Nigerian Psychology of Pricing That Makes Customers Happy To Pay Higher Prices (Even During Economic Hardship)</h3>
            
            <div className="bg-gray-100 p-4 my-6 rounded">
              <p className="font-bold mb-4">Scenario:</p>
              <p className="mb-2">Two businesses selling the exact same product.</p>
              <p className="mb-2">Business A: ₦5,000</p>
              <p className="mb-4">Business B: ₦8,000</p>
              <p className="font-bold">Which one do you think sells more?</p>
            </div>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <p className="font-bold mb-4">If you said Business A...</p>
              <p className="font-bold">You're thinking like most broke business owners.</p>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <p className="font-bold mb-4">The correct answer is Business B.</p>
              <p className="font-bold">Why?</p>
              <p className="mt-2">Because price is not about cost.</p>
              <p className="font-bold">Price is about value perception.</p>
            </div>
            
            <p className="mb-4">And in Nigeria, there's a psychology to pricing that most people completely miss.</p>
            
            <div className="bg-yellow-50 p-4 my-6 rounded">
              <p className="font-bold">They think:</p>
              <p className="font-bold italic">"Times are hard, people have no money, I must reduce my prices."</p>
              <p className="font-bold mt-2">Wrong approach.</p>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <p className="font-bold">People ALWAYS have money for things they value.</p>
              <p className="font-bold">Always.</p>
              <p className="mt-2">The question is: Do they value what you're selling?</p>
            </div>
            
            <p className="font-bold mb-4">Chapter 5 reveals:</p>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">Why the "cheapest price" strategy kills businesses</li>
                <li className="mb-2">The psychology of Nigerian buying behavior (this will shock you)</li>
                <li className="mb-2">How market vendors use pricing psychology to sell more</li>
                <li className="mb-2">The affordable vs cheap revolution</li>
                <li className="mb-2">4 smart strategies to make any price feel fair</li>
              </ul>
            </div>
            
            <p className="font-bold mb-4">You'll also discover:</p>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">The art of value stacking (turn ₦10,000 into ₦50,000 perceived value)</li>
                <li className="mb-2">How to spread costs without reducing prices</li>
                <li className="mb-2">The confidence factor that makes customers trust higher prices</li>
                <li className="mb-2">Recession-proof pricing strategies that work even in bad economy</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded border border-green-200">
              <p className="font-bold">Listen:</p>
              <p className="mb-2">Most price resistance comes from the SELLER, not the buyer.</p>
              <p className="mb-2">When you believe your price is fair...</p>
              <p className="mb-2">When you can explain the value clearly...</p>
              <p className="mb-2">When you solve a real problem...</p>
              <p className="font-bold">Customers will pay.</p>
              <p className="mt-2">Even in Nigeria.</p>
              <p className="font-bold">Even during tough times.</p>
            </div>
            
            <p className="font-bold mb-4">This chapter shows you exactly how to set prices that make customers feel like they're getting a bargain...</p>
            <p className="font-bold text-red-700">...even when you're making great profit.</p>
          </div>
          
          {/* Chapter 6 */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8 border border-blue-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-700">✔️ CHAPTER SIX: "The Next Step Is Simple: MOVE." — Your 48-Hour Action Plan That Transforms Everything You've Learned Into Money In Your Bank Account (Because Information Without Implementation Is Just Entertainment)</h3>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <p className="font-bold">You know what separates successful students from "wannabe" entrepreneurs?</p>
              <p className="font-bold text-xl text-center">Action.</p>
              <p className="text-center">Not talent.</p>
              <p className="text-center">Not capital.</p>
              <p className="text-center">Not connections.</p>
              <p className="font-bold text-xl text-center">Action.</p>
            </div>
            
            <p className="mb-4">You can read every business book...</p>
            <p className="mb-2">Watch every YouTube video...</p>
            <p className="mb-4">Attend every seminar...</p>
            
            <div className="bg-yellow-50 p-4 my-6 rounded">
              <p className="font-bold">But if you don't ACT...</p>
              <p className="font-bold">You're just an educated spectator.</p>
            </div>
            
            <p className="font-bold mb-4">Chapter 6 is your action blueprint:</p>
            <p className="font-bold mb-4">The 7 Non-Negotiable Rules:</p>
            
            <div className="bg-blue-50 p-4 my-6 rounded">
              <ol className="list-decimal pl-6">
                <li className="mb-2">Start Now. Start Small. (Why waiting for "perfect conditions" keeps you broke)</li>
                <li className="mb-2">Speed Beats Perfection (The 48-hour rule that changes everything)</li>
                <li className="mb-2">Reinvest Before You Flex (The multiplication game that builds wealth)</li>
                <li className="mb-2">Stick With One Business For A While (Why jumping around kills success)</li>
                <li className="mb-2">Keep The Doors Open (The always-on strategy)</li>
                <li className="mb-2">Keep The Money You Make (Making vs keeping money)</li>
                <li className="mb-2">Get Pushed. Or Stay Stuck. (The accountability system)</li>
              </ol>
            </div>
            
            <p className="font-bold mb-4">Plus, you'll get:</p>
            
            <div className="bg-blue-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">Your "Start Small" checklist (begin with ₦5,000 or less)</li>
                <li className="mb-2">The perfection trap (and how to escape it)</li>
                <li className="mb-2">Smart reinvestment priorities that compound your growth</li>
                <li className="mb-2">The 70-30 money management rule</li>
                <li className="mb-2">How to avoid shiny object syndrome</li>
                <li className="mb-2">The 18-month commitment rule</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-4 my-6 rounded border border-red-200">
              <p className="font-bold">Warning:</p>
              <p className="font-bold">This chapter will make you uncomfortable.</p>
              <p className="mt-2">Because it will force you to confront the gap between what you know and what you do.</p>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded border border-green-200">
              <p className="font-bold">But that discomfort?</p>
              <p className="font-bold">That's where growth lives.</p>
              <p className="font-bold text-green-700 text-xl">That's where money lives.</p>
            </div>
          </div>
          
          {/* Bonuses */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-purple-200">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-purple-700">But wait... there's more value inside:</h3>
            
            <div className="bg-purple-50 p-4 my-6 rounded">
              <ul className="list-disc pl-6">
                <li className="mb-2">The Early Bird Revolution - Why starting as a student gives you unfair advantages</li>
                <li className="mb-2">The Graduate Reality Check - What universities won't tell you about post-graduation life</li>
                <li className="mb-2">The Student Advantage - How to use your current situation as a competitive weapon</li>
                <li className="mb-2">The Compound Effect of Starting Early - Why every month you delay costs you thousands</li>
                <li className="mb-2">Plus dozens of real Nigerian examples, case studies, and step-by-step frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing and Urgency Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Now, here's what this is really worth:</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="mb-4">If you hired a business consultant to teach you just the frameworks in Chapter 1...</p>
            <p className="font-bold mb-4">You'd easily pay ₦150,000.</p>
            <p className="mb-4">The advertising strategies in Chapter 3?</p>
            <p className="font-bold mb-4">Marketing agencies charge ₦200,000 for this level of insight.</p>
            <p className="mb-4">The positioning secrets in Chapter 2?</p>
            <p className="font-bold mb-4">Priceless.</p>
            <p className="mb-4">Most businesses never figure this out (that's why they struggle for years).</p>
            <p className="mb-4">The word-of-mouth system in Chapter 4?</p>
            <p className="font-bold mb-4">Worth at least ₦100,000 in saved advertising costs.</p>
            <p className="mb-4">The pricing psychology in Chapter 5?</p>
            <p className="font-bold mb-4">This alone could double your profit margins overnight.</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold">Conservative total value: ₦650,000</p>
            </div>
            
            <p className="font-bold mb-4">But you're not paying ₦650,000.</p>
            <p className="font-bold mb-4">You're not even paying ₦100,000.</p>
            
            <div className="bg-gray-100 p-4 my-6 rounded">
              <p className="mb-4">In fact, let me be completely honest with you:</p>
              <p className="font-bold mb-4">I was planning to sell this for ₦25,000.</p>
              <p className="font-bold">And at that price, it would still be the bargain of the century.</p>
            </div>
            
            <div className="bg-blue-50 p-4 my-6 rounded">
              <p className="mb-4">But here's what happened...</p>
              <p className="mb-4">I remembered what it felt like...</p>
              <p className="mb-2">Calling home to ask for money...</p>
              <p className="mb-2">Hearing that pause in my parent's voice...</p>
              <p className="mb-2">That guilt...</p>
              <p className="mb-2">That frustration...</p>
              <p className="mb-4">That feeling of being a burden.</p>
              <p className="font-bold">I remembered.</p>
              <p className="font-bold mt-4">And I realized...</p>
              <p className="font-bold">If price becomes a barrier between you and financial freedom...</p>
              <p className="font-bold">Then I've failed.</p>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded border border-green-200">
              <p className="font-bold text-lg">So here's what I'm doing:</p>
              <p className="font-bold">For the next 48 hours ONLY...</p>
              <p className="font-bold">You can get the complete Alert Manual system...</p>
              <p className="font-bold">All 6 game-changing chapters...</p>
              <p className="font-bold">All the bonuses...</p>
              <p className="font-bold">All the frameworks that could easily make you ₦500,000 in the next 6 months...</p>
              <p className="font-bold text-2xl text-center my-4">For just ₦4,950.</p>
            </div>
            
            <div className="bg-yellow-50 p-4 my-6 rounded">
              <p className="mb-2">That's less than what you probably spend on data in 2 months.</p>
              <p className="mb-2">Less than a decent pair of shoes.</p>
              <p className="mb-2">Less than one night out with friends.</p>
              <p className="font-bold">But potentially worth MILLIONS in your lifetime earning capacity.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="font-bold mb-4">But here's the catch: I want to make sure that the people who get these life-changing resources are SERIOUS about using them.</p>
            <p className="mb-4">Listen...</p>
            <p className="font-bold mb-4">I don't just want anyone to grab them, forget about them, and move on.</p>
            <p className="mb-4">Seriously, that won't be fair at all.</p>
            <p className="mb-4">These are the kinds of secrets that work when you're truly committed.</p>
            
            <div className="bg-red-50 p-4 my-6 rounded">
              <p className="font-bold">The ₦4,950 commitment fee ensures you're serious.</p>
            </div>
            
            <p className="font-bold mb-4">Here's the psychology:</p>
            <p className="mb-4">When you invest in something...</p>
            <p className="mb-4">Even a small amount...</p>
            <p className="font-bold mb-4">You value it more.</p>
            <p className="font-bold mb-4">You actually USE it.</p>
            
            <div className="bg-blue-50 p-4 my-6 rounded">
              <p className="font-bold">Think about it:</p>
              <p className="mb-2">All those free PDFs you've downloaded...</p>
              <p className="mb-2">How many did you actually read?</p>
              <p className="mb-2">How many did you implement?</p>
              <p className="font-bold">Exactly.</p>
            </div>
            
            <div className="bg-green-50 p-4 my-6 rounded">
              <p className="font-bold">But when you pay for something?</p>
              <p className="font-bold">When you have skin in the game?</p>
              <p className="font-bold">You take action.</p>
            </div>
            
            <p className="font-bold text-center mb-4">And action is what separates dreamers from achievers.</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold mb-4">So ask yourself:</p>
              <p className="mb-2">Am I ready to invest ₦4,950 in my financial future?</p>
              <p className="mb-2">Am I ready to stop making excuses and start making money?</p>
              <p className="mb-2">Am I ready to transform from a struggling student into a profitable business owner?</p>
            </div>
            
            <div className="bg-green-100 p-4 my-6 border-l-4 border-green-500">
              <p className="font-bold">If the answer is YES...</p>
              <p className="font-bold">Then this is your moment.</p>
            </div>
            
            <div className="bg-red-100 p-4 my-6 border-l-4 border-red-500">
              <p className="font-bold">If the answer is NO...</p>
              <p className="font-bold">Then close this page and continue as you were.</p>
              <p className="mt-2">But don't come back in 2 years wondering "what if..."</p>
            </div>
          </div>
          
          <div className="bg-red-100 p-6 rounded-lg border border-red-200 text-center">
            <p className="font-bold text-xl mb-4">IMPORTANT: This offer disappears in 48 hours.</p>
            <p className="font-bold mb-4">After that, if I decide to release this again...</p>
            <p className="font-bold text-2xl">The price goes back to ₦25,000.</p>
            
            <div className="bg-white p-4 my-6 rounded">
              <p className="font-bold mb-4">Why 48 hours?</p>
              <p className="font-bold">Because urgency creates clarity.</p>
            </div>
            
            <p className="font-bold mb-4">And right now, you have a choice:</p>
            
            <div className="grid md:grid-cols-2 gap-6 my-6">
              <div className="bg-red-50 p-4 rounded">
                <p className="font-bold mb-2">Option 1: Take action, invest ₦4,950, and potentially change your life forever.</p>
              </div>
              <div className="bg-green-50 p-4 rounded">
                <p className="font-bold mb-2">Option 2: Wait, hesitate, and watch this opportunity disappear.</p>
              </div>
            </div>
            
            <p className="font-bold mb-4">Your choice.</p>
            
            <div className="bg-yellow-100 p-4 my-6 border-l-4 border-yellow-500">
              <p className="font-bold">But remember:</p>
              <p className="mb-2">Every month you delay learning these strategies...</p>
              <p className="mb-2">Is another month of calling home for money...</p>
              <p className="mb-2">Another month of watching opportunities pass you by...</p>
              <p className="mb-2">Another month closer to graduation without any financial preparation...</p>
            </div>
            
            <p className="font-bold text-xl">Time is not neutral.</p>
            <p className="font-bold text-xl">It's either working for you or against you.</p>
            <p className="font-bold text-2xl text-green-600 mt-4">Make it work FOR you.</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Here's exactly what happens when you secure your copy right now:</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
              <p className="font-bold mb-2">Instant Access: You'll receive the complete Alert Manual immediately after payment</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="font-bold mb-2">No Waiting: Download and start reading in the next 5 minutes</p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
              <p className="font-bold mb-2">Mobile Friendly: Read on your phone, tablet, or computer</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-bold mb-2">Lifetime Access: Keep it forever, refer back anytime</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border border-red-200">
              <p className="font-bold mb-2">Free Updates: Get improved versions at no extra cost</p>
            </div>
          </div>
          
          <div className="bg-green-100 p-6 rounded-lg border border-green-200 text-center">
            <p className="font-bold text-xl mb-4">Plus, my personal guarantee:</p>
            <p className="font-bold mb-4">If you read the entire Alert Manual...</p>
            <p className="font-bold mb-4">Apply the strategies for 30 days...</p>
            <p className="font-bold mb-4">And don't see clear opportunities to make money...</p>
            <p className="font-bold text-2xl text-green-700">I'll personally refund every kobo.</p>
            <p className="font-bold mt-4">No questions asked.</p>
            <p className="font-bold">No hard feelings.</p>
            <p className="font-bold text-xl mt-4">You literally have NOTHING to lose and EVERYTHING to gain.</p>
          </div>
        </div>
      </section>

      {/* Objection Handling Section */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Still hesitating? Let me address your concerns:</h2>
          
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-6">
              <p className="font-bold mb-2">"But I don't have any business experience..."</p>
              <p className="font-bold text-green-600">Perfect. This manual is specifically designed for beginners. We start from zero and build up.</p>
            </div>
            
            <div className="mb-6">
              <p className="font-bold mb-2">"But I don't have capital to start a business..."</p>
              <p className="font-bold text-green-600">Chapter 6 shows you how to start with ₦5,000 or less. Some strategies require ZERO capital.</p>
            </div>
            
            <div className="mb-6">
              <p className="font-bold mb-2">"But I need to focus on my studies..."</p>
              <p className="font-bold text-green-600">Chapter 1 explains why waiting until graduation is financial suicide. Plus, these strategies take just 2-3 hours per week.</p>
            </div>
            
            <div className="mb-6">
              <p className="font-bold mb-2">"But what if it doesn't work for me?"</p>
              <p className="font-bold text-green-600">That's why there's a 30-day money-back guarantee. All the risk is on me.</p>
            </div>
            
            <div className="mb-6">
              <p className="font-bold mb-2">"But ₦4,950 is all I have for food this week..."</p>
              <p className="font-bold text-green-600">I understand. But ask yourself: Would you rather use ₦4,950 to eat for one week, or to learn skills that could feed you for life?</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-12 px-4 bg-gradient-to-r from-blue-900 to-purple-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">The moment of truth:</h2>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8">
            <p className="font-bold mb-4">You have two paths in front of you.</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-red-500 bg-opacity-30 p-4 rounded">
                <p className="font-bold mb-2 text-white">Path 1: Close this page. Continue as you were. Keep calling home for money. Keep struggling. Keep hoping things will magically change after graduation.</p>
              </div>
              <div className="bg-green-500 bg-opacity-30 p-4 rounded">
                <p className="font-bold mb-2 text-white">Path 2: Invest ₦4,950 in yourself. Learn the Alert Manual system. Start seeing opportunities everywhere. Begin making money as a student. Graduate financially prepared.</p>
              </div>
            </div>
            
            <p className="font-bold text-xl mb-4">Which path will you choose?</p>
            <p className="font-bold mb-4">The decision is yours.</p>
            <p className="font-bold text-red-300">But the opportunity expires in 48 hours.</p>
          </div>
          
          <div className="bg-yellow-400 p-6 rounded-lg text-black mb-8">
            <p className="font-bold text-xl mb-4">Ready to transform your financial future?</p>
            <p className="font-bold mb-6">Click the button below to secure your copy of The Alert Manual and join the ranks of financially independent students who never have to beg for money again.</p>
            
            <Link 
              href="https://selar.com/graduate-rich" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300"
            >
              GET THE ALERT MANUAL NOW - ₦4,950 ONLY
            </Link>
          </div>
          
          <div className="bg-white bg-opacity-10 p-6 rounded-lg">
            <p className="font-bold mb-4">Remember:</p>
            <p className="mb-2">This is not just about making money as a student.</p>
            <p className="mb-2">This is about developing skills that will serve you for life.</p>
            <p className="mb-2">This is about never being dependent on anyone for your financial needs.</p>
            <p className="mb-2">This is about graduating with confidence, not just a certificate.</p>
            <p className="font-bold text-xl">This is about your future.</p>
            <p className="font-bold text-xl mt-4">Make the right choice.</p>
            <p className="font-bold text-2xl text-yellow-300">Make it now.</p>
          </div>
          
          <div className="mt-8 text-left">
            <p className="font-bold italic text-white">P.S. - In 48 hours, when this offer expires, don't be the person who says "I should have taken action when I had the chance." Be the person who says "Best ₦4,950 I ever spent."</p>
            <p className="font-bold italic mt-4 text-white">P.P.S. - Your parents have sacrificed so much to put you through school. The least you can do is invest ₦4,950 to ensure their sacrifice wasn't in vain. Make them proud. Make yourself proud. Take action now.</p>
          </div>
        </div>
      </section>
    </div>
  );
}