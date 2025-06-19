/* eslint-disable react/no-unescaped-entities */
export default function SalesPage() {
    return (
      <div className="bg-white text-gray-900 font-sans">
        {/* Hero Section */}
        <section className="relative py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-4xl mx-auto text-center">
            <span className="bg-red-100 text-red-800 font-bold px-4 py-2 rounded-full mb-6 inline-block">
              🔊 Attention: If You're Tired of Posting Online But Still Can't Make Sales...
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              How to Start a Simple Business That Attracts Paying Strangers — Even If You Don't Know What to Sell or Have Never Sold a Thing in Your Life
            </h1>
            <p className="text-xl text-gray-800 mb-8">
              You may think you've tried everything — but once you learn this beginner-friendly method, you'll finally start making sales and prove you're not just "hustling" anymore.
            </p>
          </div>
        </section>
  
        {/* Letter Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-orange-500 pl-6 mb-12">
              <h2 className="text-2xl font-bold">Dear Frustrated Hustler,</h2>
            </div>
            
            <div className="space-y-6 text-lg">
              <p>Be honest with me:</p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Have you ever posted your product or service online... and felt embarrassed when no one liked, commented, or asked "how much"?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Do you secretly hate the idea of begging friends and family to "support your hustle"... because they either ignore you or say "I go run am" and never do?</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 mt-1">•</span>
                  <span>Are you starting to wonder if making money online is just a scam for people who already have money, followers, or tech skills?</span>
                </li>
              </ul>
  
              <div className="p-6 bg-orange-50 rounded-lg">
                <p className="font-bold">If you nodded "yes" to any of those...</p>
                <p className="mt-2 font-bold text-orange-700">Then this message was made exactly for you.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Story Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <p className="text-xl mb-8">I didn't always know what I was doing.</p>
            <p className="mb-8">In fact, I was the guy who did everything they told me to do...</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "I created a logo",
                "Set up an Instagram page",
                "Posted mockups, reels, quotes, random product shots",
                "Shared it in every WhatsApp group I was in"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <span className="mr-2">•</span> {item}
                </div>
              ))}
            </div>
  
            <div className="p-6 bg-white rounded-xl shadow-sm mb-10">
              <p className="italic">"Hey boss, help me repost this na. Support your guy 🙏🏽"</p>
              <p className="mt-4 font-bold">But the worst part?</p>
              <p className="font-bold text-red-600">Crickets.</p>
              <p className="mt-2">No likes. No messages. Just my cousin commenting "🔥🔥" out of pity.</p>
            </div>
  
            <div className="space-y-6">
              <p>Each time I tried something new... I'd get my hopes up like "Maybe this will be the one."</p>
              <p className="font-bold">Then boom. Nothing. No orders. No interest. No money.</p>
              <p>I started questioning myself.</p>
              
              <div className="p-6 bg-gray-100 rounded-lg">
                {[
                  '"Am I not cut out for this business thing?"',
                  '"Do people even buy online from small sellers?"',
                  '"Maybe I need to learn graphic design, or coding, or run Facebook ads..."'
                ].map((quote, index) => (
                  <p key={index} className="italic mb-2">{quote}</p>
                ))}
              </div>
  
              <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold">And the sad truth?</p>
                <p>It wasn't that I was lazy. Or unserious.</p>
                <p className="mt-2 font-bold text-blue-700">It was just that nobody ever taught me how to attract strangers who want what I sell.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Truth Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">The truth is... most of us were never shown the real way to sell.</h2>
            <p className="text-xl mb-8">We were just told to "start something" and "keep posting."</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  title: "Posting isn't selling",
                  emoji: "📱"
                },
                {
                  title: "Broadcast messages aren't marketing",
                  emoji: "📢"
                },
                {
                  title: "Begging isn't business",
                  emoji: "🙏"
                }
              ].map((item, index) => (
                <div key={index} className="p-6 bg-gray-50 rounded-lg text-center">
                  <span className="text-3xl mb-3 block">{item.emoji}</span>
                  <p className="font-bold">{item.title}</p>
                </div>
              ))}
            </div>
  
            <div className="flex items-center mb-8">
              <span className="bg-yellow-100 text-yellow-800 text-2xl font-bold px-4 py-2 rounded-full mr-4">💡</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Then Everything Changed...</h2>
            </div>
            
            <div className="space-y-6">
              <p>One random night — after failing for the 100th time — I stumbled on a concept that flipped the script for me.</p>
              <p className="font-bold">It wasn't some "secret app" or hack. It was a simple shift in how I presented what I sold.</p>
              
              <div className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
                <p className="text-xl font-bold mb-2">I call it the:</p>
                <h3 className="text-2xl sm:text-3xl font-bold">👉🏽 Stranger Magnet Method</h3>
                <p className="mt-4">And it's what helped me go from:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <p className="font-bold">❌ Posting and praying...</p>
                  </div>
                  <div className="bg-white bg-opacity-10 p-4 rounded-lg">
                    <p className="font-bold">✅ Attracting total strangers who wanted to buy — without me chasing them.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Method Breakdown */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Let me break it down for you:</h2>
            
            <div className="p-6 bg-white rounded-xl shadow-sm mb-10">
              <p className="font-bold">This method isn't about "posting more" or "adding value" like the Instagram gurus scream about.</p>
              <p className="mt-4">It's a step-by-step strategy for:</p>
            </div>
  
            <div className="space-y-6">
              {[
                "✅ Figuring out what people are already desperate to pay for",
                "✅ Packaging your offer in a way that sounds like it was made for them",
                "✅ Positioning yourself so strangers see you as the obvious choice",
                "✅ Selling without begging, spamming, or sounding desperate",
                "✅ Starting even if you've never sold a thing in your life"
              ].map((item, index) => (
                <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                  <span className="mr-2 mt-1">•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
  
            <div className="p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500 mt-12">
              <p className="font-bold">No complex tech. No annoying broadcasts. No waiting for "support from friends."</p>
            </div>
          </div>
        </section>
  
        {/* Proof Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <span className="bg-green-100 text-green-800 text-2xl font-bold px-4 py-2 rounded-full mr-4">🧾</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Proof?</h2>
            </div>
            
            <div className="space-y-6">
              <p className="text-xl">The first time I used this method, I made ₦50,000 in 2 weeks...</p>
              <p className="font-bold text-green-700">From total strangers.</p>
              <p>People I had never met before. No followers. No connections. Just the right message in front of the right people.</p>
              <p className="font-bold">And once it clicked?</p>
              <p className="font-bold text-green-700">The sales didn't stop.</p>
            </div>
  
            <div className="p-6 bg-gray-50 rounded-xl mt-12">
              <p>That's the same system I've now put inside a 37-page step-by-step guide — so you can learn it, apply it, and start getting results too.</p>
              <p className="mt-4 font-bold">Even if:</p>
              <ul className="mt-2 space-y-2">
                {[
                  "You don't have a product yet",
                  "You've never sold online before",
                  "You're scared people won't buy from you",
                  "Or you've tried before and failed"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
  
        {/* Struggle Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-red-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <span className="bg-red-100 text-red-800 text-2xl font-bold px-4 py-2 rounded-full mr-4">😫</span>
              <h2 className="text-2xl sm:text-3xl font-bold">But I Won't Lie—Getting Here Was Hell</h2>
            </div>
            
            <p className="mb-6">Before this method?</p>
            <p className="font-bold">I was that guy.</p>
            
            <div className="space-y-6 mt-8">
              {[
                "The one people muted in WhatsApp groups.",
                "The one posting flyers every day on IG, hoping this one would finally get likes.",
                "The one waking up to messages like: 'Bro I like what you're doing o... but things dey tight right now.'"
              ].map((item, index) => (
                <p key={index} className="flex items-start">
                  <span className="mr-2">•</span> {item}
                </p>
              ))}
            </div>
  
            <div className="p-6 bg-white rounded-lg shadow-sm mt-10">
              <p>I even tried begging my cousins to repost. Guess what they did?</p>
              <p className="mt-2 font-bold text-red-600">Nothing.</p>
              <p className="mt-2">Nobody cared. Not because they're evil... But because I looked like every other hustler out there — shouting, spamming, hoping.</p>
            </div>
  
            <div className="mt-10 space-y-6">
              <p>I spent months buying courses that overpromised and under-delivered. Downloaded ebooks that made zero sense in a Nigerian context. Even tried copying big sellers — but without their audience or budget, I was toast.</p>
              <p className="font-bold">It was frustrating.</p>
              <p className="font-bold text-red-700">Worse? It felt like maybe I just wasn't cut out for this "online business" thing.</p>
              <p className="italic">Like maybe I should just shut up and manage my 9–5...</p>
            </div>
          </div>
        </section>
  
        {/* Breakthrough Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <span className="bg-green-100 text-green-800 text-2xl font-bold px-4 py-2 rounded-full mr-4">💰</span>
              <h2 className="text-2xl sm:text-3xl font-bold">But I Kept Digging</h2>
            </div>
            
            <div className="space-y-6">
              <p>I tested what didn't work. Studied what worked for others. Tweaked. Rewrote. Failed. Again. Then something clicked.</p>
              <p className="font-bold">I packaged everything into a system that's so beginner-friendly, I honestly wish I had it when I started.</p>
              <div className="p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <p className="font-bold">Because trust me — if you had to go through everything I went through?</p>
                <p className="mt-2">You'd quit.</p>
                <p className="mt-2">And you wouldn't be wrong to.</p>
              </div>
              <p className="font-bold text-blue-700">That's why I wrote the guide — so you don't have to go through all that mess.</p>
              <p>You get to skip the trial-and-error. Skip the embarrassment. And go straight to the steps that work.</p>
            </div>
          </div>
        </section>
  
        {/* What's Inside */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Here's how this 37-page ebook works:</h2>
            
            <div className="space-y-8">
              {[
                {
                  title: "Step 1: Pick an Idea the Market Already Wants to Pay For",
                  content: "I don't throw 100 business ideas at you like a desperate guru with a Canva template addiction. Instead, I give you a filtering system. You'll take what you're already thinking about — or what people around you keep complaining about — and plug it into my 10-point scoring checklist. You'll instantly know if that idea is profitable, pointless, or needs a twist."
                },
                {
                  title: "Step 2: Test That Idea Without Building Anything",
                  content: "This is where broke geniuses waste 6 months of their life. They build, they pray, they launch... and nothing happens. I'll show you exactly how to test if people will pay for your idea — before you touch Canva, before you write a line of code, and before you 'launch' anything. (Yes, you can do this with just your phone and zero budget.)"
                },
                {
                  title: "Step 3: Use the 'Trigger Map' to Craft a Product People Beg For",
                  content: "Most broke people sell 'needs.' 'Learn web design.' 'Fix your CV.' 'Improve your mindset.' Yawn. In the book, I walk you through how to wrap your offer in raw desire. Because people don't pay for kale. They pay for shawarma. So I show you how to turn your offer into shawarma — without removing the nutrients."
                },
                {
                  title: "Step 4: Create a Blue Ocean Offer (Even in Crowded Niches)",
                  content: "'I want to start something... but the market is too saturated.' Cool. I wrote 2 chapters for you. Not theory — actual examples of how to carve out your own space even if you're in: Education, Religion, Skincare, Food, Tech, CV writing, Digital skills training. You'll see the 4 ways to 'own' a crowded market without fighting the giants."
                },
                {
                  title: "Step 5: Launch Like a Rebel (Without Ads)",
                  content: "No capital? No problem. I break down my 'Broke Marketing Blueprint' — built for people with nothing but grit and Wi-Fi. 3 phases: Stalk — Find people with pain, Strike — Craft an irresistible message, Sell — Offer value, close fast. No sleaze. No fake scarcity. No gimmicks."
                },
                {
                  title: "Step 6: Make Your First Sales — Then Scale Like a Savage",
                  content: "Once you start making money? I walk you through how to raise your price, kill self-doubt, build hype, and multiply your revenue without begging for referrals or crying about 'algorithm reach.' You'll learn: How to price so high-value clients chase you, How to get people talking (without paying for testimonials), How to dominate a niche without hopping around like a broke kangaroo, How to run savage, high-converting ads (when you can finally afford them)"
                }
              ].map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold mb-4">✅ {step.title}</h3>
                  <p>{step.content}</p>
                </div>
              ))}
            </div>
  
            <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl">
              <p className="text-xl font-bold mb-4">That's it.</p>
              <p>No 14-week course. No expensive toolkits. No "wait for module 7 to get the full value."</p>
              <p className="mt-4 font-bold">Just 37 raw, blunt, straight-talking pages that walk you through every step from:</p>
              <p className="text-xl font-bold text-center mt-4">"I'm broke and confused" → "People are buying from me."</p>
            </div>
          </div>
        </section>
  
        {/* Bonuses Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="bg-yellow-100 text-yellow-800 font-bold px-4 py-2 rounded-full mb-4 inline-block">
                🎁 BUT WAIT... You're Also Getting These 4 Insane Bonuses (Free If You Act Today)
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold">Let's sweeten this ₦4,500 deal until it feels unfairly in your favour.</h2>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  title: "BONUS #1: 'Impulse Offer Alchemy'",
                  subtitle: "How to Create Offers So Irresistible, They Convert Like Black Friday at 3 a.m.",
                  content: "No logo. No personal brand. No fancy funnel. Just straight, punchy, 'shut up and take my money' offers. This is the secret weapon behind people who sell out their ₦10k–₦100k offers — even if nobody knows them.",
                  value: "₦10,000"
                },
                {
                  title: "BONUS #2: 'Landing Pages That Sell (Not Sedate)'",
                  subtitle: "Forget pretty. Learn profitable.",
                  content: "Nobody cares about a clean design if your words are boring. This bonus teaches you how to write pages that actually convert — whether you're using WhatsApp, Linktree, a simple Google Doc, or a full-blown site.",
                  value: "₦15,000"
                },
                {
                  title: "BONUS #3: 'The Broke, Hungry, Angry Blueprint'",
                  subtitle: "What to do when you've got zero funds, zero luck, and zero patience",
                  content: "This is not your motivational 'you can do it' rubbish. It's a short, savage guide written for: The guy who's been trying for months with no sale, The girl who knows she's smart but can't catch a break, The rebel who's tired of watching fake gurus win",
                  value: "Priceless"
                },
                {
                  title: "BONUS #4: 'Yeah... A Guarantee'",
                  subtitle: "Because if this ebook doesn't punch you in the brain and make you rethink everything...",
                  content: "Then message me. Say 'this wasn't worth it.' And I'll send your ₦4,500 back. No questions. No stress. No ego.",
                  value: ""
                }
              ].map((bonus, index) => (
                <div key={index} className="border-2 border-blue-200 rounded-xl p-6 bg-blue-50">
                  <h3 className="text-xl font-bold text-blue-800 mb-2">{bonus.title}</h3>
                  <p className="font-bold mb-4">{bonus.subtitle}</p>
                  <p className="mb-4">{bonus.content}</p>
                  {bonus.value && (
                    <p className="font-bold">(Value: {bonus.value}. Yours: Free)</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Investment Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <span className="bg-purple-100 text-purple-800 text-2xl font-bold px-4 py-2 rounded-full mr-4">💸</span>
              <h2 className="text-2xl sm:text-3xl font-bold">SO... What's The Investment?</h2>
            </div>
            
            <div className="space-y-6">
              <p>Let's be honest: If I was charging what this thing is actually worth, you wouldn't be paying in naira.</p>
              <p className="font-bold">You'd be wiring me dollars. Possibly crypto. And whispering, "Please don't tell anyone else about this."</p>
              
              <div className="p-6 bg-white rounded-xl shadow-sm mt-8">
                <p className="font-bold mb-4">Why?</p>
                <p className="mb-6">Because when you add it all up...</p>
                
                <div className="space-y-4">
                  {[
                    "The main ebook that shows you how to start a real, working business",
                    "Bonus #1: Impulse Offer Alchemy",
                    "Bonus #2: Landing Pages That Sell",
                    "Bonus #3: The Broke, Hungry, Angry Blueprint",
                    "Bonus #4: The 'Yeah... A Guarantee' Guarantee"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 mt-1">•</span> {item}
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 font-bold">You're looking at ₦45,000+ in real value. (That's being conservative.)</p>
              </div>
  
              <div className="text-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl mt-8">
                <p className="text-xl mb-4">But are you paying ₦45,000?</p>
                <p className="text-2xl font-bold mb-2">Not even close.</p>
                <p className="mb-4">Not ₦30,000. Not ₦20,000. Not ₦10,000.</p>
                <p className="text-3xl font-bold">👉🏽 Today, you get everything for just ₦4,500.</p>
                <p className="mt-4">Yes. That's not a typo.</p>
                <p className="text-4xl font-bold mt-4">₦4,500.</p>
                <p className="mt-4">Less than what you spent this week on shawarma and airtime.</p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Guarantee Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-8">
              <span className="bg-red-100 text-red-800 text-2xl font-bold px-4 py-2 rounded-full mr-4">😤</span>
              <h2 className="text-2xl sm:text-3xl font-bold">Here's My Savage 90-Day "Love It or It's Free" Guarantee</h2>
            </div>
            
            <div className="space-y-6">
              <p>Listen, I know what it feels like to buy something online and immediately think:</p>
              <p className="italic">"What if I just wasted my money again?"</p>
              <p>You feel played. Like a mugu. And you hate that feeling more than anything.</p>
              <p className="font-bold">So I'm not even going to let that possibility live in your head.</p>
              <p className="font-bold text-blue-700">Here's what I'm doing instead:</p>
              
              <div className="p-6 bg-gray-50 rounded-lg mt-8">
                <div className="space-y-4">
                  {[
                    "👉🏽 Buy this ₦4,500 ebook today",
                    "👉🏽 Read it. Use it. Apply it.",
                    "👉🏽 And if within 90 days, you don't think it's worth at least ₦45,000+..."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 mt-1">•</span> {item}
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 space-y-2">
                  <p>If you don't feel 10x clearer on what business you should start —</p>
                  <p>If you don't feel like you've finally gotten someone to slap the "nonsense" out of your head and give you a real game plan —</p>
                  <p>If you don't feel a little angry that you didn't get this 3 years ago…</p>
                </div>
                
                <p className="mt-6 font-bold">Then just send an email to:</p>
                <p className="font-bold text-blue-600">📩 refund@broke-to-ballin.com</p>
                <p className="mt-2">And I'll personally return every single kobo you paid. Fast. No drama. No wahala.</p>
              </div>
  
              <p className="font-bold mt-8">Why am I doing this?</p>
              <p>Because I know this thing works. It's not fluff. It's not fake guru sauce. It's 37 pages of pure brain-rattling clarity and real business sense built for Nigerians who are sick of bullsh*t.</p>
              <p className="font-bold text-blue-700">So yeah, I'll eat the risk. I'll take the blame if it doesn't hit.</p>
              <p className="font-bold">You? You've got nothing to lose... and a business to gain.</p>
            </div>
          </div>
        </section>
  
        {/* Final CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 to-blue-700 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">⚡ Here's EXACTLY How To Get Your Copy Right Now</h2>
            
            <div className="space-y-6 mb-10">
              <p>Alright. Enough talking.</p>
              <p>You've seen what this 37-page business wake-up call can do. You've seen the bonuses. You've seen the guarantee.</p>
              <p className="font-bold">Now it's decision time.</p>
              <p className="font-bold text-yellow-300">You're either going to keep sitting around thinking... or you're finally going to start building something real.</p>
            </div>
  
            <div className="bg-white p-6 rounded-xl shadow-xl text-gray-900">
              <h3 className="text-xl font-bold mb-4">✅ OPTION 1: Bank Transfer (Preferred Method)</h3>
              <div className="text-left max-w-md mx-auto">
                <p className="mb-2">📌 Send ₦4,500 to the account below:</p>
                <p className="font-bold">Bank Name: [Your Bank Name]</p>
                <p className="font-bold">Account Name: [Your Account Name]</p>
                <p className="font-bold">Account Number: [Your Account Number]</p>
                <p className="font-bold">Amount: ₦4,500 only</p>
                <p className="font-bold">Narration: Your Name + 'Broke to Ballin' Ebook</p>
              </div>
              
              <p className="mt-6 font-bold">🧾 After payment, send a screenshot of your transfer to:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <a href="#" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform transition hover:scale-105 duration-300">
                  📨 WhatsApp: [Your WhatsApp Number]
                </a>
                <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform transition hover:scale-105 duration-300">
                  📧 Or email: [Your Email Address]
                </a>
              </div>
              
              <p className="mt-8 font-bold">We'll confirm and deliver your ebook + bonuses within 15 minutes (max 1 hour during rush).</p>
            </div>
  
            <div className="mt-12 p-6 bg-yellow-50 rounded-xl text-gray-900">
              <p className="font-bold text-lg mb-4">❗ Why Act Now?</p>
              <p>Because you and I both know how this goes.</p>
              <p className="mt-2">You'll think "I'll do it later." Then life will hit. You'll forget. And in 3 months you'll still be broke, confused, and mad at yourself for not starting.</p>
              <p className="mt-4 font-bold">This price is temporary. These bonuses are limited.</p>
              <p className="font-bold text-red-600">You either grab it now... or you miss out.</p>
            </div>
  
            <div className="mt-12">
              <a href="#" className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-xl transform transition hover:scale-105 duration-300 inline-block">
                👉🏽 Click Here To Get Instant Access Now
              </a>
            </div>
          </div>
        </section>
      </div>
    )
  }