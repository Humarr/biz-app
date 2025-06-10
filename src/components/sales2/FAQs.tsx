/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const FAQSection = () => {
  return (
    <section className="section-py bg-background">
      <div className="container-narrow">
        <div className="scribble-note mb-8">
          🤨 FAQs (Foolish, Annoying Questions)
        </div>

        <div className="space-y-12">
          {/* FAQ Item 1 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"₦4,500 for just 37 pages? Are you mad?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-secondary">
                Yes.<br />
                Mad enough to condense decades of painful, bloody, trial-by-fire business lessons into a book you can finish in one sitting...<br />
                ...instead of a 500-page coma-inducing snoozefest padded with motivational diarrhea.
              </p>
              <p className="text-secondary mt-2">
                Some people charge ₦50k for webinars that make you dumber.<br />
                You're complaining about ₦4,500 for actual clarity?
              </p>
              <p className="text-primary font-bold mt-2">
                If anything, it's underpriced. But I want you to read it. Not admire it on your wishlist.
              </p>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"Is this book for me if I haven't started my business yet?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-primary font-bold">
                That's exactly who it's for.
              </p>
              <p className="text-secondary mt-2">
                This book is for the you who's still unsure... still Googling "how to start a business in Nigeria" at 2AM...<br />
                ...still bouncing from idea to idea like a sugar-high rabbit.
              </p>
              <p className="text-secondary mt-2">
                It's for the you who's sick of the fluff, but still doesn't know what's real.
              </p>
              <p className="text-secondary mt-2">
                It's for the you who doesn't want to waste the next 2 years doing trial-and-error while pretending to be a "CEO" on Instagram.
              </p>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"What if I already have a business?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-secondary">
                Great.<br />
                Now go ask yourself:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-secondary mt-2">
                <li>Is your business making consistent money... or just collecting likes?</li>
                <li>Are you confident in your offer... or just copying what others are doing?</li>
                <li>Do you even have a real strategy... or just vibes and Canva graphics?</li>
              </ul>
              <p className="text-secondary mt-2">
                This rant will punch the weak points of your business model right in the teeth.
              </p>
              <p className="text-secondary mt-2">
                And if everything in your business is already perfect?<br />
                Congratulations. You probably don't need this.
              </p>
              <div className="scribble-note mt-2">
                (But I know you're lying.)
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"Is this one of those ebooks filled with vague advice like 'add value' and 'just believe'?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-secondary">
                If I say "add value" in this book, it's only because I'm mocking it.
              </p>
              <p className="text-secondary mt-2">
                There are no vague theories in this book.
              </p>
              <p className="text-secondary mt-2">
                Everything is:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-secondary mt-2">
                <li>Tactical</li>
                <li>Brutally honest</li>
                <li>Built for broke people who don't have time to "discover their niche slowly through journaling and self-awareness"</li>
              </ul>
              <p className="text-secondary mt-2">
                You get advice like:
              </p>
              <ul className="list-disc pl-6 space-y-1 text-secondary mt-2">
                <li>How to test if people will pay you BEFORE you build anything</li>
                <li>How to spy on competitors without feeling like a weirdo</li>
                <li>How to find your first offer TODAY without having a logo, followers, or even data</li>
              </ul>
              <p className="text-secondary mt-2">
                No fluff. No waffle. No incense-burning manifestation exercises.
              </p>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"What if I don't like the book?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-secondary">
                Simple.
              </p>
              <p className="text-secondary mt-2">
                Email me and say: "This didn't help me."
              </p>
              <p className="text-secondary mt-2">
                I'll refund you.<br />
                No form. No interrogation.<br />
                I won't even ask you to write an essay explaining your trauma.
              </p>
              <p className="text-primary font-bold mt-2">
                But you won't ask for a refund.<br />
                Because you'll probably be too busy flipping through the pages and whispering "Damn...this guy's spitting."
              </p>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"Can I pay in dollars?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-secondary">
                Yes, boss.<br />
                When you click the payment link, you'll see an option to pay in dollars with your card.
              </p>
              <div className="highlight px-4 py-2 inline-block mt-2">
                <p>But why? You no like naira again?</p>
              </div>
            </div>
          </div>

          {/* FAQ Item 7 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"Can I get a physical copy?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-secondary">
                At ₦4,500?
              </p>
              <p className="text-secondary mt-2">
                You want me to print it, bind it, laminate it, wrap it in bubble wrap and send it through Lagos traffic to your doorstep?
              </p>
              <div className="highlight px-4 py-2 inline-block mt-2">
                <p>You don't like peace, abi?</p>
              </div>
              <p className="text-secondary mt-2">
                No — this is a digital PDF. You get instant access. No waiting. No wahala. No dispatch rider saying "I'm five minutes away" for six hours.
              </p>
            </div>
          </div>

          {/* FAQ Item 8 */}
          <div className="faq-item">
            <div className="flex items-start mb-2">
              <span className="text-accent font-bold mr-2">❓</span>
              <h3 className="text-xl font-bold">"What if I'm too broke to buy this?"</h3>
            </div>
            <div className="pl-8">
              <p className="text-primary font-bold">ANSWER:</p>
              <p className="text-primary font-bold">
                Then you need it the most.
              </p>
              <p className="text-secondary mt-2">
                In fact, I wrote it for you.
              </p>
              <p className="text-secondary mt-2">
                This isn't one of those "you need capital to make capital" playbooks.<br />
                This is:
              </p>
              <div className="highlight px-4 py-2 inline-block mt-2">
                <p>"You have ₦3k and zero hope? Cool. Let's flip that ₦3k into ₦30k, then ₦300k."</p>
              </div>
              <p className="text-secondary mt-2">
                There's literally a bonus blueprint inside for that.
              </p>
              <p className="text-primary font-bold mt-2">
                If ₦4,500 is hard for you right now...<br />
                Then trust me: the price of not reading this book will be way higher.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-xl font-bold">
              That's it.
            </p>
            <p className="text-accent font-bold text-xl">
              No more questions.
            </p>
          </div>

          {/* Additional Q&A Grid */}
          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {/* Q1 */}
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-bold">Q1: Be honest. Is this just another "YouTube thread turned PDF" like the garbage I've wasted money on before?</h4>
              <p className="mt-2">A: No, fam. This isn't some AI-generated, ChatGPT-spit-out nonsense dressed up with Canva covers and vibes. This is a blood-soaked battle rant from someone who's been broke, confused, tired, and done with the fake guru circle-jerk. Every page drips with real talk, tested truths, and business strategy that hits like a slap from your future successful self.</p>
            </div>

            {/* Q2 */}
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-bold">Q2: It's just 37 pages? Shouldn't it be longer?</h4>
              <p className="mt-2">A: Ah, so you want a 350-page novel of fluff, huh? Pages padded with motivational quotes, stories about Jeff Bezos in his garage, and "mindset" babble that never helped anybody build sh*t? This book is 37 pages of straight punches. No fat. No fillers. Just what works. If that sounds "too short," maybe you've been trained to love pain instead of results.</p>
            </div>

            {/* Q3 */}
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-bold">Q3: What if I don't have a business yet? Is this still for me?</h4>
              <p className="mt-2">A: Especially if you don't. This isn't some advanced funnel-optimization, "10X your ad ROI" crap for already-rich bros. This is ground zero strategy — what to do when you're starting with only ₦3k, a cracked phone, and way too many screenshots of failed ideas in your Notes app.</p>
            </div>

            {/* Q4 */}
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-bold">Q4: I've read books before. Nothing changed. Why will this be different?</h4>
              <p className="mt-2">A: Because this one doesn't try to "motivate" you. It grabs you by the shirt, slaps you with truth, and throws you into the arena. If you still do nothing after reading it, you'll feel so exposed, so roasted, so spiritually violated... you'll either cry, or finally get off your ass and sell something. Either way, you'll move.</p>
            </div>

            {/* Q5 */}
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-bold">Q5: What if I'm broke broke? Like, my bank app is a horror movie.</h4>
              <p className="mt-2">A: Then read it twice. This is for people exactly like you. It shows you how to make something out of absolutely nothing — not by wishing or waiting, but by learning how to sell, serve, and survive. In fact, if you're broke broke? This ₦4,500 might be the last "expense" you make... before you finally start making income.</p>
            </div>

            {/* Q6 */}
            <div className="bg-note p-4 rounded-lg">
              <h4 className="font-bold">Q6: I'm scared. Like, what if I try again and still fail?</h4>
              <p className="mt-2">A: Look. Fear's valid. But do you know what's scarier? Another 12 months of "thinking about it." Another year of "almost starting." Another lap around the same cycle of frustration, fake confidence, and new shiny distractions. This book isn't magic. But it gives you the realest damn shot at breaking out. And that? That's worth braving a little fear.</p>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <h3 className="text-2xl font-headline2 uppercase mb-6">
              Final Warning (Because Some People Still Need One):
            </h3>
            <p className="text-xl mb-8">
              If you're still on the fence after all this...<br />
              Ask yourself one question:<br />
              "When's the last time hesitation made me money?"
            </p>
            <p className="text-secondary mb-8">
              The clock's ticking. The price could go up. The regret will definitely catch up.
            </p>
        

            <Link href="/payment" passHref>
              <button className="btn-primary text-xl px-8 py-4 animate-float">
                👉🏾 I'm ready. Let's GO.
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;