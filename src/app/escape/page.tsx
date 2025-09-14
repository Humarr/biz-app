/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <header className="bg-yellow-50 border-b-4 border-yellow-400 py-6">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-yellow-600">
              Naija Hustlers
            </div>
            <Link
              href="#purchase"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300"
            >
              Get The Blueprint Now
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-4xl text-lg">
        {/* Headline Section */}
        <section className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Finally! The Secret Escape Plan Every "Broke" 9-5er in Nigeria Has
            Been Desperately Searching For...
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gray-800 leading-tight">
            Discover The Underground Blueprint That's Helping "Salary Slaves"
            Earn 2-3X Their Monthly Pay In 90 Days... WITHOUT Quitting Their Day
            Job, WITHOUT Huge Capital, And WITHOUT Their Boss Ever Finding Out
          </h2>

          {/* Illustration: A cartoon of a person breaking free from chains with a Nigerian flag in the background */}
          <div className="my-10">
            {/* <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
                
              <span className="text-gray-500">[Illustration: Person breaking free from chains with Nigerian flag]</span>
            </div> */}
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg relative">
              <Image
                src="/illustrations/break-free.png"
                alt="Person breaking free from chains with Nigerian flag"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <div className="bg-blue-100 p-6 rounded-lg border-l-4 border-blue-500 mb-8">
            <p className="text-xl italic">
              "I think I was making about N280k monthly after tax, and the
              pressure of bills, responsibilities, and the constant what-ifs
              made me question everything..."
            </p>
          </div>

          <p className="text-2xl font-bold text-red-600 mb-4">
            Does this sound familiar?
          </p>
          <p className="text-xl font-semibold">You're not alone.</p>
        </section>

        {/* Problem Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Right now, thousands of Nigerian professionals are trapped in what I
            call "The Salary Prison."
          </h3>

          <p className="mb-6 text-xl">
            You wake up at 5AM... Rush to beat traffic... Work 9+ hours making
            someone else rich... Come home exhausted... Check your account and
            wonder:{" "}
            <span className="italic">"How am I still broke with a job?"</span>
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-2xl">•</span>
              <span>Your salary isn't exactly "ghen-ghen" (thrilling).</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-2xl">•</span>
              <span>
                Bills keep piling up faster than your paycheck arrives.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-2xl">•</span>
              <span>
                The rising cost of living has made it nearly impossible to
                survive on just your monthly pay.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 mr-2 text-2xl">•</span>
              <span>
                And that dream of financial freedom? Feels like a cruel joke.
              </span>
            </li>
          </ul>

          {/* Illustration: A meme-style image of a person looking at an empty wallet with shocked expression */}
          <div className="my-10">
            {/* <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">[Meme: Person looking at empty wallet with text "My Account After Bills"]</span>
            </div> */}

            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg relative">
              <Image
                src="/illustrations/empty-wallet.png"
                alt="Person breaking free from chains with Nigerian flag"
                fill
                className="object-contain p-4"
              />
            </div>

            <p className="mb-6 text-xl">
              But here's what your boss doesn't want you to know...
            </p>
          </div>

          <div className="bg-red-100 p-6 rounded-lg mb-8">
            <h4 className="text-2xl font-bold text-red-700 mb-4">
              THE SHOCKING TRUTH:
            </h4>
            <p className="text-xl">
              There's an entire underground network of Nigerian 9-5ers who've
              cracked the code.
            </p>

            <p className="text-xl mt-4">
              They're earning N500k... N1M... even N2.5M monthly from their
              "side hustles."
            </p>
            <p className="text-xl font-bold mt-4">The crazy part?</p>
            <p className="text-xl">
              <span className="font-bold">
                They're still "tied to their 9-5"
              </span>{" "}
              - but now they have real OPTIONS.
            </p>

            <p className="text-xl mt-4">No more being "desperate for a job."</p>

            <p className="text-xl mt-4">
              No more accepting toxic treatment because "you need the money."
            </p>

            <p className="text-xl mt-4">
              No more "monthsssssssss of silence" between real opportunities.
            </p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-bold mb-4">How are they doing it?</p>
            <h3 className="text-4xl font-bold bg-yellow-500 text-white p-4 rounded-lg inline-block">
              The Alert Manual.
            </h3>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Look, Let's Be Brutally Honest About Your Current Situation...
          </h3>
          <h4 className="text-2xl font-bold mb-8 text-center text-red-600">
            You're Stuck In "The Salary Prison" And Here's Proof:
          </h4>

          <ul className="space-y-4 mb-10">
            {[
              "You're '9-5 and Still Broke' - Your salary barely covers basic living expenses, let alone savings or investments",
              "You're At The Mercy of Toxic Bosses - You accept poor treatment because you're 'desperate' and 'there are no jobs'",
              "You Have Zero Financial Security - One missed paycheck and you're in trouble. One job loss and you're finished.",
              "You're Aging Out of Opportunities - Every year you stay stuck, younger candidates become more attractive to employers",
              "You're Missing The Digital Gold Rush - While you're stuck in meetings, others are building online empires",
              "You Feel Suffocated and Uncomfortable - But you can't leave because you have bills to pay",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start bg-red-50 p-4 rounded-lg"
              >
                <span className="text-red-500 mr-2 text-xl">❌</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>

                <p className="font bold text-xl my-6 text-center">The Brutal Reality?</p>

          <div className="bg-gray-800 text-white p-6 rounded-lg text-center mb-8">
            <p className="text-2xl font-bold italic">
              "Many jobs today can't pay the bills."
            </p>
          </div>

          <p className="text-xl mb-6">
            The system is designed to keep you dependent, desperate, and broke.
            Your boss owns your time. Your landlord owns your paycheck. Your
            bills own your dreams.
          </p>

          <div className="text-center bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
            <p className="text-2xl font-bold text-gray-900">
              But What If There Was Another Way?
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Introducing: The Alert Manual
          </h3>

          <div className="my-10">
            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg relative">
              <Image
                src="/illustrations/alert-manual.png"
                alt="Person breaking free from chains with Nigerian flag"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>

          <h4 className="text-2xl font-semibold mb-8 text-center text-gray-800">
            The Secret Escape Plan For Smart Nigerian Professionals Who Want
            Financial Freedom Without Risking Their Day Job
          </h4>

          <p className="text-xl mb-8">
            This isn't another "quit your job and chase your dreams" fantasy.
            This is a PROVEN SYSTEM that thousands of Nigerian 9-5ers are using
            right now to:
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {[
              "✅ Build Multiple Income Streams while keeping their day job security",
              "✅ Earn 2-3x Their Salary from businesses that run on autopilot",
              "✅ Create Their Own 'Financial Freedom Bridge' - step by step",
              "✅ Gain Negotiating Power with their employers (try firing someone who doesn't need you!)",
              "✅ Build Real Wealth instead of just surviving paycheck to paycheck",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-start bg-green-50 p-4 rounded-lg"
              >
                <span className="text-green-500 mr-2 text-xl">✅</span>
                <span className="text-lg">{item}</span>
              </li>
            ))}
          </ul>

          <div className="text-center bg-blue-100 p-6 rounded-lg mb-10">
            <p className="text-2xl font-bold">The Best Part?</p>
            <p className="text-xl">
              Your boss will never know. Your colleagues will never suspect. But
              your bank account will never be the same.
            </p>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            "How Real Nigerian 9-5ers Are Using This Blueprint Right Now..."
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-purple-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Emeka's Story:</h4>
              <p className="italic">
                "I was making N280k monthly after tax... Now I make N7M per
                project while my salary increased by 4x. The flexibility gave me
                breathing space to build my empire."
              </p>
            </div>

            <div className="bg-pink-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">
                Adunni's Transformation:
              </h4>
              <p className="italic">
                "I had N100k from my salary for a side hustle. Using the
                blueprint, I now earn N500k monthly. I still work at the bank
                but I'm not desperate anymore."
              </p>
            </div>

            <div className="bg-blue-100 p-6 rounded-lg">
              <h4 className="text-xl font-bold mb-4">Kola's Freedom:</h4>
              <p className="italic">
                "My side hustle now pays more than my salary. I have options.
                Real options. My boss treats me differently because he knows I
                don't NEED this job."
              </p>
            </div>
          </div>

          <div className="text-center bg-yellow-100 p-6 rounded-lg">
            <p className="text-2xl font-bold">
              The Pattern Is Clear: Smart Nigerian professionals are using this
              blueprint to escape "The Salary Prison" without the risk of
              quitting blindly.
            </p>
            <p className="text-xl mt-4">
              They're building wealth while keeping stability.
            </p>
          </div>
        </section>

        {/* What You Get Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Here's Exactly What You Get Inside "The Alert Manual":
          </h3>

          <div className="space-y-10">
            {[
              {
                title:
                  "CHAPTER 1: Before You Quit Your Job Or Waste Your Savings",
                items: [
                  "The 'starving crowd' revelation that lets you spot desperate customers from miles away (while your competition is still guessing)",
                  "How to develop 'Eagle Eyes' for hidden business opportunities that are invisible to 99% of people",
                  "The 3-question business analyzer that instantly tells you if an idea will make you rich or leave you broke",
                  "Why most Nigerian businesses fail before they even start (and the simple mindshift that changes everything)",
                  "The universal economic values that make any offer irresistible to Nigerian buyers",
                  "How to validate your idea in 72 hours without spending a single naira (this alone could save you years of wasted time)",
                ],
              },
              {
                title: "CHAPTER 2: How to Own Space in Your Customer's Mind",
                items: [
                  "The 'mental real estate game' - how to get customers to think of YOU first when they need what you sell",
                  "Strategy #1: How to be the first in any market (even if you're not actually first)",
                  "Strategy #2: The 'new angle' trick that makes competitors irrelevant overnight",
                  "Strategy #3: The niche domination strategy that turns you into a big fish in a small pond",
                  "Strategy #4: The business model that changes the game completely (your competitors won't know what hit them)",
                  "The David vs Goliath strategy - how small Nigerian businesses are crushing multinational corporations using this one approach",
                ],
              },
              {
                title:
                  "CHAPTER 3: The Advertising Secret That Makes People Buy Instantly",
                items: [
                  "Why 95% of Nigerian businesses waste money on 'brand awareness' advertising (and how to avoid this expensive mistake)",
                  "The 8 unbreakable laws that force people to buy from you instead of your competition",
                  "Law #1: The 'fighting for' technique that makes customers feel you're their champion",
                  "Law #2: How to grab attention in a world where everyone is scrolling past your ad",
                  "Law #3: The offer formula that turns browsers into buyers in seconds",
                  "Law #4: The magic words that make people take action NOW (not 'someday')",
                  "Law #5: The urgency trigger that creates buying frenzies",
                  "Law #6: How to instantly build trust with strangers (even if they've never heard of you)",
                  "Law #7: The risk reversal that removes every excuse not to buy",
                  "Law #8: The tracking system that turns every naira into three naira",
                  "Why most Nigerian flyers and posters never work (and the 2-minute fix that changes everything)",
                ],
              },
              {
                title:
                  "CHAPTER 4: The Unpaid Sales Army: How To Get Others To Promote Your Business FOR FREE",
                items: [
                  "The 'currency of trust' that's more valuable than money in Nigerian business",
                  "How to turn one satisfied customer into ten new customers without spending a naira on advertising",
                  "The word-of-mouth multiplier that creates exponential growth",
                  "3 psychological triggers that make people desperate to recommend you to their friends",
                  "The compound effect formula that builds unstoppable momentum",
                  "Why Nigerian customers trust recommendations more than advertisements (and how to exploit this)",
                ],
              },
              {
                title:
                  "CHAPTER 5: How to Set a Price That Feels Fair — And Sells Like Crazy",
                items: [
                  "Why the 'price drop death loop' kills more Nigerian businesses than competition ever will",
                  "The shocking truth: People are NOT looking for the lowest price (here's what they really want)",
                  "The psychology behind Nigerian buying behavior - the 3 emotional triggers that open wallets",
                  "Why most price resistance comes from the SELLER, not the buyer (this mindset shift will shock you)",
                  "The 'market vendor pricing psychology' that's been making Nigerians rich for centuries",
                  "The value stacking technique that makes any price seem like a bargain",
                  "The difference between 'affordable' and 'cheap' (get this wrong and you're finished)",
                  "How to use price anchoring to make customers beg for your premium option",
                  "The recession-proof pricing strategy that works even when times are tough",
                  "4 smart ways to use low prices without destroying your profit margins",
                ],
              },
              {
                title: "CHAPTER 6: The Next Step Is Simple: MOVE",
                items: [
                  "Why 'speed beats perfection' every single time in Nigerian business",
                  "The 'start small, start now' approach that builds empires from nothing",
                  "How to reinvest profits instead of 'flexing' your way back to poverty",
                  "The dangerous mistake 90% of Nigerian entrepreneurs make with their first success",
                  "When to quit your 9-5 (and the 3 warning signs that mean you're not ready yet)",
                  "How to stick with one business long enough to see real results (instead of jumping around like most people)",
                  "The 'keep doors open' strategy that creates multiple income streams",
                  "7 ways to keep the money you make (before the government and relatives take it all)",
                ],
              },
              {
                title: "BONUS 1: The 6 Products Nigerians Will ALWAYS Buy",
                items: [
                  "Market #1: The 'merriment market' - why Nigerians will spend their last naira to celebrate (and how to profit from it)",
                  "Market #2: The herbal goldmine that combines ancient wisdom with modern marketing",
                  "Market #3: Why marriage and relationships are the ultimate life goal for most Nigerians (and the businesses this creates)",
                  "Market #4: The silent goldmine that nobody talks about but everybody spends on",
                  "Market #5: The beauty market that creates lifetime customers who buy again and again",
                  "Market #6: The 'great Nigerian exodus' - how to profit from the relocation obsession",
                  "The success formula that works in all 6 markets (why most people fail even in these 'guaranteed' markets)",
                ],
              },
              {
                title: "BONUS 2: Direct Response Ad Templates Toolkit",
                items: [
                  "27 headline templates that grab attention instantly and force people to keep reading",
                  "5 complete ad structures you can copy and customize for any business",
                  "The problem-agitation-solution template that creates buying urgency",
                  "The before/after transformation formula that makes people desperate for your solution",
                  "Social proof templates that turn customer success into unstoppable momentum",
                  "The scarcity and urgency formulas that create buying frenzies",
                  "Authority-building templates that position you as the obvious expert",
                  "The tracking system that tells you exactly which ads make money (and which ones waste money)",
                  "Quick reference guide for writing ads that convert in under 10 minutes",
                ],
              },
            ].map((chapter, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h4 className="text-2xl font-bold mb-4 text-blue-800">
                  {chapter.title}
                </h4>
                <ul className="space-y-2">
                  {chapter.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Illustration: A cartoon showing a treasure chest full of Nigerian Naira and resources */}
          <div className="my-10">
            {/* <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg">
              <span className="text-gray-500">
                [Illustration: Treasure chest with Nigerian Naira and resources
                spilling out]
              </span>
            </div> */}

            <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg relative">
              <Image
                src="/illustrations/treasure.png"
                alt="Person breaking free from chains with Nigerian flag"
                fill
                className="object-contain p-4"
              />
            </div>
          </div>
        </section>

        {/* Objection Handling Section */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            "But What If..."
          </h3>

          <div className="space-y-6">
            {[
              {
                objection: '"I don\'t have time to balance both"',
                response:
                  "Listen - \"balancing a 9-5 with a side hustle isn't for the weak.\" But the blueprint shows you how to automate 80% of the work using AI and systems. You're not building another job, you're building a money machine.",
              },
              {
                objection: '"I don\'t have enough capital to start"',
                response:
                  "The beauty of this system? You can start with as little as N50k. One person in the blueprint started with N100k from their salary and now makes N500k monthly. Small money, smart strategy.",
              },
              {
                objection: '"What if I fail and lose my job?"',
                response:
                  'This blueprint is specifically designed to PROTECT your day job while you build wealth. No "jumping blindly." No burning bridges. You keep your security while you create options.',
              },
              {
                objection: '"I don\'t have any special skills"',
                response:
                  'Good! The blueprint works best for "ordinary" people. You don\'t need to be special. You need to be strategic. Everything is laid out step-by-step.',
              },
              {
                objection: '"What if my boss finds out?"',
                response:
                  "Your boss will never know unless you tell them. The blueprint teaches you how to build quietly, professionally, and ethically. Many people get PROMOTED because the side income removes desperation from their job performance.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-2">{item.objection}</h4>
                <p>{item.response}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Warning Section */}
        <section className="mb-16 bg-red-100 p-8 rounded-lg border-l-4 border-red-500">
          <h3 className="text-3xl font-bold mb-6 text-center text-red-700">
            ⚠️ WARNING: This Offer Has Limitations
          </h3>
          <p className="text-xl mb-6 text-center">This isn't for everyone.</p>
          <p className="mb-6 text-center">
            If you're looking for "get rich quick" schemes, this isn't for you.
            If you want to "make money without working," close this page.
          </p>
          <p className="text-xl font-bold mb-6 text-center">
            But if you're a serious Nigerian professional who's tired of being
            "9-5 and broke"...
          </p>
          <p className="text-xl font-bold mb-6 text-center">
            If you're ready to build real wealth while keeping your day job
            security...
          </p>
          <p className="text-xl font-bold mb-6 text-center">
            If you want to join the underground network of smart Nigerians
            who've escaped "The Salary Prison"...
          </p>
          <p className="text-2xl font-bold text-center mt-8">
            Then this is your moment.
          </p>
          <p className="text-xl text-center mt-4">
            The blueprint that helped Emeka make N7M per project... The same
            system that helped Adunni turn N100k into N500k monthly... The exact
            strategy that's working for thousands right now...
          </p>
          <p className="text-2xl font-bold text-center mt-6">
            It's all inside The Alert Manual.
          </p>
        </section>

        {/* Pricing Section */}
        <section
          id="purchase"
          className="mb-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Get The Complete Alert Manual Today
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <p className="line-through text-xl opacity-75">
                Regular Price: N25,000
              </p>
              <p className="text-4xl font-bold">Today Only: N6,997</p>
            </div>
          </div>

          <div className="bg-white text-gray-900 p-6 rounded-lg mb-8">
            <h4 className="text-2xl font-bold mb-4 text-blue-800">
              Your Success Is 100% Guaranteed
            </h4>
            <p className="mb-4">Try The Alert Manual for 60 days.</p>
            <p className="mb-4">
              If you don't see a clear path to earning at least 2x your monthly
              salary within 90 days...
            </p>
            <p className="mb-4">
              If you can't identify at least 3 profitable business opportunities
              in your area...
            </p>
            <p className="mb-4">
              If the blueprint doesn't give you the confidence and strategy to
              build wealth while keeping your day job...
            </p>
            <p className="font-bold">
              Simply email us (thecashologists00@gmail.com) and we'll refund
              every naira.
            </p>
            <p className="font-bold mt-2">
              No questions asked. No hard feelings.
            </p>
            <p className="font-bold text-blue-800 mt-4">
              You either succeed, or you get your money back.
            </p>
            <p className="font-bold mt-2">
              That's how confident we are that this works.
            </p>
          </div>

          <Link
            href="#purchase"
            className="inline-block bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold text-xl py-4 px-10 rounded-lg shadow-lg transition duration-300 mb-6"
          >
            GET THE ALERT MANUAL NOW
          </Link>

          <div className="mt-8">
            <p className="text-xl font-bold mb-4">
              Your Choice: Stay "Broke With A Job" Or Build Real Wealth
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-900">
              <div className="bg-red-100 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Option 1:</h4>
                <p>
                  Close this page. Go back to your 9-5. Accept that your salary
                  "isn't ghen-ghen." Keep being "desperate" for job security.
                  Watch others build wealth while you survive paycheck to
                  paycheck.
                </p>
              </div>
              <div className="bg-green-100 p-6 rounded-lg">
                <h4 className="text-xl font-bold mb-4">Option 2:</h4>
                <p>
                  Get The Alert Manual. Join thousands of smart Nigerian
                  professionals who've found their escape plan. Build multiple
                  income streams. Create real options. Never be "desperate"
                  again.
                </p>
              </div>
            </div>
            <p className="text-xl font-bold mt-8">Which will you choose?</p>
            <p className="text-lg mt-4">
              The people making N500k... N1M... N2.5M monthly chose Option 2.
            </p>
            <p className="text-xl font-bold mt-6">What about you?</p>
          </div>

          <Link
            href="#purchase"
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-10 rounded-lg shadow-lg transition duration-300 mt-8"
          >
            GET THE BLUEPRINT NOW
          </Link>

          <div className="mt-8 text-center">
            <p className="italic">
              Remember: "Speed beats perfection." The best time to start was
              yesterday. The second best time is NOW.
            </p>
          </div>
        </section>

        {/* PS Section */}
        <section className="text-center mb-12">
          <p className="text-xl font-bold mb-4">
            P.S. - The Alert Manual isn't just information. It's transformation.
            From "salary slave" to financial freedom. From desperate to options.
            From broke to wealthy. The choice is yours.
          </p>
          <p className="text-xl font-bold mb-4">
            P.P.S. - Still thinking about it? While you think, others are taking
            action. Every day you wait is another day you stay "tied to your
            9-5" without options. Don't let fear keep you trapped.
          </p>
          <p className="text-xl font-bold">
            P.P.P.S. - This price is temporary. Once we hit 1,000 members in our
            success community, the price doubles. Don't say we didn't warn you.
          </p>
          <p className="text-2xl font-bold mt-8 text-red-600">
            SECURE YOUR COPY NOW - BEFORE IT'S TOO LATE
          </p>
        </section>

        {/* Final CTA */}
        <section className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 shadow-lg z-50">
          <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row justify-between items-center">
            <p className="text-lg font-bold mb-2 md:mb-0">
              Get The Alert Manual Now - Only N6,997
            </p>
            <Link
              href="#purchase"
              className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-6 rounded-lg"
            >
              Buy Now
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
