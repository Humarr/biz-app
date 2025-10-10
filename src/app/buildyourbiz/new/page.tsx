/* eslint-disable react/no-unescaped-entities */
// app/components/HeroHeadline.tsx
"use client";

import { motion } from "framer-motion";




// import HeroHeadline from "@/components/HeroHeadline";

export default function Page() {
  return (
    <>

      <HeroHeadline />
      <LeadSection/>
      <WakeUpCallSection/>
      <TruthSection/>
      <IntroSection/>
      <WhoItIsFor/>
      <Education/>
      {/* next section here */}
    </>
  );
}















function HeroHeadline() {
// export default function HeroHeadline() {
  return (
    <section className="flex items-center justify-center min-h-[70vh] bg-black text-white px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <p className="text-sm uppercase tracking-wide text-red-500 font-semibold mb-3">
          Warning
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
          If You're Tired of Your Job But Scared to Start a Business...{" "}
          <span className="text-yellow-400">
            Read This Before You Waste Another Year of Your Life
          </span>
        </h1>
      </motion.div>
    </section>
  );
}

// app/components/LeadSection.tsx
function LeadSection() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
//     }),
//   };

  const paragraphs = [
    "It's 5:30 AM.",
    "Your alarm screams at you like it's angry you exist.",
    "You drag yourself out of bed. Rush through a cold shower. Grab bread and tea if you're lucky. No time for a proper breakfast.",
    "By 6:45 AM, you're fighting for space in a danfo. Already exhausted. And the day hasn't even started.",
    "Then comes the traffic. Lagos traffic. Or Abuja traffic. Or Port Harcourt traffic. Doesn't matter which city. The result is the same.",
    'Two hours of your life. Gone. Just sitting there. Watching the world crawl by. Thinking: *"Is this really all there is?"*',
    "You finally drag yourself into the office around 9:00 AM. Your boss is already in a bad mood. There's a pile of work waiting for you that could've been an email.",
    "Your ideas? Shot down before you even finish explaining them.",
    "Your coworkers? More interested in office gossip and politics than actual work.",
    "And after suffering through meetings that should've never happened and tasks that feel completely meaningless...",
    "5:00 PM arrives.",
    "But you can't leave.",
    "Because your boss is still there. And everyone knows: you can't leave before the boss leaves. Even though you're not getting paid a single kobo for overtime.",
    "So you sit there. Pretending to be busy. Checking your phone. Scrolling. Waiting.",
    "Finally, around 6:30 PM, you escape.",
    "Only to face the nightmare of evening traffic all over again.",
    "By the time you get home – 8:00 PM, 9:00 PM, sometimes even 10:00 PM – you're completely drained.",
    "Too tired to cook. So it's Indomie. Or bread. Again.",
    "You collapse on your bed. Pull out your phone. Start scrolling through social media.",
    "And that's when you see them...",
    "Someone your age just launched a business.",
    "Someone else is traveling.",
    "Another person is flexing. Building something. Living.",
    "And you?",
    "You feel like a complete failure.",
    "You think about starting a business. You even open YouTube. Watch a motivational video. Feel inspired for exactly 10 minutes.",
    'Then reality slaps you in the face: *"But I don\'t have capital. I don\'t know how to start. What if I fail? What will people say?"*',
    "So you go to sleep. Wake up the next morning. And do it all over again.",
    "**Same traffic. Same boss. Same exhaustion. Same empty bank account at the end of the month.**",
  ];

  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-3xl mx-auto leading-relaxed text-lg space-y-6">
        {paragraphs.map((text, i) => (
          <motion.p
            key={i}
            // variants={fadeUp}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
                }),
              }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            className="whitespace-pre-line"
            dangerouslySetInnerHTML={{
              __html: text
                .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                .replace(/\*(.*?)\*/g, "<em>$1</em>"),
            }}
          />
        ))}
      </div>
    </section>
  );
}

