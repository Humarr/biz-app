/* eslint-disable react/no-unescaped-entities */
// app/page.tsx
import BonusSection from './components/BonusSection';
import CheckmarkList from './components/CheckmarkList';
import CTAButton from './components/CTAButton';
import EbookMockupWithBadge from './components/EbookMockupWithBadge';

export default function SalesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      {/* Header */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
         <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 text-red-600">
          WARNING: DO NOT READ THIS UNLESS YOU'RE SO TIRED OF BEING BROKE, NO MATTER WHAT YOU DO
        </h1>
        {/* <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          I'M SO TIRED OF BEING BROKE, NO MATTER WHAT I DO
        </h1> */}

        {/* Main content - formatted like a letter */}
        <div className="space-y-6  leading-relaxed">
          <p>Look, I don't know you.</p>
          <p>But I'm going to guess some things about your life right now, and you tell me if I'm wrong.</p>
          <p>You get paid on Friday. By Tuesday, you're broke. Maybe not actually zero—but close enough that you're doing that math in your head. "Can I afford gas AND groceries? Or do I pick one?"</p>
          <p className='text-2xl my-8 font-bold text-center'>Every single month, you tell yourself: <span className='italic'>"This is it. This is the worst it'll get. Next month will be different."</span></p>

          <p>And every single month, you're wrong.</p>

          <p>You've tried everything. Extra hours at work. Side hustles. Selling stuff you don't need.</p>
          <p>Plus, you've watched every Alex Hormozi video, every Grant Cardone clip, every Iman Gadzhi promise about "high income skills."</p>
          <p>Also, you've budgeted. You've cut expenses down to nothing. You don't go out. You don't buy anything. You've eliminated everything except rent, car, phone, and groceries.</p>
          <p>And yet... you're STILL broke.</p>

<p className='font-bold text-3xl my-8 text-center'>And even worse…</p>

          <p>The constant worry is killing you. No, you're not worried about the work—you can handle the work. </p>
          <p>But you're burnt out from constantly thinking about money. From checking your bank account with that sick feeling in your stomach. From that panic when someone invites you out and you have to make up an excuse because you literally cannot afford a $12 burger.</p>

          <p>You're so fucking tired.</p>

          <p>And the worst part? You feel stupid. Like you're just not smart enough to figure this out. Everyone else seems to be making it work... </p>
          <p> &#10132; Your friends who got help from their parents.</p>
          <p>&#10132; The people on social media making "six figures with digital products."</p>
          <p> &#10132; The gurus selling courses.</p>

          <p className='font-bold text-xl'>And it makes you feel like a failure.</p>

          <p>I know this because I used to be in your shoes.</p>
          <p className='font-bold text-3xl my-8 text-center'>Let me explain…</p>

          <p>Eighteen months ago, I was negative $180 in my checking account. I was working 6 days a week at a job I hated. I had $4.73 in quarters in my car for gas. </p>
          <p>I was 29 years old, living with a roommate I couldn't stand, wearing clothes that made me look homeless, avoiding everyone I knew because I was too ashamed of where I was.</p>


          <p>I'm not going to tell you I'm rich now. <span className='italic font-bold'>I'm not.</span></p>

          <p>But I'm not broke anymore either.</p>

          <p className='text-3xl my-8 font-bold text-center'>And that difference—that space between "broke by Tuesday" and "making it to next paycheck"—that's everything.</p>
        </div>

        {/* Every 8th paragraph styled as subheading */}
        <div className="my-12">
          {/* <h2 className="text-3xl my-8 font-bold text-center my-8">HERE'S WHAT THIS ISN'T</h2> */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>But before I tell you what actually worked, let me tell you what this is NOT.</p>
            
            <p>&#10060;This is not a course about dropshipping. </p>
            <p> &#10060; Or Amazon FBA.</p>
            <p> &#10060; Or social media marketing. </p>
            <p> &#10060; Or crypto.</p>
            <p> &#10060;  Or day trading.</p>
            <p> &#10060; Or any of that shit.</p>
            
            <p>You know why?</p>

            <p className='font-bold text-2xl my-8 text-center'>Because I tried all of it. And it's all the same scam in different packaging.</p>

            <p>Grant Cardone? Snake oil salesman. Dude's been indicted for fraud multiple times. </p>
            <p> Alex Hormozi? He makes his money selling you courses on how to make money.</p>
            <p> Iman Gadzhi? Same thing. They're in the business of selling you a dream.</p>


            <p className='font-bold '>Here's how the scam works:</p>


            <p>They show you their lifestyle. The cars. The houses. The watches. They tell you they made it with [INSERT METHOD HERE].</p>
            <p>They sell you a course for $997, $1997, $2997.</p>
            <p>The course tells you to start a business that requires: money you don't have, time you don't have, skills you don't have, and luck you DEFINITELY don't have.</p>

            <p>And when it doesn't work? They tell you it's your fault. You didn't work hard enough. You didn't believe enough. You didn't take enough action.</p>

            <p>Bullshit.</p>

            <p className='font-bold text-2xl my-8 text-center'>Want to know the real truth? They make their money from the COURSE. Not from the method they're teaching. The course IS the business.</p>

            <p>And here's the thing that made me want to break shit:</p>
            <p className='italic '> I KNEW it was a scam. I knew it, and I still kept falling for it. </p>
            <p>Because when you're desperate, you'll try anything. When you're suffocating, you'll grab at any hand reaching down—even if you know it's probably going to let go.</p>


            <p>So let me be crystal clear about what I'm NOT selling you:</p>
          </div>
          
          <CheckmarkList />
          
          <div className="space-y-6 text-lg leading-relaxed mt-8">
            <p>Because here's what I realized: You don't need any of that.</p>
            <p>You don't need to be rich.</p>
            <p>You don't need six figures.</p>
            <p>You don't need a Lamborghini.</p>

            <p className='text-3xl my-8 font-bold text-center'>You know what you need?</p>

            <p> &#9989; You need to not be broke before your next paycheck.</p>
            <p> &#9989; You need breathing room.</p>
            <p> &#9989; You need to be able to fix your car (or anything) when it breaks without having a panic attack. </p>
            <p>  &#9989; You need to sleep without that constant knot in your stomach.</p>
            <p> &#9989; You need to stop feeling like a failure every time you check your bank account.</p>

            <p>That's it.</p>
            <p>That's the whole game.</p>
          </div>
        </div>

        {/* What if you could breathe section */}
        <div className="my-12">
          <h2 className="text-3xl my-8 font-bold text-center my-8">
            {/* SO, WHAT IF YOU COULD JUST... BREATHE? */}
            So, let me redefine something for you.
            </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>You see... when people talk about "making money online," they're always talking about these insane numbers. "$10k months!" "$100k years!" "Financial freedom!"</p>

            <p>And when you hear those numbers, you know what happens? You stop listening. Because it's so far from your reality that it sounds like science fiction.</p>

            <p>But what if we made the goal something different?</p>

            <p className='text-2xl my-8 font-bold text-center'>What if the goal was just: $800 to $1,500 extra per month.</p>

            <p>That's it.</p>


            <p>I know it's not quit-your-job money. Not buy-a-house money. Not even take-a-vacation money.</p>
            <p>Just... breathing room money.</p>

            <p>Let me show you what that actually means in your life:</p>
            <p className="font-semibold">With an extra $800-1500 per month:</p>
            <p>You get paid Friday. It's now the following Friday. You still have money.</p>
            <p>That's it. That's the whole difference. But that difference changes everything.</p>
          </div>
          
          {/* Benefits with varied unicode icons */}
          <div className="my-8 space-y-4">
            <div className="flex items-start">
              <span className="mr-3 text-xl">⚙️</span>
              <p>Your car makes that weird noise? You can get it checked. This week. Not "maybe in a few months."</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-xl">🎯</span>
              <p>Friend invites you out? You can go. You don't have to make up an excuse.</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-xl">👕</span>
              <p>You need new clothes because the ones you have are falling apart? You buy them.</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-xl">🔧</span>
              <p>Something breaks in your apartment? You fix it. Same day. No pushing it to "next month."</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3 text-xl">😴</span>
              <p>You wake up at 3am with that panic about money? It doesn't happen anymore. Or at least, not every night.</p>
            </div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className='font-bold text-2xl my-8 text-center'>You're not rich. You're just... not suffering anymore.</p>
            <p>And here's the thing nobody tells you: Getting from broke to breathing room is 1,000 times easier than getting from breathing room to rich.</p>
            <p>Because you don't need a miracle. You don't need to create the next Facebook. You don't need to go viral. You don't need luck.</p>
            <p className='text-3xl my-8 font-bold text-center'>You just need a method that actually works for people like us.</p>
            <p>People with jobs. People who are already exhausted. People with zero money to "invest in themselves." People who've been burned by every guru and every promise.</p>
            <p>People who are just so fucking tired of being broke.</p>
          </div>
        </div>

        {/* The actual method section */}
        <div className="my-12">
            <p>And now, as you’re about to see…</p>
          <h2 className="text-3xl my-8 font-bold text-center my-8">HERE'S WHAT ACTUALLY WORKS (AND WHY YOU HAVEN'T HEARD OF IT)</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>I'm going to tell you exactly what I do. No secrets. No "buy my course to find out." I'm going to lay it out right here.</p>

            <p>But first, you need to understand why this works when everything else failed.</p>

            <p>&#10148; <span className='font-bold'>The reason dropshipping doesn't work for you:</span> It requires money upfront for inventory, ads, testing. You don't have that money. By the time you make your first sale, you're already in the hole.</p>

<p>Here’s where most people get it wrong…</p>

            <p>&#10148; <span className='font-bold'>The reason social media marketing doesn't work for you:</span> It takes 6-12 months to build a client base. You need money NOW, not in a year. Plus, you're competing with thousands of other people who all took the same course.</p>

<p>This is the part most people miss…</p>

            <p>&#10148; <span className='font-bold'>The reason "passive income" doesn't work for you:</span> There's no such thing. Everything requires work upfront. And you're already working 6 days a week. You don't have time for another full-time project.</p>

            <p className='text-3xl my-8 font-bold text-center'>So, here's what I figured out:</p>
            <p>You need something that:</p>
          </div>
          
          {/* Requirements list with different unicode icons */}
          <div className="my-8 space-y-3">
            <div className="flex items-start">
              <span className="mr-3">💰</span>
              <p>Costs $0 to start</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">⏰</span>
              <p>Takes 5-8 hours per week (not 40)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">📅</span>
              <p>Pays you THIS MONTH (not in 6 months)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">😌</span>
              <p>Doesn't require you to be "on" or creative when you're exhausted</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🎓</span>
              <p>Uses skills you already have</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🚫</span>
              <p>Doesn't require selling to friends/family</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">👥</span>
              <p>Doesn't require building an audience</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🎬</span>
              <p>Doesn't require you to become a "content creator"</p>
            </div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p>That's the filter. That's the requirement.</p>
            <h2 className='text-3xl my-8 font-bold text-center'>And there's exactly ONE thing I found that fits all of those criteria.</h2>

            <p className="">And that is...</p>
            <p className="font-semibold text-center text-2xl my-8">Client cleanup work for small online businesses.</p>


            <p>I know. It sounds boring as hell. It is.</p>

            <p>But let me show you why it works:</p>

            <p className="font-semibold">The fact is:</p>

            <p>Small online businesses (course creators, coaches, consultants, small e-commerce) have a constant problem. </p>

            <p> &#10007; Their customer lists are a mess. </p>
            <p> &#10007; Their email platforms are disorganized. </p>
            <p>&#10007; Their spreadsheets are chaos. </p>
            <p> &#10007; Their basic admin work is piling up.</p>

            <p>And that means they need someone to:</p>
          </div>

          {/* What they need list */}
          <div className="my-6 space-y-2">
            <div className="flex items-start">
              <span className="mr-2">&#9989;</span>
              <p>Clean up their email lists (remove duplicates, fix formatting, segment properly)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">&#9989;
</span>
              <p>Organize their customer data (consolidate spreadsheets, update records)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">&#9989;
</span>
              <p>Do basic customer service (answer simple questions, process refunds)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">&#9989;
</span>
              <p>Clean up their platforms (organize their course dashboards, their Shopify backend)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">&#9989;
</span>
              <p>Handle their scheduling (calendar management, appointment booking)</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>And get this...</p>
            <h3 className='text-3xl my-8 font-bold text-center'>This is NOT copywriting. It's NOT design. It's NOT marketing. It's NOT coding.</h3>
            <p className='text-3xl my-8 font-bold text-center'>It's literally just... cleaning up their mess.</p>

            <p>And if you're thinking…</p>
            <p className='text-3xl my-8 font-bold text-center'>"Who the heck will pay me for that?!"</p>
            <p className="font-semibold">Let me show you why they'll pay you:</p>

            <p>These business owners make $10k-50k per month. But they're drowning in admin work. They don't need a $5,000/month virtual assistant. They need someone for 10-15 hours per month to just handle the boring shit.</p>
            <p>They'll pay $50-75 per hour for this. Why? Because it's cheaper than hiring someone full-time, and it's stuff they hate doing themselves.</p>

            <p className="font-semibold">And here's why YOU should care:</p>
            {/* <p className="font-semibold">Why this works for YOU:</p> */}
          </div>

          {/* Why it works list */}
          <div className="my-6 space-y-3">
            <div className="flex items-start">
              <span className="mr-3">💤</span>
              <p>You can do it tired. After your real job. On Sunday morning. It doesn't require you to be creative or "on."</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">💻</span>
              <p>You already know how to use email. Spreadsheets. Basic computer stuff. That's literally all you need.</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🆓</span>
              <p>You can start with ZERO money. No tools to buy. No courses to take. Nothing.</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">💰</span>
              <p>You get paid THIS MONTH. Not in 6 months after "building your brand."</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">⏱️</span>
              <p>You work when you want. 2 hours Tuesday night. 3 hours Saturday morning. Whatever.</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🚫</span>
              <p>No selling. No pitching. No posting on social media. No building an audience.</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p className="font-semibold">Let's do the math together:</p>
          </div>

          <div className="my-6 bg-gray-50 p-6 rounded-lg">
            <div className="flex space-x-2 mb-2">
              <span className="text-2xl my-8">🔢</span>
              <p className="text-xl font-semibold">2 clients paying you $600/month each = $1,200</p>
            </div>
            <div className="flex  space-x-2 mb-2">
              <span className="text-2xl my-8">⏰</span>
              <p className="text-xl font-semibold">10-15 hours total per month</p>
            </div>
            <div className="flex  space-x-2">
              <span className="text-2xl my-8">✅</span>
              <p className="text-xl font-semibold">That's it.</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>That's $1,200 extra. Every month. While still working your regular job.</p>
            <p>Is it exciting? No.</p>
            <p>Is it going to make you rich? No.</p>
            <p>Is it going to get you from "broke by Tuesday" to "I can breathe"? Yes.</p>
          </div>
        </div>

        {/* Exactly how it works section */}
        <div className="my-12">
          <h2 className="text-3xl my-8 font-bold text-center my-8">SO HERE'S EXACTLY HOW IT WORKS</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>Let me walk you through the exact steps. No vague bullshit. The actual tactical process.</p>
            <p className="font-semibold text-xl">WEEK 1: Finding your first client</p>
            <p>You're not going to like this, but: You're going to work for free for the first one.</p>
            <p>I know. I know. But here's why:</p>
            <p>You need a testimonial. You need to say "I've done this before" when client #2 asks. And you need to learn the actual work without pressure.</p>
            <p className="font-semibold">Where to find them:</p>
          </div>

          <div className="my-6 space-y-2">
            <div className="flex items-start">
              <span className="mr-2">📘</span>
              <p>Facebook groups for course creators, coaches, consultants</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">💼</span>
              <p>Small business owners you find through LinkedIn</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">🛍️</span>
              <p>People selling digital products on Gumroad or Etsy</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">🏢</span>
              <p>Anyone with an online business making $5k-20k/month</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>You send them this message (copy it word for word):</p>
            <div className="shadow-xl p-6 rounded-lg my-4 border border-gray-200">
              <p className="font-fun italic text-gray-700">"Hey [Name], I saw you're running [their business]. I'm working on building up client cleanup work experience, and I'd like to offer you 5 hours of work for free. I can clean up your email list, organize your customer data, handle basic customer service, or tackle whatever admin work is piling up. No strings attached. If you like the work, we can talk about ongoing paid work. If not, no worries—you got 5 free hours. Interested?"</p>
            </div>
            <p className="font-semibold">Here's why this works:</p>
          </div>

          <div className="my-6 space-y-3">
            <div className="flex items-start">
              <span className="mr-3">🎁</span>
              <p>You're offering value first</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🛡️</span>
              <p>It's risk-free for them</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">⏰</span>
              <p>5 hours is specific and believable</p>
            </div>
            <div className="flex items-start">
              <span className="mr-3">👔</span>
              <p>You sound professional, not desperate</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>You send this to 20 people. 3-5 will respond. 1-2 will say yes.</p>

            <p className="font-semibold text-xl">WEEK 2-3: Doing the free work</p>
            <p>They'll give you access to their systems. Usually:</p>
          </div>

          <div className="my-6 space-y-2">
            <div className="flex items-start">
              <span className="mr-2">📧</span>
              <p>Their email platform (ConvertKit, Mailchimp, etc.)</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">📊</span>
              <p>Their spreadsheets</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">💬</span>
              <p>Their customer service email</p>
            </div>
            <div className="flex items-start">
              <span className="mr-2">🏪</span>
              <p>Their course platform or Shopify backend</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>Your job: Just clean shit up.</p>
            <p>&#10004; Remove duplicate emails.</p>
            <p>&#10004; Fix formatting. </p>
            <p>&#10004; Consolidate spreadsheets.</p>
            <p>&#10004; Answer simple customer questions.</p>
            <p>&#10004; Organize their mess.</p>


            <p>It's boring. It's tedious. But it's EASY.</p>

            <p>You do this for 5 hours. You document everything you did in a simple Google Doc. You send it to them: "Here's what I cleaned up. Here's what I found. Here's what I'd recommend doing next."</p>


            <p className="font-semibold text-xl">WEEK 4: Getting testimonial + first paid client</p>

            <p>After the free work, you ask: "If you're happy with the work, would you mind giving me a quick testimonial I can use?"</p>

            <p>They say yes. Now you have proof.</p>

            <p>You also ask: "Would you like me to continue on a paid basis? I do $600/month for 10 hours of work like this."</p>

            <p>50% of the time, they say yes. That's your first paid client.</p>


            <p className="font-semibold text-xl">WEEK 5-8: Getting client #2</p>
            <p>Now you have a testimonial. You have proof you've done this before.</p>
            <p>You send the same message to 20 more people. But now you modify it:</p>
            <div className="shadow-xl p-6 rounded-lg my-4 border border-gray-200">
              <p className="font-fun italic text-gray-700">"Hey [Name], I saw you're running [their business]. I do client cleanup work for small online businesses—organizing customer data, cleaning email lists, handling basic admin work. I currently work with [first client's business name/industry]. I have room for one more client at $600/month for 10 hours of work. Would you be interested in a quick call to see if it's a fit?"</p>
            </div>
            <p>This converts at 10-15%. Out of 20 messages, 2-3 want to talk. 1 becomes a client.</p>
            <p className="font-semibold text-xl">MONTH 3+: Maintaining 2 clients</p>
            <p>You now have 2 clients. $1,200/month.</p>
            <p>You work:</p>
          </div>

          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex mb-2">
                <span className="mr-2">🗓️</span>
                <p className="font-semibold">Tuesday night:</p>
              </div>
              <p>2 hours</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex mb-2">
                <span className="mr-2">🗓️</span>
                <p className="font-semibold">Thursday night:</p>
              </div>
              <p>2 hours</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex mb-2">
                <span className="mr-2">🗓️</span>
                <p className="font-semibold">Saturday morning:</p>
              </div>
              <p>3 hours</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">🗓️</span>
                <p className="font-semibold">Sunday morning:</p>
              </div>
              <p>3 hours</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>Total: 10 hours/week. Split between 2 clients.</p>
            <p>The work is simple:</p>
          </div>

          <div className="my-6 space-y-4">
            <div className="flex items-start">
              <span className="mr-3">📧</span>
              <div>
                <p className="font-semibold">Monday:</p>
                <p>Check both clients' customer service emails, respond to simple stuff</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🧹</span>
              <div>
                <p className="font-semibold">Tuesday:</p>
                <p>Client A's email list cleanup</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3">📊</span>
              <div>
                <p className="font-semibold">Thursday:</p>
                <p>Client B's data organization</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="mr-3">🎯</span>
              <div>
                <p className="font-semibold">Weekend:</p>
                <p>Whatever bigger projects they need</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>That's it. That's the whole system.</p>
            <p className="font-semibold">WHY DOES THIS ACTUALLY WORK?</p>
            <p>It works because:</p>
          </div>

          <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">🚪</span>
                <p className="font-semibold">The barrier to entry is zero</p>
              </div>
              <p>(no money, no special skills)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">😴</span>
                <p className="font-semibold">The work is boring</p>
              </div>
              <p>(so most people won't compete with you)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">📈</span>
                <p className="font-semibold">The demand is constant</p>
              </div>
              <p>(every online business needs this)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">💸</span>
                <p className="font-semibold">The pay is immediate</p>
              </div>
              <p>(you get paid this month, not in 6 months)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">📅</span>
                <p className="font-semibold">It's predictable</p>
              </div>
              <p>(same work every week, no surprises)</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="mr-2">😌</span>
                <p className="font-semibold">You can do it tired</p>
              </div>
              <p>(doesn't require creativity or being "on")</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <div className="flex items-center mb-2">
                <span className="mr-2">⚖️</span>
                <p className="font-semibold">It scales to your life</p>
              </div>
              <p>(want more money? Add client #3)</p>
            </div>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <p>Is this going to make you a millionaire? No.</p>
            <p>Is this going to get you from broke-by-Tuesday to breathing-room? Yes.</p>
            <p>And that's the whole point.</p>
          </div>
        </div>

        {/* But wait section */}
        <div className="my-12">
          <h2 className="text-3xl my-8 font-bold text-center my-8">"BUT WAIT, I DON'T KNOW HOW TO DO ANY OF THIS"</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>Yes, you do.</p>
            <p>Can you use email? Then you can do customer service.</p>
            <p>Can you use Excel or Google Sheets? Then you can organize data.</p>
            <p>Can you use Facebook? Then you can clean up an email list (it's literally the same complexity).</p>
            <p>The work is NOT hard. It's just boring. That's why people will pay you to do it.</p>

            <p className="text-3xl my-8 font-bold text-center">But let me address the real fear underneath that question.</p>

            <p>You're not actually worried about whether you CAN do it. You're worried about looking stupid. About failing. About trying something else and having it not work AGAIN.</p>
            <p className='font-bold'>I get it.</p>
            <p>Here's what I wish someone had told me:</p>

            <p>You're already failing. Right now. </p>
<p>How?</p>
<p className='text-lg font-bold'>Let me explain:</p>

            <p> &#10163; Every month that you're broke before your next paycheck is a failure.</p>

            <p> &#10163; Every time you decline an invitation because you can't afford it is a failure. </p>

            <p> &#10163; Every time you panic about your bank account is a failure.</p>


            <p>And the truth is...</p>

            <p className="text-3xl my-8 font-bold text-center">You're not avoiding failure by not trying this. You're just staying in the failure you already know.</p>

            <p>This is a different kind of failure risk. If you try this and it doesn't work, you're out... what? 10 hours? And then you're back exactly where you are now.</p>

            <p>But if you DON'T try this, you KNOW where you'll be in 6 months.</p>

            <p>Same place. Same broke before next paycheck. Same constant worry. Same feeling like a failure.</p>

            <p>The question isn't "What if this doesn't work?"</p>

            <p>The question is: "Can you handle another year of what you're doing right now?"</p>
          </div>
        </div>

        {/* 90 days section */}
        <div className="my-12">
          {/* <h2 className="text-3xl my-8 font-bold text-center my-8">WHAT YOUR LIFE ACTUALLY LOOKS LIKE IN 90 DAYS</h2> */}
          <h2 className="text-5xl font-bold text-center my-8">PICTURE THIS</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            {/* <p>Let me paint you a picture.</p> */}
            <p>It's 90 days from now. Three months.</p>
            <p>You wake up on a Saturday. You check your bank account. Not because you're scared, just... because.</p>
            <p>You have $847 sitting there. Plus you know another $600 hits on Monday from Client A. And $600 more the following week from Client B.</p>
            <p>Your car made that noise again. You take it to the mechanic. He says it's $340 to fix.</p>
            <p>You don't panic. You don't calculate. You don't push it off. You just... fix it. Same day.</p>
            <p>That night, your friend texts: "Bar tonight?"</p>
            <p className='text-3xl my-8 font-bold text-center'>You don't make an excuse. You don't check your bank account twelve times. You just go. You buy a round. It's $35. You don't think about it.</p>
            <p>Sunday morning, you work for 3 hours. Client B needs their email list cleaned up. You do it while watching Netflix. You're in your pajamas. You're drinking coffee. It's boring as hell.</p>


            <p className="text-3xl my-8 font-bold text-center">But you're getting paid $75/hour to do it.</p>


            <p>Monday comes. You go to your regular job. It still sucks. But now? It doesn't feel like a trap. It feels like... a job. Just a job. Because you know you have something else. Something that's yours.</p>

            <p>Month end comes. You get your paycheck from your regular job.</p>

            <p>And you're NOT broke.</p>

            <p>You still have money from last pay. Plus the $600 that hit Monday. Plus you know another $600 is coming.</p>

            <p>For the first time in years, you breathe.</p>
            <p>That knot in your stomach? The one that's been there so long you forgot what it felt like to not have it?</p>
            <p>It's gone.</p>
            <p>You're not rich. Your life isn't perfect. You still have problems.</p>
            <p>But you're not suffering anymore.</p>
            <p>And that difference is everything.</p>
          </div>
        </div>

        {/* Mental shift section */}
        <div className="my-12">

            <p>Plus, in addition to that…</p>
          <h2 className="text-3xl my-8 font-bold text-center my-8">
            Here's what nobody tells you about getting out of being broke:

          </h2>
          {/* <h2 className="text-3xl my-8 font-bold text-center my-8">THE MENTAL SHIFT NOBODY TALKS ABOUT</h2> */}
          <div className="space-y-6 text-lg leading-relaxed">
            <p>Look, the best part isn't the money.</p>
            <p>I mean, the money is great. Obviously.</p>
            <p>But the BEST part is that you stop feeling stupid.</p>

            <p>Right now, every time you see someone making it work, you feel like a failure. Every guru on Instagram. Every friend who's doing okay. Every person who isn't constantly stressed about money.</p>

            <p>It makes you feel like you're just not smart enough. Like everyone else figured out something you can't.</p>

            <p>That feeling? It destroys you. More than the actual being broke part.</p>

            <p className="text-3xl my-8 font-bold text-center">When I made my first $600 from a client, you know what changed?</p>
            <p>It wasn't that I could pay rent easier (though I could).</p>
            <p className='font-bold italic'>It was that I stopped feeling like a failure.</p>
            <p>Because I PROVED to myself that I could do something. That I wasn't stupid. That I could figure something out. That I wasn't trapped forever.</p>
            <p>That mental shift is worth more than the money.</p>
            <p>&#9733; You stop avoiding your friends because you're ashamed.</p>
            <p>&#9733; You stop feeling like you're falling behind.</p>
            <p>&#9733; You stop feeling like life is just something that happens TO you.</p>
            <p>&#9733; You start feeling like maybe—MAYBE—you have some control.</p>
            <p>And that feeling? That's what lets you sleep at night.</p>
          </div>
        </div>

        {/* What happens next section */}
        <div className="my-12">
          <h2 className="text-3xl my-8 font-bold text-center my-8">NOW, HERE'S WHAT HAPPENS NEXT</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>Look, I'm going to be straight with you.</p>
            <p>I've laid out the entire method. You could take what I just told you and go do it right now. Send 20 messages. Get a client. Start getting paid.</p>
            <p>But here's the reality:</p>
            <p>You probably won't.</p>
            <p>Not because you can't. But because when you sit down to actually DO it, you'll freeze.</p>

            <p className="text-xl font-bold">You'll think:</p>
            <p>&#10132; "What exactly do I say in the message? "</p>
            <p>&#10132; "What if they ask me a question I don't know how to answer?"</p>
            <p> &#10132; "What tools do I need?" </p>
            <p>&#10132; "How do I price it?"</p>
            <p>&#10132; "What if I screw it up?"</p>
            <p>&#10132; "What if they can tell I've never done this before?"</p>

            <p className='text-3xl my-8 font-bold text-center my-8'>And all those questions will feel like walls. And you'll close the laptop and tell yourself <span className='italic'>"I'll do it tomorrow."</span></p>
            <p>And tomorrow never comes.</p>
            <p>So I made something.</p>
            <p>It's called <span className="font-bold">The Cleanup Client Blueprint</span>.</p>
            <p>It's everything you need to actually DO this. Not just understand it. DO it.</p>
          </div>

          {/* INSERT THE EBOOK MOCKUP COMPONENT HERE */}
<EbookMockupWithBadge />

          <BonusSection />
          
          <div className="space-y-6 text-lg leading-relaxed mt-8">
            <p>The whole thing is ₦5,000.</p>
            <p>I know what you're thinking: "Great, another thing trying to sell me something."</p>
            <p>Fair. I get it.</p>
            <p className='text-3xl my-8 font-bold text-center'>But let me put it this way:</p>
            <p>₦5,000 is what you spend on... what? Gas? mobile data for three days? That thing you bought on Amazon last week that you already forgot about?</p>
            <p>If you stay broke for another month, that costs you way more than ₦5,000.</p>
            <p>The overdraft fees alone cost more than ₦5,000.</p>
            <p>The stress of being broke costs you way more than ₦5,000 in therapy you can't afford.</p>

<CTAButton
  buttonText="YES! Grab My Copy At This Steal Price"
  href="https://selar.com/cleanup"
  subtext="One-time payment • 90-day guarantee"
  variant="danger" // Red button like your original
  size='large'
/>

            {/* <p>And here's my guarantee:</p> */}
            <div className="bg-gray-50 p-6 rounded-lg my-6 border border-gray-300">
              <div className="flex items-center justify-center mb-4">
                <span className="text-3xl my-8 mr-3">🛡️</span>
                <h3 className="text-2xl my-8 font-bold">And here's my guarantee:</h3>
              </div>
              <p className="text-center text-xl font-semibold">If you don't have at least one client paying you $600+ within 90 days, I'll refund your ₦5,000 AND buy you lunch.</p>
              <p className="text-center mt-4">Seriously. Send me proof you followed the system, messaged 40 people, and didn't get a client. I'll refund you and Venmo you $20 for lunch.</p>
            </div>
            <p>Why? Because if you actually follow this and it doesn't work, then I'm wrong. And I should pay you for wasting your time.</p>

            <p className="text-xl font-bold">But here's the thing: It will work.</p>

            <p>Because it worked for me. And I'm not special. I'm not smart. I don't have advantages you don't have.</p>
            <p>I was just tired of being broke. And I found something that actually works.</p>
            <p>So the question isn't whether this works.</p>
            <p>The question is: Are you tired enough to try something different?</p>
          </div>
        </div>

        <CTAButton
  buttonText="YES! Let Me Try It Risk-Free"
  href="https://selar.com/cleanup"
  subtext="One-time payment • 90-day guarantee"
  variant="danger" // Red button like your original
/>

        {/* The Choice section */}
        <div className="my-12">
          {/* <h2 className="text-3xl my-8 font-bold text-center my-8">NOW COMES THE TIME FOR YOU TO MAKE THE CHOICE</h2> */}
          <h2 className="text-3xl my-8 font-bold text-center my-8">But pay attention to this part...</h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>Look, you're going to close this page soon.</p>
            <p>And you're going to make a decision.</p>

            <p>One path is staying exactly where you are. Keep doing what you're doing. Keep working the job. Keep being broke before your next paycheck. Keep pushing off the car repair. Keep declining invitations. Keep feeling like a failure.</p>

            <p>Maybe something will magically change. Maybe your job will give you a raise. Maybe you'll win the lottery. Maybe a guru's promise will finally come true.</p>

            <p className='text-3xl my-8 font-bold text-center'>Or maybe you'll just stay stuck. For another month. Another year. Another five years.</p>

            <p>The other path is trying something different.</p>
            <p>Not something crazy. Not something risky. Just... different.</p>
            <p>&#9989;Send 20 messages. &#9989;Do 5 hours of free work. &#9989;Get a testimonial. &#9989;Get a client. &#9989;Get $600 this month. Then $1,200 next month.</p>
            <p>Stop being broke before your next salary. Stop the constant worry. Stop feeling stupid. Stop suffering.</p>
            <p>That's the path.</p>
            <p>It's not exciting. It's not sexy. It won't make you Instagram famous.</p>
            <p>But it works.</p>
            <p>And working is all that matters.</p>
            <p className='font-bold text-3xl my-8 text-center'>So what's it going to be?</p>
          </div>
        </div>

        {/* Pricing and CTA Section */}
        <div className="my-16 text-center">
          <div className="border-t border-gray-300 pt-8 mb-8">
            <p className="text-4xl font-bold mb-4">₦5,000</p>
            <p className="text-gray-600 mb-8">One-time payment. No upsells. No monthly fees.</p>
            {/* <a href="https://selar.com/cleanup">

            <button className="bg-red-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto cursor-pointer">
              GET THE CLEANUP CLIENT BLUEPRINT - ₦5,000
            </button>
            </a> */}

            <CTAButton
  buttonText="I'm Ready to Stop Being Broke"
  href="https://selar.com/cleanup"
  subtext="One-time payment • 90-day guarantee"
  variant="danger" // Red button like your original
  size="large"
/>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed text-left">
            <h2 className="text-5xl text-center font-bold">One last thing:</h2>
            <p>You know that voice in your head right now? The one saying "This probably won't work for me" or "I'll just do it myself without paying ₦5,000" or "Maybe I'll try this later"?</p>
            <p>That voice is the reason you're still broke.</p>
            <p>That voice has been "protecting" you from failure by keeping you from trying anything.</p>
            <p>That voice is not your friend.</p>
            <p>Try something different. Just once.</p>
            <p>See what happens.</p>
          </div>
          
          {/* <div className="mt-12">
            <a href="https://selar.com/cleanup">

            <button className="bg-red-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto cursor-pointer">
              GET THE CLEANUP CLIENT BLUEPRINT - ₦5,000
            </button>
            </a>
          </div> */}

          <CTAButton
  buttonText="YES! I Want to Try Something Different"
  href="https://selar.com/cleanup"
  subtext="One-time payment • 90-day guarantee"
  variant="danger" // Red button like your original
  size='large'
/>
        </div>

        {/* P.S. Section */}
        <div className="my-12 space-y-4 text-gray-700 italic">
          <div className="flex items-start">
            <span className="font-bold mr-2">P.S. -</span>
            <p>Remember: If this doesn't work, I refund you AND buy you lunch. You literally cannot lose. The only way you lose is by not trying.</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold mr-2">P.P.S. -</span>
            <p>I check messages every day. You get stuck on anything, you ask. I answer. You're not doing this alone.</p>
          </div>
          <div className="flex items-start">
            <span className="font-bold mr-2">P.P.P.S. -</span>
            <p>This isn't going to make you rich. But it will make you not-broke. And right now, not-broke sounds pretty fucking good, doesn't it?</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="my-16 text-center">
          <div className="border-t border-gray-300 pt-8">
           <a href="https://selar.com/cleanup">

            <button className="bg-red-600 text-white px-12 py-4 rounded-lg text-xl font-semibold hover:bg-red-800 transition-colors w-full sm:w-auto cursor-pointer">
              I WANT TO STOP SUFFERING - GIVE ME THE BLUEPRINT HERE
              {/* STOP SUFFERING - GET THE BLUEPRINT HERE */}
            </button>
           </a>
          </div>
        </div>
      </div>
    </main>
  );
}