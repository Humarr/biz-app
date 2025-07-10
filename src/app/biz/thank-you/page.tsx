import { useSearchParams } from "next/navigation";


export default function ThankYouPage() {
    const searchParams = useSearchParams();
    const ref = searchParams.get("ref");
    console.log(ref);
    return (
        <main>
            <h1>Thank You for your purchase
            <p>Reference: {ref}</p></h1>
        </main>
    )
}