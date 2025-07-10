"use client";

import { useSearchParams } from "next/navigation";

export default function ThankYouTracker() {
    const searchParams = useSearchParams();
    const ref = searchParams.get("ref");
    console.log(ref);
    return (
        <div>
            <h1>Thank You Tracker</h1>
            <p>Reference: {ref}</p>
        </div>
    )
}