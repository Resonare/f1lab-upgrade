import { useLoaderData } from "@remix-run/react";

import { getOne as getCase } from "../data/cases.server";
import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";

import CaseInfo from "../pages/item-case/CaseInfo";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/item-case/Prices";
import Pockets from "../pages/item-case/Pockets";

export const meta = () => {
  return [
    { title: "F1Lab | Кейсы" },
    { name: "Кейсы", content: "Кейсы ит-услуг F1Lab" },
  ];
};

export default function Case() {
  const { allServiceCasesData, critiquesData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <CaseInfo />
      <CasesSection
        title="Похожие кейсы"
        serviceCasesData={allServiceCasesData}
        critiquesData={critiquesData}
      />
      <Prices />
      {/* <Pockets /> */}
    </div>
  );
}

export async function loader({ params }) {
  const selectedCase = await getCase(params.caseId);

  if (selectedCase === undefined) {
    // If case not found
    throw new Response("Not Found", { status: 404 });
  }

  const allServiceCasesData = await getAllServiceCases();
  const critiquesData = await getAllCritiques();

  return { selectedCase, allServiceCasesData, critiquesData };
}
