/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const IdeaProblemSection = () => {
  return (
    <section className="section-py bg-[rgb(var(--background))]">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-headline2 uppercase text-accent mb-2">
            You Don't Have A Business Problem
          </h1>
          <h2 className="text-3xl font-headline2 uppercase text-primary">
            You Have An Idea Problem
          </h2>
          <p className="text-xl mt-4 text-accent font-bold">
            And it's costing you everything.
          </p>
        </div>

        <div className="space-y-12">
          {/* The Scene Section */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The Scene You Know Too Well
            </h3>
            <p className="text-xl text-secondary mb-4">
              It's 11:47 PM.
            </p>
            <p className="text-secondary mb-4">
              You're lying in bed, scrolling through your phone, looking at other people's success stories.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
              <li>The guy who started selling shoes online and now owns 3 stores.</li>
              <li>The girl who began with homemade snacks and now supplies 15 offices.</li>
              <li>The friend who started a simple service and now drives a car you can only dream of.</li>
            </ul>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="text-primary font-bold">
                And you're wondering: "What's wrong with me?"
              </p>
            </div>
            <p className="text-secondary mb-4">
              You've tried. God knows you've tried.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
              <li>You sold perfume oils for 6 months. Made ₦3,000 profit.</li>
              <li>You tried dropshipping. Lost ₦15,000 to Facebook ads that brought zero sales.</li>
              <li>You even sold recharge cards. Felt like a failure counting ₦500 profit after a whole week.</li>
            </ul>
            <div className="bg-accent text-white p-4 rounded-lg">
              <p className="font-bold">
                Each failure chips away at something inside you.
              </p>
              <p className="mt-2">
                Your confidence. Your hope. Your family's belief in you.
              </p>
            </div>
          </div>

          {/* The Lie Section */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The Lie Everyone Believes
            </h3>
            <p className="text-secondary mb-4">
              Here's what everyone tells you:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="highlight px-4 py-2">
                <p>"You just need to work harder."</p>
              </div>
              <div className="highlight px-4 py-2">
                <p>"You need more capital."</p>
              </div>
              <div className="highlight px-4 py-2">
                <p>"You need better connections."</p>
              </div>
              <div className="highlight px-4 py-2">
                <p>"You need to be more patient."</p>
              </div>
            </div>
            <p className="text-xl text-primary font-bold mb-4">
              They're all wrong.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
              <li>You don't need to work harder. You're already working hard enough.</li>
              <li>You don't need more capital. David started his ₦340,000/month business with just ₦12,000.</li>
              <li>You don't need better connections. You need better ideas.</li>
            </ul>
            <div className="bg-note p-6 rounded-lg">
              <p className="text-xl text-primary font-bold">
                The truth is painful but liberating:
              </p>
              <p className="text-2xl text-accent font-bold mt-2">
                You don't have a business problem. You have an idea problem.
              </p>
            </div>
          </div>

          {/* The Real Reason Section */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The Real Reason You Keep Failing
            </h3>
            <p className="text-secondary mb-4">
              Every business idea goes through 12 tests.
            </p>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="text-primary font-bold">
                Most entrepreneurs don't even know these tests exist.
              </p>
            </div>
            <p className="text-secondary mb-4">
              They pick ideas based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
              <li>What they think people need</li>
              <li>What worked for someone else</li>
              <li>What seems "trendy" right now</li>
              <li>What they're passionate about</li>
            </ul>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="text-primary font-bold">
                Then they wonder why 9 out of 10 businesses fail.
              </p>
            </div>
            <p className="text-secondary mb-4">
              The successful entrepreneurs? They know the 12 tests.
            </p>
            <p className="text-xl text-primary font-bold">
              They don't start ANY business until their idea passes all 12.
            </p>
            <div className="bg-accent text-white p-4 rounded-lg mt-4">
              <p className="font-bold">
                That's why they succeed while others fail.
              </p>
            </div>
          </div>

          {/* The Tests Section */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              What These Tests Look Like
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-bold text-accent mb-2">Test #1: The Pain Test</h4>
                <p className="text-secondary">
                  Does your idea solve a problem people are already frustrated about?
                </p>
                <p className="text-secondary mt-2">
                  Most people start businesses based on what they think people need. Winners start businesses based on what people are already complaining about.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-2">Test #2: The Money Test</h4>
                <p className="text-secondary">
                  Do people already spend money trying to solve this problem?
                </p>
                <p className="text-secondary mt-2">
                  If people aren't paying anyone to solve this problem, they won't pay you either.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-2">Test #3: The Frequency Test</h4>
                <p className="text-secondary">
                  How often do people encounter this problem?
                </p>
                <p className="text-secondary mt-2">
                  Once-in-a-while problems create once-in-a-while income. Weekly problems create weekly income.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-accent mb-2">Test #4: The Urgency Test</h4>
                <p className="text-secondary">
                  When people have this problem, do they need it solved immediately?
                </p>
                <p className="text-secondary mt-2">
                  Urgent problems allow premium pricing. Non-urgent problems create price shopping.
                </p>
              </div>
            </div>
            <div className="bg-note p-4 rounded-lg mt-6">
              <p className="text-primary font-bold">
                And there are 8 more tests that most entrepreneurs never learn.
              </p>
            </div>
          </div>

          {/* Story of Two Ideas */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The Story Of Two Ideas
            </h3>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="bg-accent/10 p-4 rounded-lg border border-accent">
                <h4 className="text-xl font-bold text-primary mb-2">Idea A: Perfume Oil Business</h4>
                <ul className="list-disc pl-6 space-y-1 text-secondary">
                  <li>Passes 2 out of 12 tests</li>
                  <li>Result: ₦3,000 profit in 6 months</li>
                </ul>
              </div>
              <div className="bg-primary text-white p-4 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Idea B: Laundry Pickup Service</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Passes 12 out of 12 tests</li>
                  <li>Result: ₦340,000 profit per month</li>
                </ul>
              </div>
            </div>
            <p className="text-secondary mb-4">
              Same neighborhood. Same economy. Same type of customers.
            </p>
            <div className="highlight px-4 py-2 inline-block">
              <p className="text-primary font-bold">
                The only difference? One idea was tested. The other was guessed.
              </p>
            </div>
          </div>

          {/* Cost of Not Knowing */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The Cost Of Not Knowing
            </h3>
            <p className="text-secondary mb-4">
              Every failed business costs you more than money.
            </p>
            <div className="bg-accent/10 p-4 rounded-lg border border-accent mb-4">
              <h4 className="font-bold text-primary mb-2">It costs you:</h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>Time you'll never get back</li>
                <li>Confidence in your abilities</li>
                <li>Respect from family and friends</li>
                <li>Opportunities you miss while chasing the wrong idea</li>
              </ul>
            </div>
            <p className="text-secondary mb-4">
              The average Nigerian entrepreneur wastes ₦47,000 on failed businesses before they figure out what works.
            </p>
            <div className="bg-note p-6 rounded-lg">
              <p className="text-xl text-primary font-bold mb-2">
                But what if you could skip all that?
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>What if you could know, before you spend a single kobo, whether your idea will work?</li>
                <li>What if you could test any business idea in 48 hours and know for certain if it's worth pursuing?</li>
              </ul>
              <p className="text-xl text-accent font-bold mt-4">
                That's exactly what the 12 Economic Filters do.
              </p>
            </div>
          </div>

          {/* ATM Decoder Protocol */}
          <div>
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The ATM Decoder Protocol
            </h3>
            <p className="text-secondary mb-4">
              I've created a free guide that teaches you 4 of the 12 Economic Filters.
            </p>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="text-primary font-bold">
                These 4 filters alone will save you thousands of naira and months of wasted time.
              </p>
            </div>
            <p className="text-secondary mb-4">
              You'll learn:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary mb-4">
              <li>How to spot problems worth solving</li>
              <li>How to know if people will actually pay for your solution</li>
              <li>How to identify recurring income opportunities</li>
              <li>How to find problems that allow premium pricing</li>
            </ul>
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h4 className="font-headline2 uppercase text-primary mb-4">
                Real entrepreneurs who've used these filters say:
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-accent pl-4">
                  <p className="italic text-secondary">
                    "I wish I had these filters before I wasted ₦35,000 on a business that was doomed from day one."
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="italic text-secondary">
                    "The Pain Test alone saved me from making a huge mistake."
                  </p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="italic text-secondary">
                    "These 4 filters are more valuable than the business courses I paid ₦50,000 for."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              Here's What Happens Next
            </h3>
            <p className="text-secondary mb-4">
              You have two choices.
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-accent/10 p-4 rounded-lg border border-accent">
                <h4 className="text-xl font-bold text-primary mb-2">Choice 1:</h4>
                <p className="text-secondary">
                  Keep doing what you've been doing. Keep picking business ideas based on hope and guesswork. Keep losing money and confidence.
                </p>
              </div>
              <div className="bg-primary text-white p-4 rounded-lg">
                <h4 className="text-xl font-bold mb-2">Choice 2:</h4>
                <p>
                  Learn the system that successful entrepreneurs use. Stop wasting time on ideas that don't work. Start building businesses that actually pay you.
                </p>
              </div>
            </div>
            <div className="bg-note p-6 rounded-lg mb-8">
              <p className="text-xl text-primary font-bold">
                The choice is yours. But you have to choose.
              </p>
            </div>
          </div>

          {/* Email Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-headline2 uppercase text-center text-primary mb-2">
              Get The Free Guide Now
            </h3>
            <p className="text-center text-secondary mb-6">
              Enter your email below and I'll send you <span className="font-bold">The ATM Decoder Protocol</span> immediately.
            </p>
            <div className="mb-6">
              <h4 className="font-bold text-primary mb-2">You'll get:</h4>
              <ul className="list-disc pl-6 space-y-2 text-secondary">
                <li>The 4 Core Economic Filters</li>
                <li>Real case studies of ideas that passed (and failed)</li>
                <li>The exact questions to ask before starting any business</li>
                <li>Step-by-step instructions for testing your ideas</li>
              </ul>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-primary font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent outline-none"
                placeholder="your@email.com"
              />
            </div>
            <button className="btn-primary w-full py-4 text-lg">
              SEND ME THE FREE GUIDE
            </button>
            <p className="text-sm text-center text-secondary mt-4">
              No spam. No annoying emails. Just the guide you requested.
            </p>
          </div>

          {/* Final Push */}
          <div className="text-center mt-12">
            <h3 className="text-2xl font-headline2 uppercase text-primary mb-4">
              The Real Question
            </h3>
            <p className="text-xl text-secondary mb-4">
              You're probably thinking, "What if this doesn't work for me?"
            </p>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="text-primary font-bold">
                But that's the wrong question.
              </p>
            </div>
            <p className="text-xl text-primary font-bold mb-4">
              The right question is: "What if this DOES work for me?"
            </p>
            <ul className="list-disc pl-6 space-y-2 text-secondary mb-6 max-w-2xl mx-auto">
              <li>What if 6 months from now, you're the one making ₦200,000 every month?</li>
              <li>What if your family starts calling you for business advice?</li>
              <li>What if you never have to worry about money again?</li>
              <li>What if you become the success story that inspires other people?</li>
            </ul>
            <div className="bg-accent text-white p-6 rounded-lg max-w-2xl mx-auto">
              <p className="text-xl font-bold">
                All of that starts with learning how to pick the right ideas.
              </p>
              <p className="text-xl font-bold mt-2">
                And that starts with getting <span className="underline">The ATM Decoder Protocol</span>.
              </p>
            </div>
            <p className="text-xl text-primary font-bold mt-8">
              Enter your email above and get it now.
            </p>
            <div className="bg-note p-4 rounded-lg inline-block mt-4">
              <p className="font-bold">
                Your future self is watching. Make them proud.
              </p>
            </div>
            <button className="btn-primary px-12 py-4 text-xl mt-8 animate-float">
              GET THE FREE GUIDE
            </button>
          </div>

          {/* PS */}
          <div className="mt-12">
            <h3 className="text-xl font-headline2 uppercase text-primary mb-4">
              P.S. - The Truth About Successful Entrepreneurs
            </h3>
            <p className="text-secondary mb-4">
              They're not smarter than you.
            </p>
            <p className="text-secondary mb-4">
              They're not luckier than you.
            </p>
            <p className="text-secondary mb-4">
              They don't have better connections than you.
            </p>
            <div className="highlight px-4 py-2 inline-block mb-4">
              <p className="text-primary font-bold">
                They just know how to avoid the ideas that don't work.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="text-secondary">
                  While everyone else is guessing, they're knowing.
                </p>
              </div>
              <div className="text-center">
                <p className="text-secondary">
                  While everyone else is hoping, they're planning.
                </p>
              </div>
              <div className="text-center">
                <p className="text-secondary">
                  While everyone else is failing, they're winning.
                </p>
              </div>
            </div>
            <div className="bg-accent text-white p-6 rounded-lg text-center">
              <p className="text-xl font-bold">
                The 12 Economic Filters are your unfair advantage.
              </p>
              <p className="text-xl font-bold mt-2">
                But it starts with learning the first 4.
              </p>
            </div>
            <p className="text-xl text-primary font-bold text-center mt-6">
              Get <span className="underline">The ATM Decoder Protocol</span> right now.
            </p>
            <div className="text-center mt-6">
              <button className="btn-primary px-12 py-4 text-xl animate-float">
                STOP GUESSING. START KNOWING.
              </button>
            </div>
            <div className="text-center mt-4">
              <button className="btn-secondary px-12 py-4 text-xl">
                SEND ME THE FREE GUIDE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IdeaProblemSection;