/* eslint-disable react/no-unescaped-entities */
import CustomButton from "@/components/business/CustomButton";
import OptInForm from "@/components/business/Opt-InForm";

import React from "react";

export default function OptIn() {
  return (
    <main className="bg-background text-primary font-body min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white px-6 py-20 text-center">
        <h1 className="text-4xl sm:text-5xl font-headline uppercase text-accent mb-3">
          The ATM Decoder Protocol
        </h1>
        <h2 className="text-2xl sm:text-3xl font-headline2 text-highlight">
          12 Brutal Tests For Business Ideas That Actually Pay You
        </h2>
        <p className="italic mt-4 text-lg font-medium">
          <strong>Warning:</strong> Not everyone should have access to this.
        </p>
      </section>

      <div className="border-t border-secondary my-8" />

      {/* The Uncomfortable Truth */}
      <section className="max-w-3xl mx-auto px-6 py-8 space-y-4">
        <h3 className="text-xl font-bold uppercase text-center">
          The Uncomfortable Truth
        </h3>
        <p>Most people who start businesses in Nigeria fail within 12 months.</p>
        <p>Not because they're lazy.</p>
        <p>Not because they don't have capital.</p>
        <p>Not because "the economy is bad."</p>
        <p className="font-bold text-accent">
          They fail because they never learned how to pick ideas that actually
          work.
        </p>
        <p>They pick ideas like they're playing dice with their future.</p>
        <p>Then they wonder why they keep losing.</p>
      </section>

      <div className="border-t border-secondary my-8" />

      {/* What You're About To Get */}
      <section className="bg-highlight px-6 py-10 space-y-6 text-primary">
        <h3 className="text-xl font-bold uppercase text-center">
          What You're About To Get
        </h3>
        <p className="max-w-3xl mx-auto text-center font-bold">
          <strong>The ATM Decoder Protocol</strong> contains the exact 12-step
          system that separates winning business ideas from guaranteed failures.
        </p>
        <p className="text-center text-sm font-medium">
          These aren't theories. These are proven filters that have:
        </p>
        <ul className="list-disc max-w-xl mx-auto pl-5 space-y-1">
          <li>Saved entrepreneurs over ₦2.3 million in wasted investments</li>
          <li>Helped 847 Nigerians build profitable businesses</li>
          <li>Turned complete beginners into confident business owners</li>
        </ul>
        <div className="max-w-2xl mx-auto space-y-2">
          <p>
          &#10003; <strong>The 4 Core Filters</strong> that eliminate 80% of bad
            business ideas in minutes
          </p>
          <p>
          &#10003; <strong>The David Case Study</strong> - How one filter helped a
            Lagos guy build a ₦340,000/month business with just ₦25,000
          </p>
          <p>
          &#10003; <strong>The Pain Test Formula</strong> - Never waste money on
            ideas people don't actually want
          </p>
          <p>
          &#10003; <strong>The Money Test Secret</strong> - How to know if people
            will actually pay for your solution
          </p>
          <p>
          &#10003; <strong>The Frequency Calculator</strong> - Why some businesses
            make money once while others print cash every week
          </p>
          <p>
          &#10003; <strong>The Urgency Scale</strong> - The difference between
            struggling margins and premium pricing
          </p>
        </div>
        <p className="text-center text-sm mt-4">
          <strong>Plus:</strong> Real examples of ideas that passed all 12 tests
          (and the ones that failed spectacularly)
        </p>
      </section>

      <div className="border-t border-secondary my-8" />

      {/* Why This is Free */}
      <section className="max-w-3xl mx-auto px-6 py-8 space-y-4">
        <h3 className="text-xl font-bold uppercase text-center">
          Why This Is Free
        </h3>
        <p>Simple.</p>
        <p>I want you to see how powerful these filters are.</p>
        <p>I want you to test them on your own business ideas.</p>
        <p>
          I want you to experience that "aha moment" when you finally understand
          why your previous attempts didn't work.
        </p>
        <p className="font-bold text-center">
          Because once you see the power of just 4 filters, you'll want the
          complete system.
        </p>
      </section>

      <div className="border-t border-secondary my-8" />

      {/* Who This Is For */}
      <section className="bg-background shadow-lg border-l-3 border-dashed border-accent bg-opacity-5 px-6 py-10 space-y-4 text-primary mx-4">
        <h3 className="text-xl font-bold uppercase text-center text-accent">
          Who This Is For
        </h3>
        <p className="font-bold">This guide is for you if:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You're tired of starting businesses that don't make money</li>
          <li>You've wasted money on ideas that seemed "sure to work"</li>
          <li>You want to stop guessing and start knowing</li>
          <li>You're ready to build a business that actually pays you</li>
        </ul>
        <p className="font-bold mt-6">This guide is NOT for you if:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>You're looking for get-rich-quick schemes</li>
          <li>You want someone else to do the work for you</li>
          <li>You're not serious about building a real business</li>
          <li>You prefer to keep making the same mistakes</li>
        </ul>
      </section>

      <div className="border-t border-secondary my-8" />

      {/* Opt‑In Form */}
      <OptInForm />

      <div className="border-t border-secondary my-8" />

      {/* P.S. Note Section */}
      <section className="bg-note px-6 py-10 text-primary font-scribble text-lg space-y-4 text-center">
        <h3 className="text-xl font-bold uppercase mb-2">
          P.S. - Time Is Your Enemy
        </h3>
        <p>
          Every day you wait to learn these filters is another day you might
          waste on the wrong business idea.
        </p>
        <p>
          Every week you spend building a business that fails these tests is a
          week you'll never get back.
        </p>
        <p>
          Every month you struggle with a business that's doomed to fail is a
          month you could have been building something that actually works.
        </p>
        <p className="font-bold">Don't let another day pass without knowing how to pick winning ideas.</p>
        <p>Get the guide. Learn the system. Change your future.</p>
        <p className="font-bold text-accent">
          It's free. It's instant. It's exactly what you need.
        </p>
        <CustomButton
          href="#opt-in"
          ariaLabel="Get The ATM Decoder Protocol"
        >
          SEND ME THE ATM DECODER PROTOCOL
        </CustomButton>
      </section>

      <div className="border-t border-secondary my-8" />

      {/* Testimonials */}
      <section className="max-w-3xl mx-auto px-6 space-y-8 mb-20">
        <h3 className="text-xl font-bold uppercase text-center mb-6">
          What People Are Saying
        </h3>
        {[
          {
            quote:
              "I wish I had these filters before I wasted ₦35,000 on a business that was doomed from day one. Now I test every idea before I spend a single kobo.",
            author: "Sarah, Abuja",
          },
          {
            quote:
              "The Pain Test alone saved me from making a huge mistake. I was about to start a business that nobody actually wanted.",
            author: "Michael, Lagos",
          },
          {
            quote:
              "These 4 filters are more valuable than the business courses I paid ₦50,000 for. And this is just the free version!",
            author: "Jennifer, Port Harcourt",
          },
        ].map(({ quote, author }, i) => (
          <div
            key={i}
            className="border border-accent rounded-lg p-6 shadow-md bg-white text-primary font-body"
          >
            <p className="italic mb-4 font-scribble text-xl">"{quote}"</p>
            <p className="font-bold text-right">- {author}</p>
          </div>
        ))}
      </section>
      <div className="flex justify-center">

      <CustomButton
          href="#opt-in"
          ariaLabel="Get The ATM Decoder Protocol"
          >
          SEND ME THE ATM DECODER PROTOCOL
        </CustomButton>
          </div>
    </main>
  );
}
