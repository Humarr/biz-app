import Hook from "@/components/Hook";
import Lead from "@/components/Lead";
import ProblemStory from "@/components/ProblemStory";
import Rant from "@/components/Rant";
import Hope from "@/components/Hope";
import Transformation from "@/components/Transformation";
import OfferTeaseSection from "@/components/Offer";
import HardSellSection from "@/components/HardSell";
import FAQSection from "@/components/FAQs";


export default function Sales() {
    return (
        <>
            <Hook />
            <Lead />
            <ProblemStory />
            <Rant />
            <Hope />
            <Transformation />
            <OfferTeaseSection />
            <HardSellSection />
            <FAQSection />
        </>
    );
}
