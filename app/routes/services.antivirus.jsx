import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/antivirus/Hero";
import Scenarios from "../pages/antivirus/Scenarios";
import Offers from "../pages/antivirus/Offers";
import ProcessSection from "../layout/ProcessSection";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/antivirus/Prices";
import Pockets from "../pages/antivirus/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAllPublished as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
import Trial from "../pages/antivirus/Trial";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Pro32", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  const { serviceCasesData, critiquesData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <ProcessSection title="Процесс внедрения антивирусного решения" />
      <Trial />
      <CasesSection
        title="Кейсы: как мы решаем задачи наших клиентов"
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
