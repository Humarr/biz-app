/* eslint-disable react/no-unescaped-entities */
import React from 'react';

// ============================================================================
// DATA: All 67 Bullets Organized by Section
// ============================================================================

const bulletsData = {
  openingSalvo: [
    {
      text: "The brutal 90-day timeline that takes you from \"broke by Tuesday\" to **$1,200/month** in extra income—without quitting your day job, learning to code, or pretending to be a \"marketing expert.\"",
      emphasized: true
    },
    {
      text: "Why the smartest move is to work for **FREE first**... and the exact 5-hour strategy that turns free work into **$600/month clients** within 7 days or less. (This sounds backwards, but it's the ONLY way this works.)",
      emphasized: false
    },
    {
      text: "The **$0 startup playbook**: How to launch this entire business using nothing but the computer you're reading this on right now—no tools, no software subscriptions, no upfront investment of any kind.",
      emphasized: true
    },
    {
      text: "Page 47 reveals the \"copy-paste message template\" that lands you free clients in **72 hours or less**—even if you've never sent a cold message in your life.",
      emphasized: false
    },
    {
      text: "A counterintuitive pricing strategy that makes **$600/month feel CHEAP** to clients... even though you're only working 10 hours for them. (The secret is in how you frame the math.)",
      emphasized: true
    },
    {
      text: "The \"Tuesday-Thursday-Saturday\" schedule that lets you manage **2 clients while working full-time**—without burning out, without sacrificing sleep, and without your boss ever knowing.",
      emphasized: false
    },
    {
      text: "Why \"cleanup work\" is the hidden goldmine in online business... and how business owners making **$20k/month** will gladly pay you $600 to do the \"boring shit\" they hate.",
      emphasized: true
    },
    {
      text: "The **one type of client** you should NEVER work with—even if they're offering double your rate. (Hint: They'll make your life hell and it's not worth it.)",
      emphasized: false
    },
    {
      text: "How to \"bill for 20 hours\" while only working **10-12 hours**... without lying, without cheating, and without the client ever feeling ripped off. (This is about VALUE, not time.)",
      emphasized: true
    },
    {
      text: "The exact moment you know it's time to **fire a client**—and the word-for-word script that lets you walk away professionally while keeping the door open for referrals.",
      emphasized: false
    }
  ],
  
  theSystem: [
    {
      text: "What businesses will pay you **$50-75/hour** to do: Remove duplicate emails, organize messy spreadsheets, answer basic customer questions, and clean up course dashboards. That's it. That's the whole job.",
      emphasized: true
    },
    {
      text: "The math that makes clients say YES: If they make $20k/month working 160 hours, their time is worth **$125/hour**. You charge $60/hour. They SAVE **$650/month** by hiring you.",
      emphasized: false
    },
    {
      text: "Why you're NOT a virtual assistant, NOT a copywriter, and NOT a marketer—and why this distinction is the key to avoiding scope creep and frustrating clients.",
      emphasized: true
    },
    {
      text: "The \"free work agreement\" structure that protects you from exploitation (Ignore this, and you'll be used and dumped.).",
      emphasized: false
    },
    {
      text: "Page 23 exposes the three types of businesses that desperately need cleanup work—and where to find **50+ qualified prospects** in the next 30 minutes using Facebook groups alone.",
      emphasized: true
    },
    {
      text: "A sneaky way to send **20 client messages in 30 minutes** using nothing but Google Docs and a copy-paste system. (Your response rate will be 10-20%. Do the math.)",
      emphasized: false
    },
    {
      text: "The \"testimonial request\" script that gets clients to write glowing reviews for you—even if the work you did seems \"basic.\" (It's all in **how you ask**.)",
      emphasized: true
    },
    {
      text: "How to transition from free work to **$600/month paid work** without the client feeling pressured, manipulated, or \"sold to.\" (40-50% will say yes if you do this right.)",
      emphasized: false
    },
    {
      text: "The **EXACT DAY and TIME** to send your messages that gets you 2-3x more responses than any other time of the week.",
      emphasized: true
    },
    {
      text: "The \"expansion bullet\" technique for breaking up long task lists—borrowed directly from Gary Bencivenga's **$100 million worth** of sales letters.",
      emphasized: false
    },
    {
      text: "What to do when a client says \"that's too expensive\": The **three-sentence reframe** that shows them they're ALREADY spending $1,250/month... just using their own time.",
      emphasized: true
    },
    {
      text: "Page 89 reveals why you should NEVER use words like \"virtual assistant\" when describing what you do. (It triggers the wrong expectations and attracts the wrong clients.)",
      emphasized: false
    },
    {
      text: "The \"loop effect\" for managing multiple clients: How to batch similar tasks across all clients so you work **10 hours but accomplish 20 hours** worth of results.",
      emphasized: true
    },
    {
      text: "A secret way to look like a **$3,000/month professional** when you're just starting out—using nothing but Google Docs, Loom screen recordings, and this simple reporting template.",
      emphasized: false
    },
    {
      text: "Why most people FAIL at this: They try to be everything to everyone. The ones who succeed pick **ONE type of work** (cleanup) and become known for it.",
      emphasized: true
    }
  ],
  
  theWork: [
    {
      text: "The \"email list cleanup\" process that takes **60-90 minutes** but saves clients 10+ hours per month—and the exact Google Sheets formula that removes duplicates automatically.",
      emphasized: false
    },
    {
      text: "How to organize a client's customer data when it's scattered across **5-7 different spreadsheets**... and the VLOOKUP formula that consolidates everything in under 2 hours. (You'll learn it in 5 minutes.)",
      emphasized: true
    },
    {
      text: "What to say when a client's customer sends an angry email: The **three-step response template** that de-escalates 95% of upset customers without giving away the farm.",
      emphasized: false
    },
    {
      text: "Page 67 shows you how to create a \"master customer spreadsheet\" with automatic formulas that calculate **total revenue per customer**, days since last purchase, and active/inactive status—making you look like a data wizard.",
      emphasized: true
    },
    {
      text: "The professional documentation system that proves you did real work",
      emphasized: false
    },
    {
      text: "Why you should **NEVER delete anything** without asking first—and the \"duplicate and archive\" method that protects you from expensive mistakes.",
      emphasized: true
    },
    {
      text: "How to handle the inevitable \"can you also do this?\" requests: The polite decline script that keeps you focused on cleanup work.",
      emphasized: false
    },
    {
      text: "A little-known ConvertKit organization system that takes **30 minutes to set up** but saves clients hours every single month.",
      emphasized: true
    },
    {
      text: "What to do when you DON'T know how to use a client's tool: The YouTube tutorial method that lets you learn Kajabi, Shopify, or any platform in **1-2 hours max**.",
      emphasized: false
    },
    {
      text: "The \"platform organization guide\" template (page 103) that you customize for each client—so they can **maintain your work** after you're done instead of letting it get messy again.",
      emphasized: true
    },
    {
      text: "How to answer **25 customer service questions per week** in under 3 hours total: Pre-written templates for the 10 most common questions, stored in Google Docs for instant copy-paste.",
      emphasized: false
    },
    {
      text: "Why BATCHING tasks saves you **20-30% of your time**: Check all client emails at once, do all spreadsheet work in one sitting, organize all platforms together. Stop switching contexts.",
      emphasized: true
    }
  ],
  
  theMoney: [
    {
      text: "The payment terms that protect you from non-payers.",
      emphasized: false
    },
    {
      text: "Payment Systems to use—and the exact invoice template (page 134) that gets you paid within **24 hours**.",
      emphasized: true
    },
    {
      text: "How to price yourself at $600/month without sounding expensive",
      emphasized: false
    },
    {
      text: "The biggest mistake new cleanup workers make",
      emphasized: true
    },
    {
      text: "When to raise your rates",
      emphasized: false
    },
    {
      text: "A counterintuitive truth about getting faster: As you learn the systems, tasks take HALF the time. You still **bill for the full time slot** because the VALUE to the client hasn't changed.",
      emphasized: true
    },
    {
      text: "Page 127 reveals the \"should you quit your job?\" decision matrix—and why you should wait until you've made **$3k+/month consistently for 6+ months** before even thinking about it.",
      emphasized: false
    },
    {
      text: "The three ways to scale past $2,000/month.",
      emphasized: true
    },
    {
      text: "Why **2-3 clients is the sweet spot**: $1,200-1,800/month for 10-15 hours per week. Comfortable, sustainable, doesn't interfere with your day job.",
      emphasized: false
    },
    {
      text: "What to do when a client is late on payment",
      emphasized: true
    },
    {
      text: "The \"payment plan option\" that helps cash-strapped clients: Split $600 into two **$300 payments** (1st and 15th of month). Same total, easier cash flow for them.",
      emphasized: false
    },
    {
      text: "How to fire a bad client without burning bridges: The professional exit script (page 156) that ends the relationship cleanly and still leaves room for **future referrals**.",
      emphasized: true
    },
    {
      text: "The referral request template that turns happy clients into your best salespeople—and why **month 3** is the perfect time to ask for introductions.",
      emphasized: false
    }
  ],
  
  theTruth: [
    {
      text: "The **four words** that will destroy your chances of landing new clients—even the ones who already want to hire you. (99% of beginners say this and tank their own deals.)",
      emphasized: true
    },
    {
      text: "Why offering \"unlimited hours\" or \"whatever you need\" makes you look **AMATEUR** instead of professional. (Specific scope = serious business person.)",
      emphasized: false
    },
    {
      text: "What to do when you accidentally delete something important or make a mistake.",
      emphasized: true
    },
    {
      text: "The one type of work you should REFUSE no matter how much they offer.",
      emphasized: false
    },
    {
      text: "Page 145 reveals the \"bad client warning signs\" (**Fire them after 2-3 months** if nothing improves.)",
      emphasized: true
    },
    {
      text: "A stupid mistake that costs you money",
      emphasized: false
    },
    {
      text: "Why you should NEVER compete on price",
      emphasized: true
    },
    {
      text: "The burnout warning signs that mean you took on too much",
      emphasized: false
    },
    {
      text: "What to do when a client is unhappy with your work",
      emphasized: true
    },
    {
      text: "The biggest lie in \"make money online\": That you can scale infinitely without trade-offs. Truth: More clients = more complexity. At some point you either **raise rates or hire help**. There's no magic solution.",
      emphasized: false
    }
  ],
  
  closingCompression: [
    "How to use Loom to create professional work demonstrations without fancy video editing software",
    "The exact Facebook groups where overwhelmed business owners are literally ASKING for help right now",
    "Who are your best target clients",
    "A simple Notion template for tracking multiple clients without losing your mind",
    "The \"oh shit I made a mistake\" recovery script that saves your reputation",
    "How to spot a time-waster in the first email",
    "The truth about \"passive income\": This isn't it, but $1,200/month for 10 hours/week is pretty damn close."
  ]
};

