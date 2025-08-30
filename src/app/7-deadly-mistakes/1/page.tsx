/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

// app/page.js
export default function SalesLetter() {


    const paymentLink = "https://selar.com/the-alert-manual"


    return (
      <div className="bg-white text-gray-900 font-sans leading-relaxed max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center my-12">
          <h1 className="text-3xl font-bold mb-6">
            STOP! Before You Waste Another ₦50,000 on Another "Get Rich Quick" Business Course That Will Leave You More Broke Than When You Started...
          </h1>
          <h2 className="text-2xl font-bold text-red-600">
            A Brutally Honest WARNING From Someone Who Actually Gives a Damn About Your Financial Future
          </h2>
        </div>
        
        <p className="font-bold mb-6">Dear Future Business Owner,</p>
        
        <p className="mb-6">
          My name is Umar, and I'm about to save you from making the most expensive mistake of your life.
        </p>
        
        <p className="mb-6">
          See, every day I watch smart, hardworking Nigerians like you get SCAMMED by so-called "business gurus" selling dreams wrapped in fancy packaging.
        </p>
        
        <p className="mb-6">
          They promise you'll be making millions in 30 days. They show you fake screenshots of bank accounts. They flood your WhatsApp with "testimonials" from people who don't even exist.
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            And you know what happens next?
          </p>
        </div>
        
        <p className="mb-6">
          You spend your hard-earned money. You follow their "proven system." And six months later, you're deeper in debt, more frustrated, and convinced that "business just isn't for you."
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But here's the truth they don't want you to know:
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            It's NOT your fault. You're not stupid. You're not unlucky.
          </p>
          <p className="font-bold text-xl">
            You've been LIED to.
          </p>
        </div>
        
        <p className="mb-6">
          And I'm so angry about what these predators are doing to good people like you that I've decided to blow the whistle on this entire industry.
        </p>
        
        <p className="mb-6">
          But first, let me ask you something...
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            How would your life change if you could build a business that generates ₦200,000, ₦500,000, or even ₦1,000,000 every single month?
          </p>
        </div>
        
        <p className="mb-6">
          Imagine never having to beg for salary advances again...
        </p>
        
        <p className="mb-6">
          Picture yourself driving past your former colleagues at the bus stop while you're in your own car...
        </p>
        
        <p className="mb-6">
          Think about the look on your family's faces when you hand them real money - not promises, not dreams - REAL MONEY you earned from your own business...
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            That feeling of RESPECT. Of PRIDE. Of finally being the provider, the success story, the one everyone looks up to.
          </p>
        </div>
        
        <p className="mb-6">
          That's not just a dream. That's what happens when you avoid the 7 deadly traps that kill 97% of new businesses and follow the proven system that the other 3% use to get rich.
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But you'll NEVER get there if you keep falling for the lies the "guru" industry keeps feeding you.
          </p>
        </div>
        
        <p className="mb-6">
          So before you spend another naira on another course, another seminar, another "breakthrough system," let me show you exactly what to look out for...
        </p>
        
        <hr className="my-8 border-gray-300" />
        
        {/* Section 1 */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-6">
            WARNING: Here's How to Spot a Business Scammer From 100 Miles Away
          </h2>
          <p className="text-lg">
            (And Why You Should RUN if You See Any of These Red Flags)
          </p>
        </div>
        
        <p className="mb-6">
          After studying this industry for 360 days, I've discovered that 90% of business courses are designed to make the seller rich - not you. Here's how to spot them:
        </p>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-red-700 mb-2">🚩 RED FLAG #1: They Promise Instant Results</p>
          <p className="italic mb-4">"Make ₦1 Million in Your First Month!" "30 Days to Financial Freedom!" "Start Making Money Tonight!"</p>
          <p>Why don't they tell you that every successful business takes time to build? Why do they lie about overnight success when they know damn well it took them YEARS to make real money?</p>
        </div>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-red-700 mb-2">🚩 RED FLAG #2: They Show Fake Bank Screenshots</p>
          <p>Ever notice how these "millionaire mentors" always have perfectly round numbers in their accounts? ₦2,000,000.00 exactly. No kobo. No cents.</p>
          <p>Why don't they show you the real bank statements with transaction details? Why do they always screenshot at exactly 12:00 PM with full battery? Why don't they show the withdrawals, the expenses, the taxes?</p>
        </div>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-red-700 mb-2">🚩 RED FLAG #3: They Refuse to Give Refunds</p>
          <p className="italic mb-4">"All sales are final!" "Digital products can't be returned!" "You agreed to the terms!"</p>
          <p>Why don't they guarantee their products if they're so confident they work? Why are they so desperate to keep your money even if you're not satisfied?</p>
        </div>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-red-700 mb-2">🚩 RED FLAG #4: They Use Fake Testimonials</p>
          <p>Those video testimonials with people claiming they made millions? Half of them are hired actors from Fiverr. The other half are fake entirely.</p>
          <p>Why don't they give you contact details so you can verify these testimonials? Why do they always look like stock photos? Why don't they show real businesses with real customers?</p>
        </div>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-red-700 mb-2">🚩 RED FLAG #5: They Teach Outdated Methods</p>
          <p>They're still teaching you to "dominate Google" with SEO tricks that stopped working in 2015. Or "crack the Facebook algorithm" with methods that will get your account banned.</p>
          <p>Why don't they tell you these methods are dead? Why do they keep selling strategies that worked 10 years ago? Why don't they update their content with what actually works TODAY?</p>
        </div>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-red-700 mb-2">🚩 RED FLAG #6: They Have No Real Business Experience</p>
          <p>Dig deep enough and you'll discover their only business is selling courses about business. They've never actually built a real company, served real customers, or solved real problems.</p>
          <p>Why don't they show you their actual businesses? Why can't they name their customers? Why don't they have any proof of real business success beyond course sales?</p>
        </div>
        
        <p className="mb-6">
          Look, I could go on and on about the scumbags in this industry. But you didn't come here to listen to me rant about con artists.
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            You came here because you want to build REAL wealth. You want a business that actually WORKS.
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            And that's exactly what I'm going to give you.
          </p>
        </div>
        
        <hr className="my-8 border-gray-300" />
        
        {/* Section 2 */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-6">
            The Shocking Truth About Why 97% of New Nigerian Businesses Die Within 6 Months
          </h2>
          <p className="text-lg">
            (And the 7 Specific Mistakes That Kill Them)
          </p>
        </div>
        
        <p className="mb-6">
          While the scammers are busy selling pipe dreams, I spent 360 days studying REAL successful Nigerian entrepreneurs. Not the fake gurus on Instagram. Not the course sellers. REAL business owners building REAL companies.
        </p>
        
        <p className="mb-6">
          Here's what I discovered:
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            The ones who succeed aren't smarter than you. They aren't luckier. They don't have secret connections or magic formulas.
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            They simply avoid 7 specific mistakes that kill everyone else.
          </p>
        </div>
        
        <p className="mb-6">
          These aren't small mistakes. These are business-DESTROYING errors that will drain your bank account, crush your dreams, and leave you questioning whether you're cut out for entrepreneurship.
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But here's the beautiful part:
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Once you know what these mistakes are, they're completely avoidable.
          </p>
        </div>
        
        <p className="mb-6">
          It's like having a map of all the landmines before you walk through the minefield.
        </p>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #1: Starting a Business Because "I Need to Make Money"</p>
          <p className="mb-4">This is how most business failures begin:</p>
          <p className="italic mb-4">"I'm tired of this job. I need to make money. Let me start a business."</p>
          <p className="mb-4">Then they look around and think: "People always need clothes... let me start selling clothes." Or "Food business is always profitable... let me open a restaurant."</p>
          <p className="font-bold mb-4">Here's why this kills businesses:</p>
          <p className="mb-4">You're not starting a business - you're starting a expensive hobby that will eat your savings.</p>
          <p className="mb-4">Successful businesses solve problems. They don't exist because the owner "needs money." They exist because customers desperately need what they're offering.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p>They find a STARVING CROWD first. People who are already spending money to solve a problem, but the current solutions suck.</p>
          <p>Then they create a better solution.</p>
          <p className="italic">Example: Instead of "let me sell clothes," they think "office workers in Ikeja struggle to find quality shirts that don't fade after 3 washes - let me solve that specific problem."</p>
          <p className="font-bold mt-4">See the difference?</p>
        </div>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #2: "I Have a Great Idea, Let Me Invest Everything"</p>
          <p className="mb-4">You've found a problem people need solved. You're excited. You think: "This is it! This is my breakthrough!"</p>
          <p className="mb-4">So you:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Rent a shop</li>
            <li>Buy inventory worth ₦500k</li>
            <li>Print business cards and banners</li>
            <li>Launch with a big announcement</li>
          </ul>
          <p className="mb-4">Then... silence. A few sales here and there, mostly from family and friends.</p>
          <p className="font-bold mb-4">Why this kills businesses:</p>
          <p className="mb-4">You're betting your entire savings on an ASSUMPTION. You THINK people want your solution. But you haven't PROVEN it yet.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p className="mb-4">They test small first. They start with the cheapest, fastest version of their idea and see if people actually buy.</p>
          <p className="italic">Example: Instead of opening a full restaurant, they start by selling just rice and stew from home to 10 neighbors. If it sells fast and they keep asking for more, THEN they think about expanding.</p>
          <p className="font-bold mt-4">The successful ones prove the concept before they invest big money.</p>
        </div>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #3: "Now That I'm Making Sales, I Can Relax"</p>
          <p className="mb-4">You've proven your concept. You're making sales. You think: "Finally! I've made it. Time to enjoy the fruits of my labor."</p>
          <p className="font-bold mb-4">Big mistake.</p>
          <p className="font-bold mb-4">Why this kills businesses:</p>
          <p className="mb-4">Two reasons:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>If your business is working, competitors are watching. They'll copy what you're doing and try to steal your customers.</li>
            <li>Your early success means you've found something valuable. Other smart people will notice and start competing with you.</li>
          </ol>
          <p className="mb-4">If you relax, they'll overtake you.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p className="mb-4">They immediately start building competitive advantages. They use strategies like:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The "David & Goliath" approach to beat bigger competitors</li>
            <li>"Mental real estate" techniques that make customers see them as the only option</li>
            <li>Building customer loyalty systems that make switching painful</li>
          </ul>
          <p>They never stop moving, never stop improving.</p>
        </div>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #4: Copying "Big Brand" Advertising</p>
          <p className="mb-4">You see big companies doing "brand awareness" ads:</p>
          <p className="italic mb-4">"Coca-Cola: Open Happiness" "MTN: Everywhere You Go"</p>
          <p className="mb-4">So you think: "Let me do the same. Let me build my brand."</p>
          <p className="mb-4">You create ads saying: "Umar's Clothing: Quality You Can Trust" or "Best Food in Lagos!"</p>
          <p className="font-bold mb-4">Why this kills small businesses:</p>
          <p className="mb-4">Big brands have millions to waste on "awareness." You don't. Every naira you spend on advertising must bring back money immediately, or you'll go broke.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p className="mb-4">They use DIRECT RESPONSE ADVERTISING. Every ad they create is designed to generate sales immediately.</p>
          <p className="mb-4">Instead of "Quality You Can Trust," they write:</p>
          <p className="italic mb-4">"Office Workers: Get 3 Fade-Proof Shirts Delivered to Your Office Tomorrow or Pay Nothing. Limited Stock - Order in the Next 24 Hours."</p>
          <p className="mb-4">See the difference? One builds awareness (expensive). The other generates sales (profitable).</p>
          <p>They master the 8 Unbreakable Laws of Direct Response Marketing that turn advertising spend into immediate profit.</p>
        </div>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #5: Relying Only on Paid Advertising</p>
          <p className="mb-4">You've mastered direct response advertising. Your ads are profitable. But you're spending ₦50,000 monthly on ads to make ₦200,000 in sales.</p>
          <p className="mb-4">You think: "This is good. I'm making profit."</p>
          <p className="font-bold mb-4">But here's the problem:</p>
          <p className="mb-4">What happens when Facebook increases ad costs? What happens when your competitor outbids you? What happens when the platform changes their algorithm?</p>
          <p className="mb-4">Your business is at their mercy.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p className="mb-4">They build an "Unpaid Sales Army." They turn their customers into walking, talking advertisements who promote their business everywhere for FREE.</p>
          <p className="mb-4">Their customers tell friends, family, colleagues about their amazing experience. Each customer brings 3-5 new customers without any advertising spend.</p>
          <p className="mb-4">This creates two income streams:</p>
          <ol className="list-decimal pl-6 mb-4">
            <li>Paid advertising (immediate)</li>
            <li>Word-of-mouth referrals (free and growing)</li>
          </ol>
          <p>The combination makes them unstoppable.</p>
        </div>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #6: Racing to the Bottom with Pricing</p>
          <p className="mb-4">Competition appears. Someone starts selling similar products for less money. You panic and think: "Let me reduce my price to stay competitive."</p>
          <p className="mb-4">So you drop from ₦5,000 to ₦4,500. They drop to ₦4,000. You drop to ₦3,500.</p>
          <p className="mb-4">Soon you're making ₦500 profit per sale instead of ₦2,000.</p>
          <p className="font-bold mb-4">Why this kills businesses:</p>
          <p className="mb-4">You're in a race to the bottom. Eventually, you'll have no profit left. You'll be working for free while your business slowly dies.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p className="mb-4">They never compete on price. They compete on VALUE.</p>
          <p className="mb-4">Instead of dropping prices, they increase value through:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Better guarantees</li>
            <li>Faster delivery</li>
            <li>Superior customer service</li>
            <li>Additional bonuses</li>
            <li>Unique features nobody else offers</li>
          </ul>
          <p className="mb-4">They make their offer so valuable that price becomes irrelevant.</p>
          <p>They understand the psychology of profitable pricing and use it to charge premium prices while customers feel like they're getting a bargain.</p>
        </div>
        
        <div className="bg-yellow-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">DEADLY MISTAKE #7: Perfect Planning Paralysis</p>
          <p className="mb-4">You've learned everything. You know about starving crowds, testing small, competitive advantages, direct response advertising, word-of-mouth systems, and value-based pricing.</p>
          <p className="mb-4">You're excited. You're motivated.</p>
          <p className="mb-4">Then you say: "Let me plan this properly first. Let me write a detailed business plan. Let me save more money. Let me research a bit more. I'll start next month."</p>
          <p className="font-bold mb-4">This is the deadliest mistake of all.</p>
          <p className="font-bold mb-4">Why this kills more businesses than all others combined:</p>
          <p className="mb-4">Because "next month" becomes "next year." "Let me plan more" becomes "let me learn more." "When I'm ready" becomes "never."</p>
          <p className="mb-4">While you're planning, someone else is DOING. They're testing, failing, learning, and improving. By the time you "feel ready," they've already captured your market.</p>
          <p className="font-bold mb-4">What the 3% do instead:</p>
          <p className="mb-4">They start IMMEDIATELY with the smallest, cheapest test version of their idea. They learn by doing, not by planning.</p>
          <p className="mb-4">They follow the 48-hour rule: Within 48 hours of learning something new, they test it in the real world.</p>
          <p>They know that imperfect action beats perfect inaction every single time.</p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Now here's what really pisses me off...
          </p>
        </div>
        
        <p className="mb-6">
          These mistakes are SO EASY to avoid once you know about them. Yet I see brilliant, hardworking people like you making them every single day.
        </p>
        
        <p className="mb-6">
          Why?
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Because nobody is teaching the REAL strategies. The fake gurus are too busy selling fantasies. The real successful entrepreneurs are too busy building their businesses to teach.
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            That's about to change.
          </p>
        </div>
        
        <hr className="my-8 border-gray-300" />
        
        {/* Section 3 */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-6">
            How I Cracked the Code on What Actually Works in Nigerian Business
          </h2>
          <p className="text-lg">
            (And Why This Information Has Never Been Available Before)
          </p>
        </div>
        
        <p className="mb-6">
          Let me tell you a story that will change everything you think you know about business success...
        </p>
        
        <p className="mb-6">
          Three years ago, I was just like you. Tired of my job. Tired of struggling financially. Tired of watching other people succeed while I stayed stuck.
        </p>
        
        <p className="mb-6">
          I tried everything:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Bought course after course (wasted over ₦200,000)</li>
          <li>Attended seminars and workshops (more wasted money)</li>
          <li>Started multiple businesses that failed miserably</li>
          <li>Lost money, time, and nearly lost hope</li>
        </ul>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Then I made a decision that changed everything.
          </p>
        </div>
        
        <p className="mb-6">
          Instead of buying more courses from more fake gurus, I decided to study REAL successful entrepreneurs. Not the ones selling courses. Not the Instagram showoffs. REAL business builders who started with nothing and built something amazing.
        </p>
        
        <p className="mb-6">
          For 360 days, I became obsessed.
        </p>
        
        <p className="mb-6">
          I studied over 200 successful Nigerian business owners. I analyzed their strategies. I interviewed them. I documented their exact methods.
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            And I discovered something shocking...
          </p>
        </div>
        
        <p className="mb-6">
          They ALL avoided the same 7 deadly mistakes. They ALL used the same core strategies. They ALL followed a similar blueprint - but nobody was teaching it.
        </p>
        
        <p className="mb-6">
          The real strategies were hidden in plain sight.
        </p>
        
        <p className="mb-6">
          While everyone else was chasing shiny objects and get-rich-quick schemes, these quiet millionaires were using time-tested methods that work in ANY economy, in ANY industry, with ANY amount of starting capital.
        </p>
        
        <p className="mb-6">
          These strategies are so powerful that:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>They work even if you have no experience (because they're based on human psychology, not technical skills)</li>
          <li>They work even if you have no money (because they focus on testing small before investing big)</li>
          <li>They work even if you have no connections (because they teach you to build relationships as you grow)</li>
          <li>They work even during economic recession (because they focus on solving real problems people desperately need solved)</li>
        </ul>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But here's the problem:
          </p>
        </div>
        
        <p className="mb-6">
          None of these successful entrepreneurs were teaching their methods. They were too busy making money to create courses. The only people teaching "business" were the fake gurus who had never built real businesses.
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            That's when I realized my mission:
          </p>
        </div>
        
        <p className="mb-6">
          I had to be the one to expose these real strategies. I had to create the resource I wish I had when I was starting out. I had to build the bridge between those who know what works and those who desperately need to learn it.
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            The result?
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            A complete business survival system that reveals every strategy, every technique, every secret these successful entrepreneurs use to build wealth while everyone else fails.
          </p>
        </div>
        
        <hr className="my-8 border-gray-300" />
        
        {/* Section 4 */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-6">
            Introducing: The ALERT Manual
          </h2>
          <p className="text-lg">
            The Only Business Guide Written by Someone Who Actually Studied Real Successful Entrepreneurs (Not Fake Gurus)
          </p>
        </div>
        
        <p className="mb-6">
          This isn't another "make money online" course created by someone whose only success is selling courses.
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            This is the distilled wisdom of 200+ REAL successful Nigerian entrepreneurs who built actual businesses, served actual customers, and created actual wealth.
          </p>
        </div>
        
        <p className="text-center mb-6">
          Inside The ALERT Manual, you'll discover:
        </p>
        
        <ul className="my-6 space-y-4">
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The "Starving Crowd" Detection System</span> - How to find groups of people already spending money on solutions to problems you can solve better (Page 17)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The ₦5,000 Business Validation Method</span> - Test any business idea in 48 hours without risking your life savings (Page 25)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The "David vs Goliath" Strategy</span> - How small businesses crush big competitors using psychological warfare (Page 45)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The 8 Unbreakable Laws of Direct Response Marketing</span> - Turn every naira spent on advertising into immediate sales (Page 51)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The "Unpaid Sales Army" System</span> - Get customers promoting your business everywhere for FREE like they're your paid ambassadors (Page 78)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The Profitable Pricing Psychology</span> - Charge premium prices while customers feel like they're getting a bargain (Page 87)
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-green-600 font-bold mr-2">✅</span>
            <span>
              <span className="font-bold">The 48-Hour Action Framework</span> - Stop planning and start profiting with immediate implementation strategies (Page 104)
            </span>
          </li>
        </ul>
        
        <p className="mb-6">
          Plus real case studies, templates, worksheets, and step-by-step implementation guides for everything.
        </p>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But here's what makes this different from every other business resource you've seen:
          </p>
        </div>
        
        <div className="bg-green-100 p-8 my-12 text-center rounded-lg">
          <p className="font-bold text-xl mb-4">
            This manual comes with my "Business Survival Guarantee":
          </p>
          <p className="font-bold text-xl">
            Use the strategies inside The ALERT Manual for 90 days. If you don't avoid at least 3 of the 7 deadly mistakes and see measurable progress in your business, I'll refund every naira you paid. No questions asked. No forms to fill. No hoops to jump through.
          </p>
        </div>
        
        <p className="text-center mb-6">
          Why am I so confident?
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Because these strategies have been tested by 200+ successful entrepreneurs. They work. Period.
          </p>
        </div>
        
        <p className="text-center mb-6">
          But wait... there's something else you need to know.
        </p>
        
        <hr className="my-8 border-gray-300" />
        
        {/* Section 5 */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-6">
            Why I'm Practically Giving This Away (And Why This Offer Will Disappear Forever in 24 Hours)
          </h2>
        </div>
        
        <p className="mb-6">
          Here's the truth:
        </p>
        
        <p className="mb-6">
          I could easily charge ₦50,000 for this manual and it would still be the best investment any aspiring entrepreneur could make.
        </p>
        
        <p className="mb-6">
          Think about it:
        </p>
        
        <ul className="list-disc pl-6 mb-6">
          <li>Business consultants charge ₦100,000+ just for a few hours of advice</li>
          <li>University MBA programs cost ₦2,000,000+ and teach mostly outdated theory</li>
          <li>The average failed business loses ₦500,000+ before the owner gives up</li>
          <li>One avoided mistake could save you ₦100,000 or more</li>
        </ul>
        
        <p className="text-center mb-6">
          So why am I only charging ₦3,750?
        </p>
        
        <p className="mb-6">
          Two reasons:
        </p>
        
        <p className="font-bold mb-4">Reason #1: I'm on a mission.</p>
        <p className="mb-6">
          I'm sick of watching good people get scammed by fake gurus. I'm tired of seeing brilliant entrepreneurs fail because they're following bad advice. I want to level the playing field.
        </p>
        
        <p className="font-bold mb-4">Reason #2: I only want to work with serious people.</p>
        <p className="mb-6">
          Free information gets ignored. Cheap information gets downloaded but never implemented. I've priced this at exactly the right level where only serious action-takers will invest, but it won't break anyone's bank.
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But here's the critical part:
          </p>
        </div>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            This offer disappears in exactly 24 hours.
          </p>
        </div>
        
        <p className="text-center mb-6">
          Why?
        </p>
        
        <p className="mb-6">
          Because I can only work with a limited number of entrepreneurs at once. Once too many people start using these strategies in the same markets, they become less effective.
        </p>
        
        <p className="mb-6">
          I'm limiting this to the first 100 serious business owners who take action. After that, The ALERT Manual goes to its regular price of ₦15,000 (if I decide to offer it again at all).
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Plus, I'm throwing in these exclusive bonuses:
          </p>
        </div>
        
        <div className="bg-yellow-100 p-6 my-8 rounded-lg">
          <p className="font-bold text-lg mb-4">🎁 BONUS #1: The Nigerian Market Opportunity Database (Worth ₦10,000)</p>
          <p>A curated list of 6 proven business opportunities specifically researched for the Nigerian market</p>
          
          <p className="font-bold text-lg mb-4 mt-6">🎁 BONUS #2: Direct Response Ad Templates (Worth ₦8,000)</p>
          <p>Copy-and-paste ad templates you can customize for any business in any industry</p>
          
          {/* <p className="font-bold text-lg mb-4 mt-6">🎁 BONUS #3: The Competitive Intelligence Toolkit (Worth ₦7,000)</p>
          <p>Step-by-step guide to analyzing your competitors and finding their weaknesses</p> */}
        </div>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Total Value: ₦45,000
          </p>
          <p className="font-bold text-xl">
            Your Investment Today: Only ₦3,750
          </p>
        </div>
        
        <hr className="my-8 border-gray-300" />
        
        {/* Section 6 */}
        <div className="text-center my-12">
          <h2 className="text-2xl font-bold mb-6">
            Here's What Happens Next (Choose Your Path Wisely)
          </h2>
        </div>
        
        <p className="mb-6">
          You have two choices:
        </p>
        
        <div className="bg-red-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">CHOICE #1: Close this page and keep doing what you've been doing.</p>
          <p>Keep buying courses from fake gurus. Keep falling for get-rich-quick schemes. Keep making the same mistakes that kill 97% of businesses.</p>
          <p className="font-bold mt-4">Result: In one year, you'll be in exactly the same place you are now. Maybe worse.</p>
        </div>
        
        <div className="bg-green-50 p-6 my-6 rounded-lg">
          <p className="font-bold text-lg mb-4">CHOICE #2: Invest ₦3,750 in your business education right now.</p>
          <p>Get the complete system that successful entrepreneurs use. Avoid all 7 deadly mistakes. Build a business that actually works.</p>
          <p className="font-bold mt-4">Result: In one year, you'll be running a profitable business that gives you the lifestyle, respect, and financial freedom you deserve.</p>
        </div>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            The choice is yours.
          </p>
        </div>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            But remember: This opportunity expires in 24 hours. After that, The ALERT Manual is gone forever.
          </p>
        </div>
        
        <div className="border-2 border-blue-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Your successful business is waiting on the other side of this decision.
          </p>
        </div>
        
        {/* CTA Section */}
        <div className="text-center my-12 p-8 bg-gray-100 rounded-lg">
        <Link href={paymentLink}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded mt-4 text-lg">
            GET THE ALERT MANUAL NOW - ₦3,750
          </button>
          </Link>
        </div>
        
        <p className="text-center mb-6">
          Click the button above, complete your secure payment, and get instant access to everything.
        </p>
        
        <p className="text-center mb-6">
          You'll be reading the manual within 5 minutes. You could be implementing your first strategy within 48 hours. You could be seeing results within 30 days.
        </p>
        
        <div className="border-2 border-red-500 p-6 my-8 text-center">
          <p className="font-bold text-xl">
            Or you could keep planning, keep researching, keep "getting ready"... while someone else takes action and captures the success that should have been yours.
          </p>
        </div>
        
        <p className="text-center mb-6">
          What's it going to be?
        </p>
        
        <p className="text-center mb-6">
          Your friend in business success,
        </p>
        
        <p className="text-center font-bold">
          Umar
        </p>
        
        <hr className="my-8 border-gray-300" />
        
        {/* P.S. Section */}
        <div className="border-2 border-gray-400 p-6 my-12">
          <p className="font-bold text-xl mb-4 text-center">P.S.</p>
          <p className="mb-4">Still thinking about it? Listen, I understand. You've probably been burned by fake gurus before. But ask yourself this: What's the real cost of continuing to make the same mistakes that kill businesses? What's the cost of staying stuck where you are for another year?</p>
          <p className="mb-4">Compare that to ₦3,750 for a proven system that could change your life forever. It's not even a choice.</p>
        </div>
        
        {/* P.P.S. Section */}
        <div className="border-2 border-gray-400 p-6 my-12">
          <p className="font-bold text-xl mb-4 text-center">P.P.S.</p>
          <p className="mb-4">Remember my guarantee: Use these strategies for 90 days. If you don't see measurable progress, get every naira back. You have nothing to lose except the life of financial struggle you're living right now.</p>
        </div>
        
        {/* P.P.P.S. Section */}
        <div className="border-2 border-gray-400 p-6 my-12">
          <p className="font-bold text-xl mb-4 text-center">P.P.P.S.</p>
          <p className="mb-4">In 24 hours, this page disappears forever. Don't be the person who finds this page again in 6 months, desperate for the solution, only to discover the opportunity is gone. Click the button now.</p>
        </div>
        
        {/* Final CTA Section */}
        <div className="text-center my-12 p-8 bg-gray-100 rounded-lg">
        <Link href={paymentLink}>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded mt-4 text-lg">
            YES! Give Me The ALERT Manual Now - ₦3,750
          </button>
          </Link>
        </div>
      </div>
    );
  }