/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";


const Offer = () => {
return (
    <section className="section-py bg-gradient-to-b from-gray-50 to-amber-50">
    <div className="container max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border-2 border-amber-200 animate-fade-in">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            So here's what I built:
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent mb-4">
            "Don't Start a Business... Until You Read This 37-Page Rant."
          </h1>
          <p className="text-xl max-w-2xl mx-auto">
            A brutally honest, no-fluff digital guide that shows you how to start a real business in Nigeria —
            Even if all you've got is your phone, ₦3k, and a will to never eat plain garri again.
          </p>
          <div className="mt-8 flex justify-center">
  <Image 
    src="/mockups/ebook-cover.png" 
    alt="Don't Start a Business eBook Cover" 
    width={400} 
    height={500} 
    className="rounded-xl shadow-lg border border-amber-200"
  />
</div>

        </div>
  
        <div className="bg-red-50 rounded-xl p-8 mb-16 border border-red-200">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
            <span className="font-scribble text-xl bg-white px-4 py-2 border border-red-300">Not a "dream big" motivation book</span>
            <span className="font-scribble text-xl bg-white px-4 py-2 border border-red-300">Not "5 passive income ideas"</span>
            <span className="font-scribble text-xl bg-red-200 px-4 py-2 font-bold">Definitely not vague AI-written nonsense</span>
          </div>
          <p className="text-center text-xl font-bold">
            This is field-tested, rage-written, proof-backed real talk.
          </p>
        </div>
  
        <div className="mb-16">
        <h3 className="text-3xl font-bold mb-10 text-center">
  💣 Hard Truths Inside The Book: What Your “Get Rich Quick” Uncle Never Told You
  </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="mb-16">
 

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

  <div className="mb-16">
  

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Highlight 1 */}
    <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">💸</span>
        <h4 className="text-xl font-bold">“You’re Broke Because Your Business Is Broke”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          Vision is nice — but your landlord wants rent, not vibes. Focus on profit first.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
          Stop doing “CEO” things when you’ve not made ₦1. Start where the money is.
        </li>
      </ul>
    </div>

    {/* Highlight 2 */}
    <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🛑</span>
        <h4 className="text-xl font-bold">“Do NOT Build a Product Yet”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
          You’re not broke because of laziness — you’re broke because you’re guessing.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
          Don’t create what YOU like. Ask: “What do people already want to buy?”
        </li>
      </ul>
    </div>

    {/* Highlight 3 */}
    <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🧠</span>
        <h4 className="text-xl font-bold">“The 4 Business Triggers That Actually Make People Pay”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
          If your business doesn’t solve pain, save time, boost ego, or make money — you’re finished.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
          From ₦500 suya to ₦5M coaching — every sale taps one of these 4. Know them or die broke.
        </li>
      </ul>
    </div>

    {/* Highlight 4 */}
    <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🍟</span>
        <h4 className="text-xl font-bold">“Nobody Wants What They Need”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
          You’re selling boiled beans — but they want jollof rice. Dress it up or stay invisible.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
          How to sell boring stuff like it’s an iPhone drop
        </li>
      </ul>
    </div>

    {/* Highlight 5 */}
    <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🦈</span>
        <h4 className="text-xl font-bold">“Red Oceans = Shark Soup”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
          If everybody’s selling it, prices drop and blood spills. You need your *own* lane.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
          Why cement in Nigeria is more profitable than crypto — and what that means for your hustle
        </li>
      </ul>
    </div>

    {/* Highlight 6 */}
    <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">🗣️</span>
        <h4 className="text-xl font-bold">“How to Advertise When You’re Broke, Unknown & Allergic to BS”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
          Don’t have money for Facebook ads? Good. These 9 rules will make people chase you anyway.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
          Why writing like a human being (not a marketer) is your superpower
        </li>
      </ul>
    </div>

    {/* Highlight 7 */}
    <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-500">
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">💀</span>
        <h4 className="text-xl font-bold">“You Don’t Need Another Course — You Need a Spine”</h4>
      </div>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></span>
          You’ve watched enough YouTube. Now it’s time to *do the thing*.
        </li>
        <li className="flex items-start">
          <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></span>
          How to stop researching, doubting, and stalling — and just start getting paid
        </li>
      </ul>
    </div>

  </div>
</div>


  </div>
</div>

          </div>
        </div>
  
        <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl p-8 mb-16 text-white">
  <h3 className="text-3xl font-bold mb-6 text-center">
    🎁 PLUS — You Get 3 Raw Bonuses (No Extra Cost):
  </h3>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

    {/* Bonus 1 */}
    <div className="bg-amber-800/50 p-6 rounded-xl">
      <h4 className="text-xl font-bold mb-3">🔥 Bonus #1: Impulse Offer Alchemy</h4>
      <div className="mb-4">
  <Image 
    src="/mockups/bonus1.png" 
    alt="Bonus 1: Impulse Offer Alchemy" 
    width={300} 
    height={200} 
    className="rounded-lg shadow-md mx-auto"
  />
</div>

      <p>
        Turn your “meh” business idea into an offer that makes broke people say: 
        “Shut up and take my money now.” No fancy emails, no webinar—just instant want.
      </p>
      <ul className="list-disc list-inside mt-3 space-y-1 text-amber-50">
        <li>Why some offers hit like jollof and others flop like plain rice</li>
        <li>The 5 secret triggers that make buyers lose sense</li>
        <li>How to build offers for the Nigerian hustler’s pocket and mindset</li>
        <li>Bonuses that actually add value, not just fluff</li>
        <li>Deadlines that make sense — no fake timer wahala</li>
      </ul>
    </div>
    
    {/* Bonus 2 */}
    <div className="bg-amber-800/50 p-6 rounded-xl">
      <h4 className="text-xl font-bold mb-3">📄 Bonus #2: Landing Pages That Sell (Not Sedate)</h4>
      <div className="mb-4">
  <Image 
    src="/mockups/bonus2.png" 
    alt="Bonus 2: Landing Pages That Sell" 
    width={300} 
    height={200} 
    className="rounded-lg shadow-md mx-auto"
  />
</div>

      <p>
        The exact, idiot-proof page layout that turns casual scrollers into cash-happy buyers — 
        real examples from Naija hustlers, no online bros’ fake flex.
      </p>
      <ul className="list-disc list-inside mt-3 space-y-1 text-amber-50">
        <li>Why WhatsApp fliers and Linktrees are NOT landing pages</li>
        <li>The 3 biggest mistakes new sellers make (and how to fix fast)</li>
        <li>Simple page structure: Headline → Agitation → Proof → Offer → Action</li>
        <li>Design tips even your neighbour’s kid can copy</li>
        <li>How to sell straight from WhatsApp or Google Docs if broke</li>
      </ul>
    </div>
    
    {/* Bonus 3 */}
    <div className="bg-amber-800/50 p-6 rounded-xl">
      <h4 className="text-xl font-bold mb-3">🧱 Bonus #3: The Broke, Hungry, Angry Blueprint</h4>
      <div className="mb-4">
  <Image 
    src="/mockups/bonus3.png" 
    alt="Bonus 3: The Broke, Hungry, Angry Blueprint" 
    width={300} 
    height={200} 
    className="rounded-lg shadow-md mx-auto"
  />
</div>

      <p>
        How to start making sales today with zero cash, zero followers, and nothing but raw hunger.
        Flip ₦3k into ₦30k, then scale fast — no laptop or luck needed.
      </p>
      <ul className="list-disc list-inside mt-3 space-y-1 text-amber-50">
        <li>Why being angry beats “motivation” any day</li>
        <li>Pick hustles you can start right now — no excuses</li>
        <li>Fastest ways to get your first customer without ads</li>
        <li>Scripts to copy and say word-for-word — no wahala</li>
        <li>How to reinvest small money to build real momentum</li>
      </ul>
    </div>

  </div>
</div>

  
        <div className="text-center">
          <div className="inline-block font-scribble text-amber-600 px-8 py-4 mb-6 text-3xl font-bold animate-chill-pulse">
            All for ₦4,500.
          </div>
          
          <div className="space-y-4 max-w-2xl mx-auto mb-10">
            <p className="text-xl font-bold">That's it.</p>
            <p>No upsells.</p>
            <p>No hidden charges.</p>
            <p className="text-xl font-bold text-green-600">
              Just raw strategy that could literally change your life before the month ends.
            </p>
          </div>
          
          <div className="bg-gray-100 p-6 rounded-xl mb-10">
  <p className="italic mb-3">
    I didn’t price this to buy a Benz. I priced it so you’d stop scrolling, pay attention… and actually follow through.
  </p>
  <p className="text-xl font-bold">
    Cos let’s be honest — if it were free, you’d “save it for later” and forget it existed.
  </p>
  <p className="text-2xl font-bold mt-4 text-red-600">
    But this? This might just be the slap your wallet’s been waiting for.
  </p>
</div>

<Link href="/payment2" passHref>
  <button
    className="
      mx-auto block text-xl font-extrabold
      py-4 px-10
      bg-gradient-to-r from-red-400 via-red-500 to-red-600
      text-gray-900
      rounded-full
      shadow-lg shadow-red-500/50
      hover:from-red-500 hover:via-red-600 hover:to-red-700
      focus:outline-none focus:ring-4 focus:ring-red-300
      transition-transform transform
      hover:scale-110
      animate-chill-pulse
      "
  >
    I'm Done Being Broke — Gimme the book! →
  </button>
</Link>


        </div>
      </div>
    </div>
  </section>   
)
}

export default Offer;