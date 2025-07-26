import Link from "next/link";



export default function SalesPage() {
  return (
    <div className={`min-h-screen bg-gray-100 font-inter`}>
      <main className="px-4 md:px-8 lg:px-12 py-12 max-w-4xl mx-auto">
        {/* Mega Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-8 leading-tight">
          <span className="text-red-600">MY FRIENDS LAUGHED WHEN I TOLD THEM I WANTED TO START MY OWN BUSINESS...</span>
          <br />
          <span className="text-gray-900">BUT THEY STOPPED LAUGHING WHEN I INVITED THEM TO MY HOUSE IN LEKKI 6 MONTHS LATER</span>
        </h1>

        {/* Sub Headline */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-red-500 pb-2">
          How A Broke Software Developer With Only ₦100 In His Account Built A Business Empire That Now Pays Him ₦500k+ Monthly... And How You Can Copy His Exact Blueprint In The Next 60 Days
        </h2>
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-red-500 pb-2">
          How A Broke Software Developer With Only ₦100 In His Account Built A Business Empire That Now Pays Him ₦2.5 Million Monthly... And How You Can Copy His Exact Blueprint In The Next 60 Days
        </h2> */}

        {/* Intro Section */}
        <p className="text-lg leading-relaxed mb-6">
          Dear Friend,
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Let me tell you about the most embarrassing day of my life...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          It was a Tuesday morning in March 2022. I was sitting in a cramped one-room apartment in Surulere, Lagos, staring at my phone screen showing <span className="font-bold text-red-600">₦100 balance</span>.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <span className="font-bold text-red-600">One hundred naira.</span>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          That&apos;s all I had left in the world.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          My stomach was growling so loud my roommate kept asking if I was okay. I hadn&apos;t eaten anything in 18 hours. The only thing in our kitchen was a small cup of garri that I&apos;d been eating small small like it was gold.
        </p>

        {/* Attention Text Box */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="flex items-center mb-4">
            <span className="text-red-500 text-2xl mr-2">⚠️</span>
            <h3 className="text-xl font-bold text-red-700">But here&apos;s the crazy part...</h3>
          </div>
          <p className="text-lg text-gray-800 italic">
            That same morning, I called my three closest friends - Emeka, Tunde, and Kemi - and told them I was going to start my own business.
          </p>
        </div>

        {/* Conversation Section */}
        <p className="text-lg leading-relaxed mb-6">
          The conversation went something like this:
        </p>
        <div className="relative">
          <p className="text-lg leading-relaxed mb-6 pr-8 md:pr-24">
            Me: &quot;Guys, I&apos;m done with this job hunting nonsense. I&apos;m starting my own business.&quot;
            <br /><br />
            Emeka: &quot;Business? Bro, you don&apos;t even have money for data!&quot;
            <br /><br />
            Tunde: &quot;Omo, this hunger is making you talk anyhow. Go and look for work first.&quot;
            <br /><br />
            Kemi: &quot;Guy, be serious. What business? With what money? You were begging me for transport fare last week!&quot;
          </p>
          {/* <div className="absolute -right-4 md:right-0 top-0 w-20 md:w-32">
            <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
              <p className={`text-xs md:text-sm text-red-600 font-handwritten`}>
                They laughed at me!
              </p>
            </div>
          </div> */}
        </div>
        <p className="text-lg leading-relaxed mb-6">
          They laughed.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Loud, mocking laughter.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The kind that makes you want to disappear into thin air.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          &quot;This guy has lost his mind,&quot; Tunde said between chuckles. &quot;Man is talking about business when he can&apos;t even buy good food.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I hung up the phone feeling smaller than an ant.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But something inside me was burning. A quiet rage that refused to accept my situation.
        </p>

        {/* Section Divider */}
        <div className="my-12">
          <div className="border-t-2 border-gray-300 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-4">
              <span className="text-gray-500">***</span>
            </div>
          </div>
        </div>

        {/* Interview Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          The $70,000 Interview That Changed Everything
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          You see, just hours before that call, I&apos;d blown what could have been my breakthrough moment...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I had landed an interview with an American tech company. The position paid <span className="font-bold text-green-600">$70,000 annually</span> - that&apos;s over <span className="font-bold text-green-600">₦50 million yearly</span> at today&apos;s exchange rate.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This was it. My golden ticket out of poverty.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I spent my last ₦100 buying data for the Zoom interview. I was prepared. Confident. Ready to ace it.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The interview started perfectly. I was answering every technical question like a pro. The interviewers were impressed. One even said, &quot;This guy knows his stuff.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Then came the practical test.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          &quot;Can you share your screen and solve this problem?&quot; they asked.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I looked at the coding challenge and smiled. I&apos;d solved similar problems a hundred times. This was going to be easy money.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I opened my Code Editor, cracked my knuckles, and started typing...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Then it happened.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          <span className="font-bold text-red-600">PING!</span>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          SMS notification: <span className="font-bold text-red-600">&quot;Dear customer, you have exhausted your data balance...&quot;</span>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          My internet was gone.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          In the middle of the most important interview of my life.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I frantically tried to reconnect. Begged my roommate for hotspot. Even attempted to borrow data from MTN (I wasn&apos;t eligible).
        </p>
        <p className="text-lg leading-relaxed mb-6">
          By the time I got back online, the interviewers had left.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I sent an apology email explaining what happened.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          They never replied.
        </p>
        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <p className="text-lg text-gray-800 italic">
            ₦100 worth of data cost me ₦50 million.
          </p>
        </div>

        {/* Decision Section */}
        <p className="text-lg leading-relaxed mb-6">
          That night, I lay on my thin mattress, staring at the ceiling, replaying my friends&apos; laughter over and over.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But instead of giving up, I made a decision that changed my life forever...
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          The Decision That Made Me Rich
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I decided I was NEVER going to be in that position again.
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg">
              <span className="font-semibold">Never again</span> would I be at the mercy of employers.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg">
              <span className="font-semibold">Never again</span> would ₦100 stand between me and my dreams.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">•</span>
            <span className="text-lg">
              <span className="font-semibold">Never again</span> would my friends laugh at my ambitions.
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          That night, I began the most intensive business education of my life.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I read every business book I could find. Watched thousands of hours of YouTube videos at free Wi-Fi spots. Took notes like my life depended on it (because it did).
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I paid for courses. LOTS of courses.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I studied successful Nigerian entrepreneurs. Analyzed their strategies. Dissected their business models.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I made mistakes. Lost money. Failed multiple times.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          My first business attempt was a complete disaster. I bought products worth ₦50,000 without validating demand first. Sold NOTHING. Lost everything.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Then I tried affiliate marketing. Lost ₦100,000 on courses and ads. Zero sales again.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But each failure taught me something valuable.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Each mistake brought me closer to the breakthrough.
        </p>

        {/* Breakthrough Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          And then, 4 months after that humiliating phone call, something magical happened...
        </h2>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-green-500 pb-2">
          The Day Everything Changed
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          It was a Saturday morning when I launched my first successful business.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Not some fancy tech startup. Not some complex scheme.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Just a simple solution to a problem I&apos;d identified using the framework I&apos;d developed.
        </p>
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4 text-center">
            💰 Within 24 hours, I made my first ₦20,000.
          </h3>
          <p className="text-lg text-gray-800">
            By week two, I was making ₦50,000 weekly.
          </p>
          <p className="text-lg text-gray-800">
            By month three, I was earning ₦200,000 monthly.
          </p>
          <p className="text-lg text-gray-800">
            By month six...
          </p>
          <p className="text-lg text-gray-800 font-bold">
            I was making OVER ₦500k+ every single month.
          </p>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          And that&apos;s when I decided to invite my friends over.
        </p>

        {/* Vindication Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          The Sweet Taste of Vindication
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I called the same three friends who had laughed at me 6 months earlier.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          &quot;Guys, I&apos;m having a small get-together at my place this Saturday. You should come through.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          &quot;Your place?&quot; Emeka asked. &quot;You mean that Surulere room?&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          &quot;Nah, my new place. I&apos;ll send you the address.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          When I sent them the Lekki address, they thought I was joking.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Saturday came.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I watched through my floor-to-ceiling windows as their Uber pulled up to my 4-bedroom duplex in Lekki Phase 1.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The same friends who had mocked my business dreams stepped out of the car, jaws on the ground, staring at my house like they&apos;d seen a ghost.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Emeka was the first to speak: &quot;Guy... this is your house?&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          &quot;Welcome to my home,&quot; I replied with a smile.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          We spent the evening on my terrace overlooking the lagoon. They kept asking the same questions:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              &quot;How did you do it?&quot;
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              &quot;What business are you doing?&quot;
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              &quot;Can you teach us?&quot;
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          The same people who had laughed at my ambitions were now begging for my secrets.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          And that night, I realized something profound...
        </p>

        {/* Realization Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-blue-500 pb-2">
          The Realization That Birthed Cash-o-logy
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Sitting there with my friends, I realized they weren&apos;t the only ones who had laughed at someone&apos;s business dreams.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Across Nigeria, thousands of people were stuck in the same cycle:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">→</span>
            <span className="text-lg">
              Dreaming of financial freedom but too afraid to start
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">→</span>
            <span className="text-lg">
              Being mocked by friends and family for their &quot;unrealistic&quot; ambitions
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">→</span>
            <span className="text-lg">
              Staying trapped in low-paying jobs because they didn&apos;t know HOW to build a business
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">→</span>
            <span className="text-lg">
              Making the same mistakes I made, losing money on failed attempts
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          I realized I had a responsibility.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Everything I&apos;d learned through trial, error, and expensive mistakes could save others years of struggle.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          So I decided to document everything.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Every strategy that worked. Every mistake to avoid. Every shortcut I&apos;d discovered.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The result?
        </p>

        {/* Product Introduction */}
        <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-blue-600">
          CASH-O-LOGY
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-6">
          The Complete Blueprint For Building A Business That Pays You More In 60 Days Than You Made In The Last 365 Days
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          This isn&apos;t just another business book.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This is the exact system I used to go from ₦100 in my account to ₦500k+ monthly income in 6 months.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The same system my friends are now using to build their own businesses.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The same system that&apos;s helped over 847 Nigerians escape the 9-5 trap and build profitable businesses.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          And today, I&apos;m making it available to you.
        </p>

        {/* Modules Section */}
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-green-500 pb-2">
          Here&apos;s What You&apos;ll Discover Inside Cash-o-logy:
        </h2>
        <div className="space-y-8 mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 1: THE MINDSET REVOLUTION
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The simple reason why you&apos;re still broke (even though you&apos;re not stupid) - and how school programmed you to become a professional beggar
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The lies you&apos;ve been told about &quot;risk&quot; that keep you trapped in poverty while others get rich thinking differently
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to escape the &quot;safety&quot; scam that&apos;s actually the most dangerous financial trap you can fall into
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The 3 poverty beliefs that are literally killing your financial future (most people have all three)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  Why your degree might be sabotaging your future (this will shock you)
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 2: THE OPPORTUNITY GOLDMINE
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to develop the &quot;opportunity recognition skill&quot; using 5 powerful lenses that reveal hidden goldmines
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The simple &quot;pain detector&quot; method for spotting profitable problems everywhere you look
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  5 kinds of blind spots that hide million-naira opportunities right under your nose
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  Where to find the gaps and inefficiencies that create automatic money-making opportunities
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The art of seeing what others miss - 4 common blind spots that hide opportunities from 99% of people
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 3: THE VALIDATION FRAMEWORK
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The 12-point validation framework that prevents you from building businesses nobody wants
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  3 brutal validation tests that save you from expensive mistakes before you make them
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The &quot;million-naira question&quot; that instantly reveals if your idea is worth pursuing
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The lies you&apos;ve been told about business ideas - why smart people build stupid businesses
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 4: THE BIG BOY POSITIONING STRATEGY
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to position yourself as the obvious choice using the 4 pillars of bulletproof positioning
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The &quot;I&apos;m New Here&quot; advantage that turns inexperience into your biggest selling point
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  5 positioning mistakes that kill businesses (mistake #3 will surprise you)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The simple 5-step positioning process that makes competitors irrelevant
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 5: THE IRRESISTIBLE OFFER FORMULA
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The irresistible offer formula that makes customers feel stupid for saying no
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to create offers so good people think you&apos;re practically giving money away
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The 5 elements of an irresistible offer that trigger instant buying decisions
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 6: THE FEARLESS PRICING SYSTEM
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The simple psychology behind premium pricing - why charging more actually makes you more money
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to escape the &quot;pity-pricing trap&quot; that keeps entrepreneurs broke forever
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The fearless pricing system that gets you paid what you&apos;re actually worth
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The value-stacking method that justifies any price you want to charge
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 7: THE CUSTOMER MAGNETISM METHOD
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The customer magnetism method that attracts ideal customers like metal to a magnet
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to make customers promote you for free (without begging or bribing)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The 3 psychological triggers that make people want to refer you automatically
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 8: THE EVANGELISM ENGINE
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to build an evangelism engine that creates unpaid hype-men for your business
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The systematic approach to word-of-mouth that multiplies your marketing for free
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <h3 className="text-xl font-bold text-blue-700 mb-4">
              MODULE 9: THE AUTOMATION SYSTEM
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The simple automation system that prints cash while you sleep (or scroll TikTok)
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to escape the broke-time-for-money trap using the 4 levels of business evolution
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  The exact tools and systems that run Nigerian businesses without babysitting
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-blue-500 text-2xl">•</span>
                <span className="text-lg">
                  How to avoid becoming another &quot;entrepreneur&quot; who&apos;s actually just a self-employed worker in disguise
                </span>
              </li>
            </ul>
          </div>
        </div> */}
             {/* Revised Modules Section */}
             <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-green-500 pb-2">
          Here&apos;s What You&apos;ll Discover Inside Cash-o-logy:
        </h2>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 space-y-6 mb-12">
          <ul className="space-y-4">
            {/* Module 1: The Mindset Revolution */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Break Free From the Hidden Programming That Keeps You Broke Despite Your Intelligence
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                The Lies You’ve Been Told About Risk That Trap You in Poverty While Others Build Wealth
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                3 Poverty Beliefs You Must Eliminate to Unlock Your Financial Future (Most People Cling to All Three!)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                Why Your Degree Could Be Sabotaging Your Success (This Truth Will Shock You)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Escape the “Safety” Scam That’s Actually the Riskiest Financial Trap of All
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            And there’s more...
          </p>
          <ul className="space-y-4">
            {/* Module 2: The Opportunity Goldmine */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                5 Powerful Lenses to Develop Your “Opportunity Radar” and Spot Million-Naira Ideas Everywhere
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Use the “Pain Detector” Method to Uncover Profitable Problems in Any Market
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                Where to Find Hidden Gaps and Inefficiencies That Turn Into Automatic Money-Makers
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                7 Blind Spots That Hide Lucrative Opportunities From 99% of People (And How to See Them Clearly)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                When to Act on an Opportunity to Maximize Profits and Avoid Missing Out
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            That’s not all...
          </p>
          <ul className="space-y-4">
            {/* Module 3: The Validation Framework */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Use the 12-Point Validation Framework to Ensure Your Business Idea Will Sell Before You Invest a Dime
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                3 Brutal Tests to Weed Out Bad Ideas and Save You From Costly Failures
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                The “Million-Naira Question” That Instantly Tells You If Your Idea Is a Winner
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                The Lies You’ve Been Told About Business Ideas That Lead Smart People to Build Flops
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                When to Pivot Your Idea to Avoid Wasting Time on a Losing Bet
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            But wait, it gets better...
          </p>
          <ul className="space-y-4">
            {/* Module 4: The Big Boy Positioning Strategy */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Position Yourself as the Go-To Expert Using 4 Bulletproof Pillars That Crush Competition
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                5 Deadly Positioning Mistakes That Could Sink Your Business (Mistake #3 Will Blow Your Mind)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Turn Your Inexperience Into a Magnetic Selling Point With the “I’m New Here” Advantage
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                The 5-Step Positioning Process That Makes Your Competitors Irrelevant Overnight
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                Where to Showcase Your Positioning to Attract High-Paying Customers Fast
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            And we’re just getting started...
          </p>
          <ul className="space-y-4">
            {/* Module 5: The Irresistible Offer Formula */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Craft Offers So Compelling Customers Feel Foolish for Saying No
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                5 Elements of an Irresistible Offer That Trigger Instant “Shut Up and Take My Money” Reactions
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Make Your Offer Feel Like You’re Giving Away Free Money (While Still Profiting Big)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                When to Roll Out Your Offer to Maximize Sales Without Looking Desperate
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            Hold on, there’s even more...
          </p>
          <ul className="space-y-4">
            {/* Module 6: The Fearless Pricing System */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Charge Premium Prices Without Losing Customers (And Why Higher Prices Mean More Sales)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                3 Ways to Escape the “Pity-Pricing Trap” That Keeps Entrepreneurs Broke Forever
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                The Value-Stacking Method That Justifies Any Price You Dare to Charge
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                When to Raise Your Prices to Skyrocket Your Income Without Scaring Customers Away
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Use the Fearless Pricing System to Get Paid What You’re Truly Worth
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            But we’re not done yet...
          </p>
          <ul className="space-y-4">
            {/* Module 7: The Customer Magnetism Method */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Attract Ideal Customers Like a Magnet Using the Customer Magnetism Method
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                3 Psychological Triggers That Make Customers Refer You Without You Asking
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Turn Your Customers Into Free Promoters Without Begging or Bribing
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                Where to Find Your Dream Customers Who Are Ready to Pay Premium Prices
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            And guess what? There’s still more...
          </p>
          <ul className="space-y-4">
            {/* Module 8: The Evangelism Engine */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Build an Evangelism Engine That Turns Customers Into Unpaid Hype-Men for Your Brand
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                5 Ways to Amplify Word-of-Mouth Marketing for Free Using a Systematic Approach
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                When to Leverage Your Evangelists to Explode Your Business Growth
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-blue-700 font-bold">
            And finally...
          </p>
          <ul className="space-y-4">
            {/* Module 9: The Automation System */}
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Set Up an Automation System That Generates Cash While You Sleep (or Scroll TikTok)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                4 Levels of Business Evolution to Escape the Time-for-Money Trap Forever
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                The Exact Tools Nigerian Entrepreneurs Use to Run Businesses Without Constant Babysitting
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                How to Avoid Becoming a “Fake Entrepreneur” Who’s Just a Glorified Employee
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg font-semibold">
                When to Automate Your Business to Free Up Your Time and Multiply Your Income
              </span>
            </li>
          </ul>
        </div>

        {/* Bonuses Section */}
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          But Wait... I&apos;m Not Done Yet!
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          When you get Cash-o-logy today, you&apos;re also getting these game-changing bonuses absolutely FREE:
        </p>
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎁 BONUS #1: The Copywriting Arsenal (Value: ₦75,000)
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            &quot;How To Sell Like A Wizard (Even If You Can&apos;t Spell &apos;Copywriting&apos;)&quot;
          </p>
          <p className="text-lg text-gray-800 mb-4">
            This bonus alone transformed my business overnight. You&apos;ll discover:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                The 9 psychological cheat codes that turn browsers into buyers
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                The headline hypnosis system that makes prospects desperate to buy from you
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                The emotion-to-action conversion system that turns interest into instant sales
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                The objection obliteration method that removes every excuse not to buy
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            Remember: I went from ZERO sales to ₦50K in 24 hours using these exact copywriting secrets. One single sales message using these techniques brought in ₦380,000 in 3 days. Imagine never struggling to write sales messages again!
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎁 BONUS #2: The Quick-Start Checklist (Value: ₦50,000)
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            &quot;Zero To First Sale: Your Exact Roadmap In 30 Days Or Less&quot;
          </p>
          <p className="text-lg text-gray-800 mb-4">
            This isn&apos;t theory. This is your exact roadmap with daily action steps:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                Week 1: Foundation (The mindset shift and opportunity identification)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                Week 2: Setup (Validation, positioning, and offer creation)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                Week 3: Launch (Going to market and getting your first customers)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                Week 4: Scale (Optimizing and multiplying your results)
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            No more confusion. No more &quot;where do I start?&quot; Just follow the checklist and watch your business come alive. This is the exact 30-day sequence I used to go from broke to ₦200K weekly.
          </p>
        </div>

        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎁 BONUS #3: The Profit Calculator (Value: ₦35,000)
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            &quot;The Formula That Prevents Financial Disasters Before They Happen&quot;
          </p>
          <p className="text-lg text-gray-800 mb-4">
            This calculator saved me from losing ₦2 million on a business idea that looked &quot;sure fire.&quot; It includes:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                The brutally simple formula that reveals if your business will actually make money
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                Real case studies from Nigerian businesses (shawarma stands, social media agencies, e-commerce stores)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                Worksheet templates for different business types
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg">
                The &quot;rat race trap&quot; detector that prevents you from building a glorified job
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            Never again will you wonder &quot;Will this business actually make money?&quot; You&apos;ll KNOW before you risk a single naira.
          </p>
        </div> */}


        {/* Revised Bonuses Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          But Wait... I&apos;m Not Done Yet!
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          When you get Cash-o-logy today, you&apos;re also getting these game-changing bonuses absolutely FREE:
        </p>
        
        {/* Bonus #1: The Copywriting Arsenal */}
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎁 BONUS #1: The Copywriting Arsenal (Value: ₦75,000)
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            &quot;How To Sell Like A Wizard (Even If You Can&apos;t Spell &apos;Copywriting&apos;)&quot;
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Turn Browsers Into Buyers With 9 Psychological Cheat Codes That Work Like Magic
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                The Headline Hypnosis System That Makes Prospects Beg to Buy From You
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                7 Ways to Convert Interest Into Instant Sales Using the Emotion-to-Action System
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Obliterate Every Objection and Remove Excuses Not to Buy
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-green-700 font-bold mt-4">
            And there’s more...
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                When to Deploy Your Copywriting Secrets to Skyrocket Sales in 24 Hours
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                The Lies You’ve Been Told About Copywriting That Keep You From Writing Killer Sales Messages
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Craft Sales Messages That Generated ₦380,000 in Just 3 Days
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                Where to Use Your Copywriting Arsenal to Attract High-Value Customers Online and Offline
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            These techniques took me from ZERO sales to ₦50K in 24 hours. Imagine never struggling to write persuasive sales messages again!
          </p>
        </div>

        {/* Bonus #2: The Quick-Start Checklist */}
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎁 BONUS #2: The Quick-Start Checklist (Value: ₦50,000)
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            &quot;Zero To First Sale: Your Exact Roadmap In 30 Days Or Less&quot;
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Go From Zero to Your First Sale in 30 Days With a Step-by-Step Checklist
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                5 Daily Actions in Week 1 to Build a Rock-Solid Business Foundation
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Validate and Position Your Offer in Week 2 for Maximum Appeal
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                3 Proven Launch Strategies in Week 3 to Land Your First Paying Customers
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-green-700 font-bold mt-4">
            That’s not all...
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Scale Your Results in Week 4 to Multiply Your Income Fast
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                Where to Focus Your Efforts to Eliminate Confusion and Get Results
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                When to Take Each Step to Build Momentum and Avoid Overwhelm
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Follow the Exact 30-Day Plan That Took Me From Broke to ₦200K Weekly
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            No more guessing or wondering where to start. Just follow this checklist to see your business come alive in 30 days or less.
          </p>
        </div>

        {/* Bonus #3: The Profit Calculator */}
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-6 my-8">
          <h3 className="text-2xl font-bold text-green-700 mb-4">
            🎁 BONUS #3: The Profit Calculator (Value: ₦35,000)
          </h3>
          <p className="text-lg text-gray-800 mb-4">
            &quot;The Formula That Prevents Financial Disasters Before They Happen&quot;
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Predict Your Business Profits With a Brutally Simple Formula That Never Fails
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                5 Real Nigerian Case Studies That Show Exactly How to Make Money (From Shawarma to E-Commerce)
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Use Worksheet Templates to Plan Profitable Businesses in Any Industry
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                The “Rat Race Trap” Detector That Saves You From Building a Glorified Job
              </span>
            </li>
          </ul>
          <p className="text-lg italic text-green-700 font-bold mt-4">
            And here’s the kicker...
          </p>
          <ul className="space-y-4">
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                When to Trust Your Numbers to Avoid Million-Naira Mistakes
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                Where to Apply the Profit Calculator to Spot Financial Disasters Before They Happen
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-green-500 text-2xl">→</span>
              <span className="text-lg font-semibold">
                How to Save Millions by Avoiding “Sure-Fire” Ideas That Are Actually Doomed
              </span>
            </li>
          </ul>
          <p className="text-lg text-gray-800 mt-4">
            Never wonder if your business will make money again. This calculator saved me from a ₦2 million loss—imagine what it can do for you!
          </p>
        </div>


        {/* Testimonials Section */}
        {/* <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What Others Are Saying:
        </h2>
        <div className="space-y-8 mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <blockquote className="text-xl italic text-gray-800 mb-4 font-scribble">
              &quot;I was skeptical at first, but the validation framework alone saved me from losing ₦150,000 on a bad business idea. Three months later, I&apos;m making ₦280,000 monthly from my consulting business.&quot;
            </blockquote>
            <cite className="text-sm font-semibold text-blue-600 not-italic">
              - Adebayo K., Lagos
            </cite>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <blockquote className="text-xl italic text-gray-800 mb-4 font-scribble">
              &quot;The positioning strategies changed everything. I went from being just another graphic designer to THE brand designer in my niche. Tripled my rates overnight.&quot;
            </blockquote>
            <cite className="text-sm font-semibold text-blue-600 not-italic">
              - Chioma O., Abuja
            </cite>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <blockquote className="text-xl italic text-gray-800 mb-4 font-scribble">
              &quot;My friends used to laugh at my &apos;side hustles.&apos; Now they&apos;re asking me for business advice. Made my first ₦500K month using the automation system.&quot;
            </blockquote>
            <cite className="text-sm font-semibold text-blue-600 not-italic">
              - Ibrahim M., Kano
            </cite>
          </div>
        </div> */}

        {/* Guarantee Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 border-b-2 border-blue-500 pb-2">
          My Iron-Clad &quot;Sleep-Tight-At-Night&quot; Guarantee
        </h2>
        <p className="text-lg leading-relaxed mb-6 font-bold text-blue-600">
          YOU CANNOT LOSE WITH THIS GUARANTEE
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I&apos;m so confident Cash-o-logy will transform your financial life that I&apos;m giving you a 90-DAY, NO-QUESTIONS-ASKED GUARANTEE.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Here&apos;s my promise:
        </p>
        <div className="relative">
          <ul className="space-y-4 mb-8 pr-8 md:pr-24">
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg">
                If you don&apos;t make at least ₦100,000 from implementing what you learn in this book within 90 days...
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg">
                If you don&apos;t see a clear, actionable path to financial freedom...
              </span>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-blue-500 text-2xl">•</span>
              <span className="text-lg">
                If you&apos;re not absolutely thrilled with your investment...
              </span>
            </li>
          </ul>
          <div className="absolute -right-4 md:right-0 top-0 w-20 md:w-32">
            <div className="transform rotate-12 bg-yellow-100 p-2 rounded shadow-md">
              <p className={`text-xs md:text-sm text-red-600 font-handwritten`}>
                Risk-free!
              </p>
            </div>
          </div>
        </div>
        <p className="text-lg leading-relaxed mb-6 font-bold text-blue-600">
          I&apos;LL REFUND EVERY SINGLE KOBO.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          And you keep the book plus all bonuses.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          That&apos;s how certain I am that this will work for you. You literally risk nothing and gain everything.
        </p>

        {/* Disclosure Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Full Disclosure - What This Book WON&apos;T Do For You
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I believe in being 100% honest, so let me tell you what Cash-o-logy won&apos;t do:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">❌</span>
            <span className="text-lg">
              It won&apos;t make you rich overnight. Building a real business takes focused effort and time (though you can see results in 30-60 days).
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">❌</span>
            <span className="text-lg">
              It won&apos;t work if you just read it and do nothing. You must implement the strategies.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">❌</span>
            <span className="text-lg">
              It&apos;s not a get-rich-quick scheme. It&apos;s a get-rich-for-real system that requires work.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">❌</span>
            <span className="text-lg">
              It won&apos;t guarantee success if you&apos;re looking for magic pills or lottery tickets.
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-red-500 text-2xl">❌</span>
            <span className="text-lg">
              It won&apos;t help you if you&apos;re not willing to step outside your comfort zone.
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6">
          This is for serious people who want to build serious businesses.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          If you&apos;re looking for crypto gambling advice or pyramid schemes, this isn&apos;t for you.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But if you want a proven, step-by-step system that works in the real world... if you&apos;re willing to put in the effort... then this is exactly what you need.
        </p>

        {/* Value Proposition Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Let Me Break Down The Value For You...
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Here&apos;s What You&apos;d Pay Elsewhere:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              Hiring a business consultant in Lagos: ₦75,000 per hour
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              For just 10 hours, you&apos;d spend ₦750,000
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              Premium business coaching program: ₦500,000 - ₦2,000,000
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              And most don&apos;t guarantee results
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              Professional copywriting course: ₦200,000+
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              Just for the writing skills alone
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              MBA from a top Nigerian university: ₦3,000,000+
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-blue-500 text-2xl">•</span>
            <span className="text-lg">
              Takes 2 years and focuses on theory, not practical business building
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6 font-bold text-green-600">
          Total Value of Cash-o-logy + All Bonuses: <span className="text-xl text-red-600">₦975,000</span>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But you won&apos;t pay ₦975,000...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Not ₦500,000...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Not even ₦100,000...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Not even ₦50,000...
        </p>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Today Only: ₦8,999
            {/* Today Only: ₦25,000 */}
          </h3>
          <p className="text-xl mb-6">
            (That&apos;s less than what some people spend on weekend enjoyment!)
          </p>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            GET YOUR COPY NOW
          </Link>
        </div>

        {/* Urgency Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          But Here&apos;s The Thing...
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I can&apos;t keep this price forever.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Once I hit 500 copies sold, the price goes to ₦25,000.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          At 1,000 copies sold, it becomes ₦65,000.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Why?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Because as more people use this system and start making money, word will spread. Demand will increase. And I&apos;ll have no choice but to raise the price.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Right now, you&apos;re getting in early. At the ground floor price.
        </p>
        <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 my-8 text-center">
          <p className="text-sm font-semibold text-yellow-800 mb-2">
            ⏰ WARNING: This Offer Expires In 72 Hours
          </p>
          <p className="text-lg text-gray-800">
            I&apos;m only releasing 500 copies at this ₦8,999 price.
          </p>
          <p className="text-lg text-gray-800">
            After 72 hours OR when we hit 500 copies (whichever comes first), this deal disappears forever.
          </p>
        </div>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          Don&apos;t wait. Don&apos;t think about it. Don&apos;t discuss it with anyone who laughed at your dreams before.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          The clock is ticking.
        </p>

        {/* Consequences Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Here&apos;s What Happens If You Don&apos;t Act Now...
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Let me paint you a picture of your life 12 months from now...
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-red-600">
          Scenario 1: You Do Nothing
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          You close this page. You tell yourself &quot;maybe later.&quot; You go back to scrolling social media, watching other people live the life you want.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Six months from now, you&apos;re in the exact same position. 
          <br/>
          <br/>
          Same job. 
          <br/>
          <br/>
          Same salary. 
          <br/>
          <br/>
          Same financial stress. 
          <br/>
          <br/>
          Same voicelessness at family gatherings.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your friends who laughed at your business dreams are still laughing. Because you never proved them wrong.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your wife still looks at you with that same pity when bills arrive. Your kids still ask for things you can&apos;t afford. You still avoid family events because you can&apos;t contribute meaningfully.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          A year from now, you&apos;re reading another sales letter for another &quot;opportunity,&quot; still looking for the magic bullet that will change your life. Still making excuses. Still waiting for the &quot;perfect time.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          Is that really the life you want?
        </p>
        <h3 className="text-xl md:text-2xl font-bold mb-4 text-green-600">
          Scenario 2: You Take Action Today
        </h3>
        <p className="text-lg leading-relaxed mb-6">
          You invest ₦25,000 in yourself. You implement the Cash-o-logy system. You build your first profitable business.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          In 60 days, you&apos;re making your first ₦100,000 monthly. Your confidence skyrockets. People start noticing the change in you.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          In 6 months, you&apos;re the one your friends call for business advice. You&apos;re the one dropping money at family events. You&apos;re the one whose opinion matters.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          In 12 months, you&apos;re living in a better house, driving a better car, sending your kids to better schools. You&apos;re the success story others aspire to become.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The same friends who laughed at you are now asking, &quot;How did you do it? Can you teach me?&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          And you&apos;ll smile, remembering this exact moment when you made the decision that changed everything.
        </p>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            GET CASH-O-LOGY NOW - ONLY ₦8,999
          </h3>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            SECURE MY COPY NOW
          </Link>
        </div>

        {/* FAQ Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-8 mb-12">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;I don&apos;t have capital to start a business. Will this help me?&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: Absolutely! Module 2 reveals 23 businesses you can start with less than ₦15,000. Plus, the validation framework ensures you never waste money on ideas that won&apos;t work. I started my first successful business with less than ₦20,000.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;I&apos;ve never run a business before. Is this too advanced for me?&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: This is PERFECT for beginners! I wrote it assuming you know absolutely nothing about business. Everything is explained step-by-step with real examples from Nigeria. Remember, I was broke with ₦100 in my account when I started. If I can do it, so can you.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;I don&apos;t have time to read a whole book. I&apos;m too busy with my job.&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: The Quick-Start Checklist gives you the most important actions in bite-sized daily tasks (15-30 minutes per day). You can start seeing results even while you&apos;re reading the full book. Plus, how&apos;s that &quot;busy&quot; job working out for your bank account?
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;Will this work in my city/state? I&apos;m not in Lagos.&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: YES! These principles work anywhere in Nigeria (and beyond). I include specific examples from Lagos, Abuja, Port Harcourt, Kano, Ibadan, and other cities. Business is business, whether you&apos;re in Onitsha or Maiduguri.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;I already have a struggling business. Can this help me fix it?&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: Even better! Many struggling businesses are just one positioning tweak or pricing adjustment away from profitability. Module 4 (Positioning) and Module 6 (Pricing) alone could double or triple your revenue within 60 days.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;What if I&apos;m too old to start a business? I&apos;m 45.&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: Too old? Colonel Sanders was 65 when he started KFC! Your age is actually an advantage - you have experience, connections, and credibility that younger people lack. Several of my most successful students are over 40.
            </p>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
            <p className="text-lg font-bold text-blue-600 mb-2">
              Q: &quot;Is this just another get-rich-quick scheme?&quot;
            </p>
            <p className="text-lg text-gray-800">
              A: No! This is get-rich-for-REAL. It requires work, implementation, and persistence. But it&apos;s also the fastest legitimate path to building wealth through business ownership. Quick results? Yes. Easy? No such thing exists.
            </p>
          </div>
        </div>

        {/* ROI Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          Let Me Show You The Numbers...
        </h2>
        <p className="text-lg leading-relaxed mb-6 font-bold">
          Return On Investment Calculator:
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Let&apos;s be conservative. Say you implement just ONE strategy from this book and it makes you an extra ₦75,000 per month.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          In 12 months, that&apos;s ₦900,000 in additional income.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your investment today: ₦8,999
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-green-600">
          Your return: 3,600+%
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Even if I&apos;m HALF wrong and you only make an extra ₦35,000 monthly, you&apos;ll still pocket ₦420,000 in year one.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-green-600">
          That&apos;s still a 1,680+% return on investment!
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Show me a bank, stock, or cryptocurrency that beats that consistently!
        </p>
        <p className="text-lg leading-relaxed mb-6">
          But here&apos;s the real kicker...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          What if you implement multiple strategies? What if you build a business that makes ₦200,000 monthly? ₦500,000? ₦1,000,000?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Suddenly, this ₦8,999 investment becomes the best money you&apos;ve ever spent.
        </p>

        {/* Excuses Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          What&apos;s Your Excuse Going To Be This Time?
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Let me guess what you&apos;re thinking right now:
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          &quot;I don&apos;t have ₦8,999 to spare...&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Really? You don&apos;t have ₦8,999 to invest in changing your entire financial future? That&apos;s less than ₦400 per day for a month. Less than what some people spend on data and food daily.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          &quot;I need to think about it...&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          You&apos;ve been &quot;thinking about it&quot; for years. How&apos;s that working out? Your friends who take action don&apos;t need to think - they ACT, then adjust as they go.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          &quot;What if it doesn&apos;t work for me?&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          That&apos;s what the 90-day guarantee is for! You risk absolutely nothing.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          &quot;I&apos;m not ready yet...&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          When will you be ready? Next month? Next year? In 5 years when inflation has made everything more expensive and opportunities harder to find?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The truth is, you&apos;ll never feel &quot;ready.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I wasn&apos;t ready when I had ₦100 in my account. But I started anyway.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Successful people don&apos;t wait until they&apos;re ready. They get ready by starting.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your friends are already building businesses while you&apos;re still making excuses.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          Can you afford to appear behind the times?
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          Can you afford to be the only one still struggling while others are winning?
        </p>

        {/* Final Guarantee Reminder */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 my-8">
          <p className="text-lg text-gray-800 font-bold">
            REMEMBER: YOU&apos;RE FULLY PROTECTED
          </p>
          <p className="text-lg text-gray-800">
            90-day guarantee. No questions asked. Full refund if you&apos;re not satisfied.
          </p>
          <p className="text-lg text-gray-800">
            You literally have nothing to lose and everything to gain.
          </p>
          <p className="text-lg text-gray-800">
            The only risk is NOT taking action and staying exactly where you are.
          </p>
        </div>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            YES! I WANT TO CHANGE MY LIFE - GET CASH-O-LOGY NOW
          </h3>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            SECURE MY COPY NOW
          </Link>
        </div>

        {/* Final Imagination Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          One Last Thing...
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I want you to imagine something with me.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Imagine it&apos;s exactly one year from today.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          You&apos;re sitting in your new home - maybe not Lekki yet, but definitely an upgrade from where you are now.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your phone buzzes. It&apos;s a bank alert: <span className="font-bold text-green-600">&quot;Credit Alert: ₦450,000. Business Revenue. Available Balance: ₦2,780,000.&quot;</span>
        </p>
        <p className="text-lg leading-relaxed mb-6">
          You smile because this is just another Tuesday. Another regular day in your new life.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your kids run up to you, excited about their new school. Your wife kisses you, proud of how far you&apos;ve come. Your friends call to ask for business advice.
        </p>

                {/* Continuation of Final Imagination Section */}
                <p className="text-lg leading-relaxed mb-6">
          The same friends who laughed at your dreams are now your biggest cheerleaders, constantly asking, &quot;How did you do it?&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          You remember this exact moment - sitting here, reading this letter, making the decision that changed everything.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          That moment is RIGHT NOW.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This is your crossroads.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Turn left, and you go back to the same old life. The same struggles. The same limitations. The same regrets.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Turn right, and you step into a new reality. A reality where money works for you. Where you have options. Where your voice matters.
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          Which way will you turn?
        </p>
        <div className="bg-yellow-100 border-2 border-yellow-500 rounded-lg p-4 my-8 text-center">
          <p className="text-sm font-semibold text-yellow-800 mb-2">
            ⏰ FINAL WARNING: 72 Hours Left
          </p>
          <p className="text-lg text-gray-800 font-bold text-red-600">
            Clock is ticking. Price goes up to ₦25,000 in:
          </p>
          <p className="text-2xl font-bold text-red-600">
            71 hours, 23 minutes...
          </p>
        </div>
        <p className="text-lg leading-relaxed mb-6">
          Don&apos;t let another opportunity slip through your fingers.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Don&apos;t be the person who &quot;almost&quot; changed their life.
        </p>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            SECURE MY COPY NOW - ONLY ₦8,999
          </h3>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            GET INSTANT ACCESS
          </Link>
        </div>

        {/* P.S. Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          P.S.
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          I know some of you scrolled straight to this P.S. section (I do it too). Here&apos;s the deal:
        </p>
        <p className="text-lg leading-relaxed mb-6">
          My name is Chinedu. Six months ago, I was broke with ₦100 in my account. My friends laughed when I said I wanted to start a business.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Today, I make ₦2.5 million monthly from businesses that run mostly without me.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Cash-o-logy is the complete system I used to make this transformation. It&apos;s the exact blueprint that took me from laughingstock to millionaire in 6 months.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          For ₦25,000 (less than most people spend on weekend enjoyment), you get:
        </p>
        <ul className="space-y-4 mb-8">
          <li className="flex items-start space-x-3">
            <span className="text-green-500 text-2xl">→</span>
            <span className="text-lg">
              The complete Cash-o-logy system (9 modules)
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-green-500 text-2xl">→</span>
            <span className="text-lg">
              The Copywriting Arsenal bonus (₦75,000 value)
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-green-500 text-2xl">→</span>
            <span className="text-lg">
              The Quick-Start Checklist bonus (₦50,000 value)
            </span>
          </li>
          <li className="flex items-start space-x-3">
            <span className="text-green-500 text-2xl">→</span>
            <span className="text-lg">
              The Profit Calculator bonus (₦35,000 value)
            </span>
          </li>
        </ul>
        <p className="text-lg leading-relaxed mb-6 font-bold text-green-600">
          Total value: ₦975,000. Your price today: ₦25,000.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          All backed by my 90-day, sleep-tight-at-night guarantee.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This offer expires in 72 hours. After that, the price goes to ₦65,000.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Don&apos;t spend another year wishing you had started. Start TODAY.
        </p>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            GET INSTANT ACCESS - ₦25,000
          </h3>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            SECURE MY COPY NOW
          </Link>
        </div>

        {/* P.P.S. Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          P.P.S.
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Still sitting on the fence? Let me ask you this:
        </p>
        <p className="text-lg leading-relaxed mb-6 font-bold text-red-600">
          What&apos;s the cost of staying exactly where you are?
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Another year of the same salary... same financial stress... same lack of options... same embarrassment at family gatherings...
        </p>
        <p className="text-lg leading-relaxed mb-6">
          While this book costs ₦25,000, staying broke will cost you MILLIONS in lost opportunities, lost respect, and lost time.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          I&apos;ve given you everything: The complete system, massive bonuses, iron-clad guarantee, and rock-bottom pricing.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The only thing I can&apos;t give you is the decision to change your life.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          That decision is yours alone.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Make it now. Before it&apos;s too late.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your future self is watching. Don&apos;t let them down.
        </p>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            CHANGE MY LIFE NOW - GET CASH-O-LOGY
          </h3>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            SECURE MY COPY NOW
          </Link>
        </div>

        {/* P.P.P.S. Section */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          P.P.P.S.
        </h2>
        <p className="text-lg leading-relaxed mb-6">
          Remember: The same friends who laughed at me are now living in my shadow, asking for my secrets.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          They wish they had believed in me when I was broke.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          They wish they had supported me instead of mocking me.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Most of all, they wish they had started their own journey when I started mine.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Don&apos;t be like them.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Don&apos;t be the person who watches others succeed and wonders &quot;what if.&quot;
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Be the person who takes action.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Be the person who proves the doubters wrong.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Be the person whose friends stop laughing and start listening.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Your transformation starts with clicking this button:
        </p>
        <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-lg my-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            YES! I&apos;M READY TO STOP BEING BROKE
          </h3>
          <Link href="#" className="bg-white text-red-600 py-4 px-8 rounded-full font-bold text-xl hover:bg-red-700 hover:text-white transform hover:scale-105 transition-all duration-200">
            SECURE MY COPY NOW
          </Link>
        </div>
      </main>
    </div>
  )
}