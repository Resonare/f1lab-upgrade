import Hero from "../pages/staffcop/Hero";
import Scenarios from "../pages/staffcop/Scenarios";
import Offers from "../pages/staffcop/Offers";
import Process from "../pages/staffcop/Process";
import Prices from "../pages/staffcop/Prices";
import Pockets from "../pages/staffcop/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import CasesSection from "../layout/CasesSection";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Staffcop", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function Staffcop() {
  return (
    <div className="2xl:border-x border-gray-200 border-dashed flex flex-col lg:gap-100 sm:gap-[82px] lg:pt-90 pt-[70px]">
      <Hero />
      <Scenarios />
      <Offers />
      <Process />
      <CasesSection title="Примеры кейсов со Staffcop" />
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
