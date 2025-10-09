import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="px-6 py-16 lg:px-32">
        {/* <h1 className=" text-5xl font-extrabold lg:text-7xl text-center">
          I Made <span className='text-red-600 underline'>N27,495</span> (From 11 Sales) in My First 24 Hours Using This Book... And I&apos;m Still a Complete Beginner! 😲
        </h1> */}


<section className="max-w-6xl mx-auto px-4 py-16 flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16">
  {/* TEXT SECTION */}
  <div className="flex-1 text-center md:text-left">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight sm:leading-snug tracking-tight">
      I Made <span className="text-red-600 underline">N27,495</span> 
      <span className="block sm:inline"> (From 11 Sales)</span> 
      <br className="sm:hidden" />
      in My First 24 Hours Using This Book...
      <br />
      <span className="text-black/90">And I&apos;m Still a Complete Beginner! 😲</span>
    </h1>

    <p className="mt-6 text-lg sm:text-xl text-gray-700 leading-relaxed">
      Learn the <span className="font-semibold">exact step-by-step system</span> I used WITHOUT
    taking crazy risks! <br/><br/>
      If you can follow simple instructions, you can do this too.
    </p>

    <div className="mt-10 flex justify-center md:justify-start">
        <Link 
            href="https://selar.com/small-biz">

      <button className="bg-gradient-to-r from-red-600 via-pink-500 to-yellow-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:scale-105 transition-transform duration-200 animate-pulse">
        📘 Get The Book Now
      </button>
            </Link>
    
    </div>

    <p className="mt-4 text-xs text-gray-500 text-center md:text-left">
      Instant download. No waiting, no fluff — just results.
    </p>
  </div>

  {/* IMAGE SECTION */}
  <div className="flex-1 flex justify-center md:justify-end">
    <Image
      src="/tsbp/cover.png" // Replace with your image path
              alt="Book cover"
              
      className="w-64 sm:w-80 md:w-96 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300"
    />
  </div>
</section>






            {/* 3D mockup of book cover */}
        {/* <div className="mt-20">
          <div className="relative h-96 w-full bg-gray-100">
            <Image
              src="/tsbp/cover.png" // Replace with your image path
              alt="Book cover"
              fill
              className="object-contain"
            />
          </div>
        </div> */}

        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          Look, I&apos;m not going to lie to you...<br /><br />

          Three weeks ago, I had ZERO business experience.<br /><br />

          I was just another person stuck at a job I hated, watching my friends post about their &quot;businesses&quot; on Instagram while I was calculating if I could afford both lunch and transport home.<br /><br />

          You know that feeling, right?<br /><br />

          But then my mentor gave me this book called <strong>&quot;The Small Business Playbook&quot;</strong> and everything changed.<br /><br />

          And I mean EVERYTHING.
        </p>
      </section>

      {/* What Happened Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          Here&apos;s What Happened...
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          I read the book on a Saturday morning. By Saturday afternoon, I had already picked my business idea (took me literally 10 minutes using the guide inside).<br /><br />

          By Saturday evening, I had my first ad written using the templates in the book.<br /><br />

          By Sunday afternoon, I made my first sale.<br /><br />

          By Monday night? <strong>11 SALES!</strong><br /><br />

          I&apos;m not kidding. Eleven actual sales. Real money in my account. Real customers. Real business.<br /><br />

          And remember, I&apos;m a complete beginner. I had never sold anything online before. I had never run a business. I didn&apos;t have some special connection or rich uncle.<br /><br />

          I just followed what the book said, step by step.<br /><br />

          <strong>And it WORKED.</strong>
        </p>

        {/* Sales Proof Image */}
        {/* <div className="mt-20">
          <div className="relative h-96 w-full bg-gray-100">
       
            <Image
              src="/tsbp/screenshot-proof.png" // Replace with your image path
              alt="Proof of 11 sales in 24 hours"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-center text-lg text-gray-600">My actual sales proof - 11 sales in 24 hours!</p>
        </div> */}

        {/* Sales Proof Section */}
