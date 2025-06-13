// sales6/page.tsx
import Lead from "@/components/sales6/Lead";
import Hook from "@/components/sales6/Hook";
import ProblemStorySection from "@/components/sales6/ProblemStory";
import Rant from "@/components/sales6/Rant";
import Hope from "@/components/sales6/Hope";
import Transformation from "@/components/sales6/Transformation";
import Offer from "@/components/sales6/Offer";
import SoftSell from "@/components/sales6/SoftSell";
import Bonuses from "@/components/sales6/Bonuses";
import FAQs from "@/components/sales6/FAQs";
import HardSell from "@/components/sales6/HardSell";




export default function Sales6() {
    return (
        <>
            <Hook />
            <Lead/>
            <ProblemStorySection/>
            <Rant/>
            <Hope/>
            <Transformation/>
            <Offer/>
            <SoftSell/>
            <Bonuses/>
            <FAQs/>
            <HardSell/>
        </> 
    );
}
