import Hero from "../pages/cloud-1c/Hero";
import Scenarios from "../pages/cloud-1c/Scenarios";
import Offers from "../pages/cloud-1c/Offers";
import Process from "../pages/cloud-1c/Process";
import CasesSection from "../layout/CasesSection";
import Prices from "../pages/cloud-1c/Prices";
import Pockets from "../pages/cloud-1c/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function Cloud1C() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-200 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <Process />
      <CasesSection title="Примеры кейсов с облачной инфраструктурой" />
      <Prices />
      <Pockets />
      <TailwindCrutch />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
