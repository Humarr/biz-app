// File: /app/cashology/congrats/page.tsx
import { Suspense } from 'react';
import Congrats from './Congrats';

export default function CongratsPage() {
  return (
    <Suspense fallback={<div className="p-8 text-center">Loading...</div>}>
      <Congrats />
    </Suspense>
  );
}
