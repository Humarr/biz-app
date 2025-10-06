/* eslint-disable react/no-unescaped-entities */
// app/sales-page/page.tsx
import Link from 'next/link';
import Image from 'next/image';

export default function SalesPage() {
  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="px-8 lg:px-40 py-40">
        <h1 className="font-heading2 font-bold text-5xl lg:text-7xl text-center text-gray-900 leading-tight">
          PICTURE THIS:
        </h1>
        <h2 className="font-bold italic text-3xl lg:text-4xl text-center text-gray-900 leading-tight mt-6">
        It's Monday morning.
        </h2>
        
        <div className="font-lato text-xl lg:text-2xl text-gray-700 mt-12 space-y-8 leading-relaxed">
          {/* <p>It's Monday morning.</p> */}
          <p>Your alarm goes off at 6 AM.</p>
          <p>You drag yourself out of bed, shuffle to the bathroom, and stare at your reflection in the mirror.</p>
          <p>And you think to yourself:</p>
          <p className="text-2xl lg:text-3xl italic">"I'm doing this… *again*?"</p>
          <p>Another week of making your boss rich.</p>
          <p>Another week of sitting in traffic for a job that could fire you on a whim.</p>
          <p>Another week of watching the owners drive luxury cars while you're wondering if you can afford that N3,000 lunch or if you should just skip it and save the money.</p>
          <p>You get dressed… commute to work… and spend 8-10 hours (let's be honest, probably more) building someone else's dream.</p>
          <p>And at the end of the month?</p>
          <p>You get a paycheck that barely covers your rent and expenses.</p>
          <p>Maybe—*maybe*—you get a 5% raise this year if you're lucky.</p>
          <p>(Meanwhile, your boss just bought a second property. But I digress.)</p>
          <p>And the WORST part?</p>
          <p>Deep down, you know the truth:</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>You could be fired tomorrow. For any reason. Or no reason at all.</strong></p>
          <p>All that "job security" you've been clinging to?</p>
          <p>It's an illusion.</p>
          <p>One bad quarter… one restructuring… one "cost-cutting measure"… and you're out.</p>
          <p>With nothing to show for all those years except a severance check (if you're lucky) and a LinkedIn update about "seeking new opportunities."</p>
          <p>😱</p>
          <p>Sound familiar?</p>
          <p>Well, if this scene made your stomach drop… I have good news for you.</p>
          <p className='text-xs'>(Phew, nearly went full "doom and gloom" mode there without offering a solution.)</p>
          <p>Because on this page, I'm going to show you how you can escape the job trap forever…</p>
          <p>… by revealing the step-by-step playbook that transforms regular people stuck in dead-end jobs into profitable business owners.</p>
          <p>Sound good?</p>
          <p>Well, here's the deal:</p>
          <p>I've created an ebook called…</p>
        </div>
      </section>

      {/* Book Title Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <h2 className="font-lato font-black text-4xl lg:text-6xl text-gray-900 text-center leading-tight">
          The Small Business Playbook
        </h2>
        
        {/* 3D Book Mockup */}
        <div className="flex justify-center mt-16">
          <Image 
              src="/tsbp/cover.png"
                // alt="The small business playbook book cover"
            alt="The Small Business Playbook 3D Mockup"
            width={400}
            height={500}
            className="shadow-2xl"
          />
        </div>

        <div className="font-lato text-xl lg:text-2xl text-gray-700 mt-16 text-center leading-relaxed">
          <p>And if I lost everything tomorrow and had to start over from scratch…</p>
          <p>This is the FIRST thing I would study to get back on my feet (for reasons you will see shortly).</p>
          <p>And I am not alone in that sentiment.</p>
          <p>Cue inappropriately-placed teaser testimonial! (drumroll)</p>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-8 lg:px-40 py-40">
        <blockquote className="font-lato text-2xl lg:text-3xl text-gray-700 italic text-center max-w-4xl mx-auto leading-relaxed">
          "I've been working the same job for 7 years, always telling myself 'one day' I'd start something. After reading The Small Business Playbook, I finally did it. Started a small catering business from my kitchen. Three months in, I'm making more on weekends than I do all week at my 9-to-5."
        </blockquote>
        <p className="font-lato font-bold text-xl text-gray-900 text-center mt-8">— Chidinma O., Lagos</p>

        <div className="font-lato text-xl lg:text-2xl text-gray-700 mt-16 space-y-8 leading-relaxed">
          <p>Neat, hey? But hang on. Before I tell you what The Small Business Playbook is about, a word of warning:</p>
          <ul className="space-y-4 list-disc list-inside">
            <li>It is NOT a get-rich-quick scheme. (In fact, I'm going to tell you exactly why those don't work and what to do instead.)</li>
            <li>Also, it is not filled with complicated business jargon or MBA nonsense. (This is written for regular people who just want to make money, not impress investors at cocktail parties.)</li>
            <li>And WORST of all… I'm going to tell you some hard truths about starting a business that most "gurus" won't tell you because it doesn't sound sexy.</li>
          </ul>
          <p>All right. That's the bad news.</p>
          <p>So… what is this ebook about?</p>
          <p>And why should you care?</p>
          <p>Well, as the name hints at, The Small Business Playbook is a guide on…</p>
          <p>… how to actually start and grow a profitable small business.</p>
          <p>"Huh?" you say skeptically. "Another business book? I've seen a thousand of those. They're all the same!"</p>
          <p>Yeah… right.</p>
          <p>Everyone thinks they've "seen it all" when it comes to business advice.</p>
          <p>But, listen:</p>
          <p>If you're STILL working a job you hate, still dreaming about "someday" starting your own thing, still making excuses about why "now isn't the right time"…</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>It's because you've been fed the wrong information.</strong></p>
          <p>Seriously. If you haven't started yet…</p>
          <p>It means… you don't actually know how to come up with a good business idea.</p>
          <p>It means… you don't know how to validate if your idea will actually make money (before you waste months building something nobody wants).</p>
          <p>It means… you're terrified of losing money, failing publicly, and proving the doubters right.</p>
          <p>And it means… you might think starting a business is "risky"—when in reality, keeping that job is FAR riskier.</p>
          <p>So, forget buying yet another "passive income" course or "10X your life" program.</p>
          <p>If you still feel trapped in your job, even after reading business books and watching YouTube videos, <strong>fix the ROOT PROBLEM: you don't have a real, actionable plan.</strong></p>
          <p>And, admit it: right now, you don't actually have a "plan" in place. Right?</p>
          <p>Well, let me flex a little and show my mind-reading skills…</p>
          <p>… by talking about what I think your current situation is like.</p>
          <p>(This is an aggregate of most people stuck in jobs who want to start businesses, so maybe not every point is you… but I reckon most will be.)</p>
          <p>You tell me how this sounds, okay?</p>
        </div>
      </section>

      {/* "So You Want to Start a Business" Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 mb-16">So You Want to Start a Business</h2>
        
        <div className="font-lato text-xl lg:text-2xl text-gray-700 space-y-8 leading-relaxed">
          <p>If you're like most people, here's what you do…</p>
          <p>You start with those things everyone says you "should" do, like…</p>
          
          <ul className="space-y-6">
            <li><strong>Ask your friends and family for business ideas.</strong> That's what people do, right? Except… your uncle suggests you open a barbershop (even though you hate cutting hair), your friend says "just sell stuff online," and your mom tells you to "get a real job." So much for that suggestion.</li>
            
            <li><strong>Next, you try to come up with "the perfect idea."</strong> But… nothing comes. Or worse, you have 17 half-baked ideas and no clue which one is actually worth pursuing. You're paralyzed by choice.</li>
            
            <li><strong>Okay… what about just starting something and seeing what happens?</strong> Everyone says "just start," right? But… you don't want to waste money on an idea that flops. And you don't know how to test if people will actually buy. It's just a bunch of guessing.</li>
            
            <li><strong>You're getting desperate.</strong> You Google "best business ideas" and find… listicles. "Top 50 businesses to start in 2024!" Dropshipping, affiliate marketing, print-on-demand… all these things you've heard about but have no idea how to actually DO.</li>
          </ul>
          
          <p>Sigh. Somehow, it's not as easy as that YouTube video made it look.</p>
          <p>And that's not to mention…</p>

          <h3 className="font-lato font-black text-3xl text-gray-900 mt-12 mb-6">Actually running the business…</h3>
          
          <p>You have a vague idea that you're meant to do things like "marketing", "customer service", "pricing strategy" and so on.</p>
          <p>But when you start thinking about it, you realize you don't actually know how any of this works.</p>
          <p>So you end up feeling overwhelmed and doing… nothing.</p>
          <p>Oh, and you've heard people say you're supposed to "find your niche"…</p>
          <p>… but you have no idea how to do that.</p>
          <p>And let's be honest:</p>
          <p>You don't WANT to spend six months researching and planning!!!</p>
          <p>Really? All you want is something simple you can actually START, without needing a business degree or N500,000 in capital.</p>
          <p>And then there's the biggest fear of all…</p>

          <h3 className="font-lato font-black text-3xl text-gray-900 mt-12 mb-6">"What if I fail?"</h3>
          
          <p>You stare at your savings account (or lack thereof) and wonder if you're crazy for even considering this…</p>
          <p>So you just stay at your job! 🤷♂️</p>
          <p>You keep telling yourself "maybe next year" or "when I have more money saved up" or "when the timing is better."</p>
          <p>Never sure if you actually have what it takes… or when the "perfect moment" will arrive.</p>
          <p>And when you DO think about quitting your job…</p>
          <p>You're terrified your boss will be right about you.</p>
          <p>Because you didn't actually learn HOW to build something sustainable.</p>
          <p>No wonder you feel stuck.</p>
          <p>And no wonder every time you think about starting a business…</p>
          <p>… you end up scrolling LinkedIn for job postings instead.</p>
        </div>
      </section>

      {/* Bad Advice Section */}
      <section className="px-8 lg:px-40 py-40">
        <div className="font-lato text-xl lg:text-2xl text-gray-700 space-y-8 leading-relaxed">
          <p>Don't worry though! There are plenty of 'business advice' videos online, full of HELPFUL (🙄) tips like:</p>
          
          <ul className="space-y-6">
            <li><strong>You need PASSION!</strong> Follow your passion and the money will follow! (What? You don't have a burning passion for anything in particular? Well… that's YOUR problem!)</li>
            
            <li><strong>Just start! Action beats planning!</strong> What do you mean you don't know what to do? JUST DO SOMETHING! Fail fast! Fail forward! Fail… everywhere!</li>
            
            <li><strong>Build a personal brand.</strong> Post on LinkedIn every day. Make TikToks. Be authentic! (Oh, you're an introvert? Too bad. Dance for the algorithm!)</li>
            
            <li><strong>Study successful entrepreneurs.</strong> Read about Elon Musk, Steve Jobs, and Jeff Bezos. (Oh wait, they all had millions in funding and connections? And you have… N50,000 and a Nokia? Well… just work harder!)</li>
            
            <li><strong>And yeah, just basically: hustle, grind, sacrifice sleep, monetize your hobbies, build an email list, create a sales funnel, run Facebook ads, optimize your conversion rate, A/B test everything, and don't forget to manifest abundance while you're at it!</strong></li>
          </ul>
          
          <p><em>Oh hey I was gonna explain HOW to actually do all this stuff but I ran out of time in my video so just figure it out yourself or something lol kthxbye</em></p>
          <p>😑</p>
          <p>Yeah… very helpful.</p>
          <p>Top job, guys!</p>
          <p>Way to make it easy!</p>
          <p>Well, dear reader—fear not.</p>
          <p>That's where MY ebook comes in.</p>
        </div>
      </section>

      {/* My Story Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 mb-16">Here's My Story (And Why I Had No Choice But to Figure This Out)</h2>
        
        <div className="font-lato text-xl lg:text-2xl text-gray-700 space-y-8 leading-relaxed">
          <p>When I graduated in 2019, I did what everyone told me to do:</p>
          <p>I learned a skill. I got good at it. I prepared for job interviews.</p>
          <p>Specifically, I learned to code.</p>
          <p>And I got GOOD at it.</p>
          <p>Good enough to land interviews for foreign coding jobs… jobs that paid $100,000 per year.</p>
          <p>Let me repeat that: <strong>One hundred thousand US dollars.</strong></p>
          <p>In Nigeria, that's life-changing money.</p>
          <p>That's "buy a house, take care of your family, never worry about money again" type of money.</p>
          <p>So when I got the interview… I was ready.</p>
          <p>I had studied. I had practiced. I knew my stuff.</p>
          <p>There was just one problem:</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>I was broke.</strong></p>
          <p>Not "oh I'm a little short this month" broke.</p>
          <p>I mean "I have N100 left in my account" broke.</p>
          <p>But I needed data for the Zoom interview.</p>
          <p>So I took that last N100… bought the smallest data bundle I could find… and prayed it would be enough.</p>
          <p>The interview started.</p>
          <p>And it was going PERFECTLY.</p>
          <p>I was answering every question. Nailing every explanation.</p>
          <p>The interviewers were impressed—I could tell.</p>
          <p>Then came the final part:</p>
          <p>"Okay, great! Now if you could just share your screen, we'd like to give you a quick coding test. Should only take 10 minutes."</p>
          <p>Ten minutes.</p>
          <p>I had already written the solution in my head. It was THAT simple.</p>
          <p>This job was mine.</p>
          <p>I clicked "Share Screen"…</p>
          <p>And then—</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>PING!</strong></p>
          <p><em>"Dear customer, your data has been—"</em></p>
          <p>I didn't even finish reading the message before the Zoom call disconnected.</p>
          <p>Gone.</p>
          <p>My heart sank.</p>
          <p>I scrambled. Ran to my neighbor's house. Begged him to turn on his hotspot.</p>
          <p>By the time I got back online?</p>
          <p>The interviewers were gone.</p>
          <p>I sent emails. Dozens of them.</p>
          <p>Apologizing. Explaining. Begging for another chance.</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>I never heard back.</strong></p>
          <p>That $100,000 job?</p>
          <p>Slipped through my fingers because I couldn't afford N500 worth of data.</p>
          <p>And that's when I decided:</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>Enough.</strong></p>
          <p>I was DONE relying on interviews.</p>
          <p>DONE hoping some company would "give me a chance."</p>
          <p>DONE being one missed Zoom call away from financial ruin.</p>
          <p>I decided I was going to learn how to make money on my own terms.</p>
          <p>So I threw myself into the world of business.</p>
          <p>I read every business book I could get my hands on.</p>
          <p>I starved—literally skipped meals—so I could save money to buy business courses.</p>
          <p>I watched thousands of hours of videos from top entrepreneurs around the world.</p>
          <p>I studied marketing. Sales. Customer psychology. Pricing strategies.</p>
          <p>And slowly… I figured it out.</p>
          <p>I learned what actually works.</p>
          <p>Not theory. Not fluff.</p>
          <p className="font-lato font-black text-2xl lg:text-3xl text-gray-900"><strong>Real, practical strategies for starting and growing a profitable business—even if you're broke, even if you have no experience, and even if you have no idea where to start.</strong></p>
          <p>And that's what I've packed into The Small Business Playbook.</p>
          <p>Everything I wish I had known when I was staring at that disconnected Zoom call, wondering if I'd ever escape the cycle of job applications and financial insecurity.</p>
          <p>This isn't just a book.</p>
          <p>It's the result of years of painful trial and error… distilled into a step-by-step guide you can actually use.</p>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="px-8 lg:px-40 py-40">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 mb-16">So… What's Inside The Small Business Playbook?</h2>
        
        <div className="font-lato text-xl lg:text-2xl text-gray-700 space-y-8 leading-relaxed">
          <p>Well, rather than throw in a bunch of hype-filled bullets… I'm just going to TELL you what's in the book. Straight up.</p>
          <p>Here's what you'll discover:</p>
          
          <ul className="space-y-6">
            <li><strong>Why asking your friends and family what business you should start is one of the WORST things you can do</strong> (and what to do instead)</li>
            <li><strong>How to effortlessly generate crazily good business ideas</strong> and know instantly which of them can actually make you rich (most people get this backwards and waste months on ideas that were doomed from the start)</li>
            <li><strong>The sure-fire foundations of any business:</strong> including the "make things less awful" technique and the "make things more awesome" technique (these two simple frameworks will give you more business ideas than you know what to do with)</li>
            <li><strong>The Deadly Advertising Sins That Keep You Broke</strong> — the one thing you should NEVER do when advertising your business (do this and you'll burn through money faster than a politician at a buffet)</li>
            <li><strong>Why identifying the people you want to advertise to is very important</strong> — and why most business gurus have this information completely wrong (follow their advice and you'll be shouting into the void while your competitors steal your customers)</li>
            <li><strong>The 8 commandments of advertising for small businesses</strong> (if you get this wrong, people will never buy from you. Plus, you'll LOSE money. But get it right? You'll have customers lining up.)</li>
            <li><strong>The Business Analyzer Framework for validating business ideas</strong> you'll discover when you read this book (don't use this, and you'll likely pick the LEAST profitable of all the business ideas you generate)</li>
            <li><strong>The reason why your products should be affordable, not cheap</strong> (and how you can do it without losing money or looking desperate)</li>
            <li><strong>How to price your products for maximum profitability WITHOUT losing customers</strong> (hint: it's not about being the cheapest option)</li>
            <li><strong>What NEVER to do when starting out</strong> (unless you want to go broke faster than you can say "entrepreneurship")</li>
            <li><strong>What you should do to avoid getting "eaten up" by bigger competitors</strong> (because let's face it—they have more money, more reach, and more resources than you. But that doesn't mean you can't win.)</li>
            <li><strong>The sneaky "David and Goliath" trick you can use to STEAL customers from your competitors</strong> (even if they're ten times your size)</li>
            <li><strong>The truth about being #1 in your business category</strong> (and how to achieve it without spending a fortune on marketing)</li>
            <li><strong>What NEVER to do when running your business</strong> (Do this, and your customers will forget and dump you fast fast!)</li>
            <li><strong>Do you know the 4 psychological triggers in people's minds that make them buy?</strong> (Use any of them and you can almost always never run out of new customers)</li>
            <li><strong>The sneaky tricks to get your customers to promote your business everywhere they go like MTN</strong> — without paying them a kobo (this is the closest thing to "free advertising" you'll ever find)</li>
            <li><strong>The reasons why word of mouth is very important for the survival and profitability of your business</strong> (ignore this and you'll be stuck paying for ads forever)</li>
            <li><strong>Do you know people trust what other people say about your business more than what YOU say?</strong> (You can use this to your advantage. See how when you get the book.)</li>
            <li><strong>The sneaky little ways you can use low prices to attract customers WITHOUT losing profits</strong> (yes, it's possible. And no, it doesn't involve cutting corners.)</li>
            <li><strong>What you should avoid when you start making money in your business</strong> (this is where most people sabotage themselves just as things start working)</li>
            <li><strong>The psychological reason why people buy</strong> — and how you can use it to INCREASE your prices without losing customers (In fact, follow it, and they'll still snub your competitors to buy from you!)</li>
            <li><strong>What to NEVER do when starting out</strong> (Do this, and your business will surely crash before it even gets off the ground)</li>
            <li><strong>You think starting a business is risky, right? Wrong!</strong> We'll explain why having a job is much, much more risky (and why the "safe" option is actually the most dangerous)</li>
            <li><strong>The steps you can take to prevent your business from failing in its first 6 months</strong> (because most businesses DO fail in that time—but yours doesn't have to)</li>
            <li><strong>The reasons why people are NOT looking for low prices</strong> (and what they want instead—nail this and you'll never have to compete on price again)</li>
            <li><strong>And many, Many, MAny, MANy, MANY more!</strong></li>
          </ul>
          
          <p>You see, you're getting a massive ocean of valuable, quality information.</p>
          <p>And I know that by the time you finish reading the book, you'll have all the information you'll ever need to start and grow a profitable business and make over 3X your current income.</p>
          <p>But that's not all you're getting.</p>
          <p>If you order this book today, I'm going to give you <strong>TWO juicy gifts FREE!</strong></p>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 mb-16">But that's not all you're getting.</h2>
        
        <div className="font-lato text-xl lg:text-2xl text-gray-700 space-y-16 leading-relaxed">
          <div>
            <h3 className="font-lato font-black text-2xl lg:text-3xl text-gray-900 mb-4">GIFT #1: The 6 Kinds of Products People Love to Buy</h3>
            <p>The fact is, it doesn't matter the condition of the economy.</p>
            <p>It doesn't matter whether the country is hard…</p>
            <p>These 6 categories of products will STILL sell like mad if you do it right.</p>
            <p>(And no, it's not food, it's not clothes, and it's not water… eeew!)</p>
            <p>Don't worry, you'll discover them, know which of them fits you, and how you can get started when you grab your copy of this book.</p>
          </div>
          
          <div>
            <h3 className="font-lato font-black text-2xl lg:text-3xl text-gray-900 mb-4">GIFT #2: The Advertising Templates Toolkit</h3>
            <p>Here, you'll discover different kinds of advertising templates you can use to advertise your products and services.</p>
            <p>Remember the 8 commandments of advertising I said you'll get when you order this book?</p>
            <p>This free gift makes it <strong>eeaaasy</strong> for you.</p>
            <p>No more staring at a blank page wondering what to say.</p>
            <p>Just plug in your business details… and you're ready to go.</p>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="px-8 lg:px-40 py-40">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 mb-16">So… Who's This Book For?</h2>
        
        <div className="font-lato text-xl lg:text-2xl text-gray-700 space-y-8 leading-relaxed">
          <p>Let me be clear:</p>
          <p>The Small Business Playbook is NOT for everyone.</p>
          <p>It's not for people who are happy in their jobs and just want to "dabble" in business as a hobby.</p>
          <p>It's not for people looking for a magic button that prints money while they sleep.</p>
          <p>And it's definitely not for people who think they can read a book and become millionaires without doing any work.</p>
          <p>However…</p>
          <p>If you're someone who:</p>
          
          <ul className="space-y-4 list-disc list-inside">
            <li>Works a job but DREAMS of being your own boss</li>
            <li>Feels trapped making other people rich while you struggle</li>
            <li>Wants to start a business but doesn't know where to begin</li>
            <li>Is tired of feeling like you could be fired at any moment</li>
            <li>Actually wants to PUT IN THE WORK to build something real</li>
          </ul>
          
          <p>Then this book is for you.</p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 text-center mb-16">Don't Just Take My Word for It</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 shadow-lg">
            <blockquote className="font-lato text-lg text-gray-700 italic mb-4 leading-relaxed">
              "I bought this expecting another generic 'follow your dreams' book. Instead, I got actual, step-by-step instructions I could use. Started a phone accessories business in Abuja. Made my first N50,000 in profit within the first month."
            </blockquote>
            <p className="font-lato font-bold text-gray-900">— Emeka T., Abuja</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg">
            <blockquote className="font-lato text-lg text-gray-700 italic mb-4 leading-relaxed">
              "The part about pricing was a game-changer for me. I was undercharging and wondering why I wasn't making money. Raised my prices using the strategy in the book… and customers actually respected me MORE for it."
            </blockquote>
            <p className="font-lato font-bold text-gray-900">— Fatima L., Kano</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg">
            <blockquote className="font-lato text-lg text-gray-700 italic mb-4 leading-relaxed">
              "Honestly, I was skeptical. But the Business Analyzer Framework alone was worth 10x the price. Helped me avoid wasting time on a business idea that would've flopped. Pivoted to something better and it's already working."
            </blockquote>
            <p className="font-lato font-bold text-gray-900">— Tunde A., Ibadan</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg">
            <blockquote className="font-lato text-lg text-gray-700 italic mb-4 leading-relaxed">
              "I've been stuck at my job for 5 years. This book finally gave me the push—and the plan—I needed. I'm not rich yet, but I'm making progress for the first time in years."
            </blockquote>
            <p className="font-lato font-bold text-gray-900">— Blessing N., Port Harcourt</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg">
            <blockquote className="font-lato text-lg text-gray-700 italic mb-4 leading-relaxed">
              "The 4 psychological triggers? Mind. Blown. I used one of them in my small tailoring business and got 3 new customers in one week just from word of mouth."
            </blockquote>
            <p className="font-lato font-bold text-gray-900">— Ngozi I., Enugu</p>
          </div>
          
          <div className="bg-white p-8 shadow-lg">
            <blockquote className="font-lato text-lg text-gray-700 italic mb-4 leading-relaxed">
              "What I love most is that it doesn't sugarcoat things. It tells you what's hard, what to avoid, and what actually works. No fluff. Just real talk."
            </blockquote>
            <p className="font-lato font-bold text-gray-900">— Ahmed K., Lagos</p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-8 lg:px-40 py-40">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 text-center mb-8">
          N15,000
        </h2>
        
        <div className="font-lato text-xl text-gray-700 text-center max-w-2xl mx-auto space-y-8 leading-relaxed">
          <p>That's it.</p>
          <p>Less than what most people spend on data in a month.</p>
          <p>Less than one night out.</p>
          <p>Less than a pair of shoes.</p>
          <p>For a complete, step-by-step guide to starting and growing a profitable business.</p>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="flex justify-center mb-8">
            <Image 
              src="/guarantee-seal.png" 
              alt="100% Money-Back Guarantee"
              width={150}
              height={150}
            />
          </div>
          <h3 className="font-lato font-black text-3xl text-gray-900 mb-4">90-Day Money-Back Guarantee</h3>
          <p className="font-lato text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            You can buy The Small Business Playbook, read the ENTIRE thing, use the strategies, get value from it…
            And if—for any reason—you decide it wasn't worth it? Just send me an email within 90 days and I'll refund every kobo.
          </p>
          <p className="font-lato text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
            No questions asked.
          </p>
          <p className="font-lato text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
            No "but you have to prove you tried it" nonsense.
          </p>
          <p className="font-lato text-xl text-gray-700 max-w-2xl mx-auto mt-4 leading-relaxed">
            I'm putting my money where my mouth is.
          </p>
        </div>

        {/* First CTA Button */}
        <div className="text-center mt-16">
          <Link 
            href="https://selar.com/small-biz"
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-lato font-bold text-2xl px-16 py-6 transition-colors"
          >
            GET THE SMALL BUSINESS PLAYBOOK NOW - N15,000
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 text-center mb-16">
          A Few Final Questions (Because I Know You're Thinking Them)
        </h2>
        
        <div className="font-lato text-xl text-gray-700 space-y-12 max-w-4xl mx-auto leading-relaxed">
          <div>
            <h3 className="font-lato font-black text-2xl text-gray-900 mb-4">"Who are you and why should I trust you?"</h3>
            <p>Fair question.</p>
            <p>I'm someone who learned business the hard way—by failing, by studying, by testing, and by figuring out what actually works.</p>
            <p>I'm not a "guru" with a Lamborghini and a fake success story.</p>
            <p>I'm a regular person who was tired of being broke and decided to do something about it.</p>
            <p>And now I'm sharing what I learned so you don't have to waste years figuring it out yourself.</p>
          </div>
          
          <div>
            <h3 className="font-lato font-black text-2xl text-gray-900 mb-4">"Will this work in Nigeria / my city / my situation?"</h3>
            <p>Yes.</p>
            <p>The principles in this book are universal.</p>
            <p>Whether you're in Lagos, Abuja, Kano, or a small village, the fundamentals of business don't change.</p>
            <p>People buy. People sell. People solve problems.</p>
            <p>This book teaches you how to do it profitably.</p>
          </div>
          
          <div>
            <h3 className="font-lato font-black text-2xl text-gray-900 mb-4">"I don't have money to start a business. Will this still help me?"</h3>
            <p>Absolutely.</p>
            <p>In fact, one of the key lessons in the book is how to start a business with VERY little capital.</p>
            <p>You don't need N500,000 to start.</p>
            <p>You need the right knowledge and the right approach.</p>
            <p>This book gives you both.</p>
          </div>
          
          <div>
            <h3 className="font-lato font-black text-2xl text-gray-900 mb-4">"What if I'm not 'smart enough' or 'business-minded'?"</h3>
            <p>Listen:</p>
            <p>I'm not a genius.</p>
            <p>I didn't go to Harvard.</p>
            <p>I just figured out a process that works.</p>
            <p>And if I can do it? So can you.</p>
            <p>This book is written for regular people—not MBAs.</p>
          </div>
          
          <div>
            <h3 className="font-lato font-black text-2xl text-gray-900 mb-4">"Is there a physical copy?"</h3>
            <p>Not right now.</p>
            <p>This is a digital ebook (PDF) that you download instantly after purchase.</p>
            <p>You can read it on your phone, tablet, or computer.</p>
            <p>Or print it out if you prefer.</p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-8 lg:px-40 py-40">
        <div className="text-center">
          <h2 className="font-lato font-black text-4xl lg:text-5xl text-gray-900 mb-8">
            Okay, This Really Is the End
          </h2>
          
          <div className="font-lato text-xl text-gray-700 max-w-2xl mx-auto space-y-8 leading-relaxed">
            <p>Look.</p>
            <p>You have two choices right now:</p>
            
            <div className="text-left max-w-md mx-auto">
              <p className="font-lato font-bold text-lg mb-4"><strong>Choice #1:</strong> Close this page. Go back to your job. Keep telling yourself "someday I'll start a business." Keep waiting for the "perfect time." Keep hoping things will magically get better.</p>
              <p className="font-lato font-bold text-lg"><strong>Choice #2:</strong> Invest N15,000 in yourself. Get The Small Business Playbook. Read it. Apply it. Start building something that's YOURS. Something nobody can take away from you. Something that could finally set you free.</p>
            </div>
            
            <p>Which choice sounds better?</p>
            <p>If it's Choice #2…</p>
            <p>Click the button below and let's get started.</p>
          </div>

          <div className="mt-12">
            <Link 
              href="https://selar.com/small-biz"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-lato font-bold text-2xl px-16 py-6 transition-colors"
            >
              GET THE SMALL BUSINESS PLAYBOOK NOW - N15,000
            </Link>
          </div>

          <div className="font-lato text-xl text-gray-700 max-w-2xl mx-auto mt-16 space-y-8 leading-relaxed">
            <p>Remember: 90-day money-back guarantee. All the risk is on me. You have nothing to lose.</p>
            <p>See you on the inside.</p>
          </div>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="px-8 lg:px-40 py-40 bg-gray-50">
        <div className="font-lato text-xl text-gray-700 max-w-2xl mx-auto space-y-8 leading-relaxed">
          <p><em>P.S. — Still on the fence? Let me ask you this: How much longer are you willing to stay stuck? Another year? Five years? Ten? At some point, you have to decide that enough is enough. Today could be that day.</em></p>
          <p><em>P.P.S. — The 90-day guarantee means you literally have zero risk. Buy it, read it, use it. If it doesn't help you, get your money back. But I'm betting it will change everything for you. Just like it did for me.</em></p>
        </div>
      </section>
    </main>
  );
}