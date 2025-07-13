/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";


export default function OptInPage() {
  return (
    <div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-8 my-16">
    {/* Headline */}
    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
      Enter Your Details Below To Access The Complete Money Switch Method
    </h2>
  
    {/* Subheadline Warning */}
    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
      <p className="font-semibold text-red-700">
        Warning: This method is NOT for dreamers, job hoppers, or people looking for get-rich-quick schemes. Only serious people who are ready to escape the 9-to-5 trap forever should proceed.
      </p>
    </div>
  
    {/* Benefit Bullets */}
    <ul className="space-y-4 mb-8">
      <li className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <span>Discover how to flip your "Money Switch" before you even quit your job (this eliminates 95% of the risk in starting a business)</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <span>Learn the "Day 1 Profit System" that makes your business profitable from the very first day (no struggling for months or years)</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <span>Get the "Salary Replacement Formula" - the exact calculation to know when you can safely quit your job (most people quit too early or too late)</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <span>Access the "Zero Capital Cash Method" that starts generating money before you spend a single naira (works even if you're completely broke)</span>
      </li>
      <li className="flex items-start">
        <span className="text-green-600 mr-2">✓</span>
        <span>Receive the "Boss Escape Plan" - the step-by-step system to transition from employee to business owner without burning bridges</span>
      </li>
    </ul>
  
    {/* Supporting Text */}
    <div className="mb-8">
      <p className="mb-4">
        Look, I could sell this method to HR managers for ₦100,000 because it shows people how to escape jobs...
      </p>
      <p className="font-bold mb-4">
        But I'm giving you complete access right now.
      </p>
      <p className="mb-4">
        Why? Because I remember what it felt like to be trapped in a job, watching my dreams die a little more each day.
      </p>
      <p className="mb-4">
        I remember the fear, the desperation, the feeling of being stuck forever.
      </p>
      <p className="font-bold">
        And I know that once you see how simple this really is, you'll never want to work for someone else again.
      </p>
      <p className="mt-4">
        Enter your details and I'll send you immediate access to the complete Money Switch Method.
      </p>
    </div>
  
    {/* Form Fields */}
    <div className="space-y-4 mb-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
        <input 
          type="text" 
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your first name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
        <input 
          type="email" 
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your best email"
        />
      </div>
    </div>
  
    {/* Urgency Reminder */}
    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
      <p className="font-semibold">
        Limited Access: I'm only sharing this with 500 people before taking it down. 347 spots remaining.
      </p>
    </div>
  
    {/* CTA Button */}
    <Link href="/biz/3/sell">
    <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-md text-lg transition duration-200 cursor-pointer">
      SHOW ME HOW TO ESCAPE MY JOB WITH THE MONEY SWITCH
    </button>
    </Link>
  </div>
  );
}