// app/components/WakeUpCallSection.tsx
function WakeUpCallSection() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
//     }),
//   };

  const paragraphs = [
    "## If This Sounds Like Your Life Right Now... I Need You to Listen Very Carefully",
    "Because what I'm about to share with you could be the difference between wasting another 5 years trapped in that cycle... or finally breaking free and building something that's actually yours.",
    "But first, let me be brutally honest with you:",
    "**This is not a motivational message.**",
    "I'm not here to pump you up with quotes about \"following your dreams\" or \"believing in yourself.\"",
    "You've heard all that before. And you're still stuck.",
    "This is not another \"business course\" filled with theory and foreign examples that don't work in Nigeria.",
    "And this is definitely not one of those \"get rich quick\" schemes that promise you millions if you just send money to some WhatsApp number.",
    "### This is a wake-up call.",
    "Because here's what nobody wants to tell you:",
    "Every single day you spend in that job – the one that drains your soul, pays you peanuts, and treats you like you're stupid – is a day you're moving further away from the life you actually want.",
    "Your rent keeps going up.",
    "Fuel prices keep climbing.",
    "Food is getting more expensive by the week.",
    "And your salary? It stays exactly the same. Or worse – they tell you \"the company is struggling\" so there won't be any raise this year.",
    "Meanwhile, your younger cousin who \"doesn't even have sense\" just bought a car. Because he started selling something online.",
    "Your former classmate who used to borrow money from you? She just opened her second shop.",
    "Even that guy from your street who everyone said would never amount to anything? He's now running a small business that brings in more money in one week than you make in a month.",
    "And you're still sitting in traffic. Still begging your boss for permission to take a day off. Still checking your account balance and feeling sick to your stomach.",
    "### So let me ask you something:",
    "How much longer are you going to let this continue?",
    "How many more years are you going to waste working for someone who doesn't respect you, doesn't value you, and will replace you the moment they find someone cheaper?",
    "How much longer are you going to lie to yourself that \"someday\" you'll start that business... while \"someday\" keeps getting further and further away?",
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-24 px-6">
      <div className="max-w-3xl mx-auto leading-relaxed text-lg space-y-6">
        {paragraphs.map((text, i) => {
          // Detect markdown-like syntax for styling
          const isSubhead = text.startsWith("## ");
          const isBigBold = text.startsWith("### ");
        //   const isBold = /\*\*(.*?)\*\*/.test(text);

          const html = text
            .replace(/^## (.*)/, '<h2 class="text-2xl md:text-3xl font-extrabold mb-6 text-center">$1</h2>')
            .replace(/^### (.*)/, '<h3 class="text-2xl md:text-3xl font-extrabold text-red-600 mt-10 mb-4 text-center">$1</h3>')
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-red-600">$1</strong>');

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
                }),
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`${isSubhead || isBigBold ? "" : "whitespace-pre-line"}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        })}
      </div>
    </section>
  );
}

// app/components/TruthSection.tsx
function TruthSection() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
//     }),
//   };

  const paragraphs = [
    "## Here's the Truth That Changed Everything For Me (And Thousands of Other Nigerians Who Escaped the 9-5 Trap)",
    "The problem isn't that you don't have a business idea.",
    "The problem isn't even that you don't have capital.",
    "### The real problem is that nobody ever taught you THE SYSTEM for starting a business that actually works.",
    'They just told you to "be your own boss" without showing you how.',
    'They told you to "follow your passion" without teaching you how to find customers who will actually pay you.',
    'They showed you motivational videos of people who "made it" without revealing the exact steps they took to get there.',
    "And worst of all?",
    'They made you believe that business is some mysterious thing that only "business people" can understand.',
    "### That's a lie.",
    "And I'm about to prove it to you.",
  ];

  return (
    <section className="bg-white text-gray-900 py-24 px-6">
      <div className="max-w-3xl mx-auto leading-relaxed text-lg space-y-6">
        {paragraphs.map((text, i) => {
          const isSubhead = text.startsWith("## ");
          const isBigBold = text.startsWith("### ");

          const html = text
            .replace(
              /^## (.*)/,
              '<h2 class="text-2xl md:text-3xl font-extrabold mb-8 text-center text-gray-900">$1</h2>'
            )
            .replace(
              /^### (.*)/,
              '<h3 class="text-2xl md:text-3xl font-extrabold text-green-600 mt-10 mb-4 text-center">$1</h3>'
            )
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-green-600">$1</strong>');

          return (
            <motion.div
              key={i}
              variants={ {
                hidden: { opacity: 0, y: 20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
                }),
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`${isSubhead || isBigBold ? "" : "whitespace-pre-line"}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        })}
      </div>
    </section>
  );
}


