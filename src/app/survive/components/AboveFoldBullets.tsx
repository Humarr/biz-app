/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const AboveFoldBullets = ({ className = "" }) => {
  const discoveryBullets = [
    "Why working 6-7 days a week will never get you off the rat wheel—and what actually keeps you trapped there that nobody talks about",
    "The real reason every \"side hustle\" feels like a scam or just doesn't work when you're already exhausted (it's not what you think, and it's not your fault)",
    "What \"broke by Tuesday every week\" actually reveals about the trap you're stuck in—and why penny-pinching and cutting expenses will never fix it",
    "Why the mental exhaustion from constantly thinking about money is actually the biggest obstacle blocking you—not lack of hustle or the money itself",
    "What those guru course sellers know about how people actually get breathing room—but will never tell you because their entire income depends on you NOT knowing"
  ];

  return (
    <div className={`max-w-3xl mx-auto ${className}`}>
      {/* Header */}
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
        Here's what you'll discover on this page...
      </h2>

      {/* Bullets */}
      <ul className="space-y-5">
        {discoveryBullets.map((bullet, index) => (
          <li key={index} className="flex gap-4 items-start">
            <span className="text-gray-400 text-2xl flex-shrink-0 mt-0.5">→</span>
            <span className="text- md:text-lg text-gray-700 leading-relaxed">
              {bullet}
            </span>
          </li>
        ))}
      </ul>

      {/* Optional divider */}
      <div className="mt-12 border-t border-gray-200"></div>
    </div>
  );
};

export default AboveFoldBullets;