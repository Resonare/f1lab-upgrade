import { useState } from "react";

import Hero from "../components/consulting/Hero";
import Scenarios from "../components/consulting/Scenarios";
import Offers from "../components/consulting/Offers";
import Process from "../components/consulting/Process";
import Cases from "../components/consulting/Cases";
import Prices from "../components/consulting/Prices";
import Pockets from "../components/consulting/Pockets";
import TailwindCrutch from "../components/misc/TailwindCrutch";
import RecallModal from "../components/modals/RecallModal";
import TariffModal from "../components/modals/tariff/TariffModal";

import { getAll as getAllServiceCases } from "../data/cases.server";

export const meta = () => {
  return [
    { title: "F1LAB" },
    { name: "ИТ-Аудит", content: "ИТ‑аудит с применимыми рекомендациями" },
  ];
};

export default function ITAudit() {
  const [tariffModalOpened, setTariffModalOpened] = useState(false);
  const [tariffModalData, setTariffModalData] = useState({});
  const [recallModalOpened, setRecallModalOpened] = useState(false);

  const handleTariffModalOpen = (tariffData) => {
    setTariffModalOpened(true);
    setTariffModalData(tariffData);
    document.body.style.overflow = "hidden";
  };

  const handleTariffModalClose = () => {
    setTariffModalOpened(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div className="flex flex-col lg:gap-200 sm:gap-[82px]">
      <Hero />
      <Scenarios />
      <Offers />
      <Process />
      <Cases />
      <Prices onTariffModalOpen={handleTariffModalOpen} />
      <Pockets />
      <TailwindCrutch />
      {/* <RecallModal /> */}
      <TariffModal
        opened={tariffModalOpened}
        onTariffModalClose={handleTariffModalClose}
        tariffModalData={tariffModalData}
      />
    </div>
  );
}

export async function loader() {
  const serviceCasesData = await getAllServiceCases();
  return serviceCasesData;
}
