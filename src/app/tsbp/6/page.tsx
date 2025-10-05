import Link from "next/link";
import Image from "next/image"

// app/small-business-playbook-v2/page.tsx
export default function SmallBusinessPlaybookV2() {
    return (
      <div className="min-h-screen bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 leading-tight">
            # Does God Want You to Be Rich?
          </h1>
          
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Ex-Teacher Reveals How You Can Start Your Own Extremely Profitable Business In the Next 30 Days
            </h2>
            <p className="text-xl text-gray-600 font-semibold">
              Without Huge Capital Or Quitting Your Job…Yet
            </p>
          </div>
  
          <div className="border-t border-b border-gray-300 py-8 my-8">
            <p className="text-lg text-center font-semibold">
              If you can read this, you can surely start a profitable business.
            </p>
          </div>
  
          <div className="text-lg leading-relaxed space-y-6">
            <p>Dear friend,</p>
            <p>Would you like to own your own profitable business?</p>
            <p>Have you ever wondered how successful entrepreneurs spot profitable business opportunities?</p>
            <p>Do you want to know how they turned opportunities into successful, profitable and sustainable businesses (and how you can do it, too)?</p>
            <p className="font-semibold">If you answered yes to any of the questions, I have good news for you.</p>
            <p>Because you can quit your job in the next 30 days to start an extremely profitable business starting with just one hundred thousand naira if you act on the information in this letter.</p>
            <p className="font-semibold">But first, why should you listen to me?</p>
          </div>
        </section>
  
        {/* Personal Story Section */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">I Would Like To Tell You A Story About Myself</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-lg mb-6">I promise to make it short.</p>
              
              <div className="space-y-6 text-lg">
                <p>In 2023, after I lost countless interviews that could literally change my life because I didn&apos;t have money for data, I decided to try another way to make money without relying on interviews.</p>
                <p>So, I decided to start a business.</p>
                <p>I attended a webinar on how to sell in bulk.</p>
                <p>It was during my time running this business that I learnt a lot about starting and running a business. I mentored under successful entrepreneurs and I&apos;ve seen their strategies.</p>
              </div>
  
              <div className="mt-8 space-y-4 text-lg">
                <p>The strategies and frameworks they use to find good business opportunities,</p>
                <p className="ml-4">….how to validate them to see which of those opportunities will make me the most money,</p>
                <p className="ml-4">…how to set good prices using buyer psychological triggers that allows you to charge well, while still making customers happy they got a bargain</p>
                <p className="ml-4">…how to advertise for maximum profitability to get customers</p>
                <p className="ml-4">…how to use human psychological techniques to turn our customers into free promoters for my business</p>
                <p className="ml-4">…and so many other things I&apos;ve mastered over the years.</p>
              </div>
  
              <div className="mt-8 border-t border-gray-200 pt-8">
                <p className="text-lg">I know right now, you can&apos;t wait to discover all these secrets.</p>
                <p className="text-lg font-semibold mt-4">And that&apos;s why I&apos;ve loaded all my knowledge and experience together in <span className="text-blue-600">The Small Business Playbook</span>.</p>
                <p className="text-xl font-bold mt-4 text-center">The only business guide you&apos;ll ever need to start an extremely profitable business.</p>
              </div>

              <div className="my-6 flex justify-center">
              <Image
                src="/tsbp/cover.png"
                alt="The small business playbook book cover"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
  
              <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6">
                <p className="text-lg">Look, I wrote this book with you in mind and I&apos;ve carefully curated it so that it&apos;s not only loaded with valuable information, but also interesting to read, simple to act on, and you may start to see results in as little as 14 days after you start acting on the information in the book.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* What's Inside Preview */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg mb-4">But don&apos;t take my word for it.</p>
            <p className="text-xl font-semibold">Here&apos;s a little taste of what you&apos;ll discover in the book:</p>
          </div>
  
          <div className="border-t border-b border-gray-300 py-8 my-8">
            <p className="text-lg text-center font-semibold italic">
              Asking your friends and family what business you should start is a good strategy, right?
            </p>
            <p className="text-lg text-center font-bold mt-2">Wrong!</p>
            <p className="text-center mt-4">We&apos;ll explain why when you order this book.</p>
          </div>
  
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">How to <span className="text-blue-600">effortlessly generate crazily good business ideas</span> and know instantly which of them can make you rich.</h3>
            </div>
  
            <div>
              <h3 className="text-xl font-bold mb-4">The sure-fire foundations of any business:</h3>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>• The &quot;make things less awful&quot; technique</li>
                <li>• The &quot;make things more awesome&quot; technique</li>
              </ul>
            </div>
  
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <h3 className="text-xl font-bold mb-4">The Deadly Advertising Sins That Keep You Broke</h3>
              <p className="text-lg font-semibold">The one thing you should <span className="text-red-600">NEVER</span> do when advertising your business.</p>
            </div>
  
            <div className="space-y-4 text-lg">
              <p>Why identifying the people you want to advertise to is very important (and why most business gurus have this information wrong).</p>
              <p className="font-semibold">The <span className="text-blue-600">8 commandments of advertising</span> for small businesses (if you get this wrong, people will never buy from you. Plus, you&apos;ll LOSE money).</p>
              <p>The Business Analyzer Framework for validating business ideas you&apos;ll be able to discover when you read this book (don&apos;t use this, and you&apos;ll likely pick the least profitable of all the business ideas you&apos;ll generate).</p>
              <p>The reason why your products should be <span className="font-semibold">affordable, not cheap</span> (and how you can do it).</p>
              <p>How to price your products for maximum profitability without losing customers.</p>
            </div>
  
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <p className="text-lg font-semibold">What <span className="text-red-600">NEVER</span> to do when starting out (unless you want to go broke).</p>
            </div>
  
            <div className="space-y-4 text-lg">
              <p>What you should do to avoid getting &quot;eaten up&quot; by bigger competitors.</p>
              <p>The sneaky <span className="font-semibold">&quot;David and Goliath&quot; trick</span> you can use to &quot;steal&quot; customers from your competitors.</p>
              <p>The truth about being #1 in your business category (and how to achieve it).</p>
            </div>
  
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <p className="text-lg font-semibold">What <span className="text-red-600">NEVER</span> to do when running your business (Do this, and your customers will forget and dump you fast fast!).</p>
            </div>
  
            <div className="space-y-4 text-lg">
              <p>Do you know the <span className="font-semibold">4 psychological triggers</span> in people&apos;s minds that make them buy? (Use any of them and you can almost always never run out of new customers).</p>
              <p>The sneaky tricks to get your customers promote your business everywhere they go like MTN without paying them a kobo.</p>
              <p>The reasons why word of mouth is very important for the survival and profitability of your business.</p>
              <p>Do you know people trust what other people say about your business more than what you say? (You can use this to your advantage. See how when you get the book).</p>
              <p>The sneaky little ways you can use low prices to attract customers <span className="font-semibold">without losing profits</span>.</p>
              <p>What you should avoid when you start making money in your business.</p>
              <p>The psychological reason why people buy, and how you can use it to increase your prices without losing customers (In fact, follow it, and they&apos;ll still snub your competitors to buy from you!).</p>
            </div>
  
            <div className="bg-red-50 border-l-4 border-red-400 p-6">
              <p className="text-lg font-semibold">What to <span className="text-red-600">NEVER</span> do when starting out (Do this, and your business will surely crash).</p>
            </div>
  
            <div className="text-center border-t border-b border-gray-300 py-8">
              <p className="text-lg font-semibold italic">You think starting a business is risky, right?</p>
              <p className="text-lg font-bold mt-2">Wrong!</p>
              <p className="mt-4">We&apos;ll explain why having a job is much much more risky.</p>
            </div>
  
            <div className="space-y-4 text-lg">
              <p>Most businesses fail in their first 6 months. There are steps you can take to prevent this from happening.</p>
              <p>The reasons why people are not looking for low prices (and what they want instead).</p>
              <p className="text-xl font-bold text-center mt-8">And many, Many, MAny, MANy, <span className="text-blue-600">MANY</span> more!</p>
            </div>
          </div>
  
          <div className="mt-12 bg-green-50 border-l-4 border-green-400 p-6">
            <p className="text-lg font-semibold text-center">
              You see, you&apos;re getting a massive ocean of valuable, quality information.
            </p>
            <p className="text-center mt-4">
              And I know that by the time you finish reading the book, you&apos;ll have all the information you&apos;ll ever need to start and grow a profitable business and making over 3X your current income.
            </p>
          </div>
        </section>
  
        {/* Bonuses Section */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">But That&apos;s Not All You&apos;re Getting</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-lg mb-6 text-center font-semibold">
                If you order this book today, I&apos;m going to give you <span className="text-blue-600">TWO juicy gifts FREE!</span>
              </p>
  
              {/* Bonus 1 */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4 text-green-600">GIFT #1: The 6 kinds of products people love to buy.</h3>
                <p className="text-lg mb-4">
                  The fact is, it doesn&apos;t matter the condition of the economy. It doesn&apos;t matter whether the country is hard…these 6 categories of products will still sell like mad if you do it right.
                </p>
                <p className="text-lg italic mb-4">
                  (And no, it&apos;s not food, it&apos;s not clothes, and it&apos;s not water… eeew!)
                </p>
                <p className="text-lg">
                  Don&apos;t worry, you&apos;ll discover them, know which of them fits you, and how you can get started when you grab your copy of this book.
                </p>
              </div>
  
              {/* Bonus 2 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-blue-600">GIFT #2: The Advertising Templates Toolkit.</h3>
                <p className="text-lg mb-4">
                  Here, you&apos;ll discover different kinds of advertising templates you can use to advertise your products and services.
                </p>
                <p className="text-lg font-semibold">
                  Remember the 8 commandments of advertising I said you&apos;ll get when you order this book?
                </p>
                <p className="text-lg font-bold mt-2 text-green-600">
                  This free gift makes it <span className="italic">eeaaasy</span> for you.
                </p>
              </div>
  
              <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6 text-center">
                <p className="text-lg font-semibold">
                  The truth is, with just these two free gifts, you can start your own business in less than 7 days:
                </p>
                <p className="mt-4">
                  Start with one of the 6 product categories people love to buy, get a product or start a service, use the advertising templates to create advertising material, and ….
                </p>
                <p className="text-xl font-bold mt-4">Voila!</p>
                <p className="text-lg font-semibold mt-4">You&apos;re in business.</p>
                <p className="text-2xl mt-4">Congratulations in advance 🎉 🎉 🎉</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Pricing Section */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            &quot;Okay, Okay, I Can See This Book Is Soooo Valuable, Instructive, Informative, Interesting, Remarkable, Unique, Spe-... Cut To The Chase. How Much Is The Small Business Playbook?&quot;
          </h2>
  
          <div className="space-y-6 text-lg">
            <p>If you look at most online business courses, you&apos;ll see that they cost an average of ₦100,000.</p>
            <p className="italic">That&apos;s someone&apos;s full month salary mehhn.</p>
            <p>Even if you decide to study business in a business school, you&apos;ll pay an average of 2 million naira (or even double or triple) and you still will <span className="font-semibold">NEVER</span> get the massively valuable information you&apos;ll get in this book.</p>
          </div>
  
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-lg font-semibold text-center">
              However, you&apos;ll not be paying that much because I want to make this information accessible to as many people as possible.
            </p>
          </div>
  
          <div className="mt-12 space-y-4 text-lg">
            <p>And because when people start businesses</p>
            <ul className="space-y-2 text-gray-700 ml-6">
              <li>• …they&apos;re able to <span className="font-semibold">cheat their bills</span> with confidence,</li>
              <li>• …secure better quality partners</li>
              <li>• …you&apos;ll also be free from fear that you may lose your job</li>
              <li>• …you&apos;ll live in better quality places</li>
              <li>• …you&apos;ll be able to take care of your loved ones</li>
            </ul>
          </div>
  
          <div className="mt-12 text-center">
            <p className="text-lg">So, no, you&apos;re not going to pay ₦2 million.</p>
            <p className="text-lg">You&apos;re not going to pay ₦100,000.</p>
            <p className="text-lg">You won&apos;t pay ₦50,000.</p>
            <div className="mt-8 bg-green-50 border-l-4 border-green-400 p-6">
              <p className="text-lg font-semibold">You can get <span className="text-blue-600">The Small Business Playbook</span> right now for just</p>
              <p className="text-4xl font-bold mt-4">₦8,999</p>
            </div>
          </div>
        </section>
  
        {/* Guarantee Section */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Now, I Know What You&apos;re Thinking…</h2>
  
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <p className="text-xl font-semibold text-center mb-8">
                &quot;What If This Doesn&apos;t Work For Me? Uh… uh… I&apos;m Scared&quot;
              </p>
  
              <div className="space-y-6 text-lg">
                <p>Look, this book is a product of over 5 years of learning and mentoring under top entrepreneurs all over the world.</p>
                <p>Plus, over 360 days of writing, editing, and fine-tuning to make it not only interesting to read, but also easy to understand and act on.</p>
              </div>
  
              <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
                <p className="text-lg font-semibold text-center">
                  However, because I&apos;m <span className="italic">soooo</span> confident this works, I&apos;m going to do something crazy so you can relaaaaaax…
                </p>
              </div>
  
              <div className="mt-8 space-y-6 text-lg">
                <p>Grab your copy of the e-book, read it, and if you don&apos;t like it, then just email me and I&apos;ll give you all your money back.</p>
                <p className="font-semibold">In fact, I&apos;ll write you a full apology letter for wasting your time.</p>
              </div>

              <div className="my-6 flex justify-center">
              <Image
                src="/female-code/risk-reversal.png"
                alt="100% money back guarantee seal"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
  
              <div className="mt-8 bg-red-50 border-l-4 border-red-400 p-6">
                <p className="text-lg font-semibold">I&apos;m taking a risk by doing this…</p>
                <p className="mt-4">I can&apos;t make you give the e-book back.</p>
                <p>It&apos;s impossible.</p>
                <p>I can&apos;t get it back from your computer or phone when you download this ebook.</p>
                <p className="mt-4 font-semibold">So you could just order the ebook, ask for a refund and rip me off, but I&apos;m going to trust that you&apos;re not going to do that to me.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* How to Get It Section */}
        <section className="px-4 py-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">&quot;Okay…Okay. I Promise Not To Rip You Off. So, How Do I Get The Book?&quot;</h2>
  
          <div className="space-y-6 text-lg">
            <p>You&apos;re at a point of decision.</p>
            <p>You can either continue down the path of least resistance, the path you have already been traveling.</p>
            <p>Or you can choose the road less traveled.</p>
            <p>The path of least resistance will probably result in you getting the same outcome you&apos;ve always received.</p>
            <p className="font-semibold">But if you want something different to happen, if you want to change the direction of your finances, you&apos;re going to have to do something different.</p>
            <p className="text-xl font-bold">Make a new choice and pursue your new outcome.</p>
          </div>
  
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
            <p className="text-lg">Click the button below, you&apos;ll be taken to Selar (a secure site that uses Paystack — the same payment system used by Jumia and other big companies in Nigeria).</p>
            <p className="mt-4 text-lg">Fill the order form, make your payment.</p>
            <p className="text-lg">You&apos;ll immediately get your unique download link as soon as payment is complete.</p>
            <p className="mt-4 text-lg font-semibold">It takes less than 2 minutes to complete your order.</p>
          </div>
  
          <div className="mt-12 text-center">
            <div className="bg-green-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">ORDER THE SMALL BUSINESS PLAYBOOK NOW</h3>

                 <Link 
           href="https://selar.com/small-biz">

              <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                BUY NOW - ₦8,999
              </button>
           </Link>
            </div>
          </div>
        </section>
  
        {/* Final FAQ Section */}
        <section className="px-4 py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Still here? A few more things before you go...</h2>
  
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-4">&quot;I&apos;m still not sure if this is for me. Can you tell me who this book is for?&quot;</h3>
                <p className="text-lg">Okay, look.</p>
                <p className="text-lg mt-4">Before you buy The Small Business Playbook, I want you to put your hand on your heart and repeat after me:</p>
              </div>
  
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
                <h3 className="text-xl font-bold text-center mb-4">(DO NOT SKIP THESE)</h3>
              </div>
  
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg font-semibold mb-2">1. &quot;I want to start a profitable business.&quot;</p>
                  <p className="text-gray-700">This book is designed for people who are serious about starting a business. Not for people who just want to &quot;think about it someday&quot;. If you&apos;re one of those people, purchase at your own risk.</p>
                </div>
  
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg font-semibold mb-2">2. &quot;I understand this is not a get-rich-quick scheme.&quot;</p>
                  <p className="text-gray-700">The Small Business Playbook is not a magic formula that will make you a millionaire overnight. It&apos;s a long-term investment in building a real, sustainable business. Don&apos;t buy it with your last remaining month&apos;s rent money.</p>
                </div>
  
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg font-semibold mb-2">3. &quot;I am willing to actually READ the book and take action.&quot;</p>
                  <p className="text-gray-700">The information in this book is useless if you don&apos;t implement it. You need to actually sit down, read it, and apply what you learn. If you already have a dozen other unfinished business books gathering dust, maybe deal with those first.</p>
                </div>
  
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="text-lg font-semibold mb-2">4. &quot;I understand there ARE refunds if the book doesn&apos;t work for me.&quot;</p>
                  <p className="text-gray-700">Yes, I&apos;m serious about the guarantee. If you read the book and don&apos;t like it, email me and I&apos;ll refund your money. But I&apos;m trusting you not to be that person who downloads, refunds, and keeps the book. Don&apos;t be that person.</p>
                </div>
              </div>
  
              <div className="mt-8 text-center">
                <p className="text-lg font-semibold">Could you say all those things without hyperventilating?</p>
                <p className="text-lg mt-4">Then click the button and get started.</p>
              </div>
  
              <div className="mt-8 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">&quot;But what if I have more questions?&quot;</h3>
                  <p className="text-gray-700">Then email me.</p>
                  <p className="text-gray-700">I&apos;m a real person.</p>
                  <p className="text-gray-700 italic">I&apos;ll respond.</p>
                  <p className="text-gray-700 italic">(Probably.)</p>
                </div>
  
                <div>
                  <h3 className="text-xl font-semibold mb-2">&quot;This sales page was kinda long and I skimmed it. Can you recap the offer?&quot;</h3>
                  <p className="text-gray-700 font-semibold">lol, you do not have the attention span required to run a business. Go home.</p>
                  <p className="text-gray-700 mt-2">Otherwise, you can pick up The Small Business Playbook here:</p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="px-4 py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ORDER THE SMALL BUSINESS PLAYBOOK NOW
            </h2>
               <Link 
                       href="https://selar.com/small-biz">

            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              BUY NOW - ₦8,999
            </button>
                       </Link>
            <p className="mt-4 text-sm opacity-90">Start your profitable business journey today</p>
          </div>
        </section>
      </div>
    );
  }