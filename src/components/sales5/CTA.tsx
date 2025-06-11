/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";


const CTA = () => {
    return (
        <section className="section-py bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="container max-w-3xl mx-auto px-4">
          <div className="bg-gradient-to-br from-red-900/30 to-red-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-10 border border-red-700/50 animate-chill-pulse">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Listen.
              </h2>
              <div className="space-y-2 max-w-xl mx-auto">
                <p className="text-xl">If you've read this far, you're not lazy.</p>
                <p className="text-xl">You're not clueless.</p>
                <p className="text-xl font-bold text-amber-300">You're not unserious.</p>
                <p className="text-xl mt-4">You're just tired of trying shit that doesn't work.</p>
              </div>
            </div>
      
            <div className="bg-red-900/40 p-6 rounded-xl mb-12 border border-red-700">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="font-scribble bg-red-800 px-4 py-2">Tired of gurus selling "passive income"</span>
                <span className="font-scribble bg-red-800 px-4 py-2">Tired of passive hunger</span>
                <span className="font-scribble bg-red-800 px-4 py-2">Tired of "just start" from the privileged</span>
              </div>
              <p className="text-center text-xl font-bold">
                So now, it's decision time:
              </p>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Option A */}
              <div className="bg-gray-800 p-6 rounded-xl border-2 border-red-800">
                <h3 className="text-2xl font-bold mb-4 text-red-400 text-center">Option A:</h3>
                <p className="text-center mb-6">You close this tab.<br/>Go back to scrolling.</p>
                <div className="bg-black/30 p-4 rounded-lg mb-4">
                  <p>Wait for your "season" or "God's time"...</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="font-scribble bg-red-900 px-3 py-1">Price of indomie ↗</span>
                  <span className="font-scribble bg-red-900 px-3 py-1">Bank app stays dry</span>
                </div>
              </div>
              
              {/* Option B */}
              <div className="bg-gradient-to-b from-green-900/40 to-green-800 p-6 rounded-xl border-2 border-green-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/5 z-0"></div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-green-300 text-center">Option B:</h3>
                  <p className="text-center mb-6">You grab this <span className="font-bold">₦4,500 ebook</span> today —</p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 animate-chill-pulse"></span>
                      Within 48 hours, know exactly what business to start
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 animate-chill-pulse"></span>
                      How to get your first customer
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 animate-chill-pulse"></span>
                      Daily steps to see alerts next week
                    </li>
                  </ul>
                </div>
              </div>
            </div>
      
            <div className="text-center mb-12">
              <div className="inline-block bg-black/50 p-4 px-6 rounded-full mb-6">
                <p className="text-lg">
                  <span className="line-through opacity-50">Fancy launch</span> • 
                  <span className="line-through opacity-50"> Countdown timer</span> • 
                  <span className="line-through opacity-50"> Webinar</span> • 
                  <span className="line-through opacity-50"> Influencer ad</span>
                </p>
              </div>
              <p className="text-2xl font-bold mb-4">
                It's just you vs your excuses.
              </p>
              <p className="text-3xl font-bold mb-6 text-green-400">
                And it costs less than a pizza.
              </p>
              
              <div className="bg-red-900/40 p-6 rounded-xl max-w-xl mx-auto mb-8">
                <p className="text-xl font-bold mb-2">Let's stop pretending ₦4,500 is the problem.</p>
                <p>You've bought more expensive nonsense this month alone.</p>
                <p className="text-xl font-bold mt-4 text-amber-300">This? This could be your turning point.</p>
              </div>
            </div>
      
            <div className="bg-gradient-to-r from-amber-700/50 to-amber-900/70 p-8 rounded-2xl mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">
                💥 One more time — here's what you're getting:
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <p className="flex items-start">
                  <span className="inline-block w-5 h-5 text-green-400 mr-3">✅</span>
                  A savage 37-page manual showing how to start a real business in Nigeria — with ₦0, no laptop
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-5 h-5 text-green-400 mr-3">✅</span>
                  3 practical bonuses that make you irresistible to buyers
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-5 h-5 text-green-400 mr-3">✅</span>
                  Step-by-step plan from garri-eating to steady alerts
                </p>
                <p className="flex items-start">
                  <span className="inline-block w-5 h-5 text-green-400 mr-3">✅</span>
                  Lifetime access — revisit and restart anytime
                </p>
              </div>
            </div>
      
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-6">
                🎯 Still thinking about it?
              </h3>
              <p className="text-xl font-bold text-red-400 mb-6">
                That's the habit we're here to kill.
              </p>
              
              <div className="bg-black/40 p-6 rounded-xl max-w-xl mx-auto mb-8">
                <p className="mb-2">Buy it.</p>
                <p className="mb-2">Read it tonight.</p>
                <p className="mb-2">Pick one move.</p>
                <p className="font-bold text-green-400">Try it tomorrow.</p>
              </div>
              
              <p className="text-xl font-bold mb-10 max-w-xl mx-auto">
                If you're still broke in 2 weeks, it won't be because you didn't have the information.
              </p>
              
              <p className="text-2xl mb-6">👇 Hit the button.</p>
              <p className="text-xl font-bold mb-10">
                Let's turn survival into strategy — starting now.
              </p>
              
              {/* <a 
                href="#checkout" 
                className="btn-primary mx-auto text-xl py-4 px-8 font-bold bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 transition-all transform hover:scale-105 animate-bounce"
              >
                YES — I'm Ready to Actually Make Money → ₦4,500
              </a> */}

<Link href="/payment" passHref>
  <a className="btn-primary mx-auto text-xl py-4 px-8 font-bold bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700 transition-all transform hover:scale-105 animate-chill-pulse">
    YES — I'm Ready to Actually Make Money → ₦4,500
  </a>
</Link>

            </div>
      
            <div className="text-center border-t border-red-800/50 pt-8">
              <p className="text-2xl font-bold mb-4">
                🔥 Final word:
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <span className="font-scribble bg-black/30 px-4 py-2">No pity.</span>
                <span className="font-scribble bg-black/30 px-4 py-2">No promises.</span>
                <span className="font-scribble bg-black/30 px-4 py-2">No pressure.</span>
              </div>
              <p className="text-xl mb-4">
                Just a real shot — at a real business — for real Nigerians.
              </p>
              <p className="text-2xl font-bold">
                I took it.<br/>
                <span className="text-amber-400">Now it's your move.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default CTA;
