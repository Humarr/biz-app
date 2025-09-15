/* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans text-lg">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-400 to-yellow-600 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Naija Hustlers</div>
            <Link href="#purchase" className="bg-white hover:bg-gray-100 text-yellow-600 font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300">
              Get The Blueprint Now
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Headline Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Want to Start a Profitable Business? Do This For 90 Days And See What Happens To Your Income
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 leading-tight">
            Ex Salary Slave Reveals How Every Nigerian Born Before 1999 Can be Using This New "Naija Hustlers Blueprint" To Start A Profitable Business In Nigeria
          </h2>
          
          {/* Illustration: A cartoon showing a transformation from broke to wealthy Nigerian */}
          <div className="my-10">
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">[Illustration: Before/After transformation of a Nigerian from struggling to prosperous]</span>
            </div>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
            <p className="text-xl">
              And it has the "ultimate power" to build and scale your business - even if you're starting from zero - by adding an extra 500k - 1 million naira (or more) to your monthly income as soon as you start putting them into fast action!
            </p>
          </div>

          <p className="text-2xl font-bold text-green-600 mb-4">
            In fact, it doesn't matter if you are a Teacher, Civil Servant, Student, Fresh Graduate, Unemployed, Stay-at-home mum, or ANYONE, as long as you want to build a profitable business from scratch!
          </p>
          
          <div className="bg-yellow-100 p-6 rounded-lg mt-6">
            <p className="text-2xl font-bold text-center">
              So, give me just 10 minutes, and I GUARANTEE to work a financial "miracle" in your life…
            </p>
          </div>
        </section>

        {/* Problem Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Because… Let's be honest…
          </h3>
          
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h4 className="text-2xl font-bold text-red-700 mb-4">Nigerians are being robbed.</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>Inflation is stealing your buying power…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>Everyday, our naira is shrinking in value…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>The poor average Nigerian is cheated, robbed, and walked over…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>The government doesn't even seem to care…</span>
              </li>
            </ul>
          </div>

          <p className="text-xl mb-6">
            To make matters worse, your salary doesn't reach anywhere anymore.
            The price of everything is increasing.
          </p>

          <p className="text-xl mb-6">
            And by the time you pay transport, food, NEPA bill, and one small emergency, it's gone.
          </p>

          <p className="text-xl mb-6">
            In fact, it doesn't even reach the middle of the month anymore. And you can't help but consider taking loans from friends, family, or even loan apps.
          </p>

          <div className="bg-gray-800 text-white p-6 rounded-lg text-center mb-8">
            <p className="text-2xl font-bold italic">
              The fact is…Everything is just pushing you to the limit.
            </p>
          </div>

          {/* Illustration: A meme-style image of a person looking at empty wallet with bills piling up */}
          <div className="my-10">
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">[Meme: Person surrounded by bills with text "Salary Don Finish Again?"]</span>
            </div>
          </div>

          <p className="text-xl mb-6">
            And yet, this is the reality for millions of Nigerians who wake up everyday, grind through long hours, and still end up broke before the next salary comes…
          </p>

          <p className="text-xl mb-6">
            And sometimes, to make things worse, the salary doesn't even come early.
          </p>

          <p className="text-xl mb-6">
            You work hard. You show up early at work. You fight traffic. And at the end of the month, your boss still delays your salary…
          </p>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-bold mb-4">And even after they pay you:</h4>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>the government will first remove their share from your salary as tax…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>bank apps will remove their own "maintenance fee"...</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>your siblings in school will collect their own as "My food stuff has finished"…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>NEPA will come to take their own…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>you still haven't settled the debts you borrowed…</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-green-100 p-6 rounded-lg border-l-4 border-green-500">
            <p className="text-2xl font-bold text-gray-900">
              If this is you right now, I have good news for you
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            And contrary to what you may think…
          </h3>

          <p className="text-xl mb-6">
            The good news is not about "finding a better job", looking for promotion, or acquiring new qualifications.
          </p>

          <p className="text-xl mb-6 italic">
            I used to believe that too.
          </p>

          <p className="text-xl mb-6">
            I spent three years chasing certificates, networking events, and job interviews, thinking my breakthrough is just one opportunity away.
          </p>

          <div className="bg-red-100 p-6 rounded-lg mb-8">
            <p className="text-xl font-bold">
              Even to get a job nowadays is hard like stone, and even if you get a job, the pay won't reach anywhere.
            </p>
            <p className="text-xl mt-4 font-bold">
              Isn't that making you feel like punching the wall right now?
            </p>
          </div>

          <p className="text-xl mb-6">
            Also, the solution is not about praying harder, or 'manifesting millions' (if it works, a lot of Nigerians would be millionaires by now)...
          </p>

          <div className="bg-blue-100 p-6 rounded-lg mb-10">
            <h4 className="text-2xl font-bold text-blue-800 mb-4">TRUTH IS:</h4>
            <p className="text-xl font-bold">
              there's something those "Top Guys" and the government don't want you to discover: you can start a profitable right here in Nigeria and start seeing profits in 12 weeks (or less) IF you follow the right strategies
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-4">Wait…what?</p>
            <p className="text-xl mb-6">
              Look around you, and you'll see young people— some not even up to 30 years old— making millions every month without doing fraud, crime, or any illegal stuff.
            </p>
            <p className="text-xl mb-6">
              In fact, right now, as you're reading this, thousands of Nigerians just like you are quietly building businesses that generate more money in a month than you make in six.
            </p>
            <p className="text-2xl font-bold mb-4">Sounds hard to believe, right?</p>
            <p className="text-xl mb-6">
              But they're not smarter than you…
            </p>
            <p className="text-xl mb-6">
              Some don't even have any connections…
            </p>
            <p className="text-xl mb-6">
              And most of them started with less money than you probably have in your account right now.
            </p>
            <p className="text-xl font-bold">
              And with what I'm about to show you, you'll fully understand what I mean…
            </p>
          </div>
        </section>

        {/* Author Section */}
        <section className="mb-16 bg-gray-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            But first, who the heck is this guy writing to you?
          </h3>

          <div className="text-center mb-8">
            <p className="text-2xl font-bold text-blue-800">My name is Umar</p>
          </div>

          <p className="text-xl mb-6">
            and for 374 days straight… I was obsessed with helping Nigerians escape from the suffocating grip of this crazy economy.
          </p>

          <p className="text-xl mb-6">
            So, I rolled up my sleeves and got to work.
          </p>

          <div className="text-center bg-yellow-100 p-6 rounded-lg mb-8">
            <p className="text-2xl font-bold">
              And that gave birth to…
            </p>
            <h3 className="text-4xl font-bold text-red-600 mt-4">
              "THE NAIJA HUSTLERS BLUEPRINT"
            </h3>
          </div>

          <p className="text-xl mb-6 italic">
            Now, let me be totally honest with you …
          </p>

          <p className="text-xl mb-6">
            This Blueprint you're about to see didn't just drop from heaven. It cost me more than you can imagine.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h4 className="text-xl font-bold mb-4">Because, for 374 days straight, I:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>dug into more than 137 books on money, marketing, and business</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>watched over 250 interviews and success stories from Nigerians</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>sat down with hustlers in Lagos, traders in Onitsha, tech guys in Abuja</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>spent money I didn't have —borrowing, skipping meals, and working late nights</span>
              </li>
            </ul>
          </div>

          {/* Illustration: A pencil-drawn image of someone researching and studying intensely */}
          <div className="my-10">
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">[Illustration: Person surrounded by books and research materials, looking determined]</span>
            </div>
          </div>

          <p className="text-xl mb-6">
            At one point, I had to spend my "last card" on transport fare to go meet a business mentor who only gave me 30 minutes of his time…
          </p>

          <p className="text-xl mb-6">
            I lost friends who couldn't understand why I kept locking myself up every weekend instead of hanging out.
          </p>

          <p className="text-xl mb-6">
            I was insulted by family members who thought I was "just wasting my life chasing dreams"
          </p>

          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <p className="text-xl font-bold">
              And yes, I carried debts on my head. There were people I borrowed money from who were still calling me. 
            </p>
            <p className="text-xl mt-4">
              That food seller on my street I kept collecting food on credit from? She would look at me with pity and say, "Umar, just pay me small small whenever you can"
            </p>
          </div>

          <div className="text-center bg-blue-100 p-6 rounded-lg">
            <p className="text-2xl font-bold">
              This Blueprint cost me sweat, years, hunger, embarrassment, sleepless nights, and yes—money I didn't even have.
            </p>
          </div>

          <div className="text-center mt-8">
            <p className="text-2xl font-bold">Why am I telling you this?</p>
            <p className="text-xl font-bold mt-4">
              Because I want you to know… when you hold this Blueprint in your hands, you're not just holding "another ebook." You're holding the blood, sweat, and sacrifice of a man who refused to give up until he found the way out…
            </p>
          </div>
        </section>

        {/* Emotional Story Section */}
        <section className="mb-16 bg-yellow-50 p-8 rounded-lg">
          <p className="text-xl mb-6">
            I've wanted to put "The Naija Hustlers Blueprint" out since September last year. But I kept holding back… until something happened two weeks ago that hit me like a punch in the chest. 
          </p>

          <p className="text-xl mb-6 font-bold">Argh…</p>

          <p className="text-xl mb-6">
            I was scrolling through Whatsapp when I stumbled on a short video clip someone posted on their status…
          </p>

          <p className="text-xl mb-6">
            It was an elderly taxi man in his fifties, standing by the opened door of his cab , and a young man behind the camera asked him what message he had for the government about the hardship in the country.
          </p>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <p className="text-xl italic">
              The old man tried to talk, but his voice started shaking. You could see water strolling down his eyes, when he said…
              "I can no longer afford good food for my wife and two children. Not even rice or beans. It's only garri without sugar we've been drinking for the past 5 days. I'm even ashamed to go home because I can't bear to see them like that"
            </p>
          </div>

          <p className="text-xl mb-6 font-bold">I wept like a child…</p>

          <p className="text-xl mb-6">
            Because, deep inside me, I knew this is the reality of millions of Nigerians today... 
          </p>

          <div className="bg-red-100 p-6 rounded-lg mb-8">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>Men ashamed to look their wives in the face because they can't provide…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>Women hiding tears because they can't afford to see their children starve…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>Children sent home from school because they have not paid school fees…</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span>Youths roaming the streets with degrees that can't even guarantee them one decent meal a day…</span>
              </li>
            </ul>
          </div>

          <div className="text-center bg-green-100 p-6 rounded-lg">
            <p className="text-2xl font-bold">
              And that's when I realized that keeping "The Naija Hustlers Blueprint" to myself was a sin...and Nigerians deserve the light that will show them how to escape the low-income trap.
            </p>
          </div>

          <p className="text-xl mt-8">
            So, I started working on this letter you're reading right now…to let you know that there's light at the end of the tunnel...
          </p>
        </section>

        {/* What's Inside Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            And here's a taste of what you're really getting inside
          </h3>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <p className="text-xl mb-6">
              I could have called this thing a guide or a manual, but that would be an insult.
            </p>
            <p className="text-xl mb-6">
              What you're getting is not just one or two tips. It's a five-foot shelf of survival + prosperity secrets, compressed into one power-loaded package…
            </p>
            <p className="text-xl font-bold">
              It's easy to read, interesting and in under 2 hours, you're done and ready to start putting it to work
            </p>
          </div>

          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold text-blue-800">
              And here's just a peak into what you'll find inside The Naija Hustlers Blueprint 
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Why 90% of Nigerian businesses die in the first year — and the bulletproof strategy that keeps yours alive, booming and successful.",
              "The secret 'Starving Crowd' revelation that separates businesses that blow up from the ones that get buried in 'the cemetery of failed businesses'",
              "How to develop eagle eyes for business opportunities that 99 percent of people miss everyday",
              "The Business Analyzer Framework: your x-ray vision for spotting if an idea will make you money (and which one will disgrace you)",
              "The one test you must run before you put 1 naira into any idea (ignore this, and you might as well burn your savings)"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-yellow-500">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-yellow-100 p-6 rounded-lg mb-10">
            <p className="text-xl font-bold text-center">
              That's not all…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "You'll see how to push the 4 hidden psychological triggers in the minds of Nigerians that make them buy even when people are crying 'no money'…",
              "Why owning a mental real estate in your customer's head is more valuable than owning a physical land in Lekki…",
              "The customer magnet formula that makes people beg to buy from you instead of you chasing them…",
              "The unfair advantage of being the 'first' in your market and how to still win if you're late to the party",
              "The David and Goliath trick that lets small hustlers beat big businesses with fat budgets.."
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-100 p-6 rounded-lg mb-10">
            <p className="text-xl font-bold text-center">
              There's even more…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "Why copying big-brand advertising is the fastest way to waste your money (and what to do instead)",
              "The quick story that will change how you think about advertising in Nigeria",
              "The 3-second rule for grabbing attention before your customer scrolls away…",
              "How to write an ad so irresistible, people feel stupid not buying right now",
              "The advanced small budget strategy that lets you outspend your competitors without spending more",
              "The unbreakable rules of marketing (break even one, and your money blows away)…"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-purple-100 p-6 rounded-lg mb-10">
            <p className="text-xl font-bold text-center">
              We're just getting started…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "You'll also discover…",
              "How to turn one buyer into ten WITHOUT running a single ad…",
              "Why word of mouth is the most powerful currency in Nigeria (and how to mint it on demand)…",
              "The compound effect of referrals that multiplies your sales while you sleep…",
              "The trust hack that makes customers fight to recommend you everywhere they go…"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                <p>{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-red-100 p-6 rounded-lg mb-10">
            <p className="text-xl font-bold text-center">
              There's still more…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              "The deadly 'price drop death loop' that keeps hustlers broke - and how to escape it for good.",
              "Why Nigerians are not actually looking for the lowest price (and what they want instead)",
              "The hidden psychology behind every Nigerian buying decision (miss this, and they'll keep pricing you down)…",
              "How to charge more and still get people thanking you…",
              "Smart ways to use low prices as a weapon — without losing profits or your mind…",
              "The recession-proof pricing strategy that makes customers feel lucky to buy from you"
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-500">
                <p>{item}</p>
              </div>
            ))}
          </div>

          {/* Illustration: A treasure chest overflowing with Nigerian Naira and business resources */}
          <div className="my-10">
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">[Illustration: Treasure chest with Nigerian Naira and business resources overflowing]</span>
            </div>
          </div>

          <div className="text-center bg-yellow-100 p-6 rounded-lg">
            <p className="text-xl font-bold">
              Honestly, I'm just getting started, because I've thrown in two juicy, tasty and yummy bonuses, only if you will get the Hustlers Blueprint today…
            </p>
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-8 text-center">
            But let's not get distracted… I raise you my first bonus…
          </h3>

          <div className="bg-white text-gray-900 p-6 rounded-lg mb-10">
            <h4 className="text-2xl font-bold mb-4 text-center text-blue-800">
              The 6 unstoppable kinds of products in Nigeria that ALWAYS sell like crazy — even when the economy is shaking
            </h4>
            <p className="text-xl text-center">
              Just pick one of them, find a good product or service to offer, and deliver… Oh boy! Your money will grow like grass…
            </p>
            <p className="text-xl text-center font-bold mt-4">
              But you MUST deliver a very good product or service. Else, it will backfire.
            </p>
          </div>

          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold">
              And that brings us to the second bonus…
            </h4>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg">
            <h4 className="text-2xl font-bold mb-4 text-center text-purple-800">
              The Direct Response Ad Templates Toolkit
            </h4>
            <p className="text-xl font-bold mb-4 text-center">Where you'll discover…</p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>30+ done-for-you templates that lets you create ads even if you can't write a single line</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>5 "plug and play" ad structures you can copy word for word to pull in customers immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>Over 30 headline formulas that grab attention like super glue (curiosity, urgency, proof, authority — all covered)</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>The Nigerian business starter edition— tested ads for the Nigerian market, not borrowed from America…</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>The secret checklist that guarantees your ads don't just "look nice" but actually bring in money…</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2 text-xl">•</span>
                <span>A quick start guide for tracking and optimization, so you know exactly which ads to scale (and which to kill fast).</span>
              </li>
            </ul>
          </div>

          <div className="text-center mt-10">
            <p className="text-2xl font-bold">
              And that's just scratching the surface…
            </p>
            <p className="text-xl mt-4">
              If I wanted to list everything inside, we'd need 20 more pages. But here's what I can tell you with my full chest:
            </p>
            <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg mt-6">
              <p className="text-2xl font-bold italic">
                When you sit with this Blueprint, it will feel like someone finally turned on the light in a dark room you've been stumbling inside for years…
              </p>
            </div>
          </div>
        </section>

        {/* Urgency Section */}
        <section className="mb-16 bg-red-100 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-8 text-center text-red-800">
            Here's why this matters to you right now…
          </h3>

          <div className="text-center mb-10">
            <p className="text-2xl font-bold">Let me ask you…</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-xl">How many more nights do you want to lie awake, calculating how to stretch ₦5,000 to last till month end?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-xl">How many more times do you want to dodge your landlord, NEPA bill, or that loan app you owe?</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2 text-xl">•</span>
                <span className="text-xl">How much longer will you keep waiting for the government or one "connection" to rescue you?</span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-800 text-white p-6 rounded-lg text-center mb-8">
            <p className="text-2xl font-bold">
              You already know the truth: no one is coming…
            </p>
            <p className="text-xl mt-4">
              If you don't take your hustle seriously now, 2026 will come and you'll still be in the same position… or worse.
            </p>
          </div>

          <div className="text-center bg-yellow-100 p-6 rounded-lg">
            <p className="text-xl">
              That's why I created this Blueprint… not just as "information," but as a weapon. Something you can hold in your hand, follow step by step, and finally breathe financial freedom into your life.
            </p>
          </div>

          <div className="text-center mt-10">
            <p className="text-2xl font-bold">The bottom line is…</p>
            <p className="text-xl mt-4">
              I've paid the price for you…
            </p>
            <p className="text-xl mt-4">
              I've suffered the hunger, carried the shame, spent the money, burnt the midnight candles, and done the digging — so you don't have to.
            </p>
            <p className="text-xl font-bold mt-6">
              Now, all that's left is for you to grab the blueprint, follow the steps, and claim your own share of freedom.
            </p>
            <p className="text-xl font-bold mt-6 text-red-600">
              Because the truth is…everyday you delay, your situation doesn't just stay the same…it gets worse.
            </p>
            <p className="text-xl font-bold mt-6">
              And I don't want to see you end up like that old taxi man, too ashamed to go to his family because of hunger.
            </p>
          </div>

          <div className="text-center mt-10 bg-blue-100 p-6 rounded-lg">
            <p className="text-2xl font-bold text-blue-800">
              So the question is simple:
            </p>
            <p className="text-2xl font-bold mt-4">
              Will you keep struggling? Or will you finally take the blueprint and break free?
            </p>
            <p className="text-xl font-bold mt-6">
              The choice is yours
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="purchase" className="mb-16 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-8 text-center">
            And there's something else I want to tell you…
          </h3>

          <p className="text-xl mb-6">
            At first, my plan was to give all this Blueprint away for free. My heart was to help as many Nigerians as possible to escape the frustration of this economy.
          </p>

          <p className="text-xl mb-6">
            But something happened that shocked me...
          </p>

          <p className="text-xl mb-6">
            See, while I was buried in my 374-day research, I discovered something strange…
          </p>

          <p className="text-xl mb-6">
            There were people who had the exact same information as those who succeeded. They were broke, desperate, and looking for a way out just like you.
          </p>

          <div className="bg-white text-gray-900 p-6 rounded-lg mb-8">
            <p className="text-xl font-bold text-center">
              But guess what?
            </p>
            <p className="text-xl font-bold text-center text-red-600 mt-4">
              Most of them remained stuck in poverty.
            </p>
            <p className="text-xl text-center mt-4">
              Not because the information is wrong. And not because they didn't want to succeed.
            </p>
            <p className="text-2xl font-bold text-center text-green-600 mt-6">
              But because it was free
            </p>
          </div>

          <p className="text-xl mb-6">
            They left it buried in their downloads folder… forgotten like every other free PDF you've grabbed and never opened.
          </p>

          <p className="text-xl mb-6">
            And the ones that actually succeeded? The ones who broke free? They were the ones who paid a price to get that same information.
          </p>

          <div className="bg-yellow-500 text-gray-900 p-6 rounded-lg mb-10">
            <p className="text-2xl font-bold text-center">
              It hit me like thunder: If I truly care about your success, the worst thing to do is to give the powerful Blueprint for free…
            </p>
          </div>

          <div className="text-center bg-white text-gray-900 p-6 rounded-lg mb-8">
            <h4 className="text-2xl font-bold mb-4">So here's the deal…</h4>
            <p className="text-3xl font-bold text-green-600 mb-4">
              I'm making The Naija Hustlers Blueprint available for just ₦5,000. 
            </p>
            <p className="text-xl">
              That's high enough to make you value it.
            </p>
            <p className="text-xl">
              And low enough to make it easy to grab.
            </p>
          </div>

          <div className="text-center mb-10">
            <p className="text-xl">
              So, click the button below, and you'll be taken to a secure page where you'll make payment and secure your copy of The Naija Hustlers Blueprint immediately…
            </p>
          </div>

          <div className="bg-red-100 text-red-800 p-6 rounded-lg mb-10">
            <h4 className="text-xl font-bold mb-4 text-center">Also, there's a catch…</h4>
            <p className="text-xl text-center">
              The juicy bonuses I'm including in this Blueprint? They're not permanent. 
            </p>
            <p className="text-xl font-bold text-center mt-4">
              After today, they could disappear without warning.
            </p>
            <p className="text-xl font-bold text-center mt-6">
              And here's the real kicker:
            </p>
            <p className="text-xl text-center mt-4">
              The ₦5,000 price is the launch price only.
            </p>
            <p className="text-xl font-bold text-center mt-4">
              Once the timer hits 48 hours, the price jumps to ₦10,000.
            </p>
            <p className="text-xl text-center mt-4">
              So, if you come back later, you'll pay double— without the bonuses.
            </p>
            <p className="text-xl font-bold text-center mt-6">
              Don't say I didn't warn you.
            </p>
          </div>

          <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg mb-10">
            <h4 className="text-xl font-bold mb-4 text-center">And let's be real: This isn't for everybody</h4>
            <p className="text-xl text-center">
              Listen carefully to what I'm about to say…
            </p>
            <p className="text-xl font-bold text-center mt-4">
              This Blueprint is not for jokers.
            </p>
            <p className="text-xl text-center mt-4">
              If you're looking for a "get rich by tomorrow morning" nonsense, close this page now.
            </p>
            <p className="text-xl text-center mt-4">
              This is not for people who won't open the pages, who won't act, who'll still spend nights gossiping on Whatsapp instead of executing.
            </p>
            <p className="text-xl font-bold text-center mt-6">
              Only serious hustlers who are tired of being broke will get this.
            </p>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg mb-10">
            <p className="text-xl text-center">
              And trust me, most people who see this page will buy.
            </p>
            <p className="text-xl text-center mt-4">
              Why? Because ₦5,000 for a proven system to escape poverty is nothing. 
            </p>
            <p className="text-xl font-bold text-center mt-4">
              In fact, if you can't invest ₦5,000 in yourself, maybe you're not ready yet.
            </p>
          </div>

          <div className="text-center mb-10">
            <h4 className="text-2xl font-bold mb-4">Now, think about what you'll gain for a second…</h4>
            <p className="text-xl font-bold">Let's do some quick maths…</p>
            <p className="text-xl mt-4">
              Imagine you invest ₦5,000 today.
            </p>
            <p className="text-xl mt-4">
              Inside the Blueprint, I'll show you step by step how to build and grow a business that could make you ₦500,000 to ₦1,000,000 monthly income.
            </p>
            <div className="bg-green-100 text-green-800 p-6 rounded-lg mt-6">
              <p className="text-xl font-bold text-center">
                Even if you do only 10% of what's inside and earn an extra ₦50,000 a month—that's still a 1000% gain on your ₦5,000.
              </p>
            </div>
            <p className="text-xl mt-6">
              Even if I'm only half right, you'll still pocket way more than you paid.
            </p>
            <p className="text-xl font-bold mt-6">
              This is literally like selling you ₦1000 notes for ₦50…
            </p>
            <p className="text-xl font-bold mt-4">
              You'd be crazy not to grab as many as possible.
            </p>
          </div>

          <div className="bg-blue-100 text-blue-800 p-6 rounded-lg mb-10">
            <h4 className="text-2xl font-bold mb-4 text-center">And to put your mind at rest,</h4>
            <h4 className="text-2xl font-bold text-center">I'm giving you an insane guarantee…</h4>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg mb-10">
            <p className="text-xl text-center">
              Get The Naija Hustlers Blueprint today. 
            </p>
            <p className="text-xl text-center mt-4">
              Open it. Study it. Use it.
            </p>
            <p className="text-xl text-center mt-4">
              If you don't see a clear pathway to starting, building, and scaling a business that could make you an extra ₦500k to ₦1m monthly income...
            </p>
            <p className="text-xl text-center mt-4">
              If you don't see how to attract customers like magnets…
            </p>
            <p className="text-xl text-center mt-4">
              If the pricing strategies don't blow your mind and make you slap your forehead saying "Ah! Why didn't I know this before?"…
            </p>
            <p className="text-xl font-bold text-center mt-6">
              Just email me here: thecashologists00@gmail.com and I'll refund every kobo.
            </p>
            <p className="text-xl font-bold text-center mt-4">
              No stories. No questions.
            </p>
          </div>

          <div className="bg-yellow-100 text-gray-900 p-6 rounded-lg mb-10">
            <h4 className="text-xl font-bold text-center">But hear this..</h4>
            <p className="text-xl text-center mt-4">
              you must actually use it.
            </p>
            <p className="text-xl text-center mt-4">
              If you're lazy, don't buy.
            </p>
            <p className="text-xl text-center mt-4">
              If you want magic money that falls down from the sky, don't buy.
            </p>
            <p className="text-xl font-bold text-center mt-6">
              This is for action takers. Hustlers. People who are tired of shame, tired of poverty, and ready to fight their way to freedom.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">Here's my final word to you..</h4>
            <p className="text-xl">
              Most people will scroll past this…
            </p>
            <p className="text-xl mt-4">
              They'll think, "Maybe later"
            </p>
            <p className="text-xl font-bold mt-4">
              But you and I know the truth— "later" is the code word for never.
            </p>
            <p className="text-xl font-bold mt-6 text-red-600">
              And the painful reality?
            </p>
            <p className="text-xl mt-4">
              A year from now, those same people will still be broke, still borrowing from loan apps, still collecting food on credit from the same food seller, and still dodging their landlords and NEPA bills…
            </p>
            <p className="text-xl font-bold mt-6 text-green-600">
              While you could already be counting six figures monthly from your hustle.
            </p>
            <p className="text-xl font-bold mt-8">
              So, the choice is yours.
            </p>
            <p className="text-xl font-bold mt-4">
              Will you join the thousands who will grab this Blueprint and finally break free?
            </p>
            <p className="text-xl font-bold mt-4">
              Or will you close this page, do nothing, and stay stuck where you are?
            </p>
            <p className="text-xl font-bold mt-8">
              Click the button below and secure your copy now— before the bonuses disappear and the price doubles in 48 hours.
            </p>
          </div>

          <div className="text-center mt-10">
            <Link href="#purchase" className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-xl py-4 px-10 rounded-lg shadow-lg transition duration-300">
              GET THE NAIJA HUSTLERS BLUEPRINT FOR ₦5,000
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
          <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg font-bold mb-2 md:mb-0">Get The Naija Hustlers Blueprint Now - Only ₦5,000</p>
            <Link href="#purchase" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg">
              Buy Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}