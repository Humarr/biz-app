/* eslint-disable react/no-unescaped-entities */
'use client';

import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 72,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white font-sans">
      {/* Countdown Banner */}
      <div className="bg-red-600 text-white text-center py-2">
        <div className="container mx-auto flex justify-center items-center">
          <span className="font-bold mr-2">⏰ OFFER EXPIRING SOON</span>
          <div className="flex space-x-2">
            <div className="bg-black px-2 py-1 rounded">
              {String(timeLeft.hours).padStart(2, '0')}H
            </div>
            <div className="bg-black px-2 py-1 rounded">
              {String(timeLeft.minutes).padStart(2, '0')}M
            </div>
            <div className="bg-black px-2 py-1 rounded">
              {String(timeLeft.seconds).padStart(2, '0')}S
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">
            In a country where <span className="text-red-600">95% of wives</span> lose their husbands to side chicks or second wives…
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-purple-800 mb-8">
            Discover The PSYCHOLOGY SECRETS that make the 5% of wives so irresistible their husbands forget other women exist
          </h2>
          <p className="text-lg text-gray-700 mb-10 italic">
            No excuses: you decide the commitment fee, we'll give you the transformation.
          </p>

          <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white p-8 rounded-2xl shadow-2xl mb-12">
            <h3 className="text-2xl font-bold mb-6">The "Make Him Obsessed" Blueprint</h3>
            <p className="text-lg mb-8">A PROVEN system where I'll show you step-by-step how to:</p>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start">
                <span className="text-2xl mr-4">🏆</span>
                <div>
                  <h4 className="font-bold text-lg">BECOME PSYCHOLOGICALLY IRREPLACEABLE TO YOUR HUSBAND</h4>
                  <p>The exact formula that turns casual love into obsessive devotion</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">💎</span>
                <div>
                  <h4 className="font-bold text-lg">HOW WOMEN LIKE YOU HAVE SAVED THEIR MARRIAGES</h4>
                  <p>Real case studies of wives who went from being ignored to being treasured</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <span className="text-2xl mr-4">👑</span>
                <div>
                  <h4 className="font-bold text-lg">HOW I DISCOVERED THE SECRETS OF THE 5% WHO WIN</h4>
                  <p>After studying 1,000+ Nigerian wives for 3 years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secrets Section */}
      <section className="py-12 bg-purple-50 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Here's What You'll Discover:</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Secret 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-purple-600 font-bold mb-4">1</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">The Significance Injection Formula</h3>
              <p className="text-gray-700">Discover the psychological trigger that makes him emotionally dependent on you, so you can stop competing with younger women and start making them look like downgrades.</p>
            </div>
            
            {/* Secret 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-purple-600 font-bold mb-4">2</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">The Respect Language That Creates Addiction</h3>
              <p className="text-gray-700">Learn the four battle-tested communication codes that program his brain to see you as THE PRIZE, so you don't waste years trying methods that actually push him away.</p>
            </div>
            
            {/* Secret 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-purple-600 font-bold mb-4">3</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">The 90-Day Queen Transformation System</h3>
              <p className="text-gray-700">See how women like Sarah (went from sharing her husband to having him send his side chick away) are using psychology instead of beauty, so you don't fall into the trap of thinking you need to out-pretty 20-year-olds.</p>
            </div>
            
            {/* Secret 4 */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-4xl text-purple-600 font-bold mb-4">4</div>
              <h3 className="text-xl font-bold text-purple-800 mb-3">My Personal Research Journey</h3>
              <p className="text-gray-700">Hear how I went from seeing 95% of wives fail to discovering what the 5% do differently, so you know this isn't theory—it's a system you can follow without repeating their mistakes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pay What You Want Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-100">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-6">Pay What You Want!</h2>
          <p className="text-lg text-gray-700 mb-10">
            Instead of charging my regular price of ₦15,000, I'm practically giving it away!<br/>
            You can literally pay what you want…
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {[500, 1000, 2000, 5000].map(amount => (
              <div key={amount} className="bg-white border-2 border-purple-400 rounded-lg p-4 w-32 cursor-pointer hover:bg-purple-50 transition">
                <div className="text-2xl font-bold text-purple-800">₦{amount.toLocaleString()}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-10 text-left">
            <p className="text-yellow-700">
              <span className="font-bold">Why Pay What You Want?</span> Because I've noticed that most people don't read or value free things. I want you to pay an amount that'll make you feel committed to actually reading and applying it!
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 px-4 bg-purple-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">For The Next 72 Hours Only… Get These Special Bonuses</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">BONUS #1: The Husband Psychology Cheat Sheet</h3>
              <p className="mb-4">Get a quick-reference guide to male emotional triggers, so you don't waste time on behaviors that actually repel men.</p>
              <div className="text-yellow-300 font-semibold">Worth ₦5,000</div>
            </div>
            
            <div className="bg-purple-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">BONUS #2: 30-Day Emergency Marriage Revival Plan</h3>
              <p className="mb-4">Access my step-by-step crisis intervention system, so you can start seeing changes even if your marriage feels hopeless right now.</p>
              <div className="text-yellow-300 font-semibold">Worth ₦10,000</div>
            </div>
            
            <div className="bg-purple-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">BONUS #3: The Queen's Daily Checklist</h3>
              <p className="mb-4">Follow this daily action plan that keeps you in the 5%, so you never slip back into casualty behaviors that create competition.</p>
              <div className="text-yellow-300 font-semibold">Worth ₦7,000</div>
            </div>
            
            {/* <div className="bg-purple-800 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">BONUS #4: Side Chick Elimination Scripts</h3>
              <p className="mb-4">Exactly what to say and do to make side chicks disappear from your marriage without looking desperate.</p>
              <div className="text-yellow-300 font-semibold">Worth ₦8,000</div>
            </div> */}
          </div>
          
          <div className="mt-12 text-center p-6 bg-purple-800 rounded-xl">
            <p className="text-xl mb-2">Total Value: <span className="line-through">₦45,000</span></p>
            <p className="text-2xl font-bold text-yellow-300">TODAY: Pay What You Want!</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4">90-Day Money-Back Guarantee</h2>
            <p className="text-lg text-gray-700 mb-6">
              If you apply these strategies for 90 days and don't see a dramatic shift in how your husband treats you, I'll refund every kobo you paid.
            </p>
            <p className="font-semibold text-green-700">No questions. No hassles. Your transformation is guaranteed.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-purple-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Here's What My Clients Have Said</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic mb-4">"I was ready to accept sharing my husband with his second wife. After applying these strategies for just 3 weeks, he told her he couldn't continue and came back to me completely. I can't believe how powerful this psychology is!"</p>
              <p className="font-semibold text-purple-800">- Aminat, Lagos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic mb-4">"My husband was already paying bride price for another woman. I thought it was over. These strategies saved my 12-year marriage. He cancelled everything and now treats me like a queen again."</p>
              <p className="font-semibold text-purple-800">- Grace, Abuja</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow">
              <p className="text-gray-700 italic mb-4">"I went from being the wife he barely talked to, to being the woman he can't stop thinking about. This book changed everything."</p>
              <p className="font-semibold text-purple-800">- Fatima, Kano</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-purple-900 mb-12">Your Questions Answered</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Why is it Pay What You Want?</h3>
              <p className="text-gray-700">Because I've noticed that most people don't read or value free things. This knowledge has the power to save your marriage forever. I want you to pay an amount that'll make you feel committed to actually reading and applying it!</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Do I need to be young or beautiful to make this work?</h3>
              <p className="text-gray-700">No. One of the biggest myths about keeping husbands is that you need to compete on looks. I'll show you psychological methods that work even if you're older than his side chicks.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">I'm not good with "psychology"—will I be able to do this?</h3>
              <p className="text-gray-700">Absolutely. Everything is broken down into simple, practical steps. No complex theories—just actions that work.</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">Will I get the book immediately?</h3>
              <p className="text-gray-700">Yes! Once payment is confirmed, you'll receive the book and all bonuses via email within 2 hours (usually within 30 minutes).</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-2">How fast can I start seeing changes in my husband?</h3>
              <p className="text-gray-700">Most wives see shifts in their husband's behavior within the first 7-14 days of applying these strategies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-700 to-purple-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready To Transform Your Marriage?</h2>
          <p className="text-xl mb-10">To Get Access, Make Payment Into The Account Below:</p>
          
          <div className="bg-white text-purple-900 p-8 rounded-2xl shadow-lg mb-10">
            <p className="font-semibold mb-2">Price = Any Amount You Choose (₦1000 minimum)</p>
            <div className="space-y-4 text-left max-w-md mx-auto">
              <div>
                <p className="font-medium">Bank Name:</p>
                <p className="bg-gray-100 p-3 rounded">Opay</p>
              </div>
              <div>
                <p className="font-medium">Account Number:</p>
                <p className="bg-gray-100 p-3 rounded">6141949210</p>
              </div>
              <div>
                <p className="font-medium">Account Name:</p>
                <p className="bg-gray-100 p-3 rounded">UMAR MOBOLAJI</p>
              </div>
            </div>
          </div>
          
          <p className="text-lg mb-6">Once you've made payment, click the button below to send your payment proof on WhatsApp</p>
          
          <a 
            href="https://wa.me/8121466644?text=I've%20made%20payment%20for%20the%20Make%20Him%20Obsessed%20Blueprint" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg transition"
          >
            I've Made Payment - WhatsApp Now
          </a>
          
          <div className="mt-12 border-t border-purple-400 pt-8">
            <p className="text-lg italic mb-4">Still scrolling? You must really want to save your marriage!</p>
            <p className="text-xl font-semibold">But wouldn't it be more exciting if you were the next success story? 😉</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 text-white text-center">
        <div className="container mx-auto">
          <p className="mb-4">90-Day Money-Back Guarantee • Book delivered within 2 hours • Join 3,000+ wives who chose to WIN</p>
          <p>Copyright 2025 | Make him obsessed | All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}