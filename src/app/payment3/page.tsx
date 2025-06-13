/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

const PaymentPage = () => {
  return (
    <section className="section-py bg-background">
    <div className="container-narrow">
      <h2 className="text-3xl font-bold mb-12 uppercase text-center">
        ✅ You're This Close to Starting a Real Business That Pays
      </h2>
  
      <div className="mb-12">
        <p className="text-xl mb-6">
          Let's not overcomplicate this.
        </p>
        <p className="mb-6">
          You've read the page.<br />
          You've seen what this ebook can do.<br />
          You know ₦4,500 isn't what's stopping you.
        </p>
        <p className="font-bold text-xl mb-6">
          It's just that tiny voice whispering:
        </p>
        <div className="scribble-note mb-6">
          <p>"What if this is like all the other crap I've bought?"</p>
        </div>
        <p className="text-center font-bold text-xl mb-6">
          Fair.<br />
          But let's shut that voice up right now:
        </p>
        <div className="highlight-box mb-6">
          <p className="font-bold text-center">
            You're covered.
          </p>
          <p className="text-center mt-2">
            If this ebook doesn't give you the clearest, no-BS path to making money with your own business — you ask, you get your money back. Period.
          </p>
          <p className="text-center font-bold mt-2">
            No sad stories. No "wait 14 days."<br />
            Just your money, back in your account.
          </p>
        </div>
        <p className="text-center font-bold text-xl mb-6">
          But something tells me...
        </p>
        <p className="text-center font-bold text-2xl text-accent mb-6">
          You won't be asking.
        </p>
        <div className="card mb-6">
          <p className="text-center">
            Because this isn't a course.<br />
            It's not a funnel.<br />
            It's not some recycled "start affiliate marketing" garbage.
          </p>
          <p className="text-center font-bold text-xl text-accent mt-4">
            It's a raw, tactical, hilarious slap-in-the-face that shows you exactly what to do if you're broke, tired, and need a real plan.
          </p>
        </div>
        <p className="text-center font-bold text-xl mb-6">
          And you can start reading it in 2 minutes.
        </p>
      </div>
  
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-6 text-center">
          So here's how to grab your copy:
        </h3>
  
        {/* PAYMENT OPTION 1 */}
        <div className="bonus-card mb-8">
          <h4 className="text-xl font-bold mb-4 text-accent">
            💳 OPTION 1: DIRECT BANK TRANSFER (Quickest & Easiest)
          </h4>
          <p className="font-bold text-2xl mb-4">
            ₦4,500 only
          </p>
          <p className="mb-4">
            Send to the account below:
          </p>
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <p className="font-bold">Bank Name: MoniePoint</p>
            <p className="font-bold">Account Number: 8121466644</p>
            <p className="font-bold">Account Name: UMAR MOBOLAJI SAADU</p>
          </div>
          <p className="mb-4">
            Once you've sent payment, screenshot it and send to:
          </p>
          <div className="text-center">
            <a href="https://wa.me/2348121466644" className="btn-secondary inline-block">
              📥 WhatsApp
            </a>
          </div>
          <p className="font-bold mt-4">
            You'll get:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>The full 37-page ebook</li>
            <li>All 3 savage bonuses</li>
            <li>And the "Yeah... A Guarantee" refund policy</li>
          </ul>
          <p className="font-bold text-accent">
            Boom. Done. No delays.
          </p>
        </div>
  
        {/* PAYMENT OPTION 2 */}
        <div className="bonus-card mb-8">
          <h4 className="text-xl font-bold mb-4 text-accent">
            🌍 OPTION 2: PAY VIA SELAR (Card, Transfer, PayPal — anything)
          </h4>
          <p className="mb-4">
            Prefer a clean checkout page with receipts and all?<br />
            Cool.
          </p>
          <p className="font-bold mb-4">
            Click the button below to pay through Selar's secure system:
          </p>
          <div className="text-center">
            <Link href="https://selar.com/6100u6" passHref>
            <button className="btn-primary text-xl px-8 py-4 mb-4">
              Pay Securely via Selar
            </button>
            </Link>
          </div>
          <p className="text-center">
            Once you pay, you'll get instant access to your files.<br />
            No stress. No "admin will contact you."<br />
            It's all automated.
          </p>
        </div>
      </div>
  
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-6">
          Still Thinking?
        </h3>
        <p className="font-bold text-xl mb-6">
          If ₦4,500 is too much to learn how to stop being broke...
        </p>
        <p className="text-center font-bold text-xl text-accent mb-6">
          Then respectfully —<br />
          you're not ready to start a business anyway.
        </p>
        <div className="card mb-6">
          <p className="font-bold">
            But if you're tired of begging.<br />
            Tired of fake advice.<br />
            Tired of watching people "blow" while you wait for a miracle...
          </p>
          <p className="font-bold text-xl text-accent mt-4">
            Then let this be the start.
          </p>
        </div>
        <p className="font-bold text-xl mb-6">
          Make your move.<br />
          Or miss it.
        </p>
        <p className="font-bold text-xl mb-6">
          Your call.
        </p>

        <Link href="https://selar.com/6100u6" passHref>
        <button className="btn-primary text-2xl px-8 py-4 mb-6 animate-chill-pulse">
          [YES — I WANT IN. LET ME PAY]
        </button>
        </Link>
        <p className="font-bold text-2xl">
          👇👇👇
        </p>
      </div>
    </div>
  </section>
  );
};

export default PaymentPage;