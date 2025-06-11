/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const SavageHookSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow">
        <article className="space-y-6">
          <div className="scribble-note text-primary text-lg">
            🧨 HOOK (Simplified + Savage):
          </div>
          
          <p className="text-secondary text-lg italic">
            If you came here hoping I'll show you how to make ₦100k online in 3 days... just sitting at home, in your pyjamas, doing almost nothing...
          </p>
          
          <div className="space-y-4">
            <h2 className="text-accent text-3xl font-bold uppercase tracking-tight">
              You're on the wrong page.
            </h2>
            
            <p className="text-primary text-xl font-bold border-l-4 border-accent pl-4">
              This is not one of those 'get rich quick' lies.
            </p>
          </div>

          <div className="bg-highlight p-4 rounded-lg">
            <h3 className="text-primary text-2xl uppercase font-bold">
              This is the truth they don't tell you.
            </h3>
            
            <p className="text-primary text-xl font-bold mt-2">
              It's not sweet. But it works.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default SavageHookSection;