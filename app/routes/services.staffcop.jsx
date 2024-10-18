import Hero from "../components/staffcop/Hero";
import Scenarios from "../components/staffcop/Scenarios";
import Offers from "../components/staffcop/Offers";
import Process from "../components/staffcop/Process";
import Cases from "../components/staffcop/Cases";
import Prices from "../components/staffcop/Prices";
import Pockets from "../components/staffcop/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "Staffcop", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function Staffcop() {
  return (
    <div className="flex flex-col lg:gap-100 sm:gap-[82px]">
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
