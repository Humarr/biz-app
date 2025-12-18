/* eslint-disable react/no-unescaped-entities */
// components/CheckmarkList.tsx
export default function CheckmarkList() {
  return (
    <div className="my-8 space-y-4">
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT a course on "financial freedom"</p>
      </div>
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT a "six figure blueprint"</p>
      </div>
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT a "passive income system"</p>
      </div>
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT a side hustle that becomes another full-time job</p>
      </div>
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT something that requires money upfront</p>
      </div>
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT something that requires you to quit your job</p>
      </div>
      <div className="flex items-start">
        <span className="mr-3 text-gray-600">✓</span>
        <p className="text-lg">NOT something complex that takes months to learn</p>
      </div>
    </div>
  );
}