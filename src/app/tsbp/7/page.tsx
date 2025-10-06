import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    return (
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="px-8 py-40 lg:px-32">
          <h1 className="font-montserrat text-6xl font-bold text-center tracking-tight lg:text-8xl">
            PICTURE THIS:
          </h1>
          <h2 className="font-bold italic text-3xl lg:text-4xl text-center text-gray-900 leading-tight mt-6">
        It&apos;s Monday morning.
        </h2>
        
          <p className="mt-12 text-2xl text-center leading-relaxed text-gray-800">
            {/* It&apos;s Monday morning. <br /><br /> */}
  
            Your alarm goes off at 6 AM.<br /><br />
  
            You drag yourself out of bed, shuffle to the bathroom, and stare at your reflection in the mirror.<br /><br />
  
            And you think to yourself:<br /><br />
  
            &quot;I&apos;m doing this… <em>*again*</em>?&quot;<br /><br />
  
            Another week of making your boss rich.<br /><br />
  
            Another week of sitting in traffic for a job that could fire you on a whim.<br /><br />
  
            Another week of watching the owners drive luxury cars while you&apos;re wondering if you can afford that N3,000 lunch or if you should just skip it and save the money.<br /><br />
  
            You get dressed… commute to work… and spend 8-10 hours (let&apos;s be honest, probably more) building someone else&apos;s dream.<br /><br />
  
            And at the end of the month?<br /><br />
  
            You get a paycheck that barely covers your rent and expenses.<br /><br />
  
            Maybe—<em>*maybe*</em>—you get a 5% raise this year if you&apos;re lucky.<br /><br />
  
            (Meanwhile, your boss just bought a second property. But I digress.)<br /><br />
  
            And the WORST part?<br /><br />
  
            Deep down, you know the truth:<br /><br />
  
            <strong>You could be fired tomorrow. For any reason. Or no reason at all.</strong><br /><br />
  
            All that &quot;job security&quot; you&apos;ve been clinging to?<br /><br />
  
            It&apos;s an illusion.<br /><br />
  
            One bad quarter… one restructuring… one &quot;cost-cutting measure&quot;… and you&apos;re out.<br /><br />
  
            With nothing to show for all those years except a severance check (if you&apos;re lucky) and a LinkedIn update about &quot;seeking new opportunities.&quot;<br /><br />
  
            😱<br /><br />
  
            Sound familiar?<br /><br />
  
            Well, if this scene made your stomach drop… I have good news for you.<br /><br />
  
            <span className="text-xs">(Phew, nearly went full &quot;doom and gloom&quot; mode there without offering a solution.)</span><br /><br />
  
            Because on this page, I&apos;m going to show you how you can escape the job trap forever…<br /><br />
  
            … by revealing the step-by-step playbook that transforms regular people stuck in dead-end jobs into profitable business owners.<br /><br />
  
            Sound good?<br /><br />
  
            Well, here&apos;s the deal:<br /><br />
  
            I&apos;ve created an ebook called…
          </p>
        </section>
  
        {/* Book Title Section */}
        <section className="px-8 py-40 lg:px-32">
          <hr className="border-gray-300" />
          <h2 className="mt-20 font-montserrat text-5xl font-black lg:text-7xl">
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
          <hr className="mt-20 border-gray-300" />
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            And if I lost everything tomorrow and had to start over from scratch…<br /><br />
  
            This is the FIRST thing I would study to get back on my feet (for reasons you will see shortly).<br /><br />
  
            And I am not alone in that sentiment.<br /><br />
  
            Cue inappropriately-placed teaser testimonial! (drumroll)
          </p>
  
          {/* Testimonial */}
          <blockquote className="mt-20 border-l-4 border-red-600 pl-8">
            <p className="font-montserrat text-3xl font-black text-red-600 lg:text-4xl">
              &quot;I&apos;ve been working the same job for 7 years, always telling myself &apos;one day&apos; I&apos;d start something. After reading The Small Business Playbook, I finally did it. Started a small catering business from my kitchen. Three months in, I&apos;m making more on weekends than I do all week at my 9-to-5.&quot;
            </p>
            <footer className="mt-8 text-xl font-semibold text-gray-800">— Chidinma O., Lagos</footer>
          </blockquote>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Neat, hey? But hang on. Before I tell you what The Small Business Playbook is about, a word of warning:<br /><br />
  
            <div className="space-y-4">
            - It is NOT a get-rich-quick scheme. (In fact, I&apos;m going to tell you exactly why those don&apos;t work and what to do instead.)<br />
            - Also, it is not filled with complicated business jargon or MBA nonsense. (This is written for regular people who just want to make money, not impress investors at cocktail parties.)<br />
            - And WORST of all… I&apos;m going to tell you some hard truths about starting a business that most &quot;gurus&quot; won&apos;t tell you because it doesn&apos;t sound sexy.<br /><br />
  </div>
            All right. That&apos;s the bad news.<br /><br />
  
            So… what is this ebook about?<br /><br />
  
            And why should you care?<br /><br />
  
            Well, as the name hints at, The Small Business Playbook is a guide on…<br /><br />
  
            … how to actually start and grow a profitable small business.<br /><br />
  
            &quot;Huh?&quot; you say skeptically. &quot;Another business book? I&apos;ve seen a thousand of those. They&apos;re all the same!&quot;<br /><br />
  
            Yeah… right.<br /><br />
  
            Everyone thinks they&apos;ve &quot;seen it all&quot; when it comes to business advice.<br /><br />
  
            But, listen:<br /><br />
  
            If you&apos;re STILL working a job you hate, still dreaming about &quot;someday&quot; starting your own thing, still making excuses about why &quot;now isn&apos;t the right time&quot;…<br /><br />
  
            <strong>It&apos;s because you&apos;ve been fed the wrong information.</strong><br /><br />
  
            Seriously. If you haven&apos;t started yet…<br /><br />
  
            It means… you don&apos;t actually know how to come up with a good business idea.<br /><br />
  
            It means… you don&apos;t know how to validate if your idea will actually make money (before you waste months building something nobody wants).<br /><br />
  
            It means… you&apos;re terrified of losing money, failing publicly, and proving the doubters right.<br /><br />
  
            And it means… you might think starting a business is &quot;risky&quot;—when in reality, keeping that job is FAR riskier.<br /><br />
  
            So, forget buying yet another &quot;passive income&quot; course or &quot;10X your life&quot; program.<br /><br />
  
            If you still feel trapped in your job, even after reading business books and watching YouTube videos, <strong>fix the ROOT PROBLEM: you don&apos;t have a real, actionable plan.</strong><br /><br />
  
            And, admit it: right now, you don&apos;t actually have a &quot;plan&quot; in place. Right?<br /><br />
  
            Well, let me flex a little and show my mind-reading skills…<br /><br />
  
            … by talking about what I think your current situation is like.<br /><br />
  
            (This is an aggregate of most people stuck in jobs who want to start businesses, so maybe not every point is you… but I reckon most will be.)<br /><br />
  
            You tell me how this sounds, okay?
          </p>
        </section>
  
        {/* "So You Want to Start a Business" Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            So You Want to Start a Business
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            If you&apos;re like most people, here&apos;s what you do…<br /><br />
  
            You start with those things everyone says you &quot;should&quot; do, like…<br /><br />
  
            <div className="space-y-4">
            - <strong>Ask your friends and family for business ideas.</strong> That&apos;s what people do, right? Except… your uncle suggests you open a barbershop (even though you hate cutting hair), your friend says &quot;just sell stuff online,&quot; and your mom tells you to &quot;get a real job.&quot; So much for that suggestion.<br /><br />
  
            - <strong>Next, you try to come up with &quot;the perfect idea.&quot;</strong> But… nothing comes. Or worse, you have 17 half-baked ideas and no clue which one is actually worth pursuing. You&apos;re paralyzed by choice.<br /><br />
  
            - <strong>Okay… what about just starting something and seeing what happens?</strong> Everyone says &quot;just start,&quot; right? But… you don&apos;t want to waste money on an idea that flops. And you don&apos;t know how to test if people will actually buy. It&apos;s just a bunch of guessing.<br /><br />
  
            - <strong>You&apos;re getting desperate.</strong> You Google &quot;best business ideas&quot; and find… listicles. &quot;Top 50 businesses to start in 2024!&quot; Dropshipping, affiliate marketing, print-on-demand… all these things you&apos;ve heard about but have no idea how to actually DO.<br /><br /> 
            
            </div>
  
            Sigh. Somehow, it&apos;s not as easy as that YouTube video made it look.<br /><br />
  
            And that&apos;s not to mention…
          </p>
  
          <h3 className="mt-20 font-montserrat text-3xl font-black lg:text-4xl">
            Actually running the business…
          </h3>
          <p className="mt-8 text-2xl leading-relaxed text-gray-800">
            You have a vague idea that you&apos;re meant to do things like &quot;marketing&quot;, &quot;customer service&quot;, &quot;pricing strategy&quot; and so on.<br /><br />
  
            But when you start thinking about it, you realize you don&apos;t actually know how any of this works.<br /><br />
  
            So you end up feeling overwhelmed and doing… nothing.<br /><br />
  
            Oh, and you&apos;ve heard people say you&apos;re supposed to &quot;find your niche&quot;…<br /><br />
  
            … but you have no idea how to do that.<br /><br />
  
            And let&apos;s be honest:<br /><br />
  
            You don&apos;t WANT to spend six months researching and planning!!!<br /><br />
  
            Really? All you want is something simple you can actually START, without needing a business degree or N500,000 in capital.<br /><br />
  
            And then there&apos;s the biggest fear of all…
          </p>
  
          <h3 className="mt-20 font-montserrat text-3xl font-black lg:text-4xl">
            &quot;What if I fail?&quot;
          </h3>
          <p className="mt-8 text-2xl leading-relaxed text-gray-800">
            You stare at your savings account (or lack thereof) and wonder if you&apos;re crazy for even considering this…<br /><br />
  
            So you just stay at your job! 🤷♂️<br /><br />
  
            You keep telling yourself &quot;maybe next year&quot; or &quot;when I have more money saved up&quot; or &quot;when the timing is better.&quot;<br /><br />
  
            Never sure if you actually have what it takes… or when the &quot;perfect moment&quot; will arrive.<br /><br />
  
            And when you DO think about quitting your job…<br /><br />
  
            You&apos;re terrified your boss will be right about you.<br /><br />
  
            Because you didn&apos;t actually learn HOW to build something sustainable.<br /><br />
  
            No wonder you feel stuck.<br /><br />
  
            And no wonder every time you think about starting a business…<br /><br />
  
            … you end up scrolling LinkedIn for job postings instead.
          </p>
        </section>
  
        {/* Bad Advice Section */}
        <section className="px-8 py-40 lg:px-32">
          <p className="text-2xl leading-relaxed text-gray-800">
            Don&apos;t worry though! There are plenty of &apos;business advice&apos; videos online, full of HELPFUL (🙄) tips like:
          </p>
  
          <ul className="mt-12 space-y-8 text-2xl leading-relaxed text-gray-800">
            <li>- <strong>You need PASSION!</strong> Follow your passion and the money will follow! (What? You don&apos;t have a burning passion for anything in particular? Well… that&apos;s YOUR problem!)</li>
            <li>- <strong>Just start! Action beats planning!</strong> What do you mean you don&apos;t know what to do? JUST DO SOMETHING! Fail fast! Fail forward! Fail… everywhere!</li>
            <li>- <strong>Build a personal brand.</strong> Post on LinkedIn every day. Make TikToks. Be authentic! (Oh, you&apos;re an introvert? Too bad. Dance for the algorithm!)</li>
            <li>- <strong>Study successful entrepreneurs.</strong> Read about Elon Musk, Steve Jobs, and Jeff Bezos. (Oh wait, they all had millions in funding and connections? And you have… N50,000 and a Nokia? Well… just work harder!)</li>
            <li>- <strong>And yeah, just basically: hustle, grind, sacrifice sleep, monetize your hobbies, build an email list, create a sales funnel, run Facebook ads, optimize your conversion rate, A/B test everything, and don&apos;t forget to manifest abundance while you&apos;re at it!</strong></li>
          </ul>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            <em>*Oh hey I was gonna explain HOW to actually do all this stuff but I ran out of time in my video so just figure it out yourself or something lol kthxbye*</em><br /><br />
  
            😑<br /><br />
  
            Yeah… very helpful.<br /><br />
  
            Top job, guys!<br /><br />
  
            Way to make it easy!<br /><br />
  
            Well, dear reader—fear not.<br /><br />
  
            That&apos;s where MY ebook comes in.
          </p>
        </section>
  
        {/* My Story Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            Here&apos;s My Story (And Why I Had No Choice But to Figure This Out)
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            When I graduated in 2019, I did what everyone told me to do:<br /><br />
  
            I learned a skill. I got good at it. I prepared for job interviews.<br /><br />
  
            Specifically, I learned to code.<br /><br />
  
            And I got GOOD at it.<br /><br />
  
            Good enough to land interviews for foreign coding jobs… jobs that paid $100,000 per year.<br /><br />
  
            Let me repeat that: <strong>One hundred thousand US dollars.</strong><br /><br />
  
            In Nigeria, that&apos;s life-changing money.<br /><br />
  
            That&apos;s &quot;buy a house, take care of your family, never worry about money again&quot; type of money.<br /><br />
  
            So when I got the interview… I was ready.<br /><br />
  
            I had studied. I had practiced. I knew my stuff.<br /><br />
  
            There was just one problem:<br /><br />
  
            <strong>I was broke.</strong><br /><br />
  
            Not &quot;oh I&apos;m a little short this month&quot; broke.<br /><br />
  
            I mean &quot;I have N100 left in my account&quot; broke.<br /><br />
  
            But I needed data for the Zoom interview.<br /><br />
  
            So I took that last N100… bought the smallest data bundle I could find… and prayed it would be enough.<br /><br />
  
            The interview started.<br /><br />
  
            And it was going PERFECTLY.<br /><br />
  
            I was answering every question. Nailing every explanation.<br /><br />
  
            The interviewers were impressed—I could tell.<br /><br />
  
            Then came the final part:<br /><br />
  
            &quot;Okay, great! Now if you could just share your screen, we&apos;d like to give you a quick coding test. Should only take 10 minutes.&quot;<br /><br />
  
            Ten minutes.<br /><br />
  
            I had already written the solution in my head. It was THAT simple.<br /><br />
  
            This job was mine.<br /><br />
  
            I clicked &quot;Share Screen&quot;…<br /><br />
  
            And then—<br /><br />
  
            <strong>PING!</strong><br /><br />
  
            <em>*&quot;Dear customer, your data has been—&quot;*</em><br /><br />
  
            I didn&apos;t even finish reading the message before the Zoom call disconnected.<br /><br />
  
            Gone.<br /><br />
  
            My heart sank.<br /><br />
  
            I scrambled. Ran to my neighbor&apos;s house. Begged him to turn on his hotspot.<br /><br />
  
            By the time I got back online?<br /><br />
  
            The interviewers were gone.<br /><br />
  
            I sent emails. Dozens of them.<br /><br />
  
            Apologizing. Explaining. Begging for another chance.<br /><br />
  
            <strong>I never heard back.</strong><br /><br />
  
            That $100,000 job?<br /><br />
  
            Slipped through my fingers because I couldn&apos;t afford N500 worth of data.<br /><br />
  
            And that&apos;s when I decided:<br /><br />
  
            <strong>Enough.</strong><br /><br />
  
            I was DONE relying on interviews.<br /><br />
  
            DONE hoping some company would &quot;give me a chance.&quot;<br /><br />
  
            DONE being one missed Zoom call away from financial ruin.<br /><br />
  
            I decided I was going to learn how to make money on my own terms.<br /><br />
  
            So I threw myself into the world of business.<br /><br />
  
            I read every business book I could get my hands on.<br /><br />
  
            I starved—literally skipped meals—so I could save money to buy business courses.<br /><br />
  
            I watched thousands of hours of videos from top entrepreneurs around the world.<br /><br />
  
            I studied marketing. Sales. Customer psychology. Pricing strategies.<br /><br />
  
            And slowly… I figured it out.<br /><br />
  
            I learned what actually works.<br /><br />
  
            Not theory. Not fluff.<br /><br />
  
            <strong>Real, practical strategies for starting and growing a profitable business—even if you&apos;re broke, even if you have no experience, and even if you have no idea where to start.</strong><br /><br />
  
            And that&apos;s what I&apos;ve packed into The Small Business Playbook.<br /><br />
  
            Everything I wish I had known when I was staring at that disconnected Zoom call, wondering if I&apos;d ever escape the cycle of job applications and financial insecurity.<br /><br />
  
            This isn&apos;t just a book.<br /><br />
  
            It&apos;s the result of years of painful trial and error… distilled into a step-by-step guide you can actually use.
          </p>
        </section>
  
        {/* What's Inside Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            So… What&apos;s Inside The Small Business Playbook?
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Well, rather than throw in a bunch of hype-filled bullets… I&apos;m just going to TELL you what&apos;s in the book. Straight up.<br /><br />
  
            Here&apos;s what you&apos;ll discover:
          </p>
  
          <div className="mt-12 grid gap-12 text-2xl leading-relaxed text-gray-800">
            <p><strong>Why asking your friends and family what business you should start is one of the WORST things you can do</strong> (and what to do instead)</p>
            
            <p><strong>How to effortlessly generate crazily good business ideas</strong> and know instantly which of them can actually make you rich (most people get this backwards and waste months on ideas that were doomed from the start)</p>
            
            <p><strong>The sure-fire foundations of any business:</strong> including the &quot;make things less awful&quot; technique and the &quot;make things more awesome&quot; technique (these two simple frameworks will give you more business ideas than you know what to do with)</p>
            
            <p><strong>The Deadly Advertising Sins That Keep You Broke</strong> — the one thing you should NEVER do when advertising your business (do this and you&apos;ll burn through money faster than a politician at a buffet)</p>
            
            <p>And there&apos;s more…</p>
            
            <p><strong>Why identifying the people you want to advertise to is very important</strong> — and why most business gurus have this information completely wrong (follow their advice and you&apos;ll be shouting into the void while your competitors steal your customers)</p>
            
            <p><strong>The 8 commandments of advertising for small businesses</strong> (if you get this wrong, people will never buy from you. Plus, you&apos;ll LOSE money. But get it right? You&apos;ll have customers lining up.)</p>
            
            <p><strong>The Business Analyzer Framework for validating business ideas</strong> you&apos;ll discover when you read this book (don&apos;t use this, and you&apos;ll likely pick the LEAST profitable of all the business ideas you generate)</p>
            
            <p><strong>The reason why your products should be affordable, not cheap</strong> (and how you can do it without losing money or looking desperate)</p>
            
            <p>That&apos;s not all…</p>
            
            <p><strong>How to price your products for maximum profitability WITHOUT losing customers</strong> (hint: it&apos;s not about being the cheapest option)</p>
            
            <p><strong>What NEVER to do when starting out</strong> (unless you want to go broke faster than you can say &quot;entrepreneurship&quot;)</p>
            
            <p><strong>What you should do to avoid getting &quot;eaten up&quot; by bigger competitors</strong> (because let&apos;s face it—they have more money, more reach, and more resources than you. But that doesn&apos;t mean you can&apos;t win.)</p>
            
            <p><strong>The sneaky &quot;David and Goliath&quot; trick you can use to STEAL customers from your competitors</strong> (even if they&apos;re ten times your size)</p>
            
            <p>And I&apos;m just starting…</p>
            
            <p><strong>The truth about being #1 in your business category</strong> (and how to achieve it without spending a fortune on marketing)</p>
            
            <p><strong>What NEVER to do when running your business</strong> (Do this, and your customers will forget and dump you fast fast!)</p>
            
            <p><strong>Do you know the 4 psychological triggers in people&apos;s minds that make them buy?</strong> (Use any of them and you can almost always never run out of new customers)</p>
            
            <p><strong>The sneaky tricks to get your customers to promote your business everywhere they go like MTN</strong> — without paying them a kobo (this is the closest thing to &quot;free advertising&quot; you&apos;ll ever find)</p>
            
            <p>I&apos;m not even finished…</p>
            
            <p><strong>The reasons why word of mouth is very important for the survival and profitability of your business</strong> (ignore this and you&apos;ll be stuck paying for ads forever)</p>
            
            <p><strong>Do you know people trust what other people say about your business more than what YOU say?</strong> (You can use this to your advantage. See how when you get the book.)</p>
            
            <p><strong>The sneaky little ways you can use low prices to attract customers WITHOUT losing profits</strong> (yes, it&apos;s possible. And no, it doesn&apos;t involve cutting corners.)</p>
            
            <p><strong>What you should avoid when you start making money in your business</strong> (this is where most people sabotage themselves just as things start working)</p>
            
            <p>And there&apos;s still more…</p>
            
            <p><strong>The psychological reason why people buy</strong> — and how you can use it to INCREASE your prices without losing customers (In fact, follow it, and they&apos;ll still snub your competitors to buy from you!)</p>
            
            <p><strong>What to NEVER do when starting out</strong> (Do this, and your business will surely crash before it even gets off the ground)</p>
            
            <p><strong>You think starting a business is risky, right? Wrong!</strong> We&apos;ll explain why having a job is much, much more risky (and why the &quot;safe&quot; option is actually the most dangerous)</p>
            
            <p><strong>The steps you can take to prevent your business from failing in its first 6 months</strong> (because most businesses DO fail in that time—but yours doesn&apos;t have to)</p>
            
            <p>And that&apos;s still not all…</p>
            
            <p><strong>The reasons why people are NOT looking for low prices</strong> (and what they want instead—nail this and you&apos;ll never have to compete on price again)</p>
            
            <p><strong>And many, Many, MAny, MANy, MANY more!</strong></p>
          </div>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            You see, you&apos;re getting a massive ocean of valuable, quality information.<br /><br />
  
            And I know that by the time you finish reading the book, you&apos;ll have all the information you&apos;ll ever need to start and grow a profitable business and make over 3X your current income.<br /><br />
  
            But that&apos;s not all you&apos;re getting.<br /><br />
  
            If you order this book today, I&apos;m going to give you <strong>TWO juicy gifts FREE!</strong>
          </p>
        </section>
  
        {/* Gifts Section */}
        <section className="px-8 py-40 lg:px-32">
          <h3 className="font-montserrat text-3xl font-black text-red-600 lg:text-4xl">
            GIFT #1: The 6 Kinds of Products People Love to Buy
          </h3>
          <p className="mt-8 text-2xl leading-relaxed text-gray-800">
            The fact is, it doesn&apos;t matter the condition of the economy. <br /><br />
  
            It doesn&apos;t matter whether the country is hard…<br /><br />
  
            These 6 categories of products will STILL sell like mad if you do it right.<br /><br />
  
            (And no, it&apos;s not food, it&apos;s not clothes, and it&apos;s not water… eeew!)<br /><br />
  
            Don&apos;t worry, you&apos;ll discover them, know which of them fits you, and how you can get started when you grab your copy of this book.<br /><br />
  
            And that brings us to…
          </p>
  
          <h3 className="mt-20 font-montserrat text-3xl font-black text-red-600 lg:text-4xl">
            GIFT #2: The Advertising Templates Toolkit
          </h3>
          <p className="mt-8 text-2xl leading-relaxed text-gray-800">
            Here, you&apos;ll discover different kinds of advertising templates you can use to advertise your products and services. <br /><br />
  
            Remember the 8 commandments of advertising I said you&apos;ll get when you order this book? <br /><br />
  
            This free gift makes it <strong>eeaaasy</strong> for you.<br /><br />
  
            No more staring at a blank page wondering what to say.<br /><br />
  
            Just plug in your business details… and you&apos;re ready to go.
          </p>
        </section>
  
        {/* Who It's For Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            So… Who&apos;s This Book For?
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Let me be clear:<br /><br />
  
            The Small Business Playbook is NOT for everyone.<br /><br />
  
            It&apos;s not for people who are happy in their jobs and just want to &quot;dabble&quot; in business as a hobby.<br /><br />
  
            It&apos;s not for people looking for a magic button that prints money while they sleep.<br /><br />
  
            And it&apos;s definitely not for people who think they can read a book and become millionaires without doing any work.<br /><br />
  
            However…<br /><br />
  
            If you&apos;re someone who:<br /><br />
  
            <div className="space-y-4">
            - Works a job but DREAMS of being your own boss<br />
            - Feels trapped making other people rich while you struggle<br />
            - Wants to start a business but doesn&apos;t know where to begin<br />
            - Is tired of feeling like you could be fired at any moment<br />
            - Actually wants to PUT IN THE WORK to build something real<br /><br />
  </div>
            Then this book is for you.
          </p>
        </section>
  
        {/* Testimonials Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            Don&apos;t Just Take My Word for It
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Here&apos;s what people are saying about The Small Business Playbook:
          </p>
  
          <div className="mt-20 space-y-20">
            <blockquote className="border-l-4 border-gray-400 pl-8">
              <p className="text-2xl leading-relaxed text-gray-800">
                &quot;I bought this expecting another generic &apos;follow your dreams&apos; book. Instead, I got actual, step-by-step instructions I could use. Started a phone accessories business in Abuja. Made my first N50,000 in profit within the first month.&quot;
              </p>
              <footer className="mt-6 text-xl font-semibold text-gray-800">— Emeka T., Abuja</footer>
            </blockquote>
  
            <blockquote className="border-l-4 border-gray-400 pl-8">
              <p className="text-2xl leading-relaxed text-gray-800">
                &quot;The part about pricing was a game-changer for me. I was undercharging and wondering why I wasn&apos;t making money. Raised my prices using the strategy in the book… and customers actually respected me MORE for it.&quot;
              </p>
              <footer className="mt-6 text-xl font-semibold text-gray-800">— Fatima L., Kano</footer>
            </blockquote>
  
            <blockquote className="border-l-4 border-gray-400 pl-8">
              <p className="text-2xl leading-relaxed text-gray-800">
                &quot;Honestly, I was skeptical. But the Business Analyzer Framework alone was worth 10x the price. Helped me avoid wasting time on a business idea that would&apos;ve flopped. Pivoted to something better and it&apos;s already working.&quot;
              </p>
              <footer className="mt-6 text-xl font-semibold text-gray-800">— Tunde A., Ibadan</footer>
            </blockquote>
  
            <blockquote className="border-l-4 border-gray-400 pl-8">
              <p className="text-2xl leading-relaxed text-gray-800">
                &quot;I&apos;ve been stuck at my job for 5 years. This book finally gave me the push—and the plan—I needed. I&apos;m not rich yet, but I&apos;m making progress for the first time in years.&quot;
              </p>
              <footer className="mt-6 text-xl font-semibold text-gray-800">— Blessing N., Port Harcourt</footer>
            </blockquote>
  
            <blockquote className="border-l-4 border-gray-400 pl-8">
              <p className="text-2xl leading-relaxed text-gray-800">
                &quot;The 4 psychological triggers? Mind. Blown. I used one of them in my small tailoring business and got 3 new customers in one week just from word of mouth.&quot;
              </p>
              <footer className="mt-6 text-xl font-semibold text-gray-800">— Ngozi I., Enugu</footer>
            </blockquote>
  
            <blockquote className="border-l-4 border-gray-400 pl-8">
              <p className="text-2xl leading-relaxed text-gray-800">
                &quot;What I love most is that it doesn&apos;t sugarcoat things. It tells you what&apos;s hard, what to avoid, and what actually works. No fluff. Just real talk.&quot;
              </p>
              <footer className="mt-6 text-xl font-semibold text-gray-800">— Ahmed K., Lagos</footer>
            </blockquote>
          </div>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Real people. Real results.<br /><br />
  
            (And no, I didn&apos;t pay them to say this.)
          </p>
        </section>
  
        {/* Pricing Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            Okay, Yeah, But How Much Does It Cost?
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Here&apos;s the deal:<br /><br />
  
            I could have priced this at N50,000.<br /><br />
  
            Because honestly? If this book helps you start a business that makes even N100,000 extra per month, that&apos;s a 2X return in your first month alone.<br /><br />
  
            And if it helps you LEAVE your job and build a business that replaces your income?<br /><br />
  
            That&apos;s priceless.<br /><br />
  
            But I didn&apos;t price it at N50,000.<br /><br />
  
            Because I remember what it was like to have N100 in my account.<br /><br />
  
            I remember what it&apos;s like to be broke, desperate, and just wanting a REAL chance.<br /><br />
  
            So I&apos;m pricing The Small Business Playbook at just:
          </p>
  
          <h3 className="mt-20 font-montserrat text-5xl font-black text-red-600 lg:text-7xl">
            N7999
          </h3>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            That&apos;s it.<br /><br />
  
            Less than what most people spend on data in a month.<br /><br />
  
            Less than one night out.<br /><br />
  
            Less than a pair of shoes.<br /><br />
  
            For a complete, step-by-step guide to starting and growing a profitable business.
          </p>
        </section>
  
        {/* Guarantee Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            But Wait—Here&apos;s the Part Where I Take ALL the Risk
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            I know you might be thinking:<br /><br />
  
            <em>*&quot;Okay, but what if I buy this and it doesn&apos;t work for me?&quot;*</em><br /><br />
  
            Fair question.<br /><br />
  
            So here&apos;s what I&apos;m going to do:<br /><br />
  
            <strong>I&apos;m giving you a 90-Day Money-Back Guarantee.</strong><br /><br />
  
            That&apos;s right.<br /><br />

            <div className="flex justify-center mb-8">
            <Image 
              src="/guarantee-seal.png" 
              alt="100% Money-Back Guarantee"
              width={150}
              height={150}
            />
          </div>
  
            You can buy The Small Business Playbook, read the ENTIRE thing, use the strategies, get value from it…<br /><br />
  
            And if—for any reason—you decide it wasn&apos;t worth it?<br /><br />
  
            Just send me an email within 90 days and I&apos;ll refund every kobo.<br /><br />
  
            No questions asked.<br /><br />
  
            No &quot;but you have to prove you tried it&quot; nonsense.<br /><br />
  
            I&apos;m putting my money where my mouth is.<br /><br />
  
            Now, I&apos;ll be honest:<br /><br />
  
            This means you COULD read the whole book, benefit from it, and still ask for a refund.<br /><br />
  
            I&apos;m trusting that you&apos;re an honest person who won&apos;t try to rip me off.<br /><br />
  
            But here&apos;s why I&apos;m okay with that risk:<br /><br />
  
            Because I KNOW this book works.<br /><br />
  
            I know that if you actually read it and apply it, you&apos;ll make FAR more than N7999.<br /><br />
  
            So I&apos;m taking all the risk.<br /><br />
  
            You have nothing to lose.<br /><br />
  
            And everything to gain.
          </p>
        </section>
  
        {/* CTA Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            How to Get Your Copy Right Now
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Okay, if you&apos;ve read this far, you already know if this is for you or not.<br /><br />
  
            So here&apos;s how to get started:<br /><br />
  
            <strong>Step 1:</strong> Click the big button below<br /><br />
  
            <strong>Step 2:</strong> You&apos;ll be taken to Selar (a secure payment platform used by thousands of Nigerians)<br /><br />
  
            <strong>Step 3:</strong> Complete your payment<br /><br />
  
            <strong>Step 4:</strong> You&apos;ll IMMEDIATELY get access to download the ebook as a PDF<br /><br />
  
            No waiting. No shipping. No hassle.<br /><br />
  
            Instant access.<br /><br />
  
            You could be reading this book in the next 5 minutes.
          </p>
  
          {/* CTA Button */}
          <div className="mt-20">
            <Link 
              href="https://selar.com/small-biz"
              className="inline-block bg-red-600 px-16 py-6 text-center font-montserrat text-2xl font-black text-white transition-colors hover:bg-red-700"
            >
              GET THE SMALL BUSINESS PLAYBOOK NOW - N7999
            </Link>
          </div>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Once you purchase, Selar will take you to a secure download page with your unique download link.<br /><br />
  
            You&apos;ll get instant access to the ebook PDF immediately after payment.<br /><br />
  
            Simple. Fast. Done.
          </p>
        </section>
  
        {/* FAQ Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            A Few Final Questions (Because I Know You&apos;re Thinking Them)
          </h2>
  
          <div className="mt-12 space-y-20">
            <div>
              <h3 className="font-montserrat text-3xl font-black lg:text-4xl">
                &quot;Who are you and why should I trust you?&quot;
              </h3>
              <p className="mt-6 text-2xl leading-relaxed text-gray-800">
                Fair question.<br /><br />
  
                I&apos;m someone who learned business the hard way—by failing, by studying, by testing, and by figuring out what actually works.<br /><br />
  
                I&apos;m not a &quot;guru&quot; with a Lamborghini and a fake success story.<br /><br />
  
                I&apos;m a regular person who was tired of being broke and decided to do something about it.<br /><br />
  
                And now I&apos;m sharing what I learned so you don&apos;t have to waste years figuring it out yourself.
              </p>
            </div>
  
            <div>
              <h3 className="font-montserrat text-3xl font-black lg:text-4xl">
                &quot;Will this work in Nigeria / my city / my situation?&quot;
              </h3>
              <p className="mt-6 text-2xl leading-relaxed text-gray-800">
                Yes.<br /><br />
  
                The principles in this book are universal.<br /><br />
  
                Whether you&apos;re in Lagos, Abuja, Kano, or a small village, the fundamentals of business don&apos;t change.<br /><br />
  
                People buy. People sell. People solve problems.<br /><br />
  
                This book teaches you how to do it profitably.
              </p>
            </div>
  
            <div>
              <h3 className="font-montserrat text-3xl font-black lg:text-4xl">
                &quot;I don&apos;t have money to start a business. Will this still help me?&quot;
              </h3>
              <p className="mt-6 text-2xl leading-relaxed text-gray-800">
                Absolutely.<br /><br />
  
                In fact, one of the key lessons in the book is how to start a business with VERY little capital.<br /><br />
  
                You don&apos;t need N500,000 to start.<br /><br />
  
                You need the right knowledge and the right approach.<br /><br />
  
                This book gives you both.
              </p>
            </div>
  
            <div>
              <h3 className="font-montserrat text-3xl font-black lg:text-4xl">
                &quot;What if I&apos;m not &apos;smart enough&apos; or &apos;business-minded&apos;?&quot;
              </h3>
              <p className="mt-6 text-2xl leading-relaxed text-gray-800">
                Listen:<br /><br />
  
                I&apos;m not a genius.<br /><br />
  
                I didn&apos;t go to Harvard.<br /><br />
  
                I just figured out a process that works.<br /><br />
  
                And if I can do it? So can you.<br /><br />
  
                This book is written for regular people—not MBAs.
              </p>
            </div>
  
            <div>
              <h3 className="font-montserrat text-3xl font-black lg:text-4xl">
                &quot;Is there a physical copy?&quot;
              </h3>
              <p className="mt-6 text-2xl leading-relaxed text-gray-800">
                Not right now.<br /><br />
  
                This is a digital ebook (PDF) that you download instantly after purchase.<br /><br />
  
                You can read it on your phone, tablet, or computer.<br /><br />
  
                Or print it out if you prefer.
              </p>
            </div>
          </div>
        </section>
  
        {/* Final CTA Section */}
        <section className="px-8 py-40 lg:px-32">
          <h2 className="font-montserrat text-4xl font-black lg:text-6xl">
            Okay, This Really Is the End
          </h2>
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Look.<br /><br />
  
            You have two choices right now:<br /><br />
  
            <strong>Choice #1:</strong> Close this page. Go back to your job. Keep telling yourself &quot;someday I&apos;ll start a business.&quot; Keep waiting for the &quot;perfect time.&quot; Keep hoping things will magically get better.<br /><br />
  
            <strong>Choice #2:</strong> Invest N7999 in yourself. Get The Small Business Playbook. Read it. Apply it. Start building something that&apos;s YOURS. Something nobody can take away from you. Something that could finally set you free.<br /><br />
  
            Which choice sounds better?<br /><br />
  
            If it&apos;s Choice #2…<br /><br />
  
            Click the button below and let&apos;s get started.
          </p>
  
          {/* Final CTA Button */}
          <div className="mt-20">
          <Link 
              href="https://selar.com/small-biz"
              className="inline-block bg-red-600 px-16 py-6 text-center font-montserrat text-2xl font-black text-white transition-colors hover:bg-red-700"
            >
              GET THE SMALL BUSINESS PLAYBOOK NOW - N7999
            </Link>
          </div>
  
          <p className="mt-12 text-2xl leading-relaxed text-gray-800">
            Remember: 90-day money-back guarantee. All the risk is on me. You have nothing to lose.<br /><br />
  
            See you on the inside.
          </p>
  
          {/* P.S. Section */}
          <div className="mt-20 border-t border-gray-300 pt-20">
            <p className="text-2xl leading-relaxed text-gray-800">
              <em>
                P.S. — Still on the fence? Let me ask you this: How much longer are you willing to stay stuck? Another year? Five years? Ten? At some point, you have to decide that enough is enough. Today could be that day.<br /><br />
  
                P.P.S. — The 90-day guarantee means you literally have zero risk. Buy it, read it, use it. If it doesn&apos;t help you, get your money back. But I&apos;m betting it will change everything for you. Just like it did for me.
              </em>
            </p>
          </div>
        </section>
      </main>
    );
  }