// app/components/IntroSection.tsx
function IntroSection() {
//   const fadeUp = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i: number) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
//     }),
//   };

  const paragraphs = [
    "## Let Me Introduce Myself (And Why You Should Listen to What I'm About to Tell You)",
    "My name is Umar.",
    'I\'m not some "business guru" who inherited wealth from a rich uncle.',
    "I didn't go to Harvard or some fancy foreign school.",
    "And I don't have some magical secret that will make you a millionaire overnight.",
    "### Here's what I am:",
    "I'm a trained engineer who got tired of watching smart, hardworking Nigerians get treated like idiots in their jobs while their bosses got richer.",
    "I taught myself marketing. Copywriting. Business. Everything the schools refused to teach us.",
    "And after years of watching people waste their time and money on businesses that were doomed to fail from day one...",
    "I decided to do something about it.",
    "### I wrote this book.",
    'Not to "motivate" you. Not to "inspire" you. Not to sell you a dream.',
    "But to give you the exact system – the same proven principles that built businesses like Indomie, Uber, and even the Mei Shayi on your street corner – so you can finally start making money on your own terms.",
  ];

  return (
    <section className="bg-gray-50 text-gray-900 py-24 px-6">
      <div className="max-w-3xl mx-auto leading-relaxed text-lg space-y-6">
        {paragraphs.map((text, i) => {
          const isSubhead = text.startsWith("## ");
          const isBigBold = text.startsWith("### ");

          const html = text
            .replace(
              /^## (.*)/,
              '<h2 class="text-2xl md:text-3xl font-extrabold mb-8 text-center text-gray-900">$1</h2>'
            )
            .replace(
              /^### (.*)/,
              '<h3 class="text-2xl md:text-3xl font-extrabold text-blue-600 mt-10 mb-4 text-center">$1</h3>'
            )
            .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-blue-600">$1</strong>');

          return (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: (i: number) => ({
                  opacity: 1,
                  y: 0,
                  transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
                }),
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              className={`${isSubhead || isBigBold ? "" : "whitespace-pre-line"}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        })}

        {/* Optional: Author photo placeholder */}
        {/* <div className="mt-12 flex justify-center">
          <img
            src="/images/umar.jpg"
            alt="Umar"
            className="w-32 h-32 rounded-full object-cover shadow-md"
          />
        </div> */}
      </div>
    </section>
  );
}

function WhoItIsFor() {

    return(

<section className="px-6 py-16 max-w-3xl mx-auto">
  <div className="space-y-8">
    {/* <!-- Subhead --> */}
    <h2 className="text-2xl sm:text-3xl font-bold text-center fade-in-up">
      This Book Isn't for Everyone
    </h2>

    {/* <!-- Intro --> */}
    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-100">
      Before we go any further, let me be clear about who this is for and who it's <strong>NOT</strong> for:
    </p>

    {/* <!-- NOT For You --> */}
    <div className="fade-in-up delay-200">
      <h3 className="text-xl font-semibold text-red-600 mb-4">
        🚫 This book is <span className="font-bold">NOT</span> for you if:
      </h3>
      <ul className="space-y-4 text-gray-700 leading-relaxed">
        <li className="flex items-start">
          <span className="mr-3 text-red-500 text-xl">✖</span>
          You're looking for a "get rich quick" scheme with zero effort
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-red-500 text-xl">✖</span>
          You want me to tell you that business is easy and anyone can do it
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-red-500 text-xl">✖</span>
          You're the type who reads books and never takes action
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-red-500 text-xl">✖</span>
          You're waiting for perfect conditions before you start 
          <span className="italic">(spoiler: they'll never come)</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-red-500 text-xl">✖</span>
          You think you're too good to start small
        </li>
      </ul>
    </div>

    {/* <!-- IS For You --> */}
    <div className="fade-in-up delay-300">
      <h3 className="text-xl font-semibold text-green-600 mb-4">
        ✅ This book <span className="font-bold">IS</span> for you if:
      </h3>
      <ul className="space-y-4 text-gray-700 leading-relaxed">
        <li className="flex items-start">
          <span className="mr-3 text-green-500 text-xl">✔</span>
          You're tired of your current job but don't know where to start
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-green-500 text-xl">✔</span>
          You've tried starting a business before and it failed 
          <span className="italic">(and you want to know why)</span>
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-green-500 text-xl">✔</span>
          You're scared of wasting money on another business idea that goes nowhere
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-green-500 text-xl">✔</span>
          You want a proven system, not motivation
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-green-500 text-xl">✔</span>
          You're ready to do the work, but you need someone to show you the right way
        </li>
        <li className="flex items-start">
          <span className="mr-3 text-green-500 text-xl">✔</span>
          You're tired of foreign business advice that doesn't work in Nigeria
        </li>
      </ul>
    </div>

    {/* <!-- Closing --> */}
    <p className="text-lg font-medium text-center text-gray-800 mt-10 fade-in-up delay-400">
      If you're still reading... good. That means you're <span className="font-bold text-green-600">serious.</span>
    </p>
  </div>
</section>
  );
}


function Education() {


    return (

        <div>

        <section className="px-6 py-16 max-w-3xl mx-auto">
  <div className="space-y-10">

    {/* <!-- Subhead --> */}
    <h2 className="text-2xl sm:text-3xl font-bold text-center fade-in-up">
      Here's What You're About to Discover in <span className="text-blue-600 italic">"The Small Business Playbook"</span>
    </h2>

    {/* <!-- Paragraphs --> */}
    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-100">
      Inside this book, you're going to learn the exact system that separates businesses that <span className="font-semibold text-green-600">print money</span> from businesses that drain your bank account and leave you broke and embarrassed.
    </p>

    <p className="text-lg font-bold text-red-600 fade-in-up delay-200">
      But let me warn you right now:
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-300">
      Some of what you're about to learn will make you <span className="font-semibold text-red-600">angry</span>.
      Because you'll realize how much time and money you've wasted on business ideas that were doomed from the start.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-400">
      You'll understand why that "great idea" everyone told you to pursue was actually a terrible idea.
      And you'll finally see why your first (or second, or third) business attempt failed... and how you could've avoided it completely.
    </p>

    <p className="text-lg font-bold text-green-700 fade-in-up delay-500">
      But here's the good news:
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-600">
      Once you understand the system I'm about to show you, <span className="font-semibold text-green-600">starting a profitable business becomes simple.</span>
    </p>

    <p className="text-lg text-gray-700 italic fade-in-up delay-700">
      Not easy. But simple.<br/>
      <span className="text-gray-900 font-semibold">There's a difference.</span>
    </p>
  </div>
</section>

 {/* <!-- STARVING CROWD SECRET --> */}
<section className="px-6 py-20 bg-gray-50 mt-12 max-w-3xl mx-auto">
  <div className="space-y-10">
    <h2 className="text-2xl sm:text-3xl font-bold text-center fade-in-up">
      THE STARVING CROWD SECRET: <br className="sm:hidden" />
      <span className="text-blue-600">The One Thing That Separates Successful Businesses From Failed Ones</span>
    </h2>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-100">
      Let me tell you about the most important business lesson I ever learned.
      It came from a legendary marketer named <span className="font-semibold">Gary Halbert</span>, and it goes like this:
    </p>

    <p className="text-xl sm:text-2xl font-bold text-center text-red-600 leading-snug fade-in-up delay-200">
      “If you never want to be poor in your life, you don't need a product, you don't need money, what you need is a <span className="underline">STARVING CROWD!</span>”
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-300">
      Think about that for a second.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-400">
      Imagine you're in a place where there's been no water for days. Everyone is desperately thirsty. Their throats are dry. They're weak. They need water RIGHT NOW.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-500">
      Then you show up with a truck full of cold, clean water.
    </p>

    <p className="text-lg font-semibold text-gray-900 fade-in-up delay-600">
      Do you need to beg people to buy?<br/>
      Do you need to offer discounts?<br/>
      Do you need fancy packaging or a beautiful logo?
    </p>

    <p className="text-xl font-bold text-green-600 fade-in-up delay-700">
      Of course not.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-800">
      People will be <span className="font-semibold">fighting to give you their money.</span>
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-900">
      Now imagine the opposite:
      You show up at a party where everyone just finished eating a huge feast. Their bellies are full. They're satisfied.
      You're trying to sell food.
    </p>

    <p className="text-xl font-bold text-red-600 fade-in-up delay-1000">
      How hard will it be to make sales? Extremely hard.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-1100">
      Even if your food is delicious. Even if it's cheap. Nobody wants it right now because they're not hungry.
    </p>

    <p className="text-xl font-bold text-red-700 fade-in-up delay-1200">
      This is why 90% of businesses fail in their first year.
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-1300">
      They're trying to sell food to people who just finished eating, instead of finding starving people and giving them exactly what they're craving.
    </p>

    <p className="text-xl font-bold text-green-700 fade-in-up delay-1400">
      And here's the thing that will blow your mind:
    </p>

    <p className="text-lg text-gray-700 leading-relaxed fade-in-up delay-1500">
      Finding a starving crowd is actually <span className="font-semibold text-green-600">easier than you think.</span><br/>
      You don't need to invent something new. You don't need a million naira. You don't even need to be "creative."
    </p>

    <p className="text-lg font-bold text-gray-900 fade-in-up delay-1600">
      You just need to understand <span className="text-blue-600 underline">THE SYSTEM.</span><br/>
      And that's exactly what I reveal in this book.
    </p>
  </div>
</section>
</div>
    );
}