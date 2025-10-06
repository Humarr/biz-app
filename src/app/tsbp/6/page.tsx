/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

export default function SmallBusinessPlaybookPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header Section */}
      <header className=" py-20 px-4">
      {/* <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20 px-4"> */}
        <div className="max-w-4xl mx-auto text-center">
          {/* <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Does God Want You to Be Rich?
          </h1> */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-red-600">
            "Ex-Teacher Reveals How You Can Start Your Own Extremely Profitable Business In the Next 30 Days"
          </h2>
          <p className="text-lg md:text-xl font-medium">
            Without Huge Capital Or Quitting Your Job…Yet
          </p>
        </div>
      </header>

      {/* Divider */}
      <div className="border-t border-b border-gray-300 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-lg font-semibold text-gray-800">
            If you can read this, you can surely start a profitable business.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Opening Section */}
        <section className="mb-16">
          <p className="text-lg text-gray-700 mb-6">
            Dear friend,
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Would you like to own your own profitable business?
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Have you ever wondered how successful entrepreneurs spot profitable business opportunities?
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Do you want to know how they turned opportunities into successful, profitable and sustainable businesses (and how you can do it, too)?
          </p>
          <p className="text-lg text-gray-700 mb-6">
            If you answered yes to any of the questions, I have good news for you.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Because you can quit your job in the next 30 days to start an extremely profitable business starting with just one hundred thousand naira if you act on the information in this letter.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            But first, why should you listen to me?
          </h2>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            I Would Like To Tell You A Story About Myself
          </h3>
          <p className="text-lg text-gray-700 mb-6">
            I promise to make it short.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            In 2023, after I lost countless interviews that could literally change my life because I didn't have money for data, I decided to try another way to make money without relying on interviews.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            So, I decided to start a business. 
          </p>
          <p className="text-lg text-gray-700 mb-6">
            I attended a webinar on how to sell in bulk.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            It was during my time running this business that I learnt a lot about starting and running a business. I mentored under successful entrepreneurs and I've seen their strategies.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-500 my-8">
            <p className="text-lg text-gray-700 mb-4">
              The strategies and frameworks they use to find good business opportunities,
            </p>
            <p className="text-lg text-gray-700 mb-4">
              ….how to validate them to see which of those opportunities will make me the most money, 
            </p>
            <p className="text-lg text-gray-700 mb-4">
              …how to set good prices using buyer psychological triggers that allows you to charge well, while still making customers happy they got a bargain
            </p>
            <p className="text-lg text-gray-700 mb-4">
              …how to advertise for maximum profitability to get customers
            </p>
            <p className="text-lg text-gray-700">
              …how to use human psychological techniques to turn our customers into free promoters for my business
            </p>
            <p className="text-lg text-gray-700 mt-4">
              …and so many other things I've mastered over the years.
            </p>
          </div>
        </section>

        {/* Book Introduction */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg border border-green-200">
            <p className="text-lg text-gray-700 mb-6">
              I know right now, you can't wait to discover all these secrets.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              And that's why I've loaded all my knowledge and experience together in <span className="font-bold text-green-700">The Small Business Playbook</span>. 
            </p>
            <p className="text-xl font-bold text-gray-900 text-center">
              The only business guide you'll ever need to start an extremely profitable business.
            </p>

            <div className="my-6 flex justify-center">
              <Image
                src="/tsbp/cover.png"
                alt="The small business playbook book cover"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>
  
            <p className="text-lg text-gray-700 mt-6">
              Look, I wrote this book with you in mind and I've carefully curated it so that it's not only loaded with valuable information, but also interesting to read, simple to act on, and you may start to see results in as little as 14 days after you start acting on the information in the book.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              But don't take my word for it. 
            </p>
            <p className="text-lg font-semibold text-gray-900 text-center mt-6">
              Here's a little taste of what you'll discover in the book:
            </p>
          </div>
        </section>

        {/* Book Benefits Section */}
        <section className="mb-16">
          <div className="bg-white border-2 border-gray-200 rounded-lg p-8 shadow-lg">
            <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded">
              <p className="text-lg font-semibold text-gray-900 mb-2">
                Asking your friends and family what business you should start is a good strategy, right? 
              </p>
              <p className="text-lg font-bold text-red-600">
                Wrong! 
              </p>
              <p className="text-lg text-gray-700 mt-2">
                We'll explain why when you order this book.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  How to <span className="text-blue-600">effortlessly generate crazily good business ideas</span> and know instantly which of them can make you rich.
                </h4>
                <p className="text-lg text-gray-700">
                  The sure-fire foundations of any business:
                </p>
                <ul className="list-disc list-inside mt-2 space-y-2 text-gray-700">
                  <li className="text-lg">The "make things less awful" technique</li>
                  <li className="text-lg">The "make things more awesome" technique</li>
                </ul>
              </div>

              <div className="p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded">
                <p className="text-lg font-bold text-gray-900">
                  And there's more...
                </p>
              </div>

              <div>
                <h4 className="text-xl font-bold text-red-600 mb-4">
                  The Deadly Advertising Sins That Keep You Broke
                </h4>
                <p className="text-lg text-gray-700 mb-4">
                  The one thing you should <span className="font-bold">NEVER</span> do when advertising your business.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Why identifying the people you want to advertise to is very important (and why most business gurus have this information wrong).
                </p>
                <p className="text-lg text-gray-700">
                  The <span className="font-bold">8 commandments of advertising</span> for small businesses (if you get this wrong, people will never buy from you. Plus, you'll LOSE money).
                </p>
              </div>

              <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                <p className="text-lg font-bold text-gray-900">
                  That's not all...
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 mb-4">
                  The Business Analyzer Framework for validating business ideas you'll be able to discover when you read this book (don't use this, and you'll likely pick the least profitable of all the business ideas you'll generate).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The reason why your products should be <span className="font-bold">affordable, not cheap</span> (and how you can do it).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  How to price your products for maximum profitability without losing customers.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What <span className="font-bold">NEVER</span> to do when starting out (unless you want to go broke).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What you should do to avoid getting "eaten up" by bigger competitors.
                </p>
                <p className="text-lg text-gray-700">
                  The sneaky <span className="font-bold">"David and Goliath" trick</span> you can use to "steal" customers from your competitors.
                </p>
              </div>

              <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded">
                <p className="text-lg font-bold text-gray-900">
                  Wait, there's more value coming...
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 mb-4">
                  The truth about being #1 in your business category (and how to achieve it).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What <span className="font-bold">NEVER</span> to do when running your business (Do this, and your customers will forget and dump you fast fast!).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Do you know the <span className="font-bold">4 psychological triggers</span> in people's minds that make them buy? (Use any of them and you can almost always never run out of new customers).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The sneaky tricks to get your customers promote your business everywhere they go like MTN without paying them a kobo.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The reasons why word of mouth is very important for the survival and profitability of your business.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Do you know people trust what other people say about your business more than what you say? (You can use this to your advantage. See how when you get the book).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The sneaky little ways you can use low prices to attract customers <span className="font-bold">without losing profits</span>.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What you should avoid when you start making money in your business.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  The psychological reason why people buy, and how you can use it to increase your prices without losing customers (In fact, follow it, and they'll still snub your competitors to buy from you!).
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  What to <span className="font-bold">NEVER</span> do when starting out (Do this, and your business will surely crash).
                </p>
              </div>

              <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded">
                <p className="text-lg font-bold text-gray-900">
                  But wait, we're just getting started...
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  You think starting a business is risky, right? 
                </p>
                <p className="text-lg font-bold text-orange-600">
                  Wrong! 
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  We'll explain why having a job is much much more risky.
                </p>
              </div>

              <div>
                <p className="text-lg text-gray-700 mb-4">
                  Most businesses fail in their first 6 months. There are steps you can take to prevent this from happening.
                </p>
                <p className="text-lg text-gray-700">
                  The reasons why people are not looking for low prices (and what they want instead).
                </p>
              </div>

              <div className="p-4 bg-red-50 border-l-4 border-red-500 rounded text-center">
                <p className="text-xl font-bold text-gray-900">
                  And many, Many, MAny, MANy, <span className="text-red-600">MANY</span> more!
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-blue-50 p-6 rounded-lg border border-blue-200">
            <p className="text-lg text-gray-700">
              You see, you're getting a massive ocean of valuable, quality information.
            </p>
            <p className="text-lg text-gray-700 mt-4">
              And I know that by the time you finish reading the book, you'll have all the information you'll ever need to start and grow a profitable business and making over 3X your current income.
            </p>
          </div>
        </section>

        {/* Free Gifts Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            But That's Not All You're Getting
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            If you order this book today, I'm going to give you <span className="font-bold">TWO juicy gifts FREE!</span>
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <h3 className="text-2xl font-bold text-green-800 mb-4">
                GIFT #1: The 6 kinds of products people love to buy.
              </h3>
              <p className="text-lg text-gray-700">
                The fact is, it doesn't matter the condition of the economy. It doesn't matter whether the country is hard…these 6 categories of products will still sell like mad if you do it right.
              </p>
              <p className="text-lg text-gray-700 mt-4 font-semibold">
                (And no, it's not food, it's not clothes, and it's not water… eeew!)
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Don't worry, you'll discover them, know which of them fits you, and how you can get started when you grab your copy of this book.
              </p>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg border-2 border-purple-300">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                GIFT #2: The Advertising Templates Toolkit.
              </h3>
              <p className="text-lg text-gray-700">
                Here, you'll discover different kinds of advertising templates you can use to advertise your products and services. 
              </p>
              <p className="text-lg text-gray-700 mt-4">
                Remember the 8 commandments of advertising I said you'll get when you order this book? 
              </p>
              <p className="text-lg text-gray-700 mt-4 font-bold">
                This free gift makes it <span className="text-purple-600">eeaaasy</span> for you.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-lg border border-green-300">
            <p className="text-lg text-gray-700 mb-4">
              The truth is, with just these two free gifts, you can start your own business in less than 7 days: 
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Start with one of the 6 product categories people love to buy, get a product or start a service, use the advertising templates to create advertising material, and …. 
            </p>
            <p className="text-2xl font-bold text-center text-green-700 mb-4">
              Voila! 
            </p>
            <p className="text-xl font-bold text-center text-gray-900 mb-4">
              You're in business. 
            </p>
            <p className="text-2xl font-bold text-center text-blue-600">
              Congratulations in advance 🎉 🎉 🎉 
            </p>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="mb-16">
          <div className="bg-gray-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center mb-8">
              "Okay, Okay, I Can See This Book Is Soooo Valuable, Instructive, Informative, Interesting, Remarkable, Unique, Spe-... Cut To The Chase. How Much Is The Small Business Playbook?"
            </h2>
            
            <div className="space-y-6">
              <p className="text-lg">
                If you look at most online business courses, you'll see that they cost an average of ₦100,000. 
              </p>
              <p className="text-lg font-semibold text-yellow-300">
                That's someone's full month salary mehhn.
              </p>
              <p className="text-lg">
                Even if you decide to study business in a business school, you'll pay an average of 2 million naira (or even double or triple) and you still will <span className="font-bold">NEVER</span> get the massively valuable information you'll get in this book.
              </p>
              <p className="text-lg">
                However, you'll not be paying that much because I want to make this information accessible to as many people as possible.
              </p>
              <p className="text-lg">
                And because when people start businesses
              </p>
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>…they're able to <span className="font-bold">chest their bills</span> with confidence,</li>
                <li>…secure better quality partners</li>
                <li>…you'll also be free from fear that you may lose your job</li>
                <li>…you'll live in better quality places</li>
                <li>…you'll be able to take care of your loved ones</li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <p className="text-xl mb-4">So, no, you're not going to pay ₦2 million.</p>
              <p className="text-xl mb-4">You're not going to pay ₦100,000.</p>
              <p className="text-xl mb-4">You won't pay ₦50,000.</p>
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-lg inline-block">
                <p className="text-3xl font-bold">
                  You can get <span className="text-white">The Small Business Playbook</span> right now for just <span className="text-yellow-300">6999</span>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Guarantee Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Now, I Know What You're Thinking…
          </h2>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500 mb-8">
            <p className="text-xl font-bold text-gray-900">
              "What If This Doesn't Work For Me? Uh… uh… I'm Scared"
            </p>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-700">
              Look, this book is a product of over 5 years of learning and mentoring under top entrepreneurs all over the world. 
            </p>
            <p className="text-lg text-gray-700">
              Plus, over 360 days of writing, editing, and fine-tuning to make it not only interesting to read, but also easy to understand and act on.
            </p>
            <p className="text-lg text-gray-700">
              However, because I'm <span className="font-bold text-purple-600">soooo</span> confident this works, I'm going to do something crazy so you can relaaaaaax…
            </p>
            
            <div className="bg-green-50 p-6 rounded-lg border-2 border-green-300">
              <p className="text-lg font-bold text-gray-900 text-center">
                Grab your copy of the e-book, read it, and if you don't like it, then just email me and I'll give you all your money back. 
              </p>
              <p className="text-lg text-gray-700 text-center mt-4">
                In fact, I'll write you a full apology letter for wasting your time.
              </p>
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
              
            
            <p className="text-lg text-gray-700">
              I'm taking a risk by doing this…
            </p>
            <p className="text-lg text-gray-700">
              I can't make you give the e-book back. 
            </p>
            <p className="text-lg text-gray-700">
              It's impossible. 
            </p>
            <p className="text-lg text-gray-700">
              I can't get it back from your computer or phone when you download this ebook. 
            </p>
            <p className="text-lg text-gray-700">
              So you could just order the ebook, ask for a refund and rip me off, but I'm going to trust that you're not going to do that to me.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">
              "Okay…Okay. I Promise Not To Rip You Off. So, How Do I Get The Book?"
            </h2>
            
            <div className="space-y-6 text-lg mb-8">
              <p>
                You're at a point of decision. 
              </p>
              <p>
                You can either continue down the path of least resistance, the path you have already been traveling.
              </p>
              <p>
                Or you can choose the road less traveled.
              </p>
              <p>
                The path of least resistance will probably result in you getting the same outcome you've always received.
              </p>
              <p className="font-bold text-xl">
                But if you want something different to happen, if you want to change the direction of your finances, you're going to have to do something different. 
              </p>
              <p className="font-bold text-xl">
                Make a new choice and pursue your new outcome.
              </p>
            </div>

            <div className="space-y-4 text-lg">
              <p>
                Click the button below, you'll be taken to Selar (a secure site that uses Paystack — the same payment system used by Jumia and other big companies in Nigeria).
              </p>
              <p>
                Fill the order form, make your payment.
              </p>
              <p>
                You'll immediately get your unique download link as soon as payment is complete.
              </p>
              <p className="font-bold">
                It takes less than 2 minutes to complete your order.
              </p>
            </div>

            <div className="mt-8">
                <Link 
           href="https://selar.com/small-biz">
           <button
           className="bg-green-500 hover:bg-green-600 text-white font-bold text-2xl py-4 px-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
                ORDER THE SMALL BUSINESS PLAYBOOK NOW
              </button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="space-y-8">
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Still here? A few more things before you go...
              </h3>
              <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  "I'm still not sure if this is for me. Can you tell me who this book is for?"
                </p>
                <p className="text-lg text-gray-700">
                  Okay, look.
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  Before you buy The Small Business Playbook, I want you to put your hand on your heart and repeat after me:
                </p>
                <p className="text-lg font-bold text-red-600 mt-4">
                  (DO NOT SKIP THESE)
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white border-2 border-blue-200 p-6 rounded-lg">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  "I want to start a profitable business."
                </p>
                <p className="text-lg text-gray-700">
                  This book is designed for people who are serious about starting a business. Not for people who just want to "think about it someday". If you're one of those people, purchase at your own risk.
                </p>
              </div>

              <div className="bg-white border-2 border-green-200 p-6 rounded-lg">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  "I understand this is not a get-rich-quick scheme."
                </p>
                <p className="text-lg text-gray-700">
                  The Small Business Playbook is not a magic formula that will make you a millionaire overnight. It's a long-term investment in building a real, sustainable business. Don't buy it with your last remaining month's rent money.
                </p>
              </div>

              <div className="bg-white border-2 border-purple-200 p-6 rounded-lg">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  "I am willing to actually READ the book and take action."
                </p>
                <p className="text-lg text-gray-700">
                  The information in this book is useless if you don't implement it. You need to actually sit down, read it, and apply what you learn. If you already have a dozen other unfinished business books gathering dust, maybe deal with those first.
                </p>
              </div>

              <div className="bg-white border-2 border-orange-200 p-6 rounded-lg">
                <p className="text-lg font-bold text-gray-900 mb-2">
                  "I understand there ARE refunds if the book doesn't work for me."
                </p>
                <p className="text-lg text-gray-700">
                  Yes, I'm serious about the guarantee. If you read the book and don't like it, email me and I'll refund your money. But I'm trusting you not to be that person who downloads, then ask for refunds just to rip me off. Don't be that person.
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <p className="text-lg font-bold text-gray-900 text-center">
                  Could you agree to all those things without second-guessing? 
                </p>
                <p className="text-lg font-bold text-green-600 text-center mt-2">
                  Then click the button and get started.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-lg font-bold text-gray-900">
                  "But what if I have more questions?"
                </p>
                <p className="text-lg text-gray-700 mt-2">
                  Then email me. 
                </p>
                <p className="text-lg text-gray-700">
                  I'm a real person. 
                </p>
                <p className="text-lg text-gray-700">
                  I'll respond.
                </p>
                <p className="text-lg text-gray-700 italic">
                  (Probably.)
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-lg font-bold text-gray-900">
                  "This sales page was kinda long and I skimmed it. Can you recap the offer?"
                </p>
                <p className="text-lg font-bold text-red-600 mt-2">
                  lol, you do not have the attention span required to run a business. Go home.
                </p>
                <p className="text-lg text-gray-700 mt-4">
                  Otherwise, you can pick up The Small Business Playbook here:
                </p>
              </div>
            </div>

            <div className="text-center">
                   <Link 
           href="https://selar.com/small-biz">
           <button
           className="bg-green-500 hover:bg-green-600 text-white font-bold text-xl py-4 px-8 rounded-lg shadow-lg transition duration-300">
                ORDER THE SMALL BUSINESS PLAYBOOK NOW
              </button>
            </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}