<section className="mt-24 bg-gradient-to-b from-gray-50 to-white py-16 px-4">
  <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
    <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
      Real Results. Real Sales. 💸
    </h2>

    <div className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white p-3">
      <div className="absolute top-3 left-3 bg-green-500 text-white text-xs sm:text-sm font-semibold py-1 px-3 rounded-full shadow-md">
        ✅ Verified Sales Screenshot
      </div>

      <Image
        src="/tsbp/screenshot-proof.png" // replace with your image path
        alt="Proof of 11 sales in 24 hours"
        width={1200}
        height={800}
        className="w-full h-auto rounded-lg object-cover md:object-contain transition-transform duration-300 hover:scale-[1.02]"
        priority
      />
    </div>

    <p className="mt-6 text-base sm:text-lg text-gray-700 max-w-xl">
      This is my actual <span className="font-semibold text-black">Selar sales dashboard</span> — 
      <span className="text-red-600 font-bold"> 11 sales in just 24 hours!</span>
    </p>
  </div>
</section>

      </section>

      {/* Why Am I Telling You This Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          Why Am I Telling You This?
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          Because I asked my mentor if I could share this with others who are stuck like I was.<br /><br />

          He said yes.<br /><br />

          And honestly? I&apos;m excited to share it because I know exactly how you feel right now.<br /><br />

          You&apos;re tired of being broke by the 20th of every month.<br /><br />

          You&apos;re tired of watching others succeed while you&apos;re &quot;planning&quot; and &quot;thinking about it.&quot;<br /><br />

         <span className='font-bold'> You want to start a business but you&apos;re paralyzed because:</span><br /><br />
         <div className='space-y-4'>

          - You don&apos;t know WHICH business to start<br />
          - You&apos;re scared of wasting money on the wrong idea<br />
          - You don&apos;t know how to get customers<br />
          - You don&apos;t know how to advertise<br />
          - You&apos;re afraid of looking like a failure if it doesn&apos;t work<br /><br />
         </div>

          <strong>I had ALL of those same fears.</strong><br /><br />

          But this book cleared everything up in a way that actually makes sense.
        </p>
      </section>

      {/* What's Inside Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          Let Me Show You Exactly What&apos;s Inside (And Why It&apos;s So Easy to Use)
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          This isn&apos;t some boring business theory book.<br /><br />

          It&apos;s a step-by-step playbook that literally holds your hand and shows you:
        </p>

        <div className="mt-20 space-y-20">
          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              FIRST: How to pick the RIGHT business idea
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              There&apos;s a whole section on &quot;The 6 Products Nigerians Will ALWAYS Buy&quot;<br /><br />

              These are markets where customers are already desperate and searching for solutions RIGHT NOW.<br /><br />

              I picked the third one (I won&apos;t tell you which one here... you&apos;ll see inside 😉).<br /><br />

              It took me 10 minutes to decide because the book literally explains:<br />
              - Why each market works<br />
              - What makes customers in that market buy<br />
              - How to position yourself<br />
              - What to avoid<br /><br />

              No guessing. No confusion. Just: &quot;Here are the 6 hottest markets. Pick one.&quot;
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              SECOND: How to know if your idea will actually make money BEFORE you waste a single naira
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              There&apos;s this thing called the &quot;Business Analyzer Framework.&quot;<br /><br />

              It&apos;s 9 simple questions you ask about your idea.<br /><br />

              You answer them honestly, and it tells you if your business will print money or drain your account.<br /><br />

              I used it on my idea before I started. It scored high. So I moved forward with confidence.<br /><br />

              (By the way, I almost picked a different business before this. But when I ran it through the framework, it scored TERRIBLY. I would&apos;ve wasted at least ₦50,000 if I hadn&apos;t tested it first. This framework alone saved me from disaster.)
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              THIRD: The exact templates to write ads that actually bring customers
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              This is the part that blew my mind.<br /><br />

              There&apos;s a whole section with ready-to-use ad templates.<br /><br />

              Not theory. Not &quot;here&apos;s how to think about copywriting.&quot;<br /><br />

              Literally: <strong>&quot;Use this headline. Write this opening. Make this offer. Add this call to action.&quot;</strong><br /><br />

              I picked one template, plugged in my details, and posted it.<br /><br />

              10 MINUTES. That&apos;s all it took to create an ad that brought me 11 sales in 24 hours.<br /><br />

              I didn&apos;t have to &quot;learn copywriting.&quot; I didn&apos;t have to watch YouTube videos. I just followed the template.
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              FOURTH: How to price so you actually make profit
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              This was huge for me because I was going to make the biggest mistake: pricing too low.<br /><br />

              The book explains the psychology of pricing in Nigeria. Why being &quot;the cheapest&quot; is actually bad for business. What price range makes people trust you and buy.<br /><br />

              I followed the guidance and priced my product at ₦3,500.<br /><br />

              My friend who started a similar business last month is selling hers for ₦1,200 and struggling to make sales.<br /><br />

              Why? Because cheap = suspicious in people&apos;s minds.<br /><br />

              The book teaches you exactly how to price so customers see value, not &quot;cheapness.&quot;
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              FIFTH: How to get customers without begging friends to &quot;patronize&quot; you
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              You know how most people start a business and then start annoying their friends with &quot;Please patronize me na&quot;?<br /><br />

              The book shows you how to find REAL customers who actually want what you&apos;re selling.<br /><br />

              There&apos;s a whole chapter on finding &quot;starving crowds&quot; - people who are desperately looking for solutions.<br /><br />

              When you position yourself in front of them, they come to YOU. You don&apos;t have to beg anyone.
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              SIXTH: The 8 Laws of Advertising That Actually Work
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              This is not theory. These are the actual rules that make ads bring sales.<br /><br />

              Things like:<br />
              <div className='space-y-4'>

              - How to grab attention (if they don&apos;t stop scrolling, your ad is dead)<br />
              - How to make an irresistible offer (not just &quot;here&apos;s my product, buy it&quot;)<br />
              - How to create urgency (so they buy NOW, not &quot;later&quot;)<br />
              - How to build trust fast (especially when you&apos;re new)<br />
              - How to remove all risk (this one tripled my conversion rate)<br /><br />
              </div>

              I follow these 8 laws in every ad I write now. And every ad brings results.
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              SEVENTH: How to compete with bigger businesses and WIN
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              There&apos;s this brilliant strategy called &quot;David and Goliath.&quot;<br /><br />

              It shows you how to position yourself so you&apos;re not competing on price or size, but on something completely different that big businesses can&apos;t copy.<br /><br />

              I used this and now I&apos;m not worried about bigger competitors. I have my own lane.
            </p>
          </div>
        </div>

        <p className="mt-20 text-2xl leading-relaxed text-gray-800">
          <strong>And there&apos;s SO MUCH MORE inside...</strong><br /><br />

          - How to turn customers into free salespeople (they promote you without you paying them)<br /><br />
          <div className='space-y-4'>

          - The 4 psychological triggers that make people buy immediately<br /><br />
          - How to validate your idea before spending money (this saved me ₦50k+)<br /><br />
          - The guarantee structure that removes all buying hesitation<br /><br />
          - How to track which ads work (so you stop wasting money)<br /><br />
          - How to start with little or no capital (real examples)<br /><br />
          </div>

          Look, I could go on and on. The book is PACKED with practical stuff.<br /><br />

          But here&apos;s what I really want you to understand:
        </p>
      </section>

      {/* Made For Beginners Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          This Book Is Made For BEGINNERS (Like Me!)
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          You don&apos;t need business experience.<br /><br />

          You don&apos;t need a lot of money.<br /><br />

          You don&apos;t need connections.<br /><br />

          You just need to:<br />
          <div className='space-y-4'>
            
          1. Pick one of the 6 hot markets<br />
          2. Use the framework to validate it&apos;s good<br />
          3. Copy a template to create your ad<br />
          4. Follow the pricing guidance<br />
          5. Launch<br /><br />
          </div>

          That&apos;s literally it.<br /><br />

          I did all of that in LESS THAN 2 HOURS on a Saturday.<br /><br />

          By Sunday, I had my first sale.<br /><br />

          By Monday night, I had 11 sales.<br /><br />

          <strong>If I can do it, YOU can definitely do it.</strong>
        </p>

        {/* <div className="mt-20">
          <div className="relative h-96 w-full bg-gray-100">
       
            <Image
              src="/tsbp/money-printer.gif" // Replace with your image path
              alt="money printer"
              fill
              className="object-contain"
            />
          </div>
          <p className="mt-4 text-center text-lg text-gray-600">Your bank account when you start implementing the strategies in the book!</p>
        </div> */}

