// app/page.tsx
'use client';

import React, { Suspense } from 'react';
import AutopsyReportContent from './AutopsyReportContent'

export default function AutopsyReportPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AutopsyReportContent />
    </Suspense>
  );
}
