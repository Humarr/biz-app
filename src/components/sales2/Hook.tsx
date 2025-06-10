import React from 'react';

const Hook: React.FC = () => {
  return (
    <section className="section-py bg-background">
      <div className="container-narrow text-center max-w-2xl mx-auto px-4">

        <p className="text-xl md:text-2xl font-headline2 text-secondary mb-6 animate-float">
          You know what drives me absolutely insane?
        </p>

        <p className="text-xl md:text-2xl font-bold text-primary mb-6">
          If I see one more cheesy post telling me to <span className="highlight">“start messy”</span>, <span className="highlight">“chase your dreams”</span>, or <span className="highlight">“just take action”</span>...
        </p>

        <h1 className="text-3xl md:text-5xl text-accent font-headline uppercase mb-6 leading-tight tracking-tight">
          I’m throwing my laptop out the damn window.
        </h1>

        <p className="text-lg md:text-xl text-secondary mb-4">
          This isn’t a <em>pep talk</em>.
        </p>

        <p className="text-xl font-bold">
          It’s an <span className="text-gradient">intervention.</span>
        </p>

      </div>
    </section>
  );
};

export default Hook;
