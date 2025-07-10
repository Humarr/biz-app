import ThankYouTracker from "@/components/biz/ThankYouTracker";
import { Suspense } from "react";

export default function ThankYouPage() {
  return (
    <main>
        <Suspense fallback={<div>Loading...</div>}>
            <ThankYouTracker />
        </Suspense>
    </main>
  );
}
