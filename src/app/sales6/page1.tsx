// sales6/page.tsx
import Hook from "@/components/sales6/Hook";
import Lead from "@/components/sales6/Lead";
import ProblemStorySection from "@/components/sales6/ProblemStory";
import ChoiceBreak from "@/components/sales6/ChoiceBreak";

export default function Sales6() {
    return (
        <>
            <Hook />
            <Lead />
            <ProblemStorySection />
            <ChoiceBreak 
              nextPage="/sales6/part2" 
              currentPage="/sales6"
              currentSection="problem-story"
            />
        </>
    );
}