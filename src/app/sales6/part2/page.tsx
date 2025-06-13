// sales6/part2/page.tsx
import Rant from "@/components/sales6/Rant";
import Hope from "@/components/sales6/Hope";
import Transformation from "@/components/sales6/Transformation";
import ChoiceBreak from "@/components/sales6/ChoiceBreak";

export default function Sales6Part2() {
    return (
        <>
            <Rant />
            <Hope />
            <Transformation />
            <ChoiceBreak
              nextPage="/sales6/part3"
              currentPage="/sales6/part2" 
              currentSection="transformation"
            />
        </>
    );
}