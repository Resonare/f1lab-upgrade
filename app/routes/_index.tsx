import type { MetaFunction } from "@remix-run/node";

import Hero from "../pages/home/Hero";
import Why from "../pages/home/Why";
import CasesSection from "../layout/CasesSection";
import Pockets from "../pages/home/Pockets";
import Benefits from "../pages/home/Benefits";
import Solutions from "../pages/home/Solutions";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta: MetaFunction = () => {
  return [
    { title: "F1LAB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col">
      <Hero />
      <Why />
      <Solutions />
      <Benefits />
      <CasesSection
        title="Кейсы: как мы решаем задачи наших клиентов"
        mobileInverseColor={true}
      />
      <Pockets />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
