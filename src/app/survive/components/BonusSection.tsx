/* eslint-disable react/no-unescaped-entities */
// components/BonusSection.tsx
export default function BonusSection() {
  const bonuses = [
    {
      icon: "📝",
      title: "The Message Templates",
      items: [
        "Word-for-word messages to send (for free work and paid work)",
        "How to modify them for different types of businesses",
        "What to say when they respond",
        "How to handle every question they'll ask"
      ]
    },
    {
      icon: "🔍",
      title: "The Client Finder System",
      items: [
        "Exactly where to find these businesses (specific groups, platforms, searches)",
        "How to identify who actually needs this (so you're not wasting time)",
        "How to send 20 messages in under 30 minutes"
      ]
    },
    {
      icon: "🛠️",
      title: "The Work Breakdown",
      items: [
        "Step-by-step what to do for each type of work",
        "Screenshots of exactly what 'cleaning an email list' actually looks like",
        "How to use ConvertKit, Mailchimp, and other platforms (even if you've never touched them)",
        "Templates for organizing their data",
        "Scripts for handling customer service"
      ]
    },
    {
      icon: "🗺️",
      title: "The First Client Roadmap",
      items: [
        "Exactly what to do in hour 1, hour 2, hour 3 of your first free project",
        "How to document your work so it looks professional",
        "What to send them when you're done",
        "How to ask for testimonial + transition to paid"
      ]
    },
    {
      icon: "📊",
      title: "The Pricing & Scaling Guide",
      items: [
        "How to position $600/month so they say yes",
        "When to raise your rates (and to how much)",
        "How to add client #3 without burning out",
        "What to do when you hit $2k/month (and whether to quit your job)"
      ]
    },
    {
      icon: "🚨",
      title: "The 'Oh Shit' Scenarios",
      items: [
        "What to do when a client asks you to do something you don't know how to do",
        "How to handle a client who's unhappy",
        "What to say when they want to negotiate price",
        "How to fire a bad client"
      ]
    }
  ];

  return (
    <div className="my-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Here's exactly what you get:</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bonuses.map((bonus, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">{bonus.icon}</span>
              <h3 className="text-xl font-bold">{bonus.title}</h3>
            </div>
            <ul className="space-y-3">
              {bonus.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start">
                  <span className="mr-2 text-gray-600">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-300">
        <div className="flex items-center justify-center mb-4">
          <span className="text-3xl mr-3">💬</span>
          <h3 className="text-2xl font-bold">Plus you get access to me.</h3>
        </div>
        <p className="text-center text-lg">I check messages every day. You get stuck, you ask. I answer.</p>
      </div>
    </div>
  );
}