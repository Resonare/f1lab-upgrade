import Hero from "../components/audit/Hero";
import Scenarios from "../components/audit/Scenarios";
import Offers from "../components/audit/Offers";
import Process from "../components/audit/Process";
import Cases from "../components/audit/Cases";
import Prices from "../components/audit/Prices";
import Pockets from "../components/audit/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAll as getAllServiceCases } from "../data/cases.server";

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
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
