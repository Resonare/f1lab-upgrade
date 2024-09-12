import Hero from "../components/consulting/Hero";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";
import Process from "../components/consulting/Process";
import Cases from "../components/consulting/Cases";
import Prices from "../components/consulting/Prices";
import Pockets from "../components/consulting/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import RecallModal from "../components/modals/RecallModal";

import { getAll as getAllServiceCases } from "../data/cases.server";
import TariffModal from "../components/modals/TariffModal";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  return (
    <div className="flex flex-col lg:gap-200 sm:gap-[82px]">
      <Hero />
      <Scenarios />
      <Offers />
      <Process />
      <Cases />
      <Prices />
      <Pockets />
      <TailwindCrutch />
      {/* <RecallModal /> */}
      {/* <TariffModal /> */}
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
