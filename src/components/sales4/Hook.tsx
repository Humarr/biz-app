/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const HookSection = () => {
  return (
    <section className="section-py bg-background w-full">
      <div className="container-narrow text-center">
        <div className="hook-intro mb-8">
          <p className="text-primary font-bold">
            If you came here hoping I’ll show you how to make ₦100k in 3 days...
            <br />
            Sitting at home…
            <br />
            In your pyjamas…
            <br />
            Doing almost nothing...
          </p>
        </div>
        <h2 className="hook-warning animate-float mb-6">Turn around.</h2>
        <div className="truth-bomb">
          <h3 className="text-gradient">WARNING:</h3>
          <p>This ain't that lie.</p>
          <p className="font-bold text-xl mt-4">This is the ugly truth that actually works.</p>
        </div>
      </div>
    </section>
  );
};

export default HookSection;