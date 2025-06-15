/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

const PaymentPage = () => {
  return (
    <section className="section-py bg-gradient-to-b from-gray-50 to-white">
    <div className="container max-w-2xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border-2 border-amber-200">
        <header className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your Payment Weapon
          </h1>
          <p className="text-xl">
            You're 1 step away from turning your garri into alerts.
          </p>
          <p className="text-lg text-gray-600">
            Pick your payment method below — whichever's faster for you.
          </p>
        </header>
  
        <div className="mb-12">
          <p className="text-center mb-6">
            We'll send your ebook and bonuses immediately after payment. <br/>
            No delays. No chasing.
          </p>
        </div>
  
        {/* Payment Option 1 */}
        <div className="bg-green-50 rounded-xl p-6 md:p-8 mb-12 border-2 border-green-300">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">💳</span>
            <h2 className="text-2xl font-bold">PAY VIA BANK TRANSFER (Fastest)</h2>
          </div>
          <p className="text-lg mb-6">
            Want it straight to the point? Do a direct transfer.
          </p>
  
          <div className="bg-white p-4 rounded-lg mb-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="font-bold">📍 Amount:</p>
                <p className="text-xl font-bold text-green-600">₦4,500</p>
              </div>
              <div>
                <p className="font-bold">🏦 Account Name:</p>
                <p>UMAR MOBOLAJI SAADU</p>
              </div>
              <div>
                <p className="font-bold">🏦 Bank Name:</p>
                <p>MONIEPOINT</p>
              </div>
              <div>
                <p className="font-bold">🔢 Account Number:</p>
                <p>8121466644</p>
              </div>
            </div>
          </div>
  
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p className="font-bold mb-2">IMPORTANT:</p>
            <p className="mb-3">
              After payment, send your payment proof (screenshot or transfer receipt) to:
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center">
                📲 WhatsApp: +2348121466644
              </span>
              <span className="flex items-center">
                📧 Email:saaduumar42@gmail.com
              </span>
            </div>
            <p className="mt-3">
              We'll confirm and send you the ebook + bonuses ASAP.<br/>
              <span className="font-bold">Usually within 5–15 mins.</span>
            </p>
          </div>
        </div>
  
        {/* Payment Option 2 */}
        <div className="bg-blue-50 rounded-xl p-6 md:p-8 mb-12 border-2 border-blue-300">
          <div className="flex items-center mb-4">
            <span className="text-3xl mr-3">🔐</span>
            <h2 className="text-2xl font-bold">PAY VIA SELAR (Card / Transfer / USSD)</h2>
          </div>
          <p className="text-lg mb-6">
            Don't like chatting? Prefer auto-delivery?<br/>
            Click below to pay securely via Selar.
          </p>
  
          <div className="space-y-3 mb-6">
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-2">✅</span>
              Instant access
            </p>
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-2">✅</span>
              Accepts cards, bank transfer, and USSD
            </p>
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-2">✅</span>
              No back-and-forth
            </p>
          </div>
  
          <Link 
            href="https://selar.com/6100u6" 
            passHref
          >
            <button className="btn-primary w-full text-center py-4 px-6 font-bold bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-500 hover:to-blue-700 transition-all">
            Pay Securely via Selar — Click Here
            </button>
          </Link>
        </div>
  
        {/* Help Section */}
        <div className="bg-red-50 rounded-xl p-6 mb-12 border-2 border-red-200">
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <span className="text-3xl mr-3">🔥</span>
            NEED HELP?
          </h2>
          <p className="mb-4">
            If you're stuck, confused, or want to ask anything first...
          </p>
          <Link 
            href="https://wa.me/+2348121466644" 
            passHref
          >
            <button className="btn-primary w-full text-center py-4 px-6 font-bold bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700">
            📲 WhatsApp me here: +2348121466644
            </button>
          </Link>
          <p className="mt-3 text-sm">
            I'll respond fast — no bots, no waiting 3 days.
          </p>
        </div>
  
        {/* What You Get */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-center">
            ✅ AFTER PAYMENT, HERE'S WHAT YOU GET:
          </h2>
          <div className="space-y-4">
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-3">•</span>
              Full access to the "Don't Start a Business..." Ebook
            </p>
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-3">•</span>
              3 juicy bonuses (Impulse Offer Alchemy, Landing Page Guide, Broke-to-Bank Blueprint)
            </p>
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-3">•</span>
              Lifetime access — even if the price goes up later
            </p>
            <p className="flex items-start">
              <span className="inline-block w-5 h-5 text-green-500 mr-3">•</span>
              Real-world business strategy — not recycled guru BS
            </p>
          </div>
        </div>
  
        {/* Final Nudge */}
        <div className="text-center border-t border-gray-200 pt-8">
          <h3 className="text-2xl font-bold mb-4">🧠 Final Nudge:</h3>
          <p className="text-xl mb-6">
            You already know this could change your life.
          </p>
          <p className="text-lg font-bold mb-6">
            ₦4,500 is not the problem.<br/>
            <span className="text-red-600">
              Wasting another month wondering "what if?"... is.
            </span>
          </p>
          <p className="text-2xl font-bold mb-8">
            👇 Make the move now — we'll see you inside.
          </p>

          <Link 
            href="https://wa.me/+2348121466644" 
            passHref
          >
            <button className="btn-primary w-full text-center py-4 px-6 font-bold bg-gradient-to-r from-green-600 to-green-800 hover:from-green-500 hover:to-green-700">
            📲 WhatsApp me here: +2348121466644
            </button>
          </Link>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PaymentPage;