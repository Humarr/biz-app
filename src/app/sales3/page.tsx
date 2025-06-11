import Hook from "@/components/sales3/Hook";
import Lead from "@/components/sales3/Lead";
import ProblemStory from "@/components/sales3/ProblemStory";
import Rant from "@/components/sales3/Rant";
// import Hope from "@/components/sales3/Hope";
// import Transformation from "@/components/sales3/Transformation";
// import OfferTeaseSection from "@/components/sales3/Offer";
// import HardSellSection from "@/components/sales3/HardSell";
// import FAQSection from "@/components/sales3/FAQs";
// import BonusesSection from "@/components/sales3/Bonuses";
// import SoftSellSection from "@/components/sales3/SoftSell";


export default function Sales() {
    return (
        <>
            <Hook />
            <Lead />
            <ProblemStory />
            <Rant />
            {/* <Hope />
            <Transformation />
            <OfferTeaseSection />
            <SoftSellSection />
            <FAQSection />
            <BonusesSection />
            <HardSellSection /> */}
        </>
    );
}
