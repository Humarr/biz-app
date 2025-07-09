/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import Link from "next/link";

export default function SalesPage() {
  // useEffect(() => {
  //   let sessionId = localStorage.getItem('sessionId')

  //   if (!sessionId) {
  //     sessionId = uuidv4()
  //     localStorage.setItem('sessionId', sessionId)

  //     // Send to backend — create new session
  //     fetch('/api/session/start', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         sessionId,
  //         ipAddress: '', // Can add via server
  //         userAgent: navigator.userAgent,
  //       }),
  //     })
  //   }

  //   // On page exit
  //   const handleUnload = () => {
  //     fetch('/api/session/end', {
  //       method: 'POST',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({ sessionId }),
  //       keepalive: true,
  //     })
  //   }

  //   window.addEventListener('beforeunload', handleUnload)

  //   return () => {
  //     window.removeEventListener('beforeunload', handleUnload)
  //   }
  // }, [])

  useEffect(() => {
    let sessionId = localStorage.getItem("sessionId");

    if (!sessionId) {
      sessionId = uuidv4();
      localStorage.setItem("sessionId", sessionId);
      console.log("sessionId: ", sessionId);

      fetch("/api/session/start", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sessionId,
          ipAddress: "", // Optional: get from backend
          userAgent: navigator.userAgent,
        }),
      });
    }

    const handleUnload = () => {
      const sessionIdToSend = localStorage.getItem("sessionId"); // read latest here

      if (!sessionIdToSend) return; // no session to end

      fetch("/api/session/end", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sessionId: sessionIdToSend }),
        keepalive: true,
      });
    };

    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, []);

  const handleClick = async () => {
    const sessionId = localStorage.getItem("sessionId");

    await fetch("/api/session/payclick", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId }),
    });

    // Then show user info form or Paystack modal
  };

  return (
    <main className={`font-body min-h-screen bg-white text-gray-900`}>
      {/* Hero Section */}
      <section className="py-12 px-4 md:py-20 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            <span className="text-red-600 block">
              They Used To Laugh Behind Your Back...
            </span>
            <span className="text-gray-900 block mt-4">
              But Read This, And Watch Those Your Cousins Who Used To Laugh At You Now
              Start Asking You For <span className="underline">Advice</span> — And Calling You{" "}
              <span className="italic">'Chairman'</span>
              {" "}Or...{" "} 
              <span className="italic">'Boss'</span> 
              
              {/* With a Straight Face. */}

            </span>
          </p>
        </div>

        <div className="relative">
          <p className="text-xl md:text-2xl leading-relaxed mb-8 italic font-medium">
            Listen...
          </p>
          <div className="absolute -right-4 top-0 w-24 md:w-32">
            <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
              <p className="text-sm md:text-lg text-red-600 font-scribble leading-tight">
                This will change everything...
              </p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-lg">It's 3:47 AM and you're wide awake again.</p>
          <div className="my-6" />
          <p>
            Your mind is racing with the same toxic thoughts that visit you
            every night like unwelcome guests:
          </p>
        </div>

        <ul className="space-y-4 mb-12 max-w-3xl mx-auto">
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              "How am I going to survive this month?"
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              "What if my landlord comes knocking tomorrow?"
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg md:text-xl">
              "How do I tell my sick mother I can't afford her medication...
              again?"
            </span>
          </li>
        </ul>

        <p className="text-lg mb-8">
          Your stomach is churning with that familiar cocktail of shame,
          frustration, and raw fear.
        </p>
        <div className="my-6" />
        <p>
          You calculate every naira. You've eaten garri for breakfast, lunch,
          and dinner more times than you care to count.
        </p>
        <div className="my-6" />
        <p>
          Your phone battery is perpetually at 5% because you can't afford to
          pay your NEPA bill.
        </p>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">The worst part?</h3>
          <p className="text-lg">
            Everyone around you seems to be "making it" while you're stuck in
            this financial quicksand.
          </p>
        </div>

        <p className="text-lg mb-8">
          Your neighbor's son - the one who barely passed WAEC - just bought his
          third car. Your former classmate is posting photos from Dubai while
          you're calculating whether you can afford 500 naira for bread.
        </p>
        <div className="my-6" />
        <p>
          Your little cousins don't even greet you anymore. They see you coming
          and whisper,
          <span className="font-scribble text-lg">
            {" "}
            "This one don come again. Stingy uncle."
          </span>
        </p>

        <div className="bg-red-100 border-l-4 border-red-600 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">
            Your own family has stopped taking your opinions seriously.
          </h3>
          <p className="text-lg">
            At family gatherings, you're the invisible one. The one whose voice
            gets drowned out because, let's face it, what does a broke person
            know about anything?
          </p>
        </div>

        <div className="text-lg mb-8">
          <p>
            Your mother keeps mentioning how well your friend's daughter is
            doing. How she just got married and is building a house for her
            parents.
          </p>
          <div className="my-6" />
          <p>
            Meanwhile, you're 28 (or 32, or 35) and still living like a teenager
            - broke, dependent, and frankly... irrelevant.
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-red-600">
          The Real Kicker? You're Not Even Safe Where You Live
        </h2>

        <div className="text-lg mb-8">
          <p>
            You're stuck in areas where "area boys" and touts run wild.{" "}
            <div className="my-6" /> Where drainage systems overflow with every
            small rain and your room becomes a swimming pool of sewage.
          </p>
          <div className="my-6" />
          <p>
            You've gotten that dreaded call: "Don't come home tonight. The boys
            have started again."
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg">
            So there you are, stranded on some dark road, wondering if you'll
            make it home alive or if you'll become another statistic - another
            young Nigerian who "tried to make it" but ended up as a hashtag on
            social media.
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">
            This is what poverty really looks like in Nigeria.
          </h3>
          <div className="text-lg">
            <p>
              Not the Nollywood version where the poor guy suddenly becomes rich
              and marries the banker's daughter.
            </p>
            <div className="my-6" />
            <p>
              This is the gritty, soul-crushing reality where you're one
              emergency away from complete disaster.
            </p>
          </div>
        </div>
      </section>

      {/* Fake Gurus Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            And Don't Even Get Me Started on These Fake Guru Scammers
          </h2>

          <div className="text-lg mb-8">
            <p>Oh, you've seen them, haven't you?</p>
            <div className="my-6" />
            <p>
              These jokers with their rented Lamborghinis and borrowed mansions,
              promising you'll make "passive income" while you sleep.
            </p>
          </div>
        </div>

        <div className="text-lg mb-8">
          <p>
            They show you photoshopped screenshots of their "bank accounts" and
            testimonials from "students" who look suspiciously like stock photo
            models.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-bold text-center">
                "Just follow my 7-step system and you'll be making 500K
                monthly!"
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-bold text-center">
                "This one weird trick will change your life!"
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <p className="font-bold text-center">
                "I made 2 million naira in 30 days using this simple method!"
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              Bullshit.
              <div className="my-6" />
              Pure, unadulterated bullshit.
            </h3>
          </div>

          <p className="text-lg mb-8">
            You've probably fallen for one or two of these clowns. Maybe you
            spent your last 15,000 naira on some "revolutionary course" that
            turned out to be recycled ChatGPT advice and motivational quotes.
          </p>

          <p className="text-lg mb-8">
            Or maybe you bought some "business mentorship" that was just a
            WhatsApp group where the "mentor" occasionally drops the same
            generic advice you can find on any random blog.
          </p>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <div className="text-lg">
              <p>
                These scammers are everywhere, preying on desperate people like
                vultures circling a corpse.
              </p>
              <div className="my-6" />
              <p>
                They know you're hungry. They know you're desperate. They know
                you're tired of being broke.
              </p>
              <div className="my-6" />
              <p>
                So they dangle these shiny promises in front of you like carrots
                in front of a donkey.
              </p>
            </div>
          </div>

          <div className="bg-red-100 border-l-4 border-red-600 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">And the worst part?</h3>
            <p className="text-lg">
              They're getting rich off your desperation while you sink deeper
              into the hole.
            </p>
          </div>
        </div>
      </section>

      {/* Education Lie Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          The "Go to School, Get Good Grades, Find a Good Job" Lie
        </h2>

        <div className="text-lg mb-8">
          <p>Let me tell you about Emeka.</p>
          <div className="my-6" />
          <p>
            Emeka was the golden boy. First Class Honors in Engineering from one
            of Nigeria's top universities. His parents were so proud they threw
            a party.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">
            <span className="font-scribble text-xl">"Finally,"</span> his mother
            said,{" "}
            <span className="font-scribble text-xl">
              "someone in this family has made it."
            </span>
          </p>
        </div>

        <div className="text-lg mb-8">
          <p>
            Emeka believed the script. He believed that his degree was his
            ticket to the good life.
          </p>
          <div className="my-6" />
          <p>He applied to 247 companies. Got 3 interviews. Zero job offers.</p>
        </div>

        <p className="text-lg mb-8">
          The few companies that did respond wanted him to work for 40,000 naira
          monthly - barely enough to afford transportation to the office.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="text-lg">
            <p>
              Now Emeka is 28, living with his parents, and his younger cousins
              whisper "broke uncle" behind his back.
            </p>
            <div className="my-6" />
            <p>
              His girlfriend left him for Chike — a former classmate who wasn’t
              as academically bright but started selling provisions and now owns
              three shops across Lagos.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">
            The system lied to Emeka.
            <div className="my-6" />
            Just like it lied to you.
          </h3>
          <p className="text-lg">
            The truth is, that certificate hanging on your wall? It's not worth
            the paper it's printed on if you don't know how to{" "}
            <em>create value</em> for other people.
          </p>
        </div>

        <p className="text-lg mb-8">
          {/* The job market is dead. Companies are laying off thousands of workers */}
          The job market is dead. Companies are 'sacking' thousands of workers
          every month. The few jobs available pay peanuts while everything keeps
          adding price.
        </p>

        <div className="bg-red-100 border-l-4 border-red-600 p-6 my-8">
          <h3 className="text-xl font-bold text-center">
            You've been played.
            <div className="my-6" />
            The game has changed, but nobody told you the new rules.
          </h3>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            Here's What I Want You to Understand
          </h2>

          <p className="text-lg mb-8">
            My name is not important. What's important is what I'm about to
            share with you.
          </p>

          <p className="text-lg mb-8">
            I've been where you are. I've felt that gnawing hunger in my stomach
            - not just for food, but for respect, for dignity, for a chance to
            matter.
          </p>

          <ul className="space-y-4 mb-8">
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">
                I've sat in that cramped, poorly ventilated room, staring at the
                ceiling, wondering if I'll ever amount to anything.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">
                I've had to explain to my sick mother why I couldn't afford her
                hospital bills. I've watched family members suffer because I was
                too broke to help.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-red-500 text-xl mr-2">•</span>
              <span className="text-lg">
                I've been the "unsuccessful" one at family gatherings. The one
                whose opinions don't matter because "what does a broke person
                know?"
              </span>
            </li>
          </ul>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">
              But here's the difference between me and most people:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span>I refused to accept that as my permanent reality.</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span>
                  I refused to believe that I was destined to be broke forever.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span>
                  I refused to keep following the same failing blueprint that
                  everyone else was using.
                </span>
              </li>
            </ul>
          </div>

          <div className="text-lg mb-8">
            <p>
              Instead, I went on a mission. A mission to crack the code of
              business success.
            </p>
            <div className="my-6" />
            <p>
              Not the fake guru version of success. Not the "get rich quick"
              nonsense.
            </p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">
              Real, sustainable, life-changing business success.
            </h3>
            <div className="text-lg">
              <p>
                The kind that lets you sleep peacefully at night knowing your
                bills are paid.
              </p>
              <div className="my-6" />
              <p>
                The kind that lets you walk into family gatherings with your
                head held high.
              </p>
              <div className="my-6" />
              <p>
                The kind that makes people say,{" "}
                <span className="font-scribble text-xl">
                  "I want to be like you"
                </span>{" "}
                instead of avoiding you because they think you're going to ask
                for money.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          What I Discovered Will Shock You
        </h2>

        <p className="text-lg mb-8">
          After studying hundreds of successful Nigerian entrepreneurs - the
          ones who actually made it, not the fake ones on social media - I
          discovered something that completely shattered everything I thought I
          knew about business.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">
            95% of people who try to start businesses fail not because they're
            lazy or stupid.
          </h3>
          <div className="text-lg">
            <p>They fail because they're following the wrong blueprint.</p>
            <div className="my-6" />
            <p>They're asking the wrong questions.</p>
            <div className="my-6" />
            <p>They're solving the wrong problems.</p>
            <div className="my-6" />
            <p>
              They're building businesses for themselves instead of for their
              customers.
            </p>
          </div>
        </div>

        <div className="text-lg mb-8">
          <p>Here's what most people do:</p>
          <div className="my-6" />
          <p>
            They think,{" "}
            <span className="font-scribble text-xl">
              "I want to start a business,"
            </span>{" "}
            then they ask their mum, sister, or friend what business they should
            start.
          </p>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg mb-8">
          <p className="text-lg italic">
            <span className="font-scribble text-xl">
              "Start selling clothes,"
            </span>{" "}
            they say.{" "}
            <span className="font-scribble text-xl">
              "Food is always in demand." "Try electronics."
            </span>
          </p>
        </div>

        <div className="text-lg mb-8">
          <p>
            So they go and spend their savings buying inventory. They rent a
            shop.
          </p>
          <div className="my-6" />
          <p>They stock up on products.</p>
          <div className="my-6" />
          <p>Then they sit there, waiting for customers who never come.</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4 text-center">Why?</h3>
          <div className="text-lg text-center">
            <p>
              Because they built their business around what THEY wanted to sell,
              not what CUSTOMERS desperately wanted to buy.
            </p>
            <div className="my-6" />
            <p>
              They never asked the most important question in business:{" "}
              <span className="font-scribble text-xl">
                "What problem am I solving for people?
              </span>
              "
            </p>
          </div>
        </div>
      </section>

      {/* The 5% Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            The 5% Who Actually Make It Do This Instead
          </h2>

          <p className="text-lg mb-8">
            The successful ones - the real ones, not the fake gurus - they
            follow a completely different blueprint.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They start with the customer, not the product.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They identify problems that people are desperate to solve.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They test their ideas before investing money.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They position themselves as the obvious choice.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They create offers so irresistible that people feel stupid
                saying no.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They price confidently without flinching.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                They turn customers into evangelists who bring them more
                customers.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">And here's the kicker:</h3>
            <div className="text-lg">
              <p>
                They do all of this using a simple, repeatable system that
                anyone can follow.
              </p>
              <div className="my-6" />
              <p>Even if you're broke right now.</p>
              <div className="my-6" />
              <p>Even if you've never run a business before.</p>
              <div className="my-6" />
              <p>
                Even if you can't spell{" "}
                <span className="font-scribble text-xl">"entrepreneur."</span>
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold text-center">
              This system works.
            </h3>
            <div className="text-lg text-center">
              <p>It's worked for hundreds of people I've taught privately.</p>
              <div className="my-6" />
              <p>
                It's worked for the 24-year-old NYSC corper who went from 33,000
                naira monthly to 400,000 naira monthly in 6 months.
              </p>
              <div className="my-6" />
              <p>
                It's worked for the single mother who turned her N35,000 savings
                into a business that now <em>employs 8 people.</em>
              </p>
              <div className="my-6" />
              <p>
                It's worked for the university dropout who everyone wrote off as
                a failure and who now makes more money than his professors.
              </p>
            </div>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
            <h3 className="text-xl font-bold text-center">
              And it will work for you too.
            </h3>
            <p className="text-lg text-center">
              If you're willing to follow the blueprint instead of making the
              same mistakes everyone else is making.
            </p>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          Introducing: The Ultimate Cash Machine
        </h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold text-center">
            A stupidly simple guide to starting a business that prints money
            like a hacked ATM
          </h3>
        </div>

        <p className="text-lg mb-8">
          Look, I'm not going to lie to you like these other jokers do.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-red-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">This is NOT:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Some magic wand that will make you rich overnight</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>
                  Some secret ancient formula that only the "chosen ones" know
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-red-500 mr-2">•</span>
                <span>Going to make you a millionaire in 30 days</span>
              </li>
            </ul>
          </div>
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4 text-center">This IS:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>
                  A complete, step-by-step blueprint for building a real
                  business
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>A system that's been tested and proven by hundreds</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">•</span>
                <span>A guide that cuts through all the noise</span>
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8">
          Here's what you're going to learn:
        </h3>

        {/* Modules */}
        <div className="space-y-12">
          {/* Module 1 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 1: THE MINDSET REVOLUTION
            </h4>
            <p className="font-bold mb-2">
              Value: ₦75,000 (What you'd pay for a weekend seminar)
            </p>
            <p className="mb-4">First, we're going to reprogram your brain.</p>
            <p className="mb-4">
              You've been carrying around 20+ years of poverty conditioning.
              Beliefs like:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>"Money is hard to come by"</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>"Business is risky"</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>"I need capital to start"</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>"I need connections to succeed"</span>
              </li>
            </ul>
            <p className="mb-4">
              These beliefs are poison. They're keeping you broke.
            </p>
            <p className="mb-2">I'm going to show you:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why starting a business is actually SAFER than getting a job
                  (this will blow your mind)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to reprogram poverty conditioning in less than 30 days
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>The 3 beliefs that keep 95% of people broke forever</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why your degree is actually hurting your chances of success
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The simple mindset shift that separates winners from losers
                </span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              By the end of this module, you'll think like a successful
              entrepreneur, not a broke employee.
            </p>
          </div>

          {/* Module 2 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 2: THE OPPORTUNITY GOLDMINE
            </h4>
            <p className="font-bold mb-2">
              Value: ₦85,000 (What business consultants charge for opportunity
              analysis)
            </p>
            <p className="mb-4">
              Most people look for business opportunities in all the wrong
              places.
            </p>
            <p className="mb-4">
              They think opportunities are rare, hidden secrets that only the
              "lucky ones" stumble upon.
            </p>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">Wrong.</p>
            </div>
            <p className="mb-4">
              Opportunities are everywhere. You just don't know how to spot
              them.
            </p>
            <p className="mb-2">I'm going to teach you:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to spot "crazily sweet" business opportunities hiding in
                  plain sight
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The 7 signs that an industry is ripe for disruption (and how
                  to position yourself as the disruptor)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why the best business ideas often sound "boring" to most
                  people
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to turn everyday complaints into profitable business
                  opportunities
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The simple exercise that reveals 50+ business ideas in 30
                  minutes
                </span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              You'll never run out of business ideas again.
            </p>
          </div>

          {/* Module 3 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 3: THE VALIDATION FRAMEWORK
            </h4>
            <p className="font-bold mb-2">
              Value: ₦95,000 (What you'd pay for market research)
            </p>
            <p className="mb-4">This is where most people screw up badly.</p>
            <p className="mb-4">
              They fall in love with their idea and assume everyone else will
              too.
            </p>
            <p className="mb-4">
              They spend months building products nobody wants.
            </p>
            <p className="mb-4">
              They waste money on inventory that sits unsold.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">Not you.</p>
            </div>
            <p className="mb-4">
              You're going to learn the 12 economic principles that separate
              winning ideas from losing ones.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to test any business idea in less than 7 days without
                  spending more than 5,000 naira
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The simple questions that predict whether a business will
                  succeed or fail
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to get customers to pay you BEFORE you create your product
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The validation mistakes that kill 90% of new businesses
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>How to pivot quickly when an idea isn't working</span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              You'll never waste money on bad ideas again.
            </p>
          </div>

          {/* Module 4 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 4: THE BIG BOY POSITIONING STRATEGY
            </h4>
            <p className="font-bold mb-2">
              Value: ₦120,000 (What branding agencies charge)
            </p>
            <p className="mb-4">
              Here's a secret the fake gurus won't tell you:
            </p>
            <p className="mb-4">
              Being new to an industry is actually an advantage if you know how
              to use it.
            </p>
            <p className="mb-4">
              You don't need years of experience to position yourself as a
              premium player.
            </p>
            <p className="mb-4">
              You don't need expensive offices or fancy equipment.
            </p>
            <p className="mb-4">
              You just need to know the psychological triggers that make
              customers choose you over established competitors.
            </p>
            <p className="mb-2">I'm going to show you:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to instantly position yourself as a premium player in any
                  market
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The psychological tricks that make customers choose you over
                  established competitors
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to become the "obvious choice" in customers' minds
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why being new to an industry is actually an advantage
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The simple positioning statement that makes you irresistible
                </span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              You'll compete with the big boys from day one.
            </p>
          </div>

          {/* Module 5 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 5: THE IRRESISTIBLE OFFER FORMULA
            </h4>
            <p className="font-bold mb-2">
              Value: ₦100,000 (What copywriters charge for offer creation)
            </p>
            <p className="mb-4">
              Most people create offers that are easy to ignore.
            </p>
            <p className="mb-4">
              They list features and expect customers to figure out the
              benefits.
            </p>
            <p className="mb-4">They compete on price instead of value.</p>
            <p className="mb-4">They make it easy for customers to say no.</p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">
                You're going to do the opposite.
              </p>
            </div>
            <p className="mb-4">
              You're going to create offers so good that people feel stupid
              saying no.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to create offers so good that people feel stupid saying no
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The 5 elements that turn ordinary products into must-have
                  purchases
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to make your competitors' offers look weak by comparison
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The secret to making customers buy from you even when they
                  weren't planning to buy anything
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The psychological triggers that overcome price objections
                </span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              Your offers will be impossible to resist.
            </p>
          </div>

          {/* Module 6 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 6: THE FEARLESS PRICING SYSTEM
            </h4>
            <p className="font-bold mb-2">
              Value: ₦80,000 (What pricing consultants charge)
            </p>
            <p className="mb-4">Here's something that will surprise you:</p>
            <p className="mb-4">
              Expensive products often sell better than cheap ones.
            </p>
            <p className="mb-4">
              But most people are terrified to price their products properly.
            </p>
            <p className="mb-4">They think cheap prices mean more sales.</p>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">They're wrong.</p>
            </div>
            <p className="mb-4">
              Cheap prices mean cheap customers, endless haggling, and
              razor-thin profits.
            </p>
            <p className="mb-2">I'm going to teach you:</p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>How to price confidently without losing sales</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why expensive products often sell better than cheap ones
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>The psychology of premium pricing and how to use it</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to charge 3x more than your competitors and still get more
                  customers
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>The pricing mistakes that keep businesses broke</span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              You'll never compete on price again.
            </p>
          </div>

          {/* Module 7 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 7: THE CUSTOMER MAGNETISM METHOD
            </h4>
            <p className="font-bold mb-2">
              Value: ₦90,000 (What marketing agencies charge for customer
              acquisition)
            </p>
            <p className="mb-4">Most people chase customers like beggars.</p>
            <p className="mb-4">They spend money on ads that don't work.</p>
            <p className="mb-4">They beg people to buy from them.</p>
            <p className="mb-4">
              They compete for customers with everyone else.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">
                You're going to flip the script.
              </p>
            </div>
            <p className="mb-4">
              You're going to become the person customers seek out.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to attract customers who are eager to buy from you
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The 3 types of customers and why you should only focus on one
                  type
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to become the person customers think of when they need
                  what you sell
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The simple strategy that makes customers come to you instead
                  of you chasing them
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why being "salesy" repels customers (and what to do instead)
                </span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              Customers will chase you instead of you chasing them.
            </p>
          </div>

          {/* Module 8 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 8: THE EVANGELISM ENGINE
            </h4>
            <p className="font-bold mb-2">
              Value: ₦110,000 (What word-of-mouth marketing consultants charge)
            </p>
            <p className="mb-4">Here's the holy grail of business:</p>
            <p className="mb-4">
              Getting customers to bring you more customers without paying them
              a dime.
            </p>
            <p className="mb-4">
              Most businesses rely on paid advertising to get customers.
            </p>
            <p className="mb-4">That's expensive and risky.</p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">
                You're going to build a business that grows organically through
                customer referrals.
              </p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to turn customers into unpaid salespeople who promote your
                  business
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The 3 psychological triggers that create word-of-mouth
                  marketing
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to get customers to bring you more customers without
                  asking
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Why satisfied customers are worthless (and what you need
                  instead)
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>The simple system that creates customer evangelists</span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              Your customers will become your best salespeople.
            </p>
          </div>

          {/* Module 9 */}
          <div className="border-2 border-blue-500 rounded-lg p-6">
            <h4 className="text-xl font-bold mb-4 bg-blue-100 p-2 rounded">
              MODULE 9: THE AUTOMATION SYSTEM
            </h4>
            <p className="font-bold mb-2">
              Value: ₦150,000 (What business automation consultants charge)
            </p>
            <p className="mb-4">
              Most people build businesses that own them instead of businesses
              they own.
            </p>
            <p className="mb-4">They work 16-hour days for peanuts.</p>
            <p className="mb-4">
              They can't take a break without their business falling apart.
            </p>
            <p className="mb-4">They've created a job, not a business.</p>
            <div className="bg-green-50 p-4 rounded-lg mb-4">
              <p className="font-bold text-center">
                You're going to build a real business.
              </p>
            </div>
            <p className="mb-4">
              A business that works even when you're sleeping.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to build a business that works even when you're sleeping
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The tools and processes that turn your business into a real
                  cash machine
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to escape the time-for-money trap that keeps most
                  entrepreneurs broke
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  The simple systems that let you work less while earning more
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  How to scale your business without scaling your problems
                </span>
              </li>
            </ul>
            <p className="font-bold mt-4">
              Your business will work for you, not against you.
            </p>
          </div>
        </div>

        {/* Bonuses */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-center mb-8">
            Plus, You'll Also Get These Powerful Bonuses:
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bonus 1 */}
            <div className="border-2 border-green-500 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 bg-green-100 p-2 rounded">
                BONUS #1: THE COPYWRITING ARSENAL
              </h4>
              <p className="font-bold mb-2">
                Value: ₦60,000 (What copywriters charge for training)
              </p>
              <p className="mb-4">Words sell.</p>
              <p className="mb-4">
                The difference between a business that struggles and a business
                that thrives often comes down to how well you communicate your
                value.
              </p>
              <p className="mb-2">
                I'm going to give you 9 proven copywriting secrets that turn
                browsers into buyers.
              </p>
              <p className="mb-2">
                These are the same psychological triggers that make people stop
                scrolling and start buying.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    The headline formula that grabs attention instantly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    The offer structure that makes people buy immediately
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    The call-to-action that converts browsers into buyers
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    The psychological triggers that overcome objections
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    The storytelling framework that sells without selling
                  </span>
                </li>
              </ul>
              <p className="font-bold mt-4">
                You'll write copy that converts like crazy.
              </p>
            </div>

            {/* Bonus 2 */}
            <div className="border-2 border-green-500 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 bg-green-100 p-2 rounded">
                BONUS #2: THE QUICK-START CHECKLIST
              </h4>
              <p className="font-bold mb-2">
                Value: ₦40,000 (What business coaches charge for implementation)
              </p>
              <p className="mb-4">
                Knowledge without implementation is useless.
              </p>
              <p className="mb-4">
                I'm going to give you a simple step-by-step checklist that takes
                you from idea to first sale in 30 days or less.
              </p>
              <p className="mb-4">
                No confusion. No overwhelm. Just clear, actionable steps.
              </p>
              <p className="font-bold">
                You'll know exactly what to do and when to do it.
              </p>
            </div>

            {/* Bonus 3 */}
            <div className="border-2 border-green-500 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4 bg-green-100 p-2 rounded">
                BONUS #3: THE PROFIT CALCULATOR
              </h4>
              <p className="font-bold mb-2">
                Value: ₦25,000 (What financial consultants charge for analysis)
              </p>
              <p className="mb-4">
                Before you start any business, you need to know how much money
                you can make.
              </p>
              <p className="mb-4">
                This simple tool tells you exactly how much money you can make
                from any business idea.
              </p>
              <p className="mb-4">
                You'll never start a business that can't make you rich.
              </p>
              <p className="font-bold">
                You'll only pursue ideas that can make you wealthy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            Let's Talk About What This Is Really Worth
          </h2>

          <p className="text-lg mb-8">
            If you tried to get this information elsewhere, here's what you'd
            pay:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">Business mindset coaching: ₦200,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                Opportunity identification training: ₦150,000
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                Market validation consulting: ₦300,000
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">Branding and positioning: ₦400,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">Offer creation consulting: ₦250,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                Pricing strategy development: ₦200,000
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                Customer acquisition training: ₦350,000
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                Word-of-mouth marketing system: ₦300,000
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">
                Business automation consulting: ₦400,000
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">Copywriting training: ₦180,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">Implementation coaching: ₦150,000</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <p className="font-bold">Financial analysis tools: ₦100,000</p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              Total Value: ₦2,980,000
            </h3>
            <p className="text-lg text-center">
              But you're not going to pay anywhere near that.
            </p>
          </div>

          <div className="text-lg mb-8">
            <p>In fact, I was going to release this for free.</p>
            <div className="my-6" />
            <p>But my business partner looked at me like I was crazy.</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <p className="text-lg italic">
              "Are you insane?" he said. "If you give this away for free, people
              won't take it seriously. They'll download it, skim through it, and
              never implement anything."
            </p>
          </div>

          <div className="text-lg mb-8">
            <p>He was right.</p>
            <div className="my-6" />
            <p>
              I've seen it happen before. People don't value what they don't pay
              for.
            </p>
          </div>

          <p className="text-lg mb-8">
            So I'm putting a small price on this - just enough to make sure
            you're serious about changing your life.
          </p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg text-center">
            <p className="text-4xl font-bold mb-2">Just ₦9,950</p>
            <div className="text-xl mb-4">
              <p>That's less than what you'd spend on a weekend outing.</p>
              <div className="my-6" />
              <p>Less than what you'd spend on a pair of sneakers.</p>
              <div className="my-6" />
              <p>Less than what you'd spend on airtime in a month.</p>
            </div>
            <p className="text-2xl font-bold">
              ₦9,950 for a complete business blueprint that could change your
              life forever.
            </p>
          </div>
        </div>
      </section>

      {/* Not For Everyone Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          But Here's the Thing...
        </h2>

        <p className="text-lg mb-8">
          I'm not going to beg you to buy this.
          <div className="my-6" />
          I'm not going to use some countdown timer or fake scarcity tactics.
        </p>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">Here's the truth:</h3>
          <div className="text-lg">
            <p>Most people will read this page and do nothing.</p>
            <div className="my-6" />
            <p>
              They'll find excuses. They'll say they don't have the money.
              They'll say they'll "think about it."
            </p>
            <div className="my-6" />
            <p>
              They'll keep doing the same things that got them broke in the
              first place.
            </p>
          </div>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">And that's fine.</h3>
          <div className="text-lg">
            <p>This isn't for everyone.</p>
            <div className="my-6" />
            <p>
              This is only for the 5% who are serious about changing their
              lives.
            </p>
            <div className="my-6" />
            <p>The 5% who are tired of being broke.</p>
            <div className="my-6" />
            <p>
              The 5% who are willing to follow a proven system instead of making
              the same mistakes everyone else is making.
            </p>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold text-center">
            If you're part of the 95% who will find excuses, please don't buy
            this.
            <div className="my-6" />
            Save your money for garri and pure water.
          </h3>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold text-center">
            But if you're part of the 5% who are ready to take action...
            <div className="my-6" />
            If you're tired of being the "unsuccessful" one in your family...
            <div className="my-6" />
            If you're tired of calculating every naira you spend...
            <div className="my-6" />
            If you're tired of living in fear of the next emergency...
            <div className="my-6" />
            If you're ready to build a business that gives you respect, dignity,
            and financial freedom...
            <div className="my-6" />
            Then this is for you.
          </h3>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            My Guarantee to You
          </h2>

          <p className="text-lg mb-8">
            I'm going to make this ridiculously simple for you.
          </p>

          <div className="bg-green-100 border-l-4 border-green-600 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">
              If you follow the blueprint in this guide and don't make back at
              least 10 times what you paid within 90 days, I'll refund every
              naira you paid.
            </h3>
            <div className="text-lg">
              <p>No questions asked.</p>
              <div className="my-6" />
              <p>No hoops to jump through.</p>
              <div className="my-6" />
              <p>
                Just send me a message and I'll refund your money immediately.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold mb-4">
              But here's what I predict will happen:
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  You'll read this guide and immediately see opportunities
                  you've been blind to.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  You'll test your first business idea and get your first
                  customer within 2 weeks.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>You'll start making money within 30 days.</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Within 90 days, you'll have a business that's generating more
                  money than your last job.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  Within 6 months, you'll be the one your family comes to for
                  advice.
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">
              Within a year, you'll be unrecognizable.
            </h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>You'll walk into family gatherings with confidence.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>You'll live in a safer, cleaner environment.</span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  You'll be able to afford good healthcare for your loved ones.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-white mr-2">•</span>
                <span>
                  You'll never have to calculate whether you can afford basic
                  necessities.
                </span>
              </li>
            </ul>
            <p className="text-2xl font-bold">You'll be free.</p>
          </div>
        </div>
      </section>

      {/* Final Decision Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          The Real Question Is This:
        </h2>

        <div className="space-y-4 mb-8">
          <p className="text-xl font-bold">
            Are you going to be the same person next year that you are today?
          </p>
          <p className="text-xl font-bold">
            Are you going to keep doing the same things that got you broke in
            the first place?
          </p>
          <p className="text-xl font-bold">
            Are you going to keep waiting for someone to save you?
          </p>
          <p className="text-xl font-bold">
            Are you going to keep making excuses?
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <h3 className="text-xl font-bold mb-4">
            Or are you going to take control of your life?
          </h3>
          <p className="text-lg">
            The choice is yours.
            <div className="my-6" />
            But understand this: every day you wait is money lost.
            <div className="my-6" />
            Every day you spend broke is another day your family loses respect
            for you.
            <div className="my-6" />
            Every day you stay in that ghetto is another day you risk your
            safety.
          </p>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
          <h3 className="text-xl font-bold text-center">
            Every day you wait is another day closer to being too old to start
            over.
          </h3>
        </div>

        <div className="text-lg mb-8">
          <p>Time is not your friend.</p>
          <div className="my-6" />
          <p>The economy is not getting better.</p>
          <div className="my-6" />
          <p>Jobs are not becoming more available.</p>
          <div className="my-6" />
          <p>
            The fake gurus are not going to suddenly start telling the truth.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <h3 className="text-xl font-bold text-center">
            The only thing that's going to change your situation is YOU.
            <div className="my-6" />
            And you can either change it with a proven blueprint, or you can
            keep stumbling in the dark.
          </h3>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            Here's How to Get Started
          </h2>

          <p className="text-lg mb-8 text-center">
            Click the button below and you'll get instant access to The Ultimate
            Cash Machine.
          </p>
          <div className="my-6" />
          <p>
            You'll be able to download it immediately and start reading within 2
            minutes.
          </p>
          <div className="my-6" />
          <p>No waiting. No delays. No excuses.</p>

          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 rounded-lg text-center mb-8">
            <p className="text-4xl font-bold mb-4">₦9,950</p>
            <Link href="https://selar.com/012403">
              <button
                onClick={handleClick}
                className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:shadow-lg transition-shadow cursor-pointer w-full max-w-md"
              >
                GET THE ULTIMATE CASH MACHINE NOW
              </button>
            </Link>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 my-8">
            <h3 className="text-xl font-bold text-center">
              But remember - this is only for serious people.
              <div className="my-6" />
              People who are committed to changing their lives.
              <div className="my-6" />
              People who are willing to follow instructions instead of trying to
              reinvent the wheel.
            </h3>
            <p className="text-lg font-bold text-center mt-4">
              Are you one of them?
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
          Frequently Annoying Questions
        </h2>

        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: Is this another one of those "get rich quick" schemes?
            </h3>
            <p className="text-lg">
              A: Hell no. If you're looking for magic formulas and overnight
              riches, go buy a lottery ticket. This is a real business blueprint
              that requires actual work. It's not quick, but it's sure.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: Do I need money to start?
            </h3>
            <p className="text-lg">
              A: You need more sense than money. Most of the businesses you can
              start with this system require less than ₦10,000 to test. But if
              you can't afford ₦10,000, you probably can't afford to stay broke
              either.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: What if I'm not educated?
            </h3>
            <p className="text-lg">
              A: Good. You don't have to unlearn all the nonsense they teach in
              school. Some of the most successful entrepreneurs I know are
              school dropouts. Intelligence is not the same as academic
              qualifications.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: Will this work in my location?
            </h3>
            <p className="text-lg">
              A: The principles work anywhere humans exist and have problems
              they want solved. Whether you're in Lagos, Kano, or Akure, people
              have problems and they'll pay for solutions.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Q: What if I fail?</h3>
            <p className="text-lg">
              A: You're already failing. The question is whether you want to
              fail while trying something new or fail while doing the same old
              things that got you broke. At least with this, you have a
              blueprint to follow.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: Is ₦9,950 too expensive?
            </h3>
            <p className="text-lg">
              A: It's expensive if you're not serious about changing your life.
              It's cheap if you are. You probably spend more than that on
              airtime and data monthly. The question is: what's more important -
              chatting on WhatsApp or building a business?
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: How long before I see results?
            </h3>
            <p className="text-lg">
              A: If you follow the system exactly as outlined, you should see
              your first results within 2 weeks. Your first customers within 30
              days. Significant income within 90 days. But this depends on how
              fast you implement, not how fast you read.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">
              Q: What if I have more questions?
            </h3>
            <p className="text-lg">
              A: The guide is comprehensive. It answers every question you're
              likely to have. If you still have questions after reading it,
              you're probably overthinking instead of doing.
            </p>
          </div>
        </div>
      </section>

      {/* Final Warning Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-600">
            One Last Thing...
          </h2>

          <p className="text-lg mb-8">
            I want to tell you about two types of people who will read this
            page.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                The first type will find excuses:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"I don't have ₦9,950 right now."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"I'm not sure if this will work for me."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"Let me think about it."</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">•</span>
                  <span>"I'll buy it next month."</span>
                </li>
              </ul>
              <p className="font-bold mt-4">
                These people will still be broke next year. They'll still be
                making excuses. They'll still be waiting for someone to save
                them.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                The second type will take action:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    They'll recognize that ₦9,950 is a small price to pay for
                    potentially life-changing information.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    They'll understand that the risk of staying broke is bigger
                    than the risk of trying something new.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>
                    They'll invest in themselves instead of making excuses.
                  </span>
                </li>
              </ul>
              <p className="font-bold mt-4">These people will be successful.</p>
              <div className="my-6" />
              <p>
                Not because they're smarter or luckier, but because they take
                action when others make excuses.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
            <h3 className="text-xl font-bold text-center">
              Which type are you?
              <div className="my-6" />
              Your bank account already knows the answer.
            </h3>
          </div>

          <div className="text-center">
            <Link href="https://selar.com/012403">
              <button
                onClick={handleClick}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-8 rounded-full font-bold text-xl hover:shadow-lg transition-shadow cursor-pointer max-w-md w-full"
              >
                GET THE ULTIMATE CASH MACHINE NOW
              </button>
            </Link>
          </div>

          <div className="mt-12">
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="font-bold mb-2">
                P.S. - If you're still reading this, you're probably a skimmer.
                Let me make this simple for you:
              </p>
              <p className="mb-2">
                This is a complete business blueprint that shows you how to
                start a profitable business from scratch. It's based on proven
                principles used by successful entrepreneurs, not fake guru
                nonsense.
              </p>
              <p className="mb-2">
                The investment is ₦9,950 - less than what you'd spend on a
                weekend outing. The potential return is life-changing money and
                freedom.
              </p>
              <p className="mb-2">
                You get a 90-day money-back guarantee. If you don't make at
                least 10 times what you paid, you get a full refund.
              </p>
              <p className="font-bold">
                The question is simple: Are you going to keep being broke, or
                are you going to do something about it?
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg mt-4">
              <p className="font-bold mb-2">
                P.P.S. - I'm only making 500 copies of this available. Not
                because of some fake scarcity, but because I want to personally
                ensure everyone who gets this actually implements it. Once it's
                gone, it's gone. Don't be the person who "was going to buy it"
                but waited too long.
              </p>
            </div>

            <div className="bg-red-50 p-6 rounded-lg mt-4">
              <p className="font-bold">
                P.P.P.S. - Your family is watching. Your friends are watching.
                Your neighbors are watching. They're all waiting to see if
                you'll finally do something about your situation or if you'll
                keep making excuses. What story will you tell them next year?
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
