import { getOne as getCase } from "../data/cases.server";
import CaseInfo from "../pages/portfolio/CaseInfo";

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
    </div>
  );
}

export async function loader({ params }) {
  const caseData = await getCase(params.caseId);

  return caseData;
}
