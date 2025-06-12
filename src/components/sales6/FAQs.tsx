/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const FAQSection = () => {
  return (
    <section className="section-py bg-background">
  <div className="container-narrow">
    <h2 className="text-3xl font-bold mb-12 uppercase text-center">
      😒 Frequently Annoying Questions
    </h2>
    <p className="text-center mb-12 italic">
      (and slightly unhinged answers that will make you laugh, nod... and maybe cry a little)
    </p>

    <div className="space-y-12 mb-12">
      {/* FAQ 1 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"Can ₦4,500 really change my life?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="mb-4">
          ₦4,500 can't even buy you a decent plate of shawarma anymore.
        </p>
        <p className="mb-4">
          But it can buy you a savage business guide that might stop you from wasting 3 YEARS running around in circles with ₦0 in your bank account, wondering why your 'WhatsApp biz' hasn't taken off.
        </p>
        <div className="highlight-box">
          <p className="font-bold">
            So yeah. It might not change your life...<br />
            But it might stop your life from continuing the same way it's been going.
          </p>
        </div>
      </div>

      {/* FAQ 2 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"Is this just another ebook filled with motivation, theory, and vibes?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="mb-4">
          If you wanted "You can do it! Believe in yourself! 🌈💪"...
        </p>
        <p className="font-bold text-accent mb-4">
          You wouldn't still be broke.
        </p>
        <p className="mb-4">
          This isn't motivation.<br />
          It's provocation.<br />
          It's confrontation.<br />
          It's information that slices through BS like hot amala through egusi.
        </p>
        <p className="font-bold mb-2">You'll get:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Real-world business insight</li>
          <li>Offers that sell like mad</li>
          <li>The exact dumb mistakes to avoid</li>
          <li>And how to actually start making money — not noise</li>
        </ul>
      </div>

      {/* FAQ 3 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"I've been burned before. Why should I trust this one?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="mb-4">
          You shouldn't.
        </p>
        <p className="font-bold mb-4">
          Trust is earned — not begged for.
        </p>
        <div className="accent-block mb-4">
          <p>
            So don't trust the ebook. Don't trust the bonuses. Don't even trust me.
          </p>
          <p className="font-bold mt-2">
            Just read the damn thing...<br />
            ...and if you don't feel like it gave you at least 10x more value than you paid?
          </p>
        </div>
        <p className="font-bold text-accent">
          You get your money back. No guilt trip. No problem.
        </p>
        <p className="mt-4">
          You're not marrying the ebook.<br />
          You're just giving it one chance to prove itself.
        </p>
        <p className="font-bold">
          If it fails, delete it and eat your refund.
        </p>
      </div>

      {/* FAQ 4 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"What if I don't have a business idea yet?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="text-accent font-bold mb-4">
          Perfect.
        </p>
        <p className="mb-4">
          The people who usually fail are the ones who think they already have "a great idea" but won't shut up and learn how to sell.
        </p>
        <p className="font-bold mb-4">
          This guide doesn't need you to have an idea.
        </p>
        <p className="mb-2">It helps you:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Spot what actually sells</li>
          <li>Avoid shiny distractions</li>
          <li>Start with something simple</li>
          <li>And build momentum (the real currency of broke entrepreneurs)</li>
        </ul>
        <p className="font-bold">
          Starting from scratch?<br />
          Good. That means you won't have to unlearn trash.
        </p>
      </div>

      {/* FAQ 5 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"Is this only for online businesses?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="text-accent font-bold mb-4">
          Nope.
        </p>
        <p className="font-bold mb-4">
          It's for:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="p-3 border border-accent rounded-lg">
            <p>Online hustlers</p>
          </div>
          <div className="p-3 border border-accent rounded-lg">
            <p>Offline dreamers</p>
          </div>
          <div className="p-3 border border-accent rounded-lg">
            <p>Hybrid weirdos</p>
          </div>
          <div className="p-3 border border-accent rounded-lg">
            <p>Side-giggers</p>
          </div>
          <div className="p-3 border border-accent rounded-lg">
            <p>Market traders</p>
          </div>
          <div className="p-3 border border-accent rounded-lg">
            <p>Freelancers</p>
          </div>
        </div>
        <p className="mb-4">
          Even your mum who wants to sell zobo but has no clue where to start
        </p>
        <p className="font-bold">
          It's not about the format of the business.<br />
          It's about making sure the damn thing works.
        </p>
      </div>

      {/* FAQ 6 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"What if I read it and STILL don't make money?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="mb-4">
          Then you probably skipped the parts where I said:
        </p>
        <div className="text-box-accent mb-4">
          <p className="font-bold">"Read this slowly. Then actually DO IT."</p>
        </div>
        <p className="mb-4">
          This ebook doesn't work if it just sits on your phone like that 300 other PDFs you never opened.
        </p>
        <p className="font-bold mb-4">
          But if you read it, use it, and still get nothing?
        </p>
        <p className="mb-4">
          Message me.<br />
          I'll refund you.<br />
          We'll both move on like mature adults.
        </p>
        <p className="font-bold text-accent">
          Deal?
        </p>
      </div>

      {/* FAQ 7 */}
      <div className="card">
        <h3 className="text-xl font-bold mb-4 text-accent">
          ❓"Be honest. What if it's not worth ₦4,500?"
        </h3>
        <p className="font-bold mb-2">Answer:</p>
        <p className="mb-4">
          If you're used to buying stuff based on how thick it is — go buy rice.
        </p>
        <p className="font-bold mb-4">
          This isn't about page count.
        </p>
        <p className="font-bold text-accent mb-4">
          This is about what those pages do to your head.
        </p>
        <p className="mb-4">
          If a 37-page PDF can:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Break your bad habits</li>
          <li>Kill your fake guru delusions</li>
          <li>Show you a real way to start</li>
          <li>Give you 3 savage bonuses</li>
          <li>And make you laugh, cry, and take action</li>
        </ul>
        <p className="font-bold">
          ...and you STILL think it's not worth ₦4,500?
        </p>
        <p className="font-bold text-accent">
          You need prayer. Not ebooks.
        </p>
      </div>
    </div>

    <div className="text-center">
      <p className="font-bold text-xl mb-6">
        Whew.
      </p>
      <p className="font-bold text-xl mb-6">
        Still breathing?<br />
        Still curious?<br />
        Still broke?
      </p>
      <p className="font-bold text-2xl text-accent mb-6">
        Let's fix that.
      </p>
      <Link href="/payment3" passHref>
      <button className="btn-primary text-2xl px-8 py-4 mb-6 animate-chill-pulse">
        STOP READING FAQS AND START MAKING MONEY
      </button>
      </Link>
      <p className="font-bold text-2xl">
        👇👇👇
      </p>
    </div>
  </div>
</section>
  )
};

export default FAQSection;