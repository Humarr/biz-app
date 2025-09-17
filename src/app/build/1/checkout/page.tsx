/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';
// import Image from 'next/image';

const PaymentPage = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-gradient-to-b from-blue-50 to-green-50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800">
          SECURE YOUR COPY OF "THE SMALL BUSINESS PLAYBOOK" NOW
        </h2>
        <div className="bg-yellow-100 p-6 rounded-lg border-l-4 border-yellow-500">
          <p className="text-xl font-bold mb-4">Congratulations.</p>
          <p className="text-xl">You've made the smartest decision of your year.</p>
        </div>
      </div>
  
      <div className="bg-white p-8 rounded-xl shadow-lg mb-12">
        <p className="text-xl mb-8 text-center">
          All that's left now is 2 minutes of action to secure your Playbook + the juicy gifts before they vanish.
        </p>
        
        <h3 className="text-2xl font-bold mb-6 text-center">
          Choose your payment method below and follow the quick steps:
        </h3>
  
        <div id='bank-transfer' className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Bank Transfer Option */}
          <div className="bg-blue-50 p-6 rounded-lg border-2 border-blue-300">
            <div className="flex items-center mb-4">
              <div className="bg-red-500 text-white p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-blue-800">Option 1: Direct Bank Transfer (Fast & Easy)</h4>
            </div>
            
            <p className="mb-4">Send ₦9,950 to the account below:</p>
            
            <div className="bg-white p-4 rounded-lg mb-4">
              <p className="font-semibold">Bank: Opay</p>
              <p className="font-semibold">Account Name: Umar Mobolaji Saadu </p>
              <p className="font-semibold">Account Number: 6141949210</p>
            </div>
            
            <p className="mb-4">
              After payment, screenshot your receipt and send it to:
              <br />
              <span className="font-semibold">📩 Email: thecashologists00@gmail.com</span>
              {/* <span className="font-semibold">📩 WhatsApp: [Your Number] OR Email: thecashologists00@gmail.com</span> */}
            </p>
            
            <p className="font-semibold">
              Once confirmed, your Playbook + bonuses will be delivered straight to your email.
            </p>
            
            <div className="bg-green-100 p-3 rounded-lg mt-4 text-center">
              <p className="font-bold">✅ Done in less than 3 minutes.</p>
            </div>
            
            <div className="text-center mt-6">
              <Link 
                href="#bank-transfer" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors duration-300"
              >
                👉 PAY VIA BANK TRANSFER
              </Link>
            </div>
          </div>
  
          {/* Selar Payment Option */}
          <div id='selar' className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-500 text-white p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-bold text-green-800">🚀 Option 2: Pay Through Selar (Safe, Secure & Instant Access)</h4>
            </div>
            
            <p className="mb-4">If you prefer online checkout with card, transfer, USSD, or even wallet, use Selar.</p>
            
            <p className="font-semibold mb-4">Here's how:</p>
            
            <ol className="list-decimal pl-5 space-y-2 mb-4">
              <li>Click the "Buy Now on Selar" button below.</li>
              <li>You'll land on the official Selar checkout page.</li>
              <li>Hit the Checkout button.</li>
              <li>Fill in your Name & Email (so your Playbook can be delivered to you immediately).</li>
              <li>Choose your payment option: Bank Transfer, Card, USSD, or Wallet.</li>
              <li>Complete payment.</li>
            </ol>
            
            <p className="font-semibold">
              📩 Instantly, your Playbook + bonuses will be sent to your email.
            </p>
            
            <div className="text-center mt-6">
              <Link 
                href="https://selar.com/small-biz" 
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg inline-block transition-colors duration-300"
              >
                👉 PAY VIA SELAR
              </Link>
            </div>
          </div>
        </div>
  
        {/* What Happens After Payment */}
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500 mb-8">
          <h3 className="text-xl font-bold mb-4 text-purple-800">🛡️ What Happens After You Pay</h3>
          <p className="mb-4">No guesswork. No delay. Here's exactly what happens once you pay:</p>
          
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Your payment is confirmed instantly.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              You'll receive an email with a download link to The Small Business Playbook + your 2 juicy bonuses.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Can't find the email? Check your spam/junk folder.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              Still not there? Don't stress—send me a quick WhatsApp or email and I'll personally send it to you.
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold mr-2">•</span>
              You'll be reading your Playbook and planning your business in less than 10 minutes.
            </li>
          </ul>
        </div>
  
        {/* Money-Back Guarantee */}
        <div className="bg-green-50 p-6 rounded-lg border-2 border-green-400 mb-8">
          <h3 className="text-xl font-bold mb-4 text-green-800">✅ 100% Money-Back Guarantee</h3>
          <p className="mb-4">Listen—this isn't a gamble.</p>
          <p className="mb-4">
            Grab the Playbook today, dive in, and if you don't see a clear path to starting and growing a business that could make you ₦500k – ₦1m monthly, just email me at thecashologists00@gmail.com.
          </p>
          <p className="font-bold text-center">
            I'll refund every single kobo. No stories. No excuses.
          </p>
          <p className="font-bold text-center mt-4 text-red-600">
            The only way you lose is if you do nothing.
          </p>
        </div>
  
        {/* Urgent Reminder */}
        <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-8">
          <h3 className="text-xl font-bold mb-4 text-red-800">⚠️ URGENT REMINDER</h3>
          <p className="mb-4">Price is ₦9,950 now, but in 72 hours it jumps to ₦25,000.</p>
          <p className="mb-4">Your bonuses vanish once the timer expires.</p>
          <p className="font-bold">
            Don't leave this page thinking "I'll come back later." Later = Never.
          </p>
        </div>
  
        {/* Final Word */}
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">💡 Final Word:</h3>
          <p className="text-xl mb-6">This is your shot to break free. Take it.</p>
          <p className="text-xl font-bold mb-8">Click your preferred payment method below and secure your Playbook now:</p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="#bank-transfer" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
            >
              👉 PAY VIA BANK TRANSFER
            </Link>
            <Link 
              href="https://selar.com/small-biz" 
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-center"
            >
              👉 PAY VIA SELAR
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
};

export default PaymentPage;