<div className="mt-20 text-center px-4">
  <div className="relative w-full max-w-2xl mx-auto bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
    <img
      src="/tsbp/money-printer.gif"
      alt="Money printer"
      className="w-full h-auto object-contain"
    />
  </div>
  <p className="mt-4 text-lg text-gray-600">
    Your bank account when you start implementing the strategies in the book! 💸
  </p>
</div>

      </section>

      {/* Pricing Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          Now Here&apos;s Where It Gets Even Better...
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          My mentor normally sells this book for ₦14,999.<br /><br />

          And honestly? It&apos;s worth way more than that.<br /><br />

          But I begged him to offer a discount so more people like you can get it.<br /><br />

          He refused at first. He said &quot;People don&apos;t take cheap things seriously. It would be an insult if someone gets the book and doesn&apos;t use it.&quot;<br /><br />

          But I kept pushing. I told him &quot;There are people out there who are stuck like I was. They NEED this.&quot;<br /><br />

          He finally agreed... but only for 48 hours.<br /><br />

          <strong>So right now, instead of ₦14,999, you can get it for just ₦4,999.</strong><br /><br />

          That&apos;s ₦10,000 OFF.<br /><br />

          But here&apos;s the catch: This price goes back up to ₦14,999 after 48 hours. No extensions. No &quot;last chance&quot; emails. The price just goes back up.
        </p>
      </section>

      {/* Free Gifts Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          PLUS, You Get These 2 FREE GIFTS (Only for the Next 48 Hours):
        </h2>

        <div className="mt-20 space-y-20">
          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              FREE GIFT #1: The 6 Products Nigerians Will ALWAYS Buy
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              This is the guide I used to pick my business in 10 minutes.<br /><br />

              It shows you the 6 hottest markets in Nigeria where:<br />
              <div className='space-y-4'>

              - Demand never stops<br />
              - Customers are desperate<br />
              - Money flows non-stop<br />
              - Competition is weak (because most people don&apos;t know about these markets)<br /><br />
              </div>

              Just pick one and you&apos;re already 10 steps ahead of people trying to &quot;figure out&quot; what to sell.
            </p>
          </div>

          <div>
            <h3 className=" text-3xl font-bold text-red-600 lg:text-4xl">
              FREE GIFT #2: The Advertisement Templates Toolkit
            </h3>
            <p className="mt-6 text-2xl leading-relaxed text-gray-800">
              This is what I used to write my ad in 10 minutes.<br /><br />

              Ready-to-use templates for:<br />
              <div className='space-y-4'>

              - Headlines that grab attention<br />
              - Openings that hook readers<br />
              - Offers that make people say &quot;I need this NOW&quot;<br />
              - Calls-to-action that get people to buy<br /><br />
              </div>

              Just plug in your details and you&apos;re done. No &quot;learning copywriting.&quot; No guessing. Just copy, paste, adjust, post.
            </p>
          </div>
        </div>

        <p className="mt-20 text-2xl leading-relaxed text-gray-800">
          <strong>Both of these bonuses are only included for the next 48 hours.</strong><br /><br />

          After that, they&apos;re gone. And the price goes back to ₦14,999.
        </p>
      </section>

      {/* Guarantee Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          Here&apos;s My Personal Guarantee to You...
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          Look, I know you might be skeptical. I would be too.<br /><br />

          So here&apos;s what I&apos;m going to do:<br /><br />

          <strong>I&apos;m giving you a 90-Day Money-Back Guarantee.</strong><br /><br />

          Get the book. Read it. Use it. Implement everything for 90 days.<br /><br />

          If for ANY reason you feel like it didn&apos;t deliver value, just reach out and I&apos;ll personally refund every kobo.<br /><br />

          And here&apos;s the crazy part:<br /><br />

          I can&apos;t delete the book from your phone.<br /><br />

          I can&apos;t erase what you learned from your brain.<br /><br />

          Which means you could literally read the book, use it to start your business, make money, and STILL ask for a refund.<br /><br />

          <strong>I&apos;m basically trusting you to be an honest person who won&apos;t try to rip me off.</strong><br /><br />

          If you know you&apos;re honest, then you have ZERO risk here.<br /><br />

          The worst that happens? You read some useful information and get your money back.<br /><br />

          The best that happens? You&apos;re running your own profitable business in the next 30 days.
        </p>

        {/* Guarantee Seal Image */}
        <div className="mt-20 flex justify-center">
          <div className="relative h-64 w-64 bg-gray-100">
            {/* Replace with your actual guarantee seal */}
            <Image
              src="/guarantee-seal.png" // Replace with your image path
              alt="90-Day Money-Back Guarantee"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* CTA Steps Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          So Here&apos;s What You Need to Do Right Now:
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800 space-y-4">
          <strong>STEP 1:</strong> Click the link below<br /><br />

          <strong>STEP 2:</strong> Complete the payment (₦4,999 - not ₦14,999)<br /><br />

          <strong>STEP 3:</strong> Get instant access to:<br />
          <div className='space-y-4'>

          - The complete Small Business Playbook<br />
          - FREE GIFT #1: The 6 Products Nigerians Always Buy<br />
          - FREE GIFT #2: The Advertisement Templates Toolkit<br /><br />
          </div>

          <strong>STEP 4:</strong> Pick your market (takes 10 minutes)<br /><br />

          <strong>STEP 5:</strong> Use a template to create your ad (takes 10 minutes)<br /><br />

          <strong>STEP 6:</strong> Launch and watch sales come in<br /><br />

          That&apos;s it. That&apos;s the whole process.<br /><br />

          I did it in less than 2 hours on a Saturday.<br /><br />

          You can do it too.
        </p>

        {/* Main CTA Button */}
        <div className="mt-20">
          <Link 
            href="https://selar.com/small-biz"
            className="inline-block bg-red-600 px-16 py-6 text-center  text-2xl font-bold text-white transition-colors hover:bg-red-700"
          >
            CLICK HERE TO GET INSTANT ACCESS
          </Link>
        </div>

        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          Remember:<br />
          <div className='space-y-4'>

          - ₦4,999 today (₦10,000 OFF)<br />
          - Price goes back to ₦14,999 in 48 hours<br />
          - 2 FREE gifts included (only for 48 hours)<br />
          - 90-Day Money-Back Guarantee<br />
          - Zero risk, all reward
          </div>
        </p>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 py-16 lg:px-32">
        <h2 className=" text-4xl font-bold lg:text-6xl text-center">
          Let Me Ask You Something...
        </h2>
        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          Where do you want to be 30 days from now?<br /><br />

          Still at that job, watching others build businesses while you&apos;re &quot;thinking about it&quot;?<br /><br />

          Still broke by the 20th of every month?<br /><br />

          Still scared to start because you don&apos;t know which business to pick?<br /><br />

          Or...<br /><br />

          Running your own business?<br /><br />

          Making your first sales?<br /><br />

          Finally feeling like you&apos;re moving FORWARD instead of being stuck?<br /><br />

          <strong>Three weeks ago, I was where you are right now.</strong><br /><br />

          Today, I have a real business. Real sales. Real money coming in.<br /><br />

          The only difference between then and now was clicking that link and following what the book said.<br /><br />

          That&apos;s it.<br /><br />

          <strong>Your turn.</strong>
        </p>

        {/* Final CTA Button */}
        <div className="mt-20">
          <Link 
            href="https://selar.com/small-biz"
            className="inline-block bg-red-600 px-16 py-6 text-center  text-2xl font-bold text-white transition-colors hover:bg-red-700"
          >
            I WANT INSTANT ACCESS NOW
          </Link>
        </div>

        <p className="mt-12 text-2xl leading-relaxed text-gray-800">
          <strong>Only ₦4,999 for the Next 48 Hours (Then Goes Back to ₦14,999)</strong>
        </p>

        {/* P.S. Section */}
        <div className="mt-20 border-t border-gray-300 pt-20">
          <p className="text-2xl leading-relaxed text-gray-800">
            <em>
              P.S. - I&apos;m serious about that 90-day guarantee. If you read it and don&apos;t find it valuable, I&apos;ll refund you myself. You literally cannot lose here.<br /><br />

              P.P.S. - The 2 FREE gifts (The 6 Products guide + Ad Templates) are only available for the next 48 hours. After that, they&apos;re gone forever. Don&apos;t miss this.<br /><br />

              P.P.P.S. - Still not sure? Think about this: What&apos;s the cost of staying stuck for another year? Another 5 years? How much money will you miss out on because you didn&apos;t take action today? ₦4,999 is NOTHING compared to the cost of staying where you are.
            </em>
          </p>
        </div>

        {/* Final CTA Button */}
        <div className="mt-20">
          <Link
            href="https://selar.com/small-biz"
            className="inline-block bg-red-600 px-16 py-6 text-center  text-2xl font-bold text-white transition-colors hover:bg-red-700"
          >
            START BUILDING MY BUSINESS!
          </Link>
        </div>
      </section>
    </main>
  );
}