/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ProductBreakdownSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center uppercase tracking-wide">
            Here's what you get inside
          </h2>
          <h3 className="text-2xl font-bold text-center text-accent">
            "Don't Start a Business... Until You Read This 37-Page Rant"
          </h3>
          <p className="text-xl text-center">
            And why it might just be the last business advice you'll ever need 👇🏽
          </p>

          <div className="grid gap-6 md:grid-cols-2 mt-12">
            {/* Chapter 1 */}
            <div className="bonus-card">
              <h4 className="text-xl font-bold mb-2">🧨 Chapter 1: The Lies They Sell the Broke</h4>
              <p>
                You'll finally understand why your "consistency" hasn't paid off, and why every "just start" video is secretly setting you up to fail.
              </p>
            </div>

            {/* Chapter 2 */}
            <div className="bonus-card">
              <h4 className="text-xl font-bold mb-2">🔥 Chapter 2: The One Filter That Changes Everything</h4>
              <p>
                A dead-simple test you can use to instantly eliminate 90% of trash ideas before you waste one more naira or second of your life.
              </p>
            </div>

            {/* Chapter 3 */}
            <div className="bonus-card">
              <h4 className="text-xl font-bold mb-2">💸 Chapter 3: The 'Naira Extraction' Method</h4>
              <p>
                Want to make ₦3k–₦10k in 48 hours? This is the chapter that shows you how. With what you already know. No followers. No ads. No miracles.
              </p>
            </div>

            {/* Chapter 4 */}
            <div className="bonus-card">
              <h4 className="text-xl font-bold mb-2">🤯 Chapter 4: Why You're Stuck (And How to Flip It)</h4>
              <p>
                You'll see the invisible pattern that keeps broke beginners poor... and how to step out of it like a prison break.
              </p>
            </div>

            {/* Chapter 5 */}
            <div className="bonus-card">
              <h4 className="text-xl font-bold mb-2">🧠 Chapter 5: Money Psychology for the Hungry</h4>
              <p>
                You don't need more skills. You need to think like someone who makes money. This chapter shows you how the rich think when they're broke.
              </p>
            </div>

            {/* Chapter 6 */}
            <div className="bonus-card">
              <h4 className="text-xl font-bold mb-2">📈 Chapter 6: The Reinvestment Flywheel</h4>
              <p>
                You'll learn exactly how to flip ₦3k into ₦30k, and ₦30k into your first 6-figure push — without needing a laptop, graphics, or vibe.
              </p>
            </div>

            {/* Chapter 7 */}
            <div className="bonus-card md:col-span-2">
              <h4 className="text-xl font-bold mb-2">🧹 Chapter 7: The Clean Slate Protocol</h4>
              <p>
                I strip away every excuse, confusion, and misstep you've collected from fake mentors, YouTube fog, and past failures — so you can rebuild.
              </p>
            </div>
          </div>

          <div className="truth-bomb mt-12">
            <p className="text-xl font-bold text-center">
              This isn't some 'feel-good' flufffest.
            </p>
            <p className="text-xl text-center mt-4">
              Every page exists for one reason:
              <br />
              <span className="font-bold text-accent">👉🏽 To help you make your first (or next) ₦30k from scratch — fast, ethically, and without selling your soul.</span>
            </p>
          </div>

          <div className="text-center mt-8 space-y-4">
            <p className="text-xl">
              You won't find passive income dreams here.
            </p>
            <p className="text-2xl font-bold">
              But if you're ready to sell something real, to real people, for real cash?
            </p>
            <p className="text-2xl font-bold text-accent">
              This rant is the reset your hustle has been dying for.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button className="btn-primary text-xl px-8 py-4 hover:scale-105 transition-transform">
              GET INSTANT ACCESS NOW →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductBreakdownSection;