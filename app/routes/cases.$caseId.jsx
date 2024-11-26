import { getOne as getCase } from "../data/cases.server";
import { getAll as getAllServiceCases } from "../data/cases.server";

import CaseInfo from "../pages/item-case/CaseInfo";
import Cases from "../pages/item-case/Cases";
import Prices from "../pages/item-case/Prices";
import Pockets from "../pages/item-case/Pockets";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Портфолио", content: "Welcome to Remix!" },
  ];
};

export default function Case() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <CaseInfo />
      <Cases />
      <Prices />
      <Pockets />
    </div>
  );
}

export async function loader({ params }) {
  const selectedCase = await getCase(params.caseId);
  const allCases = await getAllServiceCases();

  return { selectedCase, allCases };
}
