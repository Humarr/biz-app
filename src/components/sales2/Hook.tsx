/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const HookSection = () => {
  return (
    <section className="section-py bg-background">
      <div className="container-narrow text-center">
        <h1 className="text-primary mb-6">
          <span className="highlight px-2">If I see one more motivational post</span> about 
          <span className="text-accent"> “start messy,”</span> 
          <span className="text-accent"> “chase your dreams,”</span> or 
          <span className="text-accent"> “just take action,”</span> 
          <span className="block">I'm going to throw my laptop out the window.</span>
        </h1>
        <h2 className="text-3xl text-accent mb-4">
          This isn't a pep talk.
        </h2>
        <h3 className="text-4xl text-primary">
          It's an intervention.
        </h3>
      </div>
    </section>
  );
};

export default HookSection;
