// sales6-part3/page.tsx
import Offer from "@/components/sales6/Offer";
import SoftSell from "@/components/sales6/SoftSell";
import Bonuses from "@/components/sales6/Bonuses";
import Transformation from "@/components/sales6/Transformation";
import ChoiceBreak from "@/components/sales6/ChoiceBreak";

export default function Sales6Part3() {
    return (
        <>
        <Transformation />
            <Offer />
            <SoftSell />
            <Bonuses />
            <ChoiceBreak
            nextPage="/sales6/part4"
            currentPage="/sales6/part3"
            currentSection="bonuses" />
          
        </>
    );
}