// ============================================================================
// COMPONENTS
// ============================================================================


type BulletIcon = 'check' | 'arrow' | 'star' | 'check-bold' | 'bullet';

const ICON_MAP: Record<BulletIcon, string> = {
  check: '✅',
  arrow: `➜`,
  star: '⭐',
  'check-bold': '✔',
  'bullet': '●',
};


// interface BulletsSectionProps {
//   className?: string; // For custom positioning on sales page
// }

interface BulletItemProps {
  text: string;
  emphasized?: boolean; // For alternating bold effect
  icon?: BulletIcon; // Variety
}





const BulletItem: React.FC<BulletItemProps> = ({
  text,
  emphasized = false,
  icon = 'arrow',
}) => {
  const parseBoldText = (str: string): React.ReactNode[] => {
    const parts = str.split(/(\*\*.*?\*\*)/g);

    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} className="font-bold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        );
      }

      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  return (
    <div className="flex items-start gap-3">
      <span className="text-xl shrink-0">{ICON_MAP[icon]}</span>
      <p className={emphasized ? 'font-semibold' : undefined}>
        {parseBoldText(text)}
      </p>
    </div>
  );
};



interface SectionHeaderProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

interface CompressionBulletsProps {
  bullets: readonly string[];
}





const SectionHeader: React.FC<SectionHeaderProps> = ({
  children,
  icon,
}) => (
  <div className="mb-8 pb-4 border-b-2 border-gray-200">
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 flex items-center gap-3">
      {icon && <span className="text-gray-400">{icon}</span>}
      {children}
    </h2>
  </div>
);




