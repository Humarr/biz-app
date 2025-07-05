/* eslint-disable react/no-unescaped-entities */
'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LeadPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const validateEmail = (email: string) => {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    // Simple Nigerian phone number validation: starts with 0 and 10-11 digits total
    return /^0\d{9,10}$/.test(phone);
  };

  const validate = () => {
    const newErrors: typeof errors = {};

    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!email.trim()) newErrors.email = 'Email is required.';
    else if (!validateEmail(email)) newErrors.email = 'Please enter a valid email address.';
    if (!phone.trim()) newErrors.phone = 'Phone number is required.';
    else if (!validatePhone(phone)) newErrors.phone = 'Please enter a valid Nigerian phone number.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    // Analytics tracking placeholder
    console.log('User submitted lead form:', { name, email, phone });

    localStorage.setItem('userInfo', JSON.stringify({ name, email, phone }));

    // Navigate (query params optional for first load)
    router.push('/sales9/lead-magnet');
  };

  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-sans bg-white min-h-screen">
      {/* Hero Section */}
      <section className="py-8 md:py-12 text-center">
        <h1 className="text-red-600 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Stop Guessing. Start Winning.
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Get the 5 Business Autopsies That Show Why 90% of Nigerians Stay Broke — Even After "Starting a Business."
        </h2>

        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-600 max-w-2xl mx-auto mb-8">
          <p className="text-lg sm:text-xl font-semibold text-green-800">
            Before you risk your next kobo — see why most businesses die before their first customer walks in.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-10 md:mb-14 bg-gray-50 p-6 rounded-xl">
        <ul className="space-y-4 max-w-2xl mx-auto">
          {[
            'Discover how trends trick you into wasting money on ideas that die overnight',
            "The #1 reason your \"perfect shop\" ends up emptier than a politician's promise",
            "Why copying your neighbor's hustle is economic suicide — and what to do instead",
            'The pricing mistake that makes you work harder but earn crumbs',
            'The simple way to know before you spend a naira whether your idea will sell',
          ].map((item, idx) => (
            <li key={idx} className="flex items-start">
              <span className="bg-green-500 text-white rounded-full w-9 h-6 flex items-center justify-center mr-3 mt-1">
                &#10003;
              </span>
              <span className="text-lg font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Pain Hook Section */}
      <section className="mb-10 md:mb-14 text-center">
        <div className="bg-red-50 p-6 rounded-lg border-l-8 border-red-600 max-w-2xl mx-auto">
          <p className="text-xl sm:text-2xl font-bold text-red-700 mb-2">
            Tired of watching your hustle crash while others make money?
          </p>
          <p className="text-lg sm:text-xl">
            Stop spinning the business roulette wheel blindfolded. Learn what smart entrepreneurs know — before you join the 90% graveyard.
          </p>
        </div>
      </section>

      {/* Opt-In Form */}
      <section className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 border-2 border-gray-200">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Get Your Free Reports Now</h3>

        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none ${
                errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
              }`}
              placeholder="John Doe"
              aria-describedby="name-error"
              required
            />
            {errors.name && (
              <p id="name-error" className="text-red-600 text-sm mt-1">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none ${
                errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
              }`}
              placeholder="your@email.com"
              aria-describedby="email-error"
              required
            />
            {errors.email && (
              <p id="email-error" className="text-red-600 text-sm mt-1">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none ${
                errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:border-green-500 focus:ring-green-500'
              }`}
              placeholder="08012345678"
              aria-describedby="phone-error"
              required
            />
            {errors.phone && (
              <p id="phone-error" className="text-red-600 text-sm mt-1">
                {errors.phone}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg text-lg transition duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!name || !email || !phone}
          >
            Get the Free Autopsy Reports Now →
          </button>
        </form>

        <p className="text-xs text-gray-500 mt-4 text-center">We hate spam. Your email stays 100% safe.</p>
      </section>
    </main>
  );
}
