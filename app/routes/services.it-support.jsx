import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/it-support/Hero";
import Scenarios from "../pages/it-support/Scenarios";
import Offers from "../pages/it-support/Offers";
import Process from "../pages/it-support/Process";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/it-support/Prices";
import Pockets from "../pages/it-support/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAll as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";

export const meta = () => {
  return [{ title: "F1LAB" }, { name: "ИТ-Техподдержка", content: "" }];
};

export default function ITAudit() {
  const { serviceCasesData, critiquesData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <Process />
      <CasesSection
        title="Примеры кейсов с техподдержкой"
        serviceCasesData={serviceCasesData}
        critiquesData={critiquesData}
      />
      <Prices />
      <Pockets />
      <TailwindCrutch />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  const critiquesData = await getAllCritiques();

  return { critiquesData, serviceCasesData };
}
