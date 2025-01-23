import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import Hero from "../pages/home/Hero";
import Why from "../pages/home/Why";
import CasesSection from "../layout/CasesSection";
import Pockets from "../pages/home/Pockets";
import Experts from "../pages/home/Experts";
import Benefits from "../pages/home/Benefits";
import Solutions from "../pages/home/Solutions";

import { getAll as getAllServiceCases } from "../data/cases.server";
import { getAll as getAllCritiques } from "../data/critiques.server";
// import { getAll as getAllExperts } from "../data/experts.server";

export const meta: MetaFunction = () => {
  return [
    { title: "F1LAB" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Services() {
  const { serviceCasesData, critiquesData } = useLoaderData();
  critiquesData[2] = critiquesData[0];
  critiquesData[3] = critiquesData[0];
  // const { serviceCasesData, critiquesData, expertsData } = useLoaderData();

  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col">
      <Hero />
      <Why />
      <Solutions />
      {/* <Experts
        expertsData={expertsData}
      /> */}
      <Benefits />
      <CasesSection
        title="Кейсы: как мы решаем задачи наших клиентов"
        mobileInverseColor={true}
        serviceCasesData={serviceCasesData}
        critiquesData={critiquesData}
      />
      <Pockets />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  const critiquesData = await getAllCritiques();
  // const expertsData = await getAllExperts();

  // return {critiquesData, serviceCasesData, expertsData};
  return {critiquesData, serviceCasesData};
}
