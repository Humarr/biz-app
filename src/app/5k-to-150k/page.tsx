/* eslint-disable react/no-unescaped-entities */
// 'use client';

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
        <h1 className="text-2xl md:text-4xl font-bold mb-4">How ANY Nigerian Student Can Make An Extra ₦100k To ₦300k Consistently EVERY Month Even If You Currently Don't Have ANY Skill</h1>
        
        <div className="bg-yellow-400 text-green-900 p-4 rounded-lg max-w-3xl mx-auto mt-6 border-2 border-yellow-500">
          <h2 className="text-xl md:text-2xl font-bold mb-2">The Complete Business Blueprint That Transforms Broke Students Into Cash-Generating Entrepreneurs</h2>
          <p className="mt-2">And they have the ultimate power to make you live comfortably in school and after graduation - even if you're starting from zero - by adding an extra ₦100k to ₦500k (or more) to your monthly income as soon as you start putting them into fast action!</p>
          <p className="mt-2 font-bold">In fact, it doesn't matter if you're a fresher, 200 level student, 300 level student, or ANYONE, as long as you want to make money consistently and secure your life before graduation!</p>
          <div className="bg-red-100 text-red-800 p-3 rounded mt-4 border border-red-300">
            <p className="font-bold">*(Only 200 copies of this training will be released this month. 47 students got access yesterday.)*</p>
          </div>
        </div>
      </header>



      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Author Section */}
        <div className="border-l-4 border-green-600 pl-4 my-8">
          <p className="text-sm uppercase tracking-wider text-gray-500">A Special Life-changing Message from:</p>
          <p className="italic text-gray-700">An ex-broke student who went from surviving on ₦200 daily feeding to building businesses that generate ₦500k+ monthly...</p>
          <p className="italic text-gray-700">...Who spent his first few years in school thinking academics was the only path to success...</p>
          <p className="italic text-gray-700">...But now runs multiple profitable businesses generating consistent monthly income, and is currently building a tech startup company.</p>
        </div>

        {/* Personal Story Section */}
        <div className="bg-blue-50 p-6 rounded-lg my-8 border border-blue-200">
          <p className="text-center italic mb-4">From 2021 to 2025, I've successfully learned from the world's best business minds and built profitable businesses while still facing criticism from those who said "focus on your studies so you can get a good job."</p>
          <p className="text-center font-bold text-blue-800">"How did a student who once calculated whether to buy bread or noodles for dinner go from broke to building businesses that generate serious monthly income?"</p>
        </div>

        {/* Dear Student Section */}
        <div className="my-12">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Dear Struggling Student,</h2>
          
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="mb-4">Let me paint a picture so accurate, you'll wonder if I've been watching your life:</p>
            
            <div className="bg-white p-6 rounded-lg border border-gray-300 my-6">
              <p className="font-bold text-red-600">It's 11:47 PM.</p>
              <p className="mt-2">You're lying on your hostel bed, phone at 23% battery (because NEPA took light again and you couldn't charge). Your stomach is making those embarrassing rumbling sounds, but the "pure water and groundnut" dinner you had at 6 PM is all your budget could handle today.</p>
              
              <p className="mt-4">Your phone buzzes. WhatsApp message from Mum: <span className="italic">"How are you? Hope you're eating well? We'll send something small by weekend."</span></p>
              
              <p className="mt-4">But you know "something small" means she's about to borrow again from Uncle Tunde, who'll give her that look... the one that says <span className="italic">"Why is this boy still collecting money? Didn't we pay school fees already?"</span></p>
              
              <p className="mt-4">So you type back: <span className="italic">"I'm fine, Mum. Don't worry about money. Focus on yourself."</span></p>
              
              <p className="mt-4 font-bold text-red-600">Lies.</p>
              
              <p className="mt-4 font-bold">You're not fine.</p>
              
              <p className="mt-2">You're tired of doing that weird calculation where you figure out if you can afford lunch AND transport back to hostel, or if you should just trek the 40 minutes so you can eat something.</p>
              
              <p className="mt-2">You're tired of pretending you're not hungry when your coursemates are deciding between KFC and Chicken Republic for lunch.</p>
              
              <p className="mt-2">You're tired of that sinking feeling when they're planning to go out Friday night and you make up some excuse about "reading for tomorrow's test" because you can't afford the ₦3,000 for drinks and transport.</p>
              
              <p className="mt-4 font-bold">But here's the part that really stings:</p>
              
              <p className="mt-2">You see that your coursemate—the one who used to be the "dull" one in class—just posted a story on SnapChat showing off new sneakers. Air Force 1s. ₦45,000 sneakers.</p>
              
              <p className="mt-2">And you know he didn't get them from home because his parents struggled just like yours.</p>
              
              <p className="mt-2 font-bold">So how the hell is he flexing while you're here sharing one pack of indomie between you and your roommate?</p>
              
              <p className="mt-4 font-bold">The truth hits you at 2 AM when you can't sleep because of hunger pangs:</p>
              
              <p className="mt-2 italic">"I'm smart. I get good grades. But somehow, I'm still broke. And it's not getting better—it's getting worse."</p>
              
              <p className="mt-4">You start wondering if maybe your parents were wrong. Maybe education isn't the "way out of poverty" they promised. Maybe the whole "go to school, get good grades, get a good job" thing is just a beautiful lie they tell poor people to keep them hopeful.</p>
              
              <p className="mt-4 font-bold">And the scary part?</p>
              
              <p className="mt-2">You're starting to think maybe you'll graduate and still be broke. Maybe you'll be one of those graduates walking around Lagos with certificates, begging for ₦80,000 monthly jobs, while your coursemate—the one with the Air Force 1s—is running a business and making more in a month than most "good jobs" pay in six months.</p>
              
              <p className="mt-4 font-bold">If any part of this story felt like I was reading your diary...</p>
              
              <p className="mt-2">What I'm about to reveal will shock you.</p>
              
              <p className="mt-2">You may not want to hear it at first, but deep down, you'll realize - without this knowledge...</p>
              
              <p className="mt-2 font-bold">Your nightmare of graduating broke, joining the queue of unemployed graduates, and disappointing everyone who believed in you... will become your reality.</p>
            </div>
          </div>
        </div>

        {/* Brutal Truth Section */}
        <div className="my-12 bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">The Brutal Truth About Why Smart Students Stay Broke</h2>
          
          <p className="mb-4">Here's what nobody told you:</p>
          
          <p className="font-bold text-xl text-red-700 mb-4">Intelligence and good grades don't create wealth. They never have.</p>
          
          <p className="mb-4">If they did, every first-class graduate would be rich, and every "dull" student would be poor.</p>
          
          <p className="mb-4 font-bold">But that's not what you see, is it?</p>
          
          <p className="mb-4">You see average students building businesses while brilliant students are googling "how to write a CV" in final year.</p>
          
          <p className="mb-4">You see course mates who barely passed their first year exams posting pictures from Dubai while you're calculating bus fare.</p>
          
          <div className="bg-white p-4 rounded-lg my-6 border border-red-300">
            <p className="font-bold text-red-700 mb-2">So what's the real difference?</p>
            <p className="mb-4">The students making money have developed what I call <span className="font-bold">"The Gap Recognition System"</span>—the ability to spot profitable opportunities that others walk past every single day.</p>
            <p className="font-bold text-green-700">It's not about being smart. It's about being aware.</p>
          </div>
          
          <p className="font-bold mb-2">Let me show you what I mean:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-bold text-yellow-800 mb-2">While you see:</p>
              <p className="italic">"The commercial bus is always crowded and uncomfortable."</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-800 mb-2">They see:</p>
              <p className="italic">"Students will pay extra for comfortable, reliable transport. I can create a WhatsApp group connecting students with clean, safe vehicles at premium rates."</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-bold text-yellow-800 mb-2">While you see:</p>
              <p className="italic">"Food in the cafeteria is expensive and tasteless."</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-800 mb-2">They see:</p>
              <p className="italic">"I can connect students with local food vendors who cook better meals at lower prices. I'll take ₦100 commission per order."</p>
            </div>
            
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="font-bold text-yellow-800 mb-2">While you see:</p>
              <p className="italic">"My coursemates are always asking for help with assignments."</p>
            </div>
            
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="font-bold text-green-800 mb-2">They see:</p>
              <p className="italic">"I can create a system where smart students help struggling students for ₦2,000 per assignment. I'll take ₦500 per transaction as the middleman."</p>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-800">The pattern?</p>
            <p className="mt-2">They don't see problems. They see <span className="font-bold">profit opportunities</span>.</p>
            <p className="mt-2 font-bold">And once you develop this mental shift—once you install this "gap recognition system" in your brain—you can never go back to being broke.</p>
            <p className="mt-2">Because you'll start seeing money-making opportunities everywhere you look.</p>
          </div>
        </div>

        {/* Opportunity Recognition Section */}
        <div className="my-12 bg-green-50 p-6 rounded-lg border border-green-200">
          <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">The "Opportunity Recognition System" That Changes Everything</h2>
          
          <p className="mb-4 font-bold">Here's the brutal reality:</p>
          <p className="mb-4">Right now, you're surrounded by dozens of ways to make ₦50,000 to ₦200,000 monthly, but your brain isn't trained to see them.</p>
          
          <p className="mb-4">It's like having perfect eyesight but being colorblind. You can see everything clearly, but you're missing the most important details.</p>
          
          <div className="bg-white p-4 rounded-lg my-6 border border-green-300">
            <p className="font-bold mb-2">For example:</p>
            <p className="mb-4">Every day, you complain about the same problems your coursemates complain about. But what if I told you that every complaint is actually a <span className="font-bold">business opportunity</span> in disguise?</p>
            
            <ul className="list-disc pl-5 space-y-2">
              <li><span className="font-bold">"The WIFI in school is terrible"</span> = Opportunity to create a mobile data sharing service</li>
              <li><span className="font-bold">"Good barbers are so far from campus"</span> = Opportunity to bring barbers to hostel (for a booking fee)</li>
              <li><span className="font-bold">"Printing is expensive and the machines always break down"</span> = Opportunity to become the "printing plug" with better prices and reliability</li>
              <li><span className="font-bold">"Nobody knows what's happening on campus"</span> = Opportunity to become the information hub (with advertising revenue)</li>
            </ul>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">But here's the kicker:</p>
            <p className="mt-2">Most students see these problems and just complain. They never ask the million-dollar question: <span className="italic">"How can I solve this and get paid for it?"</span></p>
            <p className="mt-2 font-bold">That's the difference.</p>
            <p className="mt-2">Broke students see problems and get frustrated.<br/>
            Wealthy students see problems and get excited.</p>
            <p className="mt-2 font-bold">Because every problem is a customer waiting to pay someone to solve it.</p>
          </div>
        </div>

        {/* Training Content Section */}
        <div className="my-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">What You Get In This Complete Training System (₦4,950)</h2>
          
          <div className="space-y-6">
            {/* Module 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">INTRODUCTION: The Early Bird Revolution</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">The compound advantage:</span> Why starting a business while in school gives you a 3-year head start that becomes a ₦10 million difference by age 30</li>
                <li><span className="font-bold">The graduation reality:</span> Why waiting until after school to start means competing with 500,000 other desperate graduates for the same ₦80,000 jobs</li>
                <li><span className="font-bold">Breaking the academic prison:</span> How the "focus only on studies" mentality keeps brilliant students poor while average students build wealth</li>
              </ul>
            </div>
            
            {/* Module 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">CHAPTER 1: Before You Quit Your Job Or Waste Your Savings</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">The business graveyard secret:</span> Why most business ideas fail before they start (and the Gary Halbert revelation that identifies winners instantly)</li>
                <li><span className="font-bold">Developing "money vision":</span> How to train your brain to spot profitable opportunities in everyday complaints and frustrations</li>
                <li><span className="font-bold">The starving crowd principle:</span> Two simple methods to find people desperately willing to pay for solutions (MAKE THINGS MORE AWESOME vs MAKE THINGS LESS AWFUL)</li>
                <li><span className="font-bold">The underground profit drivers:</span> The four psychological triggers that force people to buy (money/save money, save time, feel better, avoid pain)</li>
                <li><span className="font-bold">The Business X-Ray System:</span> Nine critical factors that separate businesses that make millions from those that waste your time (urgency test, market size, pricing power, customer cost, delivery cost, uniqueness factor, speed advantage, startup investment, passive income potential)</li>
              </ul>
            </div>
            
            {/* Module 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">CHAPTER 2: How to Own Space in Your Customer's Mind</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">Mental real estate domination:</span> How to become the first business customers think of when they need your solution (even if you're not actually first)</li>
                <li><span className="font-bold">The positioning revolution:</span> How to add one unique angle that makes competition irrelevant</li>
                <li><span className="font-bold">Niche ownership:</span> The focus strategy that lets small businesses beat big companies with unlimited budgets</li>
                <li><span className="font-bold">David vs Goliath blueprint:</span> How to turn your "disadvantages" (no money, no experience, no connections) into your biggest competitive weapons</li>
              </ul>
            </div>
            
            {/* Module 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">CHAPTER 3: The Advertising Secret That Makes People Buy Instantly</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">Why big company advertising will bankrupt you:</span> The difference between brand awareness (useless) and direct response (cash generating)</li>
                <li><span className="font-bold">The 8 Laws of Instant Sales:</span> The psychological triggers that turn browsers into buyers in minutes, not months</li>
                <li><span className="font-bold">Headline mastery:</span> How to write opening lines that stop scrolling fingers dead and force people to read your entire message</li>
                <li><span className="font-bold">The irresistible offer formula:</span> What makes customers think "I'd be crazy NOT to buy this" instead of "let me think about it"</li>
                <li><span className="font-bold">WhatsApp money machine:</span> How to turn your status updates and broadcast lists into automated sales systems</li>
              </ul>
            </div>
            
            {/* Module 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">CHAPTER 4: The Unpaid Sales Army: Getting Others To Promote Your Business FOR FREE</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">Word-of-mouth multiplication:</span> How to engineer situations where every customer brings you 3-5 new customers automatically</li>
                <li><span className="font-bold">Trust currency in Nigeria:</span> Why one recommendation from the right person is worth more than ₦100,000 in advertising</li>
                <li><span className="font-bold">Influencer leverage without payment:</span> How to get campus "big boys" and "big girls" promoting your business without paying them upfront</li>
                <li><span className="font-bold">The referral addiction system:</span> How to make customers compete to bring you the most new business (because the rewards are irresistible)</li>
              </ul>
            </div>
            
            {/* Module 6 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">CHAPTER 5: How to Set Prices That Feel Fair - And Sell Like Crazy</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">The price psychology revolution:</span> Why Nigerian customers don't want cheap—they want affordable (and how to position any price as affordable)</li>
                <li><span className="font-bold">Market vendor wisdom:</span> How successful traders make ₦50,000 items feel like bargains at ₦45,000 (and how to apply this to any business)</li>
                <li><span className="font-bold">The value stacking secret:</span> How to make a ₦10,000 offer feel worth ₦50,000 by adding the right bonuses and guarantees</li>
                <li><span className="font-bold">Recession-proof pricing:</span> Why businesses that raise prices during tough times actually get more customers, not less</li>
              </ul>
            </div>
            
            {/* Module 7 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">CHAPTER X: The Next Step Is Simple: MOVE</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li><span className="font-bold">The 48-hour rule:</span> Why taking imperfect action in 2 days beats perfect planning for 2 months</li>
                <li><span className="font-bold">The focus advantage:</span> Why students who stick with one business for 18 months make 10x more than those who jump between "opportunities"</li>
                <li><span className="font-bold">Money management for business builders:</span> The simple system that ensures you keep and multiply what you make</li>
                <li><span className="font-bold">The final push:</span> Why most people never start (and the psychological trick that forces you to take action)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pricing Justification Section */}
        <div className="my-12 bg-yellow-50 p-6 rounded-lg border border-yellow-200">
          <h2 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-4">Why ₦4,950 Instead of Free?</h2>
          
          <p className="mb-4 font-bold">Let me be brutally honest with you:</p>
          
          <p className="mb-4">I could give this away for free. But here's what happens when something costs nothing:</p>
          
          <p className="mb-4 font-bold italic">Your brain automatically assigns it zero value.</p>
          
          <p className="mb-4">You download it to your phone, forget about it, and continue complaining about being broke while the solution sits unread in your files.</p>
          
          <div className="bg-white p-4 rounded-lg my-6 border border-yellow-300">
            <p className="font-bold">Psychology research proves this:</p>
            <p className="mt-2">People only value what they invest in.</p>
            <p className="mt-2">Even a small investment creates what researchers call "commitment bias"—your brain needs to justify the purchase, so it forces you to actually use what you bought.</p>
          </div>
          
          <p className="font-bold mb-2">Think about it:</p>
          
          <div className="grid md:grid-cols-2 gap-4 my-6">
            <div className="bg-white p-4 rounded-lg border border-gray-300">
              <p className="font-bold text-gray-700">Movie ticket:</p>
              <p>₦3,500 (entertainment for 2 hours)</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-300">
              <p className="font-bold text-gray-700">Weekend restaurant meal:</p>
              <p>₦4,200 (satisfaction for 30 minutes)</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-300">
              <p className="font-bold text-gray-700">Data bundle for the month:</p>
              <p>₦5,000 (gone in 30 days)</p>
            </div>
            
            <div className="bg-green-100 p-4 rounded-lg border border-green-300">
              <p className="font-bold text-green-700">Business training that could generate ₦100k+ monthly:</p>
              <p>₦4,950 (value for years)</p>
            </div>
          </div>
          
          <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-blue-800">The math is simple.</p>
            <p className="mt-2">This ₦4,950 ensures you're serious enough to actually implement these strategies instead of just collecting "free information" that sits unused.</p>
          </div>
        </div>

        {/* Future Consequences Section */}
        <div className="my-12 bg-red-50 p-6 rounded-lg border border-red-200">
          <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-4">What Happens When You Don't Take Action</h2>
          
          <p className="mb-4 font-bold">Let me fast-forward your life 3 years:</p>
          
          <div className="bg-white p-6 rounded-lg border border-red-300 my-6">
            <p>You're in a black suit (the same one you wore to your matriculation) sitting outside an office in Victoria Island. It's your 23rd job interview this year.</p>
            
            <p className="mt-4">The interviewer—someone your age who didn't get better grades than you—asks: <span className="italic">"So what have you been doing since graduation?"</span></p>
            
            <p className="mt-4">You fumble through the same script: <span className="italic">"I've been applying for jobs, improving my skills, doing some IT here and there..."</span></p>
            
            <p className="mt-4 font-bold">What you don't say is the real truth:</p>
            
            <ul className="list-disc pl-5 space-y-2 mt-2">
              <li>You've been living back home with your parents (the same room you slept in during secondary school)</li>
              <li>You borrow ₦500 for transport to these interviews</li>
              <li>You've applied to 847 companies and gotten 3 interviews</li>
              <li>You're starting to wonder if your degree was worth the 4 years</li>
            </ul>
          </div>
          
          <p className="font-bold mb-2">Meanwhile...</p>
          
          <p className="mb-4">That coursemate who used to buy Air Force 1s while you were sharing indomie? He's not looking for jobs. Jobs are looking for him.</p>
          
          <p className="mb-4">He built a business that now makes more monthly than most "good jobs" pay annually.</p>
          
          <p className="mb-4">He's not smarter than you. He doesn't have better connections. He just learned what you're about to learn—if you decide to stop reading and start acting.</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold">The choice is simple:</p>
            <p className="mt-2">Join the queue of graduates begging for opportunities, or become the student who creates opportunities.</p>
          </div>
        </div>

        {/* Urgency Section */}
        <div className="my-12 bg-orange-100 p-6 rounded-lg border border-orange-200 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-orange-800 mb-4">URGENT: This Offer Expires in 72 Hours</h2>
          
          <div className="bg-white p-4 rounded-lg border border-orange-300 mb-6">
            <p className="font-bold">Doors close Monday, August 26th at 11:59 PM</p>
            <p className="mt-2">After that, the next batch won't be available until December when school resumes.</p>
          </div>
          
          <div className="bg-red-100 p-4 rounded-lg border border-red-300 mb-6">
            <p className="font-bold text-red-700">Only 153 copies remaining out of 200 total for this month.</p>
          </div>
          
          <p className="font-bold mb-2">Here's what happens when you wait:</p>
          
          <ul className="list-disc text-left pl-5 space-y-2 bg-white p-4 rounded-lg mb-6">
            <li>The problems you're facing today will be the same problems you're facing next month</li>
            <li>Other students will take action and gain a 3-month head start</li>
            <li>You'll convince yourself "next time" while staying in the same financial prison</li>
          </ul>
          
          <div className="bg-yellow-100 p-4 rounded-lg border border-yellow-300">
            <p className="font-bold">Don't be the student who comes back in 3 months asking: <span className="italic">"Is this still available?"</span></p>
            <p className="mt-2">Only to discover the opportunity passed while you were "thinking about it."</p>
          </div>
          
          <div className="mt-6 bg-green-100 p-4 rounded-lg border border-green-300">
            <p className="font-bold text-green-800 text-xl">[GET THE COMPLETE TRAINING FOR ₦4,950 NOW]</p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="my-12 bg-blue-100 p-6 rounded-lg border border-blue-200 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">60-Day Money-Back Promise</h2>
          
          <div className="max-w-2xl mx-auto space-y-4">
            <p>Use everything in this training for 60 full days.</p>
            
            <p>If you don't see at least THREE profitable opportunities you could start immediately, or if you feel the training isn't worth 20x what you paid...</p>
            
            <div className="bg-white p-4 rounded-lg border border-blue-300 my-4">
              <p className="font-bold text-green-700">Send me a message and I'll refund every kobo.</p>
              <p className="mt-2">No questions asked. No hoops to jump through.</p>
            </div>
            
            <p className="font-bold">Why am I this confident?</p>
            <p>Because these principles work for anyone willing to apply them. The opportunities are everywhere—you just need the right lens to see them.</p>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className="my-12 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Your Two Paths Forward</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Path 1:</h3>
              <p>Close this page. Tell yourself you'll "think about it." Continue the cycle of financial dependence. Graduate with a certificate but no income. Join the mass of job seekers competing for scraps.</p>
              <p className="mt-4 font-bold">Watch your coursemates build businesses while you build resumes.</p>
            </div>
            
            <div className="bg-white bg-opacity-20 p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Path 2:</h3>
              <p>Invest ₦4,950 in yourself today. Learn the opportunity recognition system that could change everything. Start seeing money-making possibilities everywhere you look. Graduate with customers, not just certificates.</p>
              <p className="mt-4 font-bold">The choice is yours.</p>
            </div>
          </div>
          
          <div className="bg-yellow-400 text-green-900 p-4 rounded-lg max-w-2xl mx-auto mb-6">
            <p className="font-bold">But remember: <span className="italic">Inaction is also a choice.</span> And it has consequences.</p>
            <p className="mt-2">Every month you delay is another ₦100,000+ opportunity cost. The price of waiting is always higher than the price of starting.</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg max-w-2xl mx-auto">
            <p className="text-green-800 font-bold text-xl mb-4">[YES, I WANT TO DEVELOP MY OPPORTUNITY RECOGNITION SYSTEM - ₦4,950]</p>
            <p className="text-gray-600">Secure Payment • Instant Access • 60-Day Money-Back Guarantee</p>
          </div>
        </div>

        {/* Final PS Section */}
        <div className="my-12 bg-gray-100 p-6 rounded-lg">
          <div className="max-w-2xl mx-auto">
            <p className="font-bold italic text-center mb-4">P.S. - Right now, while you're reading this, other students are taking action. They're investing in themselves. They're developing the skills that will separate them from the crowd.</p>
            
            <p className="font-bold italic text-center">The question is: Will you join them, or will you still be "thinking about it" when they're already making money?</p>
            
            <p className="font-bold text-center mt-4">The clock is ticking. The choice is yours.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 text-sm">
        <p>© {new Date().getFullYear()} Student Business Blueprint. All Rights Reserved.</p>
        <p className="mt-2">Privacy Policy | Terms of Service | Disclaimer</p>
      </footer>
    </div>
  );
}