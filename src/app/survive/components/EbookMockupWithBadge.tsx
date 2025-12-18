// components/EbookMockupWithBadge.tsx
import Image from 'next/image';

export default function EbookMockupWithBadge() {
  return (
    <div className="my-12 relative">
      <div className="max-w-2xl mx-auto">
        {/* Price Badge */}
        <div className="absolute -top-4 -right-4 z-10">
          <div className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg">
            <div className="text-center">
              <div className="text-2xl font-bold">₦5,000</div>
              <div className="text-xs opacity-90">One-time</div>
            </div>
          </div>
        </div>
        
        {/* Image */}
        <div className="relative w-full h-[350px] md:h-[450px] rounded-lg overflow-hidden">
          <Image
            src="/mockups/cleanup-client-blueprint.png"
            alt="THE CLEANUP CLIENT BLUEPRINT ebook - Only ₦5,000 or $47"
            fill
            sizes="(max-width: 768px) 100vw, 70vw"
            className="object-cover"
            priority
          />
        </div>


           {/* Optional CTA button below */}
        <div className="text-center mt-8">
            <a href='https://selar.com/cleanup'>

          <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-800 transition-colors cursor-pointer shadow-2xl border-2 border-gray-800 border-dotted">
            GET THE CLEANUP CLIENT BLUEPRINT - ₦5,000
          </button>
            </a>
          <p className="text-gray-600 text-sm mt-2">
            One-time payment • 90-day guarantee 
            {/* • Includes all formats */}
          </p>
        </div>
      </div>
    </div>
  );
}