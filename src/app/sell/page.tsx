/* eslint-disable react/no-unescaped-entities */
// /app/page.tsx

import MarginNote from "@/components/ui/MarginNote";

export default function SalesPage() {
  return (
    <main className="px-4 md:px-12 py-16 max-w-4xl mx-auto">

      {/* HEADLINE */}
      <h1 className="text-4xl md:text-6xl font-black text-center mb-10 leading-tight">
        <span className="text-red-600">TIRED OF BEING THE "BROKE UNCLE"</span>
        <br />
        <span className="text-gray-900">AT FAMILY GATHERINGS?</span>
      </h1>

      {/* PAIN QUESTIONS */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-red-700">
        Fed Up With Your Little Cousins Whispering
        <br className="md:hidden" />
        <span className="italic">"Here Comes The Stingy One"</span> Behind Your Back?
      </h2>

      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
        Sick of Calculating Every Last Naira While
        <br className="md:hidden" />
        <span className="text-red-600">Your Younger Mates Are Making "Bastard Money"</span> Like It's Child's Play?
      </h2>

      {/* BODY COPY */}
      <div className="text-lg leading-relaxed space-y-6">
        <p>
          Listen...
        </p>

        <p>
          If you're reading this at <span className="font-semibold text-red-600">2 AM</span> because you can't sleep,
          wondering how the hell you're going to survive another month...
        </p>

        <p>
          If you're tired of your mum comparing you to your neighbor's son
          who just bought her a car while you can't even afford to fix your own slippers...
        </p>

        <p>
          If you're sick of dodging calls from your sister in school
          because you know she needs <span className="font-bold text-red-600">10k</span> for handouts and you don't have it...
        </p>

        <p>
          If you're frustrated that people dumber than you are living in Lekki
          while you're still calculating transport fare...
        </p>

        {/* CTA Textbox */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-lg text-gray-800">
            Then you need to read <span className="font-bold text-red-600">every single word</span> of this message.
          </p>
        </div>

        {/* TENSION BUILDER */}
        <p className="text-xl font-semibold text-red-600">
          Because what I'm about to tell you will either piss you off completely...
          or it will be the turning point that changes everything.
        </p>

        {/* CLIFFHANGER */}
        <div className="relative">
          <p className="text-xl font-bold pr-8 md:pr-24">
            But first, let me guess what's really eating you up inside...
          </p>
          <div className="absolute -right-4 md:right-0 top-0 w-24 md:w-32">
            <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
              <p className="text-xs md:text-sm text-red-600 font-['Kalam'] leading-tight">
                Gut punch coming...
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
