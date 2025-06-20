/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head'

export default function LeadMagnetPage() {
  return (
    <div className="bg-white font-sans antialiased text-gray-900">
      <Head>
        <title>How to Pick a Business That Actually Pays You</title>
        <meta name="description" content="Stop wasting time on dead-end ideas - learn how to filter business opportunities like a sniper" />
      </Head>

      {/* Hero Section */}
      <header className="relative bg-gradient-to-br from-blue-900 to-purple-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            ⚡ HOW TO PICK A BUSINESS THAT ACTUALLY PAYS YOU
          </h1>
          <p className="mt-6 text-xl sm:text-2xl font-medium opacity-90">
            (Even If You're Broke, Burnt Out, or Ready to Fake Your Death and Relocate to Canada)
          </p>
          <div className="mt-10">
              <Link href="/sales8/salespage" passHref>
            <button className="bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse">
              Get Instant Access →
            </button>
              </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Part 1 */}
        <section className="mb-20">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 1: Let's Be Real. You're Not Lazy. You're Just Picking Crap.</h2>
            <div className="space-y-6 text-lg">
              <p>
                You've tried "hustles." You've joined webinars. You've downloaded freebies with titles like:
              </p>
              
              <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-red-500">
                <p>"How to Earn 7 Figures With Only Your Phone"</p>
                <p>"Millionaire Blueprint From a 19-Year-Old Dropout"</p>
                <p>"Passive Income Ideas for Broke People Who Love Netflix"</p>
              </div>
              
              <p>
                Now here you are. Still broke. Still searching.
              </p>
              
              <p className="font-bold">
                Let me save you years of struggle:
              </p>
              
              <p>
                The reason you've failed isn't because you're lazy.<br/>
                It's because you've been sold garbage ideas by people who got lucky or got loud.
              </p>
              
              <p className="text-xl font-bold">
                You've never been taught how to evaluate a business idea like a sniper.
              </p>
              
              <p className="text-2xl font-bold text-purple-700">
                Until now.
              </p>
              
              <p>
                This guide will show you how to:
              </p>
              
              <ul className="list-disc list-inside space-y-2">
                <li>Stop falling for shiny scams with good branding</li>
                <li>Filter out 90% of useless "opportunities"</li>
                <li>Build a business that actually fits you</li>
                <li>And make money in a way that doesn't make you hate your life</li>
              </ul>
              
              <p className="font-bold">
                No fluff. No AI-written nonsense. Just the clarity you wish you had 3 years ago.
              </p>
            </div>
          </div>
        </section>

        {/* Part 2 */}
        <section className="mb-20 bg-gray-100 p-8 rounded-xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 2: Why Most Business Ideas Are Trash (And How to Smell the Rot)</h2>
            <p className="text-xl">
              Let's expose the 3 most common idea traps smart-but-broke people fall into:
            </p>
            
            <div className="mt-8 space-y-12">
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold">🚫 Trap 1: The Trend Hustle</h3>
                <p>If everyone's doing it, run.</p>
                <div className="mt-4 space-y-2">
                  <p>TikTok marketing?</p>
                  <p>ChatGPT courses?</p>
                  <p>Dropshipping from China with ₦0 capital?</p>
                </div>
                <p className="mt-4">
                  By the time you hear about it, it's already saturated or dying.
                </p>
                <div className="bg-amber-100 p-4 rounded-lg mt-4">
                  <p className="italic">"But if I start fast I can still make something before the hype ends..."</p>
                  <p className="mt-2">Yeah. Just like everyone else who ends up with 700 unsold wristwatches in their cupboard.</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold">🚫 Trap 2: The "I'm Passionate" Lie</h3>
                <p>
                  You know what else people are passionate about? Sleeping.
                </p>
                <p className="mt-2">
                  And you don't see anyone making millions from that (unless you count motivational speakers).
                </p>
                <p className="mt-4 font-bold">
                  Passion doesn't pay you.<br/>
                  Problems pay you.
                </p>
                <p className="mt-2">
                  If nobody is desperately trying to fix the thing you're "passionate" about?<br/>
                  It's a hobby. Not a business.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="text-2xl font-bold">🚫 Trap 3: The YouTube Copycat</h3>
                <p>
                  You watched some guy say he made ₦2M in 7 days doing affiliate marketing.<br/>
                  He smiled. Showed fake alerts. Dropped his referral link.
                </p>
                <p className="mt-4">
                  You copied him.
                </p>
                <p className="mt-2">
                  Now you're 6 months in, zero sales, and confused.
                </p>
                <p className="mt-4 font-bold">
                  Want the truth?
                </p>
                <p className="mt-2">
                  What works for them may never work for you.
                </p>
                <p className="mt-4 text-xl">
                  Because business is not about copying moves.<br/>
                  It's about knowing your own angle.
                </p>
                <p className="mt-4 font-bold text-purple-700">
                  Let's find yours.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 3 */}
        <section className="mb-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-xl">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-3xl font-bold mb-6">Part 3: The ATM Filter – How to Spot a Real Business That Prints Money (for You)</h2>
            <p>
              The "Ultimate Cash Machine" isn't just a metaphor.<br/>
              It's how your business should behave.
            </p>
            <p className="mt-4">
              Drop effort in. Money comes out. Predictably. Repeatedly. Peacefully.
            </p>
            <p className="mt-4 font-bold">
              But only if you pick the right machine.
            </p>
            <p className="mt-6 text-xl">
              Enter: The ATM FILTER
            </p>
            <p className="mt-2">
              Here's what you run your ideas through before you commit to anything.
            </p>
            
            <div className="mt-12 space-y-12">
              <div>
                <h3 className="text-2xl font-bold text-amber-400">✅ 1. A – Audience With Urgent Pain</h3>
                <p>
                  Who's in pain right now... and willing to pay to stop it?
                </p>
                <p className="mt-4 font-bold">
                  If you can't name your audience in one line — and name their pain in another — you don't have a business.
                </p>
                <p className="mt-4">
                  Examples of bad ideas:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <p>"Helping people live their best lives"</p>
                  <p>"Empowering African youth"</p>
                  <p>"Teaching people to be confident"</p>
                </div>
                <p className="mt-4">
                  Nobody pays for that.
                </p>
                <p className="mt-4">
                  Examples of real pain:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <p>Final-year students who need a project but can't code</p>
                  <p>Mothers who want to lose pregnancy weight without leaving the house</p>
                  <p>NYSC members who want side income before their ₦33k vanishes</p>
                </div>
                <p className="mt-4 font-bold">
                  Get specific. Solve pain.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-amber-400">✅ 2. T – Time to Results</h3>
                <p>
                  Can they get a win fast?
                </p>
                <p className="mt-4">
                  People are broke, impatient, and desperate.
                </p>
                <p className="mt-2 font-bold">
                  If your idea takes 8 months of "building" before money shows, drop it.
                </p>
                <p className="mt-4">
                  Look for "low-hanging fruit":
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>Services that give value instantly</li>
                  <li>Products with immediate satisfaction</li>
                  <li>Offers that feel like relief, not a gamble</li>
                </ul>
                <p className="mt-4">
                  You want them to say:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <p>"Whew! I needed this yesterday."</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-amber-400">✅ 3. M – Money Path Is Obvious</h3>
                <p>
                  How exactly does money flow?
                </p>
                <p className="mt-4 font-bold">
                  If you can't sketch out, step-by-step, how someone goes from discovering you to paying you, you're building a fantasy.
                </p>
                <p className="mt-4">
                  Examples of a clear money path:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <p>Step 1: Someone Googles "freelance graphic designer"</p>
                  <p>Step 2: They land on your ₦20k logo service page</p>
                  <p>Step 3: They book. You deliver. You get paid.</p>
                </div>
                <p className="mt-4">
                  If it looks like:
                </p>
                <div className="bg-gray-800 p-4 rounded-lg mt-2">
                  <p>Step 1: Create content</p>
                  <p>Step 2: Grow followers</p>
                  <p>Step 3: Get brand deals maybe hopefully someday</p>
                </div>
                <p className="mt-2 font-bold">
                  = That's not a money path. That's a prayer.
                </p>
                <p className="mt-8 text-xl font-bold">
                  Now try this:
                </p>
                <p className="mt-4">
                  Take any idea you're considering.
                </p>
                <p className="mt-2">
                  Run it through ATM:
                </p>
                <ul className="list-disc list-inside space-y-2 mt-2">
                  <li>A – Does someone urgently want it?</li>
                  <li>T – Can they get a result fast?</li>
                  <li>M – Is the money flow obvious?</li>
                </ul>
                <p className="mt-4 font-bold">
                  If it fails any part, kill it.<br/>
                  It'll drain your energy and drown your dreams.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Part 4 */}
        <section className="mb-20">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 4: Zero-Naira Idea Testing (Don't Spend Before This)</h2>
            <div className="space-y-6 text-lg">
              <p>
                You don't need a logo, website, or ₦100,000 capital to test your idea.
              </p>
              
              <p className="font-bold">
                You just need this:
              </p>
              
              <p className="text-xl">
                Talk to 5 real people and ask if they'll pay.
              </p>
              
              <p className="mt-4">
                Not like:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <p>"Would you be interested?"</p>
              </div>
              
              <p className="mt-4">
                Ask:
              </p>
              <div className="bg-green-100 p-4 rounded-lg border-l-4 border-green-500">
                <p>"If I offered X for ₦Y, would you pay today?"</p>
              </div>
              
              <p className="mt-4 font-bold">
                That one line will expose everything.
              </p>
              
              <p className="mt-4">
                If they say:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>"Hmm... I'd think about it" = No</li>
                <li>"How much exactly?" = Maybe</li>
                <li>"Please when can you start?" = YES</li>
              </ul>
              
              <p className="mt-6 text-xl font-bold">
                You don't need motivation.<br/>
                You need signal.
              </p>
              
              <p className="mt-4">
                Start small. Start ugly. Just start with proof.
              </p>
            </div>
          </div>
        </section>

        {/* Part 5 */}
        <section className="mb-20 bg-amber-100 p-8 rounded-xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 5: Your Business Sweet Spot = Skills × Pain × Speed</h2>
            <p className="text-xl">
              Here's how to pick an idea you won't abandon in 2 weeks.
            </p>
            
            <div className="mt-8 space-y-6">
              <p>
                Draw 3 overlapping circles:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>What you're good at (or can learn fast)</li>
                <li>What people urgently need</li>
                <li>What gets quick results</li>
              </ul>
              
              <p className="font-bold">
                Where they overlap?<br/>
                That's the gold.
              </p>
              
              <p className="mt-4">
                Real-life examples:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>You're good at Canva? Design church flyers for ₦3k each</li>
                <li>You can write well? Help people write CVs and LinkedIn bios</li>
                <li>You understand skincare? Help black women pick the right routines</li>
              </ul>
              
              <p className="mt-6 font-bold">
                Don't chase complexity.
              </p>
              
              <p className="text-xl">
                The simpler your first idea, the faster you escape poverty.
              </p>
            </div>
          </div>
        </section>

        {/* Part 6 */}
        <section className="mb-20">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 6: Real Businesses Don't Need Motivation</h2>
            <div className="space-y-6 text-lg">
              <p className="text-xl font-bold">
                If you need daily quotes to keep going, it's not a business.<br/>
                It's a struggle hobby.
              </p>
              
              <p>
                A real business gets you results fast enough that it feeds you motivation.
              </p>
              
              <p className="mt-4">
                You don't need discipline when clients are sending alerts.
              </p>
              
              <p>
                You don't need affirmations when your idea is clear.
              </p>
              
              <p className="mt-6 text-xl font-bold">
                So let me ask you...
              </p>
              
              <p className="text-2xl font-bold text-purple-700">
                Are you building something that feeds you back?<br/>
                Or are you building a ghost town no one cares about?
              </p>
            </div>
          </div>
        </section>

        {/* Part 7 */}
        <section className="mb-20 bg-gray-100 p-8 rounded-xl">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 7: The 5-Minute Idea Audit (Use This Before You Waste Months)</h2>
            <p>
              Take any idea you're thinking about. Score it 1–5 on each:
            </p>
            
            <div className="mt-6 overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-300">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="py-2 px-4 border-b text-left">Question</th>
                    <th className="py-2 px-4 border-b text-center">Score (1-5)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 px-4 border-b">Does it solve a painful, urgent problem?</td>
                    <td className="py-2 px-4 border-b text-center"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Can I start it with less than ₦10k?</td>
                    <td className="py-2 px-4 border-b text-center"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Can I deliver results within 7 days?</td>
                    <td className="py-2 px-4 border-b text-center"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Will people pay without needing long convincing?</td>
                    <td className="py-2 px-4 border-b text-center"></td>
                  </tr>
                  <tr>
                    <td className="py-2 px-4 border-b">Do I already have (or can quickly learn) the skills for it?</td>
                    <td className="py-2 px-4 border-b text-center"></td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <p className="mt-6">
              Add it up.
            </p>
            
            <ul className="list-disc list-inside space-y-2 mt-4">
              <li><span className="font-bold">20+ points:</span> GO! Start now.</li>
              <li><span className="font-bold">15–19 points:</span> Refine it. Might work.</li>
              <li><span className="font-bold">&lt; 15 points:</span> Kill it. It'll waste your life.</li>
            </ul>
          </div>
        </section>

        {/* Part 8 */}
        <section className="mb-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white p-8 rounded-xl">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-3xl font-bold mb-6">Part 8: The Ultimate Cash Machine Isn't Magic. It's Method.</h2>
            <p className="text-xl">
              Most people fail not because they can't work hard — but because they worked hard on the wrong thing.
            </p>
            
            <div className="mt-8 space-y-6">
              <p>
                This guide is your prevention.<br/>
                The next step is your weapon.
              </p>
              
              <p>
                Once you've filtered out the crap, we'll show you:
              </p>
              
              <ul className="list-disc list-inside space-y-2">
                <li>How to price your offer</li>
                <li>How to find buyers who beg to pay</li>
                <li>How to deliver value that makes people refer others</li>
                <li>And how to turn ₦5k jobs into ₦500k systems</li>
              </ul>
              
              <p className="mt-6">
                That's what The Ultimate Cash Machine program does.<br/>
                But you're not ready for that if you haven't filtered first.
              </p>
              
              <p className="text-xl font-bold mt-8">
                This guide is your rite of passage.
              </p>
            </div>
          </div>
        </section>

        {/* Part 9 */}
        <section className="mb-20">
          <div className="prose prose-lg mx-auto">
            <h2 className="text-3xl font-bold mb-6">Part 9: Let's Recap Before You Scroll Away</h2>
            <p className="text-xl">
              Here's what you now know (and what 90% of hustlers will never figure out):
            </p>
            
            <ul className="list-disc list-inside space-y-4 mt-6 text-lg">
              <li>Most businesses fail before they begin — because the idea was trash</li>
              <li>You can avoid 5+ years of struggle by using the ATM Filter</li>
              <li>You don't need passion or capital — you need clarity</li>
              <li>If your idea fails the pain/speed/money test, don't touch it</li>
              <li>Real businesses pay you early. Struggle hobbies cost you forever.</li>
            </ul>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-20 bg-black text-white p-8 rounded-xl text-center">
          <div className="prose prose-lg mx-auto prose-invert">
            <h2 className="text-3xl font-bold mb-6">Part 10: Your Move.</h2>
            <p className="text-xl">
              You've been given the key.
            </p>
            
            <div className="mt-8 space-y-6">
              <p>
                This isn't motivation.<br/>
                This isn't "think positive."<br/>
                This is a system.
              </p>
              
              <p className="text-xl font-bold">
                So what now?
              </p>
              
              <p>
                You either:
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mt-6">
                <div className="bg-gray-800 p-6 rounded-lg">
                  <p>Go back to scrolling motivational reels while your rent clock ticks, or</p>
                </div>
                <div className="bg-green-900 p-6 rounded-lg">
                  <p>Use this guide to finally start building your own damn ATM</p>
                </div>
              </div>
              
              <p className="mt-8 font-bold">
                You choose.
              </p>
              
              <p className="mt-6">
                When you're ready for the next step — the pricing, sales, system, scaling — The Ultimate Cash Machine is waiting.
              </p>
              
              <p className="font-bold">
                But only for those who passed this test.
              </p>
              
              <div className="mt-12">
                <p className="text-2xl font-bold text-amber-400">⚡ Want the full breakdown?</p>              <Link href="/sales8/salespage" passHref>
                <button className="mt-6 bg-amber-500 hover:bg-amber-400 text-black font-bold py-4 px-8 rounded-full text-lg sm:text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                  📥 [I'VE FILTERED MY IDEA — SHOW ME THE MONEY SYSTEM]
                </button>              </Link>
                <p className="mt-6">
                  We'll show you how to turn your new clarity into cold cash.<br/>
                  Without hype. Without luck. Without wasting more time.
                </p>
                <p className="mt-6 text-xl font-bold">
                  Your ATM is waiting.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      {/*<footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8 text-center text-sm">
        <p>© {new Date().getFullYear()} Ultimate Cash Machine. All rights reserved.</p>
        <p className="mt-2">No hype. No scams. Just real business training.</p>
      </footer>*/}
    </div>
  )
}