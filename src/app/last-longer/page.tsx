/* eslint-disable react/no-unescaped-entities */
// 'use client';

// import { useState, useEffect } from 'react';

export default function SalesPage() {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 48,
//     minutes: 0,
//     seconds: 0
//   });

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         } else {
//           clearInterval(timer);
//           return { hours: 0, minutes: 0, seconds: 0 };
//         }
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-red-800 to-red-600 text-white py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">The 20-Minute Man: How to Go From 2-Minute Husband to Her All-Night Bedroom Hero in 30 Days</h1>
        
        <div className="bg-yellow-400 text-red-800 p-4 rounded-lg max-w-2xl mx-auto mt-6 border-2 border-yellow-500">
          <p className="font-bold text-xl">WARNING: What you're about to read will probably shock you, anger you, and maybe even embarrass you...</p>
          <p className="mt-2">But if you're a married man who's tired of disappointing your wife in bed and feeling like less of a man because you can't last more than 2-3 minutes...</p>
          <p className="mt-2 font-bold">Then this might be the most important message you'll ever read.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Author Section */}
        <div className="border-l-4 border-red-600 pl-4 my-8">
          <p className="text-sm uppercase tracking-wider text-gray-500">From the desk of Dr. Marcus Chen</p>
          <p className="italic text-gray-700">Sexual Performance Specialist who has helped over 3,847 married men transform from "2-minute disasters" into confident bedroom legends in just 30 days:</p>
        </div>

        {/* Brutal Truth Section */}
        <div className="bg-red-50 p-6 rounded-lg my-8 border border-red-200">
          <h2 className="text-2xl font-bold text-red-800 mb-4">I hate to be blunt, but here's the brutal truth:</h2>
          <p className="mb-4">Your wife is secretly disappointed every single time you have sex.</p>
          <p className="mb-4">She loves you. She supports you. But deep down, she's frustrated, unsatisfied, and probably wondering if this is what the rest of her married life will look like.</p>
          <p className="mb-4 font-bold">And you know it, don't you?</p>
          <p className="mb-4">You see it in her eyes after those awkward 90 seconds of "intimacy."</p>
          <p className="mb-4">You feel it in the way she turns away afterwards.</p>
          <p className="mb-4">You sense it in how she's "too tired" for sex more often than before.</p>
          <div className="bg-white p-4 rounded border border-red-300 mt-4">
            <p className="font-bold text-red-700">But here's what will probably shock you even more:</p>
            <p className="font-bold text-green-700 mt-2">It's NOT your fault.</p>
            <p className="font-bold text-green-700">And it's NOT permanent.</p>
            <p className="mt-2">In fact, everything you've been told about premature ejaculation is a LIE designed to keep you buying expensive pills, creams, and gadgets that don't work.</p>
          </div>
        </div>

        {/* Personal Message Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">A Personal Message from a Former "30-Second Disaster" Who Almost Lost His Marriage...</h2>
          <div className="relative bg-blue-50 p-6 rounded-lg border border-blue-200">
            <span className="absolute -top-4 -left-4 text-6xl font-serif text-blue-400">"</span>
            <p className="text-lg italic text-center mb-4">...but now regularly gives his wife multiple orgasms in sessions that last 45+ minutes</p>
            
            <div className="bg-white p-6 rounded-lg my-6 border border-gray-200">
              <p className="font-bold mb-2">Dear Frustrated Husband,</p>
              <p className="mb-4">My name is Dr. Marcus Chen, and 8 years ago, I was exactly where you are right now.</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Married to the woman of my dreams.</li>
                <li>Completely unable to satisfy her in bed.</li>
                <li>Lasting barely 2 minutes on a GOOD night.</li>
                <li>Watching the light in her eyes fade a little more after each disappointing encounter.</li>
              </ul>
              
              <p className="font-bold mb-2">I tried everything:</p>
              
              <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Expensive delay sprays (made me numb, made her numb)</li>
                <li>Thick condoms (killed all sensation for both of us)</li>
                <li>Kegel exercises (did nothing after 6 months of daily practice)</li>
                <li>Antidepressants (destroyed my sex drive completely)</li>
                <li>$200/hour therapy sessions (just expensive talking with no results)</li>
              </ul>
              
              <p className="mb-4">Nothing worked.</p>
              <p className="mb-4">My wife started making excuses to avoid intimacy.</p>
              <p className="mb-4">I started feeling like a complete failure as a man.</p>
              <p className="mb-4 font-bold">Our marriage was falling apart, and it was entirely my fault.</p>
              <p className="font-bold text-blue-700">That's when I discovered something that changed everything...</p>
            </div>
          </div>
        </div>

        {/* Hidden Trigger Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">The "Hidden Trigger" That Controls Every Man's Sexual Stamina (And Why 97% of Men Never Learn This)</h2>
          
          <div className="bg-green-50 p-6 rounded-lg border border-green-200">
            <p className="mb-4">Here's what I discovered during my desperate search for answers:</p>
            <p className="font-bold text-green-800 text-xl mb-4">Premature ejaculation has NOTHING to do with your penis.</p>
            <p className="italic mb-4">Let me repeat that because it's crucial:</p>
            <p className="font-bold text-green-800 text-xl mb-4">Your premature ejaculation problem has absolutely nothing to do with your penis, your sensitivity, or your "genes."</p>
            
            <p className="mb-4">It has everything to do with a specific neurological trigger in your brain that's been programmed incorrectly.</p>
            
            <div className="bg-white p-4 rounded-lg my-6 border border-green-300">
              <p className="font-bold mb-2">Think of it like this...</p>
              <p className="mb-4">Your brain has a "sexual control center" that determines exactly when you climax.</p>
              <p className="mb-4">For most men, this control center is stuck on "EMERGENCY MODE" - designed to finish as quickly as possible.</p>
              <p className="mb-4">This made sense 50,000 years ago when quick mating meant survival.</p>
              <p className="font-bold text-red-600">But in your bedroom, with your wife, it's destroying your marriage.</p>
            </div>
            
            <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500">
              <p className="font-bold text-lg">The good news?</p>
              <p className="mt-2">Once you know how to "reprogram" this control center (which takes about 7-14 days), you can last as long as you want.</p>
              <p className="mt-2">Not 5 minutes.</p>
              <p className="mt-2">Not 10 minutes.</p>
              <p className="font-bold text-2xl text-green-700 mt-2">As long as you want.</p>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">"My Husband Went from 90 Seconds to 47 Minutes on Our First Try..."</h2>
          <p className="text-center italic mb-8">Don't take my word for it.</p>
          <p className="text-center mb-8">Here's what happened when I shared this discovery with other desperate husbands:</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-scribble text-xl text-purple-800">"Dr. Chen, I can't believe this actually worked. My husband tried your technique on Thursday night. We went from our usual 90-second disaster to 47 minutes of the most incredible sex we've had in 12 years of marriage. I actually had THREE orgasms. I forgot that was even possible. Thank you for saving our marriage."</p>
              <p className="mt-4 font-bold text-purple-700">- Sarah M., Denver (her husband's results after just 4 days)</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-scribble text-xl text-purple-800">"This is insane. I've been married 15 years and always thought I was just 'built this way.' Used your brain reset technique and lasted 38 minutes last night. My wife couldn't believe it. Neither could I. She's been smiling all day."</p>
              <p className="mt-4 font-bold text-purple-700">- Mike T., Atlanta</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-scribble text-xl text-purple-800">"I was about to ask my wife for a divorce because I couldn't handle disappointing her anymore. Your method gave me my confidence back. Last weekend we had sex for over an hour. AN HOUR! She told me it was better than our honeymoon."</p>
              <p className="mt-4 font-bold text-purple-700">- James R., Phoenix</p>
            </div>
            
            {/* Testimonial 4 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
              <p className="font-scribble text-xl text-purple-800">"My wife actually asked ME what I did differently. She said it was like being with a completely different man. We've had sex 4 times this week - more than we had in the previous 6 months combined."</p>
              <p className="mt-4 font-bold text-purple-700">- David L., Chicago</p>
            </div>
          </div>
        </div>

        {/* Why Traditional Methods Fail Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">The Shocking Truth About Why "Traditional" Premature Ejaculation Treatments Don't Work</h2>
          
          <p className="mb-6">Before I reveal exactly how this brain-based solution works, you need to understand why everything else you've tried has failed:</p>
          
          <div className="space-y-6">
            {/* Method 1 */}
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800 text-lg mb-2">Delay Sprays and Numbing Creams:</h3>
              <p>These don't solve the problem - they just mask it. Plus they kill sensation for both you AND your wife. How is numb, emotionless sex supposed to save your marriage?</p>
            </div>
            
            {/* Method 2 */}
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800 text-lg mb-2">Thick Condoms:</h3>
              <p>Same problem. You can't feel anything, she can't feel anything. You might last longer, but you're both bored out of your minds.</p>
            </div>
            
            {/* Method 3 */}
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800 text-lg mb-2">Kegel Exercises:</h3>
              <p>These can actually make premature ejaculation WORSE by creating more tension in your pelvic floor. (I learned this the hard way after months of useless exercises.)</p>
            </div>
            
            {/* Method 4 */}
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800 text-lg mb-2">Antidepressants:</h3>
              <p>Sure, they might help you last longer by killing your sex drive completely. But what's the point of lasting longer if you don't even want to have sex?</p>
            </div>
            
            {/* Method 5 */}
            <div className="bg-red-50 p-5 rounded-lg border border-red-200">
              <h3 className="font-bold text-red-800 text-lg mb-2">Expensive Therapy:</h3>
              <p>Traditional therapy focuses on anxiety and stress. But premature ejaculation isn't a psychological problem - it's a neurological one. You can talk about it for years without fixing the actual brain trigger causing it.</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-6 rounded-lg mt-8 border-l-4 border-yellow-500">
            <p className="font-bold text-lg mb-2">Here's the real problem:</p>
            <p className="mb-4">All of these "solutions" treat the symptoms, not the cause.</p>
            <p className="italic">It's like putting a band-aid on a broken bone.</p>
            <p className="font-bold mt-2">The broken bone (your misfiring brain trigger) is still there, so the problem keeps coming back.</p>
          </div>
        </div>

        {/* Protocol Section */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">The "20-Minute Protocol" That Rewires Your Brain for Automatic Sexual Control</h2>
          
          <p className="text-center mb-8">Here's how the real solution works:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-bold text-blue-800 text-lg mb-2">Step 1: The Neural Reset (Days 1-3)</h3>
              <p>Using a specific sequence of mental exercises, you'll "reset" your sexual control center back to its natural state. This removes years of faulty programming in just 72 hours.</p>
            </div>
            
            {/* Step 2 */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-bold text-green-800 text-lg mb-2">Step 2: The Stamina Anchor (Days 4-10)</h3>
              <p>Next, you'll install a new "stamina anchor" - a neurological trigger that gives you complete control over your timing. You'll be able to last 20 minutes, 40 minutes, or even longer, entirely at will.</p>
            </div>
            
            {/* Step 3 */}
            <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 text-center">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-bold text-purple-800 text-lg mb-2">Step 3: The Pleasure Amplifier (Days 11-30)</h3>
              <p>Finally, you'll learn to amplify both your pleasure and hers, creating the kind of mind-blowing experiences that make her crave you constantly.</p>
            </div>
          </div>
          
          <div className="bg-yellow-100 p-4 rounded-lg text-center mt-8 border border-yellow-300">
            <p className="font-bold">The entire process takes 30 days.</p>
            <p className="font-bold text-green-700">But most men see dramatic results within the first week.</p>
          </div>
        </div>

        {/* More Testimonials */}
        <div className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8">"I Lasted 3 Minutes My Entire Life... Now I Can Go for Over an Hour"</h2>
          
          <div className="space-y-6">
            {/* Testimonial 1 */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-scribble text-xl text-pink-800">"Dr. Chen, this is embarrassing to admit, but I've never lasted more than 3 minutes my entire adult life. I'm 34 years old and I felt like a complete fraud as a husband. Your 20-minute protocol changed everything. Last night I lasted 73 minutes. My wife was amazed. I was amazed. This actually works."</p>
              <p className="mt-4 font-bold text-pink-700">- Robert K., Miami</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-scribble text-xl text-pink-800">"Your method is incredible. I've gone from 2-minute disasters to 45-minute sessions consistently. My wife says our sex life is better now than when we were dating 8 years ago. She's more attracted to me, more affectionate, and more eager for intimacy than ever before."</p>
              <p className="mt-4 font-bold text-pink-700">- Anthony P., Seattle</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200">
              <p className="font-scribble text-xl text-pink-800">"I can't believe I wasted 2 years and over $3,000 on sprays, pills, and therapy that didn't work. Your brain-based approach fixed my premature ejaculation in 9 days. Nine days! I should have found you sooner."</p>
              <p className="mt-4 font-bold text-pink-700">- Chris M., Dallas</p>
            </div>
          </div>
        </div>

        {/* What's Included Section */}
        <div className="my-12 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">What You'll Get Inside "The 20-Minute Man" System:</h2>
          
          <div className="space-y-6">
            {/* Module 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">Module 1: The Science of Sexual Stamina</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The real neurological cause of premature ejaculation (page 23)</li>
                <li>Why your brain is programmed for "quick release" and how to change it (page 31)</li>
                <li>The 3 brain chemicals that control your sexual timing (page 47)</li>
              </ul>
            </div>
            
            {/* Module 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">Module 2: The Neural Reset Protocol</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>The exact 7-step sequence to reset your sexual control center (page 68)</li>
                <li>The "emergency brake" technique that stops premature ejaculation instantly (page 81)</li>
                <li>How to eliminate performance anxiety forever (page 94)</li>
              </ul>
            </div>
            
            {/* Module 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">Module 3: Building Your Stamina Anchor</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>How to install automatic 20+ minute stamina in just 10 days (page 112)</li>
                <li>The "control dial" method - last exactly as long as you choose (page 127)</li>
                <li>Advanced techniques for 45+ minute sessions (page 141)</li>
              </ul>
            </div>
            
            {/* Module 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">Module 4: The Pleasure Amplifier</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>How to intensify your orgasms by 300% (page 159)</li>
                <li>The technique that gives her multiple orgasms every time (page 173)</li>
                <li>Becoming a true "bedroom legend" in her eyes (page 188)</li>
              </ul>
            </div>
            
            {/* Module 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-bold text-blue-800 text-xl mb-3">Module 5: Advanced Mastery</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>How to have multiple orgasms as a man (page 201)</li>
                <li>The "all-night" protocol for marathon sessions (page 218)</li>
                <li>Troubleshooting guide for any challenges (page 235)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bonuses Section */}
        <div className="my-12 bg-gradient-to-r from-purple-800 to-purple-600 text-white p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-center mb-8">PLUS You Get These Exclusive Bonuses (Worth $347):</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Bonus 1 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-purple-300">
              <h3 className="font-bold text-yellow-300 text-xl mb-3">BONUS #1: The "First Night Success" Quick-Start Guide</h3>
              <p>Get results on your very first try with this rapid implementation guide. Many men see dramatic improvement in their first attempt using these techniques.</p>
            </div>
            
            {/* Bonus 2 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-purple-300">
              <h3 className="font-bold text-yellow-300 text-xl mb-3">BONUS #2: The Confidence Recovery Protocol</h3>
              <p>Rebuild your sexual confidence and eliminate the shame, embarrassment, and anxiety that premature ejaculation has caused in your marriage.</p>
            </div>
            
            {/* Bonus 3 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-purple-300">
              <h3 className="font-bold text-yellow-300 text-xl mb-3">BONUS #3: The "Her Pleasure" Masterclass</h3>
              <p>Learn exactly how to give your wife the most intense orgasms of her life, ensuring she becomes completely addicted to intimacy with you.</p>
            </div>
            
            {/* Bonus 4 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-purple-300">
              <h3 className="font-bold text-yellow-300 text-xl mb-3">BONUS #4: Troubleshooting Common Challenges</h3>
              <p>What to do if you're nervous, stressed, or haven't been intimate in months. Plus solutions for every obstacle you might face.</p>
            </div>
            
            {/* Bonus 5 */}
            <div className="bg-white bg-opacity-10 p-6 rounded-lg border border-purple-300 md:col-span-2">
              <h3 className="font-bold text-yellow-300 text-xl mb-3">BONUS #5: The Advanced Stamina Techniques</h3>
              <p>Once you've mastered the basics, these advanced methods will make you absolutely legendary in the bedroom.</p>
            </div>
          </div>
        </div>

        {/* Imagination Section */}
        <div className="my-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg text-center">
          <h2 className="text-3xl font-bold mb-8">Here's What This Could Mean for Your Marriage:</h2>
          
          <div className="max-w-2xl mx-auto space-y-4 text-left">
            <p className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
              <span>Imagine walking into your bedroom with complete confidence...</span>
            </p>
            <p className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
              <span>Knowing that you can satisfy your wife completely...</span>
            </p>
            <p className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
              <span>Seeing the desire in her eyes instead of disappointment...</span>
            </p>
            <p className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
              <span>Having her initiate intimacy because she craves what you can give her...</span>
            </p>
            <p className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
              <span>Feeling like a real man again - powerful, confident, sexually dominant...</span>
            </p>
            <p className="flex items-start">
              <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
              <span>Watching her have multiple orgasms and knowing YOU caused every single one...</span>
            </p>
           

        <p className="flex items-start">
          <span className="inline-block w-6 h-6 bg-white text-blue-700 rounded-full flex items-center justify-center mr-2 flex-shrink-0">✓</span>
          <span>Having the kind of passionate, frequent sex that makes other couples jealous...</span>
        </p>
      </div>
      
      <div className="bg-white text-blue-800 p-4 rounded-lg mt-8 max-w-2xl mx-auto">
        <p className="font-bold text-xl">This isn't fantasy. This is what happens when you fix the real problem.</p>
      </div>
    </div>

    {/* More Testimonials */}
    <div className="my-12">
      <h2 className="text-3xl font-bold text-center mb-8">"Our Marriage Was Almost Over... Now We Can't Keep Our Hands Off Each Other"</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Testimonial 1 */}
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <p className="font-scribble text-xl text-orange-800">"Dr. Chen, I have to tell you what happened. My wife and I were talking about separation because our sex life was so bad. I lasted maybe 90 seconds on good nights. She never had orgasms. We were both miserable. Your system saved our marriage. I now last 30-45 minutes every single time. She's had more orgasms in the past month than in our previous 5 years combined. We're like newlyweds again."</p>
          <p className="mt-4 font-bold text-orange-700">- Mark T., Portland</p>
        </div>
        
        {/* Testimonial 2 */}
        <div className="bg-orange-50 p-6 rounded-lg border border-orange-200">
          <p className="font-scribble text-xl text-orange-800">"This method is unbelievable. I went from 2-minute embarrassment to giving my wife 3 orgasms in a 50-minute session last weekend. She couldn't stop talking about it. She's been more loving, more affectionate, and way more interested in sex ever since. Thank you for giving me my manhood back."</p>
          <p className="mt-4 font-bold text-orange-700">- Kevin R., Boston</p>
        </div>
      </div>
    </div>

    {/* Pricing Section */}
    <div className="my-12 bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">But Here's the Problem...</h2>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <p>I originally created this system for my private clients who paid $2,500 for personal consultations.</p>
        <p>The results were so incredible that word spread quickly.</p>
        <p>Soon I had a waiting list of over 800 men wanting help.</p>
        <p>I realized I couldn't help everyone individually, so I created this comprehensive system.</p>
        <p>But I'm not going to charge anywhere near what my private clients paid.</p>
        <p>In fact, I'm not even going to charge what this system is actually worth.</p>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 mt-6">
          <h3 className="font-bold text-center text-xl mb-4">The total value is $1,247:</h3>
          <ul className="space-y-2">
            <li className="flex justify-between">
              <span>The complete 20-Minute Man system:</span>
              <span>$497</span>
            </li>
            <li className="flex justify-between">
              <span>5 exclusive bonuses:</span>
              <span>$347</span>
            </li>
            <li className="flex justify-between">
              <span>Personal email support:</span>
              <span>$403</span>
            </li>
            <li className="flex justify-between border-t border-gray-300 pt-2 font-bold">
              <span>Total Value:</span>
              <span>$1,247</span>
            </li>
          </ul>
        </div>
        
        <p className="text-center font-bold mt-6">But I'm not asking for $1,247.</p>
        <p className="text-center font-bold">I'm not even asking for $497.</p>
        
        <div className="bg-green-100 p-6 rounded-lg text-center border border-green-300 mt-6">
          <p className="font-bold text-3xl text-green-800">Today, you can get everything for just $97.</p>
          <p className="mt-2">That's less than what most men waste on useless delay sprays in 6 months.</p>
          <p>Less than a single therapy session.</p>
          <p>Less than one dinner for you and your wife.</p>
        </div>
        
        <div className="bg-yellow-100 p-4 rounded-lg border-l-4 border-yellow-500 mt-6">
          <p className="font-bold">But there's a catch...</p>
        </div>
      </div>
    </div>

    {/* Urgency Section */}
    <div className="my-12 bg-red-100 p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-red-800 mb-8">This Offer Disappears in 48 Hours</h2>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <p>I can only offer this system at this price for the next 48 hours.</p>
        
        <div className="bg-white p-6 rounded-lg border border-red-300">
          <p className="font-bold">Here's why:</p>
          <p className="mt-2">My private clients paid $2,500 for this exact information.</p>
          <p>If I keep selling it for $97, they're going to be furious.</p>
          <p className="font-bold mt-4">So after 48 hours, the price goes back to $497 (which is still a steal for information this powerful).</p>
        </div>
        
        <div className="bg-red-200 p-6 rounded-lg">
          <h3 className="font-bold text-xl mb-4">You have two choices:</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg border border-red-400">
              <h4 className="font-bold text-red-700 mb-2">Choice #1:</h4>
              <p>Do nothing. Keep disappointing your wife. Keep feeling like less of a man. Watch your marriage slowly deteriorate because you're too stubborn or scared to take action.</p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-green-400">
              <h4 className="font-bold text-green-700 mb-2">Choice #2:</h4>
              <p>Invest $97 in the solution that will transform you into the lover your wife has been desperately craving. Give her the sexual satisfaction she deserves. Become the confident, sexually powerful man you were meant to be.</p>
            </div>
          </div>
          
          <p className="font-bold text-xl mt-6">The choice is obvious.</p>
        </div>
      </div>
    </div>

    {/* Guarantee Section */}
    <div className="my-12 bg-blue-100 p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-blue-800 mb-8">My Personal 60-Day "Your Wife Will Thank You" Guarantee</h2>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <p>I'm so confident this system will transform your sexual performance that I'm offering something unprecedented:</p>
        
        <div className="bg-white p-6 rounded-lg border border-blue-300">
          <p>Try the 20-Minute Man system for 60 full days.</p>
          <p className="mt-2">Use the techniques.</p>
          <p>Apply the protocols.</p>
          <p>Transform your bedroom performance.</p>
          
          <div className="bg-yellow-100 p-4 rounded-lg mt-4 border border-yellow-300">
            <p className="font-bold">If your wife isn't absolutely thrilled with your new abilities...</p>
            <p className="font-bold">If you're not lasting 20+ minutes consistently...</p>
            <p className="font-bold">If you're not completely satisfied for ANY reason...</p>
          </div>
          
          <p className="font-bold text-green-700 mt-4">I'll refund every penny immediately.</p>
          <p className="mt-2">No questions asked.</p>
          <p>No hassles.</p>
          <p>No forms to fill out.</p>
        </div>
        
        <div className="bg-green-100 p-4 rounded-lg border border-green-300">
          <p className="font-bold text-2xl text-green-800">You literally cannot lose.</p>
          <p className="mt-2">The only risk is continuing to live with the shame, frustration, and disappointment of premature ejaculation when the solution is right in front of you.</p>
        </div>
      </div>
    </div>

    {/* Order Process Section */}
    <div className="my-12 bg-gray-100 p-8 rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-8">What Happens When You Order Right Now:</h2>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg border border-gray-300 text-center">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
          <h3 className="font-bold text-green-800 text-lg mb-2">Instant Access:</h3>
          <p>The moment your order is complete, you'll get immediate access to the entire system</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 text-center">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
          <h3 className="font-bold text-green-800 text-lg mb-2">Start Tonight:</h3>
          <p>You can begin the Neural Reset Protocol tonight and see improvements within days</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 text-center">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
          <h3 className="font-bold text-green-800 text-lg mb-2">Complete Privacy:</h3>
          <p>Your order is 100% confidential. Nothing embarrassing appears on your credit card statement</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300 text-center">
          <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
          <h3 className="font-bold text-green-800 text-lg mb-2">Personal Support:</h3>
          <p>Email me directly with any questions. I personally respond to every message</p>
        </div>
      </div>
    </div>

    {/* Final Urgency Section */}
    <div className="my-12 bg-red-100 p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold text-red-800 mb-4">The Clock Is Ticking...</h2>
      
      <div className="max-w-2xl mx-auto space-y-6">
        <p>Every day you wait is another day of:</p>
        
        <ul className="list-disc text-left pl-5 space-y-2 bg-white p-4 rounded-lg">
          <li>Disappointing your wife in bed</li>
          <li>Feeling like a sexual failure</li>
          <li>Missing out on the incredible intimacy you both deserve</li>
          <li>Letting your marriage suffer because of something completely fixable</li>
        </ul>
        
        <p className="font-bold text-xl">Don't let another day pass.</p>
        
        <div className="bg-white p-4 rounded-lg border border-red-300">
          <p>Your wife deserves a husband who can satisfy her completely.</p>
          <p className="mt-2">You deserve to feel confident and powerful in the bedroom.</p>
          <p className="mt-2">Your marriage deserves the passion and intimacy that comes with incredible sex.</p>
        </div>
        
        <p className="font-bold text-2xl text-red-700">Click the button below right now and reclaim your manhood.</p>
      </div>
    </div>

    {/* CTA Section */}
    <div className="my-12 bg-gradient-to-r from-green-600 to-green-800 text-white p-8 rounded-lg text-center">
      <h2 className="text-3xl font-bold mb-8">[ORDER THE 20-MINUTE MAN SYSTEM NOW - JUST $97]</h2>
      <p className="mb-6">(Regular Price $497 - Limited Time Only)</p>
      
      <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <p className="flex items-center justify-center">
            <span className="inline-block w-5 h-5 bg-white text-green-700 rounded-full flex items-center justify-center mr-2">✓</span>
            Complete 20-Minute Man System
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <p className="flex items-center justify-center">
            <span className="inline-block w-5 h-5 bg-white text-green-700 rounded-full flex items-center justify-center mr-2">✓</span>
            All 5 Exclusive Bonuses
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <p className="flex items-center justify-center">
            <span className="inline-block w-5 h-5 bg-white text-green-700 rounded-full flex items-center justify-center mr-2">✓</span>
            Personal Email Support
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg">
          <p className="flex items-center justify-center">
            <span className="inline-block w-5 h-5 bg-white text-green-700 rounded-full flex items-center justify-center mr-2">✓</span>
            60-Day Money-Back Guarantee
          </p>
        </div>
        <div className="bg-white bg-opacity-20 p-4 rounded-lg md:col-span-2">
          <p className="flex items-center justify-center">
            <span className="inline-block w-5 h-5 bg-white text-green-700 rounded-full flex items-center justify-center mr-2">✓</span>
            Instant Digital Access
          </p>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg max-w-md mx-auto mb-6">
        <p className="text-green-800 font-bold">SECURE ORDER FORM - 256-BIT SSL ENCRYPTION</p>
      </div>
      
      <div className="bg-yellow-400 text-red-800 p-4 rounded-lg max-w-2xl mx-auto mt-6">
        <p className="font-bold">Remember: This $97 price disappears in 48 hours. After that, you'll pay $497 for the exact same system.</p>
      </div>
    </div>

    {/* Final PS Section */}
    <div className="my-12 bg-gray-100 p-8 rounded-lg">
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <p className="font-bold">P.S. - Your wife is waiting for the man you're capable of becoming. Don't make her wait any longer.</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg border border-gray-300">
          <p className="font-bold">P.P.S. - Still hesitating? Here's one final testimonial:</p>
          
          <div className="bg-blue-50 p-4 rounded-lg mt-4 border border-blue-200">
            <p className="font-scribble text-xl text-blue-800">"Dr. Chen, I just wanted to say thank you one more time. It's been 3 months since I got your system. Our sex life is incredible now. I last 30-45 minutes every time. My wife has multiple orgasms. She tells me constantly how satisfied she is. But the best part? She looks at me the way she did when we first met. Like I'm her hero. Like she's proud to be my wife. Your system didn't just fix my premature ejaculation - it saved my marriage."</p>
            <p className="mt-4 font-bold text-blue-700">- Brian S., Nashville</p>
          </div>
          
          <p className="font-bold text-center mt-6">Don't wait another day. Order now.</p>
        </div>
      </div>
    </div>

    {/* Disclaimer */}
    <div className="my-12 text-center text-xs text-gray-500">
      <p>*This product is for educational purposes only and is not intended to diagnose, treat, cure, or prevent any medical condition. Individual results may vary. Please consult with a healthcare professional before making any changes to your health regimen.*</p>
    </div>
  </main>

  {/* Footer */}
  <footer className="bg-gray-800 text-white text-center p-6 text-sm">
    <p>© {new Date().getFullYear()} The 20-Minute Man System. All Rights Reserved.</p>
    <p className="mt-2">Privacy Policy | Terms of Service | Disclaimer</p>
  </footer>
</div>
);
}

