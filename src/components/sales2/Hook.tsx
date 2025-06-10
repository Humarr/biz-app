// components/sections/Hook.tsx

import React from 'react';

const Hook: React.FC = () => {
  return (
    <section className="section-py">
      <div className="container-narrow text-center">
        <h1>
          If I see one more motivational post about “start messy,” “chase your dreams,” or “just take action,” I’m going to throw my laptop out the window.
        </h1>
        <p>
          This isn’t a pep talk.<br />
          It’s an <span className="text-gradient">intervention.</span>
        </p>
      </div>
    </section>
  );
};

export default Hook;
