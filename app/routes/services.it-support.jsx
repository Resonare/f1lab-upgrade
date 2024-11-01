import Hero from "../components/it-support/Hero";
import Scenarios from "../components/it-support/Scenarios";
import Offers from "../components/it-support/Offers";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [{ title: "F1LAB" }, { name: "ИТ-Техподдержка", content: "" }];
};

export default function ITAudit() {
  return (
    <div className="flex flex-col lg:gap-200 sm:gap-[82px]">
      <Hero />
      <Scenarios />
      <Offers />
      <TailwindCrutch />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
