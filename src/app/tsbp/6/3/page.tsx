/* eslint-disable react/no-unescaped-entities */
import Head from 'next/head';
import Image from 'next/image'
import Link from 'next/link'

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>Does God Want You to Be Rich? - The Small Business Playbook</title>
        <meta name="description" content="Start a profitable business in 30 days without huge capital or quitting your job" />
      </Head>

      {/* Hero Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Does God Want You to Be Rich?
        </h1>
        
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <p className="text-xl font-semibold mb-4">PICTURE THIS:</p>
          <p className="text-lg">
            It's Sunday evening.<br/>
            You're lying on your bed, scrolling through Instagram.<br/>
            And you see … <em>another</em> person your age buying a car.<br/>
            <em>Another</em> friend posting about their "small business".<br/>
            <em>Another</em> motivational quote about "starting that side hustle".<br/>
            And you think to yourself: "Maybe I should start a business too…"<br/>
            (You've been thinking this for like … 3 years now.)
          </p>
        </div>

        <div className="space-y-4 text-lg">
          <p>So you open Google and type: "business ideas in Nigeria"</p>
          <p>You click the first article.</p>
          <p>And … it's the same recycled garbage you've read a million times:</p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>"Start a poultry farm!"</p>
            <p>"Sell recharge cards!"</p>
            <p>"Become a POS agent!"</p>
          </div>
          <p className="text-2xl">😑</p>
          <p>Thanks, Google. Very helpful.</p>
          <p>So you give up … <em>again</em> … and go back to scrolling.</p>
          <p>And the cycle continues.</p>
          <p className="font-semibold text-xl mt-8">Sound familiar?</p>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg mt-8">
          <p>
            Well, if this scene made you feel personally attacked … I mean, uh, I … have good news for you.
          </p>
          <p className="mt-2 italic">(Phew, nearly went full motivational speaker mode there.)</p>
          <p className="mt-4 font-semibold">
            Because on this page, I'm going to show you how you can <strong>actually</strong> start a profitable business in the next 30 days …
          </p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>… without needing "huge capital" …</li>
            <li>… without quitting your job (yet) …</li>
            <li>… and without starting another bloody POS business.</li>
          </ul>
          <p className="mt-4 font-bold">
            If you can read this letter, you can start a business. I'm serious.
          </p>
        </div>

        <div className="mt-8 p-6 bg-gray-100 rounded-lg">
          <p>But first … why should you listen to me?</p>
          <p className="font-semibold">I mean, who even am I?</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-gray-50">
        <h2 className="text-3xl font-bold mb-8">Let Me Tell You A Story</h2>
        <p className="mb-4 italic">I promise to make it short.</p>
        <p className="mb-4 italic">(Unlike most Nigerian motivational speakers who take 45 minutes to tell you they once trekked to school.)</p>
        
        <div className="space-y-4">
          <p>In 2023, I lost <strong>countless</strong> job interviews that could have literally changed my life.</p>
          <p className="font-semibold">Why?</p>
          <p>Because I didn't have money for <strong>data</strong>.</p>
          <p>Yeah. Let that sink in.</p>
          <p>I couldn't afford ₦1,000 for data to attend online interviews.</p>
          <p className="font-semibold">That's when I realized something:</p>
          <p>Waiting for some HR person to "give me a chance" was NOT working.</p>
          <p>So I decided to try something different.</p>
          <p>I attended a webinar on how to sell in bulk. Started a small business.</p>
          <p className="font-semibold">And that's when everything changed.</p>
        </div>

        <div className="bg-white p-6 rounded-lg mt-6 border-l-4 border-blue-500">
          <p>
            Because while running that business, I got to mentor under <strong>actual</strong> successful entrepreneurs (not the "motivational speaker" type … the ones who actually have money).
          </p>
          <p className="mt-4 font-semibold">And I learned:</p>
          <ul className="list-disc list-inside space-y-2 mt-2">
            <li>…the strategies and frameworks they use to <strong>spot</strong> profitable business opportunities (hint: it's NOT "follow your passion")</li>
            <li>…how to <strong>validate</strong> those opportunities to see which one will make the most money (before wasting time and cash)</li>
            <li>…how to set prices using psychological triggers that let you charge well … while customers still feel like they got a bargain (this one's evil, but it works)</li>
            <li>…how to advertise for maximum profitability without burning through money on "engagement posts" that get you nowhere</li>
            <li>…how to use human psychology to turn customers into <strong>free promoters</strong> for your business (like how MTN has everyone walking around as unpaid billboards)</li>
            <li>…and so many other things I've mastered over the years.</li>
          </ul>
        </div>

        <div className="mt-8 bg-yellow-50 p-6 rounded-lg">
          <p className="font-semibold">
            Look, I know you're itching to discover these secrets.
          </p>
          <p className="font-bold text-xl mt-2">
            That's why I've packed everything into <strong>The Small Business Playbook</strong>.
          </p>
          <p className="mt-2">
            The only business guide you'll ever need to start an extremely profitable business.
          </p>
          <p className="italic mt-1">(Yes, I said "only". Fight me.)</p>
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
            
           

        <div className="mt-6 space-y-4">
          <p>I wrote this book with <strong>you</strong> in mind.</p>
          <p>Someone who's tired of the same recycled "business tips" from people who've never actually run a business.</p>
          <p>Someone who wants <strong>actual</strong> strategies, not motivational fluff.</p>
          <p>Someone who wants to see results in 14 days, not "someday when the time is right".</p>
        </div>

        <div className="mt-8 p-4 bg-gray-100 rounded-lg">
          <p className="font-semibold text-center">
            But don't take my word for it.<br/>
            Here's what you'll discover in this book:
          </p>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">What's Inside (And Why You Should Care)</h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>Asking your friends and family what business you should start is a good strategy, right?</p>
            <p className="font-bold text-red-600 mt-2"><strong>Wrong.</strong></p>
            <p className="text-sm italic">(We'll explain why when you get the book. </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>How to <strong>effortlessly generate</strong> crazily good business ideas … and know <strong>instantly</strong> which ones will make you rich.</p>
            <p className="text-sm italic">(No more "I don't know what business to start" nonsense.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The sure-fire foundations of any business:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>The <strong>"make things less awful"</strong> technique</li>
              <li>The <strong>"make things more awesome"</strong> technique</li>
            </ul>
            <p className="text-sm italic mt-2">(Yes, it's that simple. Business gurus complicate things to sound smart.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-red-200">
            <h3 className="font-bold text-red-700 text-xl">The Deadly Advertising Sins That Keep You Broke</h3>
            <p className="mt-2">The one thing you should <strong>NEVER</strong> do when advertising your business.</p>
            <p className="text-sm italic">(Do this, and you're basically setting your money on fire. Fun to watch, terrible for profit.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>Why identifying the people you want to advertise to is very important … and why most business gurus have this information <strong>completely wrong</strong>.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The <strong>8 commandments of advertising</strong> for small businesses.</p>
            <p className="mt-2">If you get this wrong, people will never buy from you. Plus, you'll LOSE money.</p>
            <p className="text-sm italic">(And no, "post consistently" is NOT one of them.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The <strong>Business Analyzer Framework</strong> for validating business ideas.</p>
            <p className="mt-2">Don't use this, and you'll likely pick the <strong>least profitable</strong> of all your ideas.</p>
            <p className="text-sm italic">(True story: I've seen people spend 6 months on businesses that were doomed from day one. Don't be that person.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The reason why your products should be <strong>affordable, not cheap</strong> (and how you actually do it).</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>How to <strong>price</strong> your products for maximum profitability without losing customers.</p>
            <p className="text-sm italic">(Hint: charging ₦500 because "Nigerians don't have money" is NOT a strategy. It's stupidity.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-red-200">
            <p>What <strong>NEVER</strong> to do when starting out.</p>
            <p className="text-sm italic">(Unless you want to go broke. In which case, carry on.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>What you should do to avoid getting "eaten up" by bigger competitors.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The sneaky <strong>"David and Goliath trick"</strong> you can use to "steal" customers from your competitors.</p>
            <p className="text-sm italic">(It's legal. It's ethical. It's just … smart.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The truth about being <strong>#1</strong> in your business category.</p>
            <p className="text-sm italic">(And how to achieve it. No, it's not "just work hard".)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-red-200">
            <p>What <strong>NEVER</strong> to do when running your business.</p>
            <p>Do this, and your customers will forget and dump you <strong>fast fast</strong>.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>Do you know the <strong>4 psychological triggers</strong> in people's minds that make them buy?</p>
            <p className="mt-2">Use any of them and you can almost always never run out of new customers.</p>
            <p className="text-sm italic">(These work on <em>everyone</em>. Including you. Including me. It's creepy how well they work.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The sneaky tricks to get your customers to promote your business everywhere they go … like MTN … without paying them a kobo.</p>
            <p className="text-sm italic">(Again, evil. But effective.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The reasons why <strong>word of mouth</strong> is very important for the survival and profitability of your business.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>Do you know people trust what <strong>other people</strong> say about your business more than what <strong>you</strong> say?</p>
            <p>You can use this to your advantage. See how when you get the book.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The sneaky little ways you can use low prices to attract customers <strong>without losing profits</strong>.</p>
            <p className="text-sm italic">(Because yes, you can do both. Business gurus who say otherwise are lying.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>What you should avoid when you start making money in your business.</p>
            <p className="text-sm italic">(This is where most people mess up. Don't be most people.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The psychological reason why people buy … and how you can use it to <strong>increase your prices</strong> without losing customers.</p>
            <p>In fact, follow it, and they'll still snub your competitors to buy from you.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-red-200">
            <p>What to <strong>NEVER</strong> do when starting out.</p>
            <p>Do this, and your business will surely crash.</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>You think starting a business is risky, right?</p>
            <p className="font-bold text-red-600 mt-2"><strong>Wrong.</strong></p>
            <p className="mt-2">We'll explain why having a job is <strong>much much</strong> more risky.</p>
            <p className="text-sm italic">(Your boss can wake up tomorrow and fire you. Your business can't fire you. Do the math.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>Most businesses fail in their first 6 months.</p>
            <p>There are steps you can take to prevent this from happening.</p>
            <p className="text-sm italic">(No, "pray about it" is not one of them.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>The reasons why people are <strong>not</strong> looking for low prices.</p>
            <p className="text-sm italic">(And what they want instead. Hint: it's not quality either.)</p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <p>And many, Many, MAny, MANy, <strong>MANY</strong> more!</p>
          </div>
        </div>

        <div className="mt-12 bg-green-50 p-6 rounded-lg border border-green-200">
          <p>You see, you're getting a massive ocean of valuable, quality information.</p>
          <p className="mt-2 font-semibold">
            And I know that by the time you finish reading the book, you'll have all the information you'll ever need to start and grow a profitable business and make over <strong>3X your current income</strong>.
          </p>
          <p className="text-sm italic mt-1">(Yes, 3X. Not "a little extra on the side". Actual money.)</p>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-purple-50">
        <h2 className="text-3xl font-bold mb-8 text-center">But That's Not All You're Getting</h2>
        <p className="text-center mb-8">If you order this book today, I'm going to give you <strong>TWO juicy gifts FREE!</strong></p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <h3 className="font-bold text-xl text-purple-700 mb-4">GIFT #1: The 6 Kinds of Products People Love To Buy</h3>
            <p>The fact is, it doesn't matter the condition of the economy.</p>
            <p>It doesn't matter whether "the country is hard" or not.</p>
            <p className="mt-2 font-semibold">
              These 6 categories of products will <strong>still</strong> sell like mad if you do it right.
            </p>
            <p className="text-sm italic mt-1">(And no, it's not food, it's not clothes, and it's not water… eeew!)</p>
            <p className="mt-4">
              Don't worry, you'll discover them, know which of them fits you, and how you can get started when you grab your copy of this book.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border-2 border-purple-300">
            <h3 className="font-bold text-xl text-purple-700 mb-4">GIFT #2: The Advertising Templates Toolkit</h3>
            <p>Here, you'll discover different kinds of advertising templates you can use to advertise your products and services.</p>
            <p className="mt-2">
              Remember the 8 commandments of advertising I said you'll get when you order this book?
            </p>
            <p className="font-semibold mt-2">This free gift makes it <strong>eeaaasy</strong> for you.</p>
            <p className="text-sm italic">Like, stupidly easy.</p>
            <p className="font-semibold mt-2">Just fill in the blanks.</p>
          </div>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg border-2 border-green-400">
          <p className="font-bold text-lg">The truth is, with just these two free gifts, you can start your own business in less than 7 days:</p>
          <p className="mt-4">
            Pick one of the 6 product categories people love to buy, get a product or start a service, use the advertising templates to create your ads, and ….
          </p>
          <p className="text-2xl font-bold text-center my-4">Voila!</p>
          <p className="text-center font-semibold">You're in business.</p>
          <p className="text-center text-2xl mt-2">Congratulations in advance 🎉</p>
          <p className="text-center text-sm italic mt-2">(Now don't mess it up.)</p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          "Okay, Okay, I Can See This Book Is Valuable. Cut To The Chase. How Much?"
        </h2>

        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p>If you look at most online business courses, you'll see that they cost an average of <strong>₦100,000</strong>.</p>
            <p className="italic mt-1">That's someone's full month salary mehhn.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p>
              Even if you decide to study business in a business school, you'll pay an average of <strong>2 million naira</strong> (or even double or triple) and you <strong>still</strong> will NEVER get the massively valuable information you'll get in this book.
            </p>
            <p className="italic mt-1">(Plus you'll have to sit through boring lectures from lecturers who've never run a business. Hard pass.)</p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-semibold">However, you'll not be paying that much because I want to make this information accessible to as many people as possible.</p>
            <p className="mt-4">And because when people start businesses:</p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>…they're able to <strong>pay their bills</strong> with confidence</li>
              <li className="italic">(Not "cheat" their bills. What does that even mean? I kept it because it was funny.)</li>
              <li>…they secure better quality partners</li>
              <li className="italic">(Money is attractive. Sorry, but it's true.)</li>
              <li>…they're free from fear that they may lose their job</li>
              <li>…they live in better quality places</li>
              <li>…they're able to take care of their loved ones</li>
            </ul>
          </div>

          <div className="text-center p-8 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg">
            <p className="text-xl mb-4">So, no, you're not going to pay ₦2 million.</p>
            <p className="text-xl mb-4">You're not going to pay ₦100,000.</p>
            <p className="text-xl mb-4">You won't pay ₦50,000.</p>
            <p className="text-4xl font-bold mt-6">₦8,999</p>
            <p className="text-lg mt-2">You can get <strong>The Small Business Playbook</strong> right now for just <strong>₦8,999</strong>.</p>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-yellow-50">
        <h2 className="text-3xl font-bold mb-8 text-center">
          "But What If This Doesn't Work For Me? Uh… uh… I'm Scared"
        </h2>

        <div className="space-y-6">
          <p>Look, this book is a product of over <strong>5 years</strong> of learning and mentoring under top entrepreneurs all over the world.</p>
          <p>Plus, over <strong>360 days</strong> of writing, editing, and fine-tuning to make it not only interesting to read, but also easy to understand and act on.</p>

          <div className="bg-white p-6 rounded-lg border-2 border-green-400">
            <p className="font-bold text-lg">
              However, because I'm <strong>soooo</strong> confident this works, I'm going to do something crazy so you can relaaaaaax…
            </p>
            <p className="mt-4 font-semibold">
              Grab your copy of the e-book, read it, and if you don't like it, then just email me and I'll give you all your money back.
            </p>
            <p className="mt-2">In fact, I'll write you a full apology letter for wasting your time.</p>
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
              

          <div className="bg-red-50 p-6 rounded-lg border border-red-200">
            <p className="font-semibold">I'm taking a risk by doing this…</p>
            <p>I can't make you give the e-book back.</p>
            <p>It's impossible.</p>
            <p>I can't get it back from your computer or phone when you download this ebook.</p>
            <p className="mt-4 font-bold">
              So you could just order the ebook, ask for a refund and rip me off, but I'm going to trust that you're not going to do that to me.
            </p>
            <p className="italic mt-2">(Please don't be that person. That person sucks.)</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto bg-gray-900 text-white">
        <h2 className="text-3xl font-bold mb-8 text-center">
          "Okay…Okay. I Promise Not To Rip You Off. So, How Do I Get The Book?"
        </h2>

        <div className="space-y-6 text-lg">
          <p>You're at a point of decision.</p>
          <p>You can either continue down the path of least resistance, the path you have already been traveling.</p>
          <p>Or you can choose the road less traveled.</p>
          <p>The path of least resistance will probably result in you getting the same outcome you've always received.</p>
          <p className="font-semibold">
            But if you want something different to happen, if you want to change the direction of your finances, you're going to have to do something different.
          </p>
          <p>Make a new choice and pursue your new outcome.</p>
        </div>

        <div className="bg-blue-900 p-6 rounded-lg mt-8">
          <p>Click the button below, you'll be taken to Selar (a secure site that uses Paystack — the same payment system used by Jumia and other big companies in Nigeria).</p>
          <p className="mt-2">Fill the order form, make your payment.</p>
          <p className="font-semibold mt-4">You'll immediately get your unique download link as soon as payment is complete.</p>
          <p>It takes less than 2 minutes to complete your order.</p>
          <p className="italic mt-2">(Longer if you're still thinking about it. Stop thinking. Just do it.)</p>
        </div>

        <div className="text-center mt-8">
        <Link 
           href="https://selar.com/small-biz">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 transform hover:scale-105">
            ORDER THE SMALL BUSINESS PLAYBOOK NOW
          </button>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Still Here? Okay, A Few More Things...</h2>

        <div className="space-y-8">
          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="font-semibold mb-4">"I'm still not sure if this is for me. Can you tell me who this book is for?"</p>
            <p className="italic mb-4">Sigh.</p>
            <p className="italic mb-4">Fine.</p>
            <p>
              Before you buy The Small Business Playbook, I want you to put your hand on your heart and repeat after me:
            </p>
            <p className="font-bold text-red-600 text-center my-4">(DO NOT SKIP THESE)</p>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded border">
                <p className="font-semibold">"I want to start a profitable business."</p>
                <p className="text-sm mt-1">
                  This book is designed for people who are <strong>serious</strong> about starting a business. Not for people who just want to "think about it someday". If you're one of those people, don't buy this. Save your money for more data to scroll Instagram.
                </p>
              </div>

              <div className="bg-white p-4 rounded border">
                <p className="font-semibold">"I understand this is not a get-rich-quick scheme."</p>
                <p className="text-sm mt-1">
                  The Small Business Playbook is not a magic formula that will make you a millionaire overnight. It's a long-term investment in building a real, sustainable business. Don't buy it with your last remaining month's rent money. (Seriously. Pay your rent first.)
                </p>
              </div>

              <div className="bg-white p-4 rounded border">
                <p className="font-semibold">"I am willing to actually READ the book and take action."</p>
                <p className="text-sm mt-1">
                  The information in this book is useless if you don't implement it. You need to actually sit down, read it, and apply what you learn. If you already have a dozen other unfinished business books gathering dust, maybe deal with those first. Or better yet, throw them away and get this one instead.
                </p>
              </div>

              <div className="bg-white p-4 rounded border">
                <p className="font-semibold">"I understand there ARE refunds if the book doesn't work for me."</p>
                <p className="text-sm mt-1">
                  Yes, I'm serious about the guarantee. If you read the book and don't like it, email me and I'll refund your money. But I'm trusting you not to be that person who downloads, refunds, and keeps the book. Don't be that person. That person is going to hell.
                </p>
              </div>
            </div>

            <p className="mt-6 font-semibold">Could you say all those things without hyperventilating?</p>
            <p className="font-bold mt-2">Then click the button and get started.</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="font-semibold mb-2">"But what if I have more questions?"</p>
            <p>Then email me.</p>
            <p>I'm a real person.</p>
            <p>I'll respond.</p>
            <p className="italic">(Probably.)</p>
          </div>

          <div className="bg-gray-100 p-6 rounded-lg">
            <p className="font-semibold mb-2">"This sales page was kinda long and I skimmed it. Can you recap the offer?"</p>
            <p className="italic mb-4">lol, you do not have the attention span required to run a business. Go home.</p>
            <p>Otherwise, you can pick up The Small Business Playbook here:</p>
          </div>
        </div>

        <div className="text-center mt-8">
        <Link 
           href="https://selar.com/small-biz">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition duration-300 transform hover:scale-105">
            ORDER THE SMALL BUSINESS PLAYBOOK NOW
          </button>
          </Link>
        </div>
      </section>
    </div>
  );
}