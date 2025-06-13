// app/sales6/oops/page.tsx
import { Suspense } from 'react';
import OopsMessage from '@/components/sales6/OopsMessage';

export default function OopsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 text-center">
      <Suspense fallback={<div className="text-xl">Loading your lecture... 🙄</div>}>
        <OopsMessage />
      </Suspense>
    </div>
  );
}
