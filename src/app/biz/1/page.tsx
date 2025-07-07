/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";


export default function SalesPage() {
  return (
    <main className={`font-body min-h-screen bg-white text-gray-900`}>
      {/* Hero Section */}
      <section className="py-12 px-4 md:py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-red-600 block">TIRED OF BEING THE "BROKE UNCLE"</span>
            <span className="text-gray-900">AT FAMILY GATHERINGS?</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 border-red-500 pb-2 inline-block">
            Fed Up With Your Little Cousins Whispering "Here Comes The Stingy One" Behind Your Back?
          </h2>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <p className="text-lg md:text-xl font-semibold mb-4">
            Sick of Calculating Every Last Naira While Your Younger Mates Are Making "Bastard Money" Like It's Child's Play?
          </p>
        </div>

        <div className="relative">
          <p className="text-xl md:text-2xl leading-relaxed mb-8 italic font-medium">
            Listen...
          </p>
          <div className="absolute -right-4 top-0 w-24 md:w-32">
            {/* <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
              <p className="text-xs md:text-sm text-red-600 font-kalam leading-tight">
                This will change everything...
              </p>
            </div> */}
          </div>
        </div>

        <ul className="space-y-4 mb-12 max-w-3xl mx-auto">
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              If you're reading this at 2 AM because you can't sleep, wondering how the hell you're going to survive another month...
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              If you're tired of your mum comparing you to your neighbor's son who just bought her a car while you can't even afford to fix your own slippers...
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              If you're sick of dodging calls from your sister in school because you know she needs 10k for handouts and you don't have it...
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              If you're frustrated that people dumber than you are living in Lekki while you're still calculating transport fare...
            </span>
          </li>
        </ul>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            Then you need to read every single word of this message.
          </h3>
          <p className="text-lg">
            Because what I'm about to tell you will either piss you off completely... or it will be the turning point that changes everything.
          </p>
        </div>

        <p className="text-xl font-bold mb-8">
          But first, let me guess what's really eating you up inside...
        </p>
      </section>

      {/* Midnight Thoughts Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            THE MIDNIGHT THOUGHTS THAT WON'T LEAVE YOU ALONE
          </h2>

          <p className="text-lg md:text-xl mb-8">
            You know what's keeping you up at night, right?
          </p>
          <p className="text-lg md:text-xl mb-8">
            It's not just the mosquitoes or the generator noise from your neighbor's compound.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-4">
                It's that crushing feeling in your chest when you realize you're 25... 28... 32... and you're still in the same exact spot you were 3 years ago.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-4">
                It's the shame that burns in your throat when your parents throw those disappointed looks your way.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-4">
                It's the anger that builds up when you see your former classmates posting pictures of their new cars while you're still begging for bike fare.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg font-semibold mb-4">
                It's the embarrassment that makes you want to disappear when family members start talking about "successful people" and you know they're definitely not talking about you.
              </p>
            </div>
          </div>

          <p className="text-xl font-bold mb-6">
            You're tired of being invisible, aren't you?
          </p>

          <ul className="space-y-4 mb-12">
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">Tired of your voice not mattering in family discussions because "what does he know about money anyway?"</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">Tired of walking past that girl you've been crushing on since secondary school because you know you can't even afford to buy her a decent meal.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">Tired of your friends gradually stopping to invite you out because they know you'll either make excuses or ask to "borrow" money.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">Tired of checking your account balance and feeling that familiar punch in the gut when you see those depressing numbers.</span>
            </li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-xl font-bold mb-4">
              But here's what really hurts the most...
            </p>
            <p className="text-lg">
              You KNOW you're not stupid.
              <br />
              You KNOW you're not lazy.
              <br />
              You KNOW you have ideas, dreams, and ambitions.
              <br />
              Yet somehow, you're stuck watching people who are clearly less intelligent than you living the life you want.
            </p>
          </div>

          <p className="text-xl font-bold mb-8">
            And that's what's driving you crazy, isn't it?
          </p>
          <p className="text-lg mb-8">
            The fact that you can't figure out what they know that you don't.
            <br />
            The fact that you're working twice as hard but getting half the results.
            <br />
            The fact that you're following all the "rules" but still ending up broke.
            <br />
            Well, I'm about to tell you exactly why that's happening...
          </p>
        </div>
      </section>

      {/* Brutal Truth Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          THE BRUTAL TRUTH ABOUT WHY YOU'RE STILL BROKE
        </h2>

        <p className="text-xl font-bold mb-6">
          You want to know the real reason you're still struggling?
        </p>
        <p className="text-lg mb-8">
          It's not because you're not smart enough.
          <br />
          It's not because you don't work hard enough.
          <br />
          It's not because you don't have connections.
          <br />
          It's not because you don't have capital.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-2xl font-bold text-red-700 mb-4">
            It's because you've been lied to your entire life.
          </h3>
          <p className="text-lg">
            You've been fed a script that was designed to keep you exactly where you are.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="font-semibold">You've been programmed to think like an employee when you should be thinking like an owner.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="font-semibold">You've been taught to look for jobs when you should be creating them.</p>
          </div>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="font-semibold">You've been conditioned to ask for opportunities when you should be making them.</p>
          </div>
        </div>

        <p className="text-xl font-bold mb-6">
          And the worst part?
        </p>
        <p className="text-lg mb-8">
          The people who fed you these lies genuinely believe they're helping you.
          <br />
          Your parents genuinely believe that going to school and getting a good job is the path to success.
          <br />
          Your lecturers genuinely believe that a degree is your ticket to the good life.
          <br />
          Your friends genuinely believe that "hustling" and "grinding" will eventually pay off.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-xl font-bold mb-4">
            But here's what they don't know...
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>The game changed decades ago.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>The rules they taught you are from a different era.</span>
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              <span>The script they gave you is obsolete.</span>
            </li>
          </ul>
        </div>

        <p className="text-xl font-bold mb-6">
          And that's why you're stuck.
        </p>
        <ul className="space-y-4 mb-12">
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">You're playing by old rules in a new game.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">You're using a map from the 1980s to navigate the 2020s.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">You're trying to win a race while everyone else is using a different vehicle.</span>
          </li>
        </ul>

        <div className="bg-red-100 border-l-4 border-red-600 p-6 my-8">
          <p className="text-xl font-bold mb-4">
            But it gets worse...
          </p>
          <p className="text-lg">
            Not only are you playing by the wrong rules, you're also fighting against enemies you don't even know exist.
          </p>
        </div>
      </section>

      {/* Invisible Enemies Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            THE INVISIBLE ENEMIES THAT HAVE BEEN SABOTAGING YOUR SUCCESS
          </h2>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Enemy #1: The Poverty Programming</h3>
            <p className="text-lg mb-6">
              From the day you were born, you've been programmed to think small.
              <br />
              "Money is not everything."
              <br />
              "Rich people are greedy."
              <br />
              "Business is risky."
              <br />
              "Be grateful for what you have."
              <br />
              "Don't aim too high or you'll be disappointed."
            </p>
            <p className="text-lg font-semibold">
              These innocent-sounding phrases have been drilling into your subconscious for decades, creating invisible barriers that keep you from even attempting to build wealth.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Enemy #2: The Education Scam</h3>
            <p className="text-lg mb-6">
              They sold you a lie called "go to school, get good grades, get a good job."
              <br />
              They made you believe that a piece of paper would guarantee your success.
              <br />
              They convinced you that memorizing information was the same as learning valuable skills.
              <br />
              They taught you to be a good employee instead of teaching you to be a good entrepreneur.
            </p>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-semibold text-lg">
                And now you're finding out the hard way that your degree is just expensive toilet paper.
              </p>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Enemy #3: The Job Market Illusion</h3>
            <p className="text-lg mb-6">
              They told you there are "good jobs" waiting for you after graduation.
              <br />
              They made you believe that if you just work hard enough, you'll climb the corporate ladder.
              <br />
              They convinced you that job security is real and that employers care about your well-being.
            </p>
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
              <p className="text-lg font-bold">
                But here's the reality:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>The "good jobs" don't exist.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>The corporate ladder is a myth.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Job security died with your grandfather's generation.</span>
                </li>
              </ul>
            </div>
            <p className="text-lg mt-4">
              And while you're busy writing "I beg to apply" letters, other people are building businesses and creating their own opportunities.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Enemy #4: The Fake Guru Army</h3>
            <p className="text-lg mb-6">
              These are the vultures who prey on desperate people like you.
              <br />
              They post pictures in front of rented Lamborghinis and borrowed private jets.
              <br />
              They sell you "proven systems" that are just recycled motivational quotes.
              <br />
              They promise you'll make millions in 30 days if you just buy their 200k course.
              <br />
              And after you pay, they disappear faster than your money.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Enemy #5: The Nigerian Dream Merchants</h3>
            <p className="text-lg mb-6">
              These are the local scammers who've perfected the art of selling false hope.
              <br />
              They promise you'll become a millionaire through forex trading.
              <br />
              They convince you that cryptocurrency is your ticket to freedom.
              <br />
              They sell you on network marketing schemes that only make the people at the top rich.
            </p>
            <p className="text-lg font-semibold">
              They're the reason you're skeptical of everything now.
              <br />
              They're the reason you don't trust anyone offering to help you make money.
              <br />
              And they're the reason you're stuck in analysis paralysis instead of taking action.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
            <p className="text-xl font-bold mb-4">
              But here's the thing...
            </p>
            <p className="text-lg">
              While these enemies have been busy keeping you broke, there's a small group of people who figured out how to beat the system.
            </p>
          </div>
        </div>
      </section>

      {/* The 5% Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          THE 5% WHO BROKE FREE (And What They Know That You Don't)
        </h2>

        <p className="text-lg mb-8">
          You've probably noticed them.
          <br />
          They're the ones who seem to have cracked some secret code.
          <br />
          They're the ones making "bastard money" while you're still calculating transport fare.
          <br />
          They're the ones living in nice areas while you're still sharing toilets with 20 neighbors.
          <br />
          They're the ones your parents compare you to.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <p className="text-xl font-bold text-center">
            What do they know that you don't?
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Secret #1: They Know Business is Less Risky Than Employment</h3>
            <p className="text-lg mb-6">
              While you're scared of starting a business because it's "risky," they know that depending on a job is the real risk.
              <br />
              They know that businesses can make money 24/7 while jobs only pay when you're present.
              <br />
              They know that businesses have unlimited income potential while jobs have salary caps.
              <br />
              They know that businesses build wealth while jobs just pay bills.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Secret #2: They Know How to Spot Real Opportunities</h3>
            <p className="text-lg mb-6">
              While you're waiting for the "perfect opportunity," they're creating opportunities everywhere they look.
              <br />
              They see problems and think "business opportunity."
              <br />
              They see inefficiencies and think "profit potential."
              <br />
              They see complaints and think "unmet demand."
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Secret #3: They Know How to Test Ideas Without Losing Money</h3>
            <p className="text-lg mb-6">
              While you're scared to try anything because you might lose money, they know how to test business ideas with minimal investment.
              <br />
              They know how to validate demand before creating supply.
              <br />
              They know how to get customers before they have products.
              <br />
              They know how to make money before they spend money.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Secret #4: They Know How to Price Like Winners</h3>
            <p className="text-lg mb-6">
              While you're scared to charge what you're worth, they price their products and services like the premium offerings they are.
              <br />
              They know that people equate price with value.
              <br />
              They know that expensive products often sell better than cheap ones.
              <br />
              They know that confident pricing attracts better customers.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-blue-600">Secret #5: They Know How to Make Customers Come Back</h3>
            <p className="text-lg mb-6">
              While you're worried about making one sale, they're building systems that turn customers into repeat buyers and unpaid salespeople.
              <br />
              They know how to create offers so good that people feel stupid saying no.
              <br />
              They know how to deliver so much value that customers become raving fans.
              <br />
              They know how to build businesses that grow themselves.
            </p>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-12">
          <p className="text-xl font-bold mb-4">
            But here's the million naira question...
          </p>
          <p className="text-lg mb-2">
            How do you join the 5% who have figured it out?
          </p>
          <p className="text-lg mb-2">
            How do you break free from the 95% who are stuck in the struggle?
          </p>
          <p className="text-lg">
            How do you learn these secrets without falling victim to another scam?
          </p>
        </div>

        <p className="text-xl font-bold mb-8 text-center">
          Well, I'm about to show you exactly how...
        </p>
      </section>

      {/* My Story Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            THE NIGHT EVERYTHING CHANGED FOR ME
          </h2>

          <p className="text-lg mb-8">
            Let me tell you a story.
            <br />
            Three years ago, I was just like you.
            <br />
            Broke. Frustrated. Angry at the world.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I had a degree that wasn't worth the paper it was printed on.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I had skills that nobody seemed to value.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I had dreams that felt more like fantasies.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I was tired of being the family disappointment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I was tired of my parents' concerned looks.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I was tired of making excuses for why I couldn't afford basic things.</span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">I was tired of being tired.</span>
            </li>
          </ul>

          <p className="text-lg mb-8">
            One night, I was scrolling through Facebook (because I couldn't afford Netflix) when I saw a post from a former classmate.
            <br />
            He was posting pictures of his new car.
            <br />
            His new apartment.
            <br />
            His new life.
            <br />
            And I lost it.
          </p>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 my-8">
            <p className="text-lg">
              I threw my phone against the wall.
              <br />
              I screamed at the ceiling.
              <br />
              I cried like a baby.
            </p>
          </div>

          <p className="text-lg mb-8">
            But then something clicked.
            <br />
            Instead of being angry at him, I got curious.
            <br />
            This guy was not smarter than me.
            <br />
            He didn't have richer parents.
            <br />
            He didn't have better connections.
            <br />
            So what did he have that I didn't?
          </p>

          <p className="text-lg mb-8">
            I swallowed my pride and sent him a message.
            <br />
            "Guy, how you take do am?"
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <p className="text-xl font-bold mb-4">
              What he told me changed everything.
            </p>
            <p className="text-lg italic">
              "Bro, I stopped looking for jobs and started creating them. I stopped trying to get hired and started learning to sell. I stopped thinking like an employee and started thinking like a business owner."
            </p>
          </div>

          <p className="text-lg mb-8">
            Then he said something that hit me like a thunderbolt:
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-xl font-bold italic">
              "The difference between broke people and rich people is not intelligence. It's not connections. It's not capital. It's knowledge. Rich people know things that broke people don't know."
            </p>
          </div>

          <p className="text-lg mb-8">
            That night, I made a decision.
            <br />
            I decided to learn what the 5% know.
            <br />
            I decided to stop being a victim and start being a victor.
            <br />
            I decided to stop making excuses and start making money.
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <p className="text-xl font-bold">
              And that's when I discovered the system that changed everything...
            </p>
          </div>
        </div>
      </section>

      {/* The System Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          THE SYSTEM THAT SEPARATES THE WINNERS FROM THE LOSERS
        </h2>

        <p className="text-lg mb-8">
          Over the next 18 months, I became obsessed.
          <br />
          I studied every successful entrepreneur I could find.
          <br />
          I analyzed every business model that actually worked.
          <br />
          I tested every principle that claimed to create wealth.
          <br />
          I separated the real strategies from the fake ones.
          <br />
          I identified the patterns that successful people follow.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-xl font-bold mb-4">
            And I discovered something shocking:
          </p>
          <p className="text-lg">
            There's actually a simple, systematic approach to building wealth that 95% of people never learn.
            <br />
            It's not complicated.
            <br />
            It's not expensive to implement.
            <br />
            It's not dependent on luck or connections.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <p className="text-xl font-bold text-center">
            But it is hidden.
          </p>
        </div>

        <ul className="space-y-4 mb-12">
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">Hidden by the education system that profits from keeping you ignorant.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">Hidden by the job market that needs you to stay desperate.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">Hidden by the fake gurus who make money selling you false hope.</span>
          </li>
          <li className="flex items-start">
            <span className="text-red-500 text-xl mr-2">•</span>
            <span className="text-lg">Hidden by the government that needs you to stay dependent.</span>
          </li>
        </ul>

        <p className="text-xl font-bold mb-6">
          This system has 9 core components:
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #1: The Mindset Shift</h3>
            <p className="text-sm">How to reprogram your brain from poverty thinking to wealth thinking.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #2: The Opportunity Radar</h3>
            <p className="text-sm">How to spot profitable business opportunities that others miss.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #3: The Validation Framework</h3>
            <p className="text-sm">How to test any business idea without losing money.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #4: The Positioning Strategy</h3>
            <p className="text-sm">How to position yourself as the obvious choice in any market.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #5: The Offer Formula</h3>
            <p className="text-sm">How to create offers so irresistible that people fight to buy from you.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #6: The Pricing Psychology</h3>
            <p className="text-sm">How to price your products and services for maximum profit.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #7: The Customer Magnetism Method</h3>
            <p className="text-sm">How to attract customers who are eager to buy from you.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-bold mb-2">Component #8: The Evangelism Engine</h3>
            <p className="text-sm">How to turn customers into unpaid salespeople who promote your business.</p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg md:col-span-2">
            <h3 className="text-lg font-bold mb-2">Component #9: The Automation System</h3>
            <p className="text-sm">How to build a business that makes money while you sleep.</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <p className="text-xl font-bold mb-4">
            When you master these 9 components, something magical happens:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You stop being at the mercy of employers.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You stop worrying about bills.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You stop calculating every naira you spend.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You stop being the family disappointment.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You stop living in fear and start living in confidence.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You become one of the 5% who have figured it out.</span>
            </li>
          </ul>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-xl font-bold mb-4">
            But here's the problem...
          </p>
          <p className="text-lg mb-2">
            Learning these components took me 18 months of obsessive research and testing.
          </p>
          <p className="text-lg mb-2">
            It cost me over 500k in courses, books, and failed experiments.
          </p>
          <p className="text-lg">
            It required me to go through countless scams and disappointments.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          <p className="text-xl font-bold">
            What if I told you there was a way to learn all of this without going through what I went through?
          </p>
          <p className="text-xl font-bold">
            What if I told you there was a way to compress 18 months of learning into 18 hours of reading?
          </p>
          <p className="text-xl font-bold">
            What if I told you there was a way to get the complete system for less than what you'd spend on transport fare in a month?
          </p>
        </div>

        <p className="text-3xl font-bold text-center mb-12 text-red-600">
          Well, that's exactly what I'm about to offer you...
        </p>
      </section>

      {/* Product Introduction Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            INTRODUCING: THE ULTIMATE CASH MACHINE
          </h2>
          <p className="text-xl text-center mb-12">
            A stupidly simple guide to starting a business that prints money like a hacked ATM.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">This isn't...</h3>
              <ul className="space-y-2 text-red-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Another motivational business book filled with fluff and feel-good quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Another "follow your passion" guide that leaves you broke and confused</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Another theoretical manual written by professors who've never made a naira in business</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4 text-center">This is...</h3>
              <ul className="space-y-2 text-green-600">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The complete system that separates the 5% who succeed from the 95% who struggle</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The exact blueprint that transformed me from a broke graduate to a successful entrepreneur</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The same system that's helped hundreds of people break free from financial mediocrity</span>
                </li>
              </ul>
            </div>
          </div>

          <h3 className="text-2xl font-bold mb-6 text-center">
            Here's what you'll discover inside:
          </h3>

          <div className="space-y-12 mb-12">
            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 1: THE MINDSET REVOLUTION</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Why starting a business is actually SAFER than getting a job (this will blow your mind)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to reprogram 20+ years of poverty conditioning in less than 30 days</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The 3 beliefs that keep 95% of people broke (and how to replace them with wealth-building beliefs)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Why your degree is actually hurting your chances of success (and what to do about it)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 2: THE OPPORTUNITY GOLDMINE</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to spot "crazily sweet" business opportunities hiding in plain sight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The 7 signs that an industry is ripe for disruption (and how to position yourself as the disruptor)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Why the best business ideas often sound "boring" to most people</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to turn everyday complaints into profitable business opportunities</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 3: THE VALIDATION FRAMEWORK</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The 12 economic principles that separate winning ideas from losing ones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to test any business idea in less than 7 days without spending more than 5k</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The simple questions that predict whether a business will succeed or fail</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to get customers to pay you BEFORE you create your product</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 4: THE BIG BOY POSITIONING STRATEGY</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to instantly position yourself as a premium player in any market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The psychological tricks that make customers choose you over established competitors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to become the "obvious choice" in customers' minds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Why being new to an industry is actually an advantage (if you know how to use it)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 5: THE IRRESISTIBLE OFFER FORMULA</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to create offers so good that people feel stupid saying no</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The 5 elements that turn ordinary products into must-have purchases</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to make your competitors' offers look weak by comparison</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The secret to making customers buy from you even when they weren't planning to buy anything</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 6: THE FEARLESS PRICING SYSTEM</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to price confidently without losing sales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Why expensive products often sell better than cheap ones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The psychology of premium pricing and how to use it</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to charge 3x more than your competitors and still get more customers</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 7: THE CUSTOMER MAGNETISM METHOD</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to attract customers who are eager to buy from you</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The 3 types of customers and why you should only focus on one type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to become the person customers think of when they need what you sell</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The simple strategy that makes customers come to you instead of you chasing them</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 8: THE EVANGELISM ENGINE</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to turn customers into unpaid salespeople who promote your business</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The 3 psychological triggers that create word-of-mouth marketing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to get customers to bring you more customers without asking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Why satisfied customers are worthless (and what you need instead)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">MODULE 9: THE AUTOMATION SYSTEM</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to build a business that works even when you're sleeping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The tools and processes that turn your business into a real cash machine</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>How to escape the time-for-money trap that keeps most entrepreneurs broke</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>The simple systems that let you work less while earning more</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Plus, you'll also get:</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">BONUS #1: THE COPYWRITING ARSENAL</h4>
                <p className="text-sm">9 proven copywriting secrets that turn browsers into buyers. These are the same psychological triggers that make people stop scrolling and start buying.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">BONUS #2: THE QUICK-START CHECKLIST</h4>
                <p className="text-sm">A simple step-by-step checklist that takes you from idea to first sale in 30 days or less.</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold mb-2">BONUS #3: THE PROFIT CALCULATOR</h4>
                <p className="text-sm">A simple tool that tells you exactly how much money you can make from any business idea.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          WHAT HAPPENS WHEN YOU IMPLEMENT THIS SYSTEM
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Week 1:</h3>
            <p>You'll experience the mindset shift that changes everything. You'll stop thinking like an employee and start thinking like a business owner.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Week 2:</h3>
            <p>You'll identify 3-5 profitable business opportunities that you never noticed before.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Week 3:</h3>
            <p>You'll validate your best idea and know with certainty whether it will work.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Week 4:</h3>
            <p>You'll create your first irresistible offer and start attracting customers.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Month 2:</h3>
            <p>You'll make your first sales and start building momentum.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Month 3:</h3>
            <p>You'll have a steady stream of customers and consistent income.</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Month 6:</h3>
            <p>You'll be making more money than your friends with "good jobs."</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Month 12:</h3>
            <p>You'll be the family success story instead of the family disappointment.</p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">But more importantly...</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll never again have to calculate transport fare.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll never again have to dodge calls from family members who need money.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll never again have to make excuses for why you can't afford basic things.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll never again have to feel ashamed of your financial situation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll finally have the respect, recognition, and resources you deserve.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Objection Handling Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            "BUT I'VE BEEN SCAMMED BEFORE..."
          </h2>

          <p className="text-lg mb-8">
            I know what you're thinking.
            <br />
            "This sounds too good to be true."
            <br />
            "I've heard these promises before."
            <br />
            "How do I know this isn't another scam?"
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <p className="text-lg">
              I get it.
              <br />
              You've been burned before.
              <br />
              You've bought courses from fake gurus who promised you the world and delivered recycled Wikipedia articles.
              <br />
              You've joined "business opportunities" that turned out to be pyramid schemes.
              <br />
              You've invested in "sure-fire" systems that were anything but sure.
            </p>
          </div>

          <p className="text-xl font-bold mb-6">
            That's exactly why I'm NOT promising you millions in 30 days.
            <br />
            That's exactly why I'm NOT showing you pictures of rented cars and borrowed jewelry.
            <br />
            That's exactly why I'm NOT telling you this is "easy money" or "passive income."
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">Here's what I AM promising you:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>This guide will teach you the same principles that successful entrepreneurs use to build wealth.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>You'll learn real strategies, not get-rich-quick schemes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>You'll get a complete system, not just motivational quotes.</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>You'll learn skills that will serve you for life, not tricks that stop working.</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">But here's the thing...</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>This isn't going to work if you're looking for magic bullets.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>This isn't going to work if you're not willing to put in the work.</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>This isn't going to work if you're still waiting for someone to save you.</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold mb-6">
              This is for people who are ready to take responsibility for their financial future.
              <br />
              This is for people who are ready to stop making excuses and start making money.
              <br />
              This is for people who are ready to join the 5% who have figured it out.
            </p>
            <p className="text-2xl font-bold text-red-600">
              If that's you, then this guide is exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          THE INVESTMENT THAT CHANGES EVERYTHING
        </h2>

        <p className="text-lg mb-8">
          Now, you might be wondering: "How much is this going to cost?"
          <br />
          Before I tell you, let me ask you this:
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">How much are you currently spending on staying broke?</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-yellow-700 mr-2">•</span>
              <span>Transport fare to job interviews that lead nowhere? (5k per month = 60k per year)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-700 mr-2">•</span>
              <span>Data to download "free" courses that teach you nothing? (8k per month = 96k per year)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-700 mr-2">•</span>
              <span>"Investment opportunities" that promise quick returns? (50k per scam × 2 scams = 100k per year)</span>
            </li>
            <li className="flex items-start">
              <span className="text-yellow-700 mr-2">•</span>
              <span>Stress-related expenses from financial worry? (20k per year minimum)</span>
            </li>
          </ul>
          <p className="font-bold mt-4">
            That's over 270k per year you're already spending on staying broke.
          </p>
        </div>

        <p className="text-xl font-bold mb-8 text-center">
          Now, what would you pay for a system that could help you earn that back in your first month?
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="text-lg">
            Some business consultants charge 1 million naira for what you'll learn in this guide.
            <br />
            Some "gurus" charge 500k for courses that teach you less.
            <br />
            Some business schools charge 2 million naira for degrees that don't teach you how to make money.
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-lg mb-4">
            But I'm not charging you 1 million naira.
            <br />
            I'm not charging you 500k.
            <br />
            I'm not even charging you 100k.
          </p>
          <p className="text-3xl font-bold text-red-600 mb-4">
            The Ultimate Cash Machine is yours for just 9,950 naira.
          </p>
          <p className="text-lg">
            That's less than what you'd spend on transport and data in one month.
            <br />
            That's less than what you'd waste on one fake "investment opportunity."
            <br />
            That's less than what you'd pay for a night out in Victoria Island.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">But here's why the price is so low...</h3>
          <p className="text-lg mb-2">
            I didn't create this to get rich.
            <br />
            I created this to help people like you break free from financial mediocrity.
          </p>
          <p className="text-lg">
            I know what it's like to count every naira.
            <br />
            I know what it's like to be the family disappointment.
            <br />
            I know what it's like to feel hopeless about your financial future.
            <br />
            And I want to help you change that.
          </p>
        </div>

        <p className="text-xl font-bold mb-8 text-center">
          So instead of charging what this information is really worth, I'm charging what you can afford.
          <br />
          9,950 naira is my gift to you.
          <br />
          It's your chance to finally break free from the 95% who struggle.
          <br />
          It's your opportunity to join the 5% who have figured it out.
        </p>
      </section>

      {/* Bonus Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            BUT WAIT... THERE'S MORE
          </h2>

          <p className="text-lg mb-8 text-center">
            When you get "The Ultimate Cash Machine" today, you're not just getting a guide.
            <br />
            You're getting a complete wealth-building system worth over 500k if you bought each component separately:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Ultimate Cash Machine Guide (Worth 200k)</p>
              <p className="text-sm">The complete 9-module system for starting a money-making business from scratch.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The 12 Economic Principles Checklist (Worth 50k)</p>
              <p className="text-sm">Test any business idea in 30 minutes and know if it will work.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Big Boy Positioning Templates (Worth 75k)</p>
              <p className="text-sm">Position yourself as the premium choice in any market.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Irresistible Offer Formula (Worth 100k)</p>
              <p className="text-sm">Create offers that make people feel stupid saying no.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Fearless Pricing Calculator (Worth 50k)</p>
              <p className="text-sm">Price your products for maximum profit without losing sales.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Copywriting Arsenal (Worth 75k)</p>
              <p className="text-sm">9 psychological triggers that turn browsers into buyers.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Quick-Start Checklist (Worth 25k)</p>
              <p className="text-sm">Go from idea to first sale in 30 days or less.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="font-bold">🎯 The Profit Calculator (Worth 25k)</p>
              <p className="text-sm">Know exactly how much money you can make from any idea.</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold mb-2">Total Value: 600k</p>
            <p className="text-2xl font-bold mb-2">Your Investment Today: 9,950 naira</p>
            <p className="text-lg">
              You're getting 600k worth of wealth-building knowledge for less than 10k.
              <br />
              That's a 6000% return on investment before you even implement anything.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          MY BULLETPROOF GUARANTEE
        </h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <p className="text-xl font-bold mb-4">
            I'm so confident that "The Ultimate Cash Machine" will change your financial situation that I'm putting my reputation on the line.
          </p>
          <p className="text-lg">
            Here's my guarantee:
            <br />
            Follow the system in this guide for 30 days.
            <br />
            If you don't see a clear path to making money, I'll refund every naira you paid.
            <br />
            No questions asked.
            <br />
            No forms to fill.
            <br />
            No hoops to jump through.
            <br />
            Just send me a message saying "I want my money back" and I'll refund you immediately.
          </p>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">But here's what I know will happen:</h3>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll start reading and realize this isn't like anything you've seen before.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll start seeing opportunities everywhere.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll start thinking like a business owner instead of a job seeker.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>You'll start taking action instead of making excuses.</span>
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">•</span>
              <span>Within 30 days, you'll wonder how you survived without this knowledge.</span>
            </li>
          </ul>
        </div>

        <p className="text-2xl font-bold text-center mb-8">
          I'm that confident in this system.
          <br />
          Are you confident enough to bet 9,950 naira on yourself?
        </p>
      </section>

      {/* Not For Everyone Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            THIS ISN'T FOR EVERYONE
          </h2>

          <p className="text-lg mb-8 text-center">
            Before you get excited, let me be clear about who this is NOT for:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">❌ People looking for get-rich-quick schemes</h3>
              <p className="text-sm">This requires work and patience.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">❌ People who want guarantees of overnight success</h3>
              <p className="text-sm">Success takes time and effort.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">❌ People who aren't willing to invest in themselves</h3>
              <p className="text-sm">If 9,950 naira seems "too expensive," you're not ready.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg">
              <h3 className="text-lg font-bold mb-2">❌ People who blame others for their problems</h3>
              <p className="text-sm">This is for people who take responsibility.</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg md:col-span-2">
              <h3 className="text-lg font-bold mb-2">❌ People who think they know everything</h3>
              <p className="text-sm">If you're too proud to learn, this isn't for you.</p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-center">This is ONLY for people who are:</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">✅ Serious about changing their financial situation</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">✅ Willing to put in the work required</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">✅ Ready to think differently about money and business</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold">✅ Committed to taking action, not just consuming information</p>
              </div>
              <div className="bg-white p-4 rounded-lg md:col-span-2">
                <p className="font-bold">✅ Ready to join the 5% who have figured it out</p>
              </div>
            </div>
          </div>

          <p className="text-2xl font-bold text-center">
            If that sounds like you, then you're exactly who I wrote this for.
          </p>
        </div>
      </section>

      {/* Scarcity Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          ONLY 200 COPIES AVAILABLE
        </h2>

        <p className="text-lg mb-8">
          Here's something important:
          <br />
          I'm only releasing 200 copies of "The Ultimate Cash Machine."
          <br />
          Not to create fake scarcity.
          <br />
          Not to play marketing games.
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg">
            But because I want to support everyone who gets this guide.
            <br />
            I want to answer your questions when you have them.
            <br />
            I want to celebrate your wins when you get them.
            <br />
            I want to help you overcome obstacles when you face them.
            <br />
            I can't do that for thousands of people.
            <br />
            But I can do it for 200 serious individuals.
          </p>
        </div>

        <p className="text-xl font-bold mb-8 text-center">
          As I'm writing this, 143 copies have already been sold.
          <br />
          That leaves only 57 copies remaining.
          <br />
          When they're gone, they're gone.
          <br />
          I won't be releasing more for at least 6 months.
        </p>

        <p className="text-2xl font-bold text-center text-red-600 mb-8">
          So if you're ready to change your life...
          <br />
          If you're ready to stop being broke...
          <br />
          If you're ready to join the 5% who have figured it out...
          <br />
          You need to act now.
        </p>
      </section>

      {/* Decision Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            THE MOMENT OF TRUTH
          </h2>

          <p className="text-lg mb-8 text-center">
            You have two choices right now.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Choice #1: Close this page and go back to your old life.</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep calculating every naira you spend.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep dodging calls from family members who need help.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep being the family disappointment.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep watching your mates succeed while you struggle.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep living in that area where you can't walk safely at night.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep sharing facilities with 20 other people.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>Keep making excuses for why you can't afford basic things.</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Choice #2: Invest 9,950 naira in your future.</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Learn the same principles successful entrepreneurs use.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Start thinking like a business owner instead of a job seeker.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Begin your transformation from broke to successful.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Start building the respect and recognition you deserve.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Create the life you've always wanted.</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-xl font-bold text-center mb-8">
            The choice is yours.
            <br />
            But choose quickly.
            <br />
            Only 57 copies remain.
            <br />
            And successful people make decisions fast.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          GET YOUR COPY NOW
        </h2>

        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg text-center mb-8">
          <p className="text-4xl font-bold mb-4">₦9,950</p>
          <p className="text-xl mb-6 line-through opacity-75">
            Regular Price: ₦19,900
          </p>
          <Link href="https://selar.com/012403">
          <button className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:shadow-lg transition-shadow cursor-pointer w-full max-w-md">
            GET YOUR COPY NOW
          </button>
          </Link>
        </div>

        <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 my-8 max-w-md mx-auto text-center">
          <p className="text-sm font-semibold text-yellow-800 mb-2">
            ⏰ PRICE INCREASES IN:
          </p>
          <div className="text-2xl font-bold text-red-600">
            2 Days 14 Hours 27 Minutes
          </div>
        </div>

        <ul className="space-y-2 mb-12 max-w-2xl mx-auto">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Remember: You're getting 600k worth of knowledge for 9,950 naira.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Remember: You're backed by my bulletproof guarantee.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Remember: Only 57 copies remain.</span>
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">•</span>
            <span>Remember: This is your chance to finally break free.</span>
          </li>
        </ul>

        <p className="text-xl font-bold text-center mb-8">
          Don't let this opportunity pass you by.
          <br />
          Get your copy now and start building your cash machine today.
        </p>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            FREQUENTLY ANNOYING QUESTIONS
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-2">Q: Is this another get-rich-quick scheme?</h3>
              <p className="text-lg">A: Hell no. If you want magic money spells, go find a babalawo. This is about building real businesses using proven principles.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q: How long before I start making money?</h3>
              <p className="text-lg">A: Depends on how fast you implement. Some see results in weeks, others take months. But if you do nothing, you'll get nothing.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q: Do I need capital to start?</h3>
              <p className="text-lg">A: You need capital to buy this guide (9,950 naira). Many of the business ideas can be started with little to no additional money.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q: Will this work in Nigeria's economy?</h3>
              <p className="text-lg">A: Tough economies create the best opportunities. When everyone's complaining, smart people are building.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q: What if I'm not educated?</h3>
              <p className="text-lg">A: Good. The school system already failed you. Some of Nigeria's richest people dropped out. What matters is willingness to learn.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q: What if I fail?</h3>
              <p className="text-lg">A: What if you don't try? You're already failing by staying where you are. At least this way, you're failing forward.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Q: Is 9,950 naira too expensive?</h3>
              <p className="text-lg">A: If 9,950 naira is too expensive for life-changing information, then you're not ready to change your life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Warning Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          FINAL WARNING
        </h2>

        <p className="text-lg mb-8 text-center">
          In the next 24 hours, you'll either be one step closer to financial freedom, or you'll be in the exact same position you're in right now.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-lg">
            Most people will read this and do nothing.
            <br />
            Most people will make excuses about why they can't afford 9,950 naira.
            <br />
            Most people will stay in the 95% who struggle.
          </p>
        </div>

        <p className="text-2xl font-bold text-center mb-8">
          But you're not most people.
          <br />
          You're ready to join the 5% who have figured it out.
          <br />
          Prove it.
          <br />
          Get your copy now.
        </p>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <p className="font-bold mb-2">P.S. – If you're still reading this, you're serious about changing your life. But reading won't make you money. ACTING will. Only 57 copies remain. Don't be the person who waits and finds them all gone. Get your copy now while you still can.</p>
          <p className="font-bold mb-2">P.P.S. – Remember, you're not just buying a guide. You're buying respect from your family. You're buying freedom from financial worry. You're buying the ability to sleep peacefully. 9,950 naira is a small price for all that.</p>
          <p className="font-bold">P.P.P.S. – Still not convinced? Then you're not ready. Come back when you're tired of being broke. But don't blame me when you're in the same position next year while others are living their best lives. Choose wisely.</p>
        </div>
      </section>
    </main>
  )
}