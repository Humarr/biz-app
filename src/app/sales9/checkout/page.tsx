/* eslint-disable react/no-unescaped-entities */
// app/checkout/page.tsx
'use client';
import React from 'react';

export default function CheckoutPage() {
  

    const handleSubmit = () => {
        // Analytics tracking placeholder
        console.log("User submitted checkout form");

        window.location.href = "https://selar.com/012403";

    };
  return (
    <main className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 font-sans bg-white min-h-screen">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-red-600 text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          You're 60 Seconds From Knowing How to Pick Profitable Ideas — Every Time
        </h1>
        <p className="text-green-600 text-lg sm:text-xl font-medium">
          Your Ultimate Cash Machine guide is almost yours. Secure your copy below.
        </p>
      </header>

      {/* Benefits Reminder */}
      <section className="mb-8 bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-400">
        <h2 className="font-bold mb-3 text-lg">🔥 Quick Benefit Reminders</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✅</span>
            <span>Learn the secret to testing any business idea before spending a single kobo</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✅</span>
            <span>Discover how to create offers so irresistible customers beg to buy</span>
          </li>
          <li className="flex items-start">
            <span className="bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">✅</span>
            <span>Turn your unique skills into cash — even if you've failed before</span>
          </li>
        </ul>
      </section>

      {/* Checkout Form */}
      <section className="mb-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Complete Your Purchase</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
              placeholder="your@email.com"
            />
          </div>
          
          {/* Payment Method */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Payment Method *
            </label>
            <div className="space-y-2">
              <div className="flex items-center">
                <input
                  id="card"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  defaultChecked
                />
                <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">
                  Credit/Debit Card
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="transfer"
                  name="payment"
                  type="radio"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                />
                <label htmlFor="transfer" className="ml-3 block text-sm font-medium text-gray-700">
                  Bank Transfer
                </label>
              </div>
            </div>
          </div>
          
          {/* Card Fields (shown when card selected) */}
          <div className="space-y-4">
            <div>
              <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                Card Number *
              </label>
              <input
                type="text"
                id="card-number"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                  Expiry Date *
                </label>
                <input
                  type="text"
                  id="expiry"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <label htmlFor="cvc" className="block text-sm font-medium text-gray-700 mb-1">
                  CVC *
                </label>
                <input
                  type="text"
                  id="cvc"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
          
          {/* Price Display */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center">
              <span className="font-medium">Ultimate Cash Machine Guide</span>
              <span className="font-bold">₦9,999</span>
            </div>
          </div>
          
          {/* Trust Boosters */}
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <div className="flex items-center">
              <span className="text-green-600 mr-1">🔒</span>
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center">
              <span className="text-green-600 mr-1">⚡</span>
              <span>Instant Access</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-600 mr-1">⏳</span>
              <span>Limited-Time Offer</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-200"
          >
            Get Instant Access Now →
          </button>
        </form>
      </section>

      {/* Fear Squashers */}
      <section className="mb-8 bg-blue-50 p-5 rounded-lg">
        <h2 className="font-bold mb-3 text-lg">😰 Buyer Fear Squashers</h2>
        <div className="space-y-3">
          <div>
            <p className="font-medium">Worried this won't work for you?</p>
            <p>The Ultimate Cash Machine works for any industry, any experience level — as long as you follow the steps.</p>
          </div>
          <div>
            <p className="font-medium">Afraid you'll waste money (again)?</p>
            <p>This guide costs less than a new pair of shoes — but can save you from losing hundreds of thousands on bad ideas.</p>
          </div>
          <div>
            <p className="font-medium">Not good at "business stuff"?</p>
            <p>It's designed in plain language even if you can't spell "entrepreneur."</p>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="flex flex-wrap justify-center gap-6 text-sm mb-8">
        <div className="flex items-center">
          <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">✅</span>
          <span>100% Secure Checkout</span>
        </div>
        <div className="flex items-center">
          <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">✅</span>
          <span>Instant Digital Delivery</span>
        </div>
        <div className="flex items-center">
          <span className="bg-green-100 text-green-800 rounded-full p-1 mr-2">✅</span>
          <span>Customer Support: help@ultimatecash.com</span>
        </div>
      </section>

      {/* Optional Thank You Page (commented out for implementation post-payment) */}
      {/*
      <section className="text-center bg-green-50 p-8 rounded-xl">
        <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
        <p className="mb-6">Your Ultimate Cash Machine guide is on its way to your inbox.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg">
          See More Resources →
        </button>
      </section>
      */}
    </main>
  );
}