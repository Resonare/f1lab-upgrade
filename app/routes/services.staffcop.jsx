import Hero from "../pages/staffcop/Hero";
import Scenarios from "../pages/staffcop/Scenarios";
import Offers from "../pages/staffcop/Offers";
import Process from "../pages/staffcop/Process";
import Cases from "../pages/staffcop/Cases";
import Prices from "../pages/staffcop/Prices";
import Pockets from "../pages/staffcop/Pockets";
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
