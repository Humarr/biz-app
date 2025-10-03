// app/page.tsx
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-7xl font-bold text-center mb-8 leading-tight">
          PICTURE THIS:
        </h1>
        <p className="text-4xl md:text-5xl text-center font-bold">
          You are tired of job and want to start a business.
        </p>

        <div className="text-lg leading-relaxed space-y-6">
          <p className="">It&apos;s 11:47 PM on a Tuesday night.</p>
          <p>You&apos;re lying in bed, staring at your phone screen.</p>
          <p>
            Your savings account is open in one tab. Your &quot;business
            ideas&quot; note is open in another.
          </p>
          <p>
            You&apos;ve been thinking about starting a business for… what, six
            months now? A year?
          </p>
          <p>Maybe longer.</p>
          <p>
            Everyone around you seems to be making money from something. Your
            guy from secondary school is selling haircare products online. Your
            cousin just opened a shawarma spot. Even that your neighbor who can
            barely spell is running some kind of import business.
          </p>
          <p>Meanwhile, you?</p>
          <p className="text-2xl font-bold">
            You&apos;re still &quot;planning.&quot;
          </p>
          <p className="text-xl font-semibold">
            Still &quot;researching.&quot;
          </p>
          <p className="text-xl font-semibold">
            Still waiting for the &quot;right time.&quot;
          </p>
          <p>And then... you have that thought again.</p>
          <p>(You know the one.)</p>
          <p className="text-2xl font-bold italic">
            &quot;What if I pick the wrong business... and lose
            everything?&quot;
          </p>
          <p>Your heart does that thing where it drops into your stomach.</p>
          <p>Because you know how this plays out in Nigeria.</p>
          <p>You&apos;ve seen it happen to too many people.</p>
          <p>
            Someone gets hyped about a business. Takes their savings (or worse,
            borrows money from family). Goes all in.
          </p>
          <p>Opens the shop. Launches the service. Buys the inventory.</p>
          <p>And then…</p>
          <p className="text-xl font-semibold">Nothing.</p>
          <p>No customers. No sales. Just crickets.</p>
          <p>
            Three months later, they&apos;re quietly shutting down. Making up
            excuses. Avoiding the relatives who &quot;invested.&quot; Going back
            to looking for jobs.
          </p>
          <p>
            And you&apos;re thinking:{" "}
            <span className="font-bold">
              &quot;I cannot let that be me.&quot;
            </span>
          </p>
          <p className="text-2xl">😰</p>
        </div>

        <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400">
          <p className="text-lg font-semibold">
            If that fear made your chest tighten just now…{" "}
            <span className="line-through">
              this might be the most important letter you&apos;ll ever read.
            </span>
          </p>
        </div>

        <div className="mt-8 text-lg leading-relaxed">
          <p>I mean, uh, I… have good news for you.</p>
          <p className="italic">
            *Phew, nearly went full motivational speaker mode there.*
          </p>
          <p>
            Because on this page, I&apos;m going to show you how you can avoid
            becoming another Nigerian business statistic…
          </p>
          <p className="text-xl font-semibold">
            …by revealing the <em>actual system</em> that separates businesses
            that print money from businesses that drain your account.
          </p>
          <p className="mt-6 font-semibold">Sound good?</p>
          <p className="mt-8">Well, here&apos;s the deal:</p>
          <p className="mt-4">I&apos;ve created an e-book called…</p>
        </div>
      </section>

      {/* E-book Introduction */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              THE SMALL BUSINESS PLAYBOOK
            </h2>

            <div className="my-6 flex justify-center">
              <Image
                src="/tsbp/cover.png"
                alt="The small business playbook book cover"
                width={600}
                height={300}
                className="rounded-lg"
              />
            </div>

            <p className="text-lg text-gray-700">
              And if I lost all my business knowledge tomorrow and had to start
              from scratch in Nigeria with ₦50,000 in my pocket…
            </p>
            <p className="text-lg text-gray-700 font-semibold mt-2">
              This is the FIRST thing I would want to have in my hands (for
              reasons you will see shortly).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="text-lg font-semibold mb-4">
              And I am not alone in that sentiment.
            </p>
            <p className="text-gray-600 mb-4">
              Here&apos;s what happened when someone who was &quot;just
              planning&quot; finally got their hands on it (drumroll):
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-700">
              &quot;I&apos;ve been sitting on a business idea for almost 2
              years. TWO YEARS. After reading chapter 1, I realized I was about
              to make the same mistake that killed my brother&apos;s provision
              store in 2019. I changed my entire approach in 3 days. First sale
              came in 8 days later.&quot;
              <footer className="mt-2 font-semibold">
                — Chidinma O., Enugu
              </footer>
            </blockquote>

            <p className="mt-4 font-semibold">
              Neat, hey? But hang on. Before I tell you what The Small Business
              Playbook is about, a word of warning:
            </p>

            <ul className="mt-4 space-y-2 text-gray-700">
              <li>
                • It is specifically for Nigerian markets. (If you&apos;re
                trying to sell to Americans or Europeans, this won&apos;t help
                you.)
              </li>
              <li>
                • Also, it is not &quot;motivational&quot; or full of
                &quot;believe in yourself&quot; nonsense. (In fact, I literally
                tell you markets where you will probably fail—and which ones are
                sitting there waiting to make you money.)
              </li>
              <li>
                • And WORST of all… it will make you question almost everything
                those &quot;business coaches&quot; on Instagram have been
                telling you.
              </li>
            </ul>

            <p className="mt-6 font-semibold">
              All right. That&apos;s the bad news.
            </p>
            <p className="mt-4">So… what is this e-book about?</p>
            <p className="font-semibold">
              And why would I read it before trying to start any business in
              Nigeria?
            </p>
            <p className="mt-4">
              Well, as the table of contents hints at, The Small Business
              Playbook is about…
            </p>
            <p className="text-xl font-semibold mt-4">
              …the <em>actual system</em> for starting and running a profitable
              business in Nigeria.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <p className="text-lg font-semibold mb-6">
          &quot;Huh?&quot; you say in disgust. &quot;A system? That&apos;s not
          my problem. I just need a good business idea!&quot;
        </p>
        <p className="text-lg mb-6">Yeah… right.</p>
        <p className="text-lg mb-6">
          Everyone thinks all they need is a &quot;good idea.&quot;
        </p>
        <p className="text-lg font-semibold mb-8">But listen:</p>

        <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
          <p className="text-lg font-semibold">
            If you feel like you&apos;re guessing... or scared you&apos;ll pick
            the wrong business and lose your money... odds are, it&apos;s
            because you don&apos;t know how to choose a winner in the first
            place.
          </p>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            Seriously. If you&apos;re not feeling confident about your business
            idea…
          </p>
          <p>
            It means… you don&apos;t know how to spot which markets are hungry
            and which ones will leave you begging for customers.
          </p>
          <p>
            It means… you don&apos;t know how to make people actually BUY from
            you instead of just saying &quot;I&apos;ll think about it&quot; or
            &quot;send your account number&quot; (and then ghosting you).
          </p>
          <p>
            It means… you don&apos;t actually know if your price is too high,
            too low, or if you&apos;re accidentally positioning yourself as the
            &quot;cheap option&quot; that nobody respects.
          </p>
          <p>
            And it means… you might even waste money on advertising that does
            absolutely nothing except drain your account.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
          <p className="text-lg font-semibold">
            So, forget watching yet another &quot;business tips&quot; video on
            YouTube.
          </p>
          <p className="mt-4">
            If you still feel like you&apos;re flying blind, even when
            you&apos;ve already watched a bunch of business content… fix the
            ROOT PROBLEM:{" "}
            <span className="font-bold">you don&apos;t have a system.</span>
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            And admit it: right now, you&apos;re basically making this up as you
            go along. Right?
          </p>
          <p>Well, let me flex a little and show my market knowledge…</p>
          <p>
            …by talking about what I think you&apos;re actually doing right now.
          </p>
          <p>
            (This is what I&apos;ve seen from most aspiring entrepreneurs in
            Nigeria, so maybe not every point is you… but I reckon most will
            be.)
          </p>
          <p className="text-xl font-semibold">
            You tell me how this sounds, okay?
          </p>
        </div>
      </section>

      {/* Current Situation Breakdown */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-lg mb-6">So you want to start a business.</p>
            <p className="text-lg mb-6">
              If you&apos;re like most people, here&apos;s what you do…
            </p>
            <p className="text-lg font-semibold mb-4">
              You start with the things everyone says you &quot;should&quot; do,
              like…
            </p>

            <ul className="space-y-6 text-lg">
              <li>
                <span className="font-semibold">
                  • Pick something you&apos;re passionate about.
                </span>{" "}
                That&apos;s what they all say, right? So you think about your
                hobbies... but wait, how do you even make money from
                &quot;watching football&quot; or &quot;arguing on Twitter&quot;?
                Hm. So much for that advice.
              </li>
              <li>
                <span className="font-semibold">
                  • Next, you try to &quot;copy&quot; what&apos;s working.
                </span>{" "}
                You see someone selling cakes on Instagram. Okay, you&apos;ll do
                cakes too! But… there are already 47 cake vendors in your area.
                And they all have better photos than you. And you don&apos;t
                even know how to price your cakes. Oops.
              </li>
              <li>
                <span className="font-semibold">• Maybe start small?</span>{" "}
                Everyone says &quot;start small.&quot; But... small how? Small
                capital? Small customers? Small profits? Nobody actually
                explains what &quot;small&quot; means. So you just... stay
                stuck.
              </li>
              <li>
                <span className="font-semibold">
                  • You search &quot;business ideas in Nigeria.&quot;
                </span>{" "}
                Google gives you the same tired list: &quot;poultry farming,
                blogging, dropshipping, event planning.&quot; You&apos;ve seen
                this list 100 times. You&apos;re getting a bit desperate now.
                None of this feels <em>real.</em>
              </li>
            </ul>

            <p className="mt-8 text-lg italic">
              *Sigh.* Somehow, it&apos;s not as easy as that business seminar
              made it look.
            </p>
          </div>
        </div>
      </section>

      {/* Sales Struggle Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <p className="text-lg mb-8">
          And that&apos;s not to mention{" "}
          <span className="font-semibold">actually making sales...</span>
        </p>

        <div className="space-y-6 text-lg">
          <p>
            You have a vague idea that you need to &quot;post on social
            media&quot; and &quot;tell people what you sell.&quot;
          </p>
          <p>So you make a post.</p>
          <div className="bg-gray-100 p-4 rounded border-l-4 border-gray-400">
            <p className="italic">
              &quot;Hello guys! I&apos;m now selling [product]. Affordable
              prices. DM for orders. God bless you.&quot;
            </p>
          </div>
          <p>You wait.</p>
          <p>And wait.</p>
          <p>And… nothing.</p>
          <p>Maybe 3 likes from your cousins.</p>
          <p>
            Meanwhile, that other guy who started the same business last month
            is posting screenshots of bank alerts.
          </p>
          <p className="text-xl font-semibold">
            What is he doing that you&apos;re not?!?
          </p>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <p className="text-lg font-semibold">
            And your &quot;business plan&quot; is basically...
          </p>
          <p className="text-2xl font-bold text-center mt-4">
            &quot;Hope people buy.&quot;
          </p>
        </div>

        <div className="mt-12 space-y-4 text-lg">
          <p className="font-semibold">You have no idea:</p>
          <ul className="space-y-2 ml-6">
            <li>• How to make people actually want what you&apos;re selling</li>
            <li>
              • Why some businesses get customers immediately and others
              struggle for months
            </li>
            <li>
              • How to price without feeling like you&apos;re either ripping
              people off or working for free
            </li>
            <li>• When to reinvest and when to chop your money</li>
            <li>• How to advertise without sounding like a desperate beggar</li>
          </ul>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            Oh, and you&apos;ve heard people say you need to{" "}
            <span className="font-semibold">
              &quot;know your target market&quot;
            </span>
            ...
          </p>
          <p>
            …but you have no idea what that actually <em>means.</em>
          </p>
          <p>
            Who is your target market? &quot;Everybody&quot;? &quot;People who
            need [product]&quot;? &quot;Nigerians&quot;?
          </p>
        </div>

        <div className="mt-12 bg-white p-6 rounded-lg border border-gray-200">
          <p className="text-lg font-semibold mb-4">
            And let&apos;s be honest:
          </p>
          <p className="text-lg">
            <span className="font-semibold">
              You don&apos;t really want to spend 6 months &quot;learning
              business&quot; from some expensive course.
            </span>
          </p>
          <p className="mt-4">
            Really. All you want is something you can read in a weekend and
            start using on Monday.
          </p>
        </div>

        <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6">
          <p className="text-lg font-semibold">
            And then there&apos;s the biggest question of all…
          </p>
          <p className="text-2xl font-bold mt-4">
            &quot;How do I know this business will actually work… BEFORE I waste
            my money on it?&quot;
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            You stare at your savings account and wonder which business idea
            you&apos;re supposed to pick…
          </p>
          <p>So you just keep thinking! 🤷♂️</p>
          <p>
            You keep accumulating more &quot;ideas,&quot; never sure if
            you&apos;ve actually got a winner, or when you can stop planning and
            start earning.
          </p>
          <p>And when you DO start, and launch your business…</p>
          <p>You&apos;re not sure if customers will actually show up.</p>
          <p>
            Because you didn&apos;t actually know HOW to validate your idea
            before spending money on it.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
          <p className="text-xl font-semibold">
            No wonder you&apos;re still &quot;planning.&quot;
          </p>
          <p className="mt-4 text-lg">
            And no wonder every time someone asks &quot;how&apos;s your
            business?&quot;…
          </p>
          <p className="mt-2 text-lg">
            …you fear having to admit you haven&apos;t even started yet.
          </p>
        </div>
      </section>

      {/* Bad Advice Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg mb-8">
            Don&apos;t worry though! There are plenty of &quot;business
            coaches&quot; out there, full of HELPFUL (🙄) tips like:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold">
                • &quot;Just start! Stop overthinking!&quot;
              </p>
              <p className="mt-2 text-gray-600">
                Great. So you should just pick any random business and hope it
                works? What could go wrong? 🙃
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold">
                • &quot;You need passion and consistency!&quot;
              </p>
              <p className="mt-2 text-gray-600">
                Okay, but... passion doesn&apos;t pay for restock. And
                consistency in the wrong business just means you&apos;re
                consistently losing money.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold">
                • &quot;Model successful businesses!&quot;
              </p>
              <p className="mt-2 text-gray-600">
                Cool. Except the businesses you&apos;re &quot;modeling&quot;
                have capital, connections, and years of experience that you
                don&apos;t have. But sure, just &quot;model&quot; them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold">
                • &quot;Post every day on social media!&quot;
              </p>
              <p className="mt-2 text-gray-600">
                Right. Post what, exactly? &quot;Good morning, buy from
                me&quot;? That&apos;s not marketing, that&apos;s begging.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold">
                • &quot;Attend this seminar! Buy this course! Join this
                mentorship!&quot;
              </p>
              <p className="mt-2 text-gray-600">
                Which costs ₦50,000 minimum and is just 3 hours of a guy telling
                you to &quot;believe in yourself&quot; and &quot;take
                action.&quot; Thanks, already knew that.
              </p>
            </div>
          </div>

          <p className="mt-8 text-2xl">😑</p>
          <p className="mt-4 text-lg">Yeah… very helpful.</p>
          <p className="text-lg font-semibold">Top job, guys!</p>
          <p className="text-lg font-semibold">Way to make it easy!</p>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-2xl font-semibold">Well, dear reader—fear not.</p>
          <p className="text-xl mt-4">
            That&apos;s where my new e-book comes in.
          </p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12">
          <p className="text-lg font-semibold">
            I&apos;ve spent 5 years studying under some of Nigeria&apos;s top
            entrepreneurs—the ones who&apos;ve built multiple successful
            businesses, not the Instagram coaches selling courses they&apos;ve
            never tested.
          </p>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            I&apos;ve sat in backrooms watching how they actually pick markets.
            I&apos;ve seen the spreadsheets they use to calculate if an idea
            will work <em>before</em> they touch it. I&apos;ve watched them
            write ads that bring in customers while everyone else is posting
            &quot;DM to order&quot; and getting ignored.
          </p>
          <p>
            And I&apos;ve packaged the entire system into an e-book you could
            finish in a weekend if you really wanted to.
          </p>
          <p>
            And as I mentioned (gee, you sure forget fast), it&apos;s called…
          </p>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            THE SMALL BUSINESS PLAYBOOK
          </h2>
          <p className="text-lg text-gray-700">
            The Small Business Playbook is my original, tested system for
            starting a profitable business in Nigeria—even if you have limited
            capital, zero connections, and you&apos;ve never run a business
            before.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            It is as close as possible as you&apos;ll get to a step-by-step
            playbook for building something that actually makes money.
          </p>
          <p>
            <strong>
              Talk to your market like this. Check their responses for X, Y, and
              Z. Price your product this way. If you&apos;re getting this
              reaction, do that. If sales are slow, try this. Set up your money
              this way so you&apos;re not broke next month.
            </strong>
          </p>
          <p>And—so on. Until your business is running and profitable.</p>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <p className="text-lg font-semibold">
            But here&apos;s the important part:
          </p>
          <p className="mt-4">
            This e-book is NOT just a list of &quot;business ideas&quot; or
            &quot;tips&quot; you&apos;ve already heard.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>I mean, I do show you step-by-step how to do everything.</p>
          <p>
            And I show you in more depth than any business course out there
            (because, frankly, who else is teaching you{" "}
            <em>Nigerian business reality</em> instead of American marketing
            theory?).
          </p>
          <p>
            But that&apos;s nowhere near all I have to show you in this e-book.
          </p>
          <p>
            In fact, it&apos;s probably not even the thing you will find most
            valuable.
          </p>
        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-400 p-6">
          <p className="text-xl font-semibold text-center">
            The reason The Small Business Playbook is different is that it is
            also…
          </p>
          <p className="text-2xl font-bold text-center mt-4">
            The first and only guide that shows you HOW TO VALIDATE YOUR IDEA
            BEFORE YOU SPEND A KOBO ON IT.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>No more guessing… and no more &quot;hoping.&quot;</p>
          <p>Here&apos;s what I mean:</p>
          <p>
            You do NOT have to quit your job, liquidate your savings, and
            &quot;bet everything&quot; on your business before you know if it
            will work.
          </p>
          <p>
            On the other hand… you also can&apos;t just &quot;think about
            it&quot; forever and expect customers to magically appear.
          </p>
          <p>
            But… HOW do you know if your idea is solid? And when to actually
            launch?
          </p>
          <p className="text-xl font-semibold">
            THAT is what is totally unique about this playbook.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
          <p className="text-lg font-semibold">
            The Small Business Playbook gives you a business analyzer framework
            for knowing—before you start—if your idea is a winner or a waste of
            time.
          </p>
          <p className="mt-4">
            And I guarantee you have never seen anyone teach you this
            framework—because I learned it directly from entrepreneurs
            who&apos;ve built 7 and 8-figure businesses in Nigeria.
          </p>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            So… what&apos;s inside the e-book?
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <p className="text-lg mb-6">
              Well, rather than throw in a bunch of hype and promises...
              I&apos;m just going to SHOW you what&apos;s in the e-book.
              Straight from the table of contents.
            </p>
            <p className="text-lg font-semibold mb-8">
              Here is literally everything you&apos;re getting:
            </p>

            {/* Chapter 1 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                CHAPTER 1: Before You Quit Your Job Or Waste Your Savings
              </h3>
              <p className="text-lg mb-4">
                Ever wondered how to pick a business that won&apos;t flop in 3
                months? This chapter covers:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why &quot;great ideas&quot; fill business graveyards
                  </span>
                  —and the one thing every profitable business has that failures
                  don&apos;t (it&apos;s not what you think)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The &quot;Starving Crowd&quot; secret
                  </span>
                  —how to spot markets that are literally begging to throw money
                  at you (while everyone else fights over scraps)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The only 2 ways to find your starving crowd
                  </span>
                  —and exactly where to look for them in Nigeria (page 18)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    A step-by-step process for finding gold
                  </span>
                  —the exact questions to ask that reveal if your idea will make
                  money or leave you broke
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The Business Analyzer Framework
                  </span>
                  —a scoring system that tells you (before you invest) if
                  you&apos;re about to waste your money on a dud (I&apos;ve used
                  this to evaluate 12+ business ideas in a single afternoon)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    How to validate your idea before you spend a single naira
                  </span>
                  —so you&apos;re not &quot;hoping&quot; it works, you{" "}
                  <em>know</em> it works
                </li>
                <li>
                  • <span className="font-semibold">What to do right now</span>
                  —not &quot;someday,&quot; not &quot;when you&apos;re
                  ready.&quot; Today. (Page 39)
                </li>
              </ul>
            </div>

            {/* Chapter 2 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                CHAPTER 2: How to Own Space in Your Customer&apos;s Mind
              </h3>
              <p className="text-lg mb-4">
                Want to know why some businesses are the <em>first</em> name
                people think of—while others get forgotten immediately? This
                chapter reveals:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The &quot;mind domination&quot; strategy
                  </span>
                  —how to position your business so customers think of YOU
                  first, even if competitors are bigger, older, or cheaper
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    4 proven strategies for beating competitors
                  </span>
                  —including the &quot;niche domination&quot; play that lets
                  small businesses crush big players (this is how I&apos;d start
                  if I had ₦50k and no connections)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The David and Goliath technique
                  </span>
                  —how to win against competitors with 10x your budget (and make
                  them look stupid while doing it)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why &quot;being better&quot; is a terrible strategy
                  </span>
                  —and what actually makes customers pick you instead
                </li>
              </ul>
            </div>

            {/* Chapter 3 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                CHAPTER 3: The Advertising Secret That Makes People Buy
                Instantly
              </h3>
              <p className="text-lg mb-4">
                Tired of posting &quot;DM to order&quot; and getting ignored?
                This chapter teaches you:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why 99% of small business advertising is a waste of money
                  </span>
                  —and the one type of advertising that actually brings in sales
                  (most Nigerians have never even heard of this)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The 8 Unbreakable Laws of Direct Response Marketing
                  </span>
                  —follow these, and your ads print money. Break them, and
                  you&apos;re just burning cash.
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    How to make people actually RESPOND to your ads
                  </span>
                  —instead of scrolling past like you don&apos;t exist
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The &quot;instant action&quot; formula
                  </span>
                  —how to make people buy NOW instead of saying &quot;I&apos;ll
                  think about it&quot; (and never coming back)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The exact formula for tiny ad spaces
                  </span>
                  —if you&apos;re advertising on a tight budget (fliers, small
                  posts, etc.), use this (page 74)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why your fliers aren&apos;t working
                  </span>
                  —and the 3 changes that turn fliers from trash into cash
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    How to track what&apos;s working and what&apos;s not
                  </span>
                  —so you&apos;re not guessing which ads are making you money
                </li>
              </ul>
            </div>

            {/* Chapter 4 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                CHAPTER 4: The Unpaid Sales Army—How To Get Others To Promote
                Your Business FOR FREE
              </h3>
              <p className="text-lg mb-4">
                Want customers to bring you MORE customers? This chapter shows
                you:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why word-of-mouth is your secret weapon in Nigeria
                  </span>
                  —and how to engineer it so customers can&apos;t stop talking
                  about you
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    How to turn 1 buyer into 10
                  </span>
                  —without running a single ad (page 81)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The &quot;compound effect&quot; of referrals
                  </span>
                  —and why this is how most successful Nigerian businesses
                  actually grow
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Your exact action plan for getting referrals
                  </span>
                  —not &quot;tips,&quot; not &quot;ideas.&quot; Specific steps.
                </li>
              </ul>
            </div>

            {/* Chapter 5 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-4">
                CHAPTER 5: How to Set a Price That Feels Fair—And Sells Like
                Crazy
              </h3>
              <p className="text-lg mb-4">
                Struggling with pricing? Afraid you&apos;re too expensive—or
                working for peanuts? This chapter breaks down:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The &quot;price drop death loop&quot;
                  </span>
                  —why lowering your prices to &quot;compete&quot; is the
                  fastest way to go broke (and how to escape it)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why people aren&apos;t looking for the lowest price
                  </span>
                  —they&apos;re looking for THIS instead (once you understand
                  this, pricing gets 10x easier)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The psychology of Nigerian buying behavior
                  </span>
                  —how people actually make buying decisions (it&apos;s not what
                  the textbooks say)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    How to set a price that feels fair and sells
                  </span>
                  —a simple system for pricing that makes you money AND makes
                  customers happy
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The art of value stacking
                  </span>
                  —how to make customers feel like they&apos;re getting a crazy
                  deal (even when your price is higher than competitors)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The difference between &quot;affordable&quot; and
                    &quot;cheap&quot;
                  </span>
                  —and why &quot;cheap&quot; is killing your business
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Smart ways to use low prices without losing your shirt
                  </span>
                  —when discounts actually work (and when they destroy your
                  brand)
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    The recession-proof pricing strategy
                  </span>
                  —how to keep selling even when &quot;nobody has money&quot;
                </li>
              </ul>
            </div>

            {/* Chapter X */}
            <div>
              <h3 className="text-2xl font-bold mb-4">
                CHAPTER X: The Next Step Is Simple—MOVE.
              </h3>
              <p className="text-lg mb-4">
                Most people finish books and do... nothing. This chapter makes
                sure that&apos;s not you:
              </p>
              <ul className="space-y-2 text-gray-700 ml-6">
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why starting small is smarter than starting big
                  </span>
                  —and exactly how small to start
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why speed beats perfection
                  </span>
                  —and how &quot;rough action&quot; makes you more money than
                  &quot;perfect planning&quot;
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    When to reinvest vs. when to chop your profits
                  </span>
                  —the balance that keeps you motivated AND growing
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    Why sticking with one business beats jumping around
                  </span>
                  —and how long to stick before you pivot
                </li>
                <li>
                  •{" "}
                  <span className="font-semibold">
                    How to keep the money you make
                  </span>
                  —so you&apos;re not making ₦500k and still somehow broke at
                  the end of the month
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          BUT WAIT. THERE&apos;S MORE.
        </h2>

        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-12">
          <p className="text-lg font-semibold">
            You&apos;re not just getting the main playbook. You&apos;re also
            getting TWO game-changing bonuses that could each be sold
            separately:
          </p>
        </div>

        {/* Bonus 1 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            BONUS #1: THE 6 PRODUCTS NIGERIANS WILL ALWAYS BUY
          </h3>
          <p className="text-lg mb-4">
            This is a closely-guarded breakdown of the 6 markets in Nigeria that
            print money—year after year, recession or not.
          </p>
          <p className="text-lg mb-4">I&apos;m talking about:</p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>
              • Markets where Nigerians will <em>find</em> money to spend, even
              when they&apos;re &quot;broke&quot;
            </li>
            <li>• The specific products and angles that work in each market</li>
            <li>• Why these markets are virtually recession-proof</li>
            <li>
              • The psychology behind why Nigerians keep buying in these
              categories
            </li>
            <li>
              • How to enter these markets even if you&apos;re a complete
              beginner
            </li>
          </ul>
          <p className="mt-6 text-lg font-semibold">
            I&apos;m not revealing all 6 markets here (you&apos;ll have to read
            the book for that), but here&apos;s a taste:
          </p>
          <p className="mt-4 text-lg">
            One of them is a market where Nigerians spend <em>billions</em>{" "}
            every single year—and it&apos;s NOT food, NOT fashion, NOT tech.
            Most people completely overlook it. But once you see it, you&apos;ll
            wonder how you missed it.
          </p>
          <p className="mt-4 text-lg">
            Another one is a market that thrives on secrecy—people buy, but
            they&apos;ll never post about it on social media. And that&apos;s
            exactly why it&apos;s so profitable.
          </p>
          <p className="mt-4 text-lg font-semibold">
            This bonus alone could change your entire business direction.
          </p>
        </div>

        {/* Bonus 2 */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">
            BONUS #2: DIRECT RESPONSE AD TEMPLATES TOOLKIT
          </h3>
          <p className="text-lg mb-4">
            Remember Chapter 3 where I taught you the 8 Laws of Direct Response
            Marketing?
          </p>
          <p className="text-lg mb-4">
            Well, this bonus gives you{" "}
            <span className="font-semibold">ready-to-use templates</span> so you
            don&apos;t have to start from scratch.
          </p>
          <p className="text-lg mb-4">You&apos;re getting:</p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>
              • <span className="font-semibold">Proven headline templates</span>
              —that grab attention and make people stop scrolling
              (problem/solution, curiosity, urgency, social proof—all covered)
            </li>
            <li>
              • <span className="font-semibold">5 complete ad structures</span>
              —just fill in your product details and you&apos;re done (these are
              templates I&apos;ve personally used to write ads that brought in
              sales)
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                The Problem-Agitation-Solution formula
              </span>
              —for when you need to wake people up to a problem they didn&apos;t
              know they had
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                The Before/After Transformation structure
              </span>
              —perfect for products that create visible change
            </li>
            <li>
              •{" "}
              <span className="font-semibold">The Social Proof Avalanche</span>
              —how to use testimonials and results to make people feel like
              they&apos;re missing out if they don&apos;t buy
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                The Scarcity/Urgency template
              </span>
              —for time-sensitive offers that make people act NOW
            </li>
            <li>
              •{" "}
              <span className="font-semibold">
                The Authority/Credibility structure
              </span>
              —for positioning yourself as the expert (even if you&apos;re new)
            </li>
          </ul>
        </div>

        {/* Bonus 3 */}
        <div>
          <h3 className="text-2xl font-bold mb-4">
            BONUS #3: THE PROFIT CALCULATOR
          </h3>
          <p className="text-lg mb-4">
            Plus, you&apos;re getting something I&apos;ve never seen in any
            other business book:
          </p>
          <p className="text-lg mb-4">
            This is a simple system for calculating if your business idea will{" "}
            <em>actually</em> make money—before you start.
          </p>
          <p className="text-lg mb-4">You&apos;ll learn:</p>
          <ul className="space-y-2 text-gray-700 ml-6">
            <li>
              • The brutally simple formula for knowing if you&apos;ll profit or
              go broke
            </li>
            <li>
              • How to spot the &quot;rat race trap&quot; (where you&apos;re
              working your ass off but barely breaking even)
            </li>
            <li>
              • The sensitivity test—to see how much room for error you have
            </li>
            <li>
              • Sample calculators for different business types (product-based,
              service-based, etc.)
            </li>
            <li>
              • Real case studies showing how this saved people from bad ideas
            </li>
          </ul>
          <p className="mt-6 text-lg font-semibold bg-red-50 p-4 rounded border-l-4 border-red-400">
            One guy skipped this step. Started a shawarma business. Worked
            12-hour days. Made ₦300k in revenue. And somehow ended up with less
            than ₦50k profit after expenses.
          </p>
          <p className="mt-4 text-lg font-semibold">Don&apos;t be that guy.</p>
        </div>
      </section>

      {/* Consumption Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg mb-6">
            Relaaaaaax. Even though this e-book looks hefty, it&apos;s designed
            for EASY consumption.
          </p>
          <p className="text-lg mb-6">
            This is no &quot;theory-heavy textbook&quot; where I ramble for 300
            pages.
          </p>
          <p className="text-xl font-semibold mb-6">Nope.</p>
          <p className="text-lg mb-6">
            I designed The Small Business Playbook to be <em>practical</em>
            —short, punchy, and actionable.
          </p>
          <p className="text-lg mb-6">
            You can finish the core chapters in a weekend.
          </p>
          <p className="text-lg mb-6">
            The language is simple (no MBA jargon or consultant-speak).
          </p>
          <p className="text-lg">
            And because it&apos;s a PDF, you can read it on your phone while
            you&apos;re in traffic... during lunch break... or lying in bed at 2
            AM when you can&apos;t sleep because you&apos;re thinking about your
            business.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Once you finish this e-book, you will know with crystal clarity:
        </h2>

        <div className="space-y-4 text-lg">
          <p>
            <strong>
              1. How to ONLY pick business ideas that have a real chance of
              success
            </strong>{" "}
            (so you&apos;re not gambling with your savings)
          </p>
          <p>
            <strong>
              2. WHICH markets are &quot;starving crowds&quot; ready to buy
            </strong>{" "}
            (and which ones will leave you struggling for customers)
          </p>
          <p>
            <strong>
              3. The EXACT framework for analyzing any business idea
            </strong>{" "}
            (so you can evaluate 5 ideas in an afternoon and know which one to
            pursue)
          </p>
          <p>
            <strong>
              4. Step-by-step instructions for validating your idea before you
              spend money on it
            </strong>
          </p>
          <p className="mt-8">And you&apos;ll also discover…</p>
          <p>
            <strong>5. EXACTLY how to make people buy from your ads!</strong>
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
          <p className="text-lg">
            I know we&apos;re only 5 bullets in, but let&apos;s be honest, you
            were skimming already, weren&apos;t you?
          </p>
          <p className="mt-4 text-lg">
            Well, I want to pause for a moment on this one.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            One of the BIGGEST problems aspiring entrepreneurs have is writing
            ads that actually work.
          </p>
          <p>You post. You wait. Nothing happens.</p>
          <p>
            You don&apos;t know if it&apos;s your price, your product, your
            wording, or just &quot;bad timing.&quot;
          </p>
          <p>
            Well, with The Small Business Playbook, that&apos;s not a problem.
          </p>
          <p>
            Because I give you the 8 Laws of Direct Response Marketing—proven
            rules that make people respond to your ads.
          </p>
          <p>
            And I give you templates and examples you can adapt immediately.
          </p>
          <p className="font-semibold">
            No more &quot;DM to order&quot; posts that get ignored.
          </p>
          <p className="font-semibold">
            No more wondering why nobody&apos;s buying.
          </p>
          <p>
            It took me years to learn this stuff… and I think you will find this
            system extremely helpful and money-making.
          </p>
        </div>

        <div className="mt-12 space-y-4 text-lg">
          <p>
            Okay, a few more things you&apos;ll know once you finish The Small
            Business Playbook…
          </p>
          <p>
            <strong>
              6. How to price your products so customers feel like it&apos;s a
              steal—even if you&apos;re more expensive than competitors
            </strong>
          </p>
          <p>
            <strong>7. How to turn one customer into ten</strong>—through
            word-of-mouth strategies that cost you ₦0
          </p>
          <p>
            <strong>8. When you DON&apos;T need a huge capital to start</strong>
            —and exactly how much you <em>actually</em> need for the business
            you&apos;re considering
          </p>
          <p className="mt-6">And… which is probably MOST exciting of all…</p>
          <p>
            <strong>9. HOW to do all of this in the NIGERIAN market!</strong>
          </p>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <p className="text-lg font-semibold">
            Because here&apos;s the thing:
          </p>
          <p className="mt-4">
            Most business advice online is written by Americans, for Americans.
          </p>
          <p className="mt-2">
            &quot;Run Facebook ads!&quot; (Okay, but your target customers are
            on Tiktok.)
          </p>
          <p className="mt-2">
            &quot;Build an email list!&quot; (Nigerians don&apos;t check email
            like that.)
          </p>
          <p className="mt-2">
            &quot;Charge premium prices!&quot; (Cool, but Nigerians will just
            say you&apos;re too expensive and go buy from someone else.)
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p className="font-semibold">
            The Small Business Playbook is written specifically for the Nigerian
            market—by someone who understands how business actually works here.
          </p>
          <p>You&apos;ll see:</p>
          <ul className="space-y-2 ml-6">
            <li>
              • <strong>Real Nigerian case studies</strong> (not some story
              about a guy in California)
            </li>
            <li>
              • <strong>Pricing strategies that work in Naira</strong> (not
              dollars)
            </li>
            <li>
              •{" "}
              <strong>
                Advertising tactics that match how Nigerians actually buy
              </strong>{" "}
              (not American consumer behavior)
            </li>
            <li>
              • <strong>Market opportunities that exist HERE</strong> (not
              &quot;import this from China and dropship it&quot;)
            </li>
          </ul>
          <p className="mt-6 font-semibold">
            In short, you will have the confidence to start your business
            KNOWING that you&apos;ve done this right—AND that you&apos;re not
            about to waste your money on a dud idea.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Here, take a look at that confidence. These are reviews from real
            Nigerians who&apos;ve used The Small Business Playbook:
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "I've been planning to start a business for over a year. After reading this, I realized I was about to make 3 major mistakes that would've killed my business in the first month. I course-corrected immediately. — Tunde A., Lagos",
              "This book is different. No fluff, no motivational nonsense. Just real, practical steps. I finished it on Saturday and validated my business idea by Tuesday. Now I know it'll work before I spend money on it. — Ngozi K., Abuja",
              "Chapter 3 alone was worth 10x the price. I rewrote my ad using the 8 Laws and got 14 orders in 3 days. Before, I was getting maybe 1 or 2 orders per week. — Ibrahim S., Kano",
              "I've bought 4 business courses before this. All of them were just motivational talk and 'believe in yourself' BS. This actually gave me a SYSTEM. First time I feel like I'm not guessing. — Adaeze M., Port Harcourt",
              "The Starving Crowd chapter changed everything for me. I was trying to sell to 'everyone.' Now I know exactly who my market is and what they actually want to buy. Sales went up immediately. — Kunle R., Ibadan",
              "The bonus on the 6 products Nigerians will always buy? I picked one, started small, and I'm already making consistent money. Wish I had read this 2 years ago. — Blessing O., Benin City",
              "Honestly, I was skeptical. But the pricing chapter alone saved my business. I was undercharging and working myself to death. Now I charge properly and customers still buy. This book is gold. — Chidi N., Owerri",
              "No cap, this is the most practical business book I've read. Everything is tailored to Nigeria—not some American advice that doesn't work here. If you're serious about starting a business, get this. — Fatima J., Kaduna",
              "I used the Business Analyzer Framework on 3 different ideas I had. Turns out 2 of them would've flopped. I went with the third one and it's already profitable in week 2. This framework is a lifesaver. — Emeka U., Enugu",
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="italic text-gray-700">
                  &quot;{testimonial.split(" — ")[0]}&quot;
                </p>
                <p className="mt-4 font-semibold">
                  — {testimonial.split(" — ")[1]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold">
              I hope you&apos;re seeing the picture here?
            </p>
            <p className="mt-4 text-lg">
              This e-book isn&apos;t just about &quot;here&apos;s some
              tips.&quot;
            </p>
            <p className="text-xl font-semibold mt-4">
              It&apos;s about{" "}
              <strong>
                &quot;here&apos;s a system so you&apos;re not guessing
                anymore.&quot;
              </strong>
            </p>
            <p className="mt-6 text-lg">
              This playbook WILL do that for you—like it did for these people.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Okay. Yeah, yeah, everyone loves it. We get it. But get to the point.
          How much does it cost?
        </h2>

        <div className="space-y-6 text-lg">
          <p>Well, here&apos;s the deal.</p>
          <p>
            This is honestly some of the most valuable knowledge I&apos;ve
            packaged into one place.
          </p>
          <p>
            The frameworks, the templates, the bonuses—any one of these
            could&apos;ve been sold separately.
          </p>
          <p>
            If I were pricing this based on value? Easily ₦25,000 - ₦35,000.
          </p>
          <p>
            (Seriously. Go check how much those business seminars cost. ₦50k
            minimum for 3 hours of a guy telling you to &quot;have faith.&quot;
            And you don&apos;t even get materials to take home!)
          </p>
          <p>But I&apos;m not pricing this like a seminar.</p>
          <p>
            I&apos;m pricing this for people who are serious about starting a
            business but don&apos;t have money to waste.
          </p>
        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-400 p-6 text-center">
          <p className="text-lg font-semibold">
            So here&apos;s what The Small Business Playbook costs:
          </p>
          <p className="text-4xl font-bold mt-4">Just ₦9450.</p>
          <p className="text-lg mt-4">That&apos;s it.</p>
        </div>

        <div className="mt-12 text-center space-y-4 text-lg">
          <p>Not ₦50,000 for a course.</p>
          <p>Not ₦25,000 for a &quot;masterclass.&quot;</p>
          <p className="text-xl font-semibold">
            ₦9450 for the complete playbook + both bonuses + lifetime access to
            the PDF.
          </p>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <p className="text-lg font-semibold mb-4">
            Now, I know what you&apos;re thinking:
          </p>
          <p className="text-xl font-bold">
            &quot;Why so cheap? What&apos;s the catch?&quot;
          </p>
          <p className="mt-4 text-lg">There&apos;s no catch.</p>
          <p className="mt-4 text-lg">
            Here&apos;s the truth: I want this in the hands of as many serious
            Nigerian entrepreneurs as possible.
          </p>
          <p className="mt-4 text-lg">
            I&apos;m tired of seeing people waste money on bad business ideas
            because they didn&apos;t know how to validate them first.
          </p>
          <p className="mt-4 text-lg">
            I&apos;m tired of watching people post &quot;DM to order&quot; ads
            that don&apos;t work because nobody taught them how to actually
            sell.
          </p>
          <p className="mt-4 text-lg">
            I&apos;m tired of &quot;business coaches&quot; selling ₦50k courses
            that are just 3 hours of motivation with no real system.
          </p>
          <p className="mt-4 text-lg font-semibold">
            So I priced this at ₦9450 because I want YOU to be able to afford
            it—even if you&apos;re just starting out.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>Besides…</p>
          <p>
            If this playbook helps you avoid even ONE bad business decision,
            it&apos;s already paid for itself 10x over.
          </p>
          <p className="text-xl font-semibold">
            And if it helps you actually start and run a profitable business?
          </p>
          <p className="text-xl font-semibold">
            ₦9450 will look like the best money you&apos;ve ever spent.
          </p>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            But here&apos;s where it gets even better:
          </h2>

          <div className="space-y-6 text-lg">
            <p>
              Unlike most digital products (which loudly announce &quot;NO
              REFUNDS!&quot; and leave you stuck if you don&apos;t like what you
              bought)…
            </p>
            <p className="text-xl font-semibold">
              I&apos;m doing something a bit crazy.
            </p>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-sm border border-gray-200 text-center">
            <h3 className="text-2xl font-bold mb-6">
              I&apos;m giving you a 90-Day Money-Back Guarantee.
            </h3>
            <p className="text-lg mb-6">Here&apos;s how it works:</p>
            <p className="text-lg mb-6">
              Buy The Small Business Playbook today for ₦9450.
            </p>
            <p className="text-lg mb-6">Read the whole thing.</p>
            <p className="text-lg mb-6">
              Use the frameworks. Test the strategies. Apply the templates.
            </p>
            <p className="text-lg font-semibold mb-6">
              If—after 90 days—you genuinely feel like this didn&apos;t help
              you…
            </p>
            <p className="text-lg mb-6">
              Just email me. Show me you actually read it and tried to apply it.
            </p>
            <p className="text-xl font-bold">
              And I&apos;ll refund every kobo.
            </p>
            <p className="mt-6 text-lg">
              No questions. No hassle. No &quot;but you have to submit a 10-page
              report&quot; nonsense.
            </p>
          </div>

          <div className="mt-12 space-y-6 text-lg">
            <p>Now, let me be clear about something:</p>
            <p className="text-xl font-semibold">
              I&apos;m taking ALL the risk here.
            </p>
            <p>
              You could read the entire e-book, learn everything in it, use it
              to start a business, and STILL ask for a refund.
            </p>
            <p>Technically, you could.</p>
            <p>But here&apos;s what I&apos;m banking on:</p>
            <p>I believe you&apos;re an honest person.</p>
            <p>I believe you&apos;re not the type to try to rip someone off.</p>
            <p>
              I believe that if this playbook delivers on what I&apos;m
              promising (and it will), you won&apos;t be asking for a
              refund—you&apos;ll be busy building your business.
            </p>
            <p>
              And if it somehow doesn&apos;t deliver? Then you <em>should</em>{" "}
              get your money back. That&apos;s only fair.
            </p>
          </div>

          <div className="mt-12 bg-green-50 border-l-4 border-green-400 p-6 text-center">
            <p className="text-lg font-semibold">
              So I&apos;m putting my money where my mouth is.
            </p>
            <p className="text-xl font-bold mt-4">
              You have 90 days to decide if The Small Business Playbook is worth
              ₦9450.
            </p>
            <p className="text-lg mt-4">I&apos;m betting it is.</p>
            <p className="text-lg font-semibold">
              If I&apos;m wrong? I&apos;ll refund you.
            </p>
            <p className="text-lg mt-4">
              That&apos;s how confident I am in this.
            </p>
          </div>
        </div>
      </section>

      {/* How to Get It Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          So… how do you get it?
        </h2>

        <div className="space-y-6 text-lg">
          <p>Simple.</p>
          <p>
            <strong>Step 1:</strong> Click the big button below
          </p>
          <p>
            <strong>Step 2:</strong> Pay ₦9450 securely via Paystack (they
            handle payments for Flutterwave, PiggyVest, and pretty much every
            major Nigerian company—your payment is 100% safe)
          </p>
          <p>
            <strong>Step 3:</strong> You&apos;ll be instantly redirected to a
            secure download page with your unique download link
          </p>
          <p>
            <strong>Step 4:</strong> Download the PDF and start reading
            immediately (the whole process takes less than 3 minutes)
          </p>
          <p>
            No waiting for shipping. No &quot;we&apos;ll email you in 24
            hours.&quot; Instant access.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold mb-4">Here&apos;s the button:</p>
          <div className="bg-blue-600 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">
              GET THE SMALL BUSINESS PLAYBOOK FOR ₦9450
            </h3>
            <p className="mb-4">
              (Once you purchase, your e-book + bonuses will be immediately
              available for download. You&apos;ll be instantly redirected to a
              secure download page with your unique download link.)
            </p>
            <Link href="https://paystack.shop/pay/tsbp">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                BUY NOW - ₦9450
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            All right. That should be enough to make up your mind.
          </h2>

          <div className="space-y-6 text-lg">
            <p>
              Honestly, if you&apos;ve read this far, you already know if this
              is for you or not.
            </p>
            {/* <p>But in case you have any questions, here are some answers:</p> */}
            <h2 className="text-3xl font-bold text-center mb-12">
              But wait, I Still Have Questions. Can You Answer Them?
            </h2>
            <p>
              Sure. But I&apos;m only going to answer the REAL questions, not
              the fake ones people use to stall.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Who are you and why should I trust you?&quot;
              </h3>
              <p className="text-gray-700">Fair question.</p>
              <p className="text-gray-700 mt-2">
                I spent 5 years learning directly from Nigerian entrepreneurs
                who&apos;ve built multiple successful businesses—not Instagram
                coaches selling courses, but people who&apos;ve actually done
                it.
              </p>
              <p className="text-gray-700 mt-2">
                I&apos;ve watched them analyze markets, validate ideas, write
                ads that bring in sales, and build businesses that last.
              </p>
              <p className="text-gray-700 mt-2">
                I took everything I learned and packaged it into this playbook.
              </p>
              <p className="text-gray-700 mt-2">
                If you want to know more about me, just read the e-book. My
                approach speaks for itself.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Why should I buy this instead of watching free YouTube
                videos?&quot;
              </h3>
              <p className="text-gray-700">You could do that.</p>
              <p className="text-gray-700 mt-2">
                You could spend the next 3 months watching random videos, taking
                notes, trying to piece together a system from 50 different
                sources.
              </p>
              <p className="text-gray-700 mt-2">
                Or you could spend ₦9450 and get the complete system in one
                weekend.
              </p>
              <p className="text-gray-700 mt-2">
                Your time is worth something, right?
              </p>
              <p className="text-gray-700 mt-2">
                Besides, YouTube videos are made for <em>everyone.</em> This
                playbook is made specifically for Nigerians trying to start a
                business in Nigeria. Big difference.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Is this for complete beginners or do I need
                experience?&quot;
              </h3>
              <p className="text-gray-700">Complete beginners.</p>
              <p className="text-gray-700 mt-2">
                If you&apos;ve never run a business before, this is perfect for
                you.
              </p>
              <p className="text-gray-700 mt-2">
                If you&apos;ve tried before and failed, this will show you what
                went wrong.
              </p>
              <p className="text-gray-700 mt-2">
                If you&apos;re currently running a business but struggling, this
                will help you fix it.
              </p>
              <p className="text-gray-700 mt-2">
                The only requirement is that you&apos;re serious about actually
                starting (not just &quot;thinking about it forever&quot;).
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Will this work for my specific business idea?&quot;
              </h3>
              <p className="text-gray-700">
                The frameworks in this playbook work for pretty much any
                business:
              </p>
              <ul className="text-gray-700 ml-6 mt-2 space-y-1">
                <li>• Product-based businesses (selling physical items)</li>
                <li>• Service-based businesses (offering skills/expertise)</li>
                <li>• Online businesses</li>
                <li>• Offline businesses</li>
                <li>• B2C (selling to customers)</li>
                <li>• B2B (selling to other businesses)</li>
              </ul>
              <p className="text-gray-700 mt-2">
                The principles are universal. The application is up to you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;What if I don&apos;t have a business idea yet?&quot;
              </h3>
              <p className="text-gray-700">Even better!</p>
              <p className="text-gray-700 mt-2">
                Chapter 1 will help you <em>find</em> a viable business idea
                using the Starving Crowd method.
              </p>
              <p className="text-gray-700 mt-2">
                And Bonus #1 literally hands you 6 proven markets that Nigerians
                consistently spend money in.
              </p>
              <p className="text-gray-700 mt-2">
                So you&apos;ll finish the book with not just knowledge, but an
                actual direction to pursue.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;How long will it take to see results?&quot;
              </h3>
              <p className="text-gray-700">Depends on you.</p>
              <p className="text-gray-700 mt-2">
                Some people read this on Saturday, validate their idea by
                Tuesday, and start making sales by Friday.
              </p>
              <p className="text-gray-700 mt-2">
                Others take a month to work through everything.
              </p>
              <p className="text-gray-700 mt-2">
                The playbook gives you the system. How fast you implement is up
                to you.
              </p>
              <p className="text-gray-700 mt-2">
                But here&apos;s what I&apos;ll say: the Business Analyzer
                Framework alone could save you 3-6 months of wasting time on a
                bad idea.
              </p>
              <p className="text-gray-700 mt-2">
                So even if you just use that one tool? You&apos;re already
                ahead.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;What if I don&apos;t understand something in the
                book?&quot;
              </h3>
              <p className="text-gray-700">
                The e-book is written in simple, clear language—no jargon, no
                complex theories.
              </p>
              <p className="text-gray-700 mt-2">
                If you can read this sales copy, you can understand the
                playbook.
              </p>
              <p className="text-gray-700 mt-2">
                But if you genuinely get stuck on something, just email me.
                I&apos;ll help you out.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Is there a physical book version?&quot;
              </h3>
              <p className="text-gray-700">
                Not yet. Right now it&apos;s PDF only.
              </p>
              <p className="text-gray-700 mt-2">
                But that means you get it instantly—no waiting for delivery or
                paying for shipping.
              </p>
              <p className="text-gray-700 mt-2">
                You can read it on your phone, tablet, or laptop. Whatever works
                for you.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Can I share this with my friends/family?&quot;
              </h3>
              <p className="text-gray-700">I&apos;d rather you didn&apos;t.</p>
              <p className="text-gray-700 mt-2">
                Here&apos;s why: if everyone just shares it around, I can&apos;t
                keep creating valuable content like this at accessible prices.
              </p>
              <p className="text-gray-700 mt-2">
                If your friend wants it, send them to buy their own copy.
                It&apos;s only ₦9450.
              </p>
              <p className="text-gray-700 mt-2">
                (Plus, people value things they pay for. If you just send it to
                someone for free, they probably won&apos;t read it anyway.)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;What if I buy it and don&apos;t like it?&quot;
              </h3>
              <p className="text-gray-700">
                Then you get your money back. That&apos;s what the 90-day
                guarantee is for.
              </p>
              <p className="text-gray-700 mt-2">
                Just show me you actually read it and gave it a fair shot, and
                I&apos;ll refund you.
              </p>
              <p className="text-gray-700 mt-2">Simple as that.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                &quot;Why 90 days? Most guarantees are 30 days.&quot;
              </h3>
              <p className="text-gray-700">
                Because I want you to actually <em>use</em> this, not just skim
                it.
              </p>
              <p className="text-gray-700 mt-2">
                30 days isn&apos;t enough time to properly apply a business
                system and see results.
              </p>
              <p className="text-gray-700 mt-2">
                90 days is more than enough time to read it, test the
                frameworks, and know if it works for you.
              </p>
              <p className="text-gray-700 mt-2">
                And if after 90 days you genuinely feel like this wasn&apos;t
                worth ₦9450? You shouldn&apos;t have to keep it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Broke Right Now Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
          <h3 className="text-2xl font-bold mb-4">
            &quot;Okay I&apos;m convinced. But I&apos;m broke right now. Can I
            pay later?&quot;
          </h3>
          <p className="text-lg">I get it. Times are hard.</p>
        </div>

        <div className="space-y-6 text-lg">
          <p>
            But here&apos;s the thing: ₦9450 is less than what most people spend
            on data and food in a week.
          </p>
          <p>
            If you&apos;re serious about starting a business, you can find
            ₦9450.
          </p>
          <p>
            Cut back on something else for one week. Ask a family member to
            borrow you. Do a small hustle to raise it.
          </p>
        </div>

        <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6">
          <p className="text-lg font-semibold">
            Because here&apos;s what I know:
          </p>
          <p className="text-xl font-bold mt-4">
            If you can&apos;t find ₦9450 to invest in knowledge that could
            change your financial situation…
          </p>
          <p className="text-xl font-bold mt-4">
            …you&apos;re probably not ready to start a business yet.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>(Harsh? Maybe. But it&apos;s true.)</p>
          <p>
            Starting a business requires investment—even if it&apos;s small. And
            this is one of the smallest, lowest-risk investments you can make.
          </p>
          <p className="text-xl font-semibold">
            So don&apos;t wait until you &quot;have money.&quot; You&apos;ll be
            waiting forever.
          </p>
          <p className="text-xl font-semibold">
            Find the ₦9450. Get the playbook. Start building.
          </p>
        </div>
      </section>

      {/* More Testimonials Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-8">
            <h3 className="text-2xl font-bold mb-4">
              &quot;I still feel doubtful. Can you give me some more
              testimonials to scroll through before I decide?&quot;
            </h3>
            <p className="text-lg">
              That… sounded suspiciously like you&apos;re just stalling.
            </p>
            <p className="text-lg mt-4">
              (I&apos;m beginning to have my doubts about whether you actually
              want to start a business or just like reading about it…)
            </p>
            <p className="text-lg mt-4">
              Then again—who am I to turn down an opportunity to show you more
              proof?
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              "The Business Analyzer Framework is insane. I had 4 business ideas and couldn't pick one. Used the framework, scored all 4, and immediately knew which one to pursue. Saved me months of confusion. — Oluwaseun D., Abeokuta",
              "I've spent over ₦80,000 on business courses in the past 2 years. This ₦9450 e-book taught me more than all of them combined. I'm not even exaggerating. — Amarachi P., Asaba",
              "Chapter 5 on pricing changed my entire business. I was charging ₦1,500 for something I should've been charging ₦4,000 for. Customers still buy, and I'm making 3x the profit now. — Yusuf M., Jos",
              "The ad templates in Bonus #2 are pure gold. I literally copied one of the structures, changed it to fit my product, and posted it. Got 9 orders that same day. First time I've made money from an ad. — Chiamaka F., Uyo",
              "I'm the type who overthinks everything. This book forced me to stop planning and start doing. Used the validation method, confirmed my idea would work, and launched 2 weeks later. Already profitable. — Abdullahi T., Sokoto",
              "I was about to start a business that would've 100% failed. The Starving Crowd chapter showed me I was entering a market that didn't actually want what I was selling. Dodged a bullet. Chose a different idea instead and it's going well now. — Nneka I., Calabar",
              "The 6 products Nigerians will always buy? I picked one I hadn't even considered before. Set up shop in 3 days. Made my first sale in 6 hours. This book is a cheat code. — Gbenga L., Ilorin",
              "No motivational BS. No 'just believe' nonsense. Just straight facts and systems. Exactly what I needed. If you're tired of Instagram business coaches, get this book. — Zainab H., Maiduguri",
              "I've been stuck in 'research mode' for over a year. This book snapped me out of it. Now I have a clear plan and I'm actually executing. Worth every kobo. — Daniel C., Warri",
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200"
              >
                <p className="italic text-gray-700">
                  &quot;{testimonial.split(" — ")[0]}&quot;
                </p>
                <p className="mt-4 font-semibold">
                  — {testimonial.split(" — ")[1]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Decision Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Real talk: What are you actually waiting for?
        </h2>

        <div className="space-y-6 text-lg">
          <p>Let me guess…</p>
          <p>
            You&apos;re waiting to &quot;have more money.&quot; (You&apos;ll
            never feel like you have &quot;enough.&quot;)
          </p>
          <p>
            You&apos;re waiting for the &quot;perfect time.&quot; (There is no
            perfect time.)
          </p>
          <p>
            You&apos;re waiting to &quot;learn more first.&quot; (You already
            know enough to start.)
          </p>
          <p>
            You&apos;re waiting to feel &quot;ready.&quot; (You&apos;ll never
            feel 100% ready.)
          </p>
        </div>

        <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6">
          <p className="text-lg font-semibold">Meanwhile, time is passing.</p>
          <p className="mt-4 text-lg">
            Your age-mates are starting businesses. Your juniors are making
            money. Your peers are building.
          </p>
          <p className="mt-2 text-lg font-bold">
            And you&apos;re still &quot;planning.&quot;
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            Here&apos;s what I know about people who actually succeed in
            business:
          </p>
          <p className="text-xl font-semibold">
            They don&apos;t wait until everything is perfect. They move when
            they have enough information to take the next step.
          </p>
          <p>
            You have enough information right now to know if The Small Business
            Playbook is for you.
          </p>
          <p>You know you want to start a business.</p>
          <p>You know you need a system (not just random tips).</p>
          <p>
            You know ₦9450 is not a lot of money for something that could change
            your financial situation.
          </p>
          <p>
            And you know that if it doesn&apos;t work out, you can get a refund
            anyway.
          </p>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <p className="text-xl font-semibold">So what&apos;s stopping you?</p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>Fear?</p>
          <p>
            Fear that it won&apos;t work? (That&apos;s what the guarantee is
            for.)
          </p>
          <p>
            Fear that you&apos;ll fail even with the playbook? (You might. But
            you&apos;ll definitely fail WITHOUT a system.)
          </p>
          <p>
            Fear that you&apos;re not &quot;business-minded&quot;? (Nobody is
            born business-minded. It&apos;s learned. And this playbook teaches
            it.)
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
          <p className="text-lg font-semibold">
            Look, I&apos;ll be honest with you:
          </p>
          <p className="text-xl font-bold mt-4">
            The difference between people who build successful businesses and
            people who don&apos;t isn&apos;t talent or luck or connections.
          </p>
          <p className="text-xl font-bold mt-4">
            It&apos;s willingness to take action even when you&apos;re scared.
          </p>
          <p className="mt-4 text-lg">
            Everyone is scared when they start. The difference is some people
            start anyway.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl font-semibold mb-6">
            So here&apos;s my challenge to you:
          </p>
          <p className="text-lg mb-4">Stop waiting.</p>
          <p className="text-lg mb-4">Stop &quot;thinking about it.&quot;</p>
          <p className="text-lg mb-4">
            Stop telling yourself you&apos;ll do it &quot;next month.&quot;
          </p>
          <p className="text-lg mb-8">Click the button below.</p>
          <p className="text-lg mb-4">Pay ₦9450.</p>
          <p className="text-lg mb-4">Download the playbook.</p>
          <p className="text-lg mb-4">Read it this weekend.</p>
          <p className="text-xl font-semibold">
            And actually start building your business next week.
          </p>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="px-4 py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GET THE SMALL BUSINESS PLAYBOOK NOW FOR ₦9450
          </h2>
          <p className="text-xl mb-8">
            Instant download • 90-day money-back guarantee • Secure payment via
            Paystack
          </p>
          <Link href="https://paystack.shop/pay/tsbp">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              BUY NOW - ₦9450
            </button>
          </Link>
          <p className="mt-4 text-sm opacity-90">
            (Instant download. 90-day money-back guarantee. Secure payment via
            Paystack.)
          </p>
        </div>
      </section>

      {/* One Last Thing Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          One last thing before you go…
        </h2>

        <div className="space-y-6 text-lg">
          <p>I want to be real with you for a second.</p>
          <p>
            You&apos;re reading this because something inside you wants more.
          </p>
          <p>More money. More freedom. More control over your life.</p>
          <p>You&apos;re tired of depending on a job (or looking for one).</p>
          <p>
            You&apos;re tired of watching others make money while you&apos;re
            stuck.
          </p>
          <p>
            You&apos;re tired of having business ideas but never actually
            starting.
          </p>
        </div>

        <div className="mt-12 bg-blue-50 border-l-4 border-blue-400 p-6">
          <p className="text-lg">I get it.</p>
          <p className="text-xl font-semibold mt-4">
            And here&apos;s what I want you to understand:
          </p>
        </div>

        <div className="mt-12 bg-yellow-50 border-l-4 border-yellow-400 p-6">
          <p className="text-xl font-bold text-center">
            You&apos;re one decision away from changing your trajectory.
          </p>
        </div>

        <div className="mt-12 space-y-6 text-lg">
          <p>
            Not &quot;one big break.&quot; Not &quot;one lucky
            opportunity.&quot;
          </p>
          <p>One decision.</p>
          <p>
            The decision to stop consuming information and start applying it.
          </p>
          <p>
            The decision to invest ₦9450 in yourself instead of spending it on
            something you&apos;ll forget about next week.
          </p>
          <p>
            The decision to actually start building instead of just thinking
            about it.
          </p>
        </div>

        <div className="mt-12 bg-gray-100 p-6 rounded-lg">
          <p className="text-lg font-semibold">
            This playbook won&apos;t do the work for you.
          </p>
          <p className="mt-4 text-lg">It won&apos;t magically make you rich.</p>
          <p className="mt-4 text-lg">
            It won&apos;t guarantee you&apos;ll succeed.
          </p>
        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-400 p-6">
          <p className="text-xl font-bold text-center">
            But it WILL give you a system that works.
          </p>
          <p className="text-lg text-center mt-4">
            A system that&apos;s been tested. A system that&apos;s already
            helped others. A system that removes the guesswork.
          </p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg">
            And honestly? That&apos;s the best anyone can give you.
          </p>
          <p className="text-xl font-semibold mt-4">The rest is up to you.</p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-2xl font-bold mb-6">
            So… what&apos;s it going to be?
          </p>
          <p className="text-lg mb-4">
            Are you going to close this page and go back to
            &quot;planning&quot;?
          </p>
          <p className="text-xl font-semibold">
            Or are you going to take action right now?
          </p>
          <p className="text-lg mt-6">The choice is yours.</p>
          <p className="text-lg mt-4">But if you choose action…</p>
          <p className="text-xl font-semibold mt-4">
            I&apos;ll see you inside the playbook.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            YES, I&apos;M READY. GET ME THE PLAYBOOK NOW.
          </h2>
          <Link href="https://paystack.shop/pay/tsbp">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              BUY NOW - ₦9450
            </button>
          </Link>
        </div>
      </section>

      {/* P.S. Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">P.S.</h3>
            <p className="text-lg mb-4">
              I know some of you skipped straight to the end hoping to find a
              &quot;summary.&quot; 😒
            </p>
            <p className="text-lg mb-6">Fine. Here it is:</p>

            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
              <p className="text-lg font-semibold">
                The Small Business Playbook is a complete, step-by-step system
                for starting and running a profitable business in Nigeria—even
                if you&apos;re a complete beginner with limited capital.
              </p>
            </div>

            <p className="text-lg mb-4">It includes:</p>
            <ul className="space-y-2 text-gray-700 ml-6 mb-6">
              <li>
                • The Business Analyzer Framework (so you know your idea will
                work BEFORE you spend money)
              </li>
              <li>
                • The 8 Laws of Direct Response Marketing (so your ads actually
                bring in sales)
              </li>
              <li>• Pricing strategies that work in the Nigerian market</li>
              <li>
                • Word-of-mouth systems that turn customers into your unpaid
                sales force
              </li>
              <li>
                • BONUS #1: The 6 Products Nigerians Will Always Buy (proven
                markets that print money)
              </li>
              <li>
                • BONUS #2: Direct Response Ad Templates (ready-to-use templates
                you can customize)
              </li>
              <li>
                • BONUS #3: The Profit Calculator (so you don&apos;t start a
                business that can&apos;t actually make money)
              </li>
            </ul>

            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="text-center">
                <p className="font-semibold">Price:</p>
                <p className="text-xl font-bold">₦9450</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Format:</p>
                <p className="text-lg">Instant PDF download</p>
              </div>
              <div className="text-center">
                <p className="font-semibold">Guarantee:</p>
                <p className="text-lg">90-day money-back</p>
              </div>
            </div>

            <p className="text-lg mb-4">
              That&apos;s it. That&apos;s the offer.
            </p>
            <p className="text-lg font-semibold">
              If you&apos;re serious about starting a business in Nigeria and
              you want a proven system instead of random tips…
            </p>
            <p className="text-lg mt-4">Click the button and get started:</p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GET THE SMALL BUSINESS PLAYBOOK FOR ₦9450
          </h2>
          <p className="text-xl mb-8">
            (Secure payment via Paystack. Instant download. No waiting.)
          </p>
          <Link href="https://paystack.shop/pay/tsbp">
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              BUY NOW - ₦9450
            </button>
          </Link>
        </div>
      </section>

      {/* P.P.S. Section */}
      <section className="px-4 py-16 max-w-4xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">P.P.S.</h3>
          <p className="text-lg mb-6">Still here?</p>
          <p className="text-lg mb-6">Okay, let me ask you something:</p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <p className="text-xl font-bold">
              Six months from now, where do you want to be?
            </p>
          </div>

          <div className="space-y-6 text-lg">
            <p>Still &quot;planning&quot; to start a business?</p>
            <p>Still watching others make money while you&apos;re stuck?</p>
            <p>Still telling yourself &quot;next year I&apos;ll start&quot;?</p>
            <p className="text-xl font-semibold">
              Or do you want to be six months into running an actual, profitable
              business?
            </p>
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-400 p-6">
            <p className="text-lg font-semibold">
              Because here&apos;s the truth:
            </p>
            <p className="text-xl font-bold mt-4">
              Six months from now, you&apos;ll wish you started today.
            </p>
          </div>

          <div className="mt-12 space-y-6 text-lg">
            <p>
              Every successful business owner says the same thing: &quot;I wish
              I had started sooner.&quot;
            </p>
            <p className="text-xl font-semibold">
              Don&apos;t be the person who looks back a year from now and says,
              &quot;I should&apos;ve just bought that playbook and
              started.&quot;
            </p>
          </div>

          <div className="mt-12">
            <p className="text-2xl font-bold mb-6">Start now.</p>
            <Link href="https://paystack.shop/pay/tsbp">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors">
                GET THE SMALL BUSINESS PLAYBOOK NOW
              </button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-600">
            <p className="italic">See you inside.</p>
          </div>
        </div>
      </section>

      {/* Final Sections - I'll continue with the remaining content in the next response */}
      {/* This includes: */}
      {/* - "Okay I'm convinced. But I'm broke right now..." */}
      {/* - More testimonials */}
      {/* - Final CTA sections */}
      {/* - P.S. and P.P.S. sections */}

      {/* Final CTA Section */}
      {/* <section className="px-4 py-16 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              GET THE SMALL BUSINESS PLAYBOOK FOR ₦9450
            </h2>
            <p className="text-xl mb-8">Instant download • 90-day money-back guarantee • Secure payment</p>
            <button className="bg-white text-green-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-xl transition-colors">
              BUY NOW - ₦9450
            </button>
            <p className="mt-4 text-sm opacity-90">Secure payment via Paystack</p>
          </div>
        </section> */}
    </div>
  );
}