// const CompressionBullets: React.FC<CompressionBulletsProps> = ({
//   bullets,
// }) => (
//   <div className="bg-gray-50 border-2 border-gray-200 rounded-lg py-8">
//     <p className="text-base md:text-lg text-gray-700 leading-relaxed">
//       {bullets.map((bullet, index) => (
//         <span key={index}>
//           <strong className="font-semibold text-gray-900">
//             {bullet}
//           </strong>
//           {index < bullets.length - 1 && '... '}
//         </span>
//       ))}
//     </p>
//   </div>
// );


const CompressionBullets: React.FC<CompressionBulletsProps> = ({
  bullets,
}) => (
  <div className="bg-gray-50 border-2 border-gray-200 rounded-lg py-8 px-6">
    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
      {bullets.map((bullet, index) => {
        const isEmphasized = index % 2 === 0;

        return (
          <span key={index}>
            {isEmphasized ? (
              <strong className="font-semibold text-gray-900">
                {bullet}
              </strong>
            ) : (
              <span>{bullet}</span>
            )}
            {index < bullets.length - 1 && '... '}
          </span>
        );
      })}
    </p>
  </div>
);



// ============================================================================
// MAIN COMPONENT
// ============================================================================

const BulletsSection = ({ className = "" }) => {
  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
        <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Here's exactly what you get:</h2>
      </div>
      <div className="max-w-5xl mx-auto">
      {/* <div className="max-w-5xl mx-auto px-6 md:px-12"> */}
        
        {/* Opening Salvo Section */}
        <div className="mb-20">
          {/* <SectionHeader icon="⚡">Opening Salvo</SectionHeader> */}
          <ul className="space-y-2">
            {bulletsData.openingSalvo.map((bullet, index) => (
              <BulletItem 
                key={index} 
                text={bullet.text} 
                emphasized={bullet.emphasized}
                icon="arrow"
              />
            ))}
          </ul>
        </div>

        {/* The System Section */}
        <div className="mb-20">
          <SectionHeader icon="✓">And that’s just the beginning.</SectionHeader>
          <ul className="space-y-2">
            {bulletsData.theSystem.map((bullet, index) => (
              <BulletItem 
                key={index} 
                text={bullet.text} 
                emphasized={bullet.emphasized}
                icon="arrow"
              />
            ))}
          </ul>
        </div>

        {/* The Work Section */}
        <div className="mb-20">
          <SectionHeader icon="▶">Keep reading… it’s about to get even better."</SectionHeader>
          <ul className="space-y-2">
            {bulletsData.theWork.map((bullet, index) => (
              <BulletItem 
                key={index} 
                text={bullet.text} 
                emphasized={bullet.emphasized}
                icon="arrow"
              />
            ))}
          </ul>
        </div>

        {/* The Money Section */}
        <div className="mb-20">
          <SectionHeader icon="$">Just when you thought it couldn’t get better…</SectionHeader>
          <ul className="space-y-2">
            {bulletsData.theMoney.map((bullet, index) => (
              <BulletItem 
                key={index} 
                text={bullet.text} 
                emphasized={bullet.emphasized}
                icon="arrow"
              />
            ))}
          </ul>
        </div>

        {/* The Truth Section */}
        <div className="mb-20">
          <SectionHeader icon="⚠">Let’s go even further.</SectionHeader>
          <ul className="space-y-2">
            {bulletsData.theTruth.map((bullet, index) => (
              <BulletItem 
                key={index} 
                text={bullet.text} 
                emphasized={bullet.emphasized}
                icon="arrow"
              />
            ))}
          </ul>
        </div>

        {/* Closing Compression Section */}
        <div>
          <SectionHeader icon="★">And this is where it gets real.</SectionHeader>
          <CompressionBullets bullets={bulletsData.closingCompression} />
        </div>

      </div>
    </section>
  );
};

export default BulletsSection;