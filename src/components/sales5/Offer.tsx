/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";
import Image from "next/image";

const Offer = () => {
  return (
    <section className="section-py bg-gradient-to-b from-gray-50 to-amber-50">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border-2 border-amber-200 animate-fade-in">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              You need a book like...
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent mb-4">
              "Don’t Start a Business… Until You Read This 37-Page Rant"
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              A Brutally Honest Guide to Starting a Business That Actually Makes
              Money (and Doesn’t Ruin Your Life)
            </p>
            <div className="mt-8 flex justify-center">
              <Image
                src="/mockups/ebook-cover.png"
                alt="Don't Start a Business eBook Cover"
                width={400}
                height={500}
                className="rounded-xl shadow-lg border border-amber-200"
              />
            </div>
          </div>

          <div className="bg-red-50 rounded-xl p-8 mb-16 border border-red-200">
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <span className="font-scribble text-xl bg-white px-4 py-2 border border-red-300">
                Not a "dream big" motivation book
              </span>
              <span className="font-scribble text-xl bg-white px-4 py-2 border border-red-300">
                Not "5 passive income ideas"
              </span>
              <span className="font-scribble text-xl bg-red-200 px-4 py-2 font-bold">
                Definitely not vague AI-written nonsense
              </span>
            </div>
            <p className="text-center text-xl font-bold">
              This is field-tested, rage-written, proof-backed real talk.
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-10 text-center">
              💣 Hard Truths Inside The Book: What Your “Get Rich Quick” Uncle
              Never Told You
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Highlight 1 */}
                      <div className="bg-red-50 p-6 rounded-xl border-l-4 border-red-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">💸</span>
                          <h4 className="text-xl font-bold">
                            “You’re Broke Because Your Business Is Broke”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                            Vision is nice — but your landlord wants rent, not
                            vibes. Focus on profit first.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></span>
                            Stop doing “CEO” things when you’ve not made ₦1.
                            Start where the money is.
                          </li>
                        </ul>
                      </div>

                      {/* Highlight 2 */}
                      <div className="bg-green-50 p-6 rounded-xl border-l-4 border-green-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🛑</span>
                          <h4 className="text-xl font-bold">
                            “Do NOT Build a Product Yet”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                            You’re not broke because of laziness — you’re broke
                            because you’re guessing.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                            Don’t create what YOU like. Ask: “What do people
                            already want to buy?”
                          </li>
                        </ul>
                      </div>

                      {/* Highlight 3 */}
                      <div className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🧠</span>
                          <h4 className="text-xl font-bold">
                            “The 4 Business Triggers That Actually Make People
                            Pay”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                            If your business doesn’t solve pain, save time,
                            boost ego, or make money — you’re finished.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-3"></span>
                            From ₦500 suya to ₦5M coaching — every sale taps one
                            of these 4. Know them or die broke.
                          </li>
                        </ul>
                      </div>

                      {/* Highlight 4 */}
                      <div className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🍟</span>
                          <h4 className="text-xl font-bold">
                            “Nobody Wants What They Need”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                            You’re selling boiled beans — but they want jollof
                            rice. Dress it up or stay invisible.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                            How to sell boring stuff like it’s an iPhone drop
                          </li>
                        </ul>
                      </div>

                      {/* Highlight 5 */}
                      <div className="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🦈</span>
                          <h4 className="text-xl font-bold">
                            “Red Oceans = Shark Soup”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                            If everybody’s selling it, prices drop and blood
                            spills. You need your *own* lane.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3"></span>
                            Why cement in Nigeria is more profitable than crypto
                            — and what that means for your hustle
                          </li>
                        </ul>
                      </div>

                      {/* Highlight 6 */}
                      <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">🗣️</span>
                          <h4 className="text-xl font-bold">
                            “How to Advertise When You’re Broke, Unknown &
                            Allergic to BS”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                            Don’t have money for Facebook ads? Good. These 9
                            rules will make people chase you anyway.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                            Why writing like a human being (not a marketer) is
                            your superpower
                          </li>
                        </ul>
                      </div>

                      {/* Highlight 7 */}
                      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-gray-500">
                        <div className="flex items-center mb-4">
                          <span className="text-3xl mr-3">💀</span>
                          <h4 className="text-xl font-bold">
                            “You Don’t Need Another Course — You Need a Spine”
                          </h4>
                        </div>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></span>
                            You’ve watched enough YouTube. Now it’s time to *do
                            the thing*.
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-2 h-2 bg-gray-500 rounded-full mt-2 mr-3"></span>
                            How to stop researching, doubting, and stalling —
                            and just start getting paid
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl p-4 mb-16 text-white">
            <h3 className="text-3xl font-bold mb-16 text-center">
              🎁 PLUS — You Get 4 Raw Bonuses (No Extra Cost):
            </h3>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Bonus 1 */}
              <div className="bg-amber-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">
                  🔥 BONUS #1: Impulse Offer Alchemy
                </h4>
                <div className="mb-4">
                  <Image
                    src="/mockups/bonus1.png"
                    alt="Bonus 1: Impulse Offer Alchemy"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <p>
                  How to Create Offers So Irresistible, They Convert Like Black
                  Friday at 3 a.m.
                </p>
                <p className="mt-2 italic text-sm">
                  (Value: ₦10,000. Yours: Free)
                </p>
              </div>

              {/* Bonus 2 */}
              <div className="bg-amber-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">
                  📄 BONUS #2: Landing Pages That Sell (Not Sedate)
                </h4>
                <div className="mb-4">
                  <Image
                    src="/mockups/bonus2.png"
                    alt="Bonus 2: Landing Pages That Sell"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <p>
                  Forget pretty. Learn profitable. Build pages that do one job:
                  convert.
                </p>
                <p className="mt-2 italic text-sm">
                  (Value: ₦15,000. Yours: Free)
                </p>
              </div>

              {/* Bonus 3 */}
              <div className="bg-amber-800/50 p-6 rounded-xl">
                <h4 className="text-xl font-bold mb-3">
                  🧱 BONUS #3: The Broke, Hungry, Angry Blueprint
                </h4>
                <div className="mb-4">
                  <Image
                    src="/mockups/bonus3.png"
                    alt="Bonus 3: The Broke, Hungry, Angry Blueprint"
                    width={300}
                    height={200}
                    className="rounded-lg shadow-md mx-auto"
                  />
                </div>
                <p>
                  A short, savage guide to building your business when life’s
                  got its boot on your neck.
                </p>
                <p className="mt-2 italic text-sm">
                  (Value: Priceless. Yours: Still Free)
                </p>
              </div>
            </div>

            {/* Bonus 4 */}
            <div className="bg-amber-900/60 p-6 rounded-xl mt-6 text-white">
              <h4 className="text-xl font-bold mb-3">
                🎯 BONUS #4: “Yeah… A Guarantee”
              </h4>
              <p>
                If this ebook doesn’t punch you in the brain and make you
                rethink everything…
              </p>
              <p className="mt-2">
                You get your ₦4500 back. No drama. No excuses.
              </p>
              <p className="mt-1 text-sm italic">
                Just email and say: “This was trash.”
              </p>
            </div>
          </div>

          <div className="text-center mb-16">
            <h3 className="text-2xl font-bold mb-4">
              🕒 One Last Thing: Bonuses Expire in 72 Hours
            </h3>
            <p className="max-w-2xl mx-auto mb-4">
              Once the timer hits zero… Bonuses = gone. Price = may go up. You =
              left with regret.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-block font-scribble text-amber-600 px-8 py-4 mb-6 text-3xl font-bold animate-chill-pulse">
              All for ₦4,500.
            </div>

            <div className="space-y-4 max-w-2xl mx-auto mb-10">
              <p>About the same as:</p>
              <ul className="list-disc list-inside text-left space-y-2">
                <li>One overpriced shawarma</li>
                <li>
                  Two weeks of data to scroll Instagram for free advice that
                  doesn’t help
                </li>
                <li>
                  Half a tank of fuel that won’t move your business forward
                </li>
              </ul>
            </div>

            <Link href="/payment2" passHref>
              <button
                className="
                  mx-auto block text-xl font-extrabold
                  py-4 px-10
                  bg-gradient-to-r from-red-400 via-red-500 to-red-600
                  text-gray-900
                  rounded-full
                  shadow-lg shadow-red-500/50
                  hover:from-red-500 hover:via-red-600 hover:to-red-700
                  focus:outline-none focus:ring-4 focus:ring-red-300
                  transition-transform transform
                  hover:scale-110
                  animate-chill-pulse
                  "
              >
                👉 I'm Done Being Broke — Gimme the Book!
              </button>
            </Link>
          </div>

          <div className="text-center mt-20">
            <h3 className="text-2xl font-bold mb-4">🎤 Final Word</h3>
            <p className="max-w-2xl mx-auto mb-6">
              You don’t need permission. You don’t need branding. You don’t need
              to “build an audience” for 2 years before making money. You need
              to know what works, do it fast, and make the market love you.
            </p>
            <p className="text-xl font-bold">
              That’s what this book is. So buy it. Read it. Use it.
            </p>
            <Link href="/payment2" passHref>
              <button className="mt-6 text-xl font-bold underline text-red-50 hover:text-red-100 transition-colors bg-red-500 px-6 py-2 rounded-full shadow-2xl">
                👉 Grab it now for ₦4500 + Bonuses — Before It’s Gone
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
