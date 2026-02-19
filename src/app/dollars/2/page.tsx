/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
import Image from 'next/image';
import Link from 'next/link';
// import EbookCover from '@/public/mockups/dollar-hustle.png'; 


const PAYMENT_LINK = 'https://selar.com/dollar';

export default function Home() {
  return (
    <>
      {/* simple header for reading comfort */}
      <header className="py-6 border-b border-gray-200 bg-white">
        {/* <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-sm text-gray-500 font-serif">direct response · the nigerian ai writer's playbook</p>
        </div> */}
      </header>

      <main className="bg-white text-gray-900 fo antialiased">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-16 space-y-8 md:space-y-10">

          {/* headline */}
          <h1 className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-red-600 text-center">
            “A Broke 23-Year-Old in Ibadan Had ₦0, A Tecno Phone, Basic ChatGPT — And Earned $120 From A Foreign Client In 19 Days. Here’s The Exact System He Used.”
          </h1>

          <p className="text-lg leading-relaxed text-gray-800 text-center">
            No special skills. No laptop. No PayPal. No years of experience. Just a working method that fits real Nigerian conditions — and a step-by-step guide that walks you through every single part of it.
          </p>

          <hr className="border-gray-300 my-8" />

          <p className=" leading-relaxed font-bold text-lg">Dear Friend,</p>
          <p className=" leading-relaxed">
            Let me ask you something.
          </p>
          <p className=" leading-relaxed">
            You have ChatGPT on your phone right now.
          </p>
          <p className=" leading-relaxed">
            Maybe you use it to write captions, summarize things, or even gist with it when you’re bored.
          </p>
          <p className=" leading-relaxed">
            But you’ve probably noticed something — other people are using this same tool to make real money. Dollar money. And you’re watching it happen from the outside.
          </p>
          <p className=" leading-relaxed">
            You’ve seen the posts. The dollar alerts. The “I made $500 this month writing for clients abroad” screenshots.
          </p>
          <p className=" leading-relaxed">
            And some part of you is thinking — Why not me? I’m not dull. I can write. I have the same tool. So what am I missing?
          </p>
          <p className=" leading-relaxed">
            That’s not a stupid question. That’s actually the right question.
          </p>
          <p className=" leading-relaxed">
            And the answer isn’t talent.
          </p>
          <p className=" leading-relaxed">
            It’s not your English.
          </p>
          <p className=" leading-relaxed">
            It’s not even your laptop — or lack of one.
          </p>
          <h2 className=" text-center text-xl leading-relaxed">
            The answer is a system. A specific, Nigeria-tested, step-by-step system that tells you exactly what to write, for whom, on which platform, and how to collect your dollars once you’ve done the work.
          </h2>
          <p className=" leading-relaxed">
            That system is what you’re about to read about.
          </p>

          <hr className="border-gray-300 my-8" />

          <p className=" leading-relaxed">
           But before we get there...
          </p>
          <p className="font-bold leading-relaxed">
            Here’s what usually happens when a Nigerian decides to make money writing online.
          </p>
          <p className=" leading-relaxed">
            They Google it. They find advice written by someone in Texas. Or London. Or Bali.
          </p>
          <p className=" leading-relaxed">
            The advice says: “Create a Fiverr account. Build a portfolio. Sign up for Upwork. Get paid via PayPal.”
          </p>
          <p className=" leading-relaxed">
            So they try. They create the profile. They apply for jobs. They wait.
          </p>
          <p className=" leading-relaxed">
            Nothing.
          </p>
          <p className=" leading-relaxed">
            Or worse — they get a response, do the work, then find out they can’t receive payment because their account isn’t supported. Or their Fiverr gig gets buried because they have zero reviews. Or Upwork rejects their application entirely.
          </p>
          <h2 className="text-center text-red-600 text-lg leading-relaxed">
            Then they try a different approach — WhatsApp groups, Telegram “training,” free ebooks that promise everything and explain nothing.
          </h2>
          <p className=" leading-relaxed">
            Still nothing.
          </p>
          <p className=" leading-relaxed">
            Six months pass. A year passes.
          </p>
          <p className=" leading-relaxed">
            And now they don’t just feel broke — they feel stupid. They feel like maybe this whole online money thing just doesn’t work for Nigerians. Like it’s designed for other people.
          </p>
          <p className=" leading-relaxed">
            So they stop trying.
          </p>
          <p className=" leading-relaxed">
            That’s not failure. That’s what happens when you follow advice that was never designed for your situation.
          </p>
          <p className=" leading-relaxed">
            The platforms are real. The money is real. Foreign clients are real. The only thing that was missing was a roadmap built specifically for someone sitting in Nigeria, with a Nigerian bank account, Nigerian internet, and Nigerian constraints.
          </p>
          <p className=" leading-relaxed font-bold">
            That roadmap now exists and I’m about to share it with you.
          </p>

          <hr className="border-gray-300 my-8" />

          {/* ebook introduction with image */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-gray-900">Introducing:</h2>
            <p className="text-3xl md:text-4xl font-bold italic">The Nigerian AI Writer's Playbook</p>
            <p className="text-2xl font-serif text-gray-700">How to Earn $300–$500 Monthly Writing Online From Nigeria — With a Little Help From AI</p>

            {/* ebook cover image */}
            <div className="my-8 flex justify-center">
              <Image
                src="/mockups/dollar-hustle.png"
                alt="The Nigerian AI Writer's Playbook ebook cover"
                width={350}
                height={450}
                priority
                className="rounded-md shadow-lg w-auto h-auto"
                sizes="(max-width: 768px) 300px, 350px"
              />
            </div>

            <p className=" leading-relaxed">
              This is a complete, step-by-step digital guide written specifically for Nigerians who want to earn consistent dollar income through writing online — using AI tools to work faster, charge more, and compete with writers anywhere in the world.
            </p>
            <p className=" leading-relaxed">
              And contrary to what you might be thinking…
            </p>
            <p className=" leading-relaxed">
              There’s no theory. No motivation speech. No recycled foreign advice with PayPal and Stripe plastered all over it.
            </p>
            <p className=" leading-relaxed font-bold">
              Just a clear, tested, Nigeria-specific system — from your first client to your first dollar alert.
            </p>
            <h1 className="my-12 text-xl leading-relaxed font-semibold">
              And here's a fraction of what's inside:
            </h1>

            <ul className="list-disc pl-6 space-y-4  marker:text-gray-400 font-">
              <li><span className="font-bold">✅ The exact 3 writing niches</span> where foreign clients are paying $50–$150 per piece — and why they actively prefer hiring Nigerian writers for these specific jobs over writers in the US or UK</li>
              <li><span className="font-medium">✅ How to use ChatGPT as your silent writing partner</span> so you produce client-ready work in 45 minutes that would normally take a professional writer 4 hours — without it sounding robotic, generic, or AI-detectable</li>
              <li><span className="font-bold">✅ The one freelance platform</span> that fully supports Nigerian accounts, pays clean to your Domiciliary account, and where complete beginners regularly land their first client within 14 days — it's not Fiverr, and it's not Upwork</li>
              <li><span className="font-medium">✅ A done-for-you "starter offer"</span> you can copy, paste, and send to clients immediately — specifically designed to get a yes even when your portfolio is completely empty</li>
              <li><span className="font-bold">✅ The 5 ChatGPT prompts</span> that make AI write in your voice, your tone, your style — so every piece you deliver feels 100% human, and clients keep coming back because they think it's all you</li>
              <li><span className="font-medium">✅ Why 90% of Nigerian freelancers using AI</span> are doing it completely backwards — and the one small shift that turns your ChatGPT subscription from a toy you play with into a tool that earns you ₦200,000+ monthly</li>
            </ul>
            <p className=" text-red-600 my-12 text-xl italic">And that’s not all…</p>
            <ul className="list-disc pl-6 space-y-4  marker:text-gray-900 marker:text-lg ">
              {/* <li><span className="font-bold">The three writing niches</span> where Nigerian beginners are quietly earning ₦150,000–₦300,000 monthly — and why most people overlook them because they sound "too simple"</li> */}
              <li><span className="font-medium">A breakdown of exactly how 3 hours of work per day</span> can realistically add $50–$80 to your income every week — with the math shown clearly, no hype</li>
              <li><span className="font-bold">Where to find clients</span> who are already looking for writers like you right now — no cold calling, no begging, no "please check and get back to me" energy</li>
              <li><span className="font-medium">The pricing mistake</span> almost every beginner makes that keeps them earning peanuts — and the simple repositioning that can double your rate overnight</li>
              <li><span className="font-bold">Why this works perfectly on a phone</span> — no laptop required, no special equipment, no excuses left</li>
              <li><span className="font-medium">How to land your first paid writing gig</span> within 19-30 days of reading this — even with zero portfolio, zero experience, and zero connections</li>
            </ul>
            <p className=" text-red-600 my-12 text-xl italic">Believe it or not… there’s still more.</p>
            <ul className="list-disc pl-6 space-y-4  marker:text-gray-400">
              <li><span className="font-bold">What to say to your first client</span> so they trust you immediately — a word-for-word template you can copy, paste, and personalize in 5 minutes</li>
              <li><span className="font-medium">The #1 reason people who buy writing courses never make a dime</span> — and the one mindset shift that changes everything from day one</li>
              <li><span className="font-bold">✅ The payment setup</span> that takes 37 minutes to complete and lets you receive dollar payments directly from international clients — no PayPal, no US address, no middleman cutting your money</li>
              <li><span className="font-medium">✅ How to "package" your AI-assisted writing</span> so you can charge premium rates — and why clients will actually pay you more knowing you use AI, not less</li>
              <li><span className="font-bold">✅ The truth about whether your English needs to be "perfect"</span> — and what international clients actually look for when they're deciding who to hire (it's not what your secondary school English teacher told you)</li>
              <li><span className="font-medium">✅ How to take on 4–6 writing clients simultaneously</span> without burning out or missing deadlines — even if you're still in school or working a 9-5</li>
              <li><span className="font-bold">✅ The exact 19-day "First Client Blueprint"</span> — the same sequence a 23-year-old in Ibadan used with just a Tecno phone and mobile data to land his first $120 client, starting from zero</li>
              <li><span className="font-medium">✅ What to do if you've followed everything</span> and still haven't earned in 60 days — the backup path that has worked for every single person who went through it</li>
            </ul>
            <p className=" font-bold">And many many MORE!</p>
          </div>

          <hr className="border-gray-300 my-8" />

          <p className=" leading-relaxed">
            Look, this isn't theory pulled from a YouTube video.
          </p>
          <p className=" leading-relaxed">
            Everything in this guide has been tested against real Nigerian conditions.
          </p>
          <ul className="list-disc pl-6 space-y-2  marker:text-gray-400">
            <li><span className="font-medium">Real Nigerian internet speeds.</span></li>
            <li><span className="font-bold">Real Nigerian banks.</span></li>
            <li><span className="font-medium">Real Domiciliary account limitations.</span></li>
            <li><span className="font-bold">Real client conversations.</span></li>
            <li><span className="font-medium">Real platforms that actually work from a Nigerian IP address.</span></li>
          </ul>
          <p className=" leading-relaxed">
            The 19-day First Client Blueprint came from a real result — a 23-year-old in Ibadan with no laptop, a Tecno Spark, and ₦2,000 data who followed a clean, simple sequence and received his first dollar payment before the month was out.
          </p>
          <p className=" leading-relaxed">
            The payment setup section? <br/><br/> Written after testing 6 different methods and finding the 2 that work cleanly, consistently, and without holding your money for 10 business days.
          </p>
          <p className=" leading-relaxed">
            The niches? Identified by studying what foreign clients are actually paying for right now — not last year, not in theory, but in live job postings analysed specifically for what a Nigerian writer with AI tools can realistically deliver.
          </p>
          <p className=" font-bold">
            If it doesn't work in Nigeria, it's not in this book.
          </p>

          <hr className="border-gray-300 my-8" />

          <h3 className="text-2xl font-bold">Okay, so here’s the deal</h3>
          <p className=" leading-relaxed">
            This guide is priced at ₦4,999.
          </p>
          <p className=" leading-relaxed">
            If you follow the system inside and land even one client in your first month — a single article at $50 — you've earned roughly ₦75,000 at current exchange rates.
          </p>
          <p className=" leading-relaxed">
            That's a 10x return. From one client. In one month.
          </p>
          <h2 className="text-xl text-center leading-relaxed">
            And the target this system is built around is $300–$500 per month. That's ₦450,000–₦750,000 monthly at current rates.
          </h2>
          <p className=" leading-relaxed">
            As in, you're paying ₦4,999 for a system designed to generate that. Every single month. Consistently.😲
          </p>
          <p className=" leading-relaxed">
            So the real question isn't whether ₦4,999 is too much.
          </p>
          <p className="text-xl font-bold">
            The real question is: what does another year of not having this system cost you?
          </p>

          <div className="text-center py-6">
            <Link
              href={PAYMENT_LINK}
              className="inline-block bg-red-600 text-white text-xl md:text-2xl font-bold px-10 py-5 rounded-sm shadow-md hover:bg-red-800 transition-colors"
            >
              YES! GIVE ME THE NIGERIAN AI WRITER'S PLAYBOOK
            </Link>
            <p className="text-sm text-gray-500 mt-2">Instant digital delivery. Start reading in the next 5 minutes.</p>
          </div>

          <hr className="border-gray-300 my-8" />

          <h3 className="text-2xl font-bold">Plus, here's my promise to you.</h3>
          <p className=" leading-relaxed">
            Read this guide. Follow the system. Go through the 19-day First Client Blueprint exactly as it's laid out.
          </p>
          <p className=" leading-relaxed">
            If you do all of that and you haven't made progress toward your first client — not even a response, not even a conversation — I'll refund every naira you paid. No argument. No interrogation. No "prove you did the work" runaround.
          </p>
          <p className=" leading-relaxed">
            Because I don't want your ₦4,999 if this system doesn't work for you.
          </p>
          <p className=" leading-relaxed font-medium">
            What I want is for you to send me a message 30 days from now telling me about your first dollar alert.
          </p>
          <p className=" leading-relaxed">
            You have 30 days. Zero risk. Full refund if it doesn't move for you.
          </p>

          <div className="text-center py-4">
            <Link
              href={PAYMENT_LINK}
              className="inline-block bg-red-600 text-white  font-bold px-8 py-4 rounded-sm hover:bg-red-700 transition"
            >
              YES — I WANT THE NIGERIAN AI WRITER'S PLAYBOOK
            </Link>
            <p className="text-sm text-gray-500 mt-2">Instant digital delivery. Start reading in the next 5 minutes.<br />30-Day Full Refund Guarantee. No questions asked.</p>
          </div>

          <hr className="border-gray-300 my-8" />

          <h3 className="text-3xl font-bold">ONE MORE THING….</h3>
          <p className=" leading-relaxed">
            Not everyone should get this guide.
          </p>
          <p className=" leading-relaxed font-bold">
            I’m serious.
          </p>
          <p className=" leading-relaxed">
            So, pay attention to this part to see if you qualify:
          </p>

          <p className="text-xl font-bold">This guide is NOT for you if:</p>
          <ul className="list-disc pl-6 space-y-2  marker:text-gray-400">
            <li>You're looking for a get-rich-quick scheme that requires zero effort.</li>
            <li>You want someone to do the work for you.</li>
            <li>You're not willing to send a single message to a single client.</li>
          </ul>

          <p className="text-xl font-bold pt-4">This guide is for you if:</p>
          <ul className="list-disc pl-6 space-y-2  marker:text-gray-400">
            <li><span className="font-bold">✔ You're Nigerian,</span> you have a smartphone and internet access, and you're genuinely ready to put in focused work for 2–4 hours a day to build something real.</li>
            <li><span className="font-medium">✔ You've tried "online money" before</span> and it didn't work — and you're willing to consider that it wasn't your fault, it was the method.</li>
            <li><span className="font-bold">✔ You already have ChatGPT</span> or you're willing to get it. You don't need to be a power user — you just need to be willing to follow instructions.</li>
            <li><span className="font-medium">✔ You want dollar income specifically</span> — not because naira isn't real money, but because you understand that $300/month at today's exchange rate is a different financial life than ₦300,000 sounds like on paper.</li>
          </ul>

          <div className="text-center py-4">
            <Link
              href={PAYMENT_LINK}
              className="inline-block bg-red-600 text-white  font-bold px-8 py-4 rounded-sm hover:bg-red-900 transition"
            >
              YES — I WANT THE NIGERIAN AI WRITER'S PLAYBOOK
            </Link>
            <p className="text-sm text-gray-500 mt-2">Instant digital delivery. Start reading in the next 5 minutes.<br />30-Day Full Refund Guarantee. No questions asked.</p>
          </div>

          <hr className="border-gray-300 my-8" />

          <h3 className="text-2xl font-bold">Now, Hear me out</h3>
          <p className=" leading-relaxed">
            You already have the tool.
          </p>
          <p className=" leading-relaxed">
            You've had ChatGPT this whole time. You've had a phone. You've had the hunger.
          </p>
          <p className=" leading-relaxed">
            The only thing that's been missing is the system.
          </p>
          <p className=" leading-relaxed">
            And right now, somewhere abroad, a foreign client is posting a writing job. They don't care what country you're from. They care whether the work gets done well and on time.
          </p>
          <p className=" leading-relaxed">
            You could be that writer.
          </p>
          <p className=" leading-relaxed">
            Not eventually. Not "someday when you're more experienced." Now. With what you already have.
          </p>
          <p className=" leading-relaxed">
            But not without a clear path. Not while guessing. Not while following advice built for someone in London or Texas.
          </p>
          <p className="text-xl font-bold">
            This is the clear path.
          </p>

          <div className="text-center py-4">
            <p className="text-2xl font-bold mb-2">👇 GET INSTANT ACCESS NOW — ₦4,999 ONLY</p>
            <Link
              href={PAYMENT_LINK}
              className="inline-block bg-gray-900 text-white  font-bold px-10 py-4 rounded-sm hover:bg-gray-800 transition"
            >
              YES — I WANT THE NIGERIAN AI WRITER'S PLAYBOOK
            </Link>
            <p className="text-sm text-gray-500 mt-2">Instant digital delivery. Start reading in the next 5 minutes.<br />30-Day Full Refund Guarantee. No questions asked.</p>
          </div>

          <hr className="border-gray-300 my-8" />

          <p className=" leading-relaxed">
            P.S. — If you're still reading, you already know this is for you. The only question left is whether you'll act on it today or talk yourself out of it again.
          </p>
          <p className=" leading-relaxed">
            You've probably done that before — seen something real, felt the pull, then convinced yourself to "wait and see." And six months later, you're still waiting.
          </p>
          <p className=" leading-relaxed">
            The system in this guide doesn't change. The money doesn't change. The foreign clients don't change.
          </p>
          <p className=" leading-relaxed">
            What changes is how long you wait to access it.
          </p>
          <p className=" leading-relaxed">
            ₦4,999. 30-day guarantee. Instant delivery.
          </p>
          <div className="text-left pt-2">
            <Link
              href={PAYMENT_LINK}
              className="inline-block bg-gray-800 text-white px-6 py-3 font-bold hover:bg-gray-900 transition"
            >
              GET INSTANT ACCESS NOW
            </Link>
          </div>

          <p className=" leading-relaxed pt-4">
            P.P.S. — Remember: one article at $50 is ₦75,000 at current exchange rates. This guide costs ₦4,999. You do the maths.
          </p>

          <hr className="border-gray-300 my-8" />

          {/* FAQ Accordion Section */}
          <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-none divide-y">
              <details className="group p-4" name="faq">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold ">
                  Q: I don't have a laptop. Can I really do this with just my phone?
                  <span className="transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-gray-700 pl-2">
                  A: Yes. The entire system is built to work on a smartphone. The 23-year-old in Ibadan used a Tecno phone. You don't need a laptop.
                </p>
              </details>
              <details className="group p-4" name="faq">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold ">
                  Q: What if I'm not a great writer?
                  <span className="transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-gray-700 pl-2">
                  A: You don't need to be. You need to be able to follow instructions and use the prompts provided. AI does the heavy lifting; you guide it.
                </p>
              </details>
              <details className="group p-4" name="faq">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold ">
                  Q: How do I get paid if I can't use PayPal?
                  <span className="transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-gray-700 pl-2">
                  A: The guide includes a tested, step-by-step payment setup that works for Nigerians, using platforms that pay directly to your domiciliary account. No PayPal required.
                </p>
              </details>
              <details className="group p-4" name="faq">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold ">
                  Q: What if I've tried online work before and failed?
                  <span className="transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-gray-700 pl-2">
                  A: This guide was written for you. It's not your fault you failed before; you were following advice not meant for Nigeria. This system is different.
                </p>
              </details>
              <details className="group p-4" name="faq">
                <summary className="flex justify-between items-center cursor-pointer list-none font-bold ">
                  Q: Is this a one-time payment or a subscription?
                  <span className="transform group-open:rotate-180">▼</span>
                </summary>
                <p className="mt-2 text-gray-700 pl-2">
                  A: One-time payment of ₦4,999. You get lifetime access to the guide and all future updates.
                </p>
              </details>
            </div>
          </div>

        </article>
      </main>

      {/* simple footer */}
      <footer className="border-t border-gray-200 py-6 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-xs text-gray-400 text-center">
          © 2026 The Nigerian AI Writer's Playbook · All rights reserved
        </div>
      </footer>

      {/* tiny script to make details exclusive (closes others when one opens) – per FAQ requirement */}
      <script dangerouslySetInnerHTML={{
        __html: `
          document.querySelectorAll('details[name="faq"]').forEach((details) => {
            details.addEventListener('toggle', (event) => {
              if (details.open) {
                document.querySelectorAll('details[name="faq"]').forEach((other) => {
                  if (other !== details) other.open = false;
                });
              }
            });
          });
        `}}
      />
    </>
  );
}