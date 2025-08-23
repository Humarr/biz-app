/* eslint-disable react/no-unescaped-entities */
// 'use client';

import Link from 'next/link';
// import { useState, useEffect } from 'react';

export default function SalesPage() {
//   const [timeLeft, setTimeLeft] = useState({
//     days: 2,
//     hours: 23,
//     minutes: 59,
//     seconds: 59
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         } else if (prev.days > 0) {
//           return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
//         } else {
//           clearInterval(timer);
//           return { days: 0, hours: 0, minutes: 0, seconds: 0 };
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-green-800 to-green-600 text-white py-8 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">How ANY Nigerian student Can Make An Extra ₦100k To ₦300k Consistently EVERY Month Even If You Currently Don't Have ANY skill</h1>
        
        <div className="bg-yellow-400 text-green-900 p-4 rounded-lg max-w-3xl mx-auto mt-6 border-2 border-yellow-500">
          <h2 className="text-xl md:text-2xl font-bold mb-2">I HATE TO SWEAR, BUT YOU WON'T BELIEVE EVERYTHING (WORTH ₦200,000) ON THIS PAGE IS ALMOST 100% FREE!</h2>
          <p className="mt-2">And they have the ultimate power to make you live comfortably in school and after graduation - even if you're starting from zero - by adding an extra ₦100k to ₦500k (or more) to your monthly income as soon as you start putting them into fast action!</p>
          <p className="mt-2 font-bold">In fact, it doesn't matter if you're a fresher, 200 level student, 300 level student, or ANYONE, as long as you want to make money consistently and secure your life before graduation!</p>
          <div className="bg-red-100 text-red-800 p-3 rounded mt-4 border border-red-300">
            <p className="font-bold">*(Over 1000 students like you who will be your competitors will get this today. Some might have even gotten it already)*</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Author Section */}
        <div className="border-l-4 border-green-600 pl-4 my-8">
          <p className="text-sm uppercase tracking-wider text-gray-500">A Special Life-changing (yet, thought-provoking) message from:</p>
          <p className="italic text-gray-700">An ex-poor student…</p>
          <p className="italic text-gray-700">…Who spent his first few years in school thinking that's the only way to success…</p>
          <p className="italic text-gray-700">…Focusing ONLY on academics, but now has multiple profitable businesses giving him consistent monthly income, and also currently building a tech startup company.</p>
        </div>

        {/* Personal Story Section */}
        <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
          <p className="text-center italic mb-4">From 2021 to 2025, he has successfully studied from the best business minds world-wide and built businesses, even while facing heavy criticism and resistance from those who said *"you must face your studies so you can get a good job"*</p>
          <p className="text-center font-bold text-blue-800">"How did a student who once struggled to get good food end up learning about business and trying to help other students make their first ₦100k+?"</p>
        </div>

        {/* Dear Student Section */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Dear Frustrated Student,</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-4">Do you feel the pain in your struggling parent's voices when you call home to ask for money?</p>
            <p className="mb-4">The way they pause...</p>
            <p className="mb-4">Before they say "How much do you need this time?"</p>
            <p className="mb-4">That silence that feels like forever...</p>
            <p className="mb-4">Where you can literally <strong>hear</strong> them calculating what bills they'll skip to send you money.</p>
            <p className="mb-4">The guilt that eats you up inside...</p>
            <p className="mb-4">Knowing your dad just borrowed money from his colleague at work...</p>
            <p className="mb-4 font-bold">Again.</p>
            <p className="mb-4">And your mom is probably thinking of what to sell...</p>
            <p className="mb-4">Just so you can eat this week.</p>
            <p className="mb-4 font-bold">Mehnnn.</p>
            <p className="mb-4 font-bold">That pain is real.</p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300 my-6">
              <p className="font-bold mb-2">Would you like to CONSISTENTLY earn enough money monthly without begging or disturbing anyone?</p>
              <p className="font-bold mb-2">Would you like to be the child who calls home to say "Mummy, I want to send you money this month"?</p>
              <p className="font-bold mb-2">Would you like to NOT be like those guys who graduated 6 years ago… sitting at home, "begging to apply", begging for "any opportunity"?</p>
              
              <p className="mt-4 font-bold">The ones refreshing job sites every 30 minutes?</p>
              <p className="font-bold">The ones whose CV has been "under review" for 8 months?</p>
              <p className="font-bold">The ones whose parents keep asking "So what's the update on that interview?"</p>
              
              <p className="mt-4">Are you ready to learn how to generate ₦100k+ consistently EVERY month even if you don't have any skills right now?</p>
              
              <p className="mt-4">If you answer yes to any of the above questions…</p>
              <p className="mt-2">…What I'm about to reveal will shock you.</p>
              <p className="mt-2">And you may not want to hear it at first, but deep down, you'll come to realize - without this…</p>
              <p className="mt-2">Your dream of living comfortably as a student and securing your financial future before you graduate will continue to slip away while you watch others break free, and are no longer disturbing their parents, siblings, and friends for money.</p>
            </div>
            
            <p className="font-bold text-center">So, what is it?</p>
            <p className="text-center">Whether you're a fresher, in your second year…</p>
            <p className="text-center">Or maybe an IT student, in final year, or ANYONE…</p>
            <p className="text-center">As long as you want to make consistent money that gives you a soft life as a student and prepares you for the future…</p>
            
            <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
              <p className="font-bold text-red-800 text-xl">The harsh truth is:</p>
              <p className="mt-2">The real reason why most students never attain financial freedom has nothing to do with lack of capital or skills.</p>
              <p className="mt-2 font-bold">Surprised?</p>
              <p className="mt-2">I didn't believe it either when my mentor told me.</p>
            </div>
            
            {/* First CTA Button */}
            {/* <div className="text-center mt-8">
              <Link href="https://selar.com/graduate-rich" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
                GET THE ALERT MANUAL NOW - ₦4,950 ONLY
              </Link>
              <p className="text-sm text-gray-600 mt-2">Secure Payment • Instant Access • 30-Day Money-Back Guarantee</p>
            </div> */}
          </div>
        </div>

        {/* The Alert Manual Section */}
        <div className="my-12 bg-green-50 p-6 rounded-lg border border-green-200">
          {/* <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">The Alert Manual System</h2> */}
          
          <p className="mb-4">And he said…</p>
          <p className="mb-4">That's because most universities have been keeping this secret from you…</p>
          <p className="mb-4">Maybe because they don't want you to know you can make LEGIT money <span className="underline">without</span> their certificate</p>
          <p className="mb-4">Or maybe (just maybe) they don't even FULLY understand it themselves on a deeper level.</p>
          
          <div className="bg-white p-4 rounded-lg my-6 border border-green-300">
            <p className="font-bold mb-2">And have you ever wondered why most people never get the money and freedom they want?</p>
            <p className="mb-4">As in, you've tried everything - praying to God to show you the way, begging your parents/guardians for money, saving money, trying to get a small job…</p>
            <p className="font-bold">Yet, things don't just go as you hoped.</p>
          </div>
          
          <p className="mb-4">Look, it's frustrating, isn't it?</p>
          <p className="mb-4">Trying all you can: investing time, energy, and even money, only to see everything fall flat like a collapsing house.</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold text-yellow-800">Here's what I discovered:</p>
            <p className="mt-2">I'm at a point where I genuinely believe any student can build a successful business - and touching ₦100k+ within months of starting - especially given that every single business I start has the potential of reaching incredible heights and making "BIG money".</p>
            <p className="mt-2 font-bold">And the reason for this is simple.</p>
            <p className="mt-2">I've mastered what I call <span className="font-bold">"The Alert Manual"</span> system.</p>
          </div>
          
          <p className="mt-4">These are subtle but powerful techniques that gives you the almost super human ability to see opportunities others miss, know if a venture will be profitable before wasting your energy, time, and money…</p>
          <p className="mt-2">… And built profitable businesses that practically run themselves (it doesn't matter if you have zero experience or skills).</p>
          <p className="mt-2">Plus, it's this system that I've been using to build profitable businesses and also help other students earn ₦100k+ time and time again.</p>
        </div>

        {/* Testimonials Section */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">BUT BEFORE YOU READ ON, HERE'S SOME OF WHAT I PREDICT YOU'LL SAY ABOUT WORKING WITH ME:</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-handwriting text-xl text-purple-800">"Hey man, you changed my life. I went from broke student who could barely afford a single meal in a day to making 300k+ monthly from my online service business. The framework in chapter 1 alone is worth millions"</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-handwriting text-xl text-purple-800">"Chapter 3's Free Advertising secrets helped me get my first 50 customers without spending money on ads. This is pure gold"</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-handwriting text-xl text-purple-800">"This guy understands the Nigerian business landscape. No wonder his strategies works for students who want a stable and legal way to generate cool cash"</p>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-handwriting text-xl text-purple-800">"This guy is someone who can take students who are complete beginners and then turn them into profitable business owners, regardless of the economic situation. Remarkable"</p>
            </div>
          </div>
        </div>

        {/* Mind Training Section */}
        <div className="my-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Here's something you better believe that will drastically change everything for you:</h2>
          
          <p className="mb-4 font-bold">Listen:</p>
          <p className="mb-4">It's NOT your background, your capital, the government (they don't care about you anyway), the economy (even though it's soo bad) or your skills that determine business success, or generate money for you.</p>
          
          <div className="bg-white p-4 rounded-lg my-6 border border-blue-300">
            <p className="font-bold text-red-600">Look, the problem lies in something deeper:</p>
            <p className="font-bold text-xl text-center mt-2">Your mind is not trained to spot hidden opportunities around you every single day!</p>
          </div>
          
          <p className="mb-4">Or you might think financial freedom comes from having the perfect ideas or lots of money to start.</p>
          <p className="mb-4">But these are not the real reasons students gain financial freedom.</p>
          <p className="mb-4 font-bold">Even having a first class degree which seems like the obvious answer, is NOT even the top factor for success in making money!</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">What's missing?</p>
            <p className="font-bold text-2xl text-green-700 mt-2">The Alert Manual system.</p>
            <p className="mt-2">That's what you're about to discover in a moment almost for free.</p>
          </div>
          
          <p className="mt-4">And without this system...</p>
          <p className="font-bold text-red-600">Opportunities Will Keep Passing You By (no matter how smart you think you are)</p>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200 mt-6">
            <p className="mb-2">You know that guy in your class who's always talking about "when I finish school"?</p>
            <p className="mb-2">The one who has big dreams...</p>
            <p className="mb-2">But never takes action?</p>
            <p className="mb-2">The one who's waiting for the "perfect time"?</p>
            <p className="font-bold">That could be you in 5 years.</p>
            <p className="mt-2">Still waiting.</p>
            <p className="mt-2">Still hoping.</p>
            <p className="mt-2">Still broke.</p>
          </div>
          
          <p className="mt-4">In fact, you'll graduate broke throughout your student life…</p>
          <p className="mt-2">…Stuck in the line with former students who've graduated 6 years ago but are still walking around with their certificates BEGGING to work for someone else…</p>
          <p className="mt-2">…Who offers them ₦80k salary (after all the suffering in school)...</p>
          <p className="mt-2">…And can still fire them anytime without any reason forever…</p>
          <p className="mt-2">And even miss profitable opportunities daily.</p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-300 mt-6">
            <p className="font-bold">Listen, <span className="text-green-700">The Alert Manual</span> system is what separates successful people from dreamers!</p>
            <p className="mt-2">And without it,</p>
            <p className="mt-2">Even the best skills or unlimited capital won't matter because you won't know how to use them to generate MORE money CONSISTENTLY.</p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="my-12 bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">So, what's the solution?</h2>
          
          <p className="mb-4">Look, this is your secret weapon because it's the one skill that cannot be outsourced - the ability to see money making opportunities that no one else sees.</p>
          <p className="mb-4">And it's even the foundation every business opportunity is built on!</p>
          <p className="mb-4">Plus, when you develop this system in any…</p>
          <p className="mb-4">I repeat, in ANY area of business - maybe idea validation, customer psychology, profitable pricing strategy…</p>
          <p className="mb-4">You're not just starting a business…</p>
          <p className="font-bold">You're building a money-making machine (and you'll never wonder why you've been begging your parents for money for everything).</p>
          <p className="mt-4">And you'll kick yourself if you keep thinking you have to wait until after graduation without learning this… but you MUST be willing to take action for this to work effectively…</p>
          <p className="font-bold mt-2">There's no room for laziness here!</p>
        </div>

        {/* Example Section */}
        <div className="my-12 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">For example:</h2>
          
          <p className="mb-4">Imagine being able to create an ad like this…</p>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-300 my-6">
            <p className="font-bold italic">"Why Most Food Vendors Struggle to Make ₦50k Monthly (And The Simple System That Can Transform Their Income In 90 Days)"</p>
          </div>
          
          <p className="mb-4">If you're a food vendor…</p>
          <p className="mb-4">That makes you think…</p>
          <p className="mb-4">"What system?"</p>
          <p className="mb-4">"How can I use this to improve my sales?"</p>
          <p className="mb-4">You see, you're hooked because you need urgent answers.</p>
          
          <p className="mb-4">Or look at this marketing "bullet" below:</p>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-300 my-6">
            <p className="font-bold italic">"The One Service Every Lagos Professional Needs But Not One Is Providing (Hint: it's NOT What You Think)"</p>
          </div>
          
          <p className="mb-4">Now, can you feel the pull?</p>
          <p className="font-bold text-xl mb-4">Bang!</p>
          
          <p className="mb-4">Let me say this:</p>
          <p className="mb-4">With <span className="font-bold">The Alert Manual</span> system, you can NEVER stop seeing opportunities because your mind is constantly looking for profitable gaps - and even legendary business icons like Dangote confirmed it!</p>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold">As in, successful entrepreneurs don't just stumble into success…</p>
            <p className="mt-2">They develop the ability to see what others miss…</p>
            <p className="font-bold text-red-600 mt-2">EVEN IF THEY START WITH NOTHING (THE FASTER THEY SPOT HIDDEN OPPORTUNITIES, THE QUICKER THEY BUILD WEALTH)</p>
          </div>
          
          <p className="mt-4">Listen:</p>
          <p className="mb-4">If you want to make ₦100k+ consistently…</p>
          <p className="mb-4">Just like a sharp hunter who never misses his target…</p>
          <p className="mb-4">Then don't just focus on capital and skills (they're helpful but not essential).</p>
          
          <div className="bg-green-100 p-4 rounded-lg border border-green-300 mt-6">
            <p className="font-bold text-green-800">What to focus on?</p>
            <p className="font-bold text-xl mt-2">Start by developing your Alert Manual system because once you can see opportunities, EVERYTHING else falls into place.</p>
          </div>
          
          <p className="mt-4">But, and here's a bigger but:</p>
          <p className="font-bold"><span className="text-red-600">The Alert Manual</span> can make or destroy your financial future.</p>
          <p className="mt-2">But the kicker is…</p>
          <p className="mt-2">Most students get it completely wrong.</p>
          <p className="mt-2">As in, they either overthink every opportunity and never act, or they jump into bad ideas without proper validation.</p>
          
          <div className="bg-white p-4 rounded-lg border border-yellow-300 mt-6">
            <p className="font-bold text-center">So, would you love to know the RIGHT WAY to develop your Alert Manual system (that actually works in 2025) to spot profitable opportunities everywhere and build wealth systematically?</p>
            <p className="mt-2 text-center">Well, I'm teaching this almost 100% free.</p>
            <p className="mt-2 text-center">But only if you act now by clicking just 1 link below (towards the end of this page)...</p>
            <p className="mt-2 text-center">…to learn the exact frameworks that successful students use to turn opportunities into consistent income!</p>
          </div>
        </div>

        {/* Attention Section */}
        <div className="my-12 bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">Here's something to pay attention to:</h2>
          
          <div className="bg-white p-4 rounded-lg border border-red-300">
            <p className="font-bold text-center text-xl">This is 100% free and you got NOTHING to lose</p>
            
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-100 p-3 rounded-lg text-center">
                <p className="font-bold">❌ No risk</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg text-center">
                <p className="font-bold">❌ No hidden costs</p>
              </div>
              <div className="bg-red-100 p-3 rounded-lg text-center">
                <p className="font-bold">❌ No upselling</p>
              </div>
            </div>
            
            <p className="text-center mt-4">Just pure value that could change your life forever.</p>
          </div>
          
          <p className="mt-4">If you don't, you'll miss out and NOTHING will change.</p>
          <p className="mt-2">But if you do?</p>
          <p className="font-bold mt-2">You'll start seeing profitable opportunities everywhere and your life will NEVER be the same.</p>
          <p className="font-bold mt-2">I promise.</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
            <p className="font-bold">Can you use this system for service businesses?</p>
            <p className="font-bold text-green-700 mt-2">Absolutely!</p>
            <p className="mt-2">It works for ANY type of business - online services, physical products, digital products, you name it!</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-red-300 mt-6">
            <p className="font-handwriting text-xl">"I applied the pricing strategies in my fashion business, and I was scared at first. But when I started getting customers who are paying my new prices even though it was HIGHER? Mehnnn!"</p>
          </div>
          
          <p className="mt-4 font-bold">How about e-commerce, consulting, freelancing and more?</p>
          <p className="font-bold text-green-700">Yes, it works for ANYTHING - as long as the goal is to build sustainable wealth!</p>
        </div>

        {/* Second CTA Button */}
        <div className="text-center my-12">
          <Link href="https://selar.com/graduate-rich" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            GET THE ALERT MANUAL NOW - ₦4,950 ONLY
          </Link>
          <p className="text-sm text-gray-600 mt-2">Secure Payment • Instant Access • 30-Day Money-Back Guarantee</p>
        </div>

        {/* Chapters Section */}
        <div className="my-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">HERE'S WHAT ELSE AWAITS YOU INSIDE "THE ALERT MANUAL," READY TO ADD AN EXTRA ₦500K - 1 MILLION NAIRA (OR MORE), TO YOUR MONTHLY INCOME</h2>
          
          <p className="text-center mb-8">You see:</p>
          <p className="text-center mb-8">There are 3 types of people:</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
              <p className="font-bold text-green-700">Those who build businesses and create wealth</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
              <p className="font-bold text-yellow-700">Those who work for business owners their entire lives</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-300 text-center">
              <p className="font-bold text-red-700">Those who dream about building wealth but never do anything</p>
            </div>
          </div>
          
          <p className="text-center font-bold mb-8">No matter which group you fall into, one thing is certain:</p>
          
          <div className="bg-blue-100 p-6 rounded-lg border border-blue-300 text-center">
            <p className="font-bold text-blue-800 text-xl">"You want to break free from poverty and build something that pays you consistently"</p>
            <p className="font-bold mt-2">Is that correct?</p>
          </div>
          
          <div className="bg-green-100 p-6 rounded-lg border border-green-300 text-center mt-8">
            <p className="font-bold text-green-800 text-xl">IF YOUR ANSWER IS YES, THEN TODAY (RIGHT NOW), YOU'LL ALSO GET 7 LIFE-CHANGING CHAPTERS - ALMOST 100% FREE</p>
          </div>
        </div>

        {/* Chapter 1 */}
        <div className="my-12 bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">✔️ CHAPTER ONE: "Before You Quit Your Job Or Waste Your Savings" — The Business Cemetery Prevention Guide That Could Save You From Joining The 90% Of Failed Entrepreneurs Who Thought They Had "The Next Big Thing"</h2>
          
          <p className="mb-4">You know that friend who quit school to start a business?</p>
          <p className="mb-4">The one who was so confident...</p>
          <p className="mb-4">Talking about how he'd be the next Dangote...</p>
          <p className="mb-4">Posted motivational quotes every morning on WhatsApp status...</p>
          
          <div className="bg-white p-4 rounded-lg border border-red-300 my-6">
            <p className="font-bold italic">"Success is coming"</p>
            <p className="font-bold italic">"Grinding mode activated"</p>
            <p className="font-bold italic">"Watch me blow"</p>
          </div>
          
          <p className="font-bold text-red-600">Where is he now?</p>
          
          <p className="mb-4">Back home.</p>
          <p className="mb-4">Begging his parents for transport fare.</p>
          <p className="mb-4">Scrolling through job vacancy posts.</p>
          <p className="mb-4">Wondering where it all went wrong.</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">Here's the thing:</p>
            <p className="font-bold text-red-600 mt-2">It wasn't his fault.</p>
            <p className="mt-2">Nobody taught him the Business Cemetery Prevention Guide.</p>
          </div>
          
          <p className="mt-4">Look, every day in Nigeria, brilliant students with "amazing" business ideas jump in headfirst...</p>
          <p className="mt-2">They spend their school fees...</p>
          <p className="mt-2">Borrow money from siblings...</p>
          <p className="mt-2">Even sell their phones...</p>
          <p className="mt-2">All because they "believed" in their idea.</p>
          
          <p className="mt-4 font-bold">But believing is not enough.</p>
          
          <div className="bg-white p-4 rounded-lg border border-red-300 my-6">
            <p className="font-bold text-red-600">The brutal truth?</p>
            <p className="font-bold mt-2">The business cemetery is full of people who "believed" in their ideas.</p>
          </div>
          
          <p className="font-bold">What separates the 10% who succeed from the 90% who fail?</p>
          <p className="mt-2">They know <span className="font-bold">The Business Analyzer Framework.</span></p>
          
          <p className="mt-4">The same framework I reveal in Chapter 1 that shows you how to spot the difference between a goldmine opportunity and a money-draining disaster...</p>
          <p className="font-bold mt-2">...BEFORE you invest a single kobo.</p>
          
          <div className="bg-green-50 p-4 rounded-lg border border-green-300 mt-6">
            <p className="font-bold">This chapter includes:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The 9-Point Business Analyzer Framework that predicts success with scary accuracy</li>
              <li>Why most businesses fail before they even start (and how to avoid their mistakes)</li>
              <li>The "Starving Crowd" detection method that guarantees customers</li>
              <li>How to validate any business idea in 48 hours without spending money</li>
              <li>The underground drivers that make people spend money (ignore these and stay broke)</li>
            </ul>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="font-bold">Think about it:</p>
            <p className="mt-2">If this prevents you from wasting just ₦50,000 on a bad business idea...</p>
            <p className="font-bold mt-2">You've already made 10x your investment back.</p>
            <p className="mt-2">But what if it saves you from wasting ₦200,000?</p>
            <p className="mt-2">Or ₦500,000?</p>
            <p className="font-bold mt-2">Even if I'm half right about this...</p>
            <p className="font-bold text-green-700 mt-2">This one chapter pays for itself 100 times over.</p>
            <p className="mt-2">And that's just Chapter 1.</p>
          </div>
        </div>

        {/* Chapter 2 */}
        <div className="my-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">✔️ CHAPTER TWO: "How to Own Space in Your Customer's Mind" — The Mental Real Estate Strategy That Makes Competition Irrelevant And Forces Customers To Choose You (Even When Cheaper Options Exist)</h2>
          
          <p className="mb-4">You've seen it happen...</p>
          <p className="mb-4">Two businesses selling the exact same thing...</p>
          <p className="mb-4">Same location...</p>
          <p className="mb-4">Same target market...</p>
          <p className="mb-4">Same pricing...</p>
          <p className="mb-4">But one is always packed with customers while the other is struggling to survive.</p>
          
          <div className="bg-white p-4 rounded-lg border border-blue-300 my-6">
            <p className="font-bold text-blue-800">What's the difference?</p>
            <p className="font-bold text-xl text-center mt-2">Mental real estate.</p>
          </div>
          
          <p className="mb-4">One business owns space in their customers' minds.</p>
          <p className="mb-4">The other is just... there.</p>
          
          <p className="mb-4">Look, in a country like Nigeria where everyone seems to be selling the same thing...</p>
          <p className="mb-4">Rice and stew, POS, fashion, graphics design, web development...</p>
          <p className="font-bold mb-4">How do you stand out?</p>
          
          <p className="font-bold text-xl mb-4">How do you become THE choice instead of just A choice?</p>
          
          <p className="mb-4">Chapter 2 reveals the 4 positioning strategies that make customers see you as the obvious and only option:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="font-bold">The "First In Market" strategy (and what to do if you're not first)</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="font-bold">How to add a feature that changes everything</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="font-bold">The niche domination secret that eliminates competition</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-300">
              <p className="font-bold">The business model disruption that makes big competitors look stupid</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">Plus, you'll discover:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The David vs Goliath strategy for beating established competitors</li>
              <li>How to own mental real estate even in crowded markets</li>
              <li>Why being different is more profitable than being better</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-blue-300 mt-6">
            <p className="font-bold">Real talk:</p>
            <p className="mt-2">Most businesses compete on price because they don't know how to compete on positioning.</p>
            <p className="font-bold text-red-600 mt-2">That's a race to the bottom.</p>
            <p className="mt-2">This chapter shows you how to win the race to the top.</p>
          </div>
          
          <p className="mt-4 font-bold">When customers think of your category, they think of you FIRST.</p>
          <p className="mt-2">That's mental real estate.</p>
          <p className="font-bold mt-2">And it's worth millions.</p>
        </div>

        {/* Chapter 3 */}
        <div className="my-12 bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">✔️ CHAPTER THREE: "The Advertising Secret That Makes People Buy Instantly" — How To Create Ads That Sell Even When You Have No Money For Expensive Marketing (Plus The 8 Laws That Separate Amateur Advertisers From Money-Making Professionals)</h2>
          
          <p className="font-bold mb-4">Quick question:</p>
          <p className="mb-4">Why do most Nigerian businesses waste money on advertising?</p>
          <p className="mb-4">They print beautiful flyers...</p>
          <p className="mb-4">Pay for radio spots...</p>
          <p className="mb-4">Even buy expensive newspaper ads...</p>
          <p className="mb-4">But nothing happens.</p>
          
          <div className="bg-red-100 p-4 rounded-lg border border-red-300 my-6">
            <p className="font-bold text-red-700">No customers.</p>
            <p className="font-bold text-red-700">No sales.</p>
            <p className="font-bold text-red-700">No results.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-green-300">
            <p className="font-bold">Here's why:</p>
            <p className="font-bold text-green-700 mt-2">They're doing "brand advertising" when they should be doing "direct response advertising."</p>
          </div>
          
          <p className="font-bold mt-4">What's the difference?</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
              <p className="font-bold">Brand advertising says:</p>
              <p className="italic mt-2">"Buy Coca-Cola because it's refreshing."</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-300">
              <p className="font-bold">Direct response advertising says:</p>
              <p className="italic mt-2">"Buy this weight loss tea and lose 5kg in 14 days or get your money back. Call 08012345678 now. Only 50 packs left."</p>
            </div>
          </div>
          
          <p className="font-bold text-center text-xl">Which one makes you want to act immediately?</p>
          <p className="font-bold text-center text-green-700 mt-2">Exactly.</p>
          
          <p className="mt-4">Chapter 3 breaks down The 8 Unbreakable Laws of Direct Response Marketing:</p>
          
          <div className="bg-white p-6 rounded-lg border border-green-300 my-6">
            <ol className="list-decimal pl-5 space-y-3">
              <li><span className="font-bold">Choose who you're fighting for</span> (and who you're ignoring)</li>
              <li><span className="font-bold">Grab attention</span> with headlines that stop people in their tracks</li>
              <li><span className="font-bold">Make an irresistible offer</span> (not just a product announcement)</li>
              <li><span className="font-bold">Tell them exactly what to do</span> (confused customers don't buy)</li>
              <li><span className="font-bold">Create urgency</span> that makes them act NOW</li>
              <li><span className="font-bold">Build trust</span> without begging for it</li>
              <li><span className="font-bold">Remove risk</span> from the buyer's mind</li>
              <li><span className="font-bold">Track and test</span> everything (or stay broke)</li>
            </ol>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">But that's not all...</p>
            <p className="mt-2">You'll also discover:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The headline formula that never fails (even if you're terrible at writing)</li>
              <li>How to create powerful offers that sell even expensive products</li>
              <li>The WhatsApp marketing goldmine strategy</li>
              <li>Why most flyers are complete waste of money (and how to fix them)</li>
              <li>The neighborhood domination strategy for small budgets</li>
            </ul>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="font-bold">Listen:</p>
            <p className="mt-2">Every ₦1,000 you spend on advertising using these laws can easily bring back ₦5,000-₦10,000.</p>
            <p className="font-bold mt-2">Every single time.</p>
            <p className="mt-2">But spend that same ₦1,000 using amateur methods?</p>
            <p className="font-bold text-red-600 mt-2">You just donated money to the radio station.</p>
          </div>
          
          <p className="mt-4 font-bold">This chapter alone could be sold for ₦50,000 and be worth every kobo.</p>
        </div>

        {/* Chapter 4 */}
        <div className="my-12 bg-purple-50 p-6 rounded-lg border border-purple-200">
          <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4">✔️ CHAPTER FOUR: "The Unpaid Sales Army: How To Get Others To Promote Your Business FOR FREE" — The Word-Of-Mouth Multiplication System That Turns Every Customer Into Your Personal Marketing Department</h2>
          
          <p className="font-bold mb-4">Imagine this scenario:</p>
          <p className="mb-4">You serve one customer today...</p>
          <p className="mb-4">And by next week, that customer has brought you 5 more customers...</p>
          <p className="mb-4">Without you asking...</p>
          <p className="mb-4">Without you paying for ads...</p>
          <p className="mb-4">Without you doing anything extra.</p>
          
          <p className="font-bold italic mb-4">Sounds too good to be true?</p>
          <p className="font-bold mb-4">It's happening all around you.</p>
          
          <div className="bg-white p-4 rounded-lg border border-purple-300 my-6">
            <p className="font-bold">Think about it:</p>
            <p className="mt-2">When you need a good mechanic, who do you ask?</p>
            <p className="mt-2">When you want to buy a phone, whose opinion matters most?</p>
            <p className="mt-2">When you need a reliable tailor, where do you turn?</p>
            
            <div className="bg-yellow-100 p-3 rounded-lg mt-4">
              <p className="font-bold">Your friends.</p>
              <p className="font-bold">Your family.</p>
              <p className="font-bold">People you trust.</p>
            </div>
          </div>
          
          <p className="font-bold text-xl">Word-of-mouth is the most powerful form of advertising in Nigeria.</p>
          <p className="font-bold text-green-700 mt-2">And it's completely FREE.</p>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-300 mt-6">
            <p className="font-bold">But here's the problem:</p>
            <p className="mt-2">Most businesses hope word-of-mouth happens.</p>
            <p className="font-bold mt-2">Smart businesses make it happen.</p>
          </div>
          
          <p className="mt-4">Chapter 4 shows you the 6 strategies that turn every customer into your unpaid sales army:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p>How to stay in customers' minds long after they buy</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p>The loyalty rewards system that makes customers feel special</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p>How to use influencers without paying influencer prices</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p>The outstanding service delivery framework</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p>How to reward referrals without going broke</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-purple-300">
              <p>Building an online presence that sells while you sleep</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">Plus, you'll discover:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Why Nigerian customers trust recommendations more than ads</li>
              <li>The compound effect of word-of-mouth marketing</li>
              <li>How one happy customer can be worth 50 advertising campaigns</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-purple-300 mt-6">
            <p className="font-bold">Real example:</p>
            <p className="mt-2">One of my students used these strategies in his phone accessories business.</p>
            <p className="mt-2">In 3 months, 80% of his customers came from referrals.</p>
            
            <div className="bg-green-100 p-3 rounded-lg mt-4">
              <p className="font-bold">His advertising budget?</p>
              <p className="font-bold text-red-600">Zero.</p>
              <p className="font-bold mt-2">His profit margins?</p>
              <p className="font-bold text-green-700">Higher than competitors who spend thousands on ads monthly.</p>
            </div>
          </div>
          
          <p className="mt-4 font-bold text-xl">That's the power of unpaid sales armies.</p>
        </div>

        {/* Chapter 5 */}
        <div className="my-12 bg-orange-50 p-6 rounded-lg border border-orange-200">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">✔️ CHAPTER FIVE: "How to Set a Price That Feels Fair — And Sells Like Crazy" — The Nigerian Psychology of Pricing That Makes Customers Happy To Pay Higher Prices (Even During Economic Hardship)</h2>
          
          <p className="font-bold mb-4">Scenario:</p>
          <p className="mb-4">Two businesses selling the exact same product.</p>
          <p className="mb-4">Business A: ₦5,000</p>
          <p className="mb-4">Business B: ₦8,000</p>
          
          <p className="font-bold text-xl mb-4">Which one do you think sells more?</p>
          
          <p className="mb-4">If you said Business A...</p>
          <p className="font-bold text-red-600 mb-4">You're thinking like most broke business owners.</p>
          
          <div className="bg-green-100 p-4 rounded-lg border border-green-300">
            <p className="font-bold text-green-800">The correct answer is Business B.</p>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-300 my-6">
            <p className="font-bold">Why?</p>
            <p className="font-bold text-xl mt-2">Because price is not about cost.</p>
            <p className="font-bold text-xl mt-2">Price is about value perception.</p>
          </div>
          
          <p className="mb-4">And in Nigeria, there's a psychology to pricing that most people completely miss.</p>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-300">
            <p className="font-bold">They think:</p>
            <p className="font-bold italic">"Times are hard, people have no money, I must reduce my prices."</p>
            <p className="font-bold text-red-600 mt-2">Wrong approach.</p>
          </div>
          
          <p className="mt-4 font-bold">People ALWAYS have money for things they value.</p>
          <p className="font-bold">Always.</p>
          <p className="mt-2">The question is: Do they value what you're selling?</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
            <p className="font-bold">Chapter 5 reveals:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Why the "cheapest price" strategy kills businesses</li>
              <li>The psychology of Nigerian buying behavior (this will shock you)</li>
              <li>How market vendors use pricing psychology to sell more</li>
              <li>The affordable vs cheap revolution</li>
              <li>4 smart strategies to make any price feel fair</li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded-lg border border-orange-300 mt-6">
            <p className="font-bold">You'll also discover:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>The art of value stacking (turn ₦10,000 into ₦50,000 perceived value)</li>
              <li>How to spread costs without reducing prices</li>
              <li>The confidence factor that makes customers trust higher prices</li>
              <li>Recession-proof pricing strategies that work even in bad economy</li>
            </ul>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
            <p className="font-bold">Listen:</p>
            <p className="mt-2">Most price resistance comes from the SELLER, not the buyer.</p>
            <p className="mt-2">When you believe your price is fair...</p>
            <p className="mt-2">When you can explain the value clearly...</p>
            <p className="mt-2">When you solve a real problem...</p>
            <div className="bg-green-100 p-3 rounded-lg mt-4">
              <p className="font-bold text-green-700">Customers will pay.</p>
              <p className="font-bold text-green-700">Even in Nigeria.</p>
              <p className="font-bold text-green-700">Even during tough times.</p>
            </div>
          </div>
          
          <p className="mt-4 font-bold">This chapter shows you exactly how to set prices that make customers feel like they're getting a bargain...</p>
          <p className="font-bold text-green-700 mt-2">...even when you're making great profit.</p>
        </div>

        {/* Chapter 6 */}
        <div className="my-12 bg-indigo-50 p-6 rounded-lg border border-indigo-200">
          <h2 className="text-2xl md:text-3xl font-bold text-indigo-800 mb-4">✔️ CHAPTER SIX: "The Next Step Is Simple: MOVE." — Your 48-Hour Action Plan That Transforms Everything You've Learned Into Money In Your Bank Account (Because Information Without Implementation Is Just Entertainment)</h2>
          
          <p className="font-bold text-xl mb-4">You know what separates successful students from "wannabe" entrepreneurs?</p>
          <p className="font-bold text-2xl text-center text-red-600">Action.</p>
          
          <p className="mt-4">Not talent.</p>
          <p className="mt-2">Not capital.</p>
          <p className="mt-2">Not connections.</p>
          <p className="font-bold text-xl mt-2">Action.</p>
          
          <p className="mt-4">You can read every business book...</p>
          <p className="mt-2">Watch every YouTube video...</p>
          <p className="mt-2">Attend every seminar...</p>
          <p className="mt-2">But if you don't ACT...</p>
          
          <div className="bg-red-100 p-4 rounded-lg border border-red-300 my-6">
            <p className="font-bold text-red-700 text-center text-xl">You're just an educated spectator.</p>
          </div>
          
          <p className="font-bold">Chapter 6 is your action blueprint:</p>
          
          <div className="bg-white p-6 rounded-lg border border-indigo-300 my-6">
            <p className="font-bold text-indigo-800 text-xl mb-4">The 7 Non-Negotiable Rules:</p>
            <ol className="list-decimal pl-5 space-y-4">
              <li><span className="font-bold">Start Now. Start Small.</span> (Why waiting for "perfect conditions" keeps you broke)</li>
              <li><span className="font-bold">Speed Beats Perfection</span> (The 48-hour rule that changes everything)</li>
              <li><span className="font-bold">Reinvest Before You Flex</span> (The multiplication game that builds wealth)</li>
              <li><span className="font-bold">Stick With One Business For A While</span> (Why jumping around kills success)</li>
              <li><span className="font-bold">Keep The Doors Open</span> (The always-on strategy)</li>
              <li><span className="font-bold">Keep The Money You Make</span> (Making vs keeping money)</li>
              <li><span className="font-bold">Get Pushed. Or Stay Stuck.</span> (The accountability system)</li>
            </ol>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">Plus, you'll get:</p>
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>Your "Start Small" checklist (begin with ₦5,000 or less)</li>
              <li>The perfection trap (and how to escape it)</li>
              <li>Smart reinvestment priorities that compound your growth</li>
              <li>The 70-30 money management rule</li>
              <li>How to avoid shiny object syndrome</li>
              <li>The 18-month commitment rule</li>
            </ul>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-300 mt-6">
            <p className="font-bold">Warning:</p>
            <p className="mt-2">This chapter will make you uncomfortable.</p>
            <p className="mt-2">Because it will force you to confront the gap between what you know and what you do.</p>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg border border-green-300 mt-6">
            <p className="font-bold">But that discomfort?</p>
            <p className="font-bold text-green-700 mt-2">That's where growth lives.</p>
            <p className="font-bold text-green-700 mt-2">That's where money lives.</p>
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="my-12 bg-gradient-to-r from-purple-800 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">But wait... there's more value inside:</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="font-bold">The Early Bird Revolution - Why starting as a student gives you unfair advantages</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="font-bold">The Graduate Reality Check - What universities won't tell you about post-graduation life</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="font-bold">The Student Advantage - How to use your current situation as a competitive weapon</p>
            </div>
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <p className="font-bold">The Compound Effect of Starting Early - Why every month you delay costs you thousands</p>
            </div>
          </div>
          
          <div className="bg-yellow-400 text-purple-900 p-4 rounded-lg mt-8 text-center">
            <p className="font-bold">Plus dozens of real Nigerian examples, case studies, and step-by-step frameworks</p>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="my-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Now, here's what this is really worth:</h2>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <p>If you hired a business consultant to teach you just the frameworks in Chapter 1...</p>
            <p className="font-bold">You'd easily pay ₦150,000.</p>
            
            <p>The advertising strategies in Chapter 3?</p>
            <p className="font-bold">Marketing agencies charge ₦200,000 for this level of insight.</p>
            
            <p>The positioning secrets in Chapter 2?</p>
            <p className="font-bold text-red-600">Priceless.</p>
            <p className="italic">Most businesses never figure this out (that's why they struggle for years).</p>
            
            <p>The word-of-mouth system in Chapter 4?</p>
            <p className="font-bold">Worth at least ₦100,000 in saved advertising costs.</p>
            
            <p>The pricing psychology in Chapter 5?</p>
            <p className="font-bold">This alone could double your profit margins overnight.</p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300 mt-6">
              <p className="font-bold text-center text-xl">Conservative total value: ₦650,000</p>
            </div>
            
            <p className="text-center">But you're not paying ₦650,000.</p>
            <p className="text-center">You're not even paying ₦100,000.</p>
            
            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
              <p className="font-bold">In fact, let me be completely honest with you:</p>
              <p className="mt-2">I was planning to sell this for ₦25,000.</p>
              <p className="mt-2">And at that price, it would still be the bargain of the century.</p>
            </div>
            
            <div className="bg-red-100 p-4 rounded-lg border border-red-300 mt-6">
              <p className="font-bold">But here's what happened...</p>
              <p className="mt-2">I remembered what it felt like...</p>
              <p className="mt-2">Calling home to ask for money...</p>
              <p className="mt-2">Hearing that pause in my parent's voice...</p>
              <p className="mt-2">That guilt...</p>
              <p className="mt-2">That frustration...</p>
              <p className="mt-2">That feeling of being a burden.</p>
              <p className="font-bold mt-2">I remembered.</p>
            </div>
            
            <p className="mt-4">And I realized...</p>
            <p className="mt-2">If price becomes a barrier between you and financial freedom...</p>
            <p className="font-bold mt-2">Then I've failed.</p>
            
            <div className="bg-green-100 p-6 rounded-lg border border-green-300 mt-6 text-center">
              <p className="font-bold">So here's what I'm doing:</p>
              <p className="font-bold text-xl text-green-800 mt-2">For the next 48 hours ONLY...</p>
              <p className="mt-2">You can get the complete Alert Manual system...</p>
              <p className="mt-2">All 6 game-changing chapters...</p>
              <p className="mt-2">All the bonuses...</p>
              <p className="mt-2">All the frameworks that could easily make you ₦500,000 in the next 6 months...</p>
              <p className="font-bold text-2xl text-red-600 mt-4">For just ₦4,950.</p>
            </div>
            
            <p className="text-center mt-4">That's less than what you probably spend on data in 2 months.</p>
            <p className="text-center">Less than a decent pair of shoes.</p>
            <p className="text-center">Less than one night out with friends.</p>
            <p className="font-bold text-center mt-2">But potentially worth MILLIONS in your lifetime earning capacity.</p>
          </div>
        </div>

        {/* Third CTA Button */}
        <div className="text-center my-12">
          <Link href="https://selar.com/graduate-rich" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
            GET THE ALERT MANUAL NOW - ₦4,950 ONLY
          </Link>
          <p className="text-sm text-gray-600 mt-2">Secure Payment • Instant Access • 30-Day Money-Back Guarantee</p>
        </div>

        {/* Commitment Section */}
        <div className="my-12 bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">But here's the catch: I want to make sure that the people who get these life-changing resources are SERIOUS about using them.</h2>
          
          <p className="mb-4">Listen...</p>
          <p className="mb-4">I don't just want anyone to grab them, forget about them, and move on.</p>
          <p className="mb-4">Seriously, that won't be fair at all.</p>
          <p className="mb-4">These are the kinds of secrets that work when you're truly committed.</p>
          
          <div className="bg-white p-4 rounded-lg border border-blue-300 my-6">
            <p className="font-bold text-center">The ₦4,950 commitment fee ensures you're serious.</p>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">Here's the psychology:</p>
            <p className="mt-2">When you invest in something...</p>
            <p className="mt-2">Even a small amount...</p>
            <p className="font-bold mt-2">You value it more.</p>
            <p className="font-bold mt-2">You actually USE it.</p>
          </div>
          
          <p className="mt-4 font-bold">Think about it:</p>
          <p className="mt-2">All those free PDFs you've downloaded...</p>
          <p className="mt-2">How many did you actually read?</p>
          <p className="mt-2">How many did you implement?</p>
          <p className="font-bold text-red-600 mt-2">Exactly.</p>
          
          <p className="mt-4">But when you pay for something?</p>
          <p className="mt-2">When you have skin in the game?</p>
          <p className="font-bold text-green-700 mt-2">You take action.</p>
          <p className="font-bold mt-2">And action is what separates dreamers from achievers.</p>
          
          <div className="bg-white p-4 rounded-lg border border-blue-300 mt-6">
            <p className="font-bold text-center">So ask yourself:</p>
            <p className="mt-2">Am I ready to invest ₦4,950 in my financial future?</p>
            <p className="mt-2">Am I ready to stop making excuses and start making money?</p>
            <p className="mt-2">Am I ready to transform from a struggling student into a profitable business owner?</p>
          </div>
          
          <div className="bg-green-100 p-4 rounded-lg border border-green-300 mt-6">
            <p className="font-bold">If the answer is YES...</p>
            <p className="font-bold text-green-700 mt-2">Then this is your moment.</p>
          </div>
          
          <div className="bg-red-100 p-4 rounded-lg border border-red-300 mt-6">
            <p className="font-bold">If the answer is NO...</p>
            <p className="font-bold text-red-700 mt-2">Then close this page and continue as you were.</p>
            <p className="font-bold mt-2">But don't come back in 2 years wondering "what if..."</p>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="my-12 bg-red-100 p-6 rounded-lg border border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">IMPORTANT: This offer disappears in 48 hours.</h2>
          
          <p className="mb-4">After that, if I decide to release this again...</p>
          <p className="font-bold text-red-600 mb-4">The price goes back to ₦25,000.</p>
          
          <div className="bg-white p-4 rounded-lg border border-red-300 my-6">
            <p className="font-bold">Why 48 hours?</p>
            <p className="mt-2">Because urgency creates clarity.</p>
          </div>
          
          <p className="font-bold mb-2">And right now, you have a choice:</p>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <div className="bg-red-50 p-6 rounded-lg border border-red-300">
              <h3 className="font-bold text-red-800 text-xl mb-4">Option 1:</h3>
              <p>Take action, invest ₦4,950, and potentially change your life forever.</p>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg border border-green-300">
              <h3 className="font-bold text-green-800 text-xl mb-4">Option 2:</h3>
              <p>Wait, hesitate, and watch this opportunity disappear.</p>
            </div>
          </div>
          
          <p className="font-bold text-center">Your choice.</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300 mt-6">
            <p className="font-bold">But remember:</p>
            <p className="mt-2">Every month you delay learning these strategies...</p>
            <p className="mt-2">Is another month of calling home for money...</p>
            <p className="mt-2">Another month of watching opportunities pass you by...</p>
            <p className="mt-2">Another month closer to graduation without any financial preparation...</p>
            <p className="font-bold text-red-600 mt-2">Time is not neutral.</p>
            <p className="font-bold mt-2">It's either working for you or against you.</p>
            <p className="font-bold text-green-700 mt-2">Make it work FOR you.</p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="my-12 bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Here's exactly what happens when you secure your copy right now:</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-green-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Instant Access:</h3>
              <p>You'll receive the complete Alert Manual immediately after payment</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-green-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">No Waiting:</h3>
              <p>Download and start reading in the next 5 minutes</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-green-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Mobile Friendly:</h3>
              <p>Read on your phone, tablet, or computer</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-green-300">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Lifetime Access:</h3>
              <p>Keep it forever, refer back anytime</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-green-300 md:col-span-2">
              <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">5</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Free Updates:</h3>
              <p>Get improved versions at no extra cost</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 mt-8">
            <p className="font-bold">Plus, my personal guarantee:</p>
            <p className="mt-2">If you read the entire Alert Manual...</p>
            <p className="mt-2">Apply the strategies for 30 days...</p>
            <p className="mt-2">And don't see clear opportunities to make money...</p>
            <p className="font-bold text-green-700 mt-2">I'll personally refund every kobo.</p>
            <p className="mt-2">No questions asked.</p>
            <p className="mt-2">No hard feelings.</p>
            <p className="font-bold mt-2">You literally have NOTHING to lose and EVERYTHING to gain.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="my-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Still hesitating? Let me address your concerns:</h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <h3 className="font-bold text-red-600">"But I don't have any business experience..."</h3>
              <p className="mt-2">Perfect. This manual is specifically designed for beginners. We start from zero and build up.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <h3 className="font-bold text-red-600">"But I don't have capital to start a business..."</h3>
              <p className="mt-2">Chapter 6 shows you how to start with ₦5,000 or less. Some strategies require ZERO capital.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <h3 className="font-bold text-red-600">"But I need to focus on my studies..."</h3>
              <p className="mt-2">Chapter 1 explains why waiting until graduation is financial suicide. Plus, these strategies take just 2-3 hours per week.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <h3 className="font-bold text-red-600">"But what if it doesn't work for me?"</h3>
              <p className="mt-2">That's why there's a 30-day money-back guarantee. All the risk is on me.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300">
              <h3 className="font-bold text-red-600">"But ₦4,950 is all I have for food this week..."</h3>
              <p className="mt-2">I understand. But ask yourself: Would you rather use ₦4,950 to eat for one week, or to learn skills that could feed you for life?</p>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="my-12 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">The moment of truth:</h2>
          
          <p className="mb-4">You have two paths in front of you.</p>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Path 1:</h3>
              <p>Close this page. Continue as you were. Keep calling home for money. Keep struggling. Keep hoping things will magically change after graduation.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Path 2:</h3>
              <p>Invest ₦4,950 in yourself. Learn the Alert Manual system. Start seeing opportunities everywhere. Begin making money as a student. Graduate financially prepared.</p>
            </div>
          </div>
          
          <p className="font-bold text-xl mb-4">Which path will you choose?</p>
          
          <div className="bg-yellow-400 text-green-900 p-4 rounded-lg max-w-2xl mx-auto mb-6">
            <p className="font-bold">The decision is yours.</p>
            <p className="font-bold mt-2">But the opportunity expires in 48 hours.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-green-800 font-bold text-xl mb-4">Ready to transform your financial future?</p>
            <p className="text-gray-600 mb-4">Click the button below to secure your copy of The Alert Manual and join the ranks of financially independent students who never have to beg for money again.</p>
            
            <Link href="https://selar.com/graduate-rich" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-300">
              GET THE ALERT MANUAL NOW - ₦4,950 ONLY
            </Link>
            <p className="text-sm text-gray-600 mt-2">Secure Payment • Instant Access • 30-Day Money-Back Guarantee</p>
          </div>
        </div>

        {/* Final PS Section */}
        <div className="my-12 bg-gray-100 p-6 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <p className="font-bold italic text-center mb-4">P.S. - In 48 hours, when this offer expires, don't be the person who says "I should have taken action when I had the chance." Be the person who says "Best ₦4,950 I ever spent."</p>
            
            <p className="font-bold italic text-center">P.P.S. - Your parents have sacrificed so much to put you through school. The least you can do is invest ₦4,950 to ensure their sacrifice wasn't in vain. Make them proud. Make yourself proud. Take action now.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 text-sm">
        <p>© {new Date().getFullYear()} The Alert Manual. All Rights Reserved.</p>
        <p className="mt-2">Privacy Policy | Terms of Service | Disclaimer</p>
      </footer>
    </div>
  );
}