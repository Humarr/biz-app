/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    const paymentLink = "https://selar.com/small-biz"
  return (
    <main className="min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="bg-yellow-50 py-12 px-4 md:px-8 border-b-4 border-yellow-400">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-8 leading-tight">
            ATTENTION: From The Desk Of Top Nigerian Entrepreneur Revealing…
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-800">
                The Secrets To Starting An Outrageously Profitable "Small Business" You're Not Supposed To Know
              </h2>
              <p className="text-xl mb-6">
                And they have the "ultimate power" to build and scale your business - even if you're starting from zero - by adding an extra 500k - 1 million naira (or more) to your monthly income as soon as you start putting them into fast action!
              </p>
              <p className="text-xl font-semibold">
                In fact, it doesn't matter if you are a Teacher, Civil Servant, Student, Fresh Graduate, Unemployed, Stay-at-home mum, or ANYONE, as long as you want to build a profitable small business from scratch!
              </p>
            </div>
            <div className="md:w-1/2">
              {/* IMAGE: A successful Nigerian entrepreneur standing in front of a modern Lagos office building, smiling confidently while holding a tablet showing business growth charts */}
              <Image
                src="/small-biz/hero-image.png"
                alt="Successful Nigerian entrepreneur showing business growth"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Dear soon-to-be Business owner,
          </h2>
          
          <div className="mb-12">
            <p className="text-xl mb-6">
              Did you know most people who try to start a business fail miserably? It's true. Some even go bankrupt and lose their properties!
            </p>
            <p className="text-xl mb-6">
              Also, did you know that the number one reason most people fail in business is not because they're lazy but because they don't know how to spot good business ideas?
            </p>
            <p className="text-xl mb-6">
              And to "burst your brain," did you know that 99% of people never start a business, and they carry that regret like a 50-kg chain around their neck for the rest of their lives?
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              {/* IMAGE: A visual showing the stark contrast between a successful Nigerian business owner (well-dressed, confident) versus someone stuck in a low-paying job (looking stressed, counting small money) */}
              <Image
                src="/small-biz/contrast-image.png"
                alt="Contrast between successful business owner and struggling employee"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-red-600">
                Because… Let's be honest…
              </h3>
              <p className="text-xl font-semibold mb-6">
                Here's the problem you face: most people think starting a business is so risky and takes so long they can't imagine becoming a business owner…
              </p>
              <p className="text-xl">
                …so they rather stay in that job where no matter how hard they work, their pay is fixed, and often not enough to pay their bills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 md:px-8 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-red-700">
            Which means, you'll never get to live the life of your dreams to the fullest and be financially free
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-800">Because look, you're being robbed…</h3>
              <ul className="text-xl space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  And inflation is stealing your buying power…
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  Everyday, our naira is shrinking in value…
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  The poor average Nigerian is cheated, robbed of a good life, and walked over…
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  The government doesn't even seem to care…
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 font-bold mr-2">•</span>
                  The price of everything is increasing.
                </li>
              </ul>
            </div>
            <div>
              {/* IMAGE: A visual representation of inflation in Nigeria - naira notes losing value, prices rising, a frustrated Nigerian looking at empty wallet */}
              <Image
                src="/small-biz/inflation-image.png"
                alt="Visual representation of inflation in Nigeria"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl mb-6">
              To make matters worse, your salary doesn't reach anywhere again.
            </p>
            <p className="text-xl mb-6">
              And by the time you pay transport, food, NEPA bill, and one small emergency, it's gone.
            </p>
            <p className="text-xl font-bold text-red-700 mb-6">
              The fact is…Everything is just pushing you to the limit.
            </p>
            <p className="text-xl">
              And yet, this is the reality for millions of Nigerians who wake up everyday, grind through long hours, and still end up broke before the next salary comes…
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              {/* IMAGE: A timeline visual showing how salary gets depleted - from salary alert to various deductions until nothing is left */}
              <Image
                src="/small-biz/salary-depletion.png"
                alt="How salary gets depleted with various expenses"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div>
              <p className="text-xl mb-6">
                And sometimes, the salary doesn't even enter your account early.
              </p>
              <p className="text-xl mb-6">
                You work hard. You show up early at work. You fight traffic. And at the end of the month, your boss still delays your salary…
              </p>
              <p className="text-xl mb-6">
                And when they later pay you, the government will first remove their share from your salary as tax…
              </p>
              <p className="text-xl mb-6">
                Then bank apps will remove their own "maintenance fee"...
              </p>
            </div>
          </div>

          <div className="bg-red-100 p-8 rounded-lg mt-8 border-l-4 border-red-600">
            <p className="text-xl mb-6">
              Then your siblings in school will collect their own as "My food stuff has finished"… "Our lecturer said we must buy handouts if we want to pass his course" or "I need ₦100k for my final year project"
            </p>
            <p className="text-xl mb-6">
              Your wife needs to buy that new dress for her friend's wedding….
            </p>
            <p className="text-xl mb-6">
              Your children's school fees are waiting…
            </p>
            <p className="text-xl mb-6">
              Your house rent is due…
            </p>
            <p className="text-xl mb-6">
              Then NEPA will come to take their own…
            </p>
            <p className="text-xl mb-6">
              And you still haven't settled the debts you borrowed…
            </p>
            <p className="text-xl font-bold text-red-800">
              …and that poor food seller on your street, the one you keep collecting food from on credit, is still waiting…
            </p>
            <p className="text-2xl font-bold text-red-800 text-center mt-6">
              Before you know it, you're left with…crumbs.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Introduction */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-green-700">
            If this is you right now, I have good news for you
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: A lightbulb moment graphic with Nigerian colors, showing someone having an epiphany about business success */}
              <Image
                src="/small-biz/good-news-image.png"
                alt="Good news - business opportunity for Nigerians"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-xl mb-6">
                Truth is, there's something those "Top Guys" and the government don't want you to know:
              </p>
              <p className="text-2xl font-bold text-green-800 mb-6">
                you can start a business today and start seeing profits in 2 weeks (or less) IF you follow the right strategy
              </p>
              <p className="text-xl font-semibold italic">
                Wait…what?
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl mb-6">
              Look around you, and you'll see young people— some not even up to 30 years old— making millions every month without doing fraud, crime, or any illegal stuff.
            </p>
            <p className="text-xl mb-6">
              In fact, right now, as you're reading this, thousands of Nigerians just like you are quietly building businesses that generate more money in a month than you currently make in a whole year.
            </p>
            <p className="text-xl font-bold text-center mb-6">
              Sounds hard to believe, right?
            </p>
            <p className="text-xl text-center">
              But they're not smarter than you…
            </p>
            <p className="text-xl text-center">
              Some didn't even have any connections…
            </p>
            <p className="text-xl text-center font-bold">
              And most of them started with less money than you probably have in your account right now.
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl mb-6">
              And with what I'm about to show you, you'll fully understand what I mean…
            </p>
            <p className="text-2xl font-bold text-green-800">
              But first, who the heck is this guy writing to you?
            </p>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: A professional headshot of Umar, the author, looking trustworthy and successful */}
              <Image
                src="/small-biz/umar-profile.png"
                alt="Umar - Author of The Small Business Playbook"
                width={400}
                height={400}
                className="rounded-full mx-auto"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                My name is Umar, and for 374 days straight… I was obsessed with helping people like you escape from the suffocating grip of this crazy economy.
              </h2>
              <p className="text-xl mb-6">
                So, I rolled up my sleeves and got to work.
              </p>
              <p className="text-2xl font-bold text-blue-800">
                And that gave birth to…
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-800 mt-4">
                "THE SMALL BUSINESS PLAYBOOK"
              </h3>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Now, let me be totally honest with you …
            </h3>
            <p className="text-xl mb-6">
              This Playbook you're about to see didn't just drop from heaven. It cost me more than you can imagine.
            </p>
            <p className="text-xl font-bold mb-6">
              Because, for 374 days straight, I went on a research spree like a mad man…
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                {/* IMAGE: A stack of business books with Nigerian context visible (Naira notes, Nigerian authors) */}
                <Image
                  src="/small-biz/research-books.png"
                  alt="Stack of business books researched"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <p className="text-lg mt-4">
                  I dug into more than 137 books on money, marketing, and busness—books that are hard to find in Nigeria, and cost me a fortune to ship in.
                </p>
              </div>
              <div>
                {/* IMAGE: Someone watching interviews of successful Nigerian entrepreneurs on a laptop */}
                <Image
                  src="/small-biz/interview-research.png"
                  alt="Researching Nigerian success stories"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <p className="text-lg mt-4">
                  I watched over 250 interviews and success stories from Nigerians who went from broke to building successful businesses.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                {/* IMAGE: Umar meeting with business owners in different Nigerian settings (Lagos office, Onitsha market, Abuja tech hub) */}
                <Image
                  src="/small-biz/field-research.png"
                  alt="Meeting with successful Nigerian business owners"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <p className="text-lg mt-4">
                  I sat down with business owners (who all started from scratch) in Lagos, traders in Onitsha, tech guys in Abuja—studying how they built their successful ventures…
                </p>
              </div>
              <div>
                {/* IMAGE: Visual representation of sacrifice - empty plate, transport ticket, late night working */}
                <Image
                  src="/small-biz/sacrifice-image.png"
                  alt="Sacrifices made during research"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <p className="text-lg mt-4">
                  I spent money I didn't have —borrowing, skipping meals, and working late nights just to buy one more course, one more training, one more hidden piece of the puzzle.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-100 p-8 rounded-lg border-l-4 border-blue-600">
            <p className="text-xl mb-6">
              At one point, I had to spend my "last card" on transport fare to go meet a business mentor who only gave me 30 minutes of his time…
            </p>
            <p className="text-xl mb-6">
              I lost friends who couldn't understand why I kept locking myself up every weekend instead of hanging out.
            </p>
            <p className="text-xl mb-6">
              I was insulted by family members who thought I was "just wasting my life chasing dreams"
            </p>
            <p className="text-xl mb-6">
              And yes, I carried debts on my head. There were people I borrowed money from who were still calling me.
            </p>
            <p className="text-xl font-bold mb-6">
              That food seller on my street I kept collecting food on credit from? She would look at me with pity and say, "Umar, just pay me small small whenever you can"
            </p>
            <p className="text-2xl font-bold text-blue-800 text-center">
              This Playbook cost me sweat, years, hunger, embarrassment, sleepless nights, and yes—money I didn't even have.
            </p>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-16 px-4 md:px-8 bg-purple-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Why am I telling you this?
          </h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: A visual showing the transformation from struggle to success - from collecting food on credit to being a successful business owner */}
              <Image
                src="/small-biz/transformation-image.png"
                alt="Transformation from struggle to success"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-2xl font-bold text-purple-800 mb-6">
                Because I want you to know…
              </p>
              <p className="text-xl font-semibold">
                when you hold this Playbook in your hands, you're not just holding "another e-book." You're holding the blood, sweat, and sacrifice of a man who refused to give up until he found the way out…
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl mb-6">
              I've wanted to put "The Small Business Playbook" out since September last year. But I kept holding back… until something happened two days ago that hit me like a punch in the chest.
            </p>
            <p className="text-xl font-bold text-red-600 mb-6">
              Argh…
            </p>
            <p className="text-xl mb-6">
              I was scrolling through Whatsapp when I stumbled on a short video clip someone posted on their status…
            </p>
            <p className="text-xl mb-6">
              It was an elderly taxi man in his fifties, standing by the opened door of his cab , and a young man behind the camera asked him what message he had for the government about the hardship in the country.
            </p>
            <p className="text-xl mb-6">
              The old man tried to talk, but his voice started shaking. You could see water strolling down his eyes, when he said…
            </p>
            <blockquote className="border-l-4 border-red-600 pl-4 italic text-xl font-semibold text-red-700 mb-6">
              "I can no longer afford good food for my wife and two children. Not even rice or beans. It's only garri without sugar we've been drinking for the past 5 days. I'm even ashamed to go home because I can't bear to see them like that"
            </blockquote>
            <p className="text-xl font-bold mb-6">
              I wept like a child…
            </p>
          </div>

          <div className="bg-purple-100 p-8 rounded-lg border-l-4 border-purple-600">
            <p className="text-xl mb-6">
              Because, deep inside me, I knew this is the reality of millions of Nigerians today...
            </p>
            <ul className="text-xl space-y-4 mb-6">
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                Men ashamed to look their wives in the face because they can't provide…
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                Women hiding tears because they can't afford to see their children starve…
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                Children sent home from school because they have not paid school fees…
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 font-bold mr-2">•</span>
                Youths roaming the streets with degrees that can't even guarantee them one decent meal a day…
              </li>
            </ul>
            <p className="text-2xl font-bold text-purple-800">
              And that's when I realized that keeping "The Small Business Playbook" to myself was a sin…
            </p>
            <p className="text-xl font-semibold mt-6">
              …and you deserve the light that will show you how to escape the low-income trap by building profitable businesses.
            </p>
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="py-16 px-4 md:px-8 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            So, I started writing this letter you're reading right now…to let you know that there's light at the end of the tunnel...
          </h2>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800 mb-6">
              And here's a taste of what you're really getting inside
            </h3>
            <p className="text-xl">
              I could have called this thing a guide or a manual, but that would be an insult.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: A visual of "The Small Business Playbook" - a premium-looking ebook or physical book with Nigerian branding elements */}
              <Image
                src="/small-biz/playbook-image.png"
                alt="The Small Business Playbook"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-xl mb-6">
                What you're getting is not just one or two tips. It's a five-foot shelf of survival + prosperity secrets, compressed into one power-loaded package…
              </p>
              <p className="text-xl font-bold mb-6">
                It's easy to read, interesting and in under 2 hours, you're done and ready to start putting it to work
              </p>
              <p className="text-2xl font-bold text-yellow-800">
                And here's just a peak into what you'll find inside The Small Business Playbook
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                Why 90% of Nigerian businesses die in the first year — and the bulletproof strategy that keeps yours alive, booming and successful.
              </h4>
              {/* IMAGE: Visual showing business survival rate comparison with a highlighted "bulletproof strategy" */}
              <Image
                src="/small-biz/business-survival.png"
                alt="Business survival strategy"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                The secret "Starving Crowd" revelation that separates businesses that blow up from the ones that get buried in "the cemetery of failed businesses"
              </h4>
              {/* IMAGE: Visual metaphor showing "starving crowd" vs "cemetery of failed businesses" */}
              <Image
                src="/small-biz/starving-crowd.png"
                alt="Starving crowd concept"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                How to develop "eagle eyes" for business opportunities that 99 percent of people miss everyday
              </h4>
              {/* IMAGE: Eagle eye visual with business opportunities highlighted that others miss */}
              <Image
                src="/small-biz/eagle-eye.png"
                alt="Eagle eye for business opportunities"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                The Business Analyzer Framework: your x-ray vision for spotting if an idea will make you money (and which one will disgrace you)
              </h4>
              {/* IMAGE: X-ray vision graphic analyzing business ideas with profit/loss indicators */}
              <Image
                src="/small-biz/business-analyzer.png"
                alt="Business analyzer framework"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                The one simple test you must run before you put 1 naira into any idea (ignore this, and you might as well burn your savings)
              </h4>
              {/* IMAGE: Visual of a simple test/protocol before investing in any business idea */}
              <Image
                src="/small-biz/investment-test.png"
                alt="Investment test before investing"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg border-l-4 border-yellow-600 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              That's not all…
            </h3>
            <h4 className="text-xl font-bold mb-4">
              How to push the 4 hidden psychological triggers in the minds of Nigerians that make them buy even when people are crying "no money"…
            </h4>
            <h4 className="text-xl font-bold mb-4">
              Why owning a "mental real estate" in your customer's head is more valuable than owning a physical land in Lekki…
            </h4>
            <h4 className="text-xl font-bold mb-4">
              The customer magnet formula that makes people beg to buy from you instead of you chasing them…
            </h4>
            <h4 className="text-xl font-bold mb-4">
              The unfair advantage of being the "first" in your market and how to still win if you're late to the party
            </h4>
            <h4 className="text-xl font-bold">
              The David and Goliath trick that lets small businesses beat them "big guys" even with their fat budgets..
            </h4>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              There's even more…
            </h3>
            <h4 className="text-xl font-bold mb-4">
              Why copying big-brand advertising is the fastest way to waste your money (and what to do instead)
            </h4>
            <h4 className="text-xl font-bold mb-4">
              The quick story that will change how you think about advertising in Nigeria
            </h4>
            <h4 className="text-xl font-bold mb-4">
              The 3-second rule for grabbing attention before your customer scrolls away…
            </h4>
            <h4 className="text-xl font-bold mb-4">
              How to write an ad so irresistible, people feel stupid not buying right now
            </h4>
            <h4 className="text-xl font-bold mb-4">
              The advanced small budget strategy that lets you outspend your competitors without spending more
            </h4>
            <h4 className="text-xl font-bold">
              The unbreakable rules of marketing (break even one, and your money blows away)...
            </h4>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800">
              We're just getting started…
            </h3>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg border-l-4 border-yellow-600 mb-12">
            <h4 className="text-xl font-bold mb-4">
              You'll also discover…
            </h4>
            <h4 className="text-xl font-bold mb-4">
              How to turn one buyer into ten WITHOUT running a single ad…
            </h4>
            <h4 className="text-xl font-bold mb-4">
              Why word of mouth is the most powerful currency in Nigeria (and how to mint it on-demand)...
            </h4>
            <h4 className="text-xl font-bold mb-4">
              The compound effect of referrals that multiplies your sales while you sleep…
            </h4>
            <h4 className="text-xl font-bold">
              The trust hack that makes customers happy and eager to recommend you everywhere they go…
            </h4>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-800">
              There's still more…
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                The deadly "price drop death loop" that keeps businesses broke - and how to escape it for good.
              </h4>
              {/* IMAGE: Visual showing the "price drop death loop" and how to escape it */}
              <Image
                src="/small-biz/price-death-loop.png"
                alt="Price drop death loop"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                Why Nigerians are not actually looking for the lowest price (and what they want instead)
              </h4>
              {/* IMAGE: Visual showing what Nigerians truly value beyond low prices */}
              <Image
                src="/small-biz/value-over-price.png"
                alt="Value over price for Nigerian customers"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                The hidden psychology behind every Nigerian buying decision (miss this, and they'll keep pricing you down)...
              </h4>
              {/* IMAGE: Visual representation of Nigerian consumer psychology */}
              <Image
                src="/small-biz/buying-psychology.png"
                alt="Nigerian buying psychology"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                How to charge more and still get people rushing to buy from you, while thanking you with a big smile on their faces…
              </h4>
              {/* IMAGE: Happy Nigerian customers paying premium prices with smiles */}
              <Image
                src="/small-biz/premium-pricing.png"
                alt="Charging more with happy customers"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                Smart ways to use low prices as a weapon — without losing profits or your mind…
              </h4>
              {/* IMAGE: Strategic use of low prices as a competitive weapon */}
              <Image
                src="/small-biz/low-price-weapon.png"
                alt="Using low prices as a weapon"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-green-800">
                The "bad economy"-proof pricing strategy that makes customers feel lucky to buy from you
              </h4>
              {/* IMAGE: Pricing strategy that works even in bad economy */}
              <Image
                src="/small-biz/recession-pricing.png"
                alt="Bad economy-proof pricing strategy"
                width={400}
                height={300}
                className="rounded-lg mb-4"
              />
            </div>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg border-l-4 border-yellow-600">
            <p className="text-xl mb-6">
              And that's just scratching the surface…
            </p>
            <p className="text-xl mb-6">
              Because, if I try to list everything inside, we'd need 20 more pages. But here's what I can tell you with my full chest:
            </p>
            <p className="text-2xl font-bold text-yellow-800 text-center">
              When you sit with this Playbook, it will feel like someone finally turned on the light in a dark room you've been stumbling inside for years…
            </p>
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4 md:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Here's why this matters to you right now…
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl font-bold mb-6">
              Let me ask you…
            </p>
            <p className="text-xl mb-6">
              How many more nights do you want to lie awake, calculating how to stretch ₦5,000 to last till month end?
            </p>
            <p className="text-xl mb-6">
              How many more times do you want to dodge your landlord, NEPA bill, or that loan app you owe?
            </p>
            <p className="text-xl mb-6">
              How much longer will you keep waiting for the government or one "connection" to rescue you?
            </p>
            <p className="text-2xl font-bold text-red-700 text-center mb-6">
              You already know the truth: no one is coming…
            </p>
            <p className="text-xl text-center">
              If you don't take your hustle seriously now, 2026 will come and you'll still be in the same position… or worse.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: Visual timeline showing progression from now to 2026 with and without the Playbook */}
              <Image
                src="/small-biz/future-timeline.png"
                alt="Future timeline with and without the Playbook"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-xl mb-6">
                That's why I created this Playbook… not just as "information," but as a weapon. Something you can hold in your hand, follow step by step, and finally breathe financial freedom into your life.
              </p>
              <p className="text-2xl font-bold text-red-800">
                The bottom line is…
              </p>
              <p className="text-xl font-semibold">
                I've paid the price for you…
              </p>
            </div>
          </div>

          <div className="bg-red-100 p-8 rounded-lg border-l-4 border-red-600">
            <p className="text-xl mb-6">
              I've suffered the hunger, carried the shame, spent the money, burnt the midnight candles, and done the digging — so you don't have to.
            </p>
            <p className="text-xl font-bold mb-6">
              Now, all that's left is for you to grab the playbook, follow the steps, and claim your own share of freedom.
            </p>
            <p className="text-xl mb-6">
              Because the truth is…everyday you delay, your situation doesn't just stay the same…it gets worse.
            </p>
            <p className="text-xl font-bold text-red-800 text-center">
              And I don't want to see you end up like that old taxi man, too ashamed to go to his family because of hunger.
            </p>
            <p className="text-2xl font-bold text-red-800 text-center mt-6">
              So the question is simple:
            </p>
            <p className="text-xl text-center">
              Will you keep struggling? Or will you finally take the blueprint and break free?
            </p>
            <p className="text-xl font-bold text-center mt-4">
              The choice is yours
            </p>
          </div>
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-16 px-4 md:px-8 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            And to make this Playbook very easy for you to follow and start your business, I've decided to throw in two juicy, tasty and yummy gifts, only if you will get The Small Business Playbook today…
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-800">
                Here's my first gift…
              </h3>
              <h4 className="text-xl font-bold mb-4">
                The 6 unstoppable kinds of products that ALWAYS sell like crazy in Nigeria— even when the economy is shaking
              </h4>
              <p className="text-lg mb-4">
                One of the biggest reasons Nigerian Small Business owners do not do well with their businesses is because they do not sell what people want to buy…
              </p>
              <p className="text-lg mb-4">
                People do not care about what you know, or what you have…
              </p>
              <p className="text-lg mb-4">
                People want what they want even if it doesn't make sense to you, and they are seriously looking for someone who can provide it for them…
              </p>
              <p className="text-lg mb-4">
                Your job is to identify their desires and fulfil them…
              </p>
              <p className="text-lg">
                That's one of the first things I'll teach you in this playbook, and this gift will give you "confirm" business ideas EASIER and FASTER…
              </p>
              {/* IMAGE: Visual showing the 6 unstoppable product categories that always sell in Nigeria */}
              <Image
                src="/small-biz/6-products.png"
                alt="6 unstoppable products that always sell in Nigeria"
                width={400}
                height={300}
                className="rounded-lg mt-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-green-800">
                And another sweet thing about this is that you don't have to fear competition because there are hundreds of business opportunities under each of them you can explore….
              </h3>
              <p className="text-lg mb-4">
                But know that you'll need to create great products and services and give great customer care for this to work well.
              </p>
              <p className="text-lg font-bold mb-4">
                Once you do that, you'll be UNSTOPPABLE… Oh boy! Your money will grow like grass…
              </p>
              <p className="text-xl font-bold text-green-800">
                And that brings us to the second bonus…
              </p>
              <h4 className="text-2xl font-bold mt-4 mb-4">
                The Direct Response Ad Templates Toolkit
              </h4>
              <p className="text-lg mb-4">
                Where you'll discover…
              </p>
              <ul className="text-lg space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  30+ done-for-you templates that lets you create ads even if you can't write a single line
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  5 "plug and play" ad structures you can copy word for word to pull in customers immediately
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  Over 30 headline formulas that grab attention like super glue (curiosity, urgency, proof, authority — all covered)
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  The Nigerian business starter edition— tested ads for the Nigerian market, not borrowed from America…
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  The secret checklist that guarantees your ads don't just "look nice" but actually bring in money…
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  A quick start guide for tracking and optimization, so you know exactly which ads to scale (and which to kill fast).
                </li>
              </ul>
              {/* IMAGE: Visual of the Direct Response Ad Templates Toolkit with Nigerian context */}
              <Image
                src="/small-biz/ad-templates.png"
                alt="Direct Response Ad Templates Toolkit"
                width={400}
                height={300}
                className="rounded-lg mt-4"
              />
            </div>
          </div>

          <div className="bg-green-100 p-8 rounded-lg border-l-4 border-green-600">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Now, I want you to imagine something for a moment...
            </h3>
            <p className="text-xl mb-6">
              Picture yourself having your own unique business with your name boldly written as the OWNER.
            </p>
            <p className="text-xl mb-6">
              You know exactly how to outsmart and beat your competitors. Your adverts bring in money like crazy because you understand the psychology that makes Nigerians buy.
            </p>
            <p className="text-xl mb-6">
              You know precisely what to do to attract customers... and more importantly, how to keep them coming back again and again, doing free promotion for your business everywhere they go.
            </p>
            <p className="text-xl mb-6">
              Your name rings a bell in people's minds. When they hear it, they whisper with respect... "Is that not the owner of 'so and so' business? That person is making bastard money!"
            </p>
            <p className="text-xl mb-6">
              You're no longer begging for jobs or waiting for salary alerts. Instead, YOU'RE the one offering jobs to others.
            </p>
            <p className="text-xl font-bold text-green-800 text-center">
              Think about what life would be like when you have your own booming business...
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <ul className="text-xl space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  How will this boost your status in society?
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  How will it send poverty packing from your life forever?
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  How much more enjoyable will your days become?
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  How much happier will you be when you can comfortably afford everything your loved ones need?
                </li>
              </ul>
            </div>
            <div>
              <ul className="text-xl space-y-4">
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  How will your relationship with your partner transform when money stress disappears?
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  What places will you finally be able to travel to?
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 font-bold mr-2">•</span>
                  How will you feel about yourself when you look in the mirror, knowing you built something real with your own hands?
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-12">
            <p className="text-xl font-bold text-center">
              Obviously, having your own thriving business isn't just a want—it's something that's critically important to you and your family's future.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            I can hear you say…
          </h2>
          <p className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-12">
            "So, how do I get The Small Business Playbook? I want it right now!"
          </p>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl mb-6">
              The thing is…
            </p>
            <p className="text-xl mb-6">
              At first, my plan was to give all this Playbook away for free.
            </p>
            <p className="text-xl mb-6">
              My heart was to help as many Nigerians as possible to escape the frustration of this economy by starting outrageously profitable businesses.
            </p>
            <p className="text-xl font-bold mb-6">
              But something happened that shocked me...
            </p>
            <p className="text-xl mb-6">
              See, while I was buried in my 374-day research, I discovered something strange…
            </p>
            <p className="text-xl mb-6">
              There were people who had the exact same information as those who succeeded. They were broke, desperate, and looking for a way out just like you.
            </p>
            <p className="text-xl font-bold text-center mb-6">
              But guess what?
            </p>
            <p className="text-xl font-bold text-center text-red-600">
              Most of them remained stuck in poverty.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: Visual showing the difference between people who paid for information (successful) vs those who got it free (still stuck) */}
              <Image
                src="/small-biz/paid-vs-free.png"
                alt="Paid vs free information results"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <p className="text-xl mb-6">
                Not because the information is wrong. And not because they didn't want to succeed.
              </p>
              <p className="text-2xl font-bold text-blue-800 mb-6">
                But because it was free
              </p>
              <p className="text-xl mb-6">
                They left it buried in their downloads folder… forgotten like every other free PDF you've grabbed and never opened.
              </p>
              <p className="text-xl">
                And the ones that actually succeeded? The ones who broke free? They were the ones who paid a price to get that same information.
              </p>
            </div>
          </div>

          <div className="bg-blue-100 p-8 rounded-lg border-l-4 border-blue-600 mb-12">
            <p className="text-xl font-bold text-center mb-6">
              It hit me like thunder: If I truly care about your success, the worst thing to do is to give the powerful small business playbook for free…
            </p>
            <p className="text-2xl font-bold text-blue-800 text-center">
              So here's the deal…
            </p>
          </div>

          <div className="text-center mb-12">
            <p className="text-xl mb-6">
              I'm making The Small Business Playbook available for just ₦9,950.
            </p>
            <p className="text-xl font-bold mb-6">
              That's high enough to make you value it.
            </p>
            <p className="text-xl font-bold">
              And low enough to make it easy to grab.
            </p>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg border-4 border-yellow-400 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-red-600">
              Also, there's a catch…
            </h3>
            <p className="text-xl mb-6 text-center">
              The juicy gifts I'm including in this Playbook? They're not permanent.
            </p>
            <p className="text-xl font-bold text-center mb-6">
              After today, they could disappear without warning.
            </p>
            <p className="text-2xl font-bold text-center text-red-600">
              And here's the real kicker:
            </p>
            <p className="text-xl text-center mt-4">
              The ₦9,950 price is the launch price only.
            </p>
            <p className="text-xl font-bold text-center">
              Once the timer hits 72 hours, the price jumps to ₦25,000.
            </p>
            <p className="text-xl text-center mt-4">
              So, if you come back later, you'll pay more than double— without the gifts.
            </p>
            <p className="text-xl font-bold text-center mt-4">
              Don't say I didn't warn you.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              And let's be real: This isn't for everybody
            </h3>
            <p className="text-xl font-bold text-center mb-6">
              Listen carefully to what I'm about to say…
            </p>
            <p className="text-xl mb-6">
              This Playbook is not for jokers.
            </p>
            <p className="text-xl mb-6">
              If you're looking for a "get rich by tomorrow morning" nonsense, close this page now.
            </p>
            <p className="text-xl mb-6">
              This is not for people who won't open the pages, who won't act, who'll still prefer to waste time instead of executing.
            </p>
            <p className="text-xl font-bold text-center">
              Only serious people who are tired of being broke will get this.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 px-4 md:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl mb-6">
              And trust me, most people who see this page will buy.
            </p>
            <p className="text-xl font-bold mb-6 text-center">
              Why? Because ₦9,950 for a proven system to escape poverty is nothing.
            </p>
            <p className="text-xl font-bold text-center text-red-600">
              In fact, if you can't invest ₦9,950 in yourself, maybe you're not ready yet.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
            <div className="md:w-1/2">
              {/* IMAGE: Visual showing ROI calculation - small investment vs potential monthly income */}
              <Image
                src="/small-biz/roi-calculation.png"
                alt="ROI calculation - small investment vs big returns"
                width={500}
                height={400}
                className="rounded-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6">
                Now, think about what you'll gain for a second…
              </h3>
              <p className="text-xl font-bold mb-6">
                Let's do some quick maths…
              </p>
              <p className="text-xl mb-6">
                Imagine you invest ₦9,950 today.
              </p>
              <p className="text-xl mb-6">
                Inside the Playbook, I'll show you step by step how to build and grow a business that could make you ₦500,000 to ₦1,000,000 monthly income.
              </p>
              <p className="text-xl mb-6">
                Even if you do only 10% of what's inside and earn an extra ₦90,000 a month—that's still a 1000% gain on your ₦9,950.
              </p>
              <p className="text-xl font-bold">
                Even if I'm only half right, you'll still pocket way more than you paid.
              </p>
            </div>
          </div>

          <div className="bg-yellow-100 p-8 rounded-lg border-l-4 border-yellow-600 mb-12">
            <p className="text-2xl font-bold text-center mb-6">
              This is literally like selling you ₦1000 notes for ₦50…
            </p>
            <p className="text-xl font-bold text-center">
              You'd be crazy not to grab as many as possible.
            </p>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 mb-6">
              And to put your mind at rest,
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-green-800">
              I'm giving you an insane guarantee…
            </h2>
          </div>

          <div className="bg-green-100 p-8 rounded-lg border-4 border-green-600 mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Get The Small Business Playbook today.
            </h3>
            <p className="text-xl text-center mb-6">
              Open it. Study it. Use it.
            </p>
            <p className="text-xl mb-6">
              If you don't see a clear pathway to starting, building, and growing a business that could make you an extra ₦500k to ₦1m monthly income…
            </p>
            <p className="text-xl mb-6">
              If you don't see how to easily get profitable business ideas…
            </p>
            <p className="text-xl mb-6">
              If you don't learn how to advertise for maximum profitability…
            </p>
            <p className="text-xl mb-6">
              If you don't see how to attract customers like magnets…
            </p>
            <p className="text-xl mb-6">
              If the pricing strategies don't blow your mind and make you slap your forehead saying "Ah! Why didn't I know this before?"…
            </p>
            <p className="text-2xl font-bold text-center text-green-800 mb-6">
              Just email me here: thecashologists00@gmail.com and I'll refund every kobo.
            </p>
            <p className="text-xl font-bold text-center">
              No stories. No questions.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 text-red-600">
              But hear this..
            </h3>
            <p className="text-xl font-bold text-center mb-6">
              you must actually use it.
            </p>
            <p className="text-xl text-center mb-6">
              If you're lazy, don't buy.
            </p>
            <p className="text-xl text-center mb-6">
              If you want magic money that falls down from the sky, don't buy.
            </p>
            <p className="text-xl font-bold text-center">
              This is for action takers. Hustlers. People who are tired of shame, tired of poverty, and ready to fight their way to freedom.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-red-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
            Here's my final word to you..
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <p className="text-xl mb-6">
              Most people will scroll past this…
            </p>
            <p className="text-xl mb-6">
              They'll think, "Maybe later"
            </p>
            <p className="text-xl font-bold text-center mb-6">
              But you and I know the truth— "later" is the code word for never.
            </p>
            <p className="text-xl font-bold text-center text-red-600">
              And the painful reality?
            </p>
            <p className="text-xl text-center mt-4">
              A year from now, those same people will still be broke, still borrowing from loan apps, still collecting food on credit from the same food seller, and still dodging their landlords and NEPA bills…
            </p>
            <p className="text-xl font-bold text-center mt-4">
              While you could already be counting six figures monthly from your business.
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold mb-6">
              So, the choice is yours.
            </p>
            <p className="text-xl mb-6">
              Will you join the thousands who will grab this Playbook and finally break free?
            </p>
            <p className="text-xl font-bold mb-12">
              Or will you close this page, do nothing, and stay stuck where you are?
            </p>
            
            <div className="bg-yellow-400 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black">
                Click the button below and secure your copy now— before the bonuses disappear and the price doubles in 72 hours.
              </h3>
              <Link href={paymentLink}>
              <button className="bg-red-600 hover:bg-red-700 text-white text-2xl font-bold py-4 px-8 rounded-lg shadow-lg transition-colors duration-300">
                GET THE PLAYBOOK NOW
              </button>
              </Link>
              <p className="text-sm mt-4 text-black">
                Secure Payment • Instant Access • Money-Back Guarantee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg">
            © {new Date().getFullYear()} The Small Business Playbook. All rights reserved.
          </p>
          <p className="mt-4">
            Email: thecashologists00@gmail.com
          </p>
        </div>
      </footer>
    </main>
  )
}