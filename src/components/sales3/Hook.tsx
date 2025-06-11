/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SavageHookSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <article className="space-y-6">
          {/* Optional scribble-note here if needed */}

          <p className="hook-intro">
            If you came here hoping I'll show you how to make ₦100k online in 3 days... just sitting at home, in your pyjamas, doing almost nothing...
          </p>

          <div className="space-y-4">
            <h2 className="hook-warning">
              You're on the wrong page.
            </h2>

            <p className="text-primary text-xl font-bold border-l-4 border-accent pl-4">
              This is not one of those 'get rich quick' lies.
            </p>
          </div>

          <div className="truth-bomb">
            <h3>This is the truth they don't tell you.</h3>
            <p>It's not sweet. But it works.</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SavageHookSection;
