import Hook from "@/components/sales2/Hook";
import Lead from "@/components/sales2/Lead";
import ProblemStory from "@/components/sales2/ProblemStory";
import Rant from "@/components/sales2/Rant";
import Hope from "@/components/sales2/Hope";
import Transformation from "@/components/sales2/Transformation";
import OfferTeaseSection from "@/components/sales2/Offer";
import HardSellSection from "@/components/sales2/HardSell";
import FAQSection from "@/components/sales2/FAQs";
import BonusesSection from "@/components/sales2/Bonuses";
import SoftSellSection from "@/components/sales2/SoftSell";


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
            <SoftSellSection />
            <FAQSection />
            <BonusesSection />
            <HardSellSection />
        </>
    );
}
