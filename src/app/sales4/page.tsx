import Hook from "@/components/sales4/Hook";
import Lead from "@/components/sales4/Lead";
// import ProblemStory from "@/components/sales4/ProblemStory";
import Rant from "@/components/sales4/Rant";
import Hope from "@/components/sales4/Hope";
import Transformation from "@/components/sales4/Transformation";
import OfferTeaseSection from "@/components/sales4/Offer";
import HardSellSection from "@/components/sales4/HardSell";
import HardSellSection2 from "@/components/sales4/HardSell2";
import BonusesSection from "@/components/sales4/Bonuses";
import FAQSection from "@/components/sales4/FAQs";
import SoftSellSection from "@/components/sales4/SoftSell";


export default function Sales() {
    return (
        <>
            <Hook />
            <Lead />
            {/* <ProblemStory /> */}
            <Rant />
            <Hope />
            <Transformation />
            <OfferTeaseSection />
            <SoftSellSection />
            <FAQSection />
            <HardSellSection />
            <BonusesSection />
            <HardSellSection2 />
        </>
    );
}
