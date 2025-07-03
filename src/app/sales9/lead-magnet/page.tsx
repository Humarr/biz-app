/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
'use client';
import React from "react";
import { useRouter } from "next/navigation";

export default function AutopsyReport() {
  const router = useRouter();

  const handleSubmit = () => {
    // Analytics tracking placeholder
    console.log("User submitted autopsy report");

    router.push("/sales9/salespage");
  };

  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8 font-sans bg-white">
      {/* Header */}
      <header className="text-center mb-10 md:mb-14 border-b-2 border-gray-200 pb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-gray-900">
          THE 5 BUSINESS AUTOPSIES
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
          Why 90% of Nigerian Businesses Fail — And How to Avoid It
        </h2>
        <div className="mt-4 text-gray-500 font-medium">
          {/* [Your Logo or Brand Name Here] */}
          {/* The Don't Start a Business Until You Read This Company's Autopsy Report */}
        </div>
      </header>

      {/* Introduction */}
      <section className="mb-12 bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-800">
          🟢 Introduction: The Streets Are Littered With Dead Businesses
        </h3>
        <p className="mb-4 font-medium">It's not a joke.</p>
        <p className="mb-4">
          Every street has them: shops that open with fireworks, then quietly
          close.
          <br />
          POS kiosks that stay empty.
          <br />
          Salons with stylists staring into space.
          <br />
          Boutiques with stock that never moves.
        </p>
        <p className="mb-4 font-semibold">The truth?</p>
        <p className="mb-4">
          Most Nigerians don't fail because they're lazy or don't hustle hard
          enough.
          <br />
          They fail because they{" "}
          <span className="font-bold text-red-600">GUESS</span> what business to
          start — and the market punishes guessers without mercy.
        </p>
        <p>
          This short guide shows 5 true-to-life autopsies of how businesses die
          — so you can dodge the same graves.
        </p>
      </section>

      {/* Autopsy 1 */}
      <section className="mb-12 bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-800">
          🔴 AUTOPSY 1: THE TREND TRAP
        </h3>
        <h4 className="font-bold mb-2 text-gray-800">Scene of the Crime:</h4>
        <p className="mb-4">
          When Musa saw everyone rushing into the phone accessory business, he
          thought he'd hit gold. He emptied his savings to fill a glass counter
          with chargers, power banks, and cases.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          How the Death Happened:
        </h4>
        <p className="mb-4">
          By the time he launched, 14 other shops on his street were selling the
          same accessories. Prices crashed. Customers haggled him down to
          losses. Musa shut his shop within 3 months.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          What the Autopsy Revealed:
        </h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="font-bold text-red-600">
            🔥 Trends are like ripe bananas — by the time they reach you,
            they're rotting.
          </p>
          <p>
            Instead of chasing what's "hot," learn how to spot underserved needs
            where competition is low but demand is real.
          </p>
        </div>
      </section>

      {/* Autopsy 2 */}
      <section className="mb-12 bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-800">
          🔴 AUTOPSY 2: THE LOCATION LIE
        </h3>
        <h4 className="font-bold mb-2 text-gray-800">Scene of the Crime:</h4>
        <p className="mb-4">
          Ngozi paid ₦350k/year for a shop at the end of a "busy" road. She
          stocked beautiful clothes and hired assistants. She thought location
          alone would make her rich.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          How the Death Happened:
        </h4>
        <p className="mb-4">
          Weeks went by without customers. Turns out the road was busy with
          buses zooming past — not pedestrians who'd actually shop.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          What the Autopsy Revealed:
        </h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="font-bold text-red-600">
            🔥 Traffic doesn't mean buyers — it means movement.
          </p>
          <p>
            Always test foot traffic with simple surveys or stalls before
            renting. Know who passes, how often, and if they'd buy what you
            sell.
          </p>
        </div>
      </section>

      {/* Autopsy 3 */}
      <section className="mb-12 bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-800">
          🔴 AUTOPSY 3: THE COPYCAT CURSE
        </h3>
        <h4 className="font-bold mb-2 text-gray-800">Scene of the Crime:</h4>
        <p className="mb-4">
          Aisha watched her cousin blow up selling wigs on Instagram. She took a
          loan, bought 200k worth of wigs, and launched an identical page.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          How the Death Happened:
        </h4>
        <p className="mb-4">
          Customers kept buying from her cousin, who had reputation,
          testimonials, and loyal fans. Aisha's page stayed empty.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          What the Autopsy Revealed:
        </h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="font-bold text-red-600">
            🔥 Copycats die. Originals win.
          </p>
          <p>
            You need a unique angle or irresistible offer, not just a cloned
            product. Otherwise, why should customers leave someone they already
            trust?
          </p>
        </div>
      </section>

      {/* Autopsy 4 */}
      <section className="mb-12 bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-800">
          🔴 AUTOPSY 4: THE PRICING PIT
        </h3>
        <h4 className="font-bold mb-2 text-gray-800">Scene of the Crime:</h4>
        <p className="mb-4">
          Emeka started selling sneakers online. He guessed ₦25,000 was fair
          since competitors charged ₦28,000.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          How the Death Happened:
        </h4>
        <p className="mb-4">
          He got a few sales but realized he was losing money after delivery
          costs. Worse, some buyers ghosted him because they saw cheaper prices
          elsewhere.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          What the Autopsy Revealed:
        </h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="font-bold text-red-600">
            🔥 Guessing your price = digging your grave.
          </p>
          <p>
            Test different price points with small batches or paid ads. Price
            isn't about what feels "okay" — it's what the market will happily
            pay and still leave you profit.
          </p>
        </div>
      </section>

      {/* Autopsy 5 */}
      <section className="mb-12 bg-red-50 p-6 rounded-xl border-l-4 border-red-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-red-800">
          🔴 AUTOPSY 5: THE DEMAND MIRAGE
        </h3>
        <h4 className="font-bold mb-2 text-gray-800">Scene of the Crime:</h4>
        <p className="mb-4">
          Femi always dreamed of opening a gaming café in his small town. He
          borrowed from family, bought consoles, rented space, decorated it with
          posters.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          How the Death Happened:
        </h4>
        <p className="mb-4">
          Three months in, he realized his town had only 20 young people who
          liked gaming — and most preferred playing at home.
        </p>
        <h4 className="font-bold mb-2 text-gray-800">
          What the Autopsy Revealed:
        </h4>
        <div className="bg-white p-4 rounded-lg border border-gray-200">
          <p className="font-bold text-red-600">
            🔥 Selling what you love is different from selling what the market
            will pay for today.
          </p>
          <p>
            Identify problems people are desperate to solve, not just hobbies
            you wish would sell.
          </p>
        </div>
      </section>

      {/* Conclusion */}
      <section className="mb-12 bg-green-50 p-6 rounded-xl border-l-4 border-green-600">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-green-800">
          🟢 Conclusion: Are You Next in Line for the Business Graveyard?
        </h3>
        <p className="mb-4">
          Every failed business here had one thing in common:{" "}
          <span className="font-bold">guessing instead of testing</span>.
        </p>
        <p className="mb-4 font-semibold italic">
          They bet on hope instead of proof.
          <br />
          And hope doesn't pay rent.
        </p>
      </section>

      {/* CTA */}
      <section className="text-center bg-yellow-50 p-8 rounded-xl border-2 border-yellow-400">
        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
          🚀 Your Next Move
        </h3>
        <p className="mb-6 text-lg">
          There's a better way.
          <br />A stupidly simple way to test any business idea in days — not
          months — and see if it will sell like crazy before you spend a kobo
          renting shops or stocking inventory.
        </p>
        <p className="mb-6 text-lg font-semibold">
          This is exactly what the Ultimate Cash Machine system shows you
          step-by-step.
        </p>
        <button
          onClick={handleSubmit}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition duration-200 cursor-pointer"
        >
          👉 See How to Pick Winning Business Ideas Before You Risk a Kobo →
        </button>
        <p className="mt-6 text-sm italic">
          PS: Nigeria doesn't reward hustlers. It rewards smart people who know
          what customers will buy before they even start. Don't guess — learn
          how to print cash like a hacked ATM.
        </p>
      </section>
    </main>
